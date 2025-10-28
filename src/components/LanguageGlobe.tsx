import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface LanguageGlobeProps {
  language: 'en' | 'it';
  onClick: () => void;
}

export function LanguageGlobe({ language, onClick }: LanguageGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const bounceRef = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(64, 64);
    renderer.setPixelRatio(window.devicePixelRatio);

    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshPhongMaterial({
      color: 0x28a745,
      flatShading: true,
      shininess: 50,
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphereRef.current = sphere;
    scene.add(sphere);

    const wireframe = new THREE.WireframeGeometry(geometry);
    const line = new THREE.LineSegments(wireframe);
    (line.material as THREE.LineBasicMaterial).color.setHex(0xffffff);
    (line.material as THREE.LineBasicMaterial).opacity = 0.6;
    (line.material as THREE.LineBasicMaterial).transparent = true;
    sphere.add(line);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(3, 3, 5);
    scene.add(pointLight);

    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (sphere) {
        sphere.rotation.y += 0.015;
        sphere.rotation.x += 0.008;

        if (bounceRef.current > 0) {
          const t = bounceRef.current;
          const bounce = Math.sin(t * Math.PI * 2) * 0.6 * t;
          const wobble = Math.sin(t * Math.PI * 4) * 0.3 * t;
          
          sphere.position.y = bounce;
          sphere.position.x = wobble * 0.4;
          sphere.rotation.z = Math.sin(t * Math.PI * 3) * 0.8;
          
          const scale = 1 + Math.sin(t * Math.PI * 3) * 0.3;
          sphere.scale.set(scale, scale, scale);
          
          bounceRef.current -= 0.035;
        } else {
          sphere.position.y = 0;
          sphere.position.x = 0;
          sphere.rotation.z = 0;
          sphere.scale.set(1, 1, 1);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      wireframe.dispose();
      (line.material as THREE.LineBasicMaterial).dispose();
      renderer.dispose();
    };
  }, []);

  const handleClick = () => {
    bounceRef.current = 1;
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="relative flex items-center justify-center w-16 h-16 hover:bg-gray-50 rounded-lg transition-all duration-200"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ width: '64px', height: '64px', margin: 'auto' }}
      />
      <span className="relative z-10 text-xs font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
        {language.toUpperCase()}
      </span>
    </button>
  );
}
