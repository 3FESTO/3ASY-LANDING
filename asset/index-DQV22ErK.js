(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Gf={exports:{}},xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function rS(){if(u_)return xo;u_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return xo.Fragment=e,xo.jsx=i,xo.jsxs=i,xo}var f_;function sS(){return f_||(f_=1,Gf.exports=rS()),Gf.exports}var Bt=sS(),Vf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function oS(){if(h_)return se;h_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function v(O,nt,St){this.props=O,this.context=nt,this.refs=y,this.updater=St||b}v.prototype.isReactComponent={},v.prototype.setState=function(O,nt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,nt,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function L(){}L.prototype=v.prototype;function U(O,nt,St){this.props=O,this.context=nt,this.refs=y,this.updater=St||b}var D=U.prototype=new L;D.constructor=U,R(D,v.prototype),D.isPureReactComponent=!0;var H=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function w(O,nt,St){var bt=St.ref;return{$$typeof:o,type:O,key:nt,ref:bt!==void 0?bt:null,props:St}}function C(O,nt){return w(O.type,nt,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function tt(O){var nt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(St){return nt[St]})}var ct=/\/+/g;function gt(O,nt){return typeof O=="object"&&O!==null&&O.key!=null?tt(""+O.key):nt.toString(36)}function ft(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(nt){O.status==="pending"&&(O.status="fulfilled",O.value=nt)},function(nt){O.status==="pending"&&(O.status="rejected",O.reason=nt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function z(O,nt,St,bt,Nt){var it=typeof O;(it==="undefined"||it==="boolean")&&(O=null);var ot=!1;if(O===null)ot=!0;else switch(it){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(O.$$typeof){case o:case e:ot=!0;break;case x:return ot=O._init,z(ot(O._payload),nt,St,bt,Nt)}}if(ot)return Nt=Nt(O),ot=bt===""?"."+gt(O,0):bt,H(Nt)?(St="",ot!=null&&(St=ot.replace(ct,"$&/")+"/"),z(Nt,nt,St,"",function(kt){return kt})):Nt!=null&&(G(Nt)&&(Nt=C(Nt,St+(Nt.key==null||O&&O.key===Nt.key?"":(""+Nt.key).replace(ct,"$&/")+"/")+ot)),nt.push(Nt)),1;ot=0;var wt=bt===""?".":bt+":";if(H(O))for(var It=0;It<O.length;It++)bt=O[It],it=wt+gt(bt,It),ot+=z(bt,nt,St,it,Nt);else if(It=M(O),typeof It=="function")for(O=It.call(O),It=0;!(bt=O.next()).done;)bt=bt.value,it=wt+gt(bt,It++),ot+=z(bt,nt,St,it,Nt);else if(it==="object"){if(typeof O.then=="function")return z(ft(O),nt,St,bt,Nt);throw nt=String(O),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ot}function Z(O,nt,St){if(O==null)return O;var bt=[],Nt=0;return z(O,bt,"","",function(it){return nt.call(St,it,Nt++)}),bt}function j(O){if(O._status===-1){var nt=O._result;nt=nt(),nt.then(function(St){(O._status===0||O._status===-1)&&(O._status=1,O._result=St)},function(St){(O._status===0||O._status===-1)&&(O._status=2,O._result=St)}),O._status===-1&&(O._status=0,O._result=nt)}if(O._status===1)return O._result.default;throw O._result}var vt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Mt={map:Z,forEach:function(O,nt,St){Z(O,function(){nt.apply(this,arguments)},St)},count:function(O){var nt=0;return Z(O,function(){nt++}),nt},toArray:function(O){return Z(O,function(nt){return nt})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return se.Activity=_,se.Children=Mt,se.Component=v,se.Fragment=i,se.Profiler=l,se.PureComponent=U,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,se.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},se.cache=function(O){return function(){return O.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(O,nt,St){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var bt=R({},O.props),Nt=O.key;if(nt!=null)for(it in nt.key!==void 0&&(Nt=""+nt.key),nt)!k.call(nt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&nt.ref===void 0||(bt[it]=nt[it]);var it=arguments.length-2;if(it===1)bt.children=St;else if(1<it){for(var ot=Array(it),wt=0;wt<it;wt++)ot[wt]=arguments[wt+2];bt.children=ot}return w(O.type,Nt,bt)},se.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},se.createElement=function(O,nt,St){var bt,Nt={},it=null;if(nt!=null)for(bt in nt.key!==void 0&&(it=""+nt.key),nt)k.call(nt,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Nt[bt]=nt[bt]);var ot=arguments.length-2;if(ot===1)Nt.children=St;else if(1<ot){for(var wt=Array(ot),It=0;It<ot;It++)wt[It]=arguments[It+2];Nt.children=wt}if(O&&O.defaultProps)for(bt in ot=O.defaultProps,ot)Nt[bt]===void 0&&(Nt[bt]=ot[bt]);return w(O,it,Nt)},se.createRef=function(){return{current:null}},se.forwardRef=function(O){return{$$typeof:d,render:O}},se.isValidElement=G,se.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:j}},se.memo=function(O,nt){return{$$typeof:p,type:O,compare:nt===void 0?null:nt}},se.startTransition=function(O){var nt=P.T,St={};P.T=St;try{var bt=O(),Nt=P.S;Nt!==null&&Nt(St,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(F,vt)}catch(it){vt(it)}finally{nt!==null&&St.types!==null&&(nt.types=St.types),P.T=nt}},se.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},se.use=function(O){return P.H.use(O)},se.useActionState=function(O,nt,St){return P.H.useActionState(O,nt,St)},se.useCallback=function(O,nt){return P.H.useCallback(O,nt)},se.useContext=function(O){return P.H.useContext(O)},se.useDebugValue=function(){},se.useDeferredValue=function(O,nt){return P.H.useDeferredValue(O,nt)},se.useEffect=function(O,nt){return P.H.useEffect(O,nt)},se.useEffectEvent=function(O){return P.H.useEffectEvent(O)},se.useId=function(){return P.H.useId()},se.useImperativeHandle=function(O,nt,St){return P.H.useImperativeHandle(O,nt,St)},se.useInsertionEffect=function(O,nt){return P.H.useInsertionEffect(O,nt)},se.useLayoutEffect=function(O,nt){return P.H.useLayoutEffect(O,nt)},se.useMemo=function(O,nt){return P.H.useMemo(O,nt)},se.useOptimistic=function(O,nt){return P.H.useOptimistic(O,nt)},se.useReducer=function(O,nt,St){return P.H.useReducer(O,nt,St)},se.useRef=function(O){return P.H.useRef(O)},se.useState=function(O){return P.H.useState(O)},se.useSyncExternalStore=function(O,nt,St){return P.H.useSyncExternalStore(O,nt,St)},se.useTransition=function(){return P.H.useTransition()},se.version="19.2.0",se}var d_;function gd(){return d_||(d_=1,Vf.exports=oS()),Vf.exports}var gs=gd(),Xf={exports:{}},So={},kf={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function lS(){return p_||(p_=1,(function(o){function e(z,Z){var j=z.length;z.push(Z);t:for(;0<j;){var vt=j-1>>>1,Mt=z[vt];if(0<l(Mt,Z))z[vt]=Z,z[j]=Mt,j=vt;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Z=z[0],j=z.pop();if(j!==Z){z[0]=j;t:for(var vt=0,Mt=z.length,O=Mt>>>1;vt<O;){var nt=2*(vt+1)-1,St=z[nt],bt=nt+1,Nt=z[bt];if(0>l(St,j))bt<Mt&&0>l(Nt,St)?(z[vt]=Nt,z[bt]=j,vt=bt):(z[vt]=St,z[nt]=j,vt=nt);else if(bt<Mt&&0>l(Nt,j))z[vt]=Nt,z[bt]=j,vt=bt;else break t}}return Z}function l(z,Z){var j=z.sortIndex-Z.sortIndex;return j!==0?j:z.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,_=null,S=3,M=!1,b=!1,R=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=z)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function H(z){if(R=!1,D(z),!b)if(i(m)!==null)b=!0,F||(F=!0,tt());else{var Z=i(p);Z!==null&&ft(H,Z.startTime-z)}}var F=!1,P=-1,k=5,w=-1;function C(){return y?!0:!(o.unstable_now()-w<k)}function G(){if(y=!1,F){var z=o.unstable_now();w=z;var Z=!0;try{t:{b=!1,R&&(R=!1,L(P),P=-1),M=!0;var j=S;try{e:{for(D(z),_=i(m);_!==null&&!(_.expirationTime>z&&C());){var vt=_.callback;if(typeof vt=="function"){_.callback=null,S=_.priorityLevel;var Mt=vt(_.expirationTime<=z);if(z=o.unstable_now(),typeof Mt=="function"){_.callback=Mt,D(z),Z=!0;break e}_===i(m)&&r(m),D(z)}else r(m);_=i(m)}if(_!==null)Z=!0;else{var O=i(p);O!==null&&ft(H,O.startTime-z),Z=!1}}break t}finally{_=null,S=j,M=!1}Z=void 0}}finally{Z?tt():F=!1}}}var tt;if(typeof U=="function")tt=function(){U(G)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,gt=ct.port2;ct.port1.onmessage=G,tt=function(){gt.postMessage(null)}}else tt=function(){v(G,0)};function ft(z,Z){P=v(function(){z(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var j=S;S=Z;try{return z()}finally{S=j}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var j=S;S=z;try{return Z()}finally{S=j}},o.unstable_scheduleCallback=function(z,Z,j){var vt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?vt+j:vt):j=vt,z){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=j+Mt,z={id:x++,callback:Z,priorityLevel:z,startTime:j,expirationTime:Mt,sortIndex:-1},j>vt?(z.sortIndex=j,e(p,z),i(m)===null&&z===i(p)&&(R?(L(P),P=-1):R=!0,ft(H,j-vt))):(z.sortIndex=Mt,e(m,z),b||M||(b=!0,F||(F=!0,tt()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var Z=S;return function(){var j=S;S=Z;try{return z.apply(this,arguments)}finally{S=j}}}})(Wf)),Wf}var m_;function cS(){return m_||(m_=1,kf.exports=lS()),kf.exports}var qf={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function uS(){if(g_)return Tn;g_=1;var o=gd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,x)},Tn.flushSync=function(m){var p=h.T,x=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=x,r.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,_=d(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):x==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,_=d(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.2.0",Tn}var __;function fS(){if(__)return qf.exports;__=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),qf.exports=uS(),qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function hS(){if(v_)return So;v_=1;var o=cS(),e=gd(),i=fS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,T=c.child;T;){if(T===a){g=!0,a=c,s=f;break}if(T===s){g=!0,s=c,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,s=c;break}if(T===s){g=!0,s=f,a=c;break}T=T.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function tt(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ct?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case U:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case k:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var ft=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},vt=[],Mt=-1;function O(t){return{current:t}}function nt(t){0>Mt||(t.current=vt[Mt],vt[Mt]=null,Mt--)}function St(t,n){Mt++,vt[Mt]=t.current,t.current=n}var bt=O(null),Nt=O(null),it=O(null),ot=O(null);function wt(t,n){switch(St(it,n),St(Nt,t),St(bt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Ng(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Ng(n),t=Og(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nt(bt),St(bt,t)}function It(){nt(bt),nt(Nt),nt(it)}function kt(t){t.memoizedState!==null&&St(ot,t);var n=bt.current,a=Og(n,t.type);n!==a&&(St(Nt,t),St(bt,a))}function he(t){Nt.current===t&&(nt(bt),nt(Nt)),ot.current===t&&(nt(ot),mo._currentValue=j)}var nn,I;function Ae(t){if(nn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);nn=n&&n[1]||"",I=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nn+t+I}var ie=!1;function te(t,n){if(!t||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(st){var et=st}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(st){et=st}t.call(pt.prototype)}}else{try{throw Error()}catch(st){et=st}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(st){if(st&&et&&typeof st.stack=="string")return[st.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var B=g.split(`
`),J=T.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===J.length)for(s=B.length-1,c=J.length-1;1<=s&&0<=c&&B[s]!==J[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==J[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==J[c]){var ut=`
`+B[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=c);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ae(a):""}function Wt(t,n){switch(t.tag){case 26:case 27:case 5:return Ae(t.type);case 16:return Ae("Lazy");case 13:return t.child!==n&&n!==null?Ae("Suspense Fallback"):Ae("Suspense");case 19:return Ae("SuspenseList");case 0:case 15:return te(t.type,!1);case 11:return te(t.type.render,!1);case 1:return te(t.type,!0);case 31:return Ae("Activity");default:return""}}function Ge(t){try{var n="",a=null;do n+=Wt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Xt=Object.prototype.hasOwnProperty,re=o.unstable_scheduleCallback,Ke=o.unstable_cancelCallback,je=o.unstable_shouldYield,N=o.unstable_requestPaint,E=o.unstable_now,$=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,At=o.unstable_IdlePriority,Yt=o.log,jt=o.unstable_setDisableYieldValue,Et=null,Rt=null;function Kt(t){if(typeof Yt=="function"&&jt(t),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Et,t)}catch{}}var Pt=Math.clz32?Math.clz32:X,Dt=Math.log,oe=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Dt(t)/oe|0)|0}var Tt=256,Ct=262144,zt=4194304;function yt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=yt(s):(g&=T,g!==0?c=yt(g):a||(a=T&~t,a!==0&&(c=yt(a))))):(T=s&~f,T!==0?c=yt(T):g!==0?c=yt(g):a||(a=s&~t,a!==0&&(c=yt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ft(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ae(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var t=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Rn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $n(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,J=t.hiddenUpdates;for(a=g&~a;0<a;){var ut=31-Pt(a),pt=1<<ut;T[ut]=0,B[ut]=-1;var et=J[ut];if(et!==null)for(J[ut]=null,ut=0;ut<et.length;ut++){var st=et[ut];st!==null&&(st.lane&=-536870913)}a&=~pt}s!==0&&Cs(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Cs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function xi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Sr(t,n){var a=n&-n;return a=(a&42)!==0?1:yr(a),(a&(t.suspendedLanes|n))!==0?0:a}function yr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Mr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ga(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:i_(t.type))}function ws(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var Gn=Math.random().toString(36).slice(2),an="__reactFiber$"+Gn,_n="__reactProps$"+Gn,sa="__reactContainer$"+Gn,Ds="__reactEvents$"+Gn,Oc="__reactListeners$"+Gn,Pc="__reactHandles$"+Gn,Ho="__reactResources$"+Gn,Va="__reactMarker$"+Gn;function A(t){delete t[an],delete t[_n],delete t[Ds],delete t[Oc],delete t[Pc]}function W(t){var n=t[an];if(n)return n;for(var a=t.parentNode;a;){if(n=a[sa]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Gg(t);t!==null;){if(a=t[an])return a;t=Gg(t)}return n}t=a,a=t.parentNode}return null}function at(t){if(t=t[an]||t[sa]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function rt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Y(t){var n=t[Ho];return n||(n=t[Ho]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _t(t){t[Va]=!0}var Ut=new Set,Gt={};function Ot(t,n){Qt(t,n),Qt(t+"Capture",n)}function Qt(t,n){for(Gt[t]=n,t=0;t<n.length;t++)Ut.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},de={};function Ue(t){return Xt.call(de,t)?!0:Xt.call(Jt,t)?!1:ne.test(t)?de[t]=!0:(Jt[t]=!0,!1)}function Ve(t,n,a){if(Ue(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Le(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function pe(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ke(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Te(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function vn(t){if(!t._valueTracker){var n=ke(t)?"checked":"value";t._valueTracker=Te(t,n,""+t[n])}}function Ni(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=ke(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function pn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Xa=/[\n"\\]/g;function _e(t){return t.replace(Xa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(t,n,a,s,c,f,g,T){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Vt(n)):t.value!==""+Vt(n)&&(t.value=""+Vt(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?un(t,g,Vt(n)):a!=null?un(t,g,Vt(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Vt(T):t.removeAttribute("name")}function Cn(t,n,a,s,c,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){vn(t);return}a=a!=null?""+Vt(a):"",n=n!=null?""+Vt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),vn(t)}function un(t,n,a){n==="number"&&pn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function $e(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Vt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Er(t,n,a){if(n!=null&&(n=""+Vt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Vt(a):""}function Si(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Vt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),vn(t)}function Tr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var t0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||t0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ud(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Dd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Dd(t,f,n[f])}function zc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var e0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),n0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(t){return n0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oi(){}var Bc=null;function Ic(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Ar=null;function Ld(t){var n=at(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(En(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_e(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[_n]||null;if(!c)throw Error(r(90));En(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ni(s)}break t;case"textarea":Er(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&$e(t,!!a.multiple,n,!1)}}}var Fc=!1;function Nd(t,n,a){if(Fc)return t(n,a);Fc=!0;try{var s=t(n);return s}finally{if(Fc=!1,(br!==null||Ar!==null)&&(Cl(),br&&(n=br,t=Ar,Ar=br=null,Ld(n),t)))for(n=0;n<t.length;n++)Ld(t[n])}}function Us(t,n){var a=t.stateNode;if(a===null)return null;var s=a[_n]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=!1;if(Pi)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{Hc=!1}var oa=null,Gc=null,Vo=null;function Od(){if(Vo)return Vo;var t,n=Gc,a=n.length,s,c="value"in oa?oa.value:oa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Vo=c.slice(t,1<s?1-s:void 0)}function Xo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ko(){return!0}function Pd(){return!1}function Ln(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ko:Pd,this.isPropagationStopped=Pd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),n}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=Ln(ka),Ns=_({},ka,{view:0,detail:0}),i0=Ln(Ns),Vc,Xc,Os,qo=_({},Ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(Vc=t.screenX-Os.screenX,Xc=t.screenY-Os.screenY):Xc=Vc=0,Os=t),Vc)},movementY:function(t){return"movementY"in t?t.movementY:Xc}}),zd=Ln(qo),a0=_({},qo,{dataTransfer:0}),r0=Ln(a0),s0=_({},Ns,{relatedTarget:0}),kc=Ln(s0),o0=_({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),l0=Ln(o0),c0=_({},ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),u0=Ln(c0),f0=_({},ka,{data:0}),Bd=Ln(f0),h0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=p0[t])?!!n[t]:!1}function Wc(){return m0}var g0=_({},Ns,{key:function(t){if(t.key){var n=h0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?d0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(t){return t.type==="keypress"?Xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_0=Ln(g0),v0=_({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Id=Ln(v0),x0=_({},Ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),S0=Ln(x0),y0=_({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),M0=Ln(y0),E0=_({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),T0=Ln(E0),b0=_({},ka,{newState:0,oldState:0}),A0=Ln(b0),R0=[9,13,27,32],qc=Pi&&"CompositionEvent"in window,Ps=null;Pi&&"documentMode"in document&&(Ps=document.documentMode);var C0=Pi&&"TextEvent"in window&&!Ps,Fd=Pi&&(!qc||Ps&&8<Ps&&11>=Ps),Hd=" ",Gd=!1;function Vd(t,n){switch(t){case"keyup":return R0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function w0(t,n){switch(t){case"compositionend":return Xd(n);case"keypress":return n.which!==32?null:(Gd=!0,Hd);case"textInput":return t=n.data,t===Hd&&Gd?null:t;default:return null}}function D0(t,n){if(Rr)return t==="compositionend"||!qc&&Vd(t,n)?(t=Od(),Vo=Gc=oa=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fd&&n.locale!=="ko"?null:n.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!U0[t.type]:n==="textarea"}function Wd(t,n,a,s){br?Ar?Ar.push(s):Ar=[s]:br=s,n=Pl(n,"onChange"),0<n.length&&(a=new Wo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var zs=null,Bs=null;function L0(t){Rg(t,0)}function Yo(t){var n=rt(t);if(Ni(n))return t}function qd(t,n){if(t==="change")return n}var Yd=!1;if(Pi){var Yc;if(Pi){var jc="oninput"in document;if(!jc){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),jc=typeof jd.oninput=="function"}Yc=jc}else Yc=!1;Yd=Yc&&(!document.documentMode||9<document.documentMode)}function Zd(){zs&&(zs.detachEvent("onpropertychange",Kd),Bs=zs=null)}function Kd(t){if(t.propertyName==="value"&&Yo(Bs)){var n=[];Wd(n,Bs,t,Ic(t)),Nd(L0,n)}}function N0(t,n,a){t==="focusin"?(Zd(),zs=n,Bs=a,zs.attachEvent("onpropertychange",Kd)):t==="focusout"&&Zd()}function O0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(Bs)}function P0(t,n){if(t==="click")return Yo(n)}function z0(t,n){if(t==="input"||t==="change")return Yo(n)}function B0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vn=typeof Object.is=="function"?Object.is:B0;function Is(t,n){if(Vn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Xt.call(n,c)||!Vn(t[c],n[c]))return!1}return!0}function Qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jd(t,n){var a=Qd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Qd(a)}}function $d(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?$d(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function tp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=pn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=pn(t.document)}return n}function Zc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var I0=Pi&&"documentMode"in document&&11>=document.documentMode,Cr=null,Kc=null,Fs=null,Qc=!1;function ep(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qc||Cr==null||Cr!==pn(s)||(s=Cr,"selectionStart"in s&&Zc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Fs&&Is(Fs,s)||(Fs=s,s=Pl(Kc,"onSelect"),0<s.length&&(n=new Wo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function Wa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var wr={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},Jc={},np={};Pi&&(np=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function qa(t){if(Jc[t])return Jc[t];if(!wr[t])return t;var n=wr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in np)return Jc[t]=n[a];return t}var ip=qa("animationend"),ap=qa("animationiteration"),rp=qa("animationstart"),F0=qa("transitionrun"),H0=qa("transitionstart"),G0=qa("transitioncancel"),sp=qa("transitionend"),op=new Map,$c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$c.push("scrollEnd");function ui(t,n){op.set(t,n),Ot(n,[t])}var jo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ti=[],Dr=0,tu=0;function Zo(){for(var t=Dr,n=tu=Dr=0;n<t;){var a=ti[n];ti[n++]=null;var s=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&lp(a,c,f)}}function Ko(t,n,a,s){ti[Dr++]=t,ti[Dr++]=n,ti[Dr++]=a,ti[Dr++]=s,tu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function eu(t,n,a,s){return Ko(t,n,a,s),Qo(t)}function Ya(t,n){return Ko(t,null,null,n),Qo(t)}function lp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Qo(t){if(50<oo)throw oo=0,ff=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={};function V0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,s){return new V0(t,n,a,s)}function nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zi(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function cp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Jo(t,n,a,s,c,f){var g=0;if(s=t,typeof t=="function")nu(t)&&(g=1);else if(typeof t=="string")g=Yx(t,a,bt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Xn(31,a,n,c),t.elementType=w,t.lanes=f,t;case R:return ja(a.children,c,f,n);case y:g=8,c|=24;break;case v:return t=Xn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case H:return t=Xn(13,a,n,c),t.elementType=H,t.lanes=f,t;case F:return t=Xn(19,a,n,c),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:g=10;break t;case L:g=9;break t;case D:g=11;break t;case P:g=14;break t;case k:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Xn(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function ja(t,n,a,s){return t=Xn(7,t,s,n),t.lanes=a,t}function iu(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function up(t){var n=Xn(18,null,null,0);return n.stateNode=t,n}function au(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var fp=new WeakMap;function ei(t,n){if(typeof t=="object"&&t!==null){var a=fp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ge(n)},fp.set(t,n),n)}return{value:t,source:n,stack:Ge(n)}}var Lr=[],Nr=0,$o=null,Hs=0,ni=[],ii=0,la=null,yi=1,Mi="";function Bi(t,n){Lr[Nr++]=Hs,Lr[Nr++]=$o,$o=t,Hs=n}function hp(t,n,a){ni[ii++]=yi,ni[ii++]=Mi,ni[ii++]=la,la=t;var s=yi;t=Mi;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,yi=1<<32-Pt(n)+c|a<<c|s,Mi=f+t}else yi=1<<f|a<<c|s,Mi=t}function ru(t){t.return!==null&&(Bi(t,1),hp(t,1,0))}function su(t){for(;t===$o;)$o=Lr[--Nr],Lr[Nr]=null,Hs=Lr[--Nr],Lr[Nr]=null;for(;t===la;)la=ni[--ii],ni[ii]=null,Mi=ni[--ii],ni[ii]=null,yi=ni[--ii],ni[ii]=null}function dp(t,n){ni[ii++]=yi,ni[ii++]=Mi,ni[ii++]=la,yi=n.id,Mi=n.overflow,la=t}var xn=null,We=null,Se=!1,ca=null,ai=!1,ou=Error(r(519));function ua(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gs(ei(n,t)),ou}function pp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[an]=t,n[_n]=s,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<co.length;a++)ge(co[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Cn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Si(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Ug(n.textContent,a)?(s.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),s.onScroll!=null&&ge("scroll",n),s.onScrollEnd!=null&&ge("scrollend",n),s.onClick!=null&&(n.onclick=Oi),n=!0):n=!1,n||ua(t,!0)}function mp(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:xn=xn.return}}function Or(t){if(t!==xn)return!1;if(!Se)return mp(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Af(t.type,t.memoizedProps)),a=!a),a&&We&&ua(t),mp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));We=Hg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));We=Hg(t)}else n===27?(n=We,Ta(t.type)?(t=Uf,Uf=null,We=t):We=n):We=xn?si(t.stateNode.nextSibling):null;return!0}function Za(){We=xn=null,Se=!1}function lu(){var t=ca;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),ca=null),t}function Gs(t){ca===null?ca=[t]:ca.push(t)}var cu=O(null),Ka=null,Ii=null;function fa(t,n,a){St(cu,n._currentValue),n._currentValue=a}function Fi(t){t._currentValue=cu.current,nt(cu)}function uu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function fu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),uu(f.return,a,t),s||(g=null);break t}f=T.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),uu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Pr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var T=c.type;Vn(c.pendingProps.value,g.value)||(t!==null?t.push(T):t=[T])}}else if(c===ot.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(mo):t=[mo])}c=c.return}t!==null&&fu(n,t,a,s),n.flags|=262144}function tl(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Qa(t){Ka=t,Ii=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return gp(Ka,t)}function el(t,n){return Ka===null&&Qa(t),gp(t,n)}function gp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(t===null)throw Error(r(308));Ii=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ii=Ii.next=n;return a}var X0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},k0=o.unstable_scheduleCallback,W0=o.unstable_NormalPriority,rn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new X0,data:new Map,refCount:0}}function Vs(t){t.refCount--,t.refCount===0&&k0(W0,function(){t.controller.abort()})}var Xs=null,du=0,zr=0,Br=null;function q0(t,n){if(Xs===null){var a=Xs=[];du=0,zr=_f(),Br={status:"pending",value:void 0,then:function(s){a.push(s)}}}return du++,n.then(_p,_p),n}function _p(){if(--du===0&&Xs!==null){Br!==null&&(Br.status="fulfilled");var t=Xs;Xs=null,zr=0,Br=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Y0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var vp=z.S;z.S=function(t,n){eg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&q0(t,n),vp!==null&&vp(t,n)};var Ja=O(null);function pu(){var t=Ja.current;return t!==null?t:Xe.pooledCache}function nl(t,n){n===null?St(Ja,Ja.current):St(Ja,n.pool)}function xp(){var t=pu();return t===null?null:{parent:rn._currentValue,pool:t}}var Ir=Error(r(460)),mu=Error(r(474)),il=Error(r(542)),al={then:function(){}};function Sp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function yp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Oi,Oi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ep(t),t;default:if(typeof n.status=="string")n.then(Oi,Oi);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ep(t),t}throw tr=n,Ir}}function $a(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(tr=a,Ir):a}}var tr=null;function Mp(){if(tr===null)throw Error(r(459));var t=tr;return tr=null,t}function Ep(t){if(t===Ir||t===il)throw Error(r(483))}var Fr=null,ks=0;function rl(t){var n=ks;return ks+=1,Fr===null&&(Fr=[]),yp(Fr,t,n)}function Ws(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function sl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Tp(t){function n(q,V){if(t){var Q=q.deletions;Q===null?(q.deletions=[V],q.flags|=16):Q.push(V)}}function a(q,V){if(!t)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function s(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function c(q,V){return q=zi(q,V),q.index=0,q.sibling=null,q}function f(q,V,Q){return q.index=Q,t?(Q=q.alternate,Q!==null?(Q=Q.index,Q<V?(q.flags|=67108866,V):Q):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function g(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function T(q,V,Q,dt){return V===null||V.tag!==6?(V=iu(Q,q.mode,dt),V.return=q,V):(V=c(V,Q),V.return=q,V)}function B(q,V,Q,dt){var $t=Q.type;return $t===R?ut(q,V,Q.props.children,dt,Q.key):V!==null&&(V.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===k&&$a($t)===V.type)?(V=c(V,Q.props),Ws(V,Q),V.return=q,V):(V=Jo(Q.type,Q.key,Q.props,null,q.mode,dt),Ws(V,Q),V.return=q,V)}function J(q,V,Q,dt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=au(Q,q.mode,dt),V.return=q,V):(V=c(V,Q.children||[]),V.return=q,V)}function ut(q,V,Q,dt,$t){return V===null||V.tag!==7?(V=ja(Q,q.mode,dt,$t),V.return=q,V):(V=c(V,Q),V.return=q,V)}function pt(q,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=iu(""+V,q.mode,Q),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return Q=Jo(V.type,V.key,V.props,null,q.mode,Q),Ws(Q,V),Q.return=q,Q;case b:return V=au(V,q.mode,Q),V.return=q,V;case k:return V=$a(V),pt(q,V,Q)}if(ft(V)||tt(V))return V=ja(V,q.mode,Q,null),V.return=q,V;if(typeof V.then=="function")return pt(q,rl(V),Q);if(V.$$typeof===U)return pt(q,el(q,V),Q);sl(q,V)}return null}function et(q,V,Q,dt){var $t=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return $t!==null?null:T(q,V,""+Q,dt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===$t?B(q,V,Q,dt):null;case b:return Q.key===$t?J(q,V,Q,dt):null;case k:return Q=$a(Q),et(q,V,Q,dt)}if(ft(Q)||tt(Q))return $t!==null?null:ut(q,V,Q,dt,null);if(typeof Q.then=="function")return et(q,V,rl(Q),dt);if(Q.$$typeof===U)return et(q,V,el(q,Q),dt);sl(q,Q)}return null}function st(q,V,Q,dt,$t){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return q=q.get(Q)||null,T(V,q,""+dt,$t);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case M:return q=q.get(dt.key===null?Q:dt.key)||null,B(V,q,dt,$t);case b:return q=q.get(dt.key===null?Q:dt.key)||null,J(V,q,dt,$t);case k:return dt=$a(dt),st(q,V,Q,dt,$t)}if(ft(dt)||tt(dt))return q=q.get(Q)||null,ut(V,q,dt,$t,null);if(typeof dt.then=="function")return st(q,V,Q,rl(dt),$t);if(dt.$$typeof===U)return st(q,V,Q,el(V,dt),$t);sl(V,dt)}return null}function Ht(q,V,Q,dt){for(var $t=null,Re=null,qt=V,ce=V=0,xe=null;qt!==null&&ce<Q.length;ce++){qt.index>ce?(xe=qt,qt=null):xe=qt.sibling;var Ce=et(q,qt,Q[ce],dt);if(Ce===null){qt===null&&(qt=xe);break}t&&qt&&Ce.alternate===null&&n(q,qt),V=f(Ce,V,ce),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce,qt=xe}if(ce===Q.length)return a(q,qt),Se&&Bi(q,ce),$t;if(qt===null){for(;ce<Q.length;ce++)qt=pt(q,Q[ce],dt),qt!==null&&(V=f(qt,V,ce),Re===null?$t=qt:Re.sibling=qt,Re=qt);return Se&&Bi(q,ce),$t}for(qt=s(qt);ce<Q.length;ce++)xe=st(qt,q,ce,Q[ce],dt),xe!==null&&(t&&xe.alternate!==null&&qt.delete(xe.key===null?ce:xe.key),V=f(xe,V,ce),Re===null?$t=xe:Re.sibling=xe,Re=xe);return t&&qt.forEach(function(wa){return n(q,wa)}),Se&&Bi(q,ce),$t}function ee(q,V,Q,dt){if(Q==null)throw Error(r(151));for(var $t=null,Re=null,qt=V,ce=V=0,xe=null,Ce=Q.next();qt!==null&&!Ce.done;ce++,Ce=Q.next()){qt.index>ce?(xe=qt,qt=null):xe=qt.sibling;var wa=et(q,qt,Ce.value,dt);if(wa===null){qt===null&&(qt=xe);break}t&&qt&&wa.alternate===null&&n(q,qt),V=f(wa,V,ce),Re===null?$t=wa:Re.sibling=wa,Re=wa,qt=xe}if(Ce.done)return a(q,qt),Se&&Bi(q,ce),$t;if(qt===null){for(;!Ce.done;ce++,Ce=Q.next())Ce=pt(q,Ce.value,dt),Ce!==null&&(V=f(Ce,V,ce),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return Se&&Bi(q,ce),$t}for(qt=s(qt);!Ce.done;ce++,Ce=Q.next())Ce=st(qt,q,ce,Ce.value,dt),Ce!==null&&(t&&Ce.alternate!==null&&qt.delete(Ce.key===null?ce:Ce.key),V=f(Ce,V,ce),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return t&&qt.forEach(function(aS){return n(q,aS)}),Se&&Bi(q,ce),$t}function Ie(q,V,Q,dt){if(typeof Q=="object"&&Q!==null&&Q.type===R&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:t:{for(var $t=Q.key;V!==null;){if(V.key===$t){if($t=Q.type,$t===R){if(V.tag===7){a(q,V.sibling),dt=c(V,Q.props.children),dt.return=q,q=dt;break t}}else if(V.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===k&&$a($t)===V.type){a(q,V.sibling),dt=c(V,Q.props),Ws(dt,Q),dt.return=q,q=dt;break t}a(q,V);break}else n(q,V);V=V.sibling}Q.type===R?(dt=ja(Q.props.children,q.mode,dt,Q.key),dt.return=q,q=dt):(dt=Jo(Q.type,Q.key,Q.props,null,q.mode,dt),Ws(dt,Q),dt.return=q,q=dt)}return g(q);case b:t:{for($t=Q.key;V!==null;){if(V.key===$t)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(q,V.sibling),dt=c(V,Q.children||[]),dt.return=q,q=dt;break t}else{a(q,V);break}else n(q,V);V=V.sibling}dt=au(Q,q.mode,dt),dt.return=q,q=dt}return g(q);case k:return Q=$a(Q),Ie(q,V,Q,dt)}if(ft(Q))return Ht(q,V,Q,dt);if(tt(Q)){if($t=tt(Q),typeof $t!="function")throw Error(r(150));return Q=$t.call(Q),ee(q,V,Q,dt)}if(typeof Q.then=="function")return Ie(q,V,rl(Q),dt);if(Q.$$typeof===U)return Ie(q,V,el(q,Q),dt);sl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(q,V.sibling),dt=c(V,Q),dt.return=q,q=dt):(a(q,V),dt=iu(Q,q.mode,dt),dt.return=q,q=dt),g(q)):a(q,V)}return function(q,V,Q,dt){try{ks=0;var $t=Ie(q,V,Q,dt);return Fr=null,$t}catch(qt){if(qt===Ir||qt===il)throw qt;var Re=Xn(29,qt,null,q.mode);return Re.lanes=dt,Re.return=q,Re}finally{}}}var er=Tp(!0),bp=Tp(!1),ha=!1;function gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(De&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Qo(t),lp(t,null,a),n}return Ko(t,s,n,a),Qo(t)}function qs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,xi(t,a)}}function vu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var xu=!1;function Ys(){if(xu){var t=Br;if(t!==null)throw t}}function js(t,n,a,s){xu=!1;var c=t.updateQueue;ha=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,J=B.next;B.next=null,g===null?f=J:g.next=J,g=B;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==g&&(T===null?ut.firstBaseUpdate=J:T.next=J,ut.lastBaseUpdate=B))}if(f!==null){var pt=c.baseState;g=0,ut=J=B=null,T=f;do{var et=T.lane&-536870913,st=et!==T.lane;if(st?(ve&et)===et:(s&et)===et){et!==0&&et===zr&&(xu=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Ht=t,ee=T;et=n;var Ie=a;switch(ee.tag){case 1:if(Ht=ee.payload,typeof Ht=="function"){pt=Ht.call(Ie,pt,et);break t}pt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=ee.payload,et=typeof Ht=="function"?Ht.call(Ie,pt,et):Ht,et==null)break t;pt=_({},pt,et);break t;case 2:ha=!0}}et=T.callback,et!==null&&(t.flags|=64,st&&(t.flags|=8192),st=c.callbacks,st===null?c.callbacks=[et]:st.push(et))}else st={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?(J=ut=st,B=pt):ut=ut.next=st,g|=et;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;st=T,T=st.next,st.next=null,c.lastBaseUpdate=st,c.shared.pending=null}}while(!0);ut===null&&(B=pt),c.baseState=B,c.firstBaseUpdate=J,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),xa|=g,t.lanes=g,t.memoizedState=pt}}function Ap(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Rp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ap(a[t],n)}var Hr=O(null),ol=O(0);function Cp(t,n){t=ji,St(ol,t),St(Hr,n),ji=t|n.baseLanes}function Su(){St(ol,ji),St(Hr,Hr.current)}function yu(){ji=ol.current,nt(Hr),nt(ol)}var kn=O(null),ri=null;function ma(t){var n=t.alternate;St(tn,tn.current&1),St(kn,t),ri===null&&(n===null||Hr.current!==null||n.memoizedState!==null)&&(ri=t)}function Mu(t){St(tn,tn.current),St(kn,t),ri===null&&(ri=t)}function wp(t){t.tag===22?(St(tn,tn.current),St(kn,t),ri===null&&(ri=t)):ga()}function ga(){St(tn,tn.current),St(kn,kn.current)}function Wn(t){nt(kn),ri===t&&(ri=null),nt(tn)}var tn=O(0);function ll(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wf(a)||Df(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Hi=0,le=null,ze=null,sn=null,cl=!1,Gr=!1,nr=!1,ul=0,Zs=0,Vr=null,j0=0;function Qe(){throw Error(r(321))}function Eu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Vn(t[a],n[a]))return!1;return!0}function Tu(t,n,a,s,c,f){return Hi=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?hm:Fu,nr=!1,f=a(s,c),nr=!1,Gr&&(f=Up(n,a,s,c)),Dp(t),f}function Dp(t){z.H=Js;var n=ze!==null&&ze.next!==null;if(Hi=0,sn=ze=le=null,cl=!1,Zs=0,Vr=null,n)throw Error(r(300));t===null||on||(t=t.dependencies,t!==null&&tl(t)&&(on=!0))}function Up(t,n,a,s){le=t;var c=0;do{if(Gr&&(Vr=null),Zs=0,Gr=!1,25<=c)throw Error(r(301));if(c+=1,sn=ze=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=dm,f=n(a,s)}while(Gr);return f}function Z0(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Ks(n):n,t=t.useState()[0],(ze!==null?ze.memoizedState:null)!==t&&(le.flags|=1024),n}function bu(){var t=ul!==0;return ul=0,t}function Au(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ru(t){if(cl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}cl=!1}Hi=0,sn=ze=le=null,Gr=!1,Zs=ul=0,Vr=null}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?le.memoizedState=sn=t:sn=sn.next=t,sn}function en(){if(ze===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var n=sn===null?le.memoizedState:sn.next;if(n!==null)sn=n,ze=t;else{if(t===null)throw le.alternate===null?Error(r(467)):Error(r(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},sn===null?le.memoizedState=sn=t:sn=sn.next=t}return sn}function fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ks(t){var n=Zs;return Zs+=1,Vr===null&&(Vr=[]),t=yp(Vr,t,n),n=le,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?hm:Fu),t}function hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ks(t);if(t.$$typeof===U)return Sn(t)}throw Error(r(438,String(t)))}function Cu(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=le.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=fl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Gi(t,n){return typeof n=="function"?n(t):n}function dl(t){var n=en();return wu(n,ze,t)}function wu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=g=null,B=null,J=n,ut=!1;do{var pt=J.lane&-536870913;if(pt!==J.lane?(ve&pt)===pt:(Hi&pt)===pt){var et=J.revertLane;if(et===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),pt===zr&&(ut=!0);else if((Hi&et)===et){J=J.next,et===zr&&(ut=!0);continue}else pt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=pt,g=f):B=B.next=pt,le.lanes|=et,xa|=et;pt=J.action,nr&&a(f,pt),f=J.hasEagerState?J.eagerState:a(f,pt)}else et={lane:pt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=et,g=f):B=B.next=et,le.lanes|=pt,xa|=pt;J=J.next}while(J!==null&&J!==n);if(B===null?g=f:B.next=T,!Vn(f,t.memoizedState)&&(on=!0,ut&&(a=Br,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Du(t){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Vn(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Lp(t,n,a){var s=le,c=en(),f=Se;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Vn((ze||c).memoizedState,a);if(g&&(c.memoizedState=a,on=!0),c=c.queue,Nu(Pp.bind(null,s,c,t),[t]),c.getSnapshot!==n||g||sn!==null&&sn.memoizedState.tag&1){if(s.flags|=2048,Xr(9,{destroy:void 0},Op.bind(null,s,c,a,n),null),Xe===null)throw Error(r(349));f||(Hi&127)!==0||Np(s,n,a)}return a}function Np(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=fl(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Op(t,n,a,s){n.value=a,n.getSnapshot=s,zp(n)&&Bp(t)}function Pp(t,n,a){return a(function(){zp(n)&&Bp(t)})}function zp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Vn(t,a)}catch{return!0}}function Bp(t){var n=Ya(t,2);n!==null&&Bn(n,t,2)}function Uu(t){var n=wn();if(typeof t=="function"){var a=t;if(t=a(),nr){Kt(!0);try{a()}finally{Kt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:t},n}function Ip(t,n,a,s){return t.baseState=a,wu(t,ze,typeof s=="function"?s:Gi)}function K0(t,n,a,s,c){if(gl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Fp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Fp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=z.T,g={};z.T=g;try{var T=a(c,s),B=z.S;B!==null&&B(g,T),Hp(t,n,T)}catch(J){Lu(t,n,J)}finally{f!==null&&g.types!==null&&(f.types=g.types),z.T=f}}else try{f=a(c,s),Hp(t,n,f)}catch(J){Lu(t,n,J)}}function Hp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Gp(t,n,s)},function(s){return Lu(t,n,s)}):Gp(t,n,a)}function Gp(t,n,a){n.status="fulfilled",n.value=a,Vp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Fp(t,a)))}function Lu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Vp(n),n=n.next;while(n!==s)}t.action=null}function Vp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Xp(t,n){return n}function kp(t,n){if(Se){var a=Xe.formState;if(a!==null){t:{var s=le;if(Se){if(We){e:{for(var c=We,f=ai;c.nodeType!==8;){if(!f){c=null;break e}if(c=si(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){We=si(c.nextSibling),s=c.data==="F!";break t}}ua(s)}s=!1}s&&(n=a[0])}}return a=wn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xp,lastRenderedState:n},a.queue=s,a=cm.bind(null,le,s),s.dispatch=a,s=Uu(!1),f=Iu.bind(null,le,!1,s.queue),s=wn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=K0.bind(null,le,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Wp(t){var n=en();return qp(n,ze,t)}function qp(t,n,a){if(n=wu(t,n,Xp)[0],t=dl(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ks(n)}catch(g){throw g===Ir?il:g}else s=n;n=en();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Xr(9,{destroy:void 0},Q0.bind(null,c,a),null)),[s,f,t]}function Q0(t,n){t.action=n}function Yp(t){var n=en(),a=ze;if(a!==null)return qp(n,a,t);en(),n=n.memoizedState,a=en();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Xr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=le.updateQueue,n===null&&(n=fl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function jp(){return en().memoizedState}function pl(t,n,a,s){var c=wn();le.flags|=t,c.memoizedState=Xr(1|n,{destroy:void 0},a,s===void 0?null:s)}function ml(t,n,a,s){var c=en();s=s===void 0?null:s;var f=c.memoizedState.inst;ze!==null&&s!==null&&Eu(s,ze.memoizedState.deps)?c.memoizedState=Xr(n,f,a,s):(le.flags|=t,c.memoizedState=Xr(1|n,f,a,s))}function Zp(t,n){pl(8390656,8,t,n)}function Nu(t,n){ml(2048,8,t,n)}function J0(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=fl(),le.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Kp(t){var n=en().memoizedState;return J0({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Qp(t,n){return ml(4,2,t,n)}function Jp(t,n){return ml(4,4,t,n)}function $p(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function tm(t,n,a){a=a!=null?a.concat([t]):null,ml(4,4,$p.bind(null,n,t),a)}function Ou(){}function em(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Eu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function nm(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Eu(n,s[1]))return s[0];if(s=t(),nr){Kt(!0);try{t()}finally{Kt(!1)}}return a.memoizedState=[s,n],s}function Pu(t,n,a){return a===void 0||(Hi&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ig(),le.lanes|=t,xa|=t,a)}function im(t,n,a,s){return Vn(a,n)?a:Hr.current!==null?(t=Pu(t,a,s),Vn(t,n)||(on=!0),t):(Hi&42)===0||(Hi&1073741824)!==0&&(ve&261930)===0?(on=!0,t.memoizedState=a):(t=ig(),le.lanes|=t,xa|=t,n)}function am(t,n,a,s,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var g=z.T,T={};z.T=T,Iu(t,!1,n,a);try{var B=c(),J=z.S;if(J!==null&&J(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ut=Y0(B,s);Qs(t,n,ut,jn(t))}else Qs(t,n,s,jn(t))}catch(pt){Qs(t,n,{then:function(){},status:"rejected",reason:pt},jn())}finally{Z.p=f,g!==null&&T.types!==null&&(g.types=T.types),z.T=g}}function $0(){}function zu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=rm(t).queue;am(t,c,n,j,a===null?$0:function(){return sm(t),a(s)})}function rm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function sm(t){var n=rm(t);n.next===null&&(n=t.alternate.memoizedState),Qs(t,n.next.queue,{},jn())}function Bu(){return Sn(mo)}function om(){return en().memoizedState}function lm(){return en().memoizedState}function tx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();t=da(a);var s=pa(n,t,a);s!==null&&(Bn(s,n,a),qs(s,n,a)),n={cache:hu()},t.payload=n;return}n=n.return}}function ex(t,n,a){var s=jn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gl(t)?um(n,a):(a=eu(t,n,a,s),a!==null&&(Bn(a,t,s),fm(a,n,s)))}function cm(t,n,a){var s=jn();Qs(t,n,a,s)}function Qs(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(t))um(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(c.hasEagerState=!0,c.eagerState=T,Vn(T,g))return Ko(t,n,c,0),Xe===null&&Zo(),!1}catch{}finally{}if(a=eu(t,n,c,s),a!==null)return Bn(a,t,s),fm(a,n,s),!0}return!1}function Iu(t,n,a,s){if(s={lane:2,revertLane:_f(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},gl(t)){if(n)throw Error(r(479))}else n=eu(t,a,s,2),n!==null&&Bn(n,t,2)}function gl(t){var n=t.alternate;return t===le||n!==null&&n===le}function um(t,n){Gr=cl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function fm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,xi(t,a)}}var Js={readContext:Sn,use:hl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};Js.useEffectEvent=Qe;var hm={readContext:Sn,use:hl,useCallback:function(t,n){return wn().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:Zp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,pl(4194308,4,$p.bind(null,n,t),a)},useLayoutEffect:function(t,n){return pl(4194308,4,t,n)},useInsertionEffect:function(t,n){pl(4,2,t,n)},useMemo:function(t,n){var a=wn();n=n===void 0?null:n;var s=t();if(nr){Kt(!0);try{t()}finally{Kt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=wn();if(a!==void 0){var c=a(n);if(nr){Kt(!0);try{a(n)}finally{Kt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=ex.bind(null,le,t),[s.memoizedState,t]},useRef:function(t){var n=wn();return t={current:t},n.memoizedState=t},useState:function(t){t=Uu(t);var n=t.queue,a=cm.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ou,useDeferredValue:function(t,n){var a=wn();return Pu(a,t,n)},useTransition:function(){var t=Uu(!1);return t=am.bind(null,le,t.queue,!0,!1),wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=le,c=wn();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(ve&127)!==0||Np(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Zp(Pp.bind(null,s,f,t),[t]),s.flags|=2048,Xr(9,{destroy:void 0},Op.bind(null,s,f,a,n),null),a},useId:function(){var t=wn(),n=Xe.identifierPrefix;if(Se){var a=Mi,s=yi;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=j0++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Bu,useFormState:kp,useActionState:kp,useOptimistic:function(t){var n=wn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Iu.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:Cu,useCacheRefresh:function(){return wn().memoizedState=tx.bind(null,le)},useEffectEvent:function(t){var n=wn(),a={impl:t};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Fu={readContext:Sn,use:hl,useCallback:em,useContext:Sn,useEffect:Nu,useImperativeHandle:tm,useInsertionEffect:Qp,useLayoutEffect:Jp,useMemo:nm,useReducer:dl,useRef:jp,useState:function(){return dl(Gi)},useDebugValue:Ou,useDeferredValue:function(t,n){var a=en();return im(a,ze.memoizedState,t,n)},useTransition:function(){var t=dl(Gi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:Ks(t),n]},useSyncExternalStore:Lp,useId:om,useHostTransitionStatus:Bu,useFormState:Wp,useActionState:Wp,useOptimistic:function(t,n){var a=en();return Ip(a,ze,t,n)},useMemoCache:Cu,useCacheRefresh:lm};Fu.useEffectEvent=Kp;var dm={readContext:Sn,use:hl,useCallback:em,useContext:Sn,useEffect:Nu,useImperativeHandle:tm,useInsertionEffect:Qp,useLayoutEffect:Jp,useMemo:nm,useReducer:Du,useRef:jp,useState:function(){return Du(Gi)},useDebugValue:Ou,useDeferredValue:function(t,n){var a=en();return ze===null?Pu(a,t,n):im(a,ze.memoizedState,t,n)},useTransition:function(){var t=Du(Gi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:Ks(t),n]},useSyncExternalStore:Lp,useId:om,useHostTransitionStatus:Bu,useFormState:Yp,useActionState:Yp,useOptimistic:function(t,n){var a=en();return ze!==null?Ip(a,ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Cu,useCacheRefresh:lm};dm.useEffectEvent=Kp;function Hu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Gu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=jn(),c=da(s);c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,s),n!==null&&(Bn(n,t,s),qs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=jn(),c=da(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,s),n!==null&&(Bn(n,t,s),qs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=jn(),s=da(a);s.tag=2,n!=null&&(s.callback=n),n=pa(t,s,a),n!==null&&(Bn(n,t,a),qs(n,t,a))}};function pm(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Is(a,s)||!Is(c,f):!0}function mm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Gu.enqueueReplaceState(n,n.state,null)}function ir(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function gm(t){jo(t)}function _m(t){console.error(t)}function vm(t){jo(t)}function _l(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function xm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Vu(t,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){_l(t,n)},a}function Sm(t){return t=da(t),t.tag=3,t}function ym(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){xm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){xm(n,a,s),typeof c!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function nx(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Pr(n,a,c,!0),a=kn.current,a!==null){switch(a.tag){case 31:case 13:return ri===null?wl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===al?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),pf(t,s,c)),!1;case 22:return a.flags|=65536,s===al?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),pf(t,s,c)),!1}throw Error(r(435,a.tag))}return pf(t,s,c),wl(),!1}if(Se)return n=kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==ou&&(t=Error(r(422),{cause:s}),Gs(ei(t,a)))):(s!==ou&&(n=Error(r(423),{cause:s}),Gs(ei(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ei(s,a),c=Vu(t.stateNode,s,c),vu(t,c),Je!==4&&(Je=2)),!1;var f=Error(r(520),{cause:s});if(f=ei(f,a),so===null?so=[f]:so.push(f),Je!==4&&(Je=2),n===null)return!0;s=ei(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Vu(a.stateNode,s,t),vu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sa===null||!Sa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Sm(c),ym(c,t,a,s),vu(a,c),!1}a=a.return}while(a!==null);return!1}var Xu=Error(r(461)),on=!1;function yn(t,n,a,s){n.child=t===null?bp(n,null,a,s):er(n,t.child,a,s)}function Mm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var T in s)T!=="ref"&&(g[T]=s[T])}else g=s;return Qa(n),s=Tu(t,n,a,g,f,c),T=bu(),t!==null&&!on?(Au(t,n,c),Vi(t,n,c)):(Se&&T&&ru(n),n.flags|=1,yn(t,n,s,c),n.child)}function Em(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!nu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Tm(t,n,f,s,c)):(t=Jo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Qu(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Is,a(g,s)&&t.ref===n.ref)return Vi(t,n,c)}return n.flags|=1,t=zi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Tm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Is(f,s)&&t.ref===n.ref)if(on=!1,n.pendingProps=s=f,Qu(t,c))(t.flags&131072)!==0&&(on=!0);else return n.lanes=t.lanes,Vi(t,n,c)}return ku(t,n,a,s,c)}function bm(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Am(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&nl(n,f!==null?f.cachePool:null),f!==null?Cp(n,f):Su(),wp(n);else return s=n.lanes=536870912,Am(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(nl(n,f.cachePool),Cp(n,f),ga(),n.memoizedState=null):(t!==null&&nl(n,null),Su(),ga());return yn(t,n,c,a),n.child}function $s(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Am(t,n,a,s,c){var f=pu();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&nl(n,null),Su(),wp(n),t!==null&&Pr(t,n,s,!0),n.childLanes=c,null}function vl(t,n){return n=Sl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Rm(t,n,a){return er(n,t.child,null,a),t=vl(n,n.pendingProps),t.flags|=2,Wn(n),n.memoizedState=null,t}function ix(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(s.mode==="hidden")return t=vl(n,s),n.lanes=536870912,$s(null,t);if(Mu(n),(t=We)?(t=Fg(t,ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:la!==null?{id:yi,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=up(t),a.return=n,n.child=a,xn=n,We=null)):t=null,t===null)throw ua(n);return n.lanes=536870912,null}return vl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Mu(n),c)if(n.flags&256)n.flags&=-257,n=Rm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(on||Pr(t,n,a,!1),c=(a&t.childLanes)!==0,on||c){if(s=Xe,s!==null&&(g=Sr(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Ya(t,g),Bn(s,t,g),Xu;wl(),n=Rm(t,n,a)}else t=f.treeContext,We=si(g.nextSibling),xn=n,Se=!0,ca=null,ai=!1,t!==null&&dp(n,t),n=vl(n,s),n.flags|=4096;return n}return t=zi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function xl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ku(t,n,a,s,c){return Qa(n),a=Tu(t,n,a,s,void 0,c),s=bu(),t!==null&&!on?(Au(t,n,c),Vi(t,n,c)):(Se&&s&&ru(n),n.flags|=1,yn(t,n,a,c),n.child)}function Cm(t,n,a,s,c,f){return Qa(n),n.updateQueue=null,a=Up(n,s,a,c),Dp(t),s=bu(),t!==null&&!on?(Au(t,n,f),Vi(t,n,f)):(Se&&s&&ru(n),n.flags|=1,yn(t,n,a,f),n.child)}function wm(t,n,a,s,c){if(Qa(n),n.stateNode===null){var f=Ur,g=a.contextType;typeof g=="object"&&g!==null&&(f=Sn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Gu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},gu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Sn(g):Ur,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Hu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Gu.enqueueReplaceState(f,f.state,null),js(n,s,f,c),Ys(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=ir(a,T);f.props=B;var J=f.context,ut=a.contextType;g=Ur,typeof ut=="object"&&ut!==null&&(g=Sn(ut));var pt=a.getDerivedStateFromProps;ut=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==g)&&mm(n,f,s,g),ha=!1;var et=n.memoizedState;f.state=et,js(n,s,f,c),Ys(),J=n.memoizedState,T||et!==J||ha?(typeof pt=="function"&&(Hu(n,a,pt,s),J=n.memoizedState),(B=ha||pm(n,a,B,s,et,J,g))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=g,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,_u(t,n),g=n.memoizedProps,ut=ir(a,g),f.props=ut,pt=n.pendingProps,et=f.context,J=a.contextType,B=Ur,typeof J=="object"&&J!==null&&(B=Sn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==pt||et!==B)&&mm(n,f,s,B),ha=!1,et=n.memoizedState,f.state=et,js(n,s,f,c),Ys();var st=n.memoizedState;g!==pt||et!==st||ha||t!==null&&t.dependencies!==null&&tl(t.dependencies)?(typeof T=="function"&&(Hu(n,a,T,s),st=n.memoizedState),(ut=ha||pm(n,a,ut,s,et,st,B)||t!==null&&t.dependencies!==null&&tl(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,st,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,st,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=st),f.props=s,f.state=st,f.context=B,s=ut):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,xl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=er(n,t.child,null,c),n.child=er(n,null,a,c)):yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Vi(t,n,c),t}function Dm(t,n,a,s){return Za(),n.flags|=256,yn(t,n,a,s),n.child}var Wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(t){return{baseLanes:t,cachePool:xp()}}function Yu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Yn),t}function Um(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(tn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?ma(n):ga(),(t=We)?(t=Fg(t,ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:la!==null?{id:yi,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=up(t),a.return=n,n.child=a,xn=n,We=null)):t=null,t===null)throw ua(n);return Df(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,c?(ga(),c=n.mode,T=Sl({mode:"hidden",children:T},c),s=ja(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=qu(a),s.childLanes=Yu(t,g,a),n.memoizedState=Wu,$s(null,s)):(ma(n),ju(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=Zu(t,n,a)):n.memoizedState!==null?(ga(),n.child=t.child,n.flags|=128,n=null):(ga(),T=s.fallback,c=n.mode,s=Sl({mode:"visible",children:s.children},c),T=ja(T,c,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,er(n,t.child,null,a),s=n.child,s.memoizedState=qu(a),s.childLanes=Yu(t,g,a),n.memoizedState=Wu,n=$s(null,s));else if(ma(n),Df(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var J=g.dgst;g=J,s=Error(r(419)),s.stack="",s.digest=g,Gs({value:s,source:null,stack:null}),n=Zu(t,n,a)}else if(on||Pr(t,n,a,!1),g=(a&t.childLanes)!==0,on||g){if(g=Xe,g!==null&&(s=Sr(g,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,Ya(t,s),Bn(g,t,s),Xu;wf(T)||wl(),n=Zu(t,n,a)}else wf(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,We=si(T.nextSibling),xn=n,Se=!0,ca=null,ai=!1,t!==null&&dp(n,t),n=ju(n,s.children),n.flags|=4096);return n}return c?(ga(),T=s.fallback,c=n.mode,B=t.child,J=B.sibling,s=zi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,J!==null?T=zi(J,T):(T=ja(T,c,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,$s(null,s),s=n.child,T=t.child.memoizedState,T===null?T=qu(a):(c=T.cachePool,c!==null?(B=rn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=xp(),T={baseLanes:T.baseLanes|a,cachePool:c}),s.memoizedState=T,s.childLanes=Yu(t,g,a),n.memoizedState=Wu,$s(t.child,s)):(ma(n),a=t.child,t=a.sibling,a=zi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function ju(t,n){return n=Sl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Sl(t,n){return t=Xn(22,t,null,n),t.lanes=0,t}function Zu(t,n,a){return er(n,t.child,null,a),t=ju(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Lm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),uu(t.return,n,a)}function Ku(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Nm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=tn.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,St(tn,g),yn(t,n,s,a),s=Se?Hs:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lm(t,a,n);else if(t.tag===19)Lm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ll(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ku(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ll(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Ku(n,!0,a,null,f,s);break;case"together":Ku(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Vi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),xa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Pr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Qu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&tl(t)))}function ax(t,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),fa(n,rn,t.memoizedState.cache),Za();break;case 27:case 5:kt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Um(t,n,a):(ma(n),t=Vi(t,n,a),t!==null?t.sibling:null);ma(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Pr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Nm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(tn,tn.current),s)break;return null;case 22:return n.lanes=0,bm(t,n,a,n.pendingProps);case 24:fa(n,rn,t.memoizedState.cache)}return Vi(t,n,a)}function Om(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)on=!0;else{if(!Qu(t,a)&&(n.flags&128)===0)return on=!1,ax(t,n,a);on=(t.flags&131072)!==0}else on=!1,Se&&(n.flags&1048576)!==0&&hp(n,Hs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=$a(n.elementType),n.type=t,typeof t=="function")nu(t)?(s=ir(t,s),n.tag=1,n=wm(null,n,t,s,a)):(n.tag=0,n=ku(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=Mm(null,n,t,s,a);break t}else if(c===P){n.tag=14,n=Em(null,n,t,s,a);break t}}throw n=gt(t)||t,Error(r(306,n,""))}}return n;case 0:return ku(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ir(s,n.pendingProps),wm(t,n,s,c,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,_u(t,n),js(n,s,null,a);var g=n.memoizedState;if(s=g.cache,fa(n,rn,s),s!==f.cache&&fu(n,[rn],a,!0),Ys(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Dm(t,n,s,a);break t}else if(s!==c){c=ei(Error(r(424)),n),Gs(c),n=Dm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(We=si(t.firstChild),xn=n,Se=!0,ca=null,ai=!0,a=bp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Za(),s===c){n=Vi(t,n,a);break t}yn(t,n,s,a)}n=n.child}return n;case 26:return xl(t,n),t===null?(a=Wg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,s=zl(it.current).createElement(a),s[an]=n,s[_n]=t,Mn(s,a,t),_t(s),n.stateNode=s):n.memoizedState=Wg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return kt(n),t===null&&Se&&(s=n.stateNode=Vg(n.type,n.pendingProps,it.current),xn=n,ai=!0,c=We,Ta(n.type)?(Uf=c,We=si(s.firstChild)):We=c),yn(t,n,n.pendingProps.children,a),xl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=s=We)&&(s=Ox(s,n.type,n.pendingProps,ai),s!==null?(n.stateNode=s,xn=n,We=si(s.firstChild),ai=!1,c=!0):c=!1),c||ua(n)),kt(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Af(c,f)?s=null:g!==null&&Af(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Tu(t,n,Z0,null,null,a),mo._currentValue=c),xl(t,n),yn(t,n,s,a),n.child;case 6:return t===null&&Se&&((t=a=We)&&(a=Px(a,n.pendingProps,ai),a!==null?(n.stateNode=a,xn=n,We=null,t=!0):t=!1),t||ua(n)),null;case 13:return Um(t,n,a);case 4:return wt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=er(n,null,s,a):yn(t,n,s,a),n.child;case 11:return Mm(t,n,n.type,n.pendingProps,a);case 7:return yn(t,n,n.pendingProps,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fa(n,n.type,s.value),yn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,Qa(n),c=Sn(c),s=s(c),n.flags|=1,yn(t,n,s,a),n.child;case 14:return Em(t,n,n.type,n.pendingProps,a);case 15:return Tm(t,n,n.type,n.pendingProps,a);case 19:return Nm(t,n,a);case 31:return ix(t,n,a);case 22:return bm(t,n,a,n.pendingProps);case 24:return Qa(n),s=Sn(rn),t===null?(c=pu(),c===null&&(c=Xe,f=hu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},gu(n),fa(n,rn,c)):((t.lanes&a)!==0&&(_u(t,n),js(n,null,null,a),Ys()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),fa(n,rn,s)):(s=f.cache,fa(n,rn,s),s!==c.cache&&fu(n,[rn],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Xi(t){t.flags|=4}function Ju(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(og())t.flags|=8192;else throw tr=al,mu}else t.flags&=-16777217}function Pm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Kg(n))if(og())t.flags|=8192;else throw tr=al,mu}function yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,Yr|=n)}function to(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function rx(t,n,a){var s=n.pendingProps;switch(su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Fi(rn),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Or(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lu())),qe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Xi(n),f!==null?(qe(n),Pm(n,f)):(qe(n),Ju(n,c,null,s,a))):f?f!==t.memoizedState?(Xi(n),qe(n),Pm(n,f)):(qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Xi(n),qe(n),Ju(n,c,t,s,a)),null;case 27:if(he(n),a=it.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}t=bt.current,Or(n)?pp(n):(t=Vg(c,s,a),n.stateNode=t,Xi(n))}return qe(n),null;case 5:if(he(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(f=bt.current,Or(n))pp(n);else{var g=zl(it.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[an]=n,f[_n]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Mn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Xi(n)}}return qe(n),Ju(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=it.current,Or(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=xn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[an]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Ug(t.nodeValue,a)),t||ua(n,!0)}else t=zl(t).createTextNode(s),t[an]=n,n.stateNode=t}return qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Or(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[an]=n}else Za(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),t=!1}else a=lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Wn(n),n):(Wn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Or(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[an]=n}else Za(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Wn(n),n):(Wn(n),null)}return Wn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),yl(n,n.updateQueue),qe(n),null);case 4:return It(),t===null&&yf(n.stateNode.containerInfo),qe(n),null;case 10:return Fi(n.type),qe(n),null;case 19:if(nt(tn),s=n.memoizedState,s===null)return qe(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)to(s,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ll(t),f!==null){for(n.flags|=128,to(s,!1),t=f.updateQueue,n.updateQueue=t,yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)cp(a,t),a=a.sibling;return St(tn,tn.current&1|2),Se&&Bi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&E()>Al&&(n.flags|=128,c=!0,to(s,!1),n.lanes=4194304)}else{if(!c)if(t=ll(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,yl(n,t),to(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Se)return qe(n),null}else 2*E()-s.renderingStartTime>Al&&a!==536870912&&(n.flags|=128,c=!0,to(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=E(),t.sibling=null,a=tn.current,St(tn,c?a&1|2:a&1),Se&&Bi(n,s.treeForkCount),t):(qe(n),null);case 22:case 23:return Wn(n),yu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&nt(Ja),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(rn),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function sx(t,n){switch(su(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Fi(rn),It(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 31:if(n.memoizedState!==null){if(Wn(n),n.alternate===null)throw Error(r(340));Za()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Wn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Za()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nt(tn),null;case 4:return It(),null;case 10:return Fi(n.type),null;case 22:case 23:return Wn(n),yu(),t!==null&&nt(Ja),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Fi(rn),null;case 25:return null;default:return null}}function zm(t,n){switch(su(n),n.tag){case 3:Fi(rn),It();break;case 26:case 27:case 5:he(n);break;case 4:It();break;case 31:n.memoizedState!==null&&Wn(n);break;case 13:Wn(n);break;case 19:nt(tn);break;case 10:Fi(n.type);break;case 22:case 23:Wn(n),yu(),t!==null&&nt(Ja);break;case 24:Fi(rn)}}function eo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(T){Pe(n,n.return,T)}}function _a(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,c=n;var B=a,J=T;try{J()}catch(ut){Pe(c,B,ut)}}}s=s.next}while(s!==f)}}catch(ut){Pe(n,n.return,ut)}}function Bm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Rp(n,a)}catch(s){Pe(t,t.return,s)}}}function Im(t,n,a){a.props=ir(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Pe(t,n,s)}}function no(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Pe(t,n,c)}}function Ei(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Pe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(t,n,c)}else a.current=null}function Fm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Pe(t,t.return,c)}}function $u(t,n,a){try{var s=t.stateNode;Cx(s,t.type,a,n),s[_n]=n}catch(c){Pe(t,t.return,c)}}function Hm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ta(t.type)||t.tag===4}function tf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Hm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ta(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ef(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Oi));else if(s!==4&&(s===27&&Ta(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ef(t,n,a),t=t.sibling;t!==null;)ef(t,n,a),t=t.sibling}function Ml(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ta(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ml(t,n,a),t=t.sibling;t!==null;)Ml(t,n,a),t=t.sibling}function Gm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,s,a),n[an]=t,n[_n]=a}catch(f){Pe(t,t.return,f)}}var ki=!1,ln=!1,nf=!1,Vm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function ox(t,n){if(t=t.containerInfo,Tf=Xl,t=tp(t),Zc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,T=-1,B=-1,J=0,ut=0,pt=t,et=null;e:for(;;){for(var st;pt!==a||c!==0&&pt.nodeType!==3||(T=g+c),pt!==f||s!==0&&pt.nodeType!==3||(B=g+s),pt.nodeType===3&&(g+=pt.nodeValue.length),(st=pt.firstChild)!==null;)et=pt,pt=st;for(;;){if(pt===t)break e;if(et===a&&++J===c&&(T=g),et===f&&++ut===s&&(B=g),(st=pt.nextSibling)!==null)break;pt=et,et=pt.parentNode}pt=st}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(bf={focusedElem:t,selectionRange:a},Xl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ht=ir(a.type,c);t=s.getSnapshotBeforeUpdate(Ht,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(ee){Pe(a,a.return,ee)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Cf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Cf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Xm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:qi(t,a),s&4&&eo(5,a);break;case 1:if(qi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Pe(a,a.return,g)}else{var c=ir(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Pe(a,a.return,g)}}s&64&&Bm(a),s&512&&no(a,a.return);break;case 3:if(qi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Rp(t,n)}catch(g){Pe(a,a.return,g)}}break;case 27:n===null&&s&4&&Gm(a);case 26:case 5:qi(t,a),n===null&&s&4&&Fm(a),s&512&&no(a,a.return);break;case 12:qi(t,a);break;case 31:qi(t,a),s&4&&qm(t,a);break;case 13:qi(t,a),s&4&&Ym(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=gx.bind(null,a),zx(t,a))));break;case 22:if(s=a.memoizedState!==null||ki,!s){n=n!==null&&n.memoizedState!==null||ln,c=ki;var f=ln;ki=s,(ln=n)&&!f?Yi(t,a,(a.subtreeFlags&8772)!==0):qi(t,a),ki=c,ln=f}break;case 30:break;default:qi(t,a)}}function km(t){var n=t.alternate;n!==null&&(t.alternate=null,km(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&A(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ye=null,Nn=!1;function Wi(t,n,a){for(a=a.child;a!==null;)Wm(t,n,a),a=a.sibling}function Wm(t,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:ln||Ei(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Ei(a,n);var s=Ye,c=Nn;Ta(a.type)&&(Ye=a.stateNode,Nn=!1),Wi(t,n,a),fo(a.stateNode),Ye=s,Nn=c;break;case 5:ln||Ei(a,n);case 6:if(s=Ye,c=Nn,Ye=null,Wi(t,n,a),Ye=s,Nn=c,Ye!==null)if(Nn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){Pe(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){Pe(a,n,f)}break;case 18:Ye!==null&&(Nn?(t=Ye,Bg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),es(t)):Bg(Ye,a.stateNode));break;case 4:s=Ye,c=Nn,Ye=a.stateNode.containerInfo,Nn=!0,Wi(t,n,a),Ye=s,Nn=c;break;case 0:case 11:case 14:case 15:_a(2,a,n),ln||_a(4,a,n),Wi(t,n,a);break;case 1:ln||(Ei(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Im(a,n,s)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:ln=(s=ln)||a.memoizedState!==null,Wi(t,n,a),ln=s;break;default:Wi(t,n,a)}}function qm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{es(t)}catch(a){Pe(n,n.return,a)}}}function Ym(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{es(t)}catch(a){Pe(n,n.return,a)}}function lx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Vm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Vm),n;default:throw Error(r(435,t.tag))}}function El(t,n){var a=lx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=_x.bind(null,t,s);s.then(c,c)}})}function On(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,g=n,T=g;t:for(;T!==null;){switch(T.tag){case 27:if(Ta(T.type)){Ye=T.stateNode,Nn=!1;break t}break;case 5:Ye=T.stateNode,Nn=!1;break t;case 3:case 4:Ye=T.stateNode.containerInfo,Nn=!0;break t}T=T.return}if(Ye===null)throw Error(r(160));Wm(f,g,c),Ye=null,Nn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)jm(n,t),n=n.sibling}var fi=null;function jm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:On(n,t),Pn(t),s&4&&(_a(3,t,t.return),eo(3,t),_a(5,t,t.return));break;case 1:On(n,t),Pn(t),s&512&&(ln||a===null||Ei(a,a.return)),s&64&&ki&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=fi;if(On(n,t),Pn(t),s&512&&(ln||a===null||Ei(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Va]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,s,a),f[an]=t,_t(f),s=f;break t;case"link":var g=jg("link","href",c).get(s+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=jg("meta","content",c).get(s+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[an]=t,_t(f),s=f}t.stateNode=s}else Zg(c,t.type,t.stateNode);else t.stateNode=Yg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Zg(c,t.type,t.stateNode):Yg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&$u(t,t.memoizedProps,a.memoizedProps)}break;case 27:On(n,t),Pn(t),s&512&&(ln||a===null||Ei(a,a.return)),a!==null&&s&4&&$u(t,t.memoizedProps,a.memoizedProps);break;case 5:if(On(n,t),Pn(t),s&512&&(ln||a===null||Ei(a,a.return)),t.flags&32){c=t.stateNode;try{Tr(c,"")}catch(Ht){Pe(t,t.return,Ht)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,$u(t,c,a!==null?a.memoizedProps:c)),s&1024&&(nf=!0);break;case 6:if(On(n,t),Pn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Ht){Pe(t,t.return,Ht)}}break;case 3:if(Fl=null,c=fi,fi=Bl(n.containerInfo),On(n,t),fi=c,Pn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{es(n.containerInfo)}catch(Ht){Pe(t,t.return,Ht)}nf&&(nf=!1,Zm(t));break;case 4:s=fi,fi=Bl(t.stateNode.containerInfo),On(n,t),Pn(t),fi=s;break;case 12:On(n,t),Pn(t);break;case 31:On(n,t),Pn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,El(t,s)));break;case 13:On(n,t),Pn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bl=E()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,El(t,s)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=ki,ut=ln;if(ki=J||c,ln=ut||B,On(n,t),ln=ut,ki=J,Pn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||ki||ln||ar(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=B.stateNode;var pt=B.memoizedProps.style,et=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Ht){Pe(B,B.return,Ht)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Ht){Pe(B,B.return,Ht)}}}else if(n.tag===18){if(a===null){B=n;try{var st=B.stateNode;c?Ig(st,!0):Ig(B.stateNode,!1)}catch(Ht){Pe(B,B.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,El(t,a))));break;case 19:On(n,t),Pn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,El(t,s)));break;case 30:break;case 21:break;default:On(n,t),Pn(t)}}function Pn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Hm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=tf(t);Ml(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Tr(g,""),a.flags&=-33);var T=tf(t);Ml(t,T,g);break;case 3:case 4:var B=a.stateNode.containerInfo,J=tf(t);ef(t,J,B);break;default:throw Error(r(161))}}catch(ut){Pe(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Zm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Zm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Xm(t,n.alternate,n),n=n.sibling}function ar(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),ar(n);break;case 1:Ei(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Im(n,n.return,a),ar(n);break;case 27:fo(n.stateNode);case 26:case 5:Ei(n,n.return),ar(n);break;case 22:n.memoizedState===null&&ar(n);break;case 30:ar(n);break;default:ar(n)}t=t.sibling}}function Yi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Yi(c,f,a),eo(4,f);break;case 1:if(Yi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Pe(s,s.return,J)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Ap(B[c],T)}catch(J){Pe(s,s.return,J)}}a&&g&64&&Bm(f),no(f,f.return);break;case 27:Gm(f);case 26:case 5:Yi(c,f,a),a&&s===null&&g&4&&Fm(f),no(f,f.return);break;case 12:Yi(c,f,a);break;case 31:Yi(c,f,a),a&&g&4&&qm(c,f);break;case 13:Yi(c,f,a),a&&g&4&&Ym(c,f);break;case 22:f.memoizedState===null&&Yi(c,f,a),no(f,f.return);break;case 30:break;default:Yi(c,f,a)}n=n.sibling}}function af(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Vs(a))}function rf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Vs(t))}function hi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Km(t,n,a,s),n=n.sibling}function Km(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:hi(t,n,a,s),c&2048&&eo(9,n);break;case 1:hi(t,n,a,s);break;case 3:hi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Vs(t)));break;case 12:if(c&2048){hi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Pe(n,n.return,B)}}else hi(t,n,a,s);break;case 31:hi(t,n,a,s);break;case 13:hi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?hi(t,n,a,s):io(t,n):f._visibility&2?hi(t,n,a,s):(f._visibility|=2,kr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&af(g,n);break;case 24:hi(t,n,a,s),c&2048&&rf(n.alternate,n);break;default:hi(t,n,a,s)}}function kr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,T=a,B=s,J=g.flags;switch(g.tag){case 0:case 11:case 15:kr(f,g,T,B,c),eo(8,g);break;case 23:break;case 22:var ut=g.stateNode;g.memoizedState!==null?ut._visibility&2?kr(f,g,T,B,c):io(f,g):(ut._visibility|=2,kr(f,g,T,B,c)),c&&J&2048&&af(g.alternate,g);break;case 24:kr(f,g,T,B,c),c&&J&2048&&rf(g.alternate,g);break;default:kr(f,g,T,B,c)}n=n.sibling}}function io(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:io(a,s),c&2048&&af(s.alternate,s);break;case 24:io(a,s),c&2048&&rf(s.alternate,s);break;default:io(a,s)}n=n.sibling}}var ao=8192;function Wr(t,n,a){if(t.subtreeFlags&ao)for(t=t.child;t!==null;)Qm(t,n,a),t=t.sibling}function Qm(t,n,a){switch(t.tag){case 26:Wr(t,n,a),t.flags&ao&&t.memoizedState!==null&&jx(a,fi,t.memoizedState,t.memoizedProps);break;case 5:Wr(t,n,a);break;case 3:case 4:var s=fi;fi=Bl(t.stateNode.containerInfo),Wr(t,n,a),fi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=ao,ao=16777216,Wr(t,n,a),ao=s):Wr(t,n,a));break;default:Wr(t,n,a)}}function Jm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ro(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,tg(s,t)}Jm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$m(t),t=t.sibling}function $m(t){switch(t.tag){case 0:case 11:case 15:ro(t),t.flags&2048&&_a(9,t,t.return);break;case 3:ro(t);break;case 12:ro(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Tl(t)):ro(t);break;default:ro(t)}}function Tl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,tg(s,t)}Jm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_a(8,n,n.return),Tl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tl(n));break;default:Tl(n)}t=t.sibling}}function tg(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Vs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=t;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(km(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var cx={getCacheForType:function(t){var n=Sn(rn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(rn).controller.signal}},ux=typeof WeakMap=="function"?WeakMap:Map,De=0,Xe=null,me=null,ve=0,Oe=0,qn=null,va=!1,qr=!1,sf=!1,ji=0,Je=0,xa=0,rr=0,of=0,Yn=0,Yr=0,so=null,zn=null,lf=!1,bl=0,eg=0,Al=1/0,Rl=null,Sa=null,fn=0,ya=null,jr=null,Zi=0,cf=0,uf=null,ng=null,oo=0,ff=null;function jn(){return(De&2)!==0&&ve!==0?ve&-ve:z.T!==null?_f():Ga()}function ig(){if(Yn===0)if((ve&536870912)===0||Se){var t=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),Yn=t}else Yn=536870912;return t=kn.current,t!==null&&(t.flags|=32),Yn}function Bn(t,n,a){(t===Xe&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)&&(Zr(t,0),Ma(t,ve,Yn,!1)),Rn(t,a),((De&2)===0||t!==Xe)&&(t===Xe&&((De&2)===0&&(rr|=a),Je===4&&Ma(t,ve,Yn,!1)),Ti(t))}function ag(t,n,a){if((De&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ft(t,n),c=s?dx(t,n):df(t,n,!0),f=s;do{if(c===0){qr&&!s&&Ma(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!fx(a)){c=df(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var T=t;c=so;var B=T.current.memoizedState.isDehydrated;if(B&&(Zr(T,g).flags|=256),g=df(T,g,!1),g!==2){if(sf&&!B){T.errorRecoveryDisabledLanes|=f,rr|=f,c=4;break t}f=zn,zn=c,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Zr(t,0),Ma(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ma(s,n,Yn,!va);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=bl+300-E(),10<c)){if(Ma(s,n,Yn,!va),mt(s,0,!0)!==0)break t;Zi=n,s.timeoutHandle=Pg(rg.bind(null,s,a,zn,Rl,lf,n,Yn,rr,Yr,va,f,"Throttled",-0,0),c);break t}rg(s,a,zn,Rl,lf,n,Yn,rr,Yr,va,f,null,-0,0)}}break}while(!0);Ti(t)}function rg(t,n,a,s,c,f,g,T,B,J,ut,pt,et,st){if(t.timeoutHandle=-1,pt=n.subtreeFlags,pt&8192||(pt&16785408)===16785408){pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oi},Qm(n,f,pt);var Ht=(f&62914560)===f?bl-E():(f&4194048)===f?eg-E():0;if(Ht=Zx(pt,Ht),Ht!==null){Zi=f,t.cancelPendingCommit=Ht(dg.bind(null,t,n,f,a,s,c,g,T,B,ut,pt,null,et,st)),Ma(t,f,g,!J);return}}dg(t,n,f,a,s,c,g,T,B)}function fx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(t,n,a,s){n&=~of,n&=~rr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&Cs(t,a,n)}function Cl(){return(De&6)===0?(lo(0),!1):!0}function hf(){if(me!==null){if(Oe===0)var t=me.return;else t=me,Ii=Ka=null,Ru(t),Fr=null,ks=0,t=me;for(;t!==null;)zm(t.alternate,t),t=t.return;me=null}}function Zr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ux(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Zi=0,hf(),Xe=t,me=a=zi(t.current,null),ve=n,Oe=0,qn=null,va=!1,qr=Ft(t,n),sf=!1,Yr=Yn=of=rr=xa=Je=0,zn=so=null,lf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Pt(s),f=1<<c;n|=t[c],s&=~f}return ji=n,Zo(),a}function sg(t,n){le=null,z.H=Js,n===Ir||n===il?(n=Mp(),Oe=3):n===mu?(n=Mp(),Oe=4):Oe=n===Xu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,me===null&&(Je=1,_l(t,ei(n,t.current)))}function og(){var t=kn.current;return t===null?!0:(ve&4194048)===ve?ri===null:(ve&62914560)===ve||(ve&536870912)!==0?t===ri:!1}function lg(){var t=z.H;return z.H=Js,t===null?Js:t}function cg(){var t=z.A;return z.A=cx,t}function wl(){Je=4,va||(ve&4194048)!==ve&&kn.current!==null||(qr=!0),(xa&134217727)===0&&(rr&134217727)===0||Xe===null||Ma(Xe,ve,Yn,!1)}function df(t,n,a){var s=De;De|=2;var c=lg(),f=cg();(Xe!==t||ve!==n)&&(Rl=null,Zr(t,n)),n=!1;var g=Je;t:do try{if(Oe!==0&&me!==null){var T=me,B=qn;switch(Oe){case 8:hf(),g=6;break t;case 3:case 2:case 9:case 6:kn.current===null&&(n=!0);var J=Oe;if(Oe=0,qn=null,Kr(t,T,B,J),a&&qr){g=0;break t}break;default:J=Oe,Oe=0,qn=null,Kr(t,T,B,J)}}hx(),g=Je;break}catch(ut){sg(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Ii=Ka=null,De=s,z.H=c,z.A=f,me===null&&(Xe=null,ve=0,Zo()),g}function hx(){for(;me!==null;)ug(me)}function dx(t,n){var a=De;De|=2;var s=lg(),c=cg();Xe!==t||ve!==n?(Rl=null,Al=E()+500,Zr(t,n)):qr=Ft(t,n);t:do try{if(Oe!==0&&me!==null){n=me;var f=qn;e:switch(Oe){case 1:Oe=0,qn=null,Kr(t,n,f,1);break;case 2:case 9:if(Sp(f)){Oe=0,qn=null,fg(n);break}n=function(){Oe!==2&&Oe!==9||Xe!==t||(Oe=7),Ti(t)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Sp(f)?(Oe=0,qn=null,fg(n)):(Oe=0,qn=null,Kr(t,n,f,7));break;case 5:var g=null;switch(me.tag){case 26:g=me.memoizedState;case 5:case 27:var T=me;if(g?Kg(g):T.stateNode.complete){Oe=0,qn=null;var B=T.sibling;if(B!==null)me=B;else{var J=T.return;J!==null?(me=J,Dl(J)):me=null}break e}}Oe=0,qn=null,Kr(t,n,f,5);break;case 6:Oe=0,qn=null,Kr(t,n,f,6);break;case 8:hf(),Je=6;break t;default:throw Error(r(462))}}px();break}catch(ut){sg(t,ut)}while(!0);return Ii=Ka=null,z.H=s,z.A=c,De=a,me!==null?0:(Xe=null,ve=0,Zo(),Je)}function px(){for(;me!==null&&!je();)ug(me)}function ug(t){var n=Om(t.alternate,t,ji);t.memoizedProps=t.pendingProps,n===null?Dl(t):me=n}function fg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Cm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Cm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Ru(n);default:zm(a,n),n=me=cp(n,ji),n=Om(a,n,ji)}t.memoizedProps=t.pendingProps,n===null?Dl(t):me=n}function Kr(t,n,a,s){Ii=Ka=null,Ru(n),Fr=null,ks=0;var c=n.return;try{if(nx(t,c,n,a,ve)){Je=1,_l(t,ei(a,t.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Je=1,_l(t,ei(a,t.current)),me=null;return}n.flags&32768?(Se||s===1?t=!0:qr||(ve&536870912)!==0?t=!1:(va=t=!0,(s===2||s===9||s===3||s===6)&&(s=kn.current,s!==null&&s.tag===13&&(s.flags|=16384))),hg(n,t)):Dl(n)}function Dl(t){var n=t;do{if((n.flags&32768)!==0){hg(n,va);return}t=n.return;var a=rx(n.alternate,n,ji);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);Je===0&&(Je=5)}function hg(t,n){do{var a=sx(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);Je=6,me=null}function dg(t,n,a,s,c,f,g,T,B){t.cancelPendingCommit=null;do Ul();while(fn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=tu,$n(t,a,f,g,T,B),t===Xe&&(me=Xe=null,ve=0),jr=n,ya=t,Zi=a,cf=f,uf=c,ng=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,vx(lt,function(){return vg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,c=Z.p,Z.p=2,g=De,De|=4;try{ox(t,n,a)}finally{De=g,Z.p=c,z.T=s}}fn=1,pg(),mg(),gg()}}function pg(){if(fn===1){fn=0;var t=ya,n=jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=Z.p;Z.p=2;var c=De;De|=4;try{jm(n,t);var f=bf,g=tp(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&$d(T.ownerDocument.documentElement,T)){if(B!==null&&Zc(T)){var J=B.start,ut=B.end;if(ut===void 0&&(ut=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ut,T.value.length);else{var pt=T.ownerDocument||document,et=pt&&pt.defaultView||window;if(et.getSelection){var st=et.getSelection(),Ht=T.textContent.length,ee=Math.min(B.start,Ht),Ie=B.end===void 0?ee:Math.min(B.end,Ht);!st.extend&&ee>Ie&&(g=Ie,Ie=ee,ee=g);var q=Jd(T,ee),V=Jd(T,Ie);if(q&&V&&(st.rangeCount!==1||st.anchorNode!==q.node||st.anchorOffset!==q.offset||st.focusNode!==V.node||st.focusOffset!==V.offset)){var Q=pt.createRange();Q.setStart(q.node,q.offset),st.removeAllRanges(),ee>Ie?(st.addRange(Q),st.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),st.addRange(Q))}}}}for(pt=[],st=T;st=st.parentNode;)st.nodeType===1&&pt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<pt.length;T++){var dt=pt[T];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Xl=!!Tf,bf=Tf=null}finally{De=c,Z.p=s,z.T=a}}t.current=n,fn=2}}function mg(){if(fn===2){fn=0;var t=ya,n=jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=Z.p;Z.p=2;var c=De;De|=4;try{Xm(t,n.alternate,n)}finally{De=c,Z.p=s,z.T=a}}fn=3}}function gg(){if(fn===4||fn===3){fn=0,N();var t=ya,n=jr,a=Zi,s=ng;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,jr=ya=null,_g(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Sa=null),Mr(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,c=Z.p,Z.p=2,z.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var T=s[g];f(T.value,{componentStack:T.stack})}}finally{z.T=n,Z.p=c}}(Zi&3)!==0&&Ul(),Ti(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===ff?oo++:(oo=0,ff=t):oo=0,lo(0)}}function _g(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Vs(n)))}function Ul(){return pg(),mg(),gg(),vg()}function vg(){if(fn!==5)return!1;var t=ya,n=cf;cf=0;var a=Mr(Zi),s=z.T,c=Z.p;try{Z.p=32>a?32:a,z.T=null,a=uf,uf=null;var f=ya,g=Zi;if(fn=0,jr=ya=null,Zi=0,(De&6)!==0)throw Error(r(331));var T=De;if(De|=4,$m(f.current),Km(f,f.current,g,a),De=T,lo(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Et,f)}catch{}return!0}finally{Z.p=c,z.T=s,_g(t,n)}}function xg(t,n,a){n=ei(a,n),n=Vu(t.stateNode,n,2),t=pa(t,n,2),t!==null&&(Rn(t,2),Ti(t))}function Pe(t,n,a){if(t.tag===3)xg(t,t,a);else for(;n!==null;){if(n.tag===3){xg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Sa===null||!Sa.has(s))){t=ei(a,t),a=Sm(2),s=pa(n,a,2),s!==null&&(ym(a,s,n,t),Rn(s,2),Ti(s));break}}n=n.return}}function pf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new ux;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(sf=!0,c.add(a),t=mx.bind(null,t,n,a),n.then(t,t))}function mx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(ve&a)===a&&(Je===4||Je===3&&(ve&62914560)===ve&&300>E()-bl?(De&2)===0&&Zr(t,0):of|=a,Yr===ve&&(Yr=0)),Ti(t)}function Sg(t,n){n===0&&(n=Ne()),t=Ya(t,n),t!==null&&(Rn(t,n),Ti(t))}function gx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Sg(t,a)}function _x(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Sg(t,a)}function vx(t,n){return re(t,n)}var Ll=null,Qr=null,mf=!1,Nl=!1,gf=!1,Ea=0;function Ti(t){t!==Qr&&t.next===null&&(Qr===null?Ll=Qr=t:Qr=Qr.next=t),Nl=!0,mf||(mf=!0,Sx())}function lo(t,n){if(!gf&&Nl){gf=!0;do for(var a=!1,s=Ll;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=c&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Tg(s,f))}else f=ve,f=mt(s,s===Xe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ft(s,f)||(a=!0,Tg(s,f));s=s.next}while(a);gf=!1}}function xx(){yg()}function yg(){Nl=mf=!1;var t=0;Ea!==0&&Dx()&&(t=Ea);for(var n=E(),a=null,s=Ll;s!==null;){var c=s.next,f=Mg(s,n);f===0?(s.next=null,a===null?Ll=c:a.next=c,c===null&&(Qr=a)):(a=s,(t!==0||(f&3)!==0)&&(Nl=!0)),s=c}fn!==0&&fn!==5||lo(t),Ea!==0&&(Ea=0)}function Mg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Pt(f),T=1<<g,B=c[g];B===-1?((T&a)===0||(T&s)!==0)&&(c[g]=ae(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=Xe,a=ve,a=mt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ke(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ft(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ke(s),Mr(a)){case 2:case 8:a=xt;break;case 32:a=lt;break;case 268435456:a=At;break;default:a=lt}return s=Eg.bind(null,t),a=re(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ke(s),t.callbackPriority=2,t.callbackNode=null,2}function Eg(t,n){if(fn!==0&&fn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ul()&&t.callbackNode!==a)return null;var s=ve;return s=mt(t,t===Xe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(ag(t,s,n),Mg(t,E()),t.callbackNode!=null&&t.callbackNode===a?Eg.bind(null,t):null)}function Tg(t,n){if(Ul())return null;ag(t,n,!0)}function Sx(){Lx(function(){(De&6)!==0?re(ht,xx):yg()})}function _f(){if(Ea===0){var t=zr;t===0&&(t=Tt,Tt<<=1,(Tt&261888)===0&&(Tt=256)),Ea=t}return Ea}function bg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Go(""+t)}function Ag(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function yx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=bg((c[_n]||null).action),g=s.submitter;g&&(n=(n=g[_n]||null)?bg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new Wo("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ea!==0){var B=g?Ag(c,g):new FormData(c);zu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=g?Ag(c,g):new FormData(c),zu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var vf=0;vf<$c.length;vf++){var xf=$c[vf],Mx=xf.toLowerCase(),Ex=xf[0].toUpperCase()+xf.slice(1);ui(Mx,"on"+Ex)}ui(ip,"onAnimationEnd"),ui(ap,"onAnimationIteration"),ui(rp,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(F0,"onTransitionRun"),ui(H0,"onTransitionStart"),ui(G0,"onTransitionCancel"),ui(sp,"onTransitionEnd"),Qt("onMouseEnter",["mouseout","mouseover"]),Qt("onMouseLeave",["mouseout","mouseover"]),Qt("onPointerEnter",["pointerout","pointerover"]),Qt("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(co));function Rg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var T=s[g],B=T.instance,J=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ut){jo(ut)}c.currentTarget=null,f=B}else for(g=0;g<s.length;g++){if(T=s[g],B=T.instance,J=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ut){jo(ut)}c.currentTarget=null,f=B}}}}function ge(t,n){var a=n[Ds];a===void 0&&(a=n[Ds]=new Set);var s=t+"__bubble";a.has(s)||(Cg(n,t,2,!1),a.add(s))}function Sf(t,n,a){var s=0;n&&(s|=4),Cg(a,t,s,n)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function yf(t){if(!t[Ol]){t[Ol]=!0,Ut.forEach(function(a){a!=="selectionchange"&&(Tx.has(a)||Sf(a,!1,t),Sf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ol]||(n[Ol]=!0,Sf("selectionchange",!1,n))}}function Cg(t,n,a,s){switch(i_(n)){case 2:var c=Jx;break;case 8:c=$x;break;default:c=zf}a=c.bind(null,n,a,t),c=void 0,!Hc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Mf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var T=s.stateNode.containerInfo;if(T===c)break;if(g===4)for(g=s.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;T!==null;){if(g=W(T),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){s=f=g;continue t}T=T.parentNode}}s=s.return}Nd(function(){var J=f,ut=Ic(a),pt=[];t:{var et=op.get(t);if(et!==void 0){var st=Wo,Ht=t;switch(t){case"keypress":if(Xo(a)===0)break t;case"keydown":case"keyup":st=_0;break;case"focusin":Ht="focus",st=kc;break;case"focusout":Ht="blur",st=kc;break;case"beforeblur":case"afterblur":st=kc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=r0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=S0;break;case ip:case ap:case rp:st=l0;break;case sp:st=M0;break;case"scroll":case"scrollend":st=i0;break;case"wheel":st=T0;break;case"copy":case"cut":case"paste":st=u0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Id;break;case"toggle":case"beforetoggle":st=A0}var ee=(n&4)!==0,Ie=!ee&&(t==="scroll"||t==="scrollend"),q=ee?et!==null?et+"Capture":null:et;ee=[];for(var V=J,Q;V!==null;){var dt=V;if(Q=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Q===null||q===null||(dt=Us(V,q),dt!=null&&ee.push(uo(V,dt,Q))),Ie)break;V=V.return}0<ee.length&&(et=new st(et,Ht,null,a,ut),pt.push({event:et,listeners:ee}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",st=t==="mouseout"||t==="pointerout",et&&a!==Bc&&(Ht=a.relatedTarget||a.fromElement)&&(W(Ht)||Ht[sa]))break t;if((st||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,st?(Ht=a.relatedTarget||a.toElement,st=J,Ht=Ht?W(Ht):null,Ht!==null&&(Ie=u(Ht),ee=Ht.tag,Ht!==Ie||ee!==5&&ee!==27&&ee!==6)&&(Ht=null)):(st=null,Ht=J),st!==Ht)){if(ee=zd,dt="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(ee=Id,dt="onPointerLeave",q="onPointerEnter",V="pointer"),Ie=st==null?et:rt(st),Q=Ht==null?et:rt(Ht),et=new ee(dt,V+"leave",st,a,ut),et.target=Ie,et.relatedTarget=Q,dt=null,W(ut)===J&&(ee=new ee(q,V+"enter",Ht,a,ut),ee.target=Q,ee.relatedTarget=Ie,dt=ee),Ie=dt,st&&Ht)e:{for(ee=bx,q=st,V=Ht,Q=0,dt=q;dt;dt=ee(dt))Q++;dt=0;for(var $t=V;$t;$t=ee($t))dt++;for(;0<Q-dt;)q=ee(q),Q--;for(;0<dt-Q;)V=ee(V),dt--;for(;Q--;){if(q===V||V!==null&&q===V.alternate){ee=q;break e}q=ee(q),V=ee(V)}ee=null}else ee=null;st!==null&&wg(pt,et,st,ee,!1),Ht!==null&&Ie!==null&&wg(pt,Ie,Ht,ee,!0)}}t:{if(et=J?rt(J):window,st=et.nodeName&&et.nodeName.toLowerCase(),st==="select"||st==="input"&&et.type==="file")var Re=qd;else if(kd(et))if(Yd)Re=z0;else{Re=O0;var qt=N0}else st=et.nodeName,!st||st.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&zc(J.elementType)&&(Re=qd):Re=P0;if(Re&&(Re=Re(t,J))){Wd(pt,Re,a,ut);break t}qt&&qt(t,et,J),t==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&un(et,"number",et.value)}switch(qt=J?rt(J):window,t){case"focusin":(kd(qt)||qt.contentEditable==="true")&&(Cr=qt,Kc=J,Fs=null);break;case"focusout":Fs=Kc=Cr=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,ep(pt,a,ut);break;case"selectionchange":if(I0)break;case"keydown":case"keyup":ep(pt,a,ut)}var ce;if(qc)t:{switch(t){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Rr?Vd(t,a)&&(xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(Fd&&a.locale!=="ko"&&(Rr||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Rr&&(ce=Od()):(oa=ut,Gc="value"in oa?oa.value:oa.textContent,Rr=!0)),qt=Pl(J,xe),0<qt.length&&(xe=new Bd(xe,t,null,a,ut),pt.push({event:xe,listeners:qt}),ce?xe.data=ce:(ce=Xd(a),ce!==null&&(xe.data=ce)))),(ce=C0?w0(t,a):D0(t,a))&&(xe=Pl(J,"onBeforeInput"),0<xe.length&&(qt=new Bd("onBeforeInput","beforeinput",null,a,ut),pt.push({event:qt,listeners:xe}),qt.data=ce)),yx(pt,t,J,a,ut)}Rg(pt,n)})}function uo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Pl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Us(t,a),c!=null&&s.unshift(uo(t,c,f)),c=Us(t,n),c!=null&&s.push(uo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function bx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function wg(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var T=a,B=T.alternate,J=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||J===null||(B=J,c?(J=Us(a,f),J!=null&&g.unshift(uo(a,J,B))):c||(J=Us(a,f),J!=null&&g.push(uo(a,J,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Ax=/\r\n?/g,Rx=/\u0000|\uFFFD/g;function Dg(t){return(typeof t=="string"?t:""+t).replace(Ax,`
`).replace(Rx,"")}function Ug(t,n){return n=Dg(n),Dg(t)===n}function Be(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Tr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Tr(t,""+s);break;case"className":Le(t,"class",s);break;case"tabIndex":Le(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Le(t,a,s);break;case"style":Ud(t,s,f);break;case"data":if(n!=="object"){Le(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",c.name,c,null),Be(t,n,"formEncType",c.formEncType,c,null),Be(t,n,"formMethod",c.formMethod,c,null),Be(t,n,"formTarget",c.formTarget,c,null)):(Be(t,n,"encType",c.encType,c,null),Be(t,n,"method",c.method,c,null),Be(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Oi);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Go(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ge("beforetoggle",t),ge("toggle",t),Ve(t,"popover",s);break;case"xlinkActuate":pe(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":pe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":pe(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":pe(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":pe(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":pe(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":pe(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":pe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":pe(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ve(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=e0.get(a)||a,Ve(t,a,s))}}function Ef(t,n,a,s,c,f){switch(a){case"style":Ud(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Tr(t,s):(typeof s=="number"||typeof s=="bigint")&&Tr(t,""+s);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Oi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ve(t,a,s)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(t,n,f,g,a,null)}}c&&Be(t,n,"srcSet",a.srcSet,a,null),s&&Be(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var T=f=g=c=null,B=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":c=ut;break;case"type":g=ut;break;case"checked":B=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Be(t,n,s,ut,a,null)}}Cn(t,f,T,B,J,g,c,!1);return;case"select":ge("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":s=T;default:Be(t,n,c,T,a,null)}n=f,a=g,t.multiple=!!s,n!=null?$e(t,!!s,n,!1):a!=null&&$e(t,!!s,a,!0);return;case"textarea":ge("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Be(t,n,g,T,a,null)}Si(t,s,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Be(t,n,B,s,a,null)}return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(s=0;s<co.length;s++)ge(co[s],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(t,n,J,s,a,null)}return;default:if(zc(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&Ef(t,n,ut,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Be(t,n,T,s,a,null))}function Cx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,T=null,B=null,J=null,ut=null;for(st in a){var pt=a[st];if(a.hasOwnProperty(st)&&pt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":B=pt;default:s.hasOwnProperty(st)||Be(t,n,st,null,s,pt)}}for(var et in s){var st=s[et];if(pt=a[et],s.hasOwnProperty(et)&&(st!=null||pt!=null))switch(et){case"type":f=st;break;case"name":c=st;break;case"checked":J=st;break;case"defaultChecked":ut=st;break;case"value":g=st;break;case"defaultValue":T=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==pt&&Be(t,n,et,st,s,pt)}}En(t,g,T,B,J,ut,f,c);return;case"select":st=g=T=et=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":st=B;default:s.hasOwnProperty(f)||Be(t,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==B&&Be(t,n,c,f,s,B)}n=T,a=g,s=st,et!=null?$e(t,!!a,et,!1):!!s!=!!a&&(n!=null?$e(t,!!a,n,!0):$e(t,!!a,a?[]:"",!1));return;case"textarea":st=et=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Be(t,n,T,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":et=c;break;case"defaultValue":st=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Be(t,n,g,c,s,f)}Er(t,et,st);return;case"option":for(var Ht in a)if(et=a[Ht],a.hasOwnProperty(Ht)&&et!=null&&!s.hasOwnProperty(Ht))switch(Ht){case"selected":t.selected=!1;break;default:Be(t,n,Ht,null,s,et)}for(B in s)if(et=s[B],st=a[B],s.hasOwnProperty(B)&&et!==st&&(et!=null||st!=null))switch(B){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Be(t,n,B,et,s,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)et=a[ee],a.hasOwnProperty(ee)&&et!=null&&!s.hasOwnProperty(ee)&&Be(t,n,ee,null,s,et);for(J in s)if(et=s[J],st=a[J],s.hasOwnProperty(J)&&et!==st&&(et!=null||st!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Be(t,n,J,et,s,st)}return;default:if(zc(n)){for(var Ie in a)et=a[Ie],a.hasOwnProperty(Ie)&&et!==void 0&&!s.hasOwnProperty(Ie)&&Ef(t,n,Ie,void 0,s,et);for(ut in s)et=s[ut],st=a[ut],!s.hasOwnProperty(ut)||et===st||et===void 0&&st===void 0||Ef(t,n,ut,et,s,st);return}}for(var q in a)et=a[q],a.hasOwnProperty(q)&&et!=null&&!s.hasOwnProperty(q)&&Be(t,n,q,null,s,et);for(pt in s)et=s[pt],st=a[pt],!s.hasOwnProperty(pt)||et===st||et==null&&st==null||Be(t,n,pt,et,s,st)}function Lg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,T=c.duration;if(f&&T&&Lg(g)){for(g=0,T=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],J=B.startTime;if(J>T)break;var ut=B.transferSize,pt=B.initiatorType;ut&&Lg(pt)&&(B=B.responseEnd,g+=ut*(B<T?1:(T-J)/(B-J)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Tf=null,bf=null;function zl(t){return t.nodeType===9?t:t.ownerDocument}function Ng(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Og(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Af(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Rf=null;function Dx(){var t=window.event;return t&&t.type==="popstate"?t===Rf?!1:(Rf=t,!0):(Rf=null,!1)}var Pg=typeof setTimeout=="function"?setTimeout:void 0,Ux=typeof clearTimeout=="function"?clearTimeout:void 0,zg=typeof Promise=="function"?Promise:void 0,Lx=typeof queueMicrotask=="function"?queueMicrotask:typeof zg<"u"?function(t){return zg.resolve(null).then(t).catch(Nx)}:Pg;function Nx(t){setTimeout(function(){throw t})}function Ta(t){return t==="head"}function Bg(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),es(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")fo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,fo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[Va]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&fo(t.ownerDocument.body);a=c}while(a);es(n)}function Ig(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Cf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cf(a),A(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ox(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Va])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=si(t.nextSibling),t===null)break}return null}function Px(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=si(t.nextSibling),t===null))return null;return t}function Fg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=si(t.nextSibling),t===null))return null;return t}function wf(t){return t.data==="$?"||t.data==="$~"}function Df(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function zx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Uf=null;function Hg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Gg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Vg(t,n,a){switch(n=zl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function fo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);A(t)}var oi=new Map,Xg=new Set;function Bl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ki=Z.d;Z.d={f:Bx,r:Ix,D:Fx,C:Hx,L:Gx,m:Vx,X:kx,S:Xx,M:Wx};function Bx(){var t=Ki.f(),n=Cl();return t||n}function Ix(t){var n=at(t);n!==null&&n.tag===5&&n.type==="form"?sm(n):Ki.r(t)}var Jr=typeof document>"u"?null:document;function kg(t,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var c=_e(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Xg.has(c)||(Xg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Mn(n,"link",t),_t(n),s.head.appendChild(n)))}}function Fx(t){Ki.D(t),kg("dns-prefetch",t,null)}function Hx(t,n){Ki.C(t,n),kg("preconnect",t,n)}function Gx(t,n,a){Ki.L(t,n,a);var s=Jr;if(s&&t&&n){var c='link[rel="preload"][as="'+_e(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+_e(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+_e(a.imageSizes)+'"]')):c+='[href="'+_e(t)+'"]';var f=c;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}oi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),oi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(ho(f))||n==="script"&&s.querySelector(po(f))||(n=s.createElement("link"),Mn(n,"link",t),_t(n),s.head.appendChild(n)))}}function Vx(t,n){Ki.m(t,n);var a=Jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+_e(s)+'"][href="'+_e(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!oi.has(f)&&(t=_({rel:"modulepreload",href:t},n),oi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(po(f)))return}s=a.createElement("link"),Mn(s,"link",t),_t(s),a.head.appendChild(s)}}}function Xx(t,n,a){Ki.S(t,n,a);var s=Jr;if(s&&t){var c=Y(s).hoistableStyles,f=$r(t);n=n||"default";var g=c.get(f);if(!g){var T={loading:0,preload:null};if(g=s.querySelector(ho(f)))T.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=oi.get(f))&&Lf(t,a);var B=g=s.createElement("link");_t(B),Mn(B,"link",t),B._p=new Promise(function(J,ut){B.onload=J,B.onerror=ut}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Il(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:T},c.set(f,g)}}}function kx(t,n){Ki.X(t,n);var a=Jr;if(a&&t){var s=Y(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(po(c)),f||(t=_({src:t,async:!0},n),(n=oi.get(c))&&Nf(t,n),f=a.createElement("script"),_t(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Wx(t,n){Ki.M(t,n);var a=Jr;if(a&&t){var s=Y(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(po(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=oi.get(c))&&Nf(t,n),f=a.createElement("script"),_t(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Wg(t,n,a,s){var c=(c=it.current)?Bl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=Y(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=Y(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(ho(t)))&&!f._p&&(g.instance=f,g.state.loading=5),oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(t,a),f||qx(c,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=Y(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+_e(t)+'"'}function ho(t){return'link[rel="stylesheet"]['+t+"]"}function qg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function qx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),_t(n),t.head.appendChild(n))}function ts(t){return'[src="'+_e(t)+'"]'}function po(t){return"script[async]"+t}function Yg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+_e(a.href)+'"]');if(s)return n.instance=s,_t(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),_t(s),Mn(s,"style",c),Il(s,a.precedence,t),n.instance=s;case"stylesheet":c=$r(a.href);var f=t.querySelector(ho(c));if(f)return n.state.loading|=4,n.instance=f,_t(f),f;s=qg(a),(c=oi.get(c))&&Lf(s,c),f=(t.ownerDocument||t).createElement("link"),_t(f);var g=f;return g._p=new Promise(function(T,B){g.onload=T,g.onerror=B}),Mn(f,"link",s),n.state.loading|=4,Il(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(c=t.querySelector(po(f)))?(n.instance=c,_t(c),c):(s=a,(c=oi.get(f))&&(s=_({},a),Nf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),_t(c),Mn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Il(s,a.precedence,t));return n.instance}function Il(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var T=s[g];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Lf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Nf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Fl=null;function jg(t,n,a){if(Fl===null){var s=new Map,c=Fl=new Map;c.set(a,s)}else c=Fl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Va]||f[an]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var T=s.get(g);T?T.push(f):s.set(g,[f])}}return s}function Zg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Yx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Kg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function jx(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=$r(s.href),f=n.querySelector(ho(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Hl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,_t(f);return}f=n.ownerDocument||n,s=qg(s),(c=oi.get(c))&&Lf(s,c),f=f.createElement("link"),_t(f);var g=f;g._p=new Promise(function(T,B){g.onload=T,g.onerror=B}),Mn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Hl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Of=0;function Zx(t,n){return t.stylesheets&&t.count===0&&Vl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Vl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Of===0&&(Of=62500*wx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Of?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Hl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Gl=null;function Vl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gl=new Map,n.forEach(Kx,t),Gl=null,Hl.call(t))}function Kx(t,n){if(!(n.state.loading&4)){var a=Gl.get(t);if(a)var s=a.get(null);else{a=new Map,Gl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Hl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var mo={$$typeof:U,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Qx(t,n,a,s,c,f,g,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Qg(t,n,a,s,c,f,g,T,B,J,ut,pt){return t=new Qx(t,n,a,g,B,J,ut,pt,T),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),t.current=f,f.stateNode=t,n=hu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},gu(f),t}function Jg(t){return t?(t=Ur,t):Ur}function $g(t,n,a,s,c,f){c=Jg(c),s.context===null?s.context=c:s.pendingContext=c,s=da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=pa(t,s,n),a!==null&&(Bn(a,t,n),qs(a,t,n))}function t_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Pf(t,n){t_(t,n),(t=t.alternate)&&t_(t,n)}function e_(t){if(t.tag===13||t.tag===31){var n=Ya(t,67108864);n!==null&&Bn(n,t,67108864),Pf(t,67108864)}}function n_(t){if(t.tag===13||t.tag===31){var n=jn();n=yr(n);var a=Ya(t,n);a!==null&&Bn(a,t,n),Pf(t,n)}}var Xl=!0;function Jx(t,n,a,s){var c=z.T;z.T=null;var f=Z.p;try{Z.p=2,zf(t,n,a,s)}finally{Z.p=f,z.T=c}}function $x(t,n,a,s){var c=z.T;z.T=null;var f=Z.p;try{Z.p=8,zf(t,n,a,s)}finally{Z.p=f,z.T=c}}function zf(t,n,a,s){if(Xl){var c=Bf(s);if(c===null)Mf(t,n,s,kl,a),a_(t,s);else if(eS(c,t,n,a,s))s.stopPropagation();else if(a_(t,s),n&4&&-1<tS.indexOf(t)){for(;c!==null;){var f=at(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=yt(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var B=1<<31-Pt(g);T.entanglements[1]|=B,g&=~B}Ti(f),(De&6)===0&&(Al=E()+500,lo(0))}}break;case 31:case 13:T=Ya(f,2),T!==null&&Bn(T,f,2),Cl(),Pf(f,2)}if(f=Bf(s),f===null&&Mf(t,n,s,kl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Mf(t,n,s,null,a)}}function Bf(t){return t=Ic(t),If(t)}var kl=null;function If(t){if(kl=null,t=W(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return kl=t,null}function i_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case ht:return 2;case xt:return 8;case lt:case Zt:return 32;case At:return 268435456;default:return 32}default:return 32}}var Ff=!1,ba=null,Aa=null,Ra=null,go=new Map,_o=new Map,Ca=[],tS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a_(t,n){switch(t){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(n.pointerId)}}function vo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=at(n),n!==null&&e_(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function eS(t,n,a,s,c){switch(n){case"focusin":return ba=vo(ba,t,n,a,s,c),!0;case"dragenter":return Aa=vo(Aa,t,n,a,s,c),!0;case"mouseover":return Ra=vo(Ra,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return go.set(f,vo(go.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,_o.set(f,vo(_o.get(f)||null,t,n,a,s,c)),!0}return!1}function r_(t){var n=W(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ws(t.priority,function(){n_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,ws(t.priority,function(){n_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Bf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Bc=s,a.target.dispatchEvent(s),Bc=null}else return n=at(a),n!==null&&e_(n),t.blockedOn=a,!1;n.shift()}return!0}function s_(t,n,a){Wl(t)&&a.delete(n)}function nS(){Ff=!1,ba!==null&&Wl(ba)&&(ba=null),Aa!==null&&Wl(Aa)&&(Aa=null),Ra!==null&&Wl(Ra)&&(Ra=null),go.forEach(s_),_o.forEach(s_)}function ql(t,n){t.blockedOn===n&&(t.blockedOn=null,Ff||(Ff=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,nS)))}var Yl=null;function o_(t){Yl!==t&&(Yl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Yl===t&&(Yl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(If(s||a)===null)continue;break}var f=at(a);f!==null&&(t.splice(n,3),n-=3,zu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function es(t){function n(B){return ql(B,t)}ba!==null&&ql(ba,t),Aa!==null&&ql(Aa,t),Ra!==null&&ql(Ra,t),go.forEach(n),_o.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)r_(a),a.blockedOn===null&&Ca.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[_n]||null;if(typeof f=="function")g||o_(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[_n]||null)T=g.formAction;else if(If(c)!==null)continue}else T=g.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),o_(a)}}}function l_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Hf(t){this._internalRoot=t}jl.prototype.render=Hf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=jn();$g(a,s,t,n,null,null)},jl.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;$g(t.current,2,null,t,null,null),Cl(),n[sa]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ga();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,t),a===0&&r_(t)}};var c_=e.version;if(c_!=="19.2.0")throw Error(r(527,c_,"19.2.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var iS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Et=Zl.inject(iS),Rt=Zl}catch{}}return So.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=gm,f=_m,g=vm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Qg(t,1,!1,null,null,a,s,null,c,f,g,l_),t[sa]=n.current,yf(t),new Hf(n)},So.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=gm,g=_m,T=vm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Qg(t,1,!0,n,a??null,s,c,B,f,g,T,l_),n.context=Jg(null),a=n.current,s=jn(),s=yr(s),c=da(s),c.callback=null,pa(a,c,s),a=s,n.current.lanes=a,Rn(n,a),Ti(n),t[sa]=n.current,yf(t),new jl(n)},So.version="19.2.0",So}var x_;function dS(){if(x_)return Xf.exports;x_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Xf.exports=hS(),Xf.exports}var pS=dS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _d="180",mS=0,S_=1,gS=2,Ev=1,_S=2,na=3,Fa=0,Fn=1,ia=2,Ba=0,vs=1,y_=2,M_=3,E_=4,vS=5,pr=100,xS=101,SS=102,yS=103,MS=104,ES=200,TS=201,bS=202,AS=203,Rh=204,Ch=205,RS=206,CS=207,wS=208,DS=209,US=210,LS=211,NS=212,OS=213,PS=214,wh=0,Dh=1,Uh=2,Ss=3,Lh=4,Nh=5,Oh=6,Ph=7,vd=0,zS=1,BS=2,Ia=0,IS=1,FS=2,HS=3,GS=4,VS=5,XS=6,kS=7,Tv=300,ys=301,Ms=302,zh=303,Bh=304,Dc=306,Ih=1e3,gr=1001,Fh=1002,vi=1003,WS=1004,Kl=1005,Ai=1006,Yf=1007,_r=1008,Di=1009,bv=1010,Av=1011,wo=1012,xd=1013,vr=1014,aa=1015,Oo=1016,Sd=1017,yd=1018,Do=1020,Rv=35902,Cv=35899,wv=1021,Dv=1022,_i=1023,Uo=1026,Lo=1027,Uv=1028,Md=1029,Lv=1030,Ed=1031,Td=1033,Sc=33776,yc=33777,Mc=33778,Ec=33779,Hh=35840,Gh=35841,Vh=35842,Xh=35843,kh=36196,Wh=37492,qh=37496,Yh=37808,jh=37809,Zh=37810,Kh=37811,Qh=37812,Jh=37813,$h=37814,td=37815,ed=37816,nd=37817,id=37818,ad=37819,rd=37820,sd=37821,od=36492,ld=36494,cd=36495,ud=36283,fd=36284,hd=36285,dd=36286,qS=3200,YS=3201,Nv=0,jS=1,za="",ci="srgb",Es="srgb-linear",bc="linear",Fe="srgb",ns=7680,T_=519,ZS=512,KS=513,QS=514,Ov=515,JS=516,$S=517,ty=518,ey=519,b_=35044,A_="300 es",Ri=2e3,Ac=2001;class bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jf=Math.PI/180,pd=180/Math.PI;function Po(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function ye(o,e,i){return Math.max(e,Math.min(i,o))}function ny(o,e){return(o%e+e)%e}function Zf(o,e,i){return(1-i)*o+i*e}function yo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function In(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Me{constructor(e=0,i=0){Me.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],x=r[l+2],_=r[l+3];const S=u[h+0],M=u[h+1],b=u[h+2],R=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=_;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=b,e[i+3]=R;return}if(_!==R||m!==S||p!==M||x!==b){let y=1-d;const v=m*S+p*M+x*b+_*R,L=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const H=Math.sqrt(U),F=Math.atan2(H,v*L);y=Math.sin(y*F)/H,d=Math.sin(d*F)/H}const D=d*L;if(m=m*y+S*D,p=p*y+M*D,x=x*y+b*D,_=_*y+R*D,y===1-d){const H=1/Math.sqrt(m*m+p*p+x*x+_*_);m*=H,p*=H,x*=H,_*=H}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],x=r[l+3],_=u[h],S=u[h+1],M=u[h+2],b=u[h+3];return e[i]=d*b+x*_+m*M-p*S,e[i+1]=m*b+x*S+p*_-d*M,e[i+2]=p*b+x*M+d*S-m*_,e[i+3]=x*b-d*_-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),x=d(l/2),_=d(u/2),S=m(r/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*x*_+p*M*b,this._y=p*M*_-S*x*b,this._z=p*x*b+S*M*_,this._w=p*x*_-S*M*b;break;case"YXZ":this._x=S*x*_+p*M*b,this._y=p*M*_-S*x*b,this._z=p*x*b-S*M*_,this._w=p*x*_+S*M*b;break;case"ZXY":this._x=S*x*_-p*M*b,this._y=p*M*_+S*x*b,this._z=p*x*b+S*M*_,this._w=p*x*_-S*M*b;break;case"ZYX":this._x=S*x*_-p*M*b,this._y=p*M*_+S*x*b,this._z=p*x*b-S*M*_,this._w=p*x*_+S*M*b;break;case"YZX":this._x=S*x*_+p*M*b,this._y=p*M*_+S*x*b,this._z=p*x*b-S*M*_,this._w=p*x*_-S*M*b;break;case"XZY":this._x=S*x*_-p*M*b,this._y=p*M*_-S*x*b,this._z=p*x*b+S*M*_,this._w=p*x*_+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],_=i[10],S=r+d+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(x-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+h*d+l*p-u*m,this._y=l*x+h*m+u*d-r*p,this._z=u*x+h*p+r*m-l*d,this._w=h*x-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),x=Math.atan2(p,d),_=Math.sin((1-i)*x)/p,S=Math.sin(i*x)/p;return this._w=h*_+this._w*S,this._x=r*_+this._x*S,this._y=l*_+this._y*S,this._z=u*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,i=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(R_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(R_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),x=2*(d*i-u*l),_=2*(u*r-h*i);return this.x=i+m*p+h*_-d*x,this.y=r+m*x+d*p-u*_,this.z=l+m*_+u*x-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Kf.copy(this).projectOnVector(e),this.sub(Kf)}reflect(e){return this.sub(Kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kf=new K,R_=new zo;class ue{constructor(e,i,r,l,u,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=d,x[3]=i,x[4]=u,x[5]=m,x[6]=r,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],x=r[4],_=r[7],S=r[2],M=r[5],b=r[8],R=l[0],y=l[3],v=l[6],L=l[1],U=l[4],D=l[7],H=l[2],F=l[5],P=l[8];return u[0]=h*R+d*L+m*H,u[3]=h*y+d*U+m*F,u[6]=h*v+d*D+m*P,u[1]=p*R+x*L+_*H,u[4]=p*y+x*U+_*F,u[7]=p*v+x*D+_*P,u[2]=S*R+M*L+b*H,u[5]=S*y+M*U+b*F,u[8]=S*v+M*D+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8];return i*h*x-i*d*p-r*u*x+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],_=x*h-d*p,S=d*m-x*u,M=p*u-h*m,b=i*_+r*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=_*R,e[1]=(l*p-x*r)*R,e[2]=(d*r-l*h)*R,e[3]=S*R,e[4]=(x*i-l*m)*R,e[5]=(l*u-d*i)*R,e[6]=M*R,e[7]=(r*m-p*i)*R,e[8]=(h*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Qf.makeScale(e,i)),this}rotate(e){return this.premultiply(Qf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Qf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new ue;function Pv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Rc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function iy(){const o=Rc("canvas");return o.style.display="block",o}const C_={};function No(o){o in C_||(C_[o]=!0,console.warn(o))}function ay(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const w_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),D_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ry(){const o={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Fe&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=xs(l.r),l.g=xs(l.g),l.b=xs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?bc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return No("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return No("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Es]:{primaries:e,whitePoint:r,transfer:bc,toXYZ:w_,fromXYZ:D_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:r,transfer:Fe,toXYZ:w_,fromXYZ:D_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const we=ry();function ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function xs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let is;class sy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{is===void 0&&(is=Rc("canvas")),is.width=e.width,is.height=e.height;const l=is.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=is}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Rc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ra(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ra(i[r]/255)*255):i[r]=ra(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oy=0;class bd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Po(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Jf(l[h].image)):u.push(Jf(l[h]))}else u=Jf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Jf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?sy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ly=0;const $f=new K;class Hn extends bs{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,r=gr,l=gr,u=Ai,h=_r,d=_i,m=Di,p=Hn.DEFAULT_ANISOTROPY,x=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Po(),this.name="",this.source=new bd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($f).x}get height(){return this.source.getSize($f).y}get depth(){return this.source.getSize($f).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ih:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case Fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ih:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case Fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Tv;Hn.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,i=0,r=0,l=1){He.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],x=m[4],_=m[8],S=m[1],M=m[5],b=m[9],R=m[2],y=m[6],v=m[10];if(Math.abs(x-S)<.01&&Math.abs(_-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(_+R)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,D=(M+1)/2,H=(v+1)/2,F=(x+S)/4,P=(_+R)/4,k=(b+y)/4;return U>D&&U>H?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=F/r,u=P/r):D>H?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=F/l,u=k/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=P/u,l=k/u),this.set(r,l,u,i),this}let L=Math.sqrt((y-b)*(y-b)+(_-R)*(_-R)+(S-x)*(S-x));return Math.abs(L)<.001&&(L=1),this.x=(y-b)/L,this.y=(_-R)/L,this.z=(S-x)/L,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this.w=ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this.w=ye(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cy extends bs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new He(0,0,e,i),this.scissorTest=!1,this.viewport=new He(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Hn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new bd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends cy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class zv extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uy extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,di):di.fromBufferAttribute(u,h),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ql.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ql.copy(r.boundingBox)),Ql.applyMatrix4(e.matrixWorld),this.union(Ql)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),Jl.subVectors(this.max,Mo),as.subVectors(e.a,Mo),rs.subVectors(e.b,Mo),ss.subVectors(e.c,Mo),Da.subVectors(rs,as),Ua.subVectors(ss,rs),sr.subVectors(as,ss);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-sr.z,sr.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,sr.z,0,-sr.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-sr.y,sr.x,0];return!th(i,as,rs,ss,Jl)||(i=[1,0,0,0,1,0,0,0,1],!th(i,as,rs,ss,Jl))?!1:($l.crossVectors(Da,Ua),i=[$l.x,$l.y,$l.z],th(i,as,rs,ss,Jl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qi=[new K,new K,new K,new K,new K,new K,new K,new K],di=new K,Ql=new Bo,as=new K,rs=new K,ss=new K,Da=new K,Ua=new K,sr=new K,Mo=new K,Jl=new K,$l=new K,or=new K;function th(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){or.fromArray(o,u);const d=l.x*Math.abs(or.x)+l.y*Math.abs(or.y)+l.z*Math.abs(or.z),m=e.dot(or),p=i.dot(or),x=r.dot(or);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const fy=new Bo,Eo=new K,eh=new K;class Uc{constructor(e=new K,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):fy.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const i=Eo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Eo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(eh)),this.expandByPoint(Eo.copy(e.center).sub(eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ji=new K,nh=new K,tc=new K,La=new K,ih=new K,ec=new K,ah=new K;class Bv{constructor(e=new K,i=new K(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){nh.copy(e).add(i).multiplyScalar(.5),tc.copy(i).sub(e).normalize(),La.copy(this.origin).sub(nh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(tc),d=La.dot(this.direction),m=-La.dot(tc),p=La.lengthSq(),x=Math.abs(1-h*h);let _,S,M,b;if(x>0)if(_=h*m-d,S=h*d-m,b=u*x,_>=0)if(S>=-b)if(S<=b){const R=1/x;_*=R,S*=R,M=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=u,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;else S<=-b?(_=Math.max(0,-(-h*u+d)),S=_>0?-u:Math.min(Math.max(-u,-m),u),M=-_*_+S*(S+2*m)+p):S<=b?(_=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(_=Math.max(0,-(h*u+d)),S=_>0?u:Math.min(Math.max(-u,-m),u),M=-_*_+S*(S+2*m)+p);else S=h>0?-u:u,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(nh).addScaledVector(tc,S),M}intersectSphere(e,i){Ji.subVectors(e.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),x>=0?(u=(e.min.y-S.y)*x,h=(e.max.y-S.y)*x):(u=(e.max.y-S.y)*x,h=(e.min.y-S.y)*x),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),_>=0?(d=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(d=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,i,r,l,u){ih.subVectors(i,e),ec.subVectors(r,e),ah.crossVectors(ih,ec);let h=this.direction.dot(ah),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;La.subVectors(this.origin,e);const m=d*this.direction.dot(ec.crossVectors(La,ec));if(m<0)return null;const p=d*this.direction.dot(ih.cross(La));if(p<0||m+p>h)return null;const x=-d*La.dot(ah);return x<0?null:this.at(x/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,i,r,l,u,h,d,m,p,x,_,S,M,b,R,y){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,x,_,S,M,b,R,y)}set(e,i,r,l,u,h,d,m,p,x,_,S,M,b,R,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=x,v[10]=_,v[14]=S,v[3]=M,v[7]=b,v[11]=R,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/os.setFromMatrixColumn(e,0).length(),u=1/os.setFromMatrixColumn(e,1).length(),h=1/os.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const S=h*x,M=h*_,b=d*x,R=d*_;i[0]=m*x,i[4]=-m*_,i[8]=p,i[1]=M+b*p,i[5]=S-R*p,i[9]=-d*m,i[2]=R-S*p,i[6]=b+M*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*x,M=m*_,b=p*x,R=p*_;i[0]=S+R*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*x,i[9]=-d,i[2]=M*d-b,i[6]=R+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*x,M=m*_,b=p*x,R=p*_;i[0]=S-R*d,i[4]=-h*_,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*x,i[9]=R-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*x,M=h*_,b=d*x,R=d*_;i[0]=m*x,i[4]=b*p-M,i[8]=S*p+R,i[1]=m*_,i[5]=R*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*x,i[4]=R-S*_,i[8]=b*_+M,i[1]=_,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=M*_+b,i[10]=S-R*_}else if(e.order==="XZY"){const S=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*x,i[4]=-_,i[8]=p*x,i[1]=S*_+R,i[5]=h*x,i[9]=M*_-b,i[2]=b*_-M,i[6]=d*x,i[10]=R*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hy,e,dy)}lookAt(e,i,r){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Na.crossVectors(r,Zn),Na.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Na.crossVectors(r,Zn)),Na.normalize(),nc.crossVectors(Zn,Na),l[0]=Na.x,l[4]=nc.x,l[8]=Zn.x,l[1]=Na.y,l[5]=nc.y,l[9]=Zn.y,l[2]=Na.z,l[6]=nc.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],x=r[1],_=r[5],S=r[9],M=r[13],b=r[2],R=r[6],y=r[10],v=r[14],L=r[3],U=r[7],D=r[11],H=r[15],F=l[0],P=l[4],k=l[8],w=l[12],C=l[1],G=l[5],tt=l[9],ct=l[13],gt=l[2],ft=l[6],z=l[10],Z=l[14],j=l[3],vt=l[7],Mt=l[11],O=l[15];return u[0]=h*F+d*C+m*gt+p*j,u[4]=h*P+d*G+m*ft+p*vt,u[8]=h*k+d*tt+m*z+p*Mt,u[12]=h*w+d*ct+m*Z+p*O,u[1]=x*F+_*C+S*gt+M*j,u[5]=x*P+_*G+S*ft+M*vt,u[9]=x*k+_*tt+S*z+M*Mt,u[13]=x*w+_*ct+S*Z+M*O,u[2]=b*F+R*C+y*gt+v*j,u[6]=b*P+R*G+y*ft+v*vt,u[10]=b*k+R*tt+y*z+v*Mt,u[14]=b*w+R*ct+y*Z+v*O,u[3]=L*F+U*C+D*gt+H*j,u[7]=L*P+U*G+D*ft+H*vt,u[11]=L*k+U*tt+D*z+H*Mt,u[15]=L*w+U*ct+D*Z+H*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],x=e[2],_=e[6],S=e[10],M=e[14],b=e[3],R=e[7],y=e[11],v=e[15];return b*(+u*m*_-l*p*_-u*d*S+r*p*S+l*d*M-r*m*M)+R*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*x-u*m*x)+y*(+i*p*_-i*d*M-u*h*_+r*h*M+u*d*x-r*p*x)+v*(-l*d*x-i*m*_+i*d*S+l*h*_-r*h*S+r*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],_=e[9],S=e[10],M=e[11],b=e[12],R=e[13],y=e[14],v=e[15],L=_*y*p-R*S*p+R*m*M-d*y*M-_*m*v+d*S*v,U=b*S*p-x*y*p-b*m*M+h*y*M+x*m*v-h*S*v,D=x*R*p-b*_*p+b*d*M-h*R*M-x*d*v+h*_*v,H=b*_*m-x*R*m-b*d*S+h*R*S+x*d*y-h*_*y,F=i*L+r*U+l*D+u*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return e[0]=L*P,e[1]=(R*S*u-_*y*u-R*l*M+r*y*M+_*l*v-r*S*v)*P,e[2]=(d*y*u-R*m*u+R*l*p-r*y*p-d*l*v+r*m*v)*P,e[3]=(_*m*u-d*S*u-_*l*p+r*S*p+d*l*M-r*m*M)*P,e[4]=U*P,e[5]=(x*y*u-b*S*u+b*l*M-i*y*M-x*l*v+i*S*v)*P,e[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*v-i*m*v)*P,e[7]=(h*S*u-x*m*u+x*l*p-i*S*p-h*l*M+i*m*M)*P,e[8]=D*P,e[9]=(b*_*u-x*R*u-b*r*M+i*R*M+x*r*v-i*_*v)*P,e[10]=(h*R*u-b*d*u+b*r*p-i*R*p-h*r*v+i*d*v)*P,e[11]=(x*d*u-h*_*u-x*r*p+i*_*p+h*r*M-i*d*M)*P,e[12]=H*P,e[13]=(x*R*l-b*_*l+b*r*S-i*R*S-x*r*y+i*_*y)*P,e[14]=(b*d*l-h*R*l-b*r*m+i*R*m+h*r*y-i*d*y)*P,e[15]=(h*_*l-x*d*l+x*r*m-i*_*m-h*r*S+i*d*S)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,x=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+r,x*m-l*h,0,p*m-l*d,x*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,x=h+h,_=d+d,S=u*p,M=u*x,b=u*_,R=h*x,y=h*_,v=d*_,L=m*p,U=m*x,D=m*_,H=r.x,F=r.y,P=r.z;return l[0]=(1-(R+v))*H,l[1]=(M+D)*H,l[2]=(b-U)*H,l[3]=0,l[4]=(M-D)*F,l[5]=(1-(S+v))*F,l[6]=(y+L)*F,l[7]=0,l[8]=(b+U)*P,l[9]=(y-L)*P,l[10]=(1-(S+R))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=os.set(l[0],l[1],l[2]).length();const h=os.set(l[4],l[5],l[6]).length(),d=os.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],pi.copy(this);const p=1/u,x=1/h,_=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=x,pi.elements[5]*=x,pi.elements[6]*=x,pi.elements[8]*=_,pi.elements[9]*=_,pi.elements[10]*=_,i.setFromRotationMatrix(pi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=Ri,m=!1){const p=this.elements,x=2*u/(i-e),_=2*u/(r-l),S=(i+e)/(i-e),M=(r+l)/(r-l);let b,R;if(m)b=u/(h-u),R=h*u/(h-u);else if(d===Ri)b=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===Ac)b=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=Ri,m=!1){const p=this.elements,x=2/(i-e),_=2/(r-l),S=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,R;if(m)b=1/(h-u),R=h/(h-u);else if(d===Ri)b=-2/(h-u),R=-(h+u)/(h-u);else if(d===Ac)b=-1/(h-u),R=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const os=new K,pi=new Ze,hy=new K(0,0,0),dy=new K(1,1,1),Na=new K,nc=new K,Zn=new K,U_=new Ze,L_=new zo;class Ui{constructor(e=0,i=0,r=0,l=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(ye(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return U_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(U_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return L_.setFromEuler(this),this.setFromQuaternion(L_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Iv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let py=0;const N_=new K,ls=new zo,$i=new Ze,ic=new K,To=new K,my=new K,gy=new zo,O_=new K(1,0,0),P_=new K(0,1,0),z_=new K(0,0,1),B_={type:"added"},_y={type:"removed"},cs={type:"childadded",child:null},rh={type:"childremoved",child:null};class Un extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new K,i=new Ui,r=new zo,l=new K(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ue}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Iv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ls.setFromAxisAngle(e,i),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,i){return ls.setFromAxisAngle(e,i),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(O_,e)}rotateY(e){return this.rotateOnAxis(P_,e)}rotateZ(e){return this.rotateOnAxis(z_,e)}translateOnAxis(e,i){return N_.copy(e).applyQuaternion(this.quaternion),this.position.add(N_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(O_,e)}translateY(e){return this.translateOnAxis(P_,e)}translateZ(e){return this.translateOnAxis(z_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ic.copy(e):ic.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(To,ic,this.up):$i.lookAt(ic,To,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),ls.setFromRotationMatrix($i),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(B_),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(_y),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(B_),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,my),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,gy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const _=m[p];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),x=h(e.images),_=h(e.shapes),S=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Un.DEFAULT_UP=new K(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new K,ta=new K,sh=new K,ea=new K,us=new K,fs=new K,I_=new K,oh=new K,lh=new K,ch=new K,uh=new He,fh=new He,hh=new He;class gi{constructor(e=new K,i=new K,r=new K){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),mi.subVectors(e,i),l.cross(mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){mi.subVectors(l,i),ta.subVectors(r,i),sh.subVectors(e,i);const h=mi.dot(mi),d=mi.dot(ta),m=mi.dot(sh),p=ta.dot(ta),x=ta.dot(sh),_=h*p-d*d;if(_===0)return u.set(0,0,0),null;const S=1/_,M=(p*m-d*x)*S,b=(h*x-d*m)*S;return u.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ea.x),m.addScaledVector(h,ea.y),m.addScaledVector(d,ea.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return uh.setScalar(0),fh.setScalar(0),hh.setScalar(0),uh.fromBufferAttribute(e,i),fh.fromBufferAttribute(e,r),hh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(uh,u.x),h.addScaledVector(fh,u.y),h.addScaledVector(hh,u.z),h}static isFrontFacing(e,i,r,l){return mi.subVectors(r,i),ta.subVectors(e,i),mi.cross(ta).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),mi.cross(ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return gi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;us.subVectors(l,r),fs.subVectors(u,r),oh.subVectors(e,r);const m=us.dot(oh),p=fs.dot(oh);if(m<=0&&p<=0)return i.copy(r);lh.subVectors(e,l);const x=us.dot(lh),_=fs.dot(lh);if(x>=0&&_<=x)return i.copy(l);const S=m*_-x*p;if(S<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(r).addScaledVector(us,h);ch.subVectors(e,u);const M=us.dot(ch),b=fs.dot(ch);if(b>=0&&M<=b)return i.copy(u);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(fs,d);const y=x*b-M*_;if(y<=0&&_-x>=0&&M-b>=0)return I_.subVectors(u,l),d=(_-x)/(_-x+(M-b)),i.copy(l).addScaledVector(I_,d);const v=1/(y+R+S);return h=R*v,d=S*v,i.copy(r).addScaledVector(us,h).addScaledVector(fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},ac={h:0,s:0,l:0};function dh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class be{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=we.workingColorSpace){return this.r=e,this.g=i,this.b=r,we.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=we.workingColorSpace){if(e=ny(e,1),i=ye(i,0,1),r=ye(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=dh(h,u,e+1/3),this.g=dh(h,u,e),this.b=dh(h,u,e-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(e,i=ci){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ci){const r=Fv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return we.workingToColorSpace(An.copy(this),e),Math.round(ye(An.r*255,0,255))*65536+Math.round(ye(An.g*255,0,255))*256+Math.round(ye(An.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=we.workingColorSpace){we.workingToColorSpace(An.copy(this),i);const r=An.r,l=An.g,u=An.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=x<=.5?_/(h+d):_/(2-h-d),h){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=we.workingColorSpace){return we.workingToColorSpace(An.copy(this),i),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=ci){we.workingToColorSpace(An.copy(this),e);const i=An.r,r=An.g,l=An.b;return e!==ci?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Oa),this.setHSL(Oa.h+e,Oa.s+i,Oa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Oa),e.getHSL(ac);const r=Zf(Oa.h,ac.h,i),l=Zf(Oa.s,ac.s,i),u=Zf(Oa.l,ac.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new be;be.NAMES=Fv;let vy=0;class As extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=vs,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ch,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(r.blending=this.blending),this.side!==Fa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Rh&&(r.blendSrc=this.blendSrc),this.blendDst!==Ch&&(r.blendDst=this.blendDst),this.blendEquation!==pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hv extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new K,rc=new Me;let xy=0;class wi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=b_,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)rc.fromBufferAttribute(this,i),rc.applyMatrix3(e),this.setXY(i,rc.x,rc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=yo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=yo(i,this.array)),i}setX(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=yo(i,this.array)),i}setY(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=yo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=yo(i,this.array)),i}setW(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),u=In(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==b_&&(e.usage=this.usage),e}}class Gv extends wi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Vv extends wi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Jn extends wi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Sy=0;const li=new Ze,ph=new Un,hs=new K,Kn=new Bo,bo=new Bo,gn=new K;class Li extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pv(e)?Vv:Gv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ue().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,i,r){return li.makeTranslation(e,i,r),this.applyMatrix4(li),this}scale(e,i,r){return li.makeScale(e,i,r),this.applyMatrix4(li),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Jn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];bo.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(Kn.min,bo.min),Kn.expandByPoint(gn),gn.addVectors(Kn.max,bo.max),Kn.expandByPoint(gn)):(Kn.expandByPoint(bo.min),Kn.expandByPoint(bo.max))}Kn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)gn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)gn.fromBufferAttribute(d,p),m&&(hs.fromBufferAttribute(e,p),gn.add(hs)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let k=0;k<r.count;k++)d[k]=new K,m[k]=new K;const p=new K,x=new K,_=new K,S=new Me,M=new Me,b=new Me,R=new K,y=new K;function v(k,w,C){p.fromBufferAttribute(r,k),x.fromBufferAttribute(r,w),_.fromBufferAttribute(r,C),S.fromBufferAttribute(u,k),M.fromBufferAttribute(u,w),b.fromBufferAttribute(u,C),x.sub(p),_.sub(p),M.sub(S),b.sub(S);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(R.copy(x).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(G),y.copy(_).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(G),d[k].add(R),d[w].add(R),d[C].add(R),m[k].add(y),m[w].add(y),m[C].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let k=0,w=L.length;k<w;++k){const C=L[k],G=C.start,tt=C.count;for(let ct=G,gt=G+tt;ct<gt;ct+=3)v(e.getX(ct+0),e.getX(ct+1),e.getX(ct+2))}const U=new K,D=new K,H=new K,F=new K;function P(k){H.fromBufferAttribute(l,k),F.copy(H);const w=d[k];U.copy(w),U.sub(H.multiplyScalar(H.dot(w))).normalize(),D.crossVectors(F,w);const G=D.dot(m[k])<0?-1:1;h.setXYZW(k,U.x,U.y,U.z,G)}for(let k=0,w=L.length;k<w;++k){const C=L[k],G=C.start,tt=C.count;for(let ct=G,gt=G+tt;ct<gt;ct+=3)P(e.getX(ct+0)),P(e.getX(ct+1)),P(e.getX(ct+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new K,u=new K,h=new K,d=new K,m=new K,p=new K,x=new K,_=new K;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),R=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),x.subVectors(h,u),_.subVectors(l,u),x.cross(_),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),d.add(x),m.add(x),p.add(x),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),x.subVectors(h,u),_.subVectors(l,u),x.cross(_),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,m){const p=d.array,x=d.itemSize,_=d.normalized,S=new p.constructor(m.length*x);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*x;for(let v=0;v<x;v++)S[b++]=p[M++]}return new wi(S,x,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Li,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let x=0,_=p.length;x<_;x++){const S=p[x],M=e(S,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let _=0,S=p.length;_<S;_++){const M=p[_];x.push(M.toJSON(e.data))}x.length>0&&(l[m]=x,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=e.morphAttributes;for(const p in u){const x=[],_=u[p];for(let S=0,M=_.length;S<M;S++)x.push(_[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,x=h.length;p<x;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const F_=new Ze,lr=new Bv,sc=new Uc,H_=new K,oc=new K,lc=new K,cc=new K,mh=new K,uc=new K,G_=new K,fc=new K;class Ci extends Un{constructor(e=new Li,i=new Hv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){uc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=d[m],_=u[m];x!==0&&(mh.fromBufferAttribute(_,e),h?uc.addScaledVector(mh,x):uc.addScaledVector(mh.sub(i),x))}i.add(uc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),sc.copy(r.boundingSphere),sc.applyMatrix4(u),lr.copy(e.ray).recast(e.near),!(sc.containsPoint(lr.origin)===!1&&(lr.intersectSphere(sc,H_)===null||lr.origin.distanceToSquared(H_)>(e.far-e.near)**2))&&(F_.copy(u).invert(),lr.copy(e.ray).applyMatrix4(F_),!(r.boundingBox!==null&&lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,lr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,_=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const y=S[b],v=h[y.materialIndex],L=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=L,H=U;D<H;D+=3){const F=d.getX(D),P=d.getX(D+1),k=d.getX(D+2);l=hc(this,v,e,r,p,x,_,F,P,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=b,v=R;y<v;y+=3){const L=d.getX(y),U=d.getX(y+1),D=d.getX(y+2);l=hc(this,h,e,r,p,x,_,L,U,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const y=S[b],v=h[y.materialIndex],L=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=L,H=U;D<H;D+=3){const F=D,P=D+1,k=D+2;l=hc(this,v,e,r,p,x,_,F,P,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,v=R;y<v;y+=3){const L=y,U=y+1,D=y+2;l=hc(this,h,e,r,p,x,_,L,U,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function yy(o,e,i,r,l,u,h,d){let m;if(e.side===Fn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Fa,d),m===null)return null;fc.copy(d),fc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(fc);return p<i.near||p>i.far?null:{distance:p,point:fc.clone(),object:o}}function hc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,oc),o.getVertexPosition(m,lc),o.getVertexPosition(p,cc);const x=yy(o,e,i,r,oc,lc,cc,G_);if(x){const _=new K;gi.getBarycoord(G_,oc,lc,cc,_),l&&(x.uv=gi.getInterpolatedAttribute(l,d,m,p,_,new Me)),u&&(x.uv1=gi.getInterpolatedAttribute(u,d,m,p,_,new Me)),h&&(x.normal=gi.getInterpolatedAttribute(h,d,m,p,_,new K),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new K,materialIndex:0};gi.getNormal(oc,lc,cc,S.normal),x.face=S,x.barycoord=_}return x}class Io extends Li{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],x=[],_=[];let S=0,M=0;b("z","y","x",-1,-1,r,i,e,h,u,0),b("z","y","x",1,-1,r,i,-e,h,u,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Jn(p,3)),this.setAttribute("normal",new Jn(x,3)),this.setAttribute("uv",new Jn(_,2));function b(R,y,v,L,U,D,H,F,P,k,w){const C=D/P,G=H/k,tt=D/2,ct=H/2,gt=F/2,ft=P+1,z=k+1;let Z=0,j=0;const vt=new K;for(let Mt=0;Mt<z;Mt++){const O=Mt*G-ct;for(let nt=0;nt<ft;nt++){const St=nt*C-tt;vt[R]=St*L,vt[y]=O*U,vt[v]=gt,p.push(vt.x,vt.y,vt.z),vt[R]=0,vt[y]=0,vt[v]=F>0?1:-1,x.push(vt.x,vt.y,vt.z),_.push(nt/P),_.push(1-Mt/k),Z+=1}}for(let Mt=0;Mt<k;Mt++)for(let O=0;O<P;O++){const nt=S+O+ft*Mt,St=S+O+ft*(Mt+1),bt=S+(O+1)+ft*(Mt+1),Nt=S+(O+1)+ft*Mt;m.push(nt,St,Nt),m.push(St,bt,Nt),j+=6}d.addGroup(M,j,w),M+=j,S+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Dn(o){const e={};for(let i=0;i<o.length;i++){const r=Ts(o[i]);for(const l in r)e[l]=r[l]}return e}function My(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Xv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:we.workingColorSpace}const Ey={clone:Ts,merge:Dn};var Ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,by=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ha extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ty,this.fragmentShader=by,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=My(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class kv extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pa=new K,V_=new Me,X_=new Me;class Qn extends kv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=pd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pd*2*Math.atan(Math.tan(jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z),Pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z)}getViewSize(e,i){return this.getViewBounds(e,V_,X_),i.subVectors(X_,V_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(jf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ds=-90,ps=1;class Ay extends Un{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Qn(ds,ps,e,i);l.layers=this.layers,this.add(l);const u=new Qn(ds,ps,e,i);u.layers=this.layers,this.add(u);const h=new Qn(ds,ps,e,i);h.layers=this.layers,this.add(h);const d=new Qn(ds,ps,e,i);d.layers=this.layers,this.add(d);const m=new Qn(ds,ps,e,i);m.layers=this.layers,this.add(m);const p=new Qn(ds,ps,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ri)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ac)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,x]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(_,S,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Wv extends Hn{constructor(e=[],i=ys,r,l,u,h,d,m,p,x){super(e,i,r,l,u,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ry extends xr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Wv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Io(5,5,5),u=new Ha({name:"CubemapFromEquirect",uniforms:Ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Ba});u.uniforms.tEquirect.value=i;const h=new Ci(l,u),d=i.minFilter;return i.minFilter===_r&&(i.minFilter=Ai),new Ay(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class dc extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cy={type:"move"};class gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,r),v=this._getHandJoint(p,R);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=x.position.distanceTo(_.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Cy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new dc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class wy extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const _h=new K,Dy=new K,Uy=new ue;class hr{constructor(e=new K(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=_h.subVectors(r,i).cross(Dy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(_h),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Uy.getNormalMatrix(e),l=this.coplanarPoint(_h).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new Uc,Ly=new Me(.5,.5),pc=new K;class Ad{constructor(e=new hr,i=new hr,r=new hr,l=new hr,u=new hr,h=new hr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ri,r=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],x=u[4],_=u[5],S=u[6],M=u[7],b=u[8],R=u[9],y=u[10],v=u[11],L=u[12],U=u[13],D=u[14],H=u[15];if(l[0].setComponents(p-h,M-x,v-b,H-L).normalize(),l[1].setComponents(p+h,M+x,v+b,H+L).normalize(),l[2].setComponents(p+d,M+_,v+R,H+U).normalize(),l[3].setComponents(p-d,M-_,v-R,H-U).normalize(),r)l[4].setComponents(m,S,y,D).normalize(),l[5].setComponents(p-m,M-S,v-y,H-D).normalize();else if(l[4].setComponents(p-m,M-S,v-y,H-D).normalize(),i===Ri)l[5].setComponents(p+m,M+S,v+y,H+D).normalize();else if(i===Ac)l[5].setComponents(m,S,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){cr.center.set(0,0,0);const i=Ly.distanceTo(e.center);return cr.radius=.7071067811865476+i,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(pc.x=l.normal.x>0?e.max.x:e.min.x,pc.y=l.normal.y>0?e.max.y:e.min.y,pc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(pc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ny extends As{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cc=new K,wc=new K,k_=new Ze,Ao=new Bv,mc=new Uc,vh=new K,W_=new K;class Oy extends Un{constructor(e=new Li,i=new Ny){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Cc.fromBufferAttribute(i,l-1),wc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Cc.distanceTo(wc);e.setAttribute("lineDistance",new Jn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),mc.copy(r.boundingSphere),mc.applyMatrix4(l),mc.radius+=u,e.ray.intersectsSphere(mc)===!1)return;k_.copy(l).invert(),Ao.copy(e.ray).applyMatrix4(k_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,x=r.index,S=r.attributes.position;if(x!==null){const M=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let R=M,y=b-1;R<y;R+=p){const v=x.getX(R),L=x.getX(R+1),U=gc(this,e,Ao,m,v,L,R);U&&i.push(U)}if(this.isLineLoop){const R=x.getX(b-1),y=x.getX(M),v=gc(this,e,Ao,m,R,y,b-1);v&&i.push(v)}}else{const M=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let R=M,y=b-1;R<y;R+=p){const v=gc(this,e,Ao,m,R,R+1,R);v&&i.push(v)}if(this.isLineLoop){const R=gc(this,e,Ao,m,b-1,M,b-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function gc(o,e,i,r,l,u,h){const d=o.geometry.attributes.position;if(Cc.fromBufferAttribute(d,l),wc.fromBufferAttribute(d,u),i.distanceSqToSegment(Cc,wc,vh,W_)>r)return;vh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(vh);if(!(p<e.near||p>e.far))return{distance:p,point:W_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const q_=new K,Y_=new K;class Py extends Oy{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)q_.fromBufferAttribute(i,l),Y_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+q_.distanceTo(Y_);e.setAttribute("lineDistance",new Jn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qv extends Hn{constructor(e,i,r=vr,l,u,h,d=vi,m=vi,p,x=Uo,_=1){if(x!==Uo&&x!==Lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:_};super(S,l,u,h,d,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Yv extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rd extends Li{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const u=[],h=[];d(l),p(r),x(),this.setAttribute("position",new Jn(u,3)),this.setAttribute("normal",new Jn(u.slice(),3)),this.setAttribute("uv",new Jn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const U=new K,D=new K,H=new K;for(let F=0;F<i.length;F+=3)M(i[F+0],U),M(i[F+1],D),M(i[F+2],H),m(U,D,H,L)}function m(L,U,D,H){const F=H+1,P=[];for(let k=0;k<=F;k++){P[k]=[];const w=L.clone().lerp(D,k/F),C=U.clone().lerp(D,k/F),G=F-k;for(let tt=0;tt<=G;tt++)tt===0&&k===F?P[k][tt]=w:P[k][tt]=w.clone().lerp(C,tt/G)}for(let k=0;k<F;k++)for(let w=0;w<2*(F-k)-1;w++){const C=Math.floor(w/2);w%2===0?(S(P[k][C+1]),S(P[k+1][C]),S(P[k][C])):(S(P[k][C+1]),S(P[k+1][C+1]),S(P[k+1][C]))}}function p(L){const U=new K;for(let D=0;D<u.length;D+=3)U.x=u[D+0],U.y=u[D+1],U.z=u[D+2],U.normalize().multiplyScalar(L),u[D+0]=U.x,u[D+1]=U.y,u[D+2]=U.z}function x(){const L=new K;for(let U=0;U<u.length;U+=3){L.x=u[U+0],L.y=u[U+1],L.z=u[U+2];const D=y(L)/2/Math.PI+.5,H=v(L)/Math.PI+.5;h.push(D,1-H)}b(),_()}function _(){for(let L=0;L<h.length;L+=6){const U=h[L+0],D=h[L+2],H=h[L+4],F=Math.max(U,D,H),P=Math.min(U,D,H);F>.9&&P<.1&&(U<.2&&(h[L+0]+=1),D<.2&&(h[L+2]+=1),H<.2&&(h[L+4]+=1))}}function S(L){u.push(L.x,L.y,L.z)}function M(L,U){const D=L*3;U.x=e[D+0],U.y=e[D+1],U.z=e[D+2]}function b(){const L=new K,U=new K,D=new K,H=new K,F=new Me,P=new Me,k=new Me;for(let w=0,C=0;w<u.length;w+=9,C+=6){L.set(u[w+0],u[w+1],u[w+2]),U.set(u[w+3],u[w+4],u[w+5]),D.set(u[w+6],u[w+7],u[w+8]),F.set(h[C+0],h[C+1]),P.set(h[C+2],h[C+3]),k.set(h[C+4],h[C+5]),H.copy(L).add(U).add(D).divideScalar(3);const G=y(H);R(F,C+0,L,G),R(P,C+2,U,G),R(k,C+4,D,G)}}function R(L,U,D,H){H<0&&L.x===1&&(h[U]=L.x-1),D.x===0&&D.z===0&&(h[U]=H/2/Math.PI+.5)}function y(L){return Math.atan2(L.z,-L.x)}function v(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rd(e.vertices,e.indices,e.radius,e.details)}}class Cd extends Rd{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Cd(e.radius,e.detail)}}class Lc extends Li{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,x=m+1,_=e/d,S=i/m,M=[],b=[],R=[],y=[];for(let v=0;v<x;v++){const L=v*S-h;for(let U=0;U<p;U++){const D=U*_-u;b.push(D,-L,0),R.push(0,0,1),y.push(U/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<d;L++){const U=L+p*v,D=L+p*(v+1),H=L+1+p*(v+1),F=L+1+p*v;M.push(U,D,F),M.push(D,H,F)}this.setIndex(M),this.setAttribute("position",new Jn(b,3)),this.setAttribute("normal",new Jn(R,3)),this.setAttribute("uv",new Jn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.width,e.height,e.widthSegments,e.heightSegments)}}class zy extends Li{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const i=[],r=new Set,l=new K,u=new K;if(e.index!==null){const h=e.attributes.position,d=e.index;let m=e.groups;m.length===0&&(m=[{start:0,count:d.count,materialIndex:0}]);for(let p=0,x=m.length;p<x;++p){const _=m[p],S=_.start,M=_.count;for(let b=S,R=S+M;b<R;b+=3)for(let y=0;y<3;y++){const v=d.getX(b+y),L=d.getX(b+(y+1)%3);l.fromBufferAttribute(h,v),u.fromBufferAttribute(h,L),j_(l,u,r)===!0&&(i.push(l.x,l.y,l.z),i.push(u.x,u.y,u.z))}}}else{const h=e.attributes.position;for(let d=0,m=h.count/3;d<m;d++)for(let p=0;p<3;p++){const x=3*d+p,_=3*d+(p+1)%3;l.fromBufferAttribute(h,x),u.fromBufferAttribute(h,_),j_(l,u,r)===!0&&(i.push(l.x,l.y,l.z),i.push(u.x,u.y,u.z))}}this.setAttribute("position",new Jn(i,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function j_(o,e,i){const r=`${o.x},${o.y},${o.z}-${e.x},${e.y},${e.z}`,l=`${e.x},${e.y},${e.z}-${o.x},${o.y},${o.z}`;return i.has(r)===!0||i.has(l)===!0?!1:(i.add(r),i.add(l),!0)}class By extends As{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nv,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Iy extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fy extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class jv extends Un{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const xh=new Ze,Z_=new K,K_=new K;class Hy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ad,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Z_.setFromMatrixPosition(e.matrixWorld),i.position.copy(Z_),K_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(K_),i.updateMatrixWorld(),xh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Q_=new Ze,Ro=new K,Sh=new K;class Gy extends Hy{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Ro.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ro),Sh.copy(r.position),Sh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Sh),r.updateMatrixWorld(),l.makeTranslation(-Ro.x,-Ro.y,-Ro.z),Q_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Q_,r.coordinateSystem,r.reversedDepth)}}class Vy extends jv{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new Gy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Xy extends kv{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ky extends jv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wy extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function J_(o,e,i,r){const l=qy(r);switch(i){case wv:return o*e;case Uv:return o*e/l.components*l.byteLength;case Md:return o*e/l.components*l.byteLength;case Lv:return o*e*2/l.components*l.byteLength;case Ed:return o*e*2/l.components*l.byteLength;case Dv:return o*e*3/l.components*l.byteLength;case _i:return o*e*4/l.components*l.byteLength;case Td:return o*e*4/l.components*l.byteLength;case Sc:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Gh:case Xh:return Math.max(o,16)*Math.max(e,8)/4;case Hh:case Vh:return Math.max(o,8)*Math.max(e,8)/2;case kh:case Wh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case qh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case $h:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case td:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ed:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case nd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case id:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ad:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case rd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case sd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case od:case ld:case cd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case ud:case fd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case hd:case dd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function qy(o){switch(o){case Di:case bv:return{byteLength:1,components:1};case wo:case Av:case Oo:return{byteLength:2,components:1};case Sd:case yd:return{byteLength:2,components:4};case vr:case xd:case aa:return{byteLength:4,components:1};case Rv:case Cv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_d);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zv(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Yy(o){const e=new WeakMap;function i(d,m){const p=d.array,x=d.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const x=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,x);else{_.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<_.length;M++){const b=_[S],R=_[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++S,_[S]=R)}_.length=S+1;for(let M=0,b=_.length;M<b;M++){const R=_[M];o.bufferSubData(p,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ky=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_M=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TM="gl_FragColor = linearToOutputTexel( gl_FragColor );",bM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,UM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,HM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ME=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,EE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ET=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:jy,alphahash_pars_fragment:Zy,alphamap_fragment:Ky,alphamap_pars_fragment:Qy,alphatest_fragment:Jy,alphatest_pars_fragment:$y,aomap_fragment:tM,aomap_pars_fragment:eM,batching_pars_vertex:nM,batching_vertex:iM,begin_vertex:aM,beginnormal_vertex:rM,bsdfs:sM,iridescence_fragment:oM,bumpmap_pars_fragment:lM,clipping_planes_fragment:cM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:fM,clipping_planes_vertex:hM,color_fragment:dM,color_pars_fragment:pM,color_pars_vertex:mM,color_vertex:gM,common:_M,cube_uv_reflection_fragment:vM,defaultnormal_vertex:xM,displacementmap_pars_vertex:SM,displacementmap_vertex:yM,emissivemap_fragment:MM,emissivemap_pars_fragment:EM,colorspace_fragment:TM,colorspace_pars_fragment:bM,envmap_fragment:AM,envmap_common_pars_fragment:RM,envmap_pars_fragment:CM,envmap_pars_vertex:wM,envmap_physical_pars_fragment:HM,envmap_vertex:DM,fog_vertex:UM,fog_pars_vertex:LM,fog_fragment:NM,fog_pars_fragment:OM,gradientmap_pars_fragment:PM,lightmap_pars_fragment:zM,lights_lambert_fragment:BM,lights_lambert_pars_fragment:IM,lights_pars_begin:FM,lights_toon_fragment:GM,lights_toon_pars_fragment:VM,lights_phong_fragment:XM,lights_phong_pars_fragment:kM,lights_physical_fragment:WM,lights_physical_pars_fragment:qM,lights_fragment_begin:YM,lights_fragment_maps:jM,lights_fragment_end:ZM,logdepthbuf_fragment:KM,logdepthbuf_pars_fragment:QM,logdepthbuf_pars_vertex:JM,logdepthbuf_vertex:$M,map_fragment:tE,map_pars_fragment:eE,map_particle_fragment:nE,map_particle_pars_fragment:iE,metalnessmap_fragment:aE,metalnessmap_pars_fragment:rE,morphinstance_vertex:sE,morphcolor_vertex:oE,morphnormal_vertex:lE,morphtarget_pars_vertex:cE,morphtarget_vertex:uE,normal_fragment_begin:fE,normal_fragment_maps:hE,normal_pars_fragment:dE,normal_pars_vertex:pE,normal_vertex:mE,normalmap_pars_fragment:gE,clearcoat_normal_fragment_begin:_E,clearcoat_normal_fragment_maps:vE,clearcoat_pars_fragment:xE,iridescence_pars_fragment:SE,opaque_fragment:yE,packing:ME,premultiplied_alpha_fragment:EE,project_vertex:TE,dithering_fragment:bE,dithering_pars_fragment:AE,roughnessmap_fragment:RE,roughnessmap_pars_fragment:CE,shadowmap_pars_fragment:wE,shadowmap_pars_vertex:DE,shadowmap_vertex:UE,shadowmask_pars_fragment:LE,skinbase_vertex:NE,skinning_pars_vertex:OE,skinning_vertex:PE,skinnormal_vertex:zE,specularmap_fragment:BE,specularmap_pars_fragment:IE,tonemapping_fragment:FE,tonemapping_pars_fragment:HE,transmission_fragment:GE,transmission_pars_fragment:VE,uv_pars_fragment:XE,uv_pars_vertex:kE,uv_vertex:WE,worldpos_vertex:qE,background_vert:YE,background_frag:jE,backgroundCube_vert:ZE,backgroundCube_frag:KE,cube_vert:QE,cube_frag:JE,depth_vert:$E,depth_frag:tT,distanceRGBA_vert:eT,distanceRGBA_frag:nT,equirect_vert:iT,equirect_frag:aT,linedashed_vert:rT,linedashed_frag:sT,meshbasic_vert:oT,meshbasic_frag:lT,meshlambert_vert:cT,meshlambert_frag:uT,meshmatcap_vert:fT,meshmatcap_frag:hT,meshnormal_vert:dT,meshnormal_frag:pT,meshphong_vert:mT,meshphong_frag:gT,meshphysical_vert:_T,meshphysical_frag:vT,meshtoon_vert:xT,meshtoon_frag:ST,points_vert:yT,points_frag:MT,shadow_vert:ET,shadow_frag:TT,sprite_vert:bT,sprite_frag:AT},Lt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},bi={basic:{uniforms:Dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Dn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Dn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Dn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Dn([Lt.points,Lt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Dn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Dn([Lt.common,Lt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Dn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Dn([Lt.sprite,Lt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Dn([Lt.common,Lt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Dn([Lt.lights,Lt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};bi.physical={uniforms:Dn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const _c={r:0,b:0,g:0},ur=new Ui,RT=new Ze;function CT(o,e,i,r,l,u,h){const d=new be(0);let m=u===!0?0:1,p,x,_=null,S=0,M=null;function b(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:e).get(D)),D}function R(U){let D=!1;const H=b(U);H===null?v(d,m):H&&H.isColor&&(v(H,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,D){const H=b(D);H&&(H.isCubeTexture||H.mapping===Dc)?(x===void 0&&(x=new Ci(new Io(1,1,1),new Ha({name:"BackgroundCubeMaterial",uniforms:Ts(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(F,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),ur.copy(D.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),x.material.uniforms.envMap.value=H,x.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(RT.makeRotationFromEuler(ur)),x.material.toneMapped=we.getTransfer(H.colorSpace)!==Fe,(_!==H||S!==H.version||M!==o.toneMapping)&&(x.material.needsUpdate=!0,_=H,S=H.version,M=o.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Ci(new Lc(2,2),new Ha({name:"BackgroundMaterial",uniforms:Ts(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=we.getTransfer(H.colorSpace)!==Fe,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||S!==H.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,_=H,S=H.version,M=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,D){U.getRGB(_c,Xv(o)),r.buffers.color.setClear(_c.r,_c.g,_c.b,D,h)}function L(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),m=D,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:R,addToRenderList:y,dispose:L}}function wT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(C,G,tt,ct,gt){let ft=!1;const z=_(ct,tt,G);u!==z&&(u=z,p(u.object)),ft=M(C,ct,tt,gt),ft&&b(C,ct,tt,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,D(C,G,tt,ct),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function x(C){return o.deleteVertexArray(C)}function _(C,G,tt){const ct=tt.wireframe===!0;let gt=r[C.id];gt===void 0&&(gt={},r[C.id]=gt);let ft=gt[G.id];ft===void 0&&(ft={},gt[G.id]=ft);let z=ft[ct];return z===void 0&&(z=S(m()),ft[ct]=z),z}function S(C){const G=[],tt=[],ct=[];for(let gt=0;gt<i;gt++)G[gt]=0,tt[gt]=0,ct[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:tt,attributeDivisors:ct,object:C,attributes:{},index:null}}function M(C,G,tt,ct){const gt=u.attributes,ft=G.attributes;let z=0;const Z=tt.getAttributes();for(const j in Z)if(Z[j].location>=0){const Mt=gt[j];let O=ft[j];if(O===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),Mt===void 0||Mt.attribute!==O||O&&Mt.data!==O.data)return!0;z++}return u.attributesNum!==z||u.index!==ct}function b(C,G,tt,ct){const gt={},ft=G.attributes;let z=0;const Z=tt.getAttributes();for(const j in Z)if(Z[j].location>=0){let Mt=ft[j];Mt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor));const O={};O.attribute=Mt,Mt&&Mt.data&&(O.data=Mt.data),gt[j]=O,z++}u.attributes=gt,u.attributesNum=z,u.index=ct}function R(){const C=u.newAttributes;for(let G=0,tt=C.length;G<tt;G++)C[G]=0}function y(C){v(C,0)}function v(C,G){const tt=u.newAttributes,ct=u.enabledAttributes,gt=u.attributeDivisors;tt[C]=1,ct[C]===0&&(o.enableVertexAttribArray(C),ct[C]=1),gt[C]!==G&&(o.vertexAttribDivisor(C,G),gt[C]=G)}function L(){const C=u.newAttributes,G=u.enabledAttributes;for(let tt=0,ct=G.length;tt<ct;tt++)G[tt]!==C[tt]&&(o.disableVertexAttribArray(tt),G[tt]=0)}function U(C,G,tt,ct,gt,ft,z){z===!0?o.vertexAttribIPointer(C,G,tt,gt,ft):o.vertexAttribPointer(C,G,tt,ct,gt,ft)}function D(C,G,tt,ct){R();const gt=ct.attributes,ft=tt.getAttributes(),z=G.defaultAttributeValues;for(const Z in ft){const j=ft[Z];if(j.location>=0){let vt=gt[Z];if(vt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor)),vt!==void 0){const Mt=vt.normalized,O=vt.itemSize,nt=e.get(vt);if(nt===void 0)continue;const St=nt.buffer,bt=nt.type,Nt=nt.bytesPerElement,it=bt===o.INT||bt===o.UNSIGNED_INT||vt.gpuType===xd;if(vt.isInterleavedBufferAttribute){const ot=vt.data,wt=ot.stride,It=vt.offset;if(ot.isInstancedInterleavedBuffer){for(let kt=0;kt<j.locationSize;kt++)v(j.location+kt,ot.meshPerAttribute);C.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let kt=0;kt<j.locationSize;kt++)y(j.location+kt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let kt=0;kt<j.locationSize;kt++)U(j.location+kt,O/j.locationSize,bt,Mt,wt*Nt,(It+O/j.locationSize*kt)*Nt,it)}else{if(vt.isInstancedBufferAttribute){for(let ot=0;ot<j.locationSize;ot++)v(j.location+ot,vt.meshPerAttribute);C.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ot=0;ot<j.locationSize;ot++)y(j.location+ot);o.bindBuffer(o.ARRAY_BUFFER,St);for(let ot=0;ot<j.locationSize;ot++)U(j.location+ot,O/j.locationSize,bt,Mt,O*Nt,O/j.locationSize*ot*Nt,it)}}else if(z!==void 0){const Mt=z[Z];if(Mt!==void 0)switch(Mt.length){case 2:o.vertexAttrib2fv(j.location,Mt);break;case 3:o.vertexAttrib3fv(j.location,Mt);break;case 4:o.vertexAttrib4fv(j.location,Mt);break;default:o.vertexAttrib1fv(j.location,Mt)}}}}L()}function H(){k();for(const C in r){const G=r[C];for(const tt in G){const ct=G[tt];for(const gt in ct)x(ct[gt].object),delete ct[gt];delete G[tt]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const tt in G){const ct=G[tt];for(const gt in ct)x(ct[gt].object),delete ct[gt];delete G[tt]}delete r[C.id]}function P(C){for(const G in r){const tt=r[G];if(tt[C.id]===void 0)continue;const ct=tt[C.id];for(const gt in ct)x(ct[gt].object),delete ct[gt];delete tt[C.id]}}function k(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:w,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:y,disableUnusedAttributes:L}}function DT(o,e,i){let r;function l(p){r=p}function u(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function h(p,x,_){_!==0&&(o.drawArraysInstanced(r,p,x,_),i.update(x,r,_))}function d(p,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,_);let M=0;for(let b=0;b<_;b++)M+=x[b];i.update(M,r,1)}function m(p,x,_,S){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],x[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,x,0,S,0,_);let b=0;for(let R=0;R<_;R++)b+=x[R]*S[R];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function UT(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==_i&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const k=P===Oo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Di&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==aa&&!k)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=b>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:H,maxSamples:F}}function LT(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new hr,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||r!==0||l;return l=S,r=_.length,M},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=x(_,S,0)},this.setState=function(_,S,M){const b=_.clippingPlanes,R=_.clipIntersection,y=_.clipShadows,v=o.get(_);if(!l||b===null||b.length===0||u&&!y)u?x(null):p();else{const L=u?0:r,U=L*4;let D=v.clippingState||null;m.value=D,D=x(b,S,U,M);for(let H=0;H!==U;++H)D[H]=i[H];v.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,S,M,b){const R=_!==null?_.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const v=M+R*4,L=S.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,D=M;U!==R;++U,D+=4)h.copy(_[U]).applyMatrix4(L,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function NT(o){let e=new WeakMap;function i(h,d){return d===zh?h.mapping=ys:d===Bh&&(h.mapping=Ms),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===zh||d===Bh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ry(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const _s=4,$_=[.125,.215,.35,.446,.526,.582],mr=20,yh=new Xy,tv=new be;let Mh=null,Eh=0,Th=0,bh=!1;const dr=(1+Math.sqrt(5))/2,ms=1/dr,ev=[new K(-dr,ms,0),new K(dr,ms,0),new K(-ms,0,dr),new K(ms,0,dr),new K(0,dr,-ms),new K(0,dr,ms),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],OT=new K;class nv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=OT}=u;Mh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=av(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mh,Eh,Th),this._renderer.xr.enabled=bh,e.scissorTest=!1,vc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ys||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:Oo,format:_i,colorSpace:Es,depthBuffer:!1},l=iv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iv(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PT(u)),this._blurMaterial=zT(u,e,i)}return l}_compileMaterial(e){const i=new Ci(this._lodPlanes[0],e);this._renderer.compile(i,yh)}_sceneToCubeUV(e,i,r,l,u){const m=new Qn(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(tv),_.toneMapping=Ia,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const R=new Hv({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),y=new Ci(new Io,R);let v=!1;const L=e.background;L?L.isColor&&(R.color.copy(L),e.background=null,v=!0):(R.color.copy(tv),v=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[U],u.y,u.z)):D===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[U]));const H=this._cubeSize;vc(l,D*H,U>2?H:0,H,H),_.setRenderTarget(l),v&&_.render(y,m),_.render(e,m)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=M,_.autoClear=S,e.background=L}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ys||e.mapping===Ms;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=av());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ci(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;vc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,yh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=ev[(l-u-1)%ev.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,_=new Ci(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*mr-1),R=u/b,y=isFinite(u)?1+Math.floor(x*R):mr;y>mr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${mr}`);const v=[];let L=0;for(let P=0;P<mr;++P){const k=P/R,w=Math.exp(-k*k/2);v.push(w),P===0?L+=w:P<y&&(L+=2*w)}for(let P=0;P<v.length;P++)v[P]=v[P]/L;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:U}=this;S.dTheta.value=b,S.mipInt.value=U-r;const D=this._sizeLods[l],H=3*D*(l>U-_s?l-U+_s:0),F=4*(this._cubeSize-D);vc(i,H,F,3*D,2*D),m.setRenderTarget(i),m.render(_,yh)}}function PT(o){const e=[],i=[],r=[];let l=o;const u=o-_s+1+$_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-_s?m=$_[h-o+_s-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),x=-p,_=1+p,S=[x,x,_,x,_,_,x,x,_,_,x,_],M=6,b=6,R=3,y=2,v=1,L=new Float32Array(R*b*M),U=new Float32Array(y*b*M),D=new Float32Array(v*b*M);for(let F=0;F<M;F++){const P=F%3*2/3-1,k=F>2?0:-1,w=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];L.set(w,R*b*F),U.set(S,y*b*F);const C=[F,F,F,F,F,F];D.set(C,v*b*F)}const H=new Li;H.setAttribute("position",new wi(L,R)),H.setAttribute("uv",new wi(U,y)),H.setAttribute("faceIndex",new wi(D,v)),e.push(H),l>_s&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function iv(o,e,i){const r=new xr(o,e,i);return r.texture.mapping=Dc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function zT(o,e,i){const r=new Float32Array(mr),l=new K(0,1,0);return new Ha({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function av(){return new Ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function rv(){return new Ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function wd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===zh||m===Bh,x=m===ys||m===Ms;if(p||x){let _=e.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new nv(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new nv(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function IT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&No("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function FT(o,e,i,r){const l={},u=new WeakMap;function h(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(_){const S=[],M=_.index,b=_.attributes.position;let R=0;if(M!==null){const L=M.array;R=M.version;for(let U=0,D=L.length;U<D;U+=3){const H=L[U+0],F=L[U+1],P=L[U+2];S.push(H,F,F,P,P,H)}}else if(b!==void 0){const L=b.array;R=b.version;for(let U=0,D=L.length/3-1;U<D;U+=3){const H=U+0,F=U+1,P=U+2;S.push(H,F,F,P,P,H)}}else return;const y=new(Pv(S)?Vv:Gv)(S,1);y.version=R;const v=u.get(_);v&&e.remove(v),u.set(_,y)}function x(_){const S=u.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:x}}function HT(o,e,i){let r;function l(S){r=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*h),i.update(M,r,1)}function p(S,M,b){b!==0&&(o.drawElementsInstanced(r,M,u,S*h,b),i.update(M,r,b))}function x(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,b);let y=0;for(let v=0;v<b;v++)y+=M[v];i.update(y,r,1)}function _(S,M,b,R){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/h,M[v],R[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,R,0,b);let v=0;for(let L=0;L<b;L++)v+=M[L]*R[L];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function GT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function VT(o,e,i){const r=new WeakMap,l=new He;function u(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let S=r.get(d);if(S===void 0||S.count!==_){let C=function(){k.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),R===!0&&(D=2),y===!0&&(D=3);let H=d.attributes.position.count*D,F=1;H>e.maxTextureSize&&(F=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const P=new Float32Array(H*F*4*_),k=new zv(P,H,F,_);k.type=aa,k.needsUpdate=!0;const w=D*4;for(let G=0;G<_;G++){const tt=v[G],ct=L[G],gt=U[G],ft=H*F*4*G;for(let z=0;z<tt.count;z++){const Z=z*w;b===!0&&(l.fromBufferAttribute(tt,z),P[ft+Z+0]=l.x,P[ft+Z+1]=l.y,P[ft+Z+2]=l.z,P[ft+Z+3]=0),R===!0&&(l.fromBufferAttribute(ct,z),P[ft+Z+4]=l.x,P[ft+Z+5]=l.y,P[ft+Z+6]=l.z,P[ft+Z+7]=0),y===!0&&(l.fromBufferAttribute(gt,z),P[ft+Z+8]=l.x,P[ft+Z+9]=l.y,P[ft+Z+10]=l.z,P[ft+Z+11]=gt.itemSize===4?l.w:1)}}S={count:_,texture:k,size:new Me(H,F)},r.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function XT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,x=m.geometry,_=e.get(m,x);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const Kv=new Hn,sv=new qv(1,1),Qv=new zv,Jv=new uy,$v=new Wv,ov=[],lv=[],cv=new Float32Array(16),uv=new Float32Array(9),fv=new Float32Array(4);function Rs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=ov[l];if(u===void 0&&(u=new Float32Array(l),ov[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function hn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function dn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Nc(o,e){let i=lv[e];i===void 0&&(i=new Int32Array(e),lv[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function kT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function WT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2fv(this.addr,e),dn(i,e)}}function qT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;o.uniform3fv(this.addr,e),dn(i,e)}}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4fv(this.addr,e),dn(i,e)}}function jT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,r))return;fv.set(r),o.uniformMatrix2fv(this.addr,!1,fv),dn(i,r)}}function ZT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,r))return;uv.set(r),o.uniformMatrix3fv(this.addr,!1,uv),dn(i,r)}}function KT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,r))return;cv.set(r),o.uniformMatrix4fv(this.addr,!1,cv),dn(i,r)}}function QT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function JT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2iv(this.addr,e),dn(i,e)}}function $T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3iv(this.addr,e),dn(i,e)}}function tb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4iv(this.addr,e),dn(i,e)}}function eb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function nb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2uiv(this.addr,e),dn(i,e)}}function ib(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3uiv(this.addr,e),dn(i,e)}}function ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4uiv(this.addr,e),dn(i,e)}}function rb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(sv.compareFunction=Ov,u=sv):u=Kv,i.setTexture2D(e||u,l)}function sb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Jv,l)}function ob(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||$v,l)}function lb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Qv,l)}function cb(o){switch(o){case 5126:return kT;case 35664:return WT;case 35665:return qT;case 35666:return YT;case 35674:return jT;case 35675:return ZT;case 35676:return KT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return $T;case 35669:case 35673:return tb;case 5125:return eb;case 36294:return nb;case 36295:return ib;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return rb;case 35679:case 36299:case 36307:return sb;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return lb}}function ub(o,e){o.uniform1fv(this.addr,e)}function fb(o,e){const i=Rs(e,this.size,2);o.uniform2fv(this.addr,i)}function hb(o,e){const i=Rs(e,this.size,3);o.uniform3fv(this.addr,i)}function db(o,e){const i=Rs(e,this.size,4);o.uniform4fv(this.addr,i)}function pb(o,e){const i=Rs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function mb(o,e){const i=Rs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function gb(o,e){const i=Rs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function _b(o,e){o.uniform1iv(this.addr,e)}function vb(o,e){o.uniform2iv(this.addr,e)}function xb(o,e){o.uniform3iv(this.addr,e)}function Sb(o,e){o.uniform4iv(this.addr,e)}function yb(o,e){o.uniform1uiv(this.addr,e)}function Mb(o,e){o.uniform2uiv(this.addr,e)}function Eb(o,e){o.uniform3uiv(this.addr,e)}function Tb(o,e){o.uniform4uiv(this.addr,e)}function bb(o,e,i){const r=this.cache,l=e.length,u=Nc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Kv,u[h])}function Ab(o,e,i){const r=this.cache,l=e.length,u=Nc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Jv,u[h])}function Rb(o,e,i){const r=this.cache,l=e.length,u=Nc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||$v,u[h])}function Cb(o,e,i){const r=this.cache,l=e.length,u=Nc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Qv,u[h])}function wb(o){switch(o){case 5126:return ub;case 35664:return fb;case 35665:return hb;case 35666:return db;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return _b;case 35667:case 35671:return vb;case 35668:case 35672:return xb;case 35669:case 35673:return Sb;case 5125:return yb;case 36294:return Mb;case 36295:return Eb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Cb}}class Db{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=cb(i.type)}}class Ub{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=wb(i.type)}}class Lb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const Ah=/(\w+)(\])?(\[|\.)?/g;function hv(o,e){o.seq.push(e),o.map[e.id]=e}function Nb(o,e,i){const r=o.name,l=r.length;for(Ah.lastIndex=0;;){const u=Ah.exec(r),h=Ah.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){hv(i,p===void 0?new Db(d,o,e):new Ub(d,o,e));break}else{let _=i.map[d];_===void 0&&(_=new Lb(d),hv(i,_)),i=_}}}class Tc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Nb(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function dv(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Ob=37297;let Pb=0;function zb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const pv=new ue;function Bb(o){we._getMatrix(pv,we.workingColorSpace,o);const e=`mat3( ${pv.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(o)){case bc:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function mv(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+zb(o.getShaderSource(e),d)}else return u}function Ib(o,e){const i=Bb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Fb(o,e){let i;switch(e){case IS:i="Linear";break;case FS:i="Reinhard";break;case HS:i="Cineon";break;case GS:i="ACESFilmic";break;case XS:i="AgX";break;case kS:i="Neutral";break;case VS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const xc=new K;function Hb(){we.getLuminanceCoefficients(xc);const o=xc.x.toFixed(4),e=xc.y.toFixed(4),i=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function Vb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Xb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Co(o){return o!==""}function gv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _v(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kb=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(o){return o.replace(kb,qb)}const Wb=new Map;function qb(o,e){let i=fe[e];if(i===void 0){const r=Wb.get(e);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return md(i)}const Yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vv(o){return o.replace(Yb,jb)}function jb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function xv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ev?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===_S?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===na&&(e="SHADOWMAP_TYPE_VSM"),e}function Kb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ys:case Ms:e="ENVMAP_TYPE_CUBE";break;case Dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function Jb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case vd:e="ENVMAP_BLENDING_MULTIPLY";break;case zS:e="ENVMAP_BLENDING_MIX";break;case BS:e="ENVMAP_BLENDING_ADD";break}return e}function $b(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function tA(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Zb(i),p=Kb(i),x=Qb(i),_=Jb(i),S=$b(i),M=Gb(i),b=Vb(u),R=l.createProgram();let y,v,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Co).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Co).join(`
`),v.length>0&&(v+=`
`)):(y=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),v=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ia?"#define TONE_MAPPING":"",i.toneMapping!==Ia?fe.tonemapping_pars_fragment:"",i.toneMapping!==Ia?Fb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,Ib("linearToOutputTexel",i.outputColorSpace),Hb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Co).join(`
`)),h=md(h),h=gv(h,i),h=_v(h,i),d=md(d),d=gv(d,i),d=_v(d,i),h=vv(h),d=vv(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===A_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===A_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=L+y+h,D=L+v+d,H=dv(l,l.VERTEX_SHADER,U),F=dv(l,l.FRAGMENT_SHADER,D);l.attachShader(R,H),l.attachShader(R,F),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function P(G){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(R)||"",ct=l.getShaderInfoLog(H)||"",gt=l.getShaderInfoLog(F)||"",ft=tt.trim(),z=ct.trim(),Z=gt.trim();let j=!0,vt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,H,F);else{const Mt=mv(l,H,"vertex"),O=mv(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ft+`
`+Mt+`
`+O)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(z===""||Z==="")&&(vt=!1);vt&&(G.diagnostics={runnable:j,programLog:ft,vertexShader:{log:z,prefix:y},fragmentShader:{log:Z,prefix:v}})}l.deleteShader(H),l.deleteShader(F),k=new Tc(l,R),w=Xb(l,R)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,Ob)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Pb++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=H,this.fragmentShader=F,this}let eA=0;class nA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new iA(e),i.set(e,r)),r}}class iA{constructor(e){this.id=eA++,this.code=e,this.usedTimes=0}}function aA(o,e,i,r,l,u,h){const d=new Iv,m=new nA,p=new Set,x=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,G,tt,ct){const gt=tt.fog,ft=ct.geometry,z=w.isMeshStandardMaterial?tt.environment:null,Z=(w.isMeshStandardMaterial?i:e).get(w.envMap||z),j=Z&&Z.mapping===Dc?Z.image.height:null,vt=b[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Mt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,O=Mt!==void 0?Mt.length:0;let nt=0;ft.morphAttributes.position!==void 0&&(nt=1),ft.morphAttributes.normal!==void 0&&(nt=2),ft.morphAttributes.color!==void 0&&(nt=3);let St,bt,Nt,it;if(vt){const Ee=bi[vt];St=Ee.vertexShader,bt=Ee.fragmentShader}else St=w.vertexShader,bt=w.fragmentShader,m.update(w),Nt=m.getVertexShaderID(w),it=m.getFragmentShaderID(w);const ot=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),It=ct.isInstancedMesh===!0,kt=ct.isBatchedMesh===!0,he=!!w.map,nn=!!w.matcap,I=!!Z,Ae=!!w.aoMap,ie=!!w.lightMap,te=!!w.bumpMap,Wt=!!w.normalMap,Ge=!!w.displacementMap,Xt=!!w.emissiveMap,re=!!w.metalnessMap,Ke=!!w.roughnessMap,je=w.anisotropy>0,N=w.clearcoat>0,E=w.dispersion>0,$=w.iridescence>0,ht=w.sheen>0,xt=w.transmission>0,lt=je&&!!w.anisotropyMap,Zt=N&&!!w.clearcoatMap,At=N&&!!w.clearcoatNormalMap,Yt=N&&!!w.clearcoatRoughnessMap,jt=$&&!!w.iridescenceMap,Et=$&&!!w.iridescenceThicknessMap,Rt=ht&&!!w.sheenColorMap,Kt=ht&&!!w.sheenRoughnessMap,Pt=!!w.specularMap,Dt=!!w.specularColorMap,oe=!!w.specularIntensityMap,X=xt&&!!w.transmissionMap,Tt=xt&&!!w.thicknessMap,Ct=!!w.gradientMap,zt=!!w.alphaMap,yt=w.alphaTest>0,mt=!!w.alphaHash,Ft=!!w.extensions;let ae=Ia;w.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ae=o.toneMapping);const Ne={shaderID:vt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:bt,defines:w.defines,customVertexShaderID:Nt,customFragmentShaderID:it,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:kt,batchingColor:kt&&ct._colorsTexture!==null,instancing:It,instancingColor:It&&ct.instanceColor!==null,instancingMorph:It&&ct.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ot===null?o.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Es,alphaToCoverage:!!w.alphaToCoverage,map:he,matcap:nn,envMap:I,envMapMode:I&&Z.mapping,envMapCubeUVHeight:j,aoMap:Ae,lightMap:ie,bumpMap:te,normalMap:Wt,displacementMap:S&&Ge,emissiveMap:Xt,normalMapObjectSpace:Wt&&w.normalMapType===jS,normalMapTangentSpace:Wt&&w.normalMapType===Nv,metalnessMap:re,roughnessMap:Ke,anisotropy:je,anisotropyMap:lt,clearcoat:N,clearcoatMap:Zt,clearcoatNormalMap:At,clearcoatRoughnessMap:Yt,dispersion:E,iridescence:$,iridescenceMap:jt,iridescenceThicknessMap:Et,sheen:ht,sheenColorMap:Rt,sheenRoughnessMap:Kt,specularMap:Pt,specularColorMap:Dt,specularIntensityMap:oe,transmission:xt,transmissionMap:X,thicknessMap:Tt,gradientMap:Ct,opaque:w.transparent===!1&&w.blending===vs&&w.alphaToCoverage===!1,alphaMap:zt,alphaTest:yt,alphaHash:mt,combine:w.combine,mapUv:he&&R(w.map.channel),aoMapUv:Ae&&R(w.aoMap.channel),lightMapUv:ie&&R(w.lightMap.channel),bumpMapUv:te&&R(w.bumpMap.channel),normalMapUv:Wt&&R(w.normalMap.channel),displacementMapUv:Ge&&R(w.displacementMap.channel),emissiveMapUv:Xt&&R(w.emissiveMap.channel),metalnessMapUv:re&&R(w.metalnessMap.channel),roughnessMapUv:Ke&&R(w.roughnessMap.channel),anisotropyMapUv:lt&&R(w.anisotropyMap.channel),clearcoatMapUv:Zt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:At&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&R(w.sheenRoughnessMap.channel),specularMapUv:Pt&&R(w.specularMap.channel),specularColorMapUv:Dt&&R(w.specularColorMap.channel),specularIntensityMapUv:oe&&R(w.specularIntensityMap.channel),transmissionMapUv:X&&R(w.transmissionMap.channel),thicknessMapUv:Tt&&R(w.thicknessMap.channel),alphaMapUv:zt&&R(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Wt||je),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!ft.attributes.uv&&(he||zt),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:wt,skinning:ct.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:nt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:he&&w.map.isVideoTexture===!0&&we.getTransfer(w.map.colorSpace)===Fe,decodeVideoTextureEmissive:Xt&&w.emissiveMap.isVideoTexture===!0&&we.getTransfer(w.emissiveMap.colorSpace)===Fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ia,flipSided:w.side===Fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ft&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&w.extensions.multiDraw===!0||kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(L(C,w),U(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function L(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function U(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=b[w.type];let G;if(C){const tt=bi[C];G=Ey.clone(tt.uniforms)}else G=w.uniforms;return G}function H(w,C){let G;for(let tt=0,ct=x.length;tt<ct;tt++){const gt=x[tt];if(gt.cacheKey===C){G=gt,++G.usedTimes;break}}return G===void 0&&(G=new tA(o,C,w,u),x.push(G)),G}function F(w){if(--w.usedTimes===0){const C=x.indexOf(w);x[C]=x[x.length-1],x.pop(),w.destroy()}}function P(w){m.remove(w)}function k(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:D,acquireProgram:H,releaseProgram:F,releaseShaderCache:P,programs:x,dispose:k}}function rA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function sA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Sv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function yv(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(_,S,M,b,R,y){let v=o[e];return v===void 0?(v={id:_.id,object:_,geometry:S,material:M,groupOrder:b,renderOrder:_.renderOrder,z:R,group:y},o[e]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=M,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=R,v.group=y),e++,v}function d(_,S,M,b,R,y){const v=h(_,S,M,b,R,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(_,S,M,b,R,y){const v=h(_,S,M,b,R,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,S){i.length>1&&i.sort(_||sA),r.length>1&&r.sort(S||Sv),l.length>1&&l.sort(S||Sv)}function x(){for(let _=e,S=o.length;_<S;_++){const M=o[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:x,sort:p}}function oA(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new yv,o.set(r,[h])):l>=u.length?(h=new yv,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function lA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new K,color:new be};break;case"SpotLight":i={position:new K,direction:new K,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=i,i}}}function cA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let uA=0;function fA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function hA(o){const e=new lA,i=cA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const l=new K,u=new Ze,h=new Ze;function d(p){let x=0,_=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,b=0,R=0,y=0,v=0,L=0,U=0,D=0,H=0,F=0,P=0;p.sort(fA);for(let w=0,C=p.length;w<C;w++){const G=p[w],tt=G.color,ct=G.intensity,gt=G.distance,ft=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)x+=tt.r*ct,_+=tt.g*ct,S+=tt.b*ct;else if(G.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(G.sh.coefficients[z],ct);P++}else if(G.isDirectionalLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,j=i.get(G);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,r.directionalShadow[M]=j,r.directionalShadowMap[M]=ft,r.directionalShadowMatrix[M]=G.shadow.matrix,L++}r.directional[M]=z,M++}else if(G.isSpotLight){const z=e.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(tt).multiplyScalar(ct),z.distance=gt,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,r.spot[R]=z;const Z=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,Z.updateMatrices(G),G.castShadow&&F++),r.spotLightMatrix[R]=Z.matrix,G.castShadow){const j=i.get(G);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,r.spotShadow[R]=j,r.spotShadowMap[R]=ft,D++}R++}else if(G.isRectAreaLight){const z=e.get(G);z.color.copy(tt).multiplyScalar(ct),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=z,y++}else if(G.isPointLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const Z=G.shadow,j=i.get(G);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,r.pointShadow[b]=j,r.pointShadowMap[b]=ft,r.pointShadowMatrix[b]=G.shadow.matrix,U++}r.point[b]=z,b++}else if(G.isHemisphereLight){const z=e.get(G);z.skyColor.copy(G.color).multiplyScalar(ct),z.groundColor.copy(G.groundColor).multiplyScalar(ct),r.hemi[v]=z,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=S;const k=r.hash;(k.directionalLength!==M||k.pointLength!==b||k.spotLength!==R||k.rectAreaLength!==y||k.hemiLength!==v||k.numDirectionalShadows!==L||k.numPointShadows!==U||k.numSpotShadows!==D||k.numSpotMaps!==H||k.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=y,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=D+H-F,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=P,k.directionalLength=M,k.pointLength=b,k.spotLength=R,k.rectAreaLength=y,k.hemiLength=v,k.numDirectionalShadows=L,k.numPointShadows=U,k.numSpotShadows=D,k.numSpotMaps=H,k.numLightProbes=P,r.version=uA++)}function m(p,x){let _=0,S=0,M=0,b=0,R=0;const y=x.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const U=p[v];if(U.isDirectionalLight){const D=r.directional[_];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),_++}else if(U.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const D=r.rectArea[b];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(U.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(U.isPointLight){const D=r.point[S];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),S++}else if(U.isHemisphereLight){const D=r.hemi[R];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:r}}function Mv(o){const e=new hA(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function u(x){i.push(x)}function h(x){r.push(x)}function d(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function dA(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new Mv(o),e.set(l,[d])):u>=h.length?(d=new Mv(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const pA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gA(o,e,i){let r=new Ad;const l=new Me,u=new Me,h=new He,d=new Iy({depthPacking:YS}),m=new Fy,p={},x=i.maxTextureSize,_={[Fa]:Fn,[Fn]:Fa,[ia]:ia},S=new Ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:pA,fragmentShader:mA}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Li;b.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ci(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ev;let v=this.type;this.render=function(F,P,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(Ba),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const ct=v!==na&&this.type===na,gt=v===na&&this.type!==na;for(let ft=0,z=F.length;ft<z;ft++){const Z=F[ft],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const vt=j.getFrameExtents();if(l.multiply(vt),u.copy(j.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/vt.x),l.x=u.x*vt.x,j.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/vt.y),l.y=u.y*vt.y,j.mapSize.y=u.y)),j.map===null||ct===!0||gt===!0){const O=this.type!==na?{minFilter:vi,magFilter:vi}:{};j.map!==null&&j.map.dispose(),j.map=new xr(l.x,l.y,O),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const Mt=j.getViewportCount();for(let O=0;O<Mt;O++){const nt=j.getViewport(O);h.set(u.x*nt.x,u.y*nt.y,u.x*nt.z,u.y*nt.w),tt.viewport(h),j.updateMatrices(Z,O),r=j.getFrustum(),D(P,k,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===na&&L(j,k),j.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(w,C,G)};function L(F,P){const k=e.update(R);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new xr(l.x,l.y)),S.uniforms.shadow_pass.value=F.map.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(P,null,k,S,R,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(P,null,k,M,R,null)}function U(F,P,k,w){let C=null;const G=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)C=G;else if(C=k.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const tt=C.uuid,ct=P.uuid;let gt=p[tt];gt===void 0&&(gt={},p[tt]=gt);let ft=gt[ct];ft===void 0&&(ft=C.clone(),gt[ct]=ft,P.addEventListener("dispose",H)),C=ft}if(C.visible=P.visible,C.wireframe=P.wireframe,w===na?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:_[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const tt=o.properties.get(C);tt.light=k}return C}function D(F,P,k,w,C){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===na)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const ct=e.update(F),gt=F.material;if(Array.isArray(gt)){const ft=ct.groups;for(let z=0,Z=ft.length;z<Z;z++){const j=ft[z],vt=gt[j.materialIndex];if(vt&&vt.visible){const Mt=U(F,vt,w,C);F.onBeforeShadow(o,F,P,k,ct,Mt,j),o.renderBufferDirect(k,null,ct,Mt,F,j),F.onAfterShadow(o,F,P,k,ct,Mt,j)}}}else if(gt.visible){const ft=U(F,gt,w,C);F.onBeforeShadow(o,F,P,k,ct,ft,null),o.renderBufferDirect(k,null,ct,ft,F,null),F.onAfterShadow(o,F,P,k,ct,ft,null)}}const tt=F.children;for(let ct=0,gt=tt.length;ct<gt;ct++)D(tt[ct],P,k,w,C)}function H(F){F.target.removeEventListener("dispose",H);for(const k in p){const w=p[k],C=F.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const _A={[wh]:Dh,[Uh]:Oh,[Lh]:Ph,[Ss]:Nh,[Dh]:wh,[Oh]:Uh,[Ph]:Lh,[Nh]:Ss};function vA(o,e){function i(){let X=!1;const Tt=new He;let Ct=null;const zt=new He(0,0,0,0);return{setMask:function(yt){Ct!==yt&&!X&&(o.colorMask(yt,yt,yt,yt),Ct=yt)},setLocked:function(yt){X=yt},setClear:function(yt,mt,Ft,ae,Ne){Ne===!0&&(yt*=ae,mt*=ae,Ft*=ae),Tt.set(yt,mt,Ft,ae),zt.equals(Tt)===!1&&(o.clearColor(yt,mt,Ft,ae),zt.copy(Tt))},reset:function(){X=!1,Ct=null,zt.set(-1,0,0,0)}}}function r(){let X=!1,Tt=!1,Ct=null,zt=null,yt=null;return{setReversed:function(mt){if(Tt!==mt){const Ft=e.get("EXT_clip_control");mt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Tt=mt;const ae=yt;yt=null,this.setClear(ae)}},getReversed:function(){return Tt},setTest:function(mt){mt?ot(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(mt){Ct!==mt&&!X&&(o.depthMask(mt),Ct=mt)},setFunc:function(mt){if(Tt&&(mt=_A[mt]),zt!==mt){switch(mt){case wh:o.depthFunc(o.NEVER);break;case Dh:o.depthFunc(o.ALWAYS);break;case Uh:o.depthFunc(o.LESS);break;case Ss:o.depthFunc(o.LEQUAL);break;case Lh:o.depthFunc(o.EQUAL);break;case Nh:o.depthFunc(o.GEQUAL);break;case Oh:o.depthFunc(o.GREATER);break;case Ph:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=mt}},setLocked:function(mt){X=mt},setClear:function(mt){yt!==mt&&(Tt&&(mt=1-mt),o.clearDepth(mt),yt=mt)},reset:function(){X=!1,Ct=null,zt=null,yt=null,Tt=!1}}}function l(){let X=!1,Tt=null,Ct=null,zt=null,yt=null,mt=null,Ft=null,ae=null,Ne=null;return{setTest:function(Ee){X||(Ee?ot(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Ee){Tt!==Ee&&!X&&(o.stencilMask(Ee),Tt=Ee)},setFunc:function(Ee,Rn,$n){(Ct!==Ee||zt!==Rn||yt!==$n)&&(o.stencilFunc(Ee,Rn,$n),Ct=Ee,zt=Rn,yt=$n)},setOp:function(Ee,Rn,$n){(mt!==Ee||Ft!==Rn||ae!==$n)&&(o.stencilOp(Ee,Rn,$n),mt=Ee,Ft=Rn,ae=$n)},setLocked:function(Ee){X=Ee},setClear:function(Ee){Ne!==Ee&&(o.clearStencil(Ee),Ne=Ee)},reset:function(){X=!1,Tt=null,Ct=null,zt=null,yt=null,mt=null,Ft=null,ae=null,Ne=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let x={},_={},S=new WeakMap,M=[],b=null,R=!1,y=null,v=null,L=null,U=null,D=null,H=null,F=null,P=new be(0,0,0),k=0,w=!1,C=null,G=null,tt=null,ct=null,gt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=Z>=2);let vt=null,Mt={};const O=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),St=new He().fromArray(O),bt=new He().fromArray(nt);function Nt(X,Tt,Ct,zt){const yt=new Uint8Array(4),mt=o.createTexture();o.bindTexture(X,mt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<Ct;Ft++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Tt,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Tt+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return mt}const it={};it[o.TEXTURE_2D]=Nt(o.TEXTURE_2D,o.TEXTURE_2D,1),it[o.TEXTURE_CUBE_MAP]=Nt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[o.TEXTURE_2D_ARRAY]=Nt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),it[o.TEXTURE_3D]=Nt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ot(o.DEPTH_TEST),h.setFunc(Ss),te(!1),Wt(S_),ot(o.CULL_FACE),Ae(Ba);function ot(X){x[X]!==!0&&(o.enable(X),x[X]=!0)}function wt(X){x[X]!==!1&&(o.disable(X),x[X]=!1)}function It(X,Tt){return _[X]!==Tt?(o.bindFramebuffer(X,Tt),_[X]=Tt,X===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Tt),X===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Tt),!0):!1}function kt(X,Tt){let Ct=M,zt=!1;if(X){Ct=S.get(Tt),Ct===void 0&&(Ct=[],S.set(Tt,Ct));const yt=X.textures;if(Ct.length!==yt.length||Ct[0]!==o.COLOR_ATTACHMENT0){for(let mt=0,Ft=yt.length;mt<Ft;mt++)Ct[mt]=o.COLOR_ATTACHMENT0+mt;Ct.length=yt.length,zt=!0}}else Ct[0]!==o.BACK&&(Ct[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Ct)}function he(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const nn={[pr]:o.FUNC_ADD,[xS]:o.FUNC_SUBTRACT,[SS]:o.FUNC_REVERSE_SUBTRACT};nn[yS]=o.MIN,nn[MS]=o.MAX;const I={[ES]:o.ZERO,[TS]:o.ONE,[bS]:o.SRC_COLOR,[Rh]:o.SRC_ALPHA,[US]:o.SRC_ALPHA_SATURATE,[wS]:o.DST_COLOR,[RS]:o.DST_ALPHA,[AS]:o.ONE_MINUS_SRC_COLOR,[Ch]:o.ONE_MINUS_SRC_ALPHA,[DS]:o.ONE_MINUS_DST_COLOR,[CS]:o.ONE_MINUS_DST_ALPHA,[LS]:o.CONSTANT_COLOR,[NS]:o.ONE_MINUS_CONSTANT_COLOR,[OS]:o.CONSTANT_ALPHA,[PS]:o.ONE_MINUS_CONSTANT_ALPHA};function Ae(X,Tt,Ct,zt,yt,mt,Ft,ae,Ne,Ee){if(X===Ba){R===!0&&(wt(o.BLEND),R=!1);return}if(R===!1&&(ot(o.BLEND),R=!0),X!==vS){if(X!==y||Ee!==w){if((v!==pr||D!==pr)&&(o.blendEquation(o.FUNC_ADD),v=pr,D=pr),Ee)switch(X){case vs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case y_:o.blendFunc(o.ONE,o.ONE);break;case M_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case E_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case vs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case y_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case M_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case E_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,U=null,H=null,F=null,P.set(0,0,0),k=0,y=X,w=Ee}return}yt=yt||Tt,mt=mt||Ct,Ft=Ft||zt,(Tt!==v||yt!==D)&&(o.blendEquationSeparate(nn[Tt],nn[yt]),v=Tt,D=yt),(Ct!==L||zt!==U||mt!==H||Ft!==F)&&(o.blendFuncSeparate(I[Ct],I[zt],I[mt],I[Ft]),L=Ct,U=zt,H=mt,F=Ft),(ae.equals(P)===!1||Ne!==k)&&(o.blendColor(ae.r,ae.g,ae.b,Ne),P.copy(ae),k=Ne),y=X,w=!1}function ie(X,Tt){X.side===ia?wt(o.CULL_FACE):ot(o.CULL_FACE);let Ct=X.side===Fn;Tt&&(Ct=!Ct),te(Ct),X.blending===vs&&X.transparent===!1?Ae(Ba):Ae(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const zt=X.stencilWrite;d.setTest(zt),zt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Xt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ot(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function te(X){C!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),C=X)}function Wt(X){X!==mS?(ot(o.CULL_FACE),X!==G&&(X===S_?o.cullFace(o.BACK):X===gS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),G=X}function Ge(X){X!==tt&&(z&&o.lineWidth(X),tt=X)}function Xt(X,Tt,Ct){X?(ot(o.POLYGON_OFFSET_FILL),(ct!==Tt||gt!==Ct)&&(o.polygonOffset(Tt,Ct),ct=Tt,gt=Ct)):wt(o.POLYGON_OFFSET_FILL)}function re(X){X?ot(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function Ke(X){X===void 0&&(X=o.TEXTURE0+ft-1),vt!==X&&(o.activeTexture(X),vt=X)}function je(X,Tt,Ct){Ct===void 0&&(vt===null?Ct=o.TEXTURE0+ft-1:Ct=vt);let zt=Mt[Ct];zt===void 0&&(zt={type:void 0,texture:void 0},Mt[Ct]=zt),(zt.type!==X||zt.texture!==Tt)&&(vt!==Ct&&(o.activeTexture(Ct),vt=Ct),o.bindTexture(X,Tt||it[X]),zt.type=X,zt.texture=Tt)}function N(){const X=Mt[vt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(X){St.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function Kt(X){bt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),bt.copy(X))}function Pt(X,Tt){let Ct=p.get(Tt);Ct===void 0&&(Ct=new WeakMap,p.set(Tt,Ct));let zt=Ct.get(X);zt===void 0&&(zt=o.getUniformBlockIndex(Tt,X.name),Ct.set(X,zt))}function Dt(X,Tt){const zt=p.get(Tt).get(X);m.get(Tt)!==zt&&(o.uniformBlockBinding(Tt,zt,X.__bindingPointIndex),m.set(Tt,zt))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},vt=null,Mt={},_={},S=new WeakMap,M=[],b=null,R=!1,y=null,v=null,L=null,U=null,D=null,H=null,F=null,P=new be(0,0,0),k=0,w=!1,C=null,G=null,tt=null,ct=null,gt=null,St.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ot,disable:wt,bindFramebuffer:It,drawBuffers:kt,useProgram:he,setBlending:Ae,setMaterial:ie,setFlipSided:te,setCullFace:Wt,setLineWidth:Ge,setPolygonOffset:Xt,setScissorTest:re,activeTexture:Ke,bindTexture:je,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:jt,texImage3D:Et,updateUBOMapping:Pt,uniformBlockBinding:Dt,texStorage2D:At,texStorage3D:Yt,texSubImage2D:ht,texSubImage3D:xt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Zt,scissor:Rt,viewport:Kt,reset:oe}}function xA(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Me,x=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return M?new OffscreenCanvas(N,E):Rc("canvas")}function R(N,E,$){let ht=1;const xt=je(N);if((xt.width>$||xt.height>$)&&(ht=$/Math.max(xt.width,xt.height)),ht<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const lt=Math.floor(ht*xt.width),Zt=Math.floor(ht*xt.height);_===void 0&&(_=b(lt,Zt));const At=E?b(lt,Zt):_;return At.width=lt,At.height=Zt,At.getContext("2d").drawImage(N,0,0,lt,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+lt+"x"+Zt+")."),At}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),N;return N}function y(N){return N.generateMipmaps}function v(N){o.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(N,E,$,ht,xt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let lt=E;if(E===o.RED&&($===o.FLOAT&&(lt=o.R32F),$===o.HALF_FLOAT&&(lt=o.R16F),$===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(lt=o.R8UI),$===o.UNSIGNED_SHORT&&(lt=o.R16UI),$===o.UNSIGNED_INT&&(lt=o.R32UI),$===o.BYTE&&(lt=o.R8I),$===o.SHORT&&(lt=o.R16I),$===o.INT&&(lt=o.R32I)),E===o.RG&&($===o.FLOAT&&(lt=o.RG32F),$===o.HALF_FLOAT&&(lt=o.RG16F),$===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(lt=o.RG8UI),$===o.UNSIGNED_SHORT&&(lt=o.RG16UI),$===o.UNSIGNED_INT&&(lt=o.RG32UI),$===o.BYTE&&(lt=o.RG8I),$===o.SHORT&&(lt=o.RG16I),$===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),$===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),$===o.UNSIGNED_INT&&(lt=o.RGB32UI),$===o.BYTE&&(lt=o.RGB8I),$===o.SHORT&&(lt=o.RGB16I),$===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),$===o.UNSIGNED_INT&&(lt=o.RGBA32UI),$===o.BYTE&&(lt=o.RGBA8I),$===o.SHORT&&(lt=o.RGBA16I),$===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&($===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),E===o.RGBA){const Zt=xt?bc:we.getTransfer(ht);$===o.FLOAT&&(lt=o.RGBA32F),$===o.HALF_FLOAT&&(lt=o.RGBA16F),$===o.UNSIGNED_BYTE&&(lt=Zt===Fe?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function D(N,E){let $;return N?E===null||E===vr||E===Do?$=o.DEPTH24_STENCIL8:E===aa?$=o.DEPTH32F_STENCIL8:E===wo&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===vr||E===Do?$=o.DEPTH_COMPONENT24:E===aa?$=o.DEPTH_COMPONENT32F:E===wo&&($=o.DEPTH_COMPONENT16),$}function H(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==vi&&N.minFilter!==Ai?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function F(N){const E=N.target;E.removeEventListener("dispose",F),k(E),E.isVideoTexture&&x.delete(E)}function P(N){const E=N.target;E.removeEventListener("dispose",P),C(E)}function k(N){const E=r.get(N);if(E.__webglInit===void 0)return;const $=N.source,ht=S.get($);if(ht){const xt=ht[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&w(N),Object.keys(ht).length===0&&S.delete($)}r.remove(N)}function w(N){const E=r.get(N);o.deleteTexture(E.__webglTexture);const $=N.source,ht=S.get($);delete ht[E.__cacheKey],h.memory.textures--}function C(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let xt=0;xt<E.__webglFramebuffer[ht].length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[ht][xt]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=N.textures;for(let ht=0,xt=$.length;ht<xt;ht++){const lt=r.get($[ht]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),r.remove($[ht])}r.remove(N)}let G=0;function tt(){G=0}function ct(){const N=G;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function gt(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ft(N,E){const $=r.get(N);if(N.isVideoTexture&&re(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&$.__version!==N.version){const ht=N.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it($,N,E);return}}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+E)}function z(N,E){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){it($,N,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+E)}function Z(N,E){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){it($,N,E);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+E)}function j(N,E){const $=r.get(N);if(N.version>0&&$.__version!==N.version){ot($,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+E)}const vt={[Ih]:o.REPEAT,[gr]:o.CLAMP_TO_EDGE,[Fh]:o.MIRRORED_REPEAT},Mt={[vi]:o.NEAREST,[WS]:o.NEAREST_MIPMAP_NEAREST,[Kl]:o.NEAREST_MIPMAP_LINEAR,[Ai]:o.LINEAR,[Yf]:o.LINEAR_MIPMAP_NEAREST,[_r]:o.LINEAR_MIPMAP_LINEAR},O={[ZS]:o.NEVER,[ey]:o.ALWAYS,[KS]:o.LESS,[Ov]:o.LEQUAL,[QS]:o.EQUAL,[ty]:o.GEQUAL,[JS]:o.GREATER,[$S]:o.NOTEQUAL};function nt(N,E){if(E.type===aa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ai||E.magFilter===Yf||E.magFilter===Kl||E.magFilter===_r||E.minFilter===Ai||E.minFilter===Yf||E.minFilter===Kl||E.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,vt[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,vt[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,vt[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,Mt[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,Mt[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vi||E.minFilter!==Kl&&E.minFilter!==_r||E.type===aa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(N,E){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",F));const ht=E.source;let xt=S.get(ht);xt===void 0&&(xt={},S.set(ht,xt));const lt=gt(E);if(lt!==N.__cacheKey){xt[lt]===void 0&&(xt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,$=!0),xt[lt].usedTimes++;const Zt=xt[N.__cacheKey];Zt!==void 0&&(xt[N.__cacheKey].usedTimes--,Zt.usedTimes===0&&w(E)),N.__cacheKey=lt,N.__webglTexture=xt[lt].texture}return $}function bt(N,E,$){return Math.floor(Math.floor(N/$)/E)}function Nt(N,E,$,ht){const lt=N.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,$,ht,E.data);else{lt.sort((Et,Rt)=>Et.start-Rt.start);let Zt=0;for(let Et=1;Et<lt.length;Et++){const Rt=lt[Zt],Kt=lt[Et],Pt=Rt.start+Rt.count,Dt=bt(Kt.start,E.width,4),oe=bt(Rt.start,E.width,4);Kt.start<=Pt+1&&Dt===oe&&bt(Kt.start+Kt.count-1,E.width,4)===Dt?Rt.count=Math.max(Rt.count,Kt.start+Kt.count-Rt.start):(++Zt,lt[Zt]=Kt)}lt.length=Zt+1;const At=o.getParameter(o.UNPACK_ROW_LENGTH),Yt=o.getParameter(o.UNPACK_SKIP_PIXELS),jt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Et=0,Rt=lt.length;Et<Rt;Et++){const Kt=lt[Et],Pt=Math.floor(Kt.start/4),Dt=Math.ceil(Kt.count/4),oe=Pt%E.width,X=Math.floor(Pt/E.width),Tt=Dt,Ct=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,oe),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,oe,X,Tt,Ct,$,ht,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,At),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Yt),o.pixelStorei(o.UNPACK_SKIP_ROWS,jt)}}function it(N,E,$){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const xt=St(N,E),lt=E.source;i.bindTexture(ht,N.__webglTexture,o.TEXTURE0+$);const Zt=r.get(lt);if(lt.version!==Zt.__version||xt===!0){i.activeTexture(o.TEXTURE0+$);const At=we.getPrimaries(we.workingColorSpace),Yt=E.colorSpace===za?null:we.getPrimaries(E.colorSpace),jt=E.colorSpace===za||At===Yt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let Et=R(E.image,!1,l.maxTextureSize);Et=Ke(E,Et);const Rt=u.convert(E.format,E.colorSpace),Kt=u.convert(E.type);let Pt=U(E.internalFormat,Rt,Kt,E.colorSpace,E.isVideoTexture);nt(ht,E);let Dt;const oe=E.mipmaps,X=E.isVideoTexture!==!0,Tt=Zt.__version===void 0||xt===!0,Ct=lt.dataReady,zt=H(E,Et);if(E.isDepthTexture)Pt=D(E.format===Lo,E.type),Tt&&(X?i.texStorage2D(o.TEXTURE_2D,1,Pt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,Pt,Et.width,Et.height,0,Rt,Kt,null));else if(E.isDataTexture)if(oe.length>0){X&&Tt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,oe[0].width,oe[0].height);for(let yt=0,mt=oe.length;yt<mt;yt++)Dt=oe[yt],X?Ct&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Dt.width,Dt.height,Rt,Kt,Dt.data):i.texImage2D(o.TEXTURE_2D,yt,Pt,Dt.width,Dt.height,0,Rt,Kt,Dt.data);E.generateMipmaps=!1}else X?(Tt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,Et.width,Et.height),Ct&&Nt(E,Et,Rt,Kt)):i.texImage2D(o.TEXTURE_2D,0,Pt,Et.width,Et.height,0,Rt,Kt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Pt,oe[0].width,oe[0].height,Et.depth);for(let yt=0,mt=oe.length;yt<mt;yt++)if(Dt=oe[yt],E.format!==_i)if(Rt!==null)if(X){if(Ct)if(E.layerUpdates.size>0){const Ft=J_(Dt.width,Dt.height,E.format,E.type);for(const ae of E.layerUpdates){const Ne=Dt.data.subarray(ae*Ft/Dt.data.BYTES_PER_ELEMENT,(ae+1)*Ft/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ae,Dt.width,Dt.height,1,Rt,Ne)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Dt.width,Dt.height,Et.depth,Rt,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Pt,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ct&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Dt.width,Dt.height,Et.depth,Rt,Kt,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Pt,Dt.width,Dt.height,Et.depth,0,Rt,Kt,Dt.data)}else{X&&Tt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,oe[0].width,oe[0].height);for(let yt=0,mt=oe.length;yt<mt;yt++)Dt=oe[yt],E.format!==_i?Rt!==null?X?Ct&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Dt.width,Dt.height,Rt,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Pt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ct&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Dt.width,Dt.height,Rt,Kt,Dt.data):i.texImage2D(o.TEXTURE_2D,yt,Pt,Dt.width,Dt.height,0,Rt,Kt,Dt.data)}else if(E.isDataArrayTexture)if(X){if(Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Pt,Et.width,Et.height,Et.depth),Ct)if(E.layerUpdates.size>0){const yt=J_(Et.width,Et.height,E.format,E.type);for(const mt of E.layerUpdates){const Ft=Et.data.subarray(mt*yt/Et.data.BYTES_PER_ELEMENT,(mt+1)*yt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,mt,Et.width,Et.height,1,Rt,Kt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Rt,Kt,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,Et.width,Et.height,Et.depth,0,Rt,Kt,Et.data);else if(E.isData3DTexture)X?(Tt&&i.texStorage3D(o.TEXTURE_3D,zt,Pt,Et.width,Et.height,Et.depth),Ct&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Rt,Kt,Et.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,Et.width,Et.height,Et.depth,0,Rt,Kt,Et.data);else if(E.isFramebufferTexture){if(Tt)if(X)i.texStorage2D(o.TEXTURE_2D,zt,Pt,Et.width,Et.height);else{let yt=Et.width,mt=Et.height;for(let Ft=0;Ft<zt;Ft++)i.texImage2D(o.TEXTURE_2D,Ft,Pt,yt,mt,0,Rt,Kt,null),yt>>=1,mt>>=1}}else if(oe.length>0){if(X&&Tt){const yt=je(oe[0]);i.texStorage2D(o.TEXTURE_2D,zt,Pt,yt.width,yt.height)}for(let yt=0,mt=oe.length;yt<mt;yt++)Dt=oe[yt],X?Ct&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Rt,Kt,Dt):i.texImage2D(o.TEXTURE_2D,yt,Pt,Rt,Kt,Dt);E.generateMipmaps=!1}else if(X){if(Tt){const yt=je(Et);i.texStorage2D(o.TEXTURE_2D,zt,Pt,yt.width,yt.height)}Ct&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Rt,Kt,Et)}else i.texImage2D(o.TEXTURE_2D,0,Pt,Rt,Kt,Et);y(E)&&v(ht),Zt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ot(N,E,$){if(E.image.length!==6)return;const ht=St(N,E),xt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+$);const lt=r.get(xt);if(xt.version!==lt.__version||ht===!0){i.activeTexture(o.TEXTURE0+$);const Zt=we.getPrimaries(we.workingColorSpace),At=E.colorSpace===za?null:we.getPrimaries(E.colorSpace),Yt=E.colorSpace===za||Zt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const jt=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Rt=[];for(let mt=0;mt<6;mt++)!jt&&!Et?Rt[mt]=R(E.image[mt],!0,l.maxCubemapSize):Rt[mt]=Et?E.image[mt].image:E.image[mt],Rt[mt]=Ke(E,Rt[mt]);const Kt=Rt[0],Pt=u.convert(E.format,E.colorSpace),Dt=u.convert(E.type),oe=U(E.internalFormat,Pt,Dt,E.colorSpace),X=E.isVideoTexture!==!0,Tt=lt.__version===void 0||ht===!0,Ct=xt.dataReady;let zt=H(E,Kt);nt(o.TEXTURE_CUBE_MAP,E);let yt;if(jt){X&&Tt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,oe,Kt.width,Kt.height);for(let mt=0;mt<6;mt++){yt=Rt[mt].mipmaps;for(let Ft=0;Ft<yt.length;Ft++){const ae=yt[Ft];E.format!==_i?Pt!==null?X?Ct&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft,0,0,ae.width,ae.height,Pt,ae.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft,0,0,ae.width,ae.height,Pt,Dt,ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft,oe,ae.width,ae.height,0,Pt,Dt,ae.data)}}}else{if(yt=E.mipmaps,X&&Tt){yt.length>0&&zt++;const mt=je(Rt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,oe,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Et){X?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Rt[mt].width,Rt[mt].height,Pt,Dt,Rt[mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,oe,Rt[mt].width,Rt[mt].height,0,Pt,Dt,Rt[mt].data);for(let Ft=0;Ft<yt.length;Ft++){const Ne=yt[Ft].image[mt].image;X?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft+1,0,0,Ne.width,Ne.height,Pt,Dt,Ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft+1,oe,Ne.width,Ne.height,0,Pt,Dt,Ne.data)}}else{X?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Pt,Dt,Rt[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,oe,Pt,Dt,Rt[mt]);for(let Ft=0;Ft<yt.length;Ft++){const ae=yt[Ft];X?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft+1,0,0,Pt,Dt,ae.image[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft+1,oe,Pt,Dt,ae.image[mt])}}}y(E)&&v(o.TEXTURE_CUBE_MAP),lt.__version=xt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function wt(N,E,$,ht,xt,lt){const Zt=u.convert($.format,$.colorSpace),At=u.convert($.type),Yt=U($.internalFormat,Zt,At,$.colorSpace),jt=r.get(E),Et=r.get($);if(Et.__renderTarget=E,!jt.__hasExternalTextures){const Rt=Math.max(1,E.width>>lt),Kt=Math.max(1,E.height>>lt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,lt,Yt,Rt,Kt,E.depth,0,Zt,At,null):i.texImage2D(xt,lt,Yt,Rt,Kt,0,Zt,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Xt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,xt,Et.__webglTexture,0,Ge(E)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,xt,Et.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(N,E,$){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const ht=E.depthTexture,xt=ht&&ht.isDepthTexture?ht.type:null,lt=D(E.stencilBuffer,xt),Zt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=Ge(E);Xt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,lt,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,N)}else{const ht=E.textures;for(let xt=0;xt<ht.length;xt++){const lt=ht[xt],Zt=u.convert(lt.format,lt.colorSpace),At=u.convert(lt.type),Yt=U(lt.internalFormat,Zt,At,lt.colorSpace),jt=Ge(E);$&&Xt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Yt,E.width,E.height):Xt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,jt,Yt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Yt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function kt(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft(E.depthTexture,0);const xt=ht.__webglTexture,lt=Ge(E);if(E.depthTexture.format===Uo)Xt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(E.depthTexture.format===Lo)Xt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function he(N){const E=r.get(N),$=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ht=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",xt)};ht.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=ht}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ht=N.texture.mipmaps;ht&&ht.length>0?kt(E.__webglFramebuffer[0],N):kt(E.__webglFramebuffer,N)}else if($){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),It(E.__webglDepthbuffer[ht],N,!1);else{const xt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,lt)}}else{const ht=N.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),It(E.__webglDepthbuffer,N,!1);else{const xt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function nn(N,E,$){const ht=r.get(N);E!==void 0&&wt(ht.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&he(N)}function I(N){const E=N.texture,$=r.get(N),ht=r.get(E);N.addEventListener("dispose",P);const xt=N.textures,lt=N.isWebGLCubeRenderTarget===!0,Zt=xt.length>1;if(Zt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),lt){$.__webglFramebuffer=[];for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[At]=[];for(let Yt=0;Yt<E.mipmaps.length;Yt++)$.__webglFramebuffer[At][Yt]=o.createFramebuffer()}else $.__webglFramebuffer[At]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)$.__webglFramebuffer[At]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let At=0,Yt=xt.length;At<Yt;At++){const jt=r.get(xt[At]);jt.__webglTexture===void 0&&(jt.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&Xt(N)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let At=0;At<xt.length;At++){const Yt=xt[At];$.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[At]);const jt=u.convert(Yt.format,Yt.colorSpace),Et=u.convert(Yt.type),Rt=U(Yt.internalFormat,jt,Et,Yt.colorSpace,N.isXRRenderTarget===!0),Kt=Ge(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Rt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,$.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),It($.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),nt(o.TEXTURE_CUBE_MAP,E);for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)wt($.__webglFramebuffer[At][Yt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,Yt);else wt($.__webglFramebuffer[At],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);y(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let At=0,Yt=xt.length;At<Yt;At++){const jt=xt[At],Et=r.get(jt);let Rt=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,Et.__webglTexture),nt(Rt,jt),wt($.__webglFramebuffer,N,jt,o.COLOR_ATTACHMENT0+At,Rt,0),y(jt)&&v(Rt)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(At=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,ht.__webglTexture),nt(At,E),E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)wt($.__webglFramebuffer[Yt],N,E,o.COLOR_ATTACHMENT0,At,Yt);else wt($.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,At,0);y(E)&&v(At),i.unbindTexture()}N.depthBuffer&&he(N)}function Ae(N){const E=N.textures;for(let $=0,ht=E.length;$<ht;$++){const xt=E[$];if(y(xt)){const lt=L(N),Zt=r.get(xt).__webglTexture;i.bindTexture(lt,Zt),v(lt),i.unbindTexture()}}}const ie=[],te=[];function Wt(N){if(N.samples>0){if(Xt(N)===!1){const E=N.textures,$=N.width,ht=N.height;let xt=o.COLOR_BUFFER_BIT;const lt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=r.get(N),At=E.length>1;if(At)for(let jt=0;jt<E.length;jt++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Yt=N.texture.mipmaps;Yt&&Yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let jt=0;jt<E.length;jt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[jt]);const Et=r.get(E[jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,$,ht,0,0,$,ht,xt,o.NEAREST),m===!0&&(ie.length=0,te.length=0,ie.push(o.COLOR_ATTACHMENT0+jt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(ie.push(lt),te.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,te)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let jt=0;jt<E.length;jt++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[jt]);const Et=r.get(E[jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ge(N){return Math.min(l.maxSamples,N.samples)}function Xt(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function re(N){const E=h.render.frame;x.get(N)!==E&&(x.set(N,E),N.update())}function Ke(N,E){const $=N.colorSpace,ht=N.format,xt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==Es&&$!==za&&(we.getTransfer($)===Fe?(ht!==_i||xt!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function je(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ct,this.resetTextureUnits=tt,this.setTexture2D=ft,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=nn,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Xt}function SA(o,e){function i(r,l=za){let u;const h=we.getTransfer(l);if(r===Di)return o.UNSIGNED_BYTE;if(r===Sd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===yd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Rv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Cv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===bv)return o.BYTE;if(r===Av)return o.SHORT;if(r===wo)return o.UNSIGNED_SHORT;if(r===xd)return o.INT;if(r===vr)return o.UNSIGNED_INT;if(r===aa)return o.FLOAT;if(r===Oo)return o.HALF_FLOAT;if(r===wv)return o.ALPHA;if(r===Dv)return o.RGB;if(r===_i)return o.RGBA;if(r===Uo)return o.DEPTH_COMPONENT;if(r===Lo)return o.DEPTH_STENCIL;if(r===Uv)return o.RED;if(r===Md)return o.RED_INTEGER;if(r===Lv)return o.RG;if(r===Ed)return o.RG_INTEGER;if(r===Td)return o.RGBA_INTEGER;if(r===Sc||r===yc||r===Mc||r===Ec)if(h===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Sc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Sc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hh||r===Gh||r===Vh||r===Xh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Hh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kh||r===Wh||r===qh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===kh||r===Wh)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===qh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh||r===$h||r===td||r===ed||r===nd||r===id||r===ad||r===rd||r===sd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Yh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$h)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===td)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ed)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===id)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ad)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===od||r===ld||r===cd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===od)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ld)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===cd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ud||r===fd||r===hd||r===dd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===ud)return u.COMPRESSED_RED_RGTC1_EXT;if(r===fd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Do?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const yA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Yv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ha({vertexShader:yA,fragmentShader:MA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ci(new Lc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TA extends bs{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,x=null,_=null,S=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",y=new EA,v={},L=i.getContextAttributes();let U=null,D=null;const H=[],F=[],P=new Me;let k=null;const w=new Qn;w.viewport=new He;const C=new Qn;C.viewport=new He;const G=[w,C],tt=new Wy;let ct=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ot=H[it];return ot===void 0&&(ot=new gh,H[it]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(it){let ot=H[it];return ot===void 0&&(ot=new gh,H[it]=ot),ot.getGripSpace()},this.getHand=function(it){let ot=H[it];return ot===void 0&&(ot=new gh,H[it]=ot),ot.getHandSpace()};function ft(it){const ot=F.indexOf(it.inputSource);if(ot===-1)return;const wt=H[ot];wt!==void 0&&(wt.update(it.inputSource,it.frame,p||h),wt.dispatchEvent({type:it.type,data:it.inputSource}))}function z(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",Z);for(let it=0;it<H.length;it++){const ot=F[it];ot!==null&&(F[it]=null,H[it].disconnect(ot))}ct=null,gt=null,y.reset();for(const it in v)delete v[it];e.setRenderTarget(U),M=null,S=null,_=null,l=null,D=null,Nt.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){u=it,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",z),l.addEventListener("inputsourceschange",Z),L.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(P),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,It=null,kt=null;L.depth&&(kt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=L.stencil?Lo:Uo,It=L.stencil?Do:vr);const he={colorFormat:i.RGBA8,depthFormat:kt,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(he),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),D=new xr(S.textureWidth,S.textureHeight,{format:_i,type:Di,depthTexture:new qv(S.textureWidth,S.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const wt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new xr(M.framebufferWidth,M.framebufferHeight,{format:_i,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Nt.setContext(l),Nt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(it){for(let ot=0;ot<it.removed.length;ot++){const wt=it.removed[ot],It=F.indexOf(wt);It>=0&&(F[It]=null,H[It].disconnect(wt))}for(let ot=0;ot<it.added.length;ot++){const wt=it.added[ot];let It=F.indexOf(wt);if(It===-1){for(let he=0;he<H.length;he++)if(he>=F.length){F.push(wt),It=he;break}else if(F[he]===null){F[he]=wt,It=he;break}if(It===-1)break}const kt=H[It];kt&&kt.connect(wt)}}const j=new K,vt=new K;function Mt(it,ot,wt){j.setFromMatrixPosition(ot.matrixWorld),vt.setFromMatrixPosition(wt.matrixWorld);const It=j.distanceTo(vt),kt=ot.projectionMatrix.elements,he=wt.projectionMatrix.elements,nn=kt[14]/(kt[10]-1),I=kt[14]/(kt[10]+1),Ae=(kt[9]+1)/kt[5],ie=(kt[9]-1)/kt[5],te=(kt[8]-1)/kt[0],Wt=(he[8]+1)/he[0],Ge=nn*te,Xt=nn*Wt,re=It/(-te+Wt),Ke=re*-te;if(ot.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ke),it.translateZ(re),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),kt[10]===-1)it.projectionMatrix.copy(ot.projectionMatrix),it.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const je=nn+re,N=I+re,E=Ge-Ke,$=Xt+(It-Ke),ht=Ae*I/N*je,xt=ie*I/N*je;it.projectionMatrix.makePerspective(E,$,ht,xt,je,N),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function O(it,ot){ot===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ot.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ot=it.near,wt=it.far;y.texture!==null&&(y.depthNear>0&&(ot=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),tt.near=C.near=w.near=ot,tt.far=C.far=w.far=wt,(ct!==tt.near||gt!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),ct=tt.near,gt=tt.far),tt.layers.mask=it.layers.mask|6,w.layers.mask=tt.layers.mask&3,C.layers.mask=tt.layers.mask&5;const It=it.parent,kt=tt.cameras;O(tt,It);for(let he=0;he<kt.length;he++)O(kt[he],It);kt.length===2?Mt(tt,w,C):tt.projectionMatrix.copy(w.projectionMatrix),nt(it,tt,It)};function nt(it,ot,wt){wt===null?it.matrix.copy(ot.matrixWorld):(it.matrix.copy(wt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ot.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ot.projectionMatrix),it.projectionMatrixInverse.copy(ot.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=pd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(it){m=it,S!==null&&(S.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(tt)},this.getCameraTexture=function(it){return v[it]};let St=null;function bt(it,ot){if(x=ot.getViewerPose(p||h),b=ot,x!==null){const wt=x.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let It=!1;wt.length!==tt.cameras.length&&(tt.cameras.length=0,It=!0);for(let I=0;I<wt.length;I++){const Ae=wt[I];let ie=null;if(M!==null)ie=M.getViewport(Ae);else{const Wt=_.getViewSubImage(S,Ae);ie=Wt.viewport,I===0&&(e.setRenderTargetTextures(D,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(D))}let te=G[I];te===void 0&&(te=new Qn,te.layers.enable(I),te.viewport=new He,G[I]=te),te.matrix.fromArray(Ae.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Ae.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ie.x,ie.y,ie.width,ie.height),I===0&&(tt.matrix.copy(te.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),It===!0&&tt.cameras.push(te)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const I=_.getDepthInformation(wt[0]);I&&I.isValid&&I.texture&&y.init(I,l.renderState)}if(kt&&kt.includes("camera-access")&&R){e.state.unbindTexture(),_=r.getBinding();for(let I=0;I<wt.length;I++){const Ae=wt[I].camera;if(Ae){let ie=v[Ae];ie||(ie=new Yv,v[Ae]=ie);const te=_.getCameraImage(Ae);ie.sourceTexture=te}}}}for(let wt=0;wt<H.length;wt++){const It=F[wt],kt=H[wt];It!==null&&kt!==void 0&&kt.update(It,ot,p||h)}St&&St(it,ot),ot.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ot}),b=null}const Nt=new Zv;Nt.setAnimationLoop(bt),this.setAnimationLoop=function(it){St=it},this.dispose=function(){}}}const fr=new Ui,bA=new Ze;function AA(o,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,Xv(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,L,U,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),_(y,v)):v.isMeshPhongMaterial?(u(y,v),x(y,v)):v.isMeshStandardMaterial?(u(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,D)):v.isMeshMatcapMaterial?(u(y,v),b(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),R(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,L,U):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Fn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Fn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const L=e.get(v),U=L.envMap,D=L.envMapRotation;U&&(y.envMap.value=U,fr.copy(D),fr.x*=-1,fr.y*=-1,fr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),y.envMapRotation.value.setFromMatrix4(bA.makeRotationFromEuler(fr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,L,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=U*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Fn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function R(y,v){const L=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function RA(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,U){const D=U.program;r.uniformBlockBinding(L,D)}function p(L,U){let D=l[L.id];D===void 0&&(b(L),D=x(L),l[L.id]=D,L.addEventListener("dispose",y));const H=U.program;r.updateUBOMapping(L,H);const F=e.render.frame;u[L.id]!==F&&(S(L),u[L.id]=F)}function x(L){const U=_();L.__bindingPointIndex=U;const D=o.createBuffer(),H=L.__size,F=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,H,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function _(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const U=l[L.id],D=L.uniforms,H=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let F=0,P=D.length;F<P;F++){const k=Array.isArray(D[F])?D[F]:[D[F]];for(let w=0,C=k.length;w<C;w++){const G=k[w];if(M(G,F,w,H)===!0){const tt=G.__offset,ct=Array.isArray(G.value)?G.value:[G.value];let gt=0;for(let ft=0;ft<ct.length;ft++){const z=ct[ft],Z=R(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,tt+gt,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,gt),gt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,U,D,H){const F=L.value,P=U+"_"+D;if(H[P]===void 0)return typeof F=="number"||typeof F=="boolean"?H[P]=F:H[P]=F.clone(),!0;{const k=H[P];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return H[P]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function b(L){const U=L.uniforms;let D=0;const H=16;for(let P=0,k=U.length;P<k;P++){const w=Array.isArray(U[P])?U[P]:[U[P]];for(let C=0,G=w.length;C<G;C++){const tt=w[C],ct=Array.isArray(tt.value)?tt.value:[tt.value];for(let gt=0,ft=ct.length;gt<ft;gt++){const z=ct[gt],Z=R(z),j=D%H,vt=j%Z.boundary,Mt=j+vt;D+=vt,Mt!==0&&H-Mt<Z.storage&&(D+=H-Mt),tt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=D,D+=Z.storage}}}const F=D%H;return F>0&&(D+=H-F),L.__size=D,L.__cache={},this}function R(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function y(L){const U=L.target;U.removeEventListener("dispose",y);const D=h.indexOf(U.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function v(){for(const L in l)o.deleteBuffer(l[L]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}class CA{constructor(e={}){const{canvas:i=iy(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,v=null;const L=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let H=!1;this._outputColorSpace=ci;let F=0,P=0,k=null,w=-1,C=null;const G=new He,tt=new He;let ct=null;const gt=new be(0);let ft=0,z=i.width,Z=i.height,j=1,vt=null,Mt=null;const O=new He(0,0,z,Z),nt=new He(0,0,z,Z);let St=!1;const bt=new Ad;let Nt=!1,it=!1;const ot=new Ze,wt=new K,It=new He,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function nn(){return k===null?j:1}let I=r;function Ae(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${_d}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",yt,!1),I===null){const W="webgl2";if(I=Ae(W,A),I===null)throw Ae(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ie,te,Wt,Ge,Xt,re,Ke,je,N,E,$,ht,xt,lt,Zt,At,Yt,jt,Et,Rt,Kt,Pt,Dt,oe;function X(){ie=new IT(I),ie.init(),Pt=new SA(I,ie),te=new UT(I,ie,e,Pt),Wt=new vA(I,ie),te.reversedDepthBuffer&&S&&Wt.buffers.depth.setReversed(!0),Ge=new GT(I),Xt=new rA,re=new xA(I,ie,Wt,Xt,te,Pt,Ge),Ke=new NT(D),je=new BT(D),N=new Yy(I),Dt=new wT(I,N),E=new FT(I,N,Ge,Dt),$=new XT(I,E,N,Ge),Et=new VT(I,te,re),At=new LT(Xt),ht=new aA(D,Ke,je,ie,te,Dt,At),xt=new AA(D,Xt),lt=new oA,Zt=new dA(ie),jt=new CT(D,Ke,je,Wt,$,M,m),Yt=new gA(D,$,te),oe=new RA(I,Ge,te,Wt),Rt=new DT(I,ie,Ge),Kt=new HT(I,ie,Ge),Ge.programs=ht.programs,D.capabilities=te,D.extensions=ie,D.properties=Xt,D.renderLists=lt,D.shadowMap=Yt,D.state=Wt,D.info=Ge}X();const Tt=new TA(D,I);this.xr=Tt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(z,Z,!1))},this.getSize=function(A){return A.set(z,Z)},this.setSize=function(A,W,at=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,Z=W,i.width=Math.floor(A*j),i.height=Math.floor(W*j),at===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(z*j,Z*j).floor()},this.setDrawingBufferSize=function(A,W,at){z=A,Z=W,j=at,i.width=Math.floor(A*at),i.height=Math.floor(W*at),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,W,at,rt){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,W,at,rt),Wt.viewport(G.copy(O).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(nt)},this.setScissor=function(A,W,at,rt){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,W,at,rt),Wt.scissor(tt.copy(nt).multiplyScalar(j).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Wt.setScissorTest(St=A)},this.setOpaqueSort=function(A){vt=A},this.setTransparentSort=function(A){Mt=A},this.getClearColor=function(A){return A.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,at=!0){let rt=0;if(A){let Y=!1;if(k!==null){const _t=k.texture.format;Y=_t===Td||_t===Ed||_t===Md}if(Y){const _t=k.texture.type,Ut=_t===Di||_t===vr||_t===wo||_t===Do||_t===Sd||_t===yd,Gt=jt.getClearColor(),Ot=jt.getClearAlpha(),Qt=Gt.r,ne=Gt.g,Jt=Gt.b;Ut?(b[0]=Qt,b[1]=ne,b[2]=Jt,b[3]=Ot,I.clearBufferuiv(I.COLOR,0,b)):(R[0]=Qt,R[1]=ne,R[2]=Jt,R[3]=Ot,I.clearBufferiv(I.COLOR,0,R))}else rt|=I.COLOR_BUFFER_BIT}W&&(rt|=I.DEPTH_BUFFER_BIT),at&&(rt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),jt.dispose(),lt.dispose(),Zt.dispose(),Xt.dispose(),Ke.dispose(),je.dispose(),$.dispose(),Dt.dispose(),oe.dispose(),ht.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",$n),Tt.removeEventListener("sessionend",Cs),xi.stop()};function Ct(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=Ge.autoReset,W=Yt.enabled,at=Yt.autoUpdate,rt=Yt.needsUpdate,Y=Yt.type;X(),Ge.autoReset=A,Yt.enabled=W,Yt.autoUpdate=at,Yt.needsUpdate=rt,Yt.type=Y}function yt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function mt(A){const W=A.target;W.removeEventListener("dispose",mt),Ft(W)}function Ft(A){ae(A),Xt.remove(A)}function ae(A){const W=Xt.get(A).programs;W!==void 0&&(W.forEach(function(at){ht.releaseProgram(at)}),A.isShaderMaterial&&ht.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,at,rt,Y,_t){W===null&&(W=kt);const Ut=Y.isMesh&&Y.matrixWorld.determinant()<0,Gt=sa(A,W,at,rt,Y);Wt.setMaterial(rt,Ut);let Ot=at.index,Qt=1;if(rt.wireframe===!0){if(Ot=E.getWireframeAttribute(at),Ot===void 0)return;Qt=2}const ne=at.drawRange,Jt=at.attributes.position;let de=ne.start*Qt,Ue=(ne.start+ne.count)*Qt;_t!==null&&(de=Math.max(de,_t.start*Qt),Ue=Math.min(Ue,(_t.start+_t.count)*Qt)),Ot!==null?(de=Math.max(de,0),Ue=Math.min(Ue,Ot.count)):Jt!=null&&(de=Math.max(de,0),Ue=Math.min(Ue,Jt.count));const Ve=Ue-de;if(Ve<0||Ve===1/0)return;Dt.setup(Y,rt,Gt,at,Ot);let Le,pe=Rt;if(Ot!==null&&(Le=N.get(Ot),pe=Kt,pe.setIndex(Le)),Y.isMesh)rt.wireframe===!0?(Wt.setLineWidth(rt.wireframeLinewidth*nn()),pe.setMode(I.LINES)):pe.setMode(I.TRIANGLES);else if(Y.isLine){let Vt=rt.linewidth;Vt===void 0&&(Vt=1),Wt.setLineWidth(Vt*nn()),Y.isLineSegments?pe.setMode(I.LINES):Y.isLineLoop?pe.setMode(I.LINE_LOOP):pe.setMode(I.LINE_STRIP)}else Y.isPoints?pe.setMode(I.POINTS):Y.isSprite&&pe.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)No("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))pe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Vt=Y._multiDrawStarts,ke=Y._multiDrawCounts,Te=Y._multiDrawCount,vn=Ot?N.get(Ot).bytesPerElement:1,Ni=Xt.get(rt).currentProgram.getUniforms();for(let pn=0;pn<Te;pn++)Ni.setValue(I,"_gl_DrawID",pn),pe.render(Vt[pn]/vn,ke[pn])}else if(Y.isInstancedMesh)pe.renderInstances(de,Ve,Y.count);else if(at.isInstancedBufferGeometry){const Vt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,ke=Math.min(at.instanceCount,Vt);pe.renderInstances(de,Ve,ke)}else pe.render(de,Ve)};function Ne(A,W,at){A.transparent===!0&&A.side===ia&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,Gn(A,W,at),A.side=Fa,A.needsUpdate=!0,Gn(A,W,at),A.side=ia):Gn(A,W,at)}this.compile=function(A,W,at=null){at===null&&(at=A),v=Zt.get(at),v.init(W),U.push(v),at.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),A!==at&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const rt=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const _t=Y.material;if(_t)if(Array.isArray(_t))for(let Ut=0;Ut<_t.length;Ut++){const Gt=_t[Ut];Ne(Gt,at,Y),rt.add(Gt)}else Ne(_t,at,Y),rt.add(_t)}),v=U.pop(),rt},this.compileAsync=function(A,W,at=null){const rt=this.compile(A,W,at);return new Promise(Y=>{function _t(){if(rt.forEach(function(Ut){Xt.get(Ut).currentProgram.isReady()&&rt.delete(Ut)}),rt.size===0){Y(A);return}setTimeout(_t,10)}ie.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Ee=null;function Rn(A){Ee&&Ee(A)}function $n(){xi.stop()}function Cs(){xi.start()}const xi=new Zv;xi.setAnimationLoop(Rn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(A){Ee=A,Tt.setAnimationLoop(A),A===null?xi.stop():xi.start()},Tt.addEventListener("sessionstart",$n),Tt.addEventListener("sessionend",Cs),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(W),W=Tt.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,W,k),v=Zt.get(A,U.length),v.init(W),U.push(v),ot.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),bt.setFromProjectionMatrix(ot,Ri,W.reversedDepth),it=this.localClippingEnabled,Nt=At.init(this.clippingPlanes,it),y=lt.get(A,L.length),y.init(),L.push(y),Tt.enabled===!0&&Tt.isPresenting===!0){const _t=D.xr.getDepthSensingMesh();_t!==null&&Sr(_t,W,-1/0,D.sortObjects)}Sr(A,W,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(vt,Mt),he=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,he&&jt.addToRenderList(y,A),this.info.render.frame++,Nt===!0&&At.beginShadows();const at=v.state.shadowsArray;Yt.render(at,A,W),Nt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=y.opaque,Y=y.transmissive;if(v.setupLights(),W.isArrayCamera){const _t=W.cameras;if(Y.length>0)for(let Ut=0,Gt=_t.length;Ut<Gt;Ut++){const Ot=_t[Ut];Mr(rt,Y,A,Ot)}he&&jt.render(A);for(let Ut=0,Gt=_t.length;Ut<Gt;Ut++){const Ot=_t[Ut];yr(y,A,Ot,Ot.viewport)}}else Y.length>0&&Mr(rt,Y,A,W),he&&jt.render(A),yr(y,A,W);k!==null&&P===0&&(re.updateMultisampleRenderTarget(k),re.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(D,A,W),Dt.resetDefaultState(),w=-1,C=null,U.pop(),U.length>0?(v=U[U.length-1],Nt===!0&&At.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Sr(A,W,at,rt){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||bt.intersectsSprite(A)){rt&&It.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ot);const Ut=$.update(A),Gt=A.material;Gt.visible&&y.push(A,Ut,Gt,at,It.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||bt.intersectsObject(A))){const Ut=$.update(A),Gt=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),It.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),It.copy(Ut.boundingSphere.center)),It.applyMatrix4(A.matrixWorld).applyMatrix4(ot)),Array.isArray(Gt)){const Ot=Ut.groups;for(let Qt=0,ne=Ot.length;Qt<ne;Qt++){const Jt=Ot[Qt],de=Gt[Jt.materialIndex];de&&de.visible&&y.push(A,Ut,de,at,It.z,Jt)}}else Gt.visible&&y.push(A,Ut,Gt,at,It.z,null)}}const _t=A.children;for(let Ut=0,Gt=_t.length;Ut<Gt;Ut++)Sr(_t[Ut],W,at,rt)}function yr(A,W,at,rt){const Y=A.opaque,_t=A.transmissive,Ut=A.transparent;v.setupLightsView(at),Nt===!0&&At.setGlobalState(D.clippingPlanes,at),rt&&Wt.viewport(G.copy(rt)),Y.length>0&&Ga(Y,W,at),_t.length>0&&Ga(_t,W,at),Ut.length>0&&Ga(Ut,W,at),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Mr(A,W,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[rt.id]===void 0&&(v.state.transmissionRenderTarget[rt.id]=new xr(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Oo:Di,minFilter:_r,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const _t=v.state.transmissionRenderTarget[rt.id],Ut=rt.viewport||G;_t.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const Gt=D.getRenderTarget(),Ot=D.getActiveCubeFace(),Qt=D.getActiveMipmapLevel();D.setRenderTarget(_t),D.getClearColor(gt),ft=D.getClearAlpha(),ft<1&&D.setClearColor(16777215,.5),D.clear(),he&&jt.render(at);const ne=D.toneMapping;D.toneMapping=Ia;const Jt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),v.setupLightsView(rt),Nt===!0&&At.setGlobalState(D.clippingPlanes,rt),Ga(A,at,rt),re.updateMultisampleRenderTarget(_t),re.updateRenderTargetMipmap(_t),ie.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Ue=0,Ve=W.length;Ue<Ve;Ue++){const Le=W[Ue],pe=Le.object,Vt=Le.geometry,ke=Le.material,Te=Le.group;if(ke.side===ia&&pe.layers.test(rt.layers)){const vn=ke.side;ke.side=Fn,ke.needsUpdate=!0,ws(pe,at,rt,Vt,ke,Te),ke.side=vn,ke.needsUpdate=!0,de=!0}}de===!0&&(re.updateMultisampleRenderTarget(_t),re.updateRenderTargetMipmap(_t))}D.setRenderTarget(Gt,Ot,Qt),D.setClearColor(gt,ft),Jt!==void 0&&(rt.viewport=Jt),D.toneMapping=ne}function Ga(A,W,at){const rt=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,_t=A.length;Y<_t;Y++){const Ut=A[Y],Gt=Ut.object,Ot=Ut.geometry,Qt=Ut.group;let ne=Ut.material;ne.allowOverride===!0&&rt!==null&&(ne=rt),Gt.layers.test(at.layers)&&ws(Gt,W,at,Ot,ne,Qt)}}function ws(A,W,at,rt,Y,_t){A.onBeforeRender(D,W,at,rt,Y,_t),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(D,W,at,rt,A,_t),Y.transparent===!0&&Y.side===ia&&Y.forceSinglePass===!1?(Y.side=Fn,Y.needsUpdate=!0,D.renderBufferDirect(at,W,rt,Y,A,_t),Y.side=Fa,Y.needsUpdate=!0,D.renderBufferDirect(at,W,rt,Y,A,_t),Y.side=ia):D.renderBufferDirect(at,W,rt,Y,A,_t),A.onAfterRender(D,W,at,rt,Y,_t)}function Gn(A,W,at){W.isScene!==!0&&(W=kt);const rt=Xt.get(A),Y=v.state.lights,_t=v.state.shadowsArray,Ut=Y.state.version,Gt=ht.getParameters(A,Y.state,_t,W,at),Ot=ht.getProgramCacheKey(Gt);let Qt=rt.programs;rt.environment=A.isMeshStandardMaterial?W.environment:null,rt.fog=W.fog,rt.envMap=(A.isMeshStandardMaterial?je:Ke).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",mt),Qt=new Map,rt.programs=Qt);let ne=Qt.get(Ot);if(ne!==void 0){if(rt.currentProgram===ne&&rt.lightsStateVersion===Ut)return _n(A,Gt),ne}else Gt.uniforms=ht.getUniforms(A),A.onBeforeCompile(Gt,D),ne=ht.acquireProgram(Gt,Ot),Qt.set(Ot,ne),rt.uniforms=Gt.uniforms;const Jt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Jt.clippingPlanes=At.uniform),_n(A,Gt),rt.needsLights=Oc(A),rt.lightsStateVersion=Ut,rt.needsLights&&(Jt.ambientLightColor.value=Y.state.ambient,Jt.lightProbe.value=Y.state.probe,Jt.directionalLights.value=Y.state.directional,Jt.directionalLightShadows.value=Y.state.directionalShadow,Jt.spotLights.value=Y.state.spot,Jt.spotLightShadows.value=Y.state.spotShadow,Jt.rectAreaLights.value=Y.state.rectArea,Jt.ltc_1.value=Y.state.rectAreaLTC1,Jt.ltc_2.value=Y.state.rectAreaLTC2,Jt.pointLights.value=Y.state.point,Jt.pointLightShadows.value=Y.state.pointShadow,Jt.hemisphereLights.value=Y.state.hemi,Jt.directionalShadowMap.value=Y.state.directionalShadowMap,Jt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Jt.spotShadowMap.value=Y.state.spotShadowMap,Jt.spotLightMatrix.value=Y.state.spotLightMatrix,Jt.spotLightMap.value=Y.state.spotLightMap,Jt.pointShadowMap.value=Y.state.pointShadowMap,Jt.pointShadowMatrix.value=Y.state.pointShadowMatrix),rt.currentProgram=ne,rt.uniformsList=null,ne}function an(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Tc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function _n(A,W){const at=Xt.get(A);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function sa(A,W,at,rt,Y){W.isScene!==!0&&(W=kt),re.resetTextureUnits();const _t=W.fog,Ut=rt.isMeshStandardMaterial?W.environment:null,Gt=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Es,Ot=(rt.isMeshStandardMaterial?je:Ke).get(rt.envMap||Ut),Qt=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ne=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Jt=!!at.morphAttributes.position,de=!!at.morphAttributes.normal,Ue=!!at.morphAttributes.color;let Ve=Ia;rt.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const Le=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,pe=Le!==void 0?Le.length:0,Vt=Xt.get(rt),ke=v.state.lights;if(Nt===!0&&(it===!0||A!==C)){const un=A===C&&rt.id===w;At.setState(rt,A,un)}let Te=!1;rt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ke.state.version||Vt.outputColorSpace!==Gt||Y.isBatchedMesh&&Vt.batching===!1||!Y.isBatchedMesh&&Vt.batching===!0||Y.isBatchedMesh&&Vt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Vt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Vt.instancing===!1||!Y.isInstancedMesh&&Vt.instancing===!0||Y.isSkinnedMesh&&Vt.skinning===!1||!Y.isSkinnedMesh&&Vt.skinning===!0||Y.isInstancedMesh&&Vt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Vt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Vt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Vt.instancingMorph===!1&&Y.morphTexture!==null||Vt.envMap!==Ot||rt.fog===!0&&Vt.fog!==_t||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==At.numPlanes||Vt.numIntersection!==At.numIntersection)||Vt.vertexAlphas!==Qt||Vt.vertexTangents!==ne||Vt.morphTargets!==Jt||Vt.morphNormals!==de||Vt.morphColors!==Ue||Vt.toneMapping!==Ve||Vt.morphTargetsCount!==pe)&&(Te=!0):(Te=!0,Vt.__version=rt.version);let vn=Vt.currentProgram;Te===!0&&(vn=Gn(rt,W,Y));let Ni=!1,pn=!1,Xa=!1;const _e=vn.getUniforms(),En=Vt.uniforms;if(Wt.useProgram(vn.program)&&(Ni=!0,pn=!0,Xa=!0),rt.id!==w&&(w=rt.id,pn=!0),Ni||C!==A){Wt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),_e.setValue(I,"projectionMatrix",A.projectionMatrix),_e.setValue(I,"viewMatrix",A.matrixWorldInverse);const $e=_e.map.cameraPosition;$e!==void 0&&$e.setValue(I,wt.setFromMatrixPosition(A.matrixWorld)),te.logarithmicDepthBuffer&&_e.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&_e.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,pn=!0,Xa=!0)}if(Y.isSkinnedMesh){_e.setOptional(I,Y,"bindMatrix"),_e.setOptional(I,Y,"bindMatrixInverse");const un=Y.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),_e.setValue(I,"boneTexture",un.boneTexture,re))}Y.isBatchedMesh&&(_e.setOptional(I,Y,"batchingTexture"),_e.setValue(I,"batchingTexture",Y._matricesTexture,re),_e.setOptional(I,Y,"batchingIdTexture"),_e.setValue(I,"batchingIdTexture",Y._indirectTexture,re),_e.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&_e.setValue(I,"batchingColorTexture",Y._colorsTexture,re));const Cn=at.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Et.update(Y,at,vn),(pn||Vt.receiveShadow!==Y.receiveShadow)&&(Vt.receiveShadow=Y.receiveShadow,_e.setValue(I,"receiveShadow",Y.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(En.envMap.value=Ot,En.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&W.environment!==null&&(En.envMapIntensity.value=W.environmentIntensity),pn&&(_e.setValue(I,"toneMappingExposure",D.toneMappingExposure),Vt.needsLights&&Ds(En,Xa),_t&&rt.fog===!0&&xt.refreshFogUniforms(En,_t),xt.refreshMaterialUniforms(En,rt,j,Z,v.state.transmissionRenderTarget[A.id]),Tc.upload(I,an(Vt),En,re)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Tc.upload(I,an(Vt),En,re),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&_e.setValue(I,"center",Y.center),_e.setValue(I,"modelViewMatrix",Y.modelViewMatrix),_e.setValue(I,"normalMatrix",Y.normalMatrix),_e.setValue(I,"modelMatrix",Y.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const un=rt.uniformsGroups;for(let $e=0,Er=un.length;$e<Er;$e++){const Si=un[$e];oe.update(Si,vn),oe.bind(Si,vn)}}return vn}function Ds(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Oc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,W,at){const rt=Xt.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Xt.get(A.texture).__webglTexture=W,Xt.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const at=Xt.get(A);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0};const Pc=I.createFramebuffer();this.setRenderTarget=function(A,W=0,at=0){k=A,F=W,P=at;let rt=!0,Y=null,_t=!1,Ut=!1;if(A){const Ot=Xt.get(A);if(Ot.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(I.FRAMEBUFFER,null),rt=!1;else if(Ot.__webglFramebuffer===void 0)re.setupRenderTarget(A);else if(Ot.__hasExternalTextures)re.rebindTextures(A,Xt.get(A.texture).__webglTexture,Xt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Jt=A.depthTexture;if(Ot.__boundDepthTexture!==Jt){if(Jt!==null&&Xt.has(Jt)&&(A.width!==Jt.image.width||A.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ut=!0);const ne=Xt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ne[W])?Y=ne[W][at]:Y=ne[W],_t=!0):A.samples>0&&re.useMultisampledRTT(A)===!1?Y=Xt.get(A).__webglMultisampledFramebuffer:Array.isArray(ne)?Y=ne[at]:Y=ne,G.copy(A.viewport),tt.copy(A.scissor),ct=A.scissorTest}else G.copy(O).multiplyScalar(j).floor(),tt.copy(nt).multiplyScalar(j).floor(),ct=St;if(at!==0&&(Y=Pc),Wt.bindFramebuffer(I.FRAMEBUFFER,Y)&&rt&&Wt.drawBuffers(A,Y),Wt.viewport(G),Wt.scissor(tt),Wt.setScissorTest(ct),_t){const Ot=Xt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,at)}else if(Ut){const Ot=W;for(let Qt=0;Qt<A.textures.length;Qt++){const ne=Xt.get(A.textures[Qt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Qt,ne.__webglTexture,at,Ot)}}else if(A!==null&&at!==0){const Ot=Xt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ot.__webglTexture,at)}w=-1},this.readRenderTargetPixels=function(A,W,at,rt,Y,_t,Ut,Gt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot){Wt.bindFramebuffer(I.FRAMEBUFFER,Ot);try{const Qt=A.textures[Gt],ne=Qt.format,Jt=Qt.type;if(!te.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-rt&&at>=0&&at<=A.height-Y&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Gt),I.readPixels(W,at,rt,Y,Pt.convert(ne),Pt.convert(Jt),_t))}finally{const Qt=k!==null?Xt.get(k).__webglFramebuffer:null;Wt.bindFramebuffer(I.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(A,W,at,rt,Y,_t,Ut,Gt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot)if(W>=0&&W<=A.width-rt&&at>=0&&at<=A.height-Y){Wt.bindFramebuffer(I.FRAMEBUFFER,Ot);const Qt=A.textures[Gt],ne=Qt.format,Jt=Qt.type;if(!te.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,de),I.bufferData(I.PIXEL_PACK_BUFFER,_t.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Gt),I.readPixels(W,at,rt,Y,Pt.convert(ne),Pt.convert(Jt),0);const Ue=k!==null?Xt.get(k).__webglFramebuffer:null;Wt.bindFramebuffer(I.FRAMEBUFFER,Ue);const Ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ay(I,Ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,de),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_t),I.deleteBuffer(de),I.deleteSync(Ve),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,at=0){const rt=Math.pow(2,-at),Y=Math.floor(A.image.width*rt),_t=Math.floor(A.image.height*rt),Ut=W!==null?W.x:0,Gt=W!==null?W.y:0;re.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,at,0,0,Ut,Gt,Y,_t),Wt.unbindTexture()};const Ho=I.createFramebuffer(),Va=I.createFramebuffer();this.copyTextureToTexture=function(A,W,at=null,rt=null,Y=0,_t=null){_t===null&&(Y!==0?(No("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=Y,Y=0):_t=0);let Ut,Gt,Ot,Qt,ne,Jt,de,Ue,Ve;const Le=A.isCompressedTexture?A.mipmaps[_t]:A.image;if(at!==null)Ut=at.max.x-at.min.x,Gt=at.max.y-at.min.y,Ot=at.isBox3?at.max.z-at.min.z:1,Qt=at.min.x,ne=at.min.y,Jt=at.isBox3?at.min.z:0;else{const Cn=Math.pow(2,-Y);Ut=Math.floor(Le.width*Cn),Gt=Math.floor(Le.height*Cn),A.isDataArrayTexture?Ot=Le.depth:A.isData3DTexture?Ot=Math.floor(Le.depth*Cn):Ot=1,Qt=0,ne=0,Jt=0}rt!==null?(de=rt.x,Ue=rt.y,Ve=rt.z):(de=0,Ue=0,Ve=0);const pe=Pt.convert(W.format),Vt=Pt.convert(W.type);let ke;W.isData3DTexture?(re.setTexture3D(W,0),ke=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(re.setTexture2DArray(W,0),ke=I.TEXTURE_2D_ARRAY):(re.setTexture2D(W,0),ke=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Te=I.getParameter(I.UNPACK_ROW_LENGTH),vn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ni=I.getParameter(I.UNPACK_SKIP_PIXELS),pn=I.getParameter(I.UNPACK_SKIP_ROWS),Xa=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Jt);const _e=A.isDataArrayTexture||A.isData3DTexture,En=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Cn=Xt.get(A),un=Xt.get(W),$e=Xt.get(Cn.__renderTarget),Er=Xt.get(un.__renderTarget);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,$e.__webglFramebuffer),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let Si=0;Si<Ot;Si++)_e&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.get(A).__webglTexture,Y,Jt+Si),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.get(W).__webglTexture,_t,Ve+Si)),I.blitFramebuffer(Qt,ne,Ut,Gt,de,Ue,Ut,Gt,I.DEPTH_BUFFER_BIT,I.NEAREST);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Xt.has(A)){const Cn=Xt.get(A),un=Xt.get(W);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,Ho),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Va);for(let $e=0;$e<Ot;$e++)_e?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Cn.__webglTexture,Y,Jt+$e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Cn.__webglTexture,Y),En?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,un.__webglTexture,_t,Ve+$e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,un.__webglTexture,_t),Y!==0?I.blitFramebuffer(Qt,ne,Ut,Gt,de,Ue,Ut,Gt,I.COLOR_BUFFER_BIT,I.NEAREST):En?I.copyTexSubImage3D(ke,_t,de,Ue,Ve+$e,Qt,ne,Ut,Gt):I.copyTexSubImage2D(ke,_t,de,Ue,Qt,ne,Ut,Gt);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else En?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(ke,_t,de,Ue,Ve,Ut,Gt,Ot,pe,Vt,Le.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(ke,_t,de,Ue,Ve,Ut,Gt,Ot,pe,Le.data):I.texSubImage3D(ke,_t,de,Ue,Ve,Ut,Gt,Ot,pe,Vt,Le):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_t,de,Ue,Ut,Gt,pe,Vt,Le.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_t,de,Ue,Le.width,Le.height,pe,Le.data):I.texSubImage2D(I.TEXTURE_2D,_t,de,Ue,Ut,Gt,pe,Vt,Le);I.pixelStorei(I.UNPACK_ROW_LENGTH,Te),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ni),I.pixelStorei(I.UNPACK_SKIP_ROWS,pn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xa),_t===0&&W.generateMipmaps&&I.generateMipmap(ke),Wt.unbindTexture()},this.initRenderTarget=function(A){Xt.get(A).__webglFramebuffer===void 0&&re.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?re.setTextureCube(A,0):A.isData3DTexture?re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?re.setTexture2DArray(A,0):re.setTexture2D(A,0),Wt.unbindTexture()},this.resetState=function(){F=0,P=0,k=null,Wt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(e),i.unpackColorSpace=we._getUnpackColorSpace()}}function wA({language:o,onClick:e}){const i=gs.useRef(null),r=gs.useRef(null),l=gs.useRef(0);gs.useEffect(()=>{if(!i.current)return;const h=new wy,d=new Qn(50,1,.1,1e3);d.position.z=2.5;const m=new CA({canvas:i.current,alpha:!0,antialias:!0});m.setSize(64,64),m.setPixelRatio(window.devicePixelRatio);const p=new Cd(1,0),x=new By({color:2664261,flatShading:!0,shininess:50}),_=new Ci(p,x);r.current=_,h.add(_);const S=new zy(p),M=new Py(S);M.material.color.setHex(16777215),M.material.opacity=.6,M.material.transparent=!0,_.add(M);const b=new ky(16777215,.6);h.add(b);const R=new Vy(16777215,.8);R.position.set(3,3,5),h.add(R);let y;const v=()=>{if(y=requestAnimationFrame(v),_)if(_.rotation.y+=.015,_.rotation.x+=.008,l.current>0){const L=l.current,U=Math.sin(L*Math.PI*2)*.6*L,D=Math.sin(L*Math.PI*4)*.3*L;_.position.y=U,_.position.x=D*.4,_.rotation.z=Math.sin(L*Math.PI*3)*.8;const H=1+Math.sin(L*Math.PI*3)*.3;_.scale.set(H,H,H),l.current-=.035}else _.position.y=0,_.position.x=0,_.rotation.z=0,_.scale.set(1,1,1);m.render(h,d)};return v(),()=>{cancelAnimationFrame(y),p.dispose(),x.dispose(),S.dispose(),M.material.dispose(),m.dispose()}},[]);const u=()=>{l.current=1,e()};return Bt.jsxs("button",{onClick:u,className:"relative flex items-center justify-center w-16 h-16 hover:bg-gray-50 rounded-lg transition-all duration-200",children:[Bt.jsx("canvas",{ref:i,className:"absolute inset-0",style:{width:"64px",height:"64px",margin:"auto"}}),Bt.jsx("span",{className:"relative z-10 text-xs font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",children:o.toUpperCase()})]})}function DA({language:o,onToggleLanguage:e}){return Bt.jsx("header",{className:"sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm",children:Bt.jsxs("div",{className:"container mx-auto px-4 py-4 flex justify-between items-center",children:[Bt.jsxs("div",{className:"flex items-center space-x-3",children:[Bt.jsx("span",{className:"text-2xl",children:"◆ ▲"}),Bt.jsx("span",{className:"text-xl md:text-2xl font-bold text-gray-900",children:"3ASY"})]}),Bt.jsx(wA,{language:o,onClick:e})]})})}const Fo={name:"3ASY",tagline:{en:"UTILITIES FOR EVERYTHING",it:"UTILITIES FOR EVERYTHING"},logo:{url:"https://www.3FESTO.com/images/homePage/3asyapps.png",alt:"3ASYAPPS Logo"},company:{name:"3FESTO SRL",website:"https://www.3FESTO.com/",tagline:"3D Future Experience",email:"info@3FESTO.com"},hero:{description:{en:{part1:"Custom innovation - Our heart beats for 3D Future Experience with ",linkText:"ANY3DP",part2:", but our DNA is innovative software development. When we identify a need: we create from scratch."},it:{part1:"Innovazione su misura - Il nostro cuore batte per la 3D Future Experience con ",linkText:"ANY3DP",part2:", ma il nostro DNA è lo sviluppo di software innovativo. Quando identifichiamo un'esigenza: creiamo da zero."}},any3dpUrl:"https://www.any3dp.com/"},comingSoon:{icon:"⏳",title:{en:"Coming Soon",it:"Prossimi Lanci"},subtitle:{en:"IN DEVELOPMENT",it:"IN SVILUPPO"},description:{en:"New solutions are always in development. Our innovation pipeline never stops. Stay tuned for upcoming releases...",it:"Nuove soluzioni sono sempre in fase di sviluppo. La nostra pipeline di innovazione non si ferma mai. Stay tuned per i prossimi rilasci..."}},philosophy:{title:{en:"Our Philosophy",it:"La nostra filosofia"},content:{en:"We are constantly searching for new challenges in the technology landscape. Innovation is not just our job, it's our passion. From 3D to AI, from blockchain to enterprise systems: we transform ideas into concrete and scalable solutions.",it:"Siamo costantemente alla ricerca di nuove sfide nel panorama tecnologico. L'innovazione non è solo il nostro lavoro, è la nostra passione. Dal 3D all'AI, dalla blockchain ai sistemi enterprise: trasformiamo idee in soluzioni concrete e scalabili."}},cta:{title:{en:"Do you have a project in mind?",it:"Hai un progetto in mente?"},description:{en:"Our passion for innovation leads us to constantly explore new technological frontiers. If you have an idea that could benefit from our experience in 3D, software development, AI, blockchain or enterprise systems, let's talk about it. Let's transform your vision into reality together.",it:"La nostra passione per l'innovazione ci porta ad esplorare costantemente nuove frontiere tecnologiche. Se hai un'idea che potrebbe beneficiare della nostra esperienza in 3D, sviluppo software, AI, blockchain o sistemi enterprise, parliamone. Trasformiamo insieme la tua visione in realtà."},buttonText:{en:"Start the conversation",it:"Avvia la conversazione"}},footer:{copyright:{en:"All rights reserved",it:"Tutti i diritti riservati"}}};function UA({language:o}){const{hero:e,logo:i,name:r,tagline:l}=Fo,u=e.description[o];return Bt.jsx("section",{className:"container mx-auto px-4 py-16 md:py-20",children:Bt.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[Bt.jsx("div",{className:"mb-6",children:Bt.jsx("img",{src:i.url,alt:i.alt,className:"h-16 md:h-20 mx-auto"})}),Bt.jsx("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4",children:r}),Bt.jsx("p",{className:"text-xl md:text-2xl font-semibold text-[#28a745] mb-6",children:l[o]}),Bt.jsxs("p",{className:"text-base md:text-lg text-gray-700 leading-relaxed",children:[u.part1,Bt.jsx("a",{href:e.any3dpUrl,target:"_blank",rel:"noopener noreferrer",className:"text-[#28a745] hover:text-[#218838] font-semibold",children:u.linkText}),u.part2]})]})})}const LA=[{id:"3asyhr",icon:"👥",title:"3ASYHR",subtitle:{en:"SMART HR SOLUTIONS",it:"SMART HR SOLUTIONS"},description:{en:"Intelligent human resources management with automatic calendar timesheets, team lead dashboard, advanced RBAC and Azure AD integration.",it:"Gestione intelligente delle risorse umane con timesheet automatici da calendario, dashboard team lead, RBAC avanzato e integrazione Azure AD."},features:{en:["Automatic Outlook Calendar export","Team Lead Dashboard with approvals","Supabase PostgreSQL integration","Role-based access control"],it:["Export da Outlook Calendar automatico","Dashboard Team Lead con approvazioni","Integrazione Supabase PostgreSQL","Role-based access control"]},ctaText:{en:"ACCESS THE PLATFORM",it:"ACCEDI ALLA PIATTAFORMA"},url:"https://juno-hr.3asy.app/"},{id:"3asywhistle",icon:"🤫",title:"3ASYWHISTLE",subtitle:{en:"WHISTLEBLOWING BLOCKCHAIN-BASED",it:"WHISTLEBLOWING BLOCKCHAIN-BASED"},description:{en:"First Italian blockchain-protected whistleblowing platform, compliant with D.Lgs. 24/2023 and EU Directive 2019/1937.",it:"Prima piattaforma italiana di whistleblowing protetta da blockchain, conforme D.Lgs. 24/2023 e Direttiva UE 2019/1937."},features:{en:["Blockchain-guaranteed anonymity","End-to-end encrypted communications","5%-25% referral system","European regulatory compliance"],it:["Anonimato garantito da blockchain","Comunicazioni cifrate end-to-end","Sistema referral 5%-25%","Conformità normativa europea"]},ctaText:{en:"VISIT THE PLATFORM",it:"VISITA LA PIATTAFORMA"},url:"https://3asywhistle.it/"},{id:"3asymodeling",icon:"🎨",title:"3ASYMODELING",subtitle:{en:"AI-POWERED 3D GENERATION",it:"AI-POWERED 3D GENERATION"},description:{en:"Transform concepts into 3D models through advanced AI. Text-to-3D, Image-to-3D, multiple exports and NFT minting.",it:"Trasforma concetti in modelli 3D attraverso AI avanzata. Text-to-3D, Image-to-3D, export multipli e NFT minting."},features:{en:["AI Text/Image-to-3D generation","Interactive 3D viewer","GLB, STL, OBJ export","Blockchain NFT minting"],it:["Generazione AI Text/Image-to-3D","Visualizzatore 3D interattivo","Export GLB, STL, OBJ","NFT blockchain minting"]},ctaText:{en:"EXPLORE THE PLATFORM",it:"ESPLORA LA PIATTAFORMA"},url:"https://3asymodeling.com/"},{id:"3asytrading",icon:"📈",title:"3ASYTRADING",subtitle:{en:"P2P STRATEGY MARKETPLACE",it:"P2P STRATEGY MARKETPLACE"},description:{en:"Peer-to-peer marketplace for algorithmic trading strategies. Share, discover and use quantitative strategies verified by the community.",it:"Marketplace peer-to-peer per strategie di trading algoritmico. Condividi, scopri e utilizza strategie quantitative verificate dalla community."},features:{en:["Verified quantitative strategies","Real-time multi-timeframe dashboard","Performance tracking and metrics","P2P strategist community"],it:["Strategie quantitative verificate","Dashboard real-time multi-timeframe","Performance tracking e metriche","Community P2P di strategist"]},ctaText:{en:"EXPLORE STRATEGIES",it:"ESPLORA LE STRATEGIE"},url:"https://3asytrading.com/"},{id:"3asywealth",icon:"💰",title:"3ASYWEALTH",subtitle:{en:"WEALTH MANAGEMENT PLATFORM",it:"WEALTH MANAGEMENT PLATFORM"},description:{en:"Advanced platform for asset and financial management. Portfolio tracking, analytics and professional reporting.",it:"Piattaforma avanzata per la gestione patrimoniale e finanziaria. Portfolio tracking, analytics e reportistica professionale."},features:{en:["Integrated portfolio management","Advanced analytics and reporting","Customizable dashboard","Export and automations"],it:["Portfolio management integrato","Analytics e reportistica avanzata","Dashboard personalizzabile","Export e automazioni"]},ctaText:{en:"MANAGE WEALTH",it:"GESTISCI IL PATRIMONIO"},url:"https://wealth.3asy.app/"}];function NA({app:o,language:e}){return Bt.jsx("div",{className:"group bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 hover:border-[#28a745] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full",children:Bt.jsxs("div",{className:"flex flex-col flex-1",children:[Bt.jsx("div",{className:"text-5xl md:text-6xl mb-4",children:o.icon}),Bt.jsx("h3",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-2",children:o.title}),Bt.jsx("p",{className:"text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4",children:o.subtitle[e]}),Bt.jsx("p",{className:"text-sm md:text-base text-gray-700 mb-4 leading-relaxed",children:o.description[e]}),Bt.jsx("ul",{className:"space-y-2 mb-6 flex-1",children:o.features[e].map((i,r)=>Bt.jsxs("li",{className:"flex items-start text-sm text-gray-600",children:[Bt.jsx("span",{className:"text-[#28a745] mr-2 mt-0.5",children:"✓"}),Bt.jsx("span",{children:i})]},r))}),Bt.jsxs("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center w-full px-4 py-3 bg-[#28a745] hover:bg-[#218838] text-white text-sm font-semibold rounded-lg transition-all duration-300 group-hover:shadow-lg mt-auto",children:[Bt.jsx("span",{children:o.ctaText[e]}),Bt.jsx("span",{className:"ml-2 group-hover:translate-x-1 transition-transform",children:"→"})]})]})})}function OA({language:o}){const{comingSoon:e}=Fo;return Bt.jsxs("div",{className:"bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border-2 border-dashed border-gray-300",children:[Bt.jsx("div",{className:"text-6xl mb-6",children:e.icon}),Bt.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-2",children:e.title[o]}),Bt.jsx("p",{className:"text-sm font-semibold text-gray-500 mb-4",children:e.subtitle[o]}),Bt.jsx("p",{className:"text-gray-600 leading-relaxed",children:e.description[o]})]})}function PA({language:o}){return Bt.jsx("section",{className:"container mx-auto px-4 py-12",children:Bt.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto",children:[LA.map(e=>Bt.jsx(NA,{app:e,language:o},e.id)),Bt.jsx(OA,{language:o})]})})}function zA({language:o}){const{philosophy:e}=Fo;return Bt.jsx("section",{className:"bg-gradient-to-br from-gray-50 to-green-50 py-16 md:py-24",children:Bt.jsx("div",{className:"container mx-auto px-4",children:Bt.jsxs("div",{className:"max-w-4xl mx-auto",children:[Bt.jsx("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center",children:e.title[o]}),Bt.jsx("div",{className:"text-base md:text-lg text-gray-700 leading-relaxed space-y-4",children:Bt.jsx("p",{children:e.content[o]})})]})})})}function BA({language:o}){const{cta:e,company:i}=Fo;return Bt.jsx("section",{className:"bg-white py-16 md:py-24 border-t border-gray-200",children:Bt.jsx("div",{className:"container mx-auto px-4",children:Bt.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[Bt.jsx("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:e.title[o]}),Bt.jsx("p",{className:"text-base md:text-lg text-gray-700 mb-10 leading-relaxed",children:e.description[o]}),Bt.jsxs("a",{href:`mailto:${i.email}`,className:"inline-flex items-center space-x-2 px-8 py-4 bg-[#28a745] hover:bg-[#218838] text-white text-base md:text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5",children:[Bt.jsx("span",{children:"📧"}),Bt.jsx("span",{children:e.buttonText[o]})]})]})})})}function IA({language:o}){const{company:e,footer:i}=Fo;return Bt.jsx("footer",{className:"bg-gray-50 border-t border-gray-200 py-8",children:Bt.jsxs("div",{className:"container mx-auto px-4 text-center",children:[Bt.jsxs("p",{className:"text-gray-600 mb-2",children:["3ASYAPPS by"," ",Bt.jsxs("a",{href:e.website,target:"_blank",rel:"noopener noreferrer",className:"text-[#28a745] hover:text-[#218838] font-semibold",children:[e.name.replace(" SRL","")," - ",e.tagline]})]}),Bt.jsxs("p",{className:"text-sm text-gray-500",children:["© 2025 ",e.name," - ",i.copyright[o]," |"," ",Bt.jsx("a",{href:`mailto:${e.email}`,className:"text-[#28a745] hover:text-[#218838]",children:e.email})]})]})})}function FA(){const[o,e]=gs.useState("it"),i=()=>{e(r=>r==="en"?"it":"en")};return Bt.jsxs("div",{className:"min-h-screen bg-white",children:[Bt.jsx(DA,{language:o,onToggleLanguage:i}),Bt.jsx(UA,{language:o}),Bt.jsx(PA,{language:o}),Bt.jsx(zA,{language:o}),Bt.jsx(BA,{language:o}),Bt.jsx(IA,{language:o})]})}pS.createRoot(document.getElementById("root")).render(Bt.jsx(gs.StrictMode,{children:Bt.jsx(FA,{})}));
