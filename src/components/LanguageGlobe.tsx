import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface LanguageGlobeProps {
  language: 'en' | 'it';
  onClick: () => void;
}

type Shard = {
  mesh: THREE.Mesh;
  origin: THREE.Vector3;
  direction: THREE.Vector3;
  spin: THREE.Vector3;
  geometry: THREE.BufferGeometry;
  edges: THREE.EdgesGeometry;
};

const EXPLOSION_DURATION = 760;

export function LanguageGlobe({ language, onClick }: LanguageGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const explodeRef = useRef<(() => void) | null>(null);
  const navigationTimerRef = useRef<number | null>(null);
  const navigatingRef = useRef(false);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.z = 3.35;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(88, 88, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const interactionGroup = new THREE.Group();
    const spinGroup = new THREE.Group();
    interactionGroup.add(spinGroup);
    scene.add(interactionGroup);

    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshPhongMaterial({
      color: 0x28a745,
      flatShading: true,
      shininess: 55,
    });
    const sphere = new THREE.Mesh(geometry, material);
    spinGroup.add(sphere);

    const wireframe = new THREE.WireframeGeometry(geometry);
    const wireMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      opacity: 0.62,
      transparent: true,
    });
    sphere.add(new THREE.LineSegments(wireframe, wireMaterial));

    const shardsGroup = new THREE.Group();
    shardsGroup.visible = false;
    spinGroup.add(shardsGroup);

    const shardMaterial = new THREE.MeshPhongMaterial({
      color: 0x28a745,
      flatShading: true,
      shininess: 70,
      side: THREE.DoubleSide,
    });
    const shardLineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      opacity: 0.72,
      transparent: true,
    });
    const explodedGeometry = geometry.index ? geometry.toNonIndexed() : geometry.clone();
    const positions = explodedGeometry.getAttribute('position');
    const shards: Shard[] = [];

    for (let index = 0; index < positions.count; index += 3) {
      const a = new THREE.Vector3().fromBufferAttribute(positions, index);
      const b = new THREE.Vector3().fromBufferAttribute(positions, index + 1);
      const c = new THREE.Vector3().fromBufferAttribute(positions, index + 2);
      const origin = a.clone().add(b).add(c).divideScalar(3);
      const localPositions = new Float32Array([
        a.x - origin.x, a.y - origin.y, a.z - origin.z,
        b.x - origin.x, b.y - origin.y, b.z - origin.z,
        c.x - origin.x, c.y - origin.y, c.z - origin.z,
      ]);

      const shardGeometry = new THREE.BufferGeometry();
      shardGeometry.setAttribute('position', new THREE.BufferAttribute(localPositions, 3));
      shardGeometry.computeVertexNormals();

      const shard = new THREE.Mesh(shardGeometry, shardMaterial);
      shard.position.copy(origin);
      const edges = new THREE.EdgesGeometry(shardGeometry);
      shard.add(new THREE.LineSegments(edges, shardLineMaterial));
      shardsGroup.add(shard);

      const direction = origin.clone().normalize();
      direction.x += (Math.random() - 0.5) * 0.22;
      direction.y += (Math.random() - 0.5) * 0.22;
      direction.z += (Math.random() - 0.5) * 0.22;
      direction.normalize().multiplyScalar(0.82 + Math.random() * 0.38);

      shards.push({
        mesh: shard,
        origin,
        direction,
        spin: new THREE.Vector3(
          (Math.random() - 0.5) * 3.4,
          (Math.random() - 0.5) * 3.4,
          (Math.random() - 0.5) * 3.4,
        ),
        geometry: shardGeometry,
        edges,
      });
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.05);
    pointLight.position.set(3, 3, 5);
    scene.add(pointLight);

    const pointer = new THREE.Vector2(0, 0);
    const smoothedPointer = new THREE.Vector2(0, 0);
    let animationId = 0;
    let previousTime = performance.now();
    let explosionStartedAt: number | null = null;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    reduceMotionRef.current = reduceMotion;

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handlePointerLeave = () => {
      pointer.set(0, 0);
    };

    if (!reduceMotion) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      document.documentElement.addEventListener('pointerleave', handlePointerLeave);
    }

    explodeRef.current = () => {
      if (reduceMotion || explosionStartedAt !== null) return;
      explosionStartedAt = performance.now();
      sphere.visible = false;
      shardsGroup.visible = true;
    };

    const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);

    const animate = (time: number) => {
      const delta = Math.min(time - previousTime, 32);
      previousTime = time;

      smoothedPointer.lerp(pointer, 0.055);
      interactionGroup.rotation.x += (-smoothedPointer.y * 0.58 - interactionGroup.rotation.x) * 0.07;
      interactionGroup.rotation.y += (smoothedPointer.x * 0.82 - interactionGroup.rotation.y) * 0.07;
      interactionGroup.position.x += (smoothedPointer.x * 0.12 - interactionGroup.position.x) * 0.06;
      interactionGroup.position.y += (-smoothedPointer.y * 0.1 - interactionGroup.position.y) * 0.06;

      spinGroup.rotation.y += delta * 0.00055;
      spinGroup.rotation.x += delta * 0.00022;

      if (explosionStartedAt !== null) {
        const progress = Math.min((time - explosionStartedAt) / EXPLOSION_DURATION, 1);
        const blast = easeOutCubic(progress);
        camera.position.z = 3.35 + blast * 1.65;
        pointLight.intensity = 1.05 + Math.sin(Math.min(progress * 2, 1) * Math.PI) * 3.2;

        shards.forEach(({ mesh, origin, direction, spin }) => {
          mesh.position.copy(origin).addScaledVector(direction, blast * 1.25);
          mesh.rotation.set(spin.x * blast, spin.y * blast, spin.z * blast);
          const scale = 1 - progress * 0.22;
          mesh.scale.setScalar(scale);
        });
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    if (reduceMotion) {
      renderer.render(scene, camera);
    } else {
      animationId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave);
      explodeRef.current = null;
      geometry.dispose();
      material.dispose();
      wireframe.dispose();
      wireMaterial.dispose();
      explodedGeometry.dispose();
      shards.forEach(({ geometry: shardGeometry, edges }) => {
        shardGeometry.dispose();
        edges.dispose();
      });
      shardMaterial.dispose();
      shardLineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  useEffect(() => () => {
    if (navigationTimerRef.current !== null) {
      window.clearTimeout(navigationTimerRef.current);
    }
  }, []);

  const handleClick = () => {
    if (navigatingRef.current) return;
    navigatingRef.current = true;

    if (reduceMotionRef.current || !explodeRef.current) {
      onClick();
      return;
    }

    if (labelRef.current) {
      labelRef.current.style.opacity = '0';
    }
    explodeRef.current();
    navigationTimerRef.current = window.setTimeout(onClick, EXPLOSION_DURATION - 80);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="relative flex h-14 w-14 items-center justify-center rounded-lg transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#218838]"
      aria-label={language === 'it' ? 'Passa al sito in inglese' : 'Switch to the Italian website'}
      title={language === 'it' ? 'English' : 'Italiano'}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: '88px', height: '88px' }}
        aria-hidden="true"
      />
      <span
        ref={labelRef}
        className="relative z-10 text-xs font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-opacity duration-150"
      >
        {language.toUpperCase()}
      </span>
    </button>
  );
}
