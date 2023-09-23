(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Da(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ye={},es=[],ut=()=>{},zp=()=>!1,qp=/^on[^a-z]/,Fr=t=>qp.test(t),Ma=t=>t.startsWith("onUpdate:"),Ce=Object.assign,La=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kp=Object.prototype.hasOwnProperty,ne=(t,e)=>Kp.call(t,e),V=Array.isArray,ts=t=>bi(t)==="[object Map]",Ur=t=>bi(t)==="[object Set]",Zl=t=>bi(t)==="[object Date]",G=t=>typeof t=="function",Ae=t=>typeof t=="string",ti=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",ch=t=>ge(t)&&G(t.then)&&G(t.catch),uh=Object.prototype.toString,bi=t=>uh.call(t),Gp=t=>bi(t).slice(8,-1),hh=t=>bi(t)==="[object Object]",Fa=t=>Ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ji=Da(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Br=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Yp=/-(\w)/g,Tt=Br(t=>t.replace(Yp,(e,n)=>n?n.toUpperCase():"")),Qp=/\B([A-Z])/g,vs=Br(t=>t.replace(Qp,"-$1").toLowerCase()),Hr=Br(t=>t.charAt(0).toUpperCase()+t.slice(1)),yo=Br(t=>t?`on${Hr(t)}`:""),ni=(t,e)=>!Object.is(t,e),Xi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},lr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ko=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Jp=t=>{const e=Ae(t)?Number(t):NaN;return isNaN(e)?t:e};let ec;const Go=()=>ec||(ec=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ua(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ae(s)?t_(s):Ua(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ae(t))return t;if(ge(t))return t}}const Xp=/;(?![^(]*\))/g,Zp=/:([^]+)/,e_=/\/\*[^]*?\*\//g;function t_(t){const e={};return t.replace(e_,"").split(Xp).forEach(n=>{if(n){const s=n.split(Zp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ci(t){let e="";if(Ae(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=Ci(t[n]);s&&(e+=s+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const n_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",s_=Da(n_);function dh(t){return!!t||t===""}function i_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Wr(t[s],e[s]);return n}function Wr(t,e){if(t===e)return!0;let n=Zl(t),s=Zl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=ti(t),s=ti(e),n||s)return t===e;if(n=V(t),s=V(e),n||s)return n&&s?i_(t,e):!1;if(n=ge(t),s=ge(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Wr(t[o],e[o]))return!1}}return String(t)===String(e)}function fh(t,e){return t.findIndex(n=>Wr(n,e))}const tc=t=>Ae(t)?t:t==null?"":V(t)||ge(t)&&(t.toString===uh||!G(t.toString))?JSON.stringify(t,ph,2):String(t),ph=(t,e)=>e&&e.__v_isRef?ph(t,e.value):ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Ur(e)?{[`Set(${e.size})`]:[...e.values()]}:ge(e)&&!V(e)&&!hh(e)?String(e):e;let et;class _h{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=et,!e&&et&&(this.index=(et.scopes||(et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=et;try{return et=this,e()}finally{et=n}}}on(){et=this}off(){et=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function gh(t){return new _h(t)}function r_(t,e=et){e&&e.active&&e.effects.push(t)}function mh(){return et}function o_(t){et&&et.cleanups.push(t)}const Ba=t=>{const e=new Set(t);return e.w=0,e.n=0,e},vh=t=>(t.w&un)>0,yh=t=>(t.n&un)>0,a_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=un},l_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];vh(i)&&!yh(i)?i.delete(t):e[n++]=i,i.w&=~un,i.n&=~un}e.length=n}},cr=new WeakMap;let Us=0,un=1;const Yo=30;let rt;const Pn=Symbol(""),Qo=Symbol("");class Ha{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,r_(this,s)}run(){if(!this.active)return this.fn();let e=rt,n=tn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=rt,rt=this,tn=!0,un=1<<++Us,Us<=Yo?a_(this):nc(this),this.fn()}finally{Us<=Yo&&l_(this),un=1<<--Us,rt=this.parent,tn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){rt===this?this.deferStop=!0:this.active&&(nc(this),this.onStop&&this.onStop(),this.active=!1)}}function nc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let tn=!0;const Eh=[];function ys(){Eh.push(tn),tn=!1}function Es(){const t=Eh.pop();tn=t===void 0?!0:t}function Je(t,e,n){if(tn&&rt){let s=cr.get(t);s||cr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Ba()),wh(i)}}function wh(t,e){let n=!1;Us<=Yo?yh(t)||(t.n|=un,n=!vh(t)):n=!t.has(rt),n&&(t.add(rt),rt.deps.push(t))}function Lt(t,e,n,s,i,r){const o=cr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?Fa(n)&&a.push(o.get("length")):(a.push(o.get(Pn)),ts(t)&&a.push(o.get(Qo)));break;case"delete":V(t)||(a.push(o.get(Pn)),ts(t)&&a.push(o.get(Qo)));break;case"set":ts(t)&&a.push(o.get(Pn));break}if(a.length===1)a[0]&&Jo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Jo(Ba(l))}}function Jo(t,e){const n=V(t)?t:[...t];for(const s of n)s.computed&&sc(s);for(const s of n)s.computed||sc(s)}function sc(t,e){(t!==rt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function c_(t,e){var n;return(n=cr.get(t))==null?void 0:n.get(e)}const u_=Da("__proto__,__v_isRef,__isVue"),Ih=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ti)),h_=Wa(),d_=Wa(!1,!0),f_=Wa(!0),ic=p_();function p_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=te(this);for(let r=0,o=this.length;r<o;r++)Je(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(te)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ys();const s=te(this)[e].apply(this,n);return Es(),s}}),t}function __(t){const e=te(this);return Je(e,"has",t),e.hasOwnProperty(t)}function Wa(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?N_:Rh:e?Sh:Th).get(s))return s;const o=V(s);if(!t){if(o&&ne(ic,i))return Reflect.get(ic,i,r);if(i==="hasOwnProperty")return __}const a=Reflect.get(s,i,r);return(ti(i)?Ih.has(i):u_(i))||(t||Je(s,"get",i),e)?a:we(a)?o&&Fa(i)?a:a.value:ge(a)?t?kh(a):Ti(a):a}}const g_=bh(),m_=bh(!0);function bh(t=!1){return function(n,s,i,r){let o=n[s];if(ls(o)&&we(o)&&!we(i))return!1;if(!t&&(!ur(i)&&!ls(i)&&(o=te(o),i=te(i)),!V(n)&&we(o)&&!we(i)))return o.value=i,!0;const a=V(n)&&Fa(s)?Number(s)<n.length:ne(n,s),l=Reflect.set(n,s,i,r);return n===te(r)&&(a?ni(i,o)&&Lt(n,"set",s,i):Lt(n,"add",s,i)),l}}function v_(t,e){const n=ne(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Lt(t,"delete",e,void 0),s}function y_(t,e){const n=Reflect.has(t,e);return(!ti(e)||!Ih.has(e))&&Je(t,"has",e),n}function E_(t){return Je(t,"iterate",V(t)?"length":Pn),Reflect.ownKeys(t)}const Ch={get:h_,set:g_,deleteProperty:v_,has:y_,ownKeys:E_},w_={get:f_,set(t,e){return!0},deleteProperty(t,e){return!0}},I_=Ce({},Ch,{get:d_,set:m_}),Va=t=>t,Vr=t=>Reflect.getPrototypeOf(t);function Hi(t,e,n=!1,s=!1){t=t.__v_raw;const i=te(t),r=te(e);n||(e!==r&&Je(i,"get",e),Je(i,"get",r));const{has:o}=Vr(i),a=s?Va:n?za:si;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Wi(t,e=!1){const n=this.__v_raw,s=te(n),i=te(t);return e||(t!==i&&Je(s,"has",t),Je(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Vi(t,e=!1){return t=t.__v_raw,!e&&Je(te(t),"iterate",Pn),Reflect.get(t,"size",t)}function rc(t){t=te(t);const e=te(this);return Vr(e).has.call(e,t)||(e.add(t),Lt(e,"add",t,t)),this}function oc(t,e){e=te(e);const n=te(this),{has:s,get:i}=Vr(n);let r=s.call(n,t);r||(t=te(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ni(e,o)&&Lt(n,"set",t,e):Lt(n,"add",t,e),this}function ac(t){const e=te(this),{has:n,get:s}=Vr(e);let i=n.call(e,t);i||(t=te(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Lt(e,"delete",t,void 0),r}function lc(){const t=te(this),e=t.size!==0,n=t.clear();return e&&Lt(t,"clear",void 0,void 0),n}function ji(t,e){return function(s,i){const r=this,o=r.__v_raw,a=te(o),l=e?Va:t?za:si;return!t&&Je(a,"iterate",Pn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function $i(t,e,n){return function(...s){const i=this.__v_raw,r=te(i),o=ts(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Va:e?za:si;return!e&&Je(r,"iterate",l?Qo:Pn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function jt(t){return function(...e){return t==="delete"?!1:this}}function b_(){const t={get(r){return Hi(this,r)},get size(){return Vi(this)},has:Wi,add:rc,set:oc,delete:ac,clear:lc,forEach:ji(!1,!1)},e={get(r){return Hi(this,r,!1,!0)},get size(){return Vi(this)},has:Wi,add:rc,set:oc,delete:ac,clear:lc,forEach:ji(!1,!0)},n={get(r){return Hi(this,r,!0)},get size(){return Vi(this,!0)},has(r){return Wi.call(this,r,!0)},add:jt("add"),set:jt("set"),delete:jt("delete"),clear:jt("clear"),forEach:ji(!0,!1)},s={get(r){return Hi(this,r,!0,!0)},get size(){return Vi(this,!0)},has(r){return Wi.call(this,r,!0)},add:jt("add"),set:jt("set"),delete:jt("delete"),clear:jt("clear"),forEach:ji(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=$i(r,!1,!1),n[r]=$i(r,!0,!1),e[r]=$i(r,!1,!0),s[r]=$i(r,!0,!0)}),[t,n,e,s]}const[C_,T_,S_,R_]=b_();function ja(t,e){const n=e?t?R_:S_:t?T_:C_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ne(n,i)&&i in s?n:s,i,r)}const A_={get:ja(!1,!1)},k_={get:ja(!1,!0)},P_={get:ja(!0,!1)},Th=new WeakMap,Sh=new WeakMap,Rh=new WeakMap,N_=new WeakMap;function O_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function x_(t){return t.__v_skip||!Object.isExtensible(t)?0:O_(Gp(t))}function Ti(t){return ls(t)?t:$a(t,!1,Ch,A_,Th)}function Ah(t){return $a(t,!1,I_,k_,Sh)}function kh(t){return $a(t,!0,w_,P_,Rh)}function $a(t,e,n,s,i){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=x_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function nn(t){return ls(t)?nn(t.__v_raw):!!(t&&t.__v_isReactive)}function ls(t){return!!(t&&t.__v_isReadonly)}function ur(t){return!!(t&&t.__v_isShallow)}function Ph(t){return nn(t)||ls(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function jr(t){return lr(t,"__v_skip",!0),t}const si=t=>ge(t)?Ti(t):t,za=t=>ge(t)?kh(t):t;function Nh(t){tn&&rt&&(t=te(t),wh(t.dep||(t.dep=Ba())))}function Oh(t,e){t=te(t);const n=t.dep;n&&Jo(n)}function we(t){return!!(t&&t.__v_isRef===!0)}function Dt(t){return xh(t,!1)}function D_(t){return xh(t,!0)}function xh(t,e){return we(t)?t:new M_(t,e)}class M_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:si(e)}get value(){return Nh(this),this._value}set value(e){const n=this.__v_isShallow||ur(e)||ls(e);e=n?e:te(e),ni(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:si(e),Oh(this))}}function xe(t){return we(t)?t.value:t}const L_={get:(t,e,n)=>xe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return we(i)&&!we(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Dh(t){return nn(t)?t:new Proxy(t,L_)}function F_(t){const e=V(t)?new Array(t.length):{};for(const n in t)e[n]=B_(t,n);return e}class U_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return c_(te(this._object),this._key)}}function B_(t,e,n){const s=t[e];return we(s)?s:new U_(t,e,n)}class H_{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ha(e,()=>{this._dirty||(this._dirty=!0,Oh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=te(this);return Nh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function W_(t,e,n=!1){let s,i;const r=G(t);return r?(s=t,i=ut):(s=t.get,i=t.set),new H_(s,i,r||!i,n)}function sn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){$r(r,e,n)}return i}function nt(t,e,n,s){if(G(t)){const r=sn(t,e,n,s);return r&&ch(r)&&r.catch(o=>{$r(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(nt(t[r],e,n,s));return i}function $r(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){sn(l,null,10,[t,o,a]);return}}V_(t,n,i,s)}function V_(t,e,n,s=!0){console.error(t)}let ii=!1,Xo=!1;const Fe=[];let It=0;const ns=[];let kt=null,bn=0;const Mh=Promise.resolve();let qa=null;function Ka(t){const e=qa||Mh;return t?e.then(this?t.bind(this):t):e}function j_(t){let e=It+1,n=Fe.length;for(;e<n;){const s=e+n>>>1;ri(Fe[s])<t?e=s+1:n=s}return e}function Ga(t){(!Fe.length||!Fe.includes(t,ii&&t.allowRecurse?It+1:It))&&(t.id==null?Fe.push(t):Fe.splice(j_(t.id),0,t),Lh())}function Lh(){!ii&&!Xo&&(Xo=!0,qa=Mh.then(Uh))}function $_(t){const e=Fe.indexOf(t);e>It&&Fe.splice(e,1)}function z_(t){V(t)?ns.push(...t):(!kt||!kt.includes(t,t.allowRecurse?bn+1:bn))&&ns.push(t),Lh()}function cc(t,e=ii?It+1:0){for(;e<Fe.length;e++){const n=Fe[e];n&&n.pre&&(Fe.splice(e,1),e--,n())}}function Fh(t){if(ns.length){const e=[...new Set(ns)];if(ns.length=0,kt){kt.push(...e);return}for(kt=e,kt.sort((n,s)=>ri(n)-ri(s)),bn=0;bn<kt.length;bn++)kt[bn]();kt=null,bn=0}}const ri=t=>t.id==null?1/0:t.id,q_=(t,e)=>{const n=ri(t)-ri(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Uh(t){Xo=!1,ii=!0,Fe.sort(q_);const e=ut;try{for(It=0;It<Fe.length;It++){const n=Fe[It];n&&n.active!==!1&&sn(n,null,14)}}finally{It=0,Fe.length=0,Fh(),ii=!1,qa=null,(Fe.length||ns.length)&&Uh()}}function K_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ye;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ye;d&&(i=n.map(_=>Ae(_)?_.trim():_)),h&&(i=n.map(Ko))}let a,l=s[a=yo(e)]||s[a=yo(Tt(e))];!l&&r&&(l=s[a=yo(vs(e))]),l&&nt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nt(c,t,6,i)}}function Bh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=Bh(c,e,!0);u&&(a=!0,Ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ge(t)&&s.set(t,null),null):(V(r)?r.forEach(l=>o[l]=null):Ce(o,r),ge(t)&&s.set(t,o),o)}function zr(t,e){return!t||!Fr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,vs(e))||ne(t,e))}let Ge=null,qr=null;function hr(t){const e=Ge;return Ge=t,qr=t&&t.type.__scopeId||null,e}function Kr(t){qr=t}function Gr(){qr=null}function Hh(t,e=Ge,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&wc(-1);const r=hr(e);let o;try{o=t(...i)}finally{hr(r),s._d&&wc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Eo(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:_,ctx:m,inheritAttrs:w}=t;let k,P;const O=hr(t);try{if(n.shapeFlag&4){const M=i||s;k=wt(u.call(M,M,h,r,_,d,m)),P=l}else{const M=e;k=wt(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),P=e.props?l:G_(l)}}catch(M){zs.length=0,$r(M,t,1),k=be(dt)}let z=k;if(P&&w!==!1){const M=Object.keys(P),{shapeFlag:Y}=z;M.length&&Y&7&&(o&&M.some(Ma)&&(P=Y_(P,o)),z=hn(z,P))}return n.dirs&&(z=hn(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),k=z,hr(O),k}const G_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fr(n))&&((e||(e={}))[n]=t[n]);return e},Y_=(t,e)=>{const n={};for(const s in t)(!Ma(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Q_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?uc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!zr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?uc(s,o,c):!0:!!o;return!1}function uc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!zr(n,r))return!0}return!1}function J_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const X_=t=>t.__isSuspense;function Z_(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):z_(t)}function Wh(t,e){return Ya(t,null,e)}const zi={};function js(t,e,n){return Ya(t,e,n)}function Ya(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ye){var a;const l=mh()===((a=Te)==null?void 0:a.scope)?Te:null;let c,u=!1,h=!1;if(we(t)?(c=()=>t.value,u=ur(t)):nn(t)?(c=()=>t,s=!0):V(t)?(h=!0,u=t.some(M=>nn(M)||ur(M)),c=()=>t.map(M=>{if(we(M))return M.value;if(nn(M))return Rn(M);if(G(M))return sn(M,l,2)})):G(t)?e?c=()=>sn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),nt(t,l,3,[_])}:c=ut,e&&s){const M=c;c=()=>Rn(M())}let d,_=M=>{d=O.onStop=()=>{sn(M,l,4)}},m;if(li)if(_=ut,e?n&&nt(e,l,3,[c(),h?[]:void 0,_]):c(),i==="sync"){const M=Jg();m=M.__watcherHandles||(M.__watcherHandles=[])}else return ut;let w=h?new Array(t.length).fill(zi):zi;const k=()=>{if(O.active)if(e){const M=O.run();(s||u||(h?M.some((Y,fe)=>ni(Y,w[fe])):ni(M,w)))&&(d&&d(),nt(e,l,3,[M,w===zi?void 0:h&&w[0]===zi?[]:w,_]),w=M)}else O.run()};k.allowRecurse=!!e;let P;i==="sync"?P=k:i==="post"?P=()=>Ke(k,l&&l.suspense):(k.pre=!0,l&&(k.id=l.uid),P=()=>Ga(k));const O=new Ha(c,P);e?n?k():w=O.run():i==="post"?Ke(O.run.bind(O),l&&l.suspense):O.run();const z=()=>{O.stop(),l&&l.scope&&La(l.scope.effects,O)};return m&&m.push(z),z}function eg(t,e,n){const s=this.proxy,i=Ae(t)?t.includes(".")?Vh(s,t):()=>s[t]:t.bind(s,s);let r;G(e)?r=e:(r=e.handler,n=e);const o=Te;cs(this);const a=Ya(i,r.bind(s),n);return o?cs(o):Nn(),a}function Vh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Rn(t,e){if(!ge(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),we(t))Rn(t.value,e);else if(V(t))for(let n=0;n<t.length;n++)Rn(t[n],e);else if(Ur(t)||ts(t))t.forEach(n=>{Rn(n,e)});else if(hh(t))for(const n in t)Rn(t[n],e);return t}function En(t,e){const n=Ge;if(n===null)return t;const s=Zr(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ye]=e[r];o&&(G(o)&&(o={mounted:o,updated:o}),o.deep&&Rn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function gn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ys(),nt(l,n,8,[t.el,a,t,e]),Es())}}function tg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qa(()=>{t.isMounted=!0}),Yh(()=>{t.isUnmounting=!0}),t}const tt=[Function,Array],jh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tt,onEnter:tt,onAfterEnter:tt,onEnterCancelled:tt,onBeforeLeave:tt,onLeave:tt,onAfterLeave:tt,onLeaveCancelled:tt,onBeforeAppear:tt,onAppear:tt,onAfterAppear:tt,onAppearCancelled:tt},ng={name:"BaseTransition",props:jh,setup(t,{slots:e}){const n=jg(),s=tg();let i;return()=>{const r=e.default&&zh(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const w of r)if(w.type!==dt){o=w;break}}const a=te(t),{mode:l}=a;if(s.isLeaving)return wo(o);const c=hc(o);if(!c)return wo(o);const u=Zo(c,a,s,n);ea(c,u);const h=n.subTree,d=h&&hc(h);let _=!1;const{getTransitionKey:m}=c.type;if(m){const w=m();i===void 0?i=w:w!==i&&(i=w,_=!0)}if(d&&d.type!==dt&&(!Cn(c,d)||_)){const w=Zo(d,a,s,n);if(ea(d,w),l==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},wo(o);l==="in-out"&&c.type!==dt&&(w.delayLeave=(k,P,O)=>{const z=$h(s,d);z[String(d.key)]=d,k._leaveCb=()=>{P(),k._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=O})}return o}}},sg=ng;function $h(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Zo(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:w,onAppear:k,onAfterAppear:P,onAppearCancelled:O}=e,z=String(t.key),M=$h(n,t),Y=(x,U)=>{x&&nt(x,s,9,U)},fe=(x,U)=>{const K=U[1];Y(x,U),V(x)?x.every(ue=>ue.length<=1)&&K():x.length<=1&&K()},me={mode:r,persisted:o,beforeEnter(x){let U=a;if(!n.isMounted)if(i)U=w||a;else return;x._leaveCb&&x._leaveCb(!0);const K=M[z];K&&Cn(t,K)&&K.el._leaveCb&&K.el._leaveCb(),Y(U,[x])},enter(x){let U=l,K=c,ue=u;if(!n.isMounted)if(i)U=k||l,K=P||c,ue=O||u;else return;let L=!1;const ie=x._enterCb=Oe=>{L||(L=!0,Oe?Y(ue,[x]):Y(K,[x]),me.delayedLeave&&me.delayedLeave(),x._enterCb=void 0)};U?fe(U,[x,ie]):ie()},leave(x,U){const K=String(t.key);if(x._enterCb&&x._enterCb(!0),n.isUnmounting)return U();Y(h,[x]);let ue=!1;const L=x._leaveCb=ie=>{ue||(ue=!0,U(),ie?Y(m,[x]):Y(_,[x]),x._leaveCb=void 0,M[K]===t&&delete M[K])};M[K]=t,d?fe(d,[x,L]):L()},clone(x){return Zo(x,e,n,s)}};return me}function wo(t){if(Yr(t))return t=hn(t),t.children=null,t}function hc(t){return Yr(t)?t.children?t.children[0]:void 0:t}function ea(t,e){t.shapeFlag&6&&t.component?ea(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function zh(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===it?(o.patchFlag&128&&i++,s=s.concat(zh(o.children,e,a))):(e||o.type!==dt)&&s.push(a!=null?hn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function qh(t,e){return G(t)?(()=>Ce({name:t.name},e,{setup:t}))():t}const Zi=t=>!!t.type.__asyncLoader,Yr=t=>t.type.__isKeepAlive;function ig(t,e){Kh(t,"a",e)}function rg(t,e){Kh(t,"da",e)}function Kh(t,e,n=Te){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Qr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Yr(i.parent.vnode)&&og(s,e,n,i),i=i.parent}}function og(t,e,n,s){const i=Qr(e,t,s,!0);Ja(()=>{La(s[e],i)},n)}function Qr(t,e,n=Te,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ys(),cs(n);const a=nt(e,n,t,o);return Nn(),Es(),a});return s?i.unshift(r):i.push(r),r}}const Bt=t=>(e,n=Te)=>(!li||t==="sp")&&Qr(t,(...s)=>e(...s),n),Gh=Bt("bm"),Qa=Bt("m"),ag=Bt("bu"),lg=Bt("u"),Yh=Bt("bum"),Ja=Bt("um"),cg=Bt("sp"),ug=Bt("rtg"),hg=Bt("rtc");function dg(t,e=Te){Qr("ec",t,e)}const Qh="components";function fg(t,e){return _g(Qh,t,!0,e)||t}const pg=Symbol.for("v-ndc");function _g(t,e,n=!0,s=!1){const i=Ge||Te;if(i){const r=i.type;if(t===Qh){const a=Gg(r,!1);if(a&&(a===e||a===Tt(e)||a===Hr(Tt(e))))return r}const o=dc(i[t]||r[t],e)||dc(i.appContext[t],e);return!o&&s?r:o}}function dc(t,e){return t&&(t[e]||t[Tt(e)]||t[Hr(Tt(e))])}const ta=t=>t?ad(t)?Zr(t)||t.proxy:ta(t.parent):null,$s=Ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ta(t.parent),$root:t=>ta(t.root),$emit:t=>t.emit,$options:t=>Xa(t),$forceUpdate:t=>t.f||(t.f=()=>Ga(t.update)),$nextTick:t=>t.n||(t.n=Ka.bind(t.proxy)),$watch:t=>eg.bind(t)}),Io=(t,e)=>t!==ye&&!t.__isScriptSetup&&ne(t,e),gg={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Io(s,e))return o[e]=1,s[e];if(i!==ye&&ne(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ne(c,e))return o[e]=3,r[e];if(n!==ye&&ne(n,e))return o[e]=4,n[e];na&&(o[e]=0)}}const u=$s[e];let h,d;if(u)return e==="$attrs"&&Je(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ye&&ne(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ne(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Io(i,e)?(i[e]=n,!0):s!==ye&&ne(s,e)?(s[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ye&&ne(t,o)||Io(e,o)||(a=r[0])&&ne(a,o)||ne(s,o)||ne($s,o)||ne(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fc(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let na=!0;function mg(t){const e=Xa(t),n=t.proxy,s=t.ctx;na=!1,e.beforeCreate&&pc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:w,deactivated:k,beforeDestroy:P,beforeUnmount:O,destroyed:z,unmounted:M,render:Y,renderTracked:fe,renderTriggered:me,errorCaptured:x,serverPrefetch:U,expose:K,inheritAttrs:ue,components:L,directives:ie,filters:Oe}=e;if(c&&vg(c,s,null),o)for(const he in o){const re=o[he];G(re)&&(s[he]=re.bind(n))}if(i){const he=i.call(n,n);ge(he)&&(t.data=Ti(he))}if(na=!0,r)for(const he in r){const re=r[he],Rt=G(re)?re.bind(n,n):G(re.get)?re.get.bind(n,n):ut,Vt=!G(re)&&G(re.set)?re.set.bind(n):ut,mt=Ue({get:Rt,set:Vt});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>mt.value,set:qe=>mt.value=qe})}if(a)for(const he in a)Jh(a[he],s,n,he);if(l){const he=G(l)?l.call(n):l;Reflect.ownKeys(he).forEach(re=>{er(re,he[re])})}u&&pc(u,t,"c");function ee(he,re){V(re)?re.forEach(Rt=>he(Rt.bind(n))):re&&he(re.bind(n))}if(ee(Gh,h),ee(Qa,d),ee(ag,_),ee(lg,m),ee(ig,w),ee(rg,k),ee(dg,x),ee(hg,fe),ee(ug,me),ee(Yh,O),ee(Ja,M),ee(cg,U),V(K))if(K.length){const he=t.exposed||(t.exposed={});K.forEach(re=>{Object.defineProperty(he,re,{get:()=>n[re],set:Rt=>n[re]=Rt})})}else t.exposed||(t.exposed={});Y&&t.render===ut&&(t.render=Y),ue!=null&&(t.inheritAttrs=ue),L&&(t.components=L),ie&&(t.directives=ie)}function vg(t,e,n=ut){V(t)&&(t=sa(t));for(const s in t){const i=t[s];let r;ge(i)?"default"in i?r=ht(i.from||s,i.default,!0):r=ht(i.from||s):r=ht(i),we(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function pc(t,e,n){nt(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jh(t,e,n,s){const i=s.includes(".")?Vh(n,s):()=>n[s];if(Ae(t)){const r=e[t];G(r)&&js(i,r)}else if(G(t))js(i,t.bind(n));else if(ge(t))if(V(t))t.forEach(r=>Jh(r,e,n,s));else{const r=G(t.handler)?t.handler.bind(n):e[t.handler];G(r)&&js(i,r,t)}}function Xa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>dr(l,c,o,!0)),dr(l,e,o)),ge(e)&&r.set(e,l),l}function dr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&dr(t,r,n,!0),i&&i.forEach(o=>dr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=yg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yg={data:_c,props:gc,emits:gc,methods:Bs,computed:Bs,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:Bs,directives:Bs,watch:wg,provide:_c,inject:Eg};function _c(t,e){return e?t?function(){return Ce(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function Eg(t,e){return Bs(sa(t),sa(e))}function sa(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ve(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?Ce(Object.create(null),t,e):e}function gc(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:Ce(Object.create(null),fc(t),fc(e??{})):e}function wg(t,e){if(!t)return e;if(!e)return t;const n=Ce(Object.create(null),t);for(const s in e)n[s]=Ve(t[s],e[s]);return n}function Xh(){return{app:null,config:{isNativeTag:zp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ig=0;function bg(t,e){return function(s,i=null){G(s)||(s=Ce({},s)),i!=null&&!ge(i)&&(i=null);const r=Xh(),o=new Set;let a=!1;const l=r.app={_uid:Ig++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Xg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(l,...u)):G(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=be(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Zr(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){oi=l;try{return c()}finally{oi=null}}};return l}}let oi=null;function er(t,e){if(Te){let n=Te.provides;const s=Te.parent&&Te.parent.provides;s===n&&(n=Te.provides=Object.create(s)),n[t]=e}}function ht(t,e,n=!1){const s=Te||Ge;if(s||oi){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:oi._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&G(e)?e.call(s&&s.proxy):e}}function Cg(){return!!(Te||Ge||oi)}function Tg(t,e,n,s=!1){const i={},r={};lr(r,Xr,1),t.propsDefaults=Object.create(null),Zh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ah(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Sg(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=te(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(zr(t.emitsOptions,d))continue;const _=e[d];if(l)if(ne(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=Tt(d);i[m]=ia(l,a,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{Zh(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!ne(e,h)&&((u=vs(h))===h||!ne(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=ia(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ne(e,h))&&(delete r[h],c=!0)}c&&Lt(t,"set","$attrs")}function Zh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ji(l))continue;const c=e[l];let u;i&&ne(i,u=Tt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:zr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=te(n),c=a||ye;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ia(i,l,h,c[h],t,!ne(c,h))}}return o}function ia(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&G(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(cs(i),s=c[n]=l.call(null,e),Nn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===vs(n))&&(s=!0))}return s}function ed(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!G(t)){const u=h=>{l=!0;const[d,_]=ed(h,e,!0);Ce(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ge(t)&&s.set(t,es),es;if(V(r))for(let u=0;u<r.length;u++){const h=Tt(r[u]);mc(h)&&(o[h]=ye)}else if(r)for(const u in r){const h=Tt(u);if(mc(h)){const d=r[u],_=o[h]=V(d)||G(d)?{type:d}:Ce({},d);if(_){const m=Ec(Boolean,_.type),w=Ec(String,_.type);_[0]=m>-1,_[1]=w<0||m<w,(m>-1||ne(_,"default"))&&a.push(h)}}}const c=[o,a];return ge(t)&&s.set(t,c),c}function mc(t){return t[0]!=="$"}function vc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function yc(t,e){return vc(t)===vc(e)}function Ec(t,e){return V(e)?e.findIndex(n=>yc(n,t)):G(e)&&yc(e,t)?0:-1}const td=t=>t[0]==="_"||t==="$stable",Za=t=>V(t)?t.map(wt):[wt(t)],Rg=(t,e,n)=>{if(e._n)return e;const s=Hh((...i)=>Za(e(...i)),n);return s._c=!1,s},nd=(t,e,n)=>{const s=t._ctx;for(const i in t){if(td(i))continue;const r=t[i];if(G(r))e[i]=Rg(i,r,s);else if(r!=null){const o=Za(r);e[i]=()=>o}}},sd=(t,e)=>{const n=Za(e);t.slots.default=()=>n},Ag=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),lr(e,"_",n)):nd(e,t.slots={})}else t.slots={},e&&sd(t,e);lr(t.slots,Xr,1)},kg=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ye;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ce(i,e),!n&&a===1&&delete i._):(r=!e.$stable,nd(e,i)),o=e}else e&&(sd(t,e),o={default:1});if(r)for(const a in i)!td(a)&&!(a in o)&&delete i[a]};function ra(t,e,n,s,i=!1){if(V(t)){t.forEach((d,_)=>ra(d,e&&(V(e)?e[_]:e),n,s,i));return}if(Zi(s)&&!i)return;const r=s.shapeFlag&4?Zr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ye?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ae(c)?(u[c]=null,ne(h,c)&&(h[c]=null)):we(c)&&(c.value=null)),G(l))sn(l,a,12,[o,u]);else{const d=Ae(l),_=we(l);if(d||_){const m=()=>{if(t.f){const w=d?ne(h,l)?h[l]:u[l]:l.value;i?V(w)&&La(w,r):V(w)?w.includes(r)||w.push(r):d?(u[l]=[r],ne(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ne(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Ke(m,n)):m()}}}const Ke=Z_;function Pg(t){return Ng(t)}function Ng(t,e){const n=Go();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=ut,insertStaticContent:m}=t,w=(f,p,g,v=null,E=null,I=null,N=!1,C=null,R=!!p.dynamicChildren)=>{if(f===p)return;f&&!Cn(f,p)&&(v=y(f),qe(f,E,I,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:b,ref:H,shapeFlag:F}=p;switch(b){case Jr:k(f,p,g,v);break;case dt:P(f,p,g,v);break;case tr:f==null&&O(p,g,v,N);break;case it:L(f,p,g,v,E,I,N,C,R);break;default:F&1?Y(f,p,g,v,E,I,N,C,R):F&6?ie(f,p,g,v,E,I,N,C,R):(F&64||F&128)&&b.process(f,p,g,v,E,I,N,C,R,A)}H!=null&&E&&ra(H,f&&f.ref,I,p||f,!p)},k=(f,p,g,v)=>{if(f==null)s(p.el=a(p.children),g,v);else{const E=p.el=f.el;p.children!==f.children&&c(E,p.children)}},P=(f,p,g,v)=>{f==null?s(p.el=l(p.children||""),g,v):p.el=f.el},O=(f,p,g,v)=>{[f.el,f.anchor]=m(f.children,p,g,v,f.el,f.anchor)},z=({el:f,anchor:p},g,v)=>{let E;for(;f&&f!==p;)E=d(f),s(f,g,v),f=E;s(p,g,v)},M=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},Y=(f,p,g,v,E,I,N,C,R)=>{N=N||p.type==="svg",f==null?fe(p,g,v,E,I,N,C,R):U(f,p,E,I,N,C,R)},fe=(f,p,g,v,E,I,N,C)=>{let R,b;const{type:H,props:F,shapeFlag:W,transition:q,dirs:X}=f;if(R=f.el=o(f.type,I,F&&F.is,F),W&8?u(R,f.children):W&16&&x(f.children,R,null,v,E,I&&H!=="foreignObject",N,C),X&&gn(f,null,v,"created"),me(R,f,f.scopeId,N,v),F){for(const le in F)le!=="value"&&!Ji(le)&&r(R,le,null,F[le],I,f.children,v,E,De);"value"in F&&r(R,"value",null,F.value),(b=F.onVnodeBeforeMount)&&yt(b,v,f)}X&&gn(f,null,v,"beforeMount");const pe=(!E||E&&!E.pendingBranch)&&q&&!q.persisted;pe&&q.beforeEnter(R),s(R,p,g),((b=F&&F.onVnodeMounted)||pe||X)&&Ke(()=>{b&&yt(b,v,f),pe&&q.enter(R),X&&gn(f,null,v,"mounted")},E)},me=(f,p,g,v,E)=>{if(g&&_(f,g),v)for(let I=0;I<v.length;I++)_(f,v[I]);if(E){let I=E.subTree;if(p===I){const N=E.vnode;me(f,N,N.scopeId,N.slotScopeIds,E.parent)}}},x=(f,p,g,v,E,I,N,C,R=0)=>{for(let b=R;b<f.length;b++){const H=f[b]=C?Yt(f[b]):wt(f[b]);w(null,H,p,g,v,E,I,N,C)}},U=(f,p,g,v,E,I,N)=>{const C=p.el=f.el;let{patchFlag:R,dynamicChildren:b,dirs:H}=p;R|=f.patchFlag&16;const F=f.props||ye,W=p.props||ye;let q;g&&mn(g,!1),(q=W.onVnodeBeforeUpdate)&&yt(q,g,p,f),H&&gn(p,f,g,"beforeUpdate"),g&&mn(g,!0);const X=E&&p.type!=="foreignObject";if(b?K(f.dynamicChildren,b,C,g,v,X,I):N||re(f,p,C,null,g,v,X,I,!1),R>0){if(R&16)ue(C,p,F,W,g,v,E);else if(R&2&&F.class!==W.class&&r(C,"class",null,W.class,E),R&4&&r(C,"style",F.style,W.style,E),R&8){const pe=p.dynamicProps;for(let le=0;le<pe.length;le++){const Ie=pe[le],st=F[Ie],Kn=W[Ie];(Kn!==st||Ie==="value")&&r(C,Ie,st,Kn,E,f.children,g,v,De)}}R&1&&f.children!==p.children&&u(C,p.children)}else!N&&b==null&&ue(C,p,F,W,g,v,E);((q=W.onVnodeUpdated)||H)&&Ke(()=>{q&&yt(q,g,p,f),H&&gn(p,f,g,"updated")},v)},K=(f,p,g,v,E,I,N)=>{for(let C=0;C<p.length;C++){const R=f[C],b=p[C],H=R.el&&(R.type===it||!Cn(R,b)||R.shapeFlag&70)?h(R.el):g;w(R,b,H,null,v,E,I,N,!0)}},ue=(f,p,g,v,E,I,N)=>{if(g!==v){if(g!==ye)for(const C in g)!Ji(C)&&!(C in v)&&r(f,C,g[C],null,N,p.children,E,I,De);for(const C in v){if(Ji(C))continue;const R=v[C],b=g[C];R!==b&&C!=="value"&&r(f,C,b,R,N,p.children,E,I,De)}"value"in v&&r(f,"value",g.value,v.value)}},L=(f,p,g,v,E,I,N,C,R)=>{const b=p.el=f?f.el:a(""),H=p.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:W,slotScopeIds:q}=p;q&&(C=C?C.concat(q):q),f==null?(s(b,g,v),s(H,g,v),x(p.children,g,H,E,I,N,C,R)):F>0&&F&64&&W&&f.dynamicChildren?(K(f.dynamicChildren,W,g,E,I,N,C),(p.key!=null||E&&p===E.subTree)&&id(f,p,!0)):re(f,p,g,H,E,I,N,C,R)},ie=(f,p,g,v,E,I,N,C,R)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?E.ctx.activate(p,g,v,N,R):Oe(p,g,v,E,I,N,R):We(f,p,R)},Oe=(f,p,g,v,E,I,N)=>{const C=f.component=Vg(f,v,E);if(Yr(f)&&(C.ctx.renderer=A),$g(C),C.asyncDep){if(E&&E.registerDep(C,ee),!f.el){const R=C.subTree=be(dt);P(null,R,p,g)}return}ee(C,f,p,g,E,I,N)},We=(f,p,g)=>{const v=p.component=f.component;if(Q_(f,p,g))if(v.asyncDep&&!v.asyncResolved){he(v,p,g);return}else v.next=p,$_(v.update),v.update();else p.el=f.el,v.vnode=p},ee=(f,p,g,v,E,I,N)=>{const C=()=>{if(f.isMounted){let{next:H,bu:F,u:W,parent:q,vnode:X}=f,pe=H,le;mn(f,!1),H?(H.el=X.el,he(f,H,N)):H=X,F&&Xi(F),(le=H.props&&H.props.onVnodeBeforeUpdate)&&yt(le,q,H,X),mn(f,!0);const Ie=Eo(f),st=f.subTree;f.subTree=Ie,w(st,Ie,h(st.el),y(st),f,E,I),H.el=Ie.el,pe===null&&J_(f,Ie.el),W&&Ke(W,E),(le=H.props&&H.props.onVnodeUpdated)&&Ke(()=>yt(le,q,H,X),E)}else{let H;const{el:F,props:W}=p,{bm:q,m:X,parent:pe}=f,le=Zi(p);if(mn(f,!1),q&&Xi(q),!le&&(H=W&&W.onVnodeBeforeMount)&&yt(H,pe,p),mn(f,!0),F&&oe){const Ie=()=>{f.subTree=Eo(f),oe(F,f.subTree,f,E,null)};le?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ie()):Ie()}else{const Ie=f.subTree=Eo(f);w(null,Ie,g,v,f,E,I),p.el=Ie.el}if(X&&Ke(X,E),!le&&(H=W&&W.onVnodeMounted)){const Ie=p;Ke(()=>yt(H,pe,Ie),E)}(p.shapeFlag&256||pe&&Zi(pe.vnode)&&pe.vnode.shapeFlag&256)&&f.a&&Ke(f.a,E),f.isMounted=!0,p=g=v=null}},R=f.effect=new Ha(C,()=>Ga(b),f.scope),b=f.update=()=>R.run();b.id=f.uid,mn(f,!0),b()},he=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Sg(f,p.props,v,g),kg(f,p.children,g),ys(),cc(),Es()},re=(f,p,g,v,E,I,N,C,R=!1)=>{const b=f&&f.children,H=f?f.shapeFlag:0,F=p.children,{patchFlag:W,shapeFlag:q}=p;if(W>0){if(W&128){Vt(b,F,g,v,E,I,N,C,R);return}else if(W&256){Rt(b,F,g,v,E,I,N,C,R);return}}q&8?(H&16&&De(b,E,I),F!==b&&u(g,F)):H&16?q&16?Vt(b,F,g,v,E,I,N,C,R):De(b,E,I,!0):(H&8&&u(g,""),q&16&&x(F,g,v,E,I,N,C,R))},Rt=(f,p,g,v,E,I,N,C,R)=>{f=f||es,p=p||es;const b=f.length,H=p.length,F=Math.min(b,H);let W;for(W=0;W<F;W++){const q=p[W]=R?Yt(p[W]):wt(p[W]);w(f[W],q,g,null,E,I,N,C,R)}b>H?De(f,E,I,!0,!1,F):x(p,g,v,E,I,N,C,R,F)},Vt=(f,p,g,v,E,I,N,C,R)=>{let b=0;const H=p.length;let F=f.length-1,W=H-1;for(;b<=F&&b<=W;){const q=f[b],X=p[b]=R?Yt(p[b]):wt(p[b]);if(Cn(q,X))w(q,X,g,null,E,I,N,C,R);else break;b++}for(;b<=F&&b<=W;){const q=f[F],X=p[W]=R?Yt(p[W]):wt(p[W]);if(Cn(q,X))w(q,X,g,null,E,I,N,C,R);else break;F--,W--}if(b>F){if(b<=W){const q=W+1,X=q<H?p[q].el:v;for(;b<=W;)w(null,p[b]=R?Yt(p[b]):wt(p[b]),g,X,E,I,N,C,R),b++}}else if(b>W)for(;b<=F;)qe(f[b],E,I,!0),b++;else{const q=b,X=b,pe=new Map;for(b=X;b<=W;b++){const Ze=p[b]=R?Yt(p[b]):wt(p[b]);Ze.key!=null&&pe.set(Ze.key,b)}let le,Ie=0;const st=W-X+1;let Kn=!1,Ql=0;const As=new Array(st);for(b=0;b<st;b++)As[b]=0;for(b=q;b<=F;b++){const Ze=f[b];if(Ie>=st){qe(Ze,E,I,!0);continue}let vt;if(Ze.key!=null)vt=pe.get(Ze.key);else for(le=X;le<=W;le++)if(As[le-X]===0&&Cn(Ze,p[le])){vt=le;break}vt===void 0?qe(Ze,E,I,!0):(As[vt-X]=b+1,vt>=Ql?Ql=vt:Kn=!0,w(Ze,p[vt],g,null,E,I,N,C,R),Ie++)}const Jl=Kn?Og(As):es;for(le=Jl.length-1,b=st-1;b>=0;b--){const Ze=X+b,vt=p[Ze],Xl=Ze+1<H?p[Ze+1].el:v;As[b]===0?w(null,vt,g,Xl,E,I,N,C,R):Kn&&(le<0||b!==Jl[le]?mt(vt,g,Xl,2):le--)}}},mt=(f,p,g,v,E=null)=>{const{el:I,type:N,transition:C,children:R,shapeFlag:b}=f;if(b&6){mt(f.component.subTree,p,g,v);return}if(b&128){f.suspense.move(p,g,v);return}if(b&64){N.move(f,p,g,A);return}if(N===it){s(I,p,g);for(let F=0;F<R.length;F++)mt(R[F],p,g,v);s(f.anchor,p,g);return}if(N===tr){z(f,p,g);return}if(v!==2&&b&1&&C)if(v===0)C.beforeEnter(I),s(I,p,g),Ke(()=>C.enter(I),E);else{const{leave:F,delayLeave:W,afterLeave:q}=C,X=()=>s(I,p,g),pe=()=>{F(I,()=>{X(),q&&q()})};W?W(I,X,pe):pe()}else s(I,p,g)},qe=(f,p,g,v=!1,E=!1)=>{const{type:I,props:N,ref:C,children:R,dynamicChildren:b,shapeFlag:H,patchFlag:F,dirs:W}=f;if(C!=null&&ra(C,null,g,f,!0),H&256){p.ctx.deactivate(f);return}const q=H&1&&W,X=!Zi(f);let pe;if(X&&(pe=N&&N.onVnodeBeforeUnmount)&&yt(pe,p,f),H&6)Bi(f.component,g,v);else{if(H&128){f.suspense.unmount(g,v);return}q&&gn(f,null,p,"beforeUnmount"),H&64?f.type.remove(f,p,g,E,A,v):b&&(I!==it||F>0&&F&64)?De(b,p,g,!1,!0):(I===it&&F&384||!E&&H&16)&&De(R,p,g),v&&zn(f)}(X&&(pe=N&&N.onVnodeUnmounted)||q)&&Ke(()=>{pe&&yt(pe,p,f),q&&gn(f,null,p,"unmounted")},g)},zn=f=>{const{type:p,el:g,anchor:v,transition:E}=f;if(p===it){qn(g,v);return}if(p===tr){M(f);return}const I=()=>{i(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:N,delayLeave:C}=E,R=()=>N(g,I);C?C(f.el,I,R):R()}else I()},qn=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Bi=(f,p,g)=>{const{bum:v,scope:E,update:I,subTree:N,um:C}=f;v&&Xi(v),E.stop(),I&&(I.active=!1,qe(N,f,p,g)),C&&Ke(C,p),Ke(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},De=(f,p,g,v=!1,E=!1,I=0)=>{for(let N=I;N<f.length;N++)qe(f[N],p,g,v,E)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),D=(f,p,g)=>{f==null?p._vnode&&qe(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,g),cc(),Fh(),p._vnode=f},A={p:w,um:qe,m:mt,r:zn,mt:Oe,mc:x,pc:re,pbc:K,n:y,o:t};let B,oe;return e&&([B,oe]=e(A)),{render:D,hydrate:B,createApp:bg(D,B)}}function mn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function id(t,e,n=!1){const s=t.children,i=e.children;if(V(s)&&V(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Yt(i[r]),a.el=o.el),n||id(o,a)),a.type===Jr&&(a.el=o.el)}}function Og(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const xg=t=>t.__isTeleport,it=Symbol.for("v-fgt"),Jr=Symbol.for("v-txt"),dt=Symbol.for("v-cmt"),tr=Symbol.for("v-stc"),zs=[];let at=null;function Me(t=!1){zs.push(at=t?null:[])}function Dg(){zs.pop(),at=zs[zs.length-1]||null}let ai=1;function wc(t){ai+=t}function rd(t){return t.dynamicChildren=ai>0?at||es:null,Dg(),ai>0&&at&&at.push(t),t}function je(t,e,n,s,i,r){return rd(T(t,e,n,s,i,r,!0))}function Mg(t,e,n,s,i){return rd(be(t,e,n,s,i,!0))}function oa(t){return t?t.__v_isVNode===!0:!1}function Cn(t,e){return t.type===e.type&&t.key===e.key}const Xr="__vInternal",od=({key:t})=>t??null,nr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ae(t)||we(t)||G(t)?{i:Ge,r:t,k:e,f:!!n}:t:null);function T(t,e=null,n=null,s=0,i=null,r=t===it?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&od(e),ref:e&&nr(e),scopeId:qr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ge};return a?(el(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ae(n)?8:16),ai>0&&!o&&at&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&at.push(l),l}const be=Lg;function Lg(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===pg)&&(t=dt),oa(t)){const a=hn(t,e,!0);return n&&el(a,n),ai>0&&!r&&at&&(a.shapeFlag&6?at[at.indexOf(t)]=a:at.push(a)),a.patchFlag|=-2,a}if(Yg(t)&&(t=t.__vccOpts),e){e=Fg(e);let{class:a,style:l}=e;a&&!Ae(a)&&(e.class=Ci(a)),ge(l)&&(Ph(l)&&!V(l)&&(l=Ce({},l)),e.style=Ua(l))}const o=Ae(t)?1:X_(t)?128:xg(t)?64:ge(t)?4:G(t)?2:0;return T(t,e,n,s,i,o,r,!0)}function Fg(t){return t?Ph(t)||Xr in t?Ce({},t):t:null}function hn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Bg(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&od(a),ref:e&&e.ref?n&&i?V(i)?i.concat(nr(e)):[i,nr(e)]:nr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hn(t.ssContent),ssFallback:t.ssFallback&&hn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Be(t=" ",e=0){return be(Jr,null,t,e)}function Ug(t,e){const n=be(tr,null,t);return n.staticCount=e,n}function qs(t="",e=!1){return e?(Me(),Mg(dt,null,t)):be(dt,null,t)}function wt(t){return t==null||typeof t=="boolean"?be(dt):V(t)?be(it,null,t.slice()):typeof t=="object"?Yt(t):be(Jr,null,String(t))}function Yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hn(t)}function el(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),el(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Xr in e)?e._ctx=Ge:i===3&&Ge&&(Ge.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:Ge},n=32):(e=String(e),s&64?(n=16,e=[Be(e)]):n=8);t.children=e,t.shapeFlag|=n}function Bg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ci([e.class,s.class]));else if(i==="style")e.style=Ua([e.style,s.style]);else if(Fr(i)){const r=e[i],o=s[i];o&&r!==o&&!(V(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function yt(t,e,n,s=null){nt(t,e,7,[n,s])}const Hg=Xh();let Wg=0;function Vg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Hg,r={uid:Wg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new _h(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ed(s,i),emitsOptions:Bh(s,i),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:s.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=K_.bind(null,r),t.ce&&t.ce(r),r}let Te=null;const jg=()=>Te||Ge;let tl,Gn,Ic="__VUE_INSTANCE_SETTERS__";(Gn=Go()[Ic])||(Gn=Go()[Ic]=[]),Gn.push(t=>Te=t),tl=t=>{Gn.length>1?Gn.forEach(e=>e(t)):Gn[0](t)};const cs=t=>{tl(t),t.scope.on()},Nn=()=>{Te&&Te.scope.off(),tl(null)};function ad(t){return t.vnode.shapeFlag&4}let li=!1;function $g(t,e=!1){li=e;const{props:n,children:s}=t.vnode,i=ad(t);Tg(t,n,i,e),Ag(t,s);const r=i?zg(t,e):void 0;return li=!1,r}function zg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=jr(new Proxy(t.ctx,gg));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Kg(t):null;cs(t),ys();const r=sn(s,t,0,[t.props,i]);if(Es(),Nn(),ch(r)){if(r.then(Nn,Nn),e)return r.then(o=>{bc(t,o,e)}).catch(o=>{$r(o,t,0)});t.asyncDep=r}else bc(t,r,e)}else ld(t,e)}function bc(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=Dh(e)),ld(t,n)}let Cc;function ld(t,e,n){const s=t.type;if(!t.render){if(!e&&Cc&&!s.render){const i=s.template||Xa(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ce(Ce({isCustomElement:r,delimiters:a},o),l);s.render=Cc(i,c)}}t.render=s.render||ut}cs(t),ys(),mg(t),Es(),Nn()}function qg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Je(t,"get","$attrs"),e[n]}}))}function Kg(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return qg(t)},slots:t.slots,emit:t.emit,expose:e}}function Zr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Dh(jr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $s)return $s[n](t)},has(e,n){return n in e||n in $s}}))}function Gg(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function Yg(t){return G(t)&&"__vccOpts"in t}const Ue=(t,e)=>W_(t,e,li);function nl(t,e,n){const s=arguments.length;return s===2?ge(e)&&!V(e)?oa(e)?be(t,null,[e]):be(t,e):be(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&oa(n)&&(n=[n]),be(t,e,n))}const Qg=Symbol.for("v-scx"),Jg=()=>ht(Qg),Xg="3.3.4",Zg="http://www.w3.org/2000/svg",Tn=typeof document<"u"?document:null,Tc=Tn&&Tn.createElement("template"),em={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Tn.createElementNS(Zg,t):Tn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Tn.createTextNode(t),createComment:t=>Tn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Tc.innerHTML=s?`<svg>${t}</svg>`:t;const a=Tc.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function tm(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function nm(t,e,n){const s=t.style,i=Ae(n);if(n&&!i){if(e&&!Ae(e))for(const r in e)n[r]==null&&aa(s,r,"");for(const r in n)aa(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Sc=/\s*!important$/;function aa(t,e,n){if(V(n))n.forEach(s=>aa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=sm(t,e);Sc.test(n)?t.setProperty(vs(s),n.replace(Sc,""),"important"):t[s]=n}}const Rc=["Webkit","Moz","ms"],bo={};function sm(t,e){const n=bo[e];if(n)return n;let s=Tt(e);if(s!=="filter"&&s in t)return bo[e]=s;s=Hr(s);for(let i=0;i<Rc.length;i++){const r=Rc[i]+s;if(r in t)return bo[e]=r}return e}const Ac="http://www.w3.org/1999/xlink";function im(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ac,e.slice(6,e.length)):t.setAttributeNS(Ac,e,n);else{const r=s_(e);n==null||r&&!dh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function rm(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=dh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Sn(t,e,n,s){t.addEventListener(e,n,s)}function om(t,e,n,s){t.removeEventListener(e,n,s)}function am(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=lm(e);if(s){const c=r[e]=hm(s,i);Sn(t,a,c,l)}else o&&(om(t,a,o,l),r[e]=void 0)}}const kc=/(?:Once|Passive|Capture)$/;function lm(t){let e;if(kc.test(t)){e={};let s;for(;s=t.match(kc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vs(t.slice(2)),e]}let Co=0;const cm=Promise.resolve(),um=()=>Co||(cm.then(()=>Co=0),Co=Date.now());function hm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;nt(dm(s,n.value),e,5,[s])};return n.value=t,n.attached=um(),n}function dm(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Pc=/^on[a-z]/,fm=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?tm(t,s,i):e==="style"?nm(t,n,s):Fr(e)?Ma(e)||am(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pm(t,e,s,i))?rm(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),im(t,e,s,i))};function pm(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Pc.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Pc.test(e)&&Ae(n)?!1:e in t}const $t="transition",ks="animation",sl=(t,{slots:e})=>nl(sg,_m(t),e);sl.displayName="Transition";const cd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};sl.props=Ce({},jh,cd);const vn=(t,e=[])=>{V(t)?t.forEach(n=>n(...e)):t&&t(...e)},Nc=t=>t?V(t)?t.some(e=>e.length>1):t.length>1:!1;function _m(t){const e={};for(const L in t)L in cd||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,m=gm(i),w=m&&m[0],k=m&&m[1],{onBeforeEnter:P,onEnter:O,onEnterCancelled:z,onLeave:M,onLeaveCancelled:Y,onBeforeAppear:fe=P,onAppear:me=O,onAppearCancelled:x=z}=e,U=(L,ie,Oe)=>{yn(L,ie?u:a),yn(L,ie?c:o),Oe&&Oe()},K=(L,ie)=>{L._isLeaving=!1,yn(L,h),yn(L,_),yn(L,d),ie&&ie()},ue=L=>(ie,Oe)=>{const We=L?me:O,ee=()=>U(ie,L,Oe);vn(We,[ie,ee]),Oc(()=>{yn(ie,L?l:r),zt(ie,L?u:a),Nc(We)||xc(ie,s,w,ee)})};return Ce(e,{onBeforeEnter(L){vn(P,[L]),zt(L,r),zt(L,o)},onBeforeAppear(L){vn(fe,[L]),zt(L,l),zt(L,c)},onEnter:ue(!1),onAppear:ue(!0),onLeave(L,ie){L._isLeaving=!0;const Oe=()=>K(L,ie);zt(L,h),ym(),zt(L,d),Oc(()=>{L._isLeaving&&(yn(L,h),zt(L,_),Nc(M)||xc(L,s,k,Oe))}),vn(M,[L,Oe])},onEnterCancelled(L){U(L,!1),vn(z,[L])},onAppearCancelled(L){U(L,!0),vn(x,[L])},onLeaveCancelled(L){K(L),vn(Y,[L])}})}function gm(t){if(t==null)return null;if(ge(t))return[To(t.enter),To(t.leave)];{const e=To(t);return[e,e]}}function To(t){return Jp(t)}function zt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function yn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Oc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let mm=0;function xc(t,e,n,s){const i=t._endId=++mm,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=vm(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=_=>{_.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function vm(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${$t}Delay`),r=s(`${$t}Duration`),o=Dc(i,r),a=s(`${ks}Delay`),l=s(`${ks}Duration`),c=Dc(a,l);let u=null,h=0,d=0;e===$t?o>0&&(u=$t,h=o,d=r.length):e===ks?c>0&&(u=ks,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?$t:ks:null,d=u?u===$t?r.length:l.length:0);const _=u===$t&&/\b(transform|all)(,|$)/.test(s(`${$t}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:_}}function Dc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Mc(n)+Mc(t[s])))}function Mc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function ym(){return document.body.offsetHeight}const fr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>Xi(e,n):e};function Em(t){t.target.composing=!0}function Lc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ps={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=fr(i);const r=s||i.props&&i.props.type==="number";Sn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Ko(a)),t._assign(a)}),n&&Sn(t,"change",()=>{t.value=t.value.trim()}),e||(Sn(t,"compositionstart",Em),Sn(t,"compositionend",Lc),Sn(t,"change",Lc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=fr(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ko(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},wm={deep:!0,created(t,e,n){t._assign=fr(n),Sn(t,"change",()=>{const s=t._modelValue,i=Im(t),r=t.checked,o=t._assign;if(V(s)){const a=fh(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Ur(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(ud(t,r))})},mounted:Fc,beforeUpdate(t,e,n){t._assign=fr(n),Fc(t,e,n)}};function Fc(t,{value:e,oldValue:n},s){t._modelValue=e,V(e)?t.checked=fh(e,s.props.value)>-1:Ur(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Wr(e,ud(t,!0)))}function Im(t){return"_value"in t?t._value:t.value}function ud(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const bm=["ctrl","shift","alt","meta"],Cm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>bm.some(n=>t[`${n}Key`]&&!e.includes(n))},Hs=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Cm[e[i]];if(r&&r(n,e))return}return t(n,...s)},Tm={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ns(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ns(t,!0),s.enter(t)):s.leave(t,()=>{Ns(t,!1)}):Ns(t,e))},beforeUnmount(t,{value:e}){Ns(t,e)}};function Ns(t,e){t.style.display=e?t._vod:"none"}const Sm=Ce({patchProp:fm},em);let Uc;function Rm(){return Uc||(Uc=Pg(Sm))}const Am=(...t)=>{const e=Rm().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=km(s);if(!i)return;const r=e._component;!G(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function km(t){return Ae(t)?document.querySelector(t):t}var Pm=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let hd;const eo=t=>hd=t,dd=Symbol();function la(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ks;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ks||(Ks={}));function Nm(){const t=gh(!0),e=t.run(()=>Dt({}));let n=[],s=[];const i=jr({install(r){eo(i),i._a=r,r.provide(dd,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Pm?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const fd=()=>{};function Bc(t,e,n,s=fd){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&mh()&&o_(i),i}function Yn(t,...e){t.slice().forEach(n=>{n(...e)})}const Om=t=>t();function ca(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];la(i)&&la(s)&&t.hasOwnProperty(n)&&!we(s)&&!nn(s)?t[n]=ca(i,s):t[n]=s}return t}const xm=Symbol();function Dm(t){return!la(t)||!t.hasOwnProperty(xm)}const{assign:Gt}=Object;function Mm(t){return!!(we(t)&&t.effect)}function Lm(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=F_(n.state.value[t]);return Gt(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=jr(Ue(()=>{eo(n);const _=n._s.get(t);return o[d].call(_,_)})),h),{}))}return l=pd(t,c,e,n,s,!0),l}function pd(t,e,n={},s,i,r){let o;const a=Gt({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],_;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),Dt({});let w;function k(x){let U;c=u=!1,typeof x=="function"?(x(s.state.value[t]),U={type:Ks.patchFunction,storeId:t,events:_}):(ca(s.state.value[t],x),U={type:Ks.patchObject,payload:x,storeId:t,events:_});const K=w=Symbol();Ka().then(()=>{w===K&&(c=!0)}),u=!0,Yn(h,U,s.state.value[t])}const P=r?function(){const{state:U}=n,K=U?U():{};this.$patch(ue=>{Gt(ue,K)})}:fd;function O(){o.stop(),h=[],d=[],s._s.delete(t)}function z(x,U){return function(){eo(s);const K=Array.from(arguments),ue=[],L=[];function ie(ee){ue.push(ee)}function Oe(ee){L.push(ee)}Yn(d,{args:K,name:x,store:Y,after:ie,onError:Oe});let We;try{We=U.apply(this&&this.$id===t?this:Y,K)}catch(ee){throw Yn(L,ee),ee}return We instanceof Promise?We.then(ee=>(Yn(ue,ee),ee)).catch(ee=>(Yn(L,ee),Promise.reject(ee))):(Yn(ue,We),We)}}const M={_p:s,$id:t,$onAction:Bc.bind(null,d),$patch:k,$reset:P,$subscribe(x,U={}){const K=Bc(h,x,U.detached,()=>ue()),ue=o.run(()=>js(()=>s.state.value[t],L=>{(U.flush==="sync"?u:c)&&x({storeId:t,type:Ks.direct,events:_},L)},Gt({},l,U)));return K},$dispose:O},Y=Ti(M);s._s.set(t,Y);const fe=s._a&&s._a.runWithContext||Om,me=s._e.run(()=>(o=gh(),fe(()=>o.run(e))));for(const x in me){const U=me[x];if(we(U)&&!Mm(U)||nn(U))r||(m&&Dm(U)&&(we(U)?U.value=m[x]:ca(U,m[x])),s.state.value[t][x]=U);else if(typeof U=="function"){const K=z(x,U);me[x]=K,a.actions[x]=U}}return Gt(Y,me),Gt(te(Y),me),Object.defineProperty(Y,"$state",{get:()=>s.state.value[t],set:x=>{k(U=>{Gt(U,x)})}}),s._p.forEach(x=>{Gt(Y,o.run(()=>x({store:Y,app:s._a,pinia:s,options:a})))}),m&&r&&n.hydrate&&n.hydrate(Y.$state,m),c=!0,u=!0,Y}function Fm(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=Cg();return a=a||(c?ht(dd,null):null),a&&eo(a),a=hd,a._s.has(s)||(r?pd(s,e,i,a):Lm(s,i,a)),a._s.get(s)}return o.$id=s,o}const Um="modulepreload",Bm=function(t,e){return new URL(t,e).href},Hc={},Hm=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=Bm(r,s),r in Hc)return;Hc[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Um,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Jn=typeof window<"u";function Wm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function So(t,e){const n={};for(const s in e){const i=e[s];n[s]=pt(i)?i.map(t):t(i)}return n}const Gs=()=>{},pt=Array.isArray,Vm=/\/$/,jm=t=>t.replace(Vm,"");function Ro(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Km(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function $m(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zm(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&us(e.matched[s],n.matched[i])&&_d(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function us(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _d(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!qm(t[n],e[n]))return!1;return!0}function qm(t,e){return pt(t)?Vc(t,e):pt(e)?Vc(e,t):t===e}function Vc(t,e){return pt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Km(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ci;(function(t){t.pop="pop",t.push="push"})(ci||(ci={}));var Ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ys||(Ys={}));function Gm(t){if(!t)if(Jn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jm(t)}const Ym=/^[^#]+#/;function Qm(t,e){return t.replace(Ym,"#")+e}function Jm(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const to=()=>({left:window.pageXOffset,top:window.pageYOffset});function Xm(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Jm(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function jc(t,e){return(history.state?history.state.position-e:-1)+t}const ua=new Map;function Zm(t,e){ua.set(t,e)}function ev(t){const e=ua.get(t);return ua.delete(t),e}let tv=()=>location.protocol+"//"+location.host;function gd(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Wc(l,"")}return Wc(n,t)+s+i}function nv(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=gd(t,location),m=n.value,w=e.value;let k=0;if(d){if(n.value=_,e.value=d,o&&o===m){o=null;return}k=w?d.position-w.position:0}else s(_);i.forEach(P=>{P(n.value,m,{delta:k,type:ci.pop,direction:k?k>0?Ys.forward:Ys.back:Ys.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(ae({},d.state,{scroll:to()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function $c(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?to():null}}function sv(t){const{history:e,location:n}=window,s={value:gd(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:tv()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=ae({},e.state,$c(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ae({},i.value,e.state,{forward:l,scroll:to()});r(u.current,u,!0);const h=ae({},$c(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function iv(t){t=Gm(t);const e=sv(t),n=nv(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ae({location:"",base:t,go:s,createHref:Qm.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function rv(t){return typeof t=="string"||t&&typeof t=="object"}function md(t){return typeof t=="string"||typeof t=="symbol"}const qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vd=Symbol("");var zc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zc||(zc={}));function hs(t,e){return ae(new Error,{type:t,[vd]:!0},e)}function At(t,e){return t instanceof Error&&vd in t&&(e==null||!!(t.type&e))}const qc="[^/]+?",ov={sensitive:!1,strict:!1,start:!0,end:!0},av=/[.+*?^${}()[\]/\\]/g;function lv(t,e){const n=ae({},ov,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(av,"\\$&"),_+=40;else if(d.type===1){const{value:m,repeatable:w,optional:k,regexp:P}=d;r.push({name:m,repeatable:w,optional:k});const O=P||qc;if(O!==qc){_+=10;try{new RegExp(`(${O})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+M.message)}}let z=w?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(z=k&&c.length<2?`(?:/${z})`:"/"+z),k&&(z+="?"),i+=z,_+=20,k&&(_+=-8),w&&(_+=-20),O===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",m=r[d-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:w,optional:k}=_,P=m in c?c[m]:"";if(pt(P)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=pt(P)?P.join("/"):P;if(!O)if(k)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function cv(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function uv(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=cv(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Kc(s))return 1;if(Kc(i))return-1}return i.length-s.length}function Kc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const hv={type:0,value:""},dv=/[a-zA-Z0-9_]/;function fv(t){if(!t)return[[]];if(t==="/")return[[hv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:dv.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function pv(t,e,n){const s=lv(fv(t.path),n),i=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function _v(t,e){const n=[],s=new Map;e=Qc({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,m=gv(u);m.aliasOf=d&&d.record;const w=Qc(e,u),k=[m];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of z)k.push(ae({},m,{components:d?d.record.components:m.components,path:M,aliasOf:d?d.record:m}))}let P,O;for(const z of k){const{path:M}=z;if(h&&M[0]!=="/"){const Y=h.record.path,fe=Y[Y.length-1]==="/"?"":"/";z.path=h.record.path+(M&&fe+M)}if(P=pv(z,h,w),d?d.alias.push(P):(O=O||P,O!==P&&O.alias.push(P),_&&u.name&&!Yc(P)&&o(u.name)),m.children){const Y=m.children;for(let fe=0;fe<Y.length;fe++)r(Y[fe],P,d&&d.children[fe])}d=d||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&l(P)}return O?()=>{o(O)}:Gs}function o(u){if(md(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&uv(u,n[h])>=0&&(u.record.path!==n[h].record.path||!yd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Yc(u)&&s.set(u.record.name,u)}function c(u,h){let d,_={},m,w;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw hs(1,{location:u});w=d.record.name,_=ae(Gc(h.params,d.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&Gc(u.params,d.keys.map(O=>O.name))),m=d.stringify(_)}else if("path"in u)m=u.path,d=n.find(O=>O.re.test(m)),d&&(_=d.parse(m),w=d.record.name);else{if(d=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw hs(1,{location:u,currentLocation:h});w=d.record.name,_=ae({},h.params,u.params),m=d.stringify(_)}const k=[];let P=d;for(;P;)k.unshift(P.record),P=P.parent;return{name:w,path:m,params:_,matched:k,meta:vv(k)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Gc(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function gv(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:mv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function mv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Yc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function vv(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function Qc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function yd(t,e){return e.children.some(n=>n===t||yd(t,n))}const Ed=/#/g,yv=/&/g,Ev=/\//g,wv=/=/g,Iv=/\?/g,wd=/\+/g,bv=/%5B/g,Cv=/%5D/g,Id=/%5E/g,Tv=/%60/g,bd=/%7B/g,Sv=/%7C/g,Cd=/%7D/g,Rv=/%20/g;function il(t){return encodeURI(""+t).replace(Sv,"|").replace(bv,"[").replace(Cv,"]")}function Av(t){return il(t).replace(bd,"{").replace(Cd,"}").replace(Id,"^")}function ha(t){return il(t).replace(wd,"%2B").replace(Rv,"+").replace(Ed,"%23").replace(yv,"%26").replace(Tv,"`").replace(bd,"{").replace(Cd,"}").replace(Id,"^")}function kv(t){return ha(t).replace(wv,"%3D")}function Pv(t){return il(t).replace(Ed,"%23").replace(Iv,"%3F")}function Nv(t){return t==null?"":Pv(t).replace(Ev,"%2F")}function pr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Ov(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(wd," "),o=r.indexOf("="),a=pr(o<0?r:r.slice(0,o)),l=o<0?null:pr(r.slice(o+1));if(a in e){let c=e[a];pt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Jc(t){let e="";for(let n in t){const s=t[n];if(n=kv(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(pt(s)?s.map(r=>r&&ha(r)):[s&&ha(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function xv(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=pt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Dv=Symbol(""),Xc=Symbol(""),no=Symbol(""),Td=Symbol(""),da=Symbol("");function Os(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(hs(4,{from:n,to:e})):h instanceof Error?a(h):rv(h)?a(hs(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Ao(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Mv(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Qt(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Wm(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Qt(d,n,s,r,o)()}))}}return i}function Mv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Zc(t){const e=ht(no),n=ht(Td),s=Ue(()=>e.resolve(xe(t.to))),i=Ue(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(us.bind(null,u));if(d>-1)return d;const _=eu(l[c-2]);return c>1&&eu(u)===_&&h[h.length-1].path!==_?h.findIndex(us.bind(null,l[c-2])):d}),r=Ue(()=>i.value>-1&&Bv(n.params,s.value.params)),o=Ue(()=>i.value>-1&&i.value===n.matched.length-1&&_d(n.params,s.value.params));function a(l={}){return Uv(l)?e[xe(t.replace)?"replace":"push"](xe(t.to)).catch(Gs):Promise.resolve()}return{route:s,href:Ue(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const Lv=qh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zc,setup(t,{slots:e}){const n=Ti(Zc(t)),{options:s}=ht(no),i=Ue(()=>({[tu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[tu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:nl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Fv=Lv;function Uv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Bv(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!pt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function eu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const tu=(t,e,n)=>t??e??n,Hv=qh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ht(da),i=Ue(()=>t.route||s.value),r=ht(Xc,0),o=Ue(()=>{let c=xe(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ue(()=>i.value.matched[o.value]);er(Xc,Ue(()=>o.value+1)),er(Dv,a),er(da,i);const l=Dt();return js(()=>[l.value,a.value,t.name],([c,u,h],[d,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!us(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return nu(n.default,{Component:d,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,k=nl(d,ae({},m,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return nu(n.default,{Component:k,route:c})||k}}});function nu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Wv=Hv;function Vv(t){const e=_v(t.routes,t),n=t.parseQuery||Ov,s=t.stringifyQuery||Jc,i=t.history,r=Os(),o=Os(),a=Os(),l=D_(qt);let c=qt;Jn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=So.bind(null,y=>""+y),h=So.bind(null,Nv),d=So.bind(null,pr);function _(y,D){let A,B;return md(y)?(A=e.getRecordMatcher(y),B=D):B=y,e.addRoute(B,A)}function m(y){const D=e.getRecordMatcher(y);D&&e.removeRoute(D)}function w(){return e.getRoutes().map(y=>y.record)}function k(y){return!!e.getRecordMatcher(y)}function P(y,D){if(D=ae({},D||l.value),typeof y=="string"){const g=Ro(n,y,D.path),v=e.resolve({path:g.path},D),E=i.createHref(g.fullPath);return ae(g,v,{params:d(v.params),hash:pr(g.hash),redirectedFrom:void 0,href:E})}let A;if("path"in y)A=ae({},y,{path:Ro(n,y.path,D.path).path});else{const g=ae({},y.params);for(const v in g)g[v]==null&&delete g[v];A=ae({},y,{params:h(g)}),D.params=h(D.params)}const B=e.resolve(A,D),oe=y.hash||"";B.params=u(d(B.params));const f=$m(s,ae({},y,{hash:Av(oe),path:B.path})),p=i.createHref(f);return ae({fullPath:f,hash:oe,query:s===Jc?xv(y.query):y.query||{}},B,{redirectedFrom:void 0,href:p})}function O(y){return typeof y=="string"?Ro(n,y,l.value.path):ae({},y)}function z(y,D){if(c!==y)return hs(8,{from:D,to:y})}function M(y){return me(y)}function Y(y){return M(ae(O(y),{replace:!0}))}function fe(y){const D=y.matched[y.matched.length-1];if(D&&D.redirect){const{redirect:A}=D;let B=typeof A=="function"?A(y):A;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=O(B):{path:B},B.params={}),ae({query:y.query,hash:y.hash,params:"path"in B?{}:y.params},B)}}function me(y,D){const A=c=P(y),B=l.value,oe=y.state,f=y.force,p=y.replace===!0,g=fe(A);if(g)return me(ae(O(g),{state:typeof g=="object"?ae({},oe,g.state):oe,force:f,replace:p}),D||A);const v=A;v.redirectedFrom=D;let E;return!f&&zm(s,B,A)&&(E=hs(16,{to:v,from:B}),mt(B,B,!0,!1)),(E?Promise.resolve(E):K(v,B)).catch(I=>At(I)?At(I,2)?I:Vt(I):re(I,v,B)).then(I=>{if(I){if(At(I,2))return me(ae({replace:p},O(I.to),{state:typeof I.to=="object"?ae({},oe,I.to.state):oe,force:f}),D||v)}else I=L(v,B,!0,p,oe);return ue(v,B,I),I})}function x(y,D){const A=z(y,D);return A?Promise.reject(A):Promise.resolve()}function U(y){const D=qn.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(y):y()}function K(y,D){let A;const[B,oe,f]=jv(y,D);A=Ao(B.reverse(),"beforeRouteLeave",y,D);for(const g of B)g.leaveGuards.forEach(v=>{A.push(Qt(v,y,D))});const p=x.bind(null,y,D);return A.push(p),De(A).then(()=>{A=[];for(const g of r.list())A.push(Qt(g,y,D));return A.push(p),De(A)}).then(()=>{A=Ao(oe,"beforeRouteUpdate",y,D);for(const g of oe)g.updateGuards.forEach(v=>{A.push(Qt(v,y,D))});return A.push(p),De(A)}).then(()=>{A=[];for(const g of f)if(g.beforeEnter)if(pt(g.beforeEnter))for(const v of g.beforeEnter)A.push(Qt(v,y,D));else A.push(Qt(g.beforeEnter,y,D));return A.push(p),De(A)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),A=Ao(f,"beforeRouteEnter",y,D),A.push(p),De(A))).then(()=>{A=[];for(const g of o.list())A.push(Qt(g,y,D));return A.push(p),De(A)}).catch(g=>At(g,8)?g:Promise.reject(g))}function ue(y,D,A){a.list().forEach(B=>U(()=>B(y,D,A)))}function L(y,D,A,B,oe){const f=z(y,D);if(f)return f;const p=D===qt,g=Jn?history.state:{};A&&(B||p?i.replace(y.fullPath,ae({scroll:p&&g&&g.scroll},oe)):i.push(y.fullPath,oe)),l.value=y,mt(y,D,A,p),Vt()}let ie;function Oe(){ie||(ie=i.listen((y,D,A)=>{if(!Bi.listening)return;const B=P(y),oe=fe(B);if(oe){me(ae(oe,{replace:!0}),B).catch(Gs);return}c=B;const f=l.value;Jn&&Zm(jc(f.fullPath,A.delta),to()),K(B,f).catch(p=>At(p,12)?p:At(p,2)?(me(p.to,B).then(g=>{At(g,20)&&!A.delta&&A.type===ci.pop&&i.go(-1,!1)}).catch(Gs),Promise.reject()):(A.delta&&i.go(-A.delta,!1),re(p,B,f))).then(p=>{p=p||L(B,f,!1),p&&(A.delta&&!At(p,8)?i.go(-A.delta,!1):A.type===ci.pop&&At(p,20)&&i.go(-1,!1)),ue(B,f,p)}).catch(Gs)}))}let We=Os(),ee=Os(),he;function re(y,D,A){Vt(y);const B=ee.list();return B.length?B.forEach(oe=>oe(y,D,A)):console.error(y),Promise.reject(y)}function Rt(){return he&&l.value!==qt?Promise.resolve():new Promise((y,D)=>{We.add([y,D])})}function Vt(y){return he||(he=!y,Oe(),We.list().forEach(([D,A])=>y?A(y):D()),We.reset()),y}function mt(y,D,A,B){const{scrollBehavior:oe}=t;if(!Jn||!oe)return Promise.resolve();const f=!A&&ev(jc(y.fullPath,0))||(B||!A)&&history.state&&history.state.scroll||null;return Ka().then(()=>oe(y,D,f)).then(p=>p&&Xm(p)).catch(p=>re(p,y,D))}const qe=y=>i.go(y);let zn;const qn=new Set,Bi={currentRoute:l,listening:!0,addRoute:_,removeRoute:m,hasRoute:k,getRoutes:w,resolve:P,options:t,push:M,replace:Y,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:Rt,install(y){const D=this;y.component("RouterLink",Fv),y.component("RouterView",Wv),y.config.globalProperties.$router=D,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>xe(l)}),Jn&&!zn&&l.value===qt&&(zn=!0,M(i.location).catch(oe=>{}));const A={};for(const oe in qt)Object.defineProperty(A,oe,{get:()=>l.value[oe],enumerable:!0});y.provide(no,D),y.provide(Td,Ah(A)),y.provide(da,l);const B=y.unmount;qn.add(y),y.unmount=function(){qn.delete(y),qn.size<1&&(c=qt,ie&&ie(),ie=null,l.value=qt,zn=!1,he=!1),B()}}};function De(y){return y.reduce((D,A)=>D.then(()=>U(A)),Promise.resolve())}return Bi}function jv(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>us(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>us(c,l))||i.push(l))}return[n,s,i]}function $v(){return ht(no)}const Si=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},zv=""+new URL("backpack-icon-c1e4f8a7.svg",import.meta.url).href,qv=""+new URL("shadow-dc713463.svg",import.meta.url).href,Sd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABCCAYAAAAGysWEAAANQUlEQVRogdVbC3QU1Rn+N7OzuzOzm002L5IYQSSgYAUt+DhKjFreKCAGKoLSWrEioBXxAeKLh0WkFgG1ViwvsZqKeATkUS0G6yvU8lYISCAmAZLd7Gt2dmf20fMPuXF3Z3aySTbRfufMgcydOzvf3P/77zcz/9VFIhHoSkQiER3+nE6n69If1iv2dBKQYDAY1IdCIUqn01kpirJTFBXqKsJpij0pBiHo8/nYQCAwkabpYwaD4agoitN4nuewjYxyZ19Ip2zhcFgnSZKe53nW4XBcEQgEPo80w+nh5f+IonjI5XbfiscEg0EK+3TW9Sh2dHTDiw2FQmmCIJianM4ePM+/Tgh++s2RSPH4hyK5Q++NrNtaQXZHBEH4u9vt/gX2wb6dQTSlyYiEqSAITFpa2iyWZeekpaWln6pvgN8teh0q/vttzPElV1wK8++5Tf43HA67/X7/a+FweIXRaDyL+k1LSwsrfqSdSAlRJBgOh9NEUTRIweAQjmVXUhRV5PL6YOHqTfDyu9sVfaJx18gSePK346B7fg6EQqEav9+/RKfT/c1oNAaQbCoSVoeJIkFJkmhRFHsbjcYlBoNhBO5f+e4OWLD6PXB6fYo+asgwszBz4giZMEKSpH+LoviYXq/fS9O01NHRbTdRJIhhGggE8ihKP4NlmUdxP4bnI8s3wP6qU4o+yQBHddmsO+GWkoHy0YFA4G1RlB4zGg1n9Xp9sL2E20wUCeJciNMFAEy1WCzPER3Oefkt+KBir6IPa7NB/3G3gquuDo58tFPed73NBY/3PAFPHO0DBz2cog/qdtmDk+Hy4u5Ev3+RJGkRwzACjnBbwzlpoqhDJIg6DIVCv2IYZrFer++HOlzRHKbx0DMM9C4dDH2HDZNbjuzYEUP0w1+e1+7GugEw92gvcAUpxTlQvy8+OBmsZhaCwWCNz+ebodfr/2kwGMS2GI5WiZJEQ3RI0/RchmEmYtv6bXtgwZubAEczHt2vHgQDxo4BmmFaWhIRRbiC6XDL3hLV0UX9zr9nPMyYcP6GoX4FQZhuMBjQfIhItjXCmhYQSSLB8zqkZprN5vswTFGHC1ZvUkwXiOxeF0O/4UMhp1cvRZsWrHo3WOmg6hGY0GYvXy9n7zfmTcOwvo6m6f0YzjzvW5SMflWJRodpJAK/YRgGs18RjtzCN9+HddsqFH1Qh32HD4UeVw1StLUHOOI1gglOCcaW3vj7Q2YskvWLhLvn59xnNEbuEARhiSRJy00mkz/RdBTjdQlBv99vEgThWpqmd3IcuxJJIsGrps5TkEQd9h0xFIbMeViTZO3Bg1D9lTJRJQIS3Xf9Zljc5wRY9aGYozCSet/+B5izfAO4eSGdZdlFJpPpS7/fPxyvHTnE++eWESUj6Pf7800m0/MWi2UC7v+wYi/MfvktVR0WXH4Z9B87FjhbpqKNwFlbB/ve3wyNx08o2pLB/RfuhUkFx2DusSthY21eTA8MZbzxLz44BaaMHHwZx3FbAoHAdq/X+7jRaDxK5l9Zw5iMyNMFRVHzGYaZhjo8UHUKZi/foKpDa2EBDBg3RlOHkiDA4R074PjuPYo2UElGiFv+Mxw+c1jl/z/e6zQ8dtEXMe2ZuyYqzkPQv7i7nJ0xrBE8zy8NhyMrGMZUj/rVY0bF4eY47hCxbTjhq+kQwxQJaoUoourTCji8fScEBUHR1llAg4L6HVMyEJbOuhP1OycSieCj4AUcx/Hys6A/EDCZzeaiA80Hq9k21GFxSUnMdBGPhuPHoXLjO+BzOGJa1AxDR7Fl4DfwmTMbXq0ujJl/0bDgVrlmEZoNqyhKBpaN+PQkAUFzGo8nidPFoEl3aOqQdzTB/s2boe7AoZj98YYBiaYSGNp3dOsGS05eotAv4RGOhOWEqzq9EAyc9GvNMEUdVlVUqI4SGgYkqHWDUoELmTOwqu8ZuC5jADxwuE/CM2oS1brI6q8rYd/7Hyh02F7D0FF0Z3jNM2gSVQPqEAm6amPDMNWGIdVImijqEL3qqa8qFW3JJKq2GoYuJ0p0eGz3HkWYJmMY8AZVbny73YYhVdAkWnvokOp0kQrD8LMiGn+RP2fD0Bo0iUajV+lg6DdsmKYOu9IwtBWtEk2FYSCJKtWGoS3QJPr/YBiShSZRrYv8uRmG1qBJVA2oQ0w08dNFsonqp0KXGQa8QdGG4aDbLL/9m1SwT3FsZ+AnMwz4aIUm/O36bvL73esyqxR9UwlNol1hGPCNwmjHlTCpsBBckubldAiaZ1YzDJhoim8oURwbjUSGoV+xD+4uqwPOJMGa94qgcr+5pS3+ebJLiUYjWcOg9mSTkxWEqbfXw6DLG1v2zZlWBUeOZ8CqdUXQYFdeRqpHt1MNAzSTfGHut8CZlC+n+/ZywqrnnLBtdz6Ub8kFXvjx7eurpwrgoGc4PN/7CFxmOa3o21ZoEu0/boxmmGoZBgIcrWdfKoapZfUyMTWMLK2HG65pgPKtF8C2T368oajfwV9eC5MKe8Li3t+o9EwemkQzCgsU+wjQMBzZvlORqHpc4Ie+vQX49AtrywhV/2CCZ166CAb198LU8TWQk+VXnA9HfOr4ahhVegZeWd8dDlexLW2o361nhyr6pIyoGhIZBo4Jw91lZ6D06rPy36NKTVC+rQB2f2ltOQaTT+X+S6FsdCOMvLFeNZzxJjz90FGoPJANa/6R36JftS9tnUJUyzCoXThe8PQp30PptRmwpjxfHlWC8i3ZsPuLDCgbda7lxsQDExdu5R8VwbaPbTH6Rfzx+4thVV+P/HIsGSRVZ4QEdy1dpkoSR5JjgqqjA80J54UnvoXpd9XJxxLgSL2yrgCe/XMfOfsmQtmIGli58DCUXuOKOQL12/+zG2DuscHyJ8fWINcC2R2OrLzc3DP4+QFfYBPglFJ34LBCh2rA7PrAXTUJEw6C9+th27/y5RGNBxIpG1mnql+C6loLrC0viNEvyJ8cQzCp8KycqQl2rZwnf55otNtzbJmZDk2i8cARKRt9Ts6SiUIKTcH0Kac0L7jBblIYBmg+/8ibHfIoamH3V3lQvjVXdf7tMNGRNzVB2agfYkIUR2ht+YUxCYdATbfxSGQY1AxGPEh0qN3sdhN9Ye5x6FHoUewnwAsu35KnCKn4TJwIaoYBoiyj1m9jOD+6WOm544lSTz31FJazsWaOewS/pP118yeKTp/vzQApZIB+xW5FGyLH5ofSa+yQkx2B6h8Y8DVfsBTUQeV+C1QeyITC/KB8nBqKe3hhSIkdpKABqk7+aDEbHDTs2mMD3m+C4p5eMOhjv9xjCC9fXST/TjxmTRgOeVkZ4BOEpVjJgiVtlNPlysjMyPi+tTKajoaUlmEgSJRwovMDRlD8lEUQX7bjcrl7WK3pLlKgyDQ1NfWkaXp6Xl7e76GVwqhkQqq1hNOafuMNQ3R/NU3GF2I5nc4PvF7vfJvNdkIeUfziTeoW3B5Pul8QLs3Ozp5nsVhuglZK3dQSVDwS3X2MDi3DQJAouxPEl9b5fL5Ku92+UE/TlRaz2YMk5XokUmdEKjMDgYDRy/PmUCh0c25OzhKapgu1ihejQ0oLqKe15d0UF4zRUTb6bML5N1E/iCuWlCSp1ul0Lg+Fw+vNHOfFCpXogitFQRWp8cNw9ng86QaD4f6srKwZFEVZEpWjQhsMQ/wTCgEahrvLTrdER6JMDnHlr6FQyNPU5FwrioHXzGZzDRJUqzlSEIW4ajEcXa/HU2SxWB7OysqaDM36RcJqlSrJGob4JxSI0m9DI606N2OYNlegyH87Xa7NHo/nTyaT6TscRSx7TVRFpko0mjDRr8frtUiiNCgryzaf4zhZ8Vh7tOKdj1T12xHDoAYskZs5YZhcE+j3+7+zOxwLKYr6mBDEUdQqk9MkSkBGVybs8aSDTjcmLzf3CZqmC7SqWJI1DEtfL1ZkZ4KoKhM5TM+dO/d8KBTaYLFY3Jho1MJUDW2q7iSEfT6BdbmcGWaLZbYtM3MK6lerLgkfxtXeMCQKYVCpG2psbFzF8/wbZoulhmNZPrpYStFZBe0qTCZl5ahfnucLM6zWZ6xW61hopdKMPKGwXDBhUoqv5PR6vR+7XK6nTQzzHSGI2VTRsRW0uwKb6Dd6OrJarQ9xLDuI1PCq6Zc8k6pNF2jbnrznNlKbW9vQ0PBoWpQOO7IgKCU19TgdEf1SFDXZZrPNNBgMBVrVoNGIqtaUdWi321eKovhqenq6i0z4P1lNfTRwdHHDcOZ9Pg6nI4Zl782y2WT9JqrvRWLN9bfy3w6HY73H613GcVwtjiIWHadsSYjaYpj2bmT1ksfjMdefOdPt5MmTN7pc7k/IQh5c1IOLe3BbsHpTywIfL89/ffr06VuxD/bFc6R6VVOnrDaMDmev12sJh8M3on82mUyXuJo1izpE29bY2LgYADZzzbatIyshtNCpyyrJigr5gcHtxhWGk3NycuZim8vlWuPz+ZYSHbY24XcUXbJ+lExHOP+KYkD+mmQwGM+yLONr73TRVnTZQlliOEglKcmkXbJ+FAD+B4jARoP1WE5fAAAAAElFTkSuQmCC",Rd=""+new URL("logo-1-894a9c16.svg",import.meta.url).href;const Kv={},Ad=t=>(Kr("data-v-3fdcc75a"),t=t(),Gr(),t),Gv={id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"17.31",height:"17.31",viewBox:"0 0 17.31 17.31"},Yv=Ad(()=>T("defs",null,null,-1)),Qv=Ad(()=>T("g",null,[T("rect",{class:"cls-1",x:"0.41",y:"0.41",width:"16.48",height:"16.48"}),T("g",null,[T("line",{class:"cls-2",x1:"8.65",y1:"3.65",x2:"8.65",y2:"13.65"}),T("line",{class:"cls-2",x1:"13.65",y1:"8.65",x2:"3.65",y2:"8.65"})])],-1)),Jv=[Yv,Qv];function Xv(t,e){return Me(),je("svg",Gv,Jv)}const su=Si(Kv,[["render",Xv],["__scopeId","data-v-3fdcc75a"]]);const Ri=t=>(Kr("data-v-ed963a93"),t=t(),Gr(),t),Zv={class:"container"},ey=["onClick"],ty=Ri(()=>T("p",null,[Be("Connectez-vous à votre "),T("strong",null,"sac à dos académique"),Be(" pour authentifier et enregistrer l'émission de votre nouveau badge.")],-1)),ny=Ri(()=>T("div",{class:"openbadge-mention"},[T("a",{id:"openbadge-img-link",href:"https://openbadges.org/",target:"_blank"},[T("img",{class:"openbadge-logo",src:Sd})]),T("span",null,[Be("Nous émettons des "),T("a",{href:"https://openbadges.org/",target:"_blank"},"Open Badges")])],-1)),sy=[ty,ny],iy={key:0,class:"form-container"},ry={key:0,class:"form"},oy=Ri(()=>T("header",null,[T("img",{class:"bp-logo",src:Rd,alt:""}),Be(" Connexion ")],-1)),ay=["onSubmit"],ly=["onClick"],cy=["disabled"],uy={class:"signup"},hy={class:"signup"},dy={for:"check"},fy={key:1,class:"form"},py=Ri(()=>T("header",null,[T("img",{class:"bp-logo",src:Rd,alt:""}),Be(" Créer un compte ")],-1)),_y=["onSubmit"],gy={class:"register-fields"},my=Ri(()=>T("div",{class:"infos"},[T("i",{class:"fas fa-info-circle"}),T("span",null,"Veuillez compléter tous les champs et inscrire une adresse courriel valide.")],-1)),vy=["disabled"],yy={class:"signup"},Ey={class:"signup"},wy={for:"check"},Iy={__name:"AuthForms",setup(t){const e=vo(),n=Dt(!1),s=Dt({email:"",password:""}),i=Dt({email:"",password:"",name:""}),r=async()=>{await e.login(s.value)},o=async()=>{await e.register(i.value)},a=()=>{e.showForms=!1},l=async()=>{const c=prompt("Entrez votre adresse courriel:");c&&await e.sendPasswordReset(c)};return Wh(()=>{e.formToShow=="register"?n.value=!0:n.value=!1}),(c,u)=>(Me(),je("div",Zv,[En(T("input",{type:"checkbox",id:"check","onUpdate:modelValue":u[0]||(u[0]=h=>n.value=h)},null,512),[[wm,n.value]]),T("div",{class:"left-side",onClick:Hs(a,["self"])},sy,8,ey),be(sl,{name:"tray",mode:"out-in"},{default:Hh(()=>[xe(e).showForms?(Me(),je("div",iy,[n.value?qs("",!0):(Me(),je("div",ry,[oy,T("form",{onSubmit:Hs(r,["prevent"])},[En(T("input",{type:"text",placeholder:"Adresse courriel","onUpdate:modelValue":u[1]||(u[1]=h=>s.value.email=h)},null,512),[[Ps,s.value.email]]),En(T("input",{type:"password",placeholder:"Mot de passe","onUpdate:modelValue":u[2]||(u[2]=h=>s.value.password=h)},null,512),[[Ps,s.value.password]]),T("a",{href:"#",onClick:Hs(l,["prevent"])},"Mot de passe oublié?",8,ly),T("input",{type:"submit",class:"button",value:"Se connecter",disabled:!s.value.email||!s.value.password},null,8,cy)],40,ay),T("div",uy,[T("span",hy,[T("label",dy,[be(su),Be(" Vous n'avez pas de compte? ")])])])])),n.value?(Me(),je("div",fy,[py,T("form",{onSubmit:Hs(o,["prevent"])},[T("div",gy,[En(T("input",{type:"text",placeholder:"Nom","onUpdate:modelValue":u[3]||(u[3]=h=>i.value.name=h)},null,512),[[Ps,i.value.name]]),En(T("input",{type:"text",placeholder:"Email","onUpdate:modelValue":u[4]||(u[4]=h=>i.value.email=h)},null,512),[[Ps,i.value.email]])]),En(T("input",{type:"password",placeholder:"Mot de passe","onUpdate:modelValue":u[5]||(u[5]=h=>i.value.password=h)},null,512),[[Ps,i.value.password]]),my,T("input",{type:"submit",class:"button",value:"Confirmer",disabled:!i.value.name||!i.value.email||!i.value.password},null,8,vy)],40,_y),T("div",yy,[T("span",Ey,[T("label",wy,[be(su),Be(" Vous avez déjà un compte? ")])])])])):qs("",!0)])):qs("",!0)]),_:1})]))}},by=Si(Iy,[["__scopeId","data-v-ed963a93"]]);var Cy=100,Ty={origin:{x:.1,y:.4}};function xs(t,e){confetti(Object.assign({},Ty,e,{particleCount:Math.floor(Cy*t)}))}const Sy=()=>{xs(.25,{spread:26,startVelocity:55}),xs(.2,{spread:60}),xs(.35,{spread:100,decay:.91,scalar:.8}),xs(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),xs(.1,{spread:120,startVelocity:45})};const Ry={},Ay={id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"165.17",height:"226.94",viewBox:"0 0 165.17 226.94"},ky=Ug('<defs data-v-c710de1c></defs><g data-v-c710de1c><path d="M152.54,44.67c0,1.73,0,3.46,0,5.19a13.09,13.09,0,0,0,2.86,8.65c1.47,1.84,3,3.65,4.34,5.56a49.23,49.23,0,0,1,3.65,5.67,13.71,13.71,0,0,1-.14,13.78,91.7,91.7,0,0,1-5.39,7.8C157,92.57,156,93.76,155.06,95a12.21,12.21,0,0,0-2.51,7.78c0,2.67.25,5.35.18,8a46.66,46.66,0,0,1-.61,7.47,13.05,13.05,0,0,1-6.9,9.16,43.21,43.21,0,0,1-9.63,3.51c-1.84.53-3.68,1.11-5.5,1.73a10.59,10.59,0,0,0-5.2,3.85c-1.47,2-2.82,4.17-4.3,6.19a61.9,61.9,0,0,1-4.55,5.76,13.81,13.81,0,0,1-14,4.08c-2.09-.49-4.13-1.22-6.18-1.87A28,28,0,0,1,93,149.56a18.24,18.24,0,0,0-15.18,0,62.35,62.35,0,0,1-10.25,3.18,13.14,13.14,0,0,1-12-3.43,35.08,35.08,0,0,1-5.64-7c-1.3-2-2.65-3.89-4-5.79a11.49,11.49,0,0,0-6.11-4.2c-3.06-.94-6.14-1.81-9.19-2.75a29.7,29.7,0,0,1-3-1.14c-6.06-2.53-9.15-7.17-9.46-13.64a57.6,57.6,0,0,1,.11-8.31A17.64,17.64,0,0,0,13.69,92.2a62.73,62.73,0,0,1-5-6.64,16.32,16.32,0,0,1-2.93-7.7A14.12,14.12,0,0,1,8,68.69a64.09,64.09,0,0,1,5.88-8c3.67-4.14,4.87-8.84,4.38-14.22a39.38,39.38,0,0,1,.23-10.84A13.61,13.61,0,0,1,27.27,24.8c3.45-1.36,7-2.35,10.59-3.46,2.79-.87,5.56-1.8,7.5-4.17,1.23-1.51,2.34-3.14,3.48-4.72,1.63-2.28,3.11-4.69,4.91-6.84,4.21-5,9.6-6.7,15.92-4.92a89.86,89.86,0,0,1,9.16,3.13,17,17,0,0,0,13.24,0A82.1,82.1,0,0,1,101.72.57c6.44-1.67,11.72.4,15.76,5.59,1.88,2.42,3.56,5,5.33,7.49.29.4.58.8.83,1.21a14.23,14.23,0,0,0,8.75,6.32c3.05.83,6.09,1.71,9.08,2.74a23.32,23.32,0,0,1,4.74,2.3c4.57,2.88,6.27,7.34,6.5,12.49.08,2,0,4,0,6ZM145,44.9h.09c0-2.06,0-4.12,0-6.17-.09-3.49-1.69-6-5-7.2-2.18-.79-4.4-1.44-6.62-2.12-1.43-.45-2.87-.85-4.32-1.27-5.38-1.58-9.27-5-12.27-9.65-1.61-2.49-3.31-4.93-5.06-7.33-2.3-3.15-5.34-4.28-9.12-3-3.34,1.13-6.66,2.32-10,3.44a19.53,19.53,0,0,1-9.92,1.09,56.09,56.09,0,0,1-6.24-1.63c-3.14-1-6.23-2.17-9.38-3.11a6.6,6.6,0,0,0-7.24,2.22,27.13,27.13,0,0,0-2,2.5c-1.6,2.3-3.16,4.64-4.73,7A20.65,20.65,0,0,1,41.44,28.2c-1.6.46-3.21.88-4.79,1.4-2.35.78-4.72,1.52-7,2.48a6,6,0,0,0-3.75,5.23,47.14,47.14,0,0,0-.23,5.18c0,2.74.19,5.48.18,8.23A19.24,19.24,0,0,1,22,62.33c-1.16,1.57-2.41,3.09-3.56,4.67-1.42,2-2.88,3.88-4.14,5.94A6.75,6.75,0,0,0,14.27,80a16.44,16.44,0,0,0,1.26,2.1c1.55,2.06,3.07,4.15,4.73,6.11a22.68,22.68,0,0,1,5.62,16.63c-.15,2.64-.25,5.29-.23,7.94,0,5.54,1.48,7.54,6.72,9.3,2.66.89,5.37,1.63,8.08,2.37a21.55,21.55,0,0,1,13,9.32c.68,1,1.36,2.08,2.08,3.09,1.43,2,2.8,4,4.35,5.9a6.66,6.66,0,0,0,7.22,2.31c.73-.18,1.47-.32,2.18-.57,2.68-.93,5.36-1.86,8-2.85a22.43,22.43,0,0,1,16.09-.06c2.73,1,5.45,2,8.22,2.92,5.19,1.67,7.57.91,10.83-3.49,1.56-2.1,3-4.28,4.41-6.48a21.83,21.83,0,0,1,12.81-9.86c.94-.27,1.89-.53,2.82-.83,2.79-.9,5.62-1.71,8.35-2.77a6.07,6.07,0,0,0,4.11-5.61c.14-3.55.14-7.11,0-10.66-.22-5.58,1-10.69,4.52-15.13,1.41-1.76,2.86-3.49,4.17-5.32a49.33,49.33,0,0,0,3.26-5.21,5.79,5.79,0,0,0,0-5.48,28.79,28.79,0,0,0-2.49-4.09c-1.56-2.14-3.26-4.17-4.87-6.27A19.56,19.56,0,0,1,145,51.55C145,49.33,145,47.12,145,44.9Z" data-v-c710de1c></path><path d="M79.65,183.14a7.18,7.18,0,0,1-.35,1.05c-2.27,4.31-4.58,8.59-6.82,12.9-4.4,8.45-8.75,16.93-13.14,25.38a7.86,7.86,0,0,1-10,3.89,8.05,8.05,0,0,1-4.13-3.84c-3.75-6.89-7.54-13.74-11.28-20.62a1.57,1.57,0,0,0-1.73-1c-7.53.46-15.06.85-22.58,1.31-2.39.15-4.63-.08-6.57-1.64a7.88,7.88,0,0,1-2-10.06q5.48-10.44,11-20.87,8.8-16.78,17.61-33.56a4,4,0,0,1,3.24-2.37,3.59,3.59,0,0,1,3.46,1.62,3.66,3.66,0,0,1,.22,4c-2,3.76-3.94,7.52-5.91,11.27l-16.44,31.3-6,11.42c-.19.37-.36.74-.62,1.27.69,0,1.19,0,1.7,0l23.17-1.29a7.94,7.94,0,0,1,7.93,4.5q4.59,8.43,9.2,16.85c.85,1.57,1.67,3.15,2.65,5,.59-1.05,1.08-1.85,1.52-2.69q4.85-9.33,9.68-18.68,5.1-9.83,10.24-19.62a6.44,6.44,0,0,1,.68-.9C76.07,179.53,77.86,181.33,79.65,183.14Z" data-v-c710de1c></path><path d="M99.59,218.26c.38-.48.62-.77.84-1.07l13.82-19a7.86,7.86,0,0,1,8.38-3.36q11.46,2.12,22.91,4.26l1.62.26c-.57-1.58-1-3-1.55-4.3q-9-24.28-18-48.56c-.69-1.86-1.36-3.74-2-5.61a3.73,3.73,0,0,1,2.15-5.05,3.81,3.81,0,0,1,5,2.43q7.28,19.59,14.54,39.2c2.31,6.23,4.64,12.46,6.93,18.71a7.79,7.79,0,0,1-5.37,10.47,9.64,9.64,0,0,1-3.86.06c-7.78-1.39-15.54-2.86-23.29-4.34a1.28,1.28,0,0,0-1.45.64q-7,9.74-14.11,19.42a7.83,7.83,0,0,1-12.06.87,8.57,8.57,0,0,1-1.64-2.51q-6.28-14.56-12.49-29.17a3.82,3.82,0,1,1,7-3Q93,202.78,99,217C99.15,217.31,99.32,217.65,99.59,218.26Z" data-v-c710de1c></path><path d="M79.65,183.14c-1.79-1.81-3.58-3.61-5.36-5.42a1.51,1.51,0,0,1,.07-.53c2-3.82,4-7.65,6-11.45a3.78,3.78,0,0,1,7,1.27,4.31,4.31,0,0,1-.31,2.28c-2.28,4.51-4.64,9-7,13.46A2.06,2.06,0,0,1,79.65,183.14Z" data-v-c710de1c></path><path d="M85.34,23.42a53.08,53.08,0,1,1-53,53.41A53.07,53.07,0,0,1,85.34,23.42Zm.14,7.63A45.45,45.45,0,0,0,85.1,122c24.94.1,45.45-20.06,45.77-44.66A45.63,45.63,0,0,0,85.48,31.05Z" data-v-c710de1c></path><path class="cls-1" d="M78.08,87.77c1.85-1.89,3.47-3.58,5.13-5.24Q94.94,70.77,106.69,59c1.3-1.3,2.06-1.29,3.37,0,.72.71,1.44,1.43,2.15,2.15,1.11,1.13,1.12,2,0,3.09L92.67,83.85,79.86,96.66c-1.22,1.21-2.16,1.22-3.35,0L58.64,78.81c-1.17-1.18-1.19-2,0-3.17.76-.77,1.52-1.53,2.29-2.29,1.14-1.12,2-1.12,3.1,0q6.72,6.7,13.44,13.44A7.07,7.07,0,0,1,78.08,87.77Z" data-v-c710de1c></path></g>',2),Py=[ky];function Ny(t,e){return Me(),je("svg",Ay,Py)}const Oy=Si(Ry,[["render",Ny],["__scopeId","data-v-c710de1c"]]);const gt=t=>(Kr("data-v-0f23ae0d"),t=t(),Gr(),t),xy={class:"form-container"},Dy={key:0,class:"dark-overlay"},My=gt(()=>T("div",{class:"landing-spin"},[T("i",{class:"fa fa-spinner fa-spin fa-3x fa-fw"})],-1)),Ly=gt(()=>T("p",{class:"preparing-msg"}," Veuillez vérifier votre adresse courriel... ",-1)),Fy={class:"landing-container"},Uy={class:"header fade-in"},By={class:"badge-icon"},Hy=gt(()=>T("div",{class:"title"},[T("h2",null,"Un nouveau badge est disponible"),T("span",null,"Ajoutez-le à votre sac à dos académique")],-1)),Wy={key:0,class:"content"},Vy={class:"badge"},jy=["src"],$y=gt(()=>T("img",{src:qv,class:"shadow fade-in"},null,-1)),zy={class:"badge-infos fade-in"},qy=["href"],Ky={class:"badge-informations"},Gy=gt(()=>T("i",{class:"fa-solid fa-up-right-from-square"},null,-1)),Yy={style:{"font-weight":"800"}},Qy=["innerHTML"],Jy=gt(()=>T("div",{class:"openbadge-mention"},[T("a",{id:"openbadge-img-link",href:"https://openbadges.org/",target:"_blank"},[T("img",{class:"openbadge-logo",src:Sd})]),T("span",null,[Be("Nous émettons des "),T("a",{href:"https://openbadges.org/",target:"_blank"},"Open Badges")])],-1)),Xy={key:1},Zy=gt(()=>T("i",{class:"fa fa-spinner fa-spin fa-3x fa-fw"},null,-1)),eE=[Zy],tE={class:"footer fade-in"},nE={class:"auth-directive"},sE=gt(()=>T("br",null,null,-1)),iE=gt(()=>T("div",{class:"copyright"},[T("span",null,"Développé pour l'Université Laval.")],-1)),rE={key:1,class:"wrapper-alternate fade-in"},oE=gt(()=>T("i",{class:"fa-solid fa-screwdriver-wrench fa-beat"},null,-1)),aE=gt(()=>T("span",null,[Be("L'application "),T("strong",null,"Mon sac à dos académique"),Be(" est présentement en maintenance."),T("br"),Be("Veuillez réessayer plus tard. ")],-1)),lE=[oE,aE],cE={__name:"Login",setup(t){const e=$v(),n=vo();Dt("login");const s=Dt(""),i=Dt(!1);Wh(()=>{!n.isVerifyingEmail&&n.user?e.push(`/?projectId=${n.projectId}`):!n.user&&e.currentRoute.value.path!=="/login"&&e.push("/login")});const r=()=>{n.cancelEmailVerification()},o=setInterval(()=>{n.checkEmailVerification()},5e3),a=l=>{n.showForms=!0,n.formToShow=l};return Qa(()=>{setTimeout(()=>{fetch(n.publicConfigs.proxyURL+n.targetBadge.image).then(l=>{if(!l.ok)throw new Error("Network response was not ok");return l.blob()}).then(l=>{const c=URL.createObjectURL(l);s.value=c,i.value=!0,n.user||Sy()}).catch(l=>{console.log("There was a problem with the fetch operation:",l.message)})},2e3)}),Ja(()=>{clearInterval(o)}),(l,c)=>(Me(),je(it,null,[En(T("div",xy,[xe(n).isVerifyingEmail?(Me(),je("div",Dy,[My,Ly,T("button",{onClick:r},"Annuler la vérification")])):qs("",!0),be(by)],512),[[Tm,xe(n).showForms]]),T("div",Fy,[xe(n).publicConfigs.maintenance?(Me(),je("div",rE,lE)):(Me(),je("div",{key:0,class:Ci({wrapper:!0,blurred:xe(n).showForms})},[T("div",Uy,[T("div",By,[be(Oy)]),Hy,i.value&&xe(n).projectFetched?(Me(),je("img",{key:0,src:zv,class:"backpack-button",onClick:a,alt:""})):qs("",!0)]),i.value&&xe(n).projectFetched?(Me(),je("div",Wy,[T("div",Vy,[T("img",{src:s.value,class:"badge-image bounce-in"},null,8,jy),$y]),T("div",zy,[T("h3",null,tc(`${xe(n).targetBadge.name}`),1),T("a",{href:`https://backpacks3-default-rtdb.firebaseio.com/badges/${xe(n).targetBadge.badgeClass}.json`,target:"_blank",style:{"text-decoration":"none"}},[T("div",Ky,[Gy,T("h4",null,[Be("Badge ID: "),T("span",Yy,tc(`${xe(n).targetBadge.badgeClass}`),1)])])],8,qy),T("p",{innerHTML:xe(n).targetBadge.description},null,8,Qy),T("button",{onClick:a},"Récupérer ce badge"),Jy])])):(Me(),je("div",Xy,eE)),T("div",tE,[T("div",nE,[T("span",null,[T("a",{href:"#",onClick:c[0]||(c[0]=()=>a("login"))},"Connectez-vous"),Be(" à votre sac à dos académique "),sE,Be("ou "),T("a",{href:"#",onClick:c[1]||(c[1]=()=>a("register"))},"créez un compte"),Be(" pour obtenir ce badge.")])]),iE])],2))])],64))}},uE=Si(cE,[["__scopeId","data-v-0f23ae0d"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw ws(e)},ws=function(t){return new Error("Firebase Database ("+kd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new dE;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nd=function(t){const e=Pd(t);return rl.encodeByteArray(e,!0)},_r=function(t){return Nd(t).replace(/\./g,"")},gr=function(t){try{return rl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){return Od(void 0,t)}function Od(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pE(n)||(t[n]=Od(t[n],e[n]));return t}function pE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=()=>_E().__FIREBASE_DEFAULTS__,mE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gr(t[1]);return e&&JSON.parse(e)},ol=()=>{try{return gE()||mE()||vE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xd=t=>{var e,n;return(n=(e=ol())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yE=t=>{const e=xd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Dd=()=>{var t;return(t=ol())===null||t===void 0?void 0:t.config},Md=t=>{var e;return(e=ol())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[_r(JSON.stringify(n)),_r(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function al(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function wE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ld(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IE(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fd(){return kd.NODE_ADMIN===!0}function bE(){try{return typeof indexedDB=="object"}catch{return!1}}function CE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="FirebaseError";class _n extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=TE,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?SE(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new _n(i,a,s)}}function SE(t,e){return t.replace(RE,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const RE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){return JSON.parse(t)}function Se(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ui(gr(r[0])||""),n=ui(gr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},AE=function(t){const e=Ud(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kE=function(t){const e=Ud(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ds(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function vr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(iu(r)&&iu(o)){if(!vr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function iu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Vs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function NE(t,e){const n=new OE(t,e);return n.subscribe.bind(n)}class OE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");xE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ko),i.error===void 0&&(i.error=ko),i.complete===void 0&&(i.complete=ko);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ko(){}function ll(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},io=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class Dn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new so;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FE(e))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wn){return this.instances.has(e)}getOptions(e=wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:LE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=wn){return this.component?this.component.multipleInstances?e:wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LE(t){return t===wn?void 0:t}function FE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ME(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const BE={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},HE=ce.INFO,WE={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},VE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=WE[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cl{constructor(e){this.name=e,this._logLevel=HE,this._logHandler=VE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const jE=(t,e)=>e.some(n=>t instanceof n);let ru,ou;function $E(){return ru||(ru=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zE(){return ou||(ou=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bd=new WeakMap,pa=new WeakMap,Hd=new WeakMap,Po=new WeakMap,ul=new WeakMap;function qE(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(rn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bd.set(n,t)}).catch(()=>{}),ul.set(e,t),e}function KE(t){if(pa.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});pa.set(t,e)}let _a={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GE(t){_a=t(_a)}function YE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(No(this),e,...n);return Hd.set(s,e.sort?e.sort():[e]),rn(s)}:zE().includes(t)?function(...e){return t.apply(No(this),e),rn(Bd.get(this))}:function(...e){return rn(t.apply(No(this),e))}}function QE(t){return typeof t=="function"?YE(t):(t instanceof IDBTransaction&&KE(t),jE(t,$E())?new Proxy(t,_a):t)}function rn(t){if(t instanceof IDBRequest)return qE(t);if(Po.has(t))return Po.get(t);const e=QE(t);return e!==t&&(Po.set(t,e),ul.set(e,t)),e}const No=t=>ul.get(t);function JE(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=rn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(rn(o.result),l.oldVersion,l.newVersion,rn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const XE=["get","getKey","getAll","getAllKeys","count"],ZE=["put","add","delete","clear"],Oo=new Map;function au(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oo.get(e))return Oo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ZE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||XE.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Oo.set(e,r),r}GE(t=>({...t,get:(e,n,s)=>au(e,n)||t.get(e,n,s),has:(e,n)=>!!au(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function tw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ga="@firebase/app",lu="0.9.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new cl("@firebase/app"),nw="@firebase/app-compat",sw="@firebase/analytics-compat",iw="@firebase/analytics",rw="@firebase/app-check-compat",ow="@firebase/app-check",aw="@firebase/auth",lw="@firebase/auth-compat",cw="@firebase/database",uw="@firebase/database-compat",hw="@firebase/functions",dw="@firebase/functions-compat",fw="@firebase/installations",pw="@firebase/installations-compat",_w="@firebase/messaging",gw="@firebase/messaging-compat",mw="@firebase/performance",vw="@firebase/performance-compat",yw="@firebase/remote-config",Ew="@firebase/remote-config-compat",ww="@firebase/storage",Iw="@firebase/storage-compat",bw="@firebase/firestore",Cw="@firebase/firestore-compat",Tw="firebase",Sw="10.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="[DEFAULT]",Rw={[ga]:"fire-core",[nw]:"fire-core-compat",[iw]:"fire-analytics",[sw]:"fire-analytics-compat",[ow]:"fire-app-check",[rw]:"fire-app-check-compat",[aw]:"fire-auth",[lw]:"fire-auth-compat",[cw]:"fire-rtdb",[uw]:"fire-rtdb-compat",[hw]:"fire-fn",[dw]:"fire-fn-compat",[fw]:"fire-iid",[pw]:"fire-iid-compat",[_w]:"fire-fcm",[gw]:"fire-fcm-compat",[mw]:"fire-perf",[vw]:"fire-perf-compat",[yw]:"fire-rc",[Ew]:"fire-rc-compat",[ww]:"fire-gcs",[Iw]:"fire-gcs-compat",[bw]:"fire-fst",[Cw]:"fire-fst-compat","fire-js":"fire-js",[Tw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new Map,va=new Map;function Aw(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fs(t){const e=t.name;if(va.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;va.set(e,t);for(const n of yr.values())Aw(n,t);return!0}function hl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},on=new Ai("app","Firebase",kw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=Sw;function Wd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ma,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw on.create("bad-app-name",{appName:String(i)});if(n||(n=Dd()),!n)throw on.create("no-options");const r=yr.get(i);if(r){if(vr(n,r.options)&&vr(s,r.config))return r;throw on.create("duplicate-app",{appName:i})}const o=new UE(i);for(const l of va.values())o.addComponent(l);const a=new Pw(n,s,o);return yr.set(i,a),a}function Vd(t=ma){const e=yr.get(t);if(!e&&t===ma&&Dd())return Wd();if(!e)throw on.create("no-app",{appName:t});return e}function an(t,e,n){var s;let i=(s=Rw[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(a.join(" "));return}fs(new Dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="firebase-heartbeat-database",Ow=1,hi="firebase-heartbeat-store";let xo=null;function jd(){return xo||(xo=JE(Nw,Ow,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hi)}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),xo}async function xw(t){try{return await(await jd()).transaction(hi).objectStore(hi).get($d(t))}catch(e){if(e instanceof _n)Mn.warn(e.message);else{const n=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(n.message)}}}async function cu(t,e){try{const s=(await jd()).transaction(hi,"readwrite");await s.objectStore(hi).put(e,$d(t)),await s.done}catch(n){if(n instanceof _n)Mn.warn(n.message);else{const s=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(s.message)}}}function $d(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=1024,Mw=30*24*60*60*1e3;class Lw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Uw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=uu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Mw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=uu(),{heartbeatsToSend:n,unsentEntries:s}=Fw(this._heartbeatsCache.heartbeats),i=_r(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function uu(){return new Date().toISOString().substring(0,10)}function Fw(t,e=Dw){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),hu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Uw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bE()?CE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hu(t){return _r(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t){fs(new Dn("platform-logger",e=>new ew(e),"PRIVATE")),fs(new Dn("heartbeat",e=>new Lw(e),"PRIVATE")),an(ga,lu,t),an(ga,lu,"esm2017"),an("fire-js","")}Bw("");var Hw="firebase",Ww="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(Hw,Ww,"app");function dl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function zd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vw=zd,qd=new Ai("auth","Firebase",zd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new cl("@firebase/auth");function jw(t,...e){Er.logLevel<=ce.WARN&&Er.warn(`Auth (${bs}): ${t}`,...e)}function sr(t,...e){Er.logLevel<=ce.ERROR&&Er.error(`Auth (${bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,...e){throw fl(t,...e)}function bt(t,...e){return fl(t,...e)}function $w(t,e,n){const s=Object.assign(Object.assign({},Vw()),{[e]:n});return new Ai("auth","Firebase",s).create(e,{appName:t.name})}function fl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return qd.create(t,...e)}function j(t,e,...n){if(!t)throw fl(e,...n)}function Nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sr(e),new Error(e)}function Ft(t,e){t||Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zw(){return du()==="http:"||du()==="https:"}function du(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zw()||wE()||"connection"in navigator)?navigator.onLine:!0}function Kw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ft(n>e,"Short delay should be less than long delay!"),this.isMobile=al()||Ld()}get(){return qw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t,e){Ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=new ki(3e4,6e4);function Wn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vn(t,e,n,s,i={}){return Gd(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Is(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Kd.fetch()(Yd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Gd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Gw),e);try{const i=new Qw(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw qi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw qi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw qi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw qi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw $w(t,u,c);_t(t,u)}}catch(i){if(i instanceof _n)throw i;_t(t,"network-request-failed",{message:String(i)})}}async function Pi(t,e,n,s,i={}){const r=await Vn(t,e,n,s,i);return"mfaPendingCredential"in r&&_t(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Yd(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?pl(t.config,i):`${t.config.apiScheme}://${i}`}class Qw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(bt(this.auth,"network-request-failed")),Yw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=bt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(t,e){return Vn(t,"POST","/v1/accounts:delete",e)}async function Xw(t,e){return Vn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zw(t,e=!1){const n=ze(t),s=await n.getIdToken(e),i=_l(s);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Qs(Do(i.auth_time)),issuedAtTime:Qs(Do(i.iat)),expirationTime:Qs(Do(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Do(t){return Number(t)*1e3}function _l(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return sr("JWT malformed, contained fewer than 3 sections"),null;try{const i=gr(n);return i?JSON.parse(i):(sr("Failed to decode base64 JWT payload"),null)}catch(i){return sr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function eI(t){const e=_l(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof _n&&tI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function tI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await di(t,Xw(n,{idToken:s}));j(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?rI(r.providerUserInfo):[],a=iI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Qd(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function sI(t){const e=ze(t);await wr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iI(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function rI(t){return t.map(e=>{var{providerId:n}=e,s=dl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t,e){const n=await Gd(t,{},async()=>{const s=Is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Yd(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Kd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await oI(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new fi;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(j(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class On{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=dl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Qd(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zw(this,e)}reload(){return sI(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await wr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await di(this,Jw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,P=(c=n.createdAt)!==null&&c!==void 0?c:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:M,isAnonymous:Y,providerData:fe,stsTokenManager:me}=n;j(z&&me,e,"internal-error");const x=fi.fromJSON(this.name,me);j(typeof z=="string",e,"internal-error"),Kt(h,e.name),Kt(d,e.name),j(typeof M=="boolean",e,"internal-error"),j(typeof Y=="boolean",e,"internal-error"),Kt(_,e.name),Kt(m,e.name),Kt(w,e.name),Kt(k,e.name),Kt(P,e.name),Kt(O,e.name);const U=new On({uid:z,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:Y,photoURL:m,phoneNumber:_,tenantId:w,stsTokenManager:x,createdAt:P,lastLoginAt:O});return fe&&Array.isArray(fe)&&(U.providerData=fe.map(K=>Object.assign({},K))),k&&(U._redirectEventId=k),U}static async _fromIdTokenResponse(e,n,s=!1){const i=new fi;i.updateFromServerResponse(n);const r=new On({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await wr(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=new Map;function Ot(t){Ft(t instanceof Function,"Expected a class definition");let e=fu.get(t);return e?(Ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fu.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jd.type="NONE";const pu=Jd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e,n){return`firebase:${t}:${e}:${n}`}class ss{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ir(this.userKey,i.apiKey,r),this.fullPersistenceKey=ir("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?On._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ss(Ot(pu),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ot(pu);const o=ir(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=On._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ss(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ss(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ef(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nf(e))return"Blackberry";if(sf(e))return"Webos";if(gl(e))return"Safari";if((e.includes("chrome/")||Zd(e))&&!e.includes("edge/"))return"Chrome";if(tf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Xd(t=He()){return/firefox\//i.test(t)}function gl(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zd(t=He()){return/crios\//i.test(t)}function ef(t=He()){return/iemobile/i.test(t)}function tf(t=He()){return/android/i.test(t)}function nf(t=He()){return/blackberry/i.test(t)}function sf(t=He()){return/webos/i.test(t)}function ro(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aI(t=He()){var e;return ro(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lI(){return IE()&&document.documentMode===10}function rf(t=He()){return ro(t)||tf(t)||sf(t)||nf(t)||/windows phone/i.test(t)||ef(t)}function cI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t,e=[]){let n;switch(t){case"Browser":n=_u(He());break;case"Worker":n=`${_u(He())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${s}`}async function af(t,e){return Vn(t,"GET","/v2/recaptchaConfig",Wn(t,e))}function gu(t){return t!==void 0&&t.enterprise!==void 0}class lf{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function cf(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=bt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",uI().appendChild(s)})}function hI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const dI="https://www.google.com/recaptcha/enterprise.js?render=",fI="recaptcha-enterprise",pI="NO_RECAPTCHA";class uf{constructor(e){this.type=fI,this.auth=jn(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{af(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new lf(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;gu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(pI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&gu(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}cf(dI+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ps(t,e,n,s=!1){const i=new uf(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mu(this),this.idTokenSubscription=new mu(this),this.beforeStateQueue=new _I(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ot(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ze(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}async initializeRecaptchaConfig(){const e=await af(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new lf(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new uf(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ot(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[Ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=of(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jn(t){return ze(t)}class mu{constructor(e){this.auth=e,this.observer=null,this.addObserver=NE(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t,e){const n=hl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(vr(r,e??{}))return i;_t(i,"already-initialized")}return n.initialize({options:e})}function vI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function yI(t,e,n){const s=jn(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=hf(e),{host:o,port:a}=EI(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||wI()}function hf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function EI(t){const e=hf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:vu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:vu(o)}}}function vu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,n){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}async function II(t,e){return Vn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t,e){return Pi(t,"POST","/v1/accounts:signInWithPassword",Wn(t,e))}async function df(t,e){return Vn(t,"POST","/v1/accounts:sendOobCode",Wn(t,e))}async function bI(t,e){return df(t,e)}async function Lo(t,e){return df(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(t,e){return Pi(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}async function TI(t,e){return Pi(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends ml{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new pi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new pi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ps(e,s,"signInWithPassword");return Mo(e,i)}else return Mo(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await ps(e,s,"signInWithPassword");return Mo(e,r)}else return Promise.reject(i)});case"emailLink":return CI(e,{email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return II(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return TI(e,{idToken:n,email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(t,e){return Pi(t,"POST","/v1/accounts:signInWithIdp",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="http://localhost";class Ln extends ml{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=dl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ln(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return is(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,is(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,is(e,n)}buildRequest(){const e={requestUri:SI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Is(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AI(t){const e=Ws(Vs(t)).link,n=e?Ws(Vs(e)).deep_link_id:null,s=Ws(Vs(t)).deep_link_id;return(s?Ws(Vs(s)).link:null)||s||n||e||t}class vl{constructor(e){var n,s,i,r,o,a;const l=Ws(Vs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=RI((i=l.mode)!==null&&i!==void 0?i:null);j(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=AI(e);try{return new vl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.providerId=Cs.PROVIDER_ID}static credential(e,n){return pi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=vl.parseLink(n);return j(s,"argument-error"),pi._fromEmailAndCode(e,s.code,s.tenantId)}}Cs.PROVIDER_ID="password";Cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends ff{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ni{constructor(){super("facebook.com")}static credential(e){return Ln._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ln._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Xt.credential(n,s)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Ni{constructor(){super("github.com")}static credential(e){return Ln._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.GITHUB_SIGN_IN_METHOD="github.com";Zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Ni{constructor(){super("twitter.com")}static credential(e,n){return Ln._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return en.credential(n,s)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t,e){return Pi(t,"POST","/v1/accounts:signUp",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await On._fromIdTokenResponse(e,s,i),o=yu(s);return new Fn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=yu(s);return new Fn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function yu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends _n{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ir.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ir(e,n,s,i)}}function pf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ir._fromErrorAndOperation(t,r,e,s):r})}async function kI(t,e,n=!1){const s=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await di(t,pf(s,i,e,t),n);j(r.idToken,s,"internal-error");const o=_l(r.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(t.uid===a,s,"user-mismatch"),Fn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&_t(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _f(t,e,n=!1){const s="signIn",i=await pf(t,s,e),r=await Fn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function NI(t,e){return _f(jn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e,n){var s;j(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),j(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(j(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(j(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(t,e,n){var s;const i=jn(t),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const o=await ps(i,r,"getOobCode",!0);n&&rr(i,o,n),await Lo(i,o)}else n&&rr(i,r,n),await Lo(i,r).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await ps(i,r,"getOobCode",!0);n&&rr(i,a,n),await Lo(i,a)}else return Promise.reject(o)})}async function xI(t,e,n){var s;const i=jn(t),r={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const c=await ps(i,r,"signUpPassword");o=Fo(i,c)}else o=Fo(i,r).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await ps(i,r,"signUpPassword");return Fo(i,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await Fn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function DI(t,e,n){return NI(ze(t),Cs.credential(e,n))}async function MI(t,e){const n=ze(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&rr(n.auth,i,e);const{email:r}=await bI(n.auth,i);r!==t.email&&await t.reload()}function gf(t,e,n,s){return ze(t).onIdTokenChanged(e,n,s)}function LI(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function Eu(t){return ze(t).signOut()}const br="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(){const t=He();return gl(t)||ro(t)}const UI=1e3,BI=10;class vf extends mf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FI()&&cI(),this.fallbackToPolling=rf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);lI()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,BI):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},UI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vf.type="LOCAL";const HI=vf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf extends mf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yf.type="SESSION";const Ef=yf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new oo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await WI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=yl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return window}function jI(t){Ct().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function $I(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qI(){return wf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="firebaseLocalStorageDb",KI=1,Cr="firebaseLocalStorage",bf="fbase_key";class Oi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ao(t,e){return t.transaction([Cr],e?"readwrite":"readonly").objectStore(Cr)}function GI(){const t=indexedDB.deleteDatabase(If);return new Oi(t).toPromise()}function Ea(){const t=indexedDB.open(If,KI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Cr,{keyPath:bf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Cr)?e(s):(s.close(),await GI(),e(await Ea()))})})}async function wu(t,e,n){const s=ao(t,!0).put({[bf]:e,value:n});return new Oi(s).toPromise()}async function YI(t,e){const n=ao(t,!1).get(e),s=await new Oi(n).toPromise();return s===void 0?null:s.value}function Iu(t,e){const n=ao(t,!0).delete(e);return new Oi(n).toPromise()}const QI=800,JI=3;class Cf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ea(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>JI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oo._getInstance(qI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $I(),!this.activeServiceWorker)return;this.sender=new VI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ea();return await wu(e,br,"1"),await Iu(e,br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>wu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>YI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Iu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ao(i,!1).getAll();return new Oi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cf.type="LOCAL";const XI=Cf;new ki(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t,e){return e?Ot(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends ml{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eb(t){return _f(t.auth,new El(t),t.bypassAuthState)}function tb(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),PI(n,new El(t),t.bypassAuthState)}async function nb(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),kI(n,new El(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eb;case"linkViaPopup":case"linkViaRedirect":return nb;case"reauthViaPopup":case"reauthViaRedirect":return tb;default:_t(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=new ki(2e3,1e4);class Xn extends Tf{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Xn.currentPopupAction&&Xn.currentPopupAction.cancel(),Xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=yl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sb.get())};e()}}Xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="pendingRedirect",or=new Map;class rb extends Tf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=or.get(this.auth._key());if(!e){try{const s=await ob(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}or.set(this.auth._key(),e)}return this.bypassAuthState||or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ob(t,e){const n=cb(e),s=lb(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function ab(t,e){or.set(t._key(),e)}function lb(t){return Ot(t._redirectPersistence)}function cb(t){return ir(ib,t.config.apiKey,t.name)}async function ub(t,e,n=!1){const s=jn(t),i=ZI(s,e),o=await new rb(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=10*60*1e3;class db{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Sf(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hb&&this.cachedEventUids.clear(),this.cachedEventUids.has(bu(e))}saveEventToCache(e){this.cachedEventUids.add(bu(e)),this.lastProcessedEventTime=Date.now()}}function bu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sf(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pb(t,e={}){return Vn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gb=/^https?/;async function mb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pb(t);for(const n of e)try{if(vb(n))return}catch{}_t(t,"unauthorized-domain")}function vb(t){const e=ya(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!gb.test(n))return!1;if(_b.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=new ki(3e4,6e4);function Cu(){const t=Ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Eb(t){return new Promise((e,n)=>{var s,i,r;function o(){Cu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cu(),n(bt(t,"network-request-failed"))},timeout:yb.get()})}if(!((i=(s=Ct().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ct().gapi)===null||r===void 0)&&r.load)o();else{const a=hI("iframefcb");return Ct()[a]=()=>{gapi.load?o():n(bt(t,"network-request-failed"))},cf(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ar=null,e})}let ar=null;function wb(t){return ar=ar||Eb(t),ar}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=new ki(5e3,15e3),bb="__/auth/iframe",Cb="emulator/auth/iframe",Tb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rb(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pl(e,Cb):`https://${t.config.authDomain}/${bb}`,s={apiKey:e.apiKey,appName:t.name,v:bs},i=Sb.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Is(s).slice(1)}`}async function Ab(t){const e=await wb(t),n=Ct().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:Rb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tb,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=bt(t,"network-request-failed"),a=Ct().setTimeout(()=>{r(o)},Ib.get());function l(){Ct().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pb=500,Nb=600,Ob="_blank",xb="http://localhost";class Tu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Db(t,e,n,s=Pb,i=Nb){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},kb),{width:s.toString(),height:i.toString(),top:r,left:o}),c=He().toLowerCase();n&&(a=Zd(c)?Ob:n),Xd(c)&&(e=e||xb,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,m])=>`${d}${_}=${m},`,"");if(aI(c)&&a!=="_self")return Mb(e||"",a),new Tu(null);const h=window.open(e||"",a,u);j(h,t,"popup-blocked");try{h.focus()}catch{}return new Tu(h)}function Mb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb="__/auth/handler",Fb="emulator/auth/handler",Ub=encodeURIComponent("fac");async function Su(t,e,n,s,i,r){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:bs,eventId:i};if(e instanceof ff){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Ni){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Ub}=${encodeURIComponent(l)}`:"";return`${Bb(t)}?${Is(a).slice(1)}${c}`}function Bb({config:t}){return t.emulator?pl(t,Fb):`https://${t.authDomain}/${Lb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="webStorageSupport";class Hb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ef,this._completeRedirectFn=ub,this._overrideRedirectResult=ab}async _openPopup(e,n,s,i){var r;Ft((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Su(e,n,s,ya(),i);return Db(e,o,yl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Su(e,n,s,ya(),i);return jI(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Ft(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Ab(e),s=new db(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Uo,{type:Uo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Uo];o!==void 0&&n(!!o),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rf()||gl()||ro()}}const Wb=Hb;var Ru="@firebase/auth",Au="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $b(t){fs(new Dn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:of(t)},c=new gI(s,i,r,l);return vI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),fs(new Dn("auth-internal",e=>{const n=jn(e.getProvider("auth").getImmediate());return(s=>new Vb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Ru,Au,jb(t)),an(Ru,Au,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=5*60,qb=Md("authIdTokenMaxAge")||zb;let ku=null;const Kb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>qb)return;const i=n==null?void 0:n.token;ku!==i&&(ku=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wa(t=Vd()){const e=hl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mI(t,{popupRedirectResolver:Wb,persistence:[XI,HI,Ef]}),s=Md("authTokenSyncURL");if(s){const r=Kb(s);LI(n,r,()=>r(n.currentUser)),gf(n,o=>r(o))}const i=xd("auth");return i&&yI(n,`http://${i}`),n}$b("Browser");const Pu="@firebase/database",Nu="1.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rf="";function Gb(t){Rf=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Se(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ui(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Yb(e)}}catch{}return new Qb},An=Af("localStorage"),Ia=Af("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new cl("@firebase/database"),Jb=function(){let t=1;return function(){return t++}}(),kf=function(t){const e=DE(t),n=new PE;n.update(e);const s=n.digest();return rl.encodeByteArray(s)},xi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xi.apply(null,s):typeof s=="object"?e+=Se(s):e+=s,e+=" "}return e};let xn=null,Ou=!0;const Xb=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(rs.logLevel=ce.VERBOSE,xn=rs.log.bind(rs),e&&Ia.set("logging_enabled",!0)):typeof t=="function"?xn=t:(xn=null,Ia.remove("logging_enabled"))},Le=function(...t){if(Ou===!0&&(Ou=!1,xn===null&&Ia.get("logging_enabled")===!0&&Xb(!0)),xn){const e=xi.apply(null,t);xn(e)}},Di=function(t){return function(...e){Le(t,...e)}},ba=function(...t){const e="FIREBASE INTERNAL ERROR: "+xi(...t);rs.error(e)},Ut=function(...t){const e=`FIREBASE FATAL ERROR: ${xi(...t)}`;throw rs.error(e),new Error(e)},Qe=function(...t){const e="FIREBASE WARNING: "+xi(...t);rs.warn(e)},Zb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},e0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_s="[MIN_NAME]",Un="[MAX_NAME]",Ts=function(t,e){if(t===e)return 0;if(t===_s||e===Un)return-1;if(e===_s||t===Un)return 1;{const n=xu(t),s=xu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},t0=function(t,e){return t===e?0:t<e?-1:1},Ds=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Se(e))},wl=function(t){if(typeof t!="object"||t===null)return Se(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Se(e[s]),n+=":",n+=wl(t[e[s]]);return n+="}",n},Nf=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Of=function(t){S(!Pf(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},n0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},s0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function i0(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const r0=new RegExp("^-?(0*)\\d{1,10}$"),o0=-2147483648,a0=2147483647,xu=function(t){if(r0.test(t)){const e=Number(t);if(e>=o0&&e<=a0)return e}return null},Ss=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},l0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Js=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qe(e)}}class os{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}os.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="5",xf="v",Df="s",Mf="r",Lf="f",Ff=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Uf="ls",Bf="p",Ca="ac",Hf="websocket",Wf="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=An.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&An.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function h0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jf(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===Hf)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Wf)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);h0(t)&&(n.ns=t.namespace);const i=[];return Xe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.counters_={}}incrementCounter(e,n=1){Ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return fE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo={},Ho={};function bl(t){const e=t.toString();return Bo[e]||(Bo[e]=new d0),Bo[e]}function f0(t,e){const n=t.toString();return Ho[n]||(Ho[n]=e()),Ho[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ss(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="start",_0="close",g0="pLPCommand",m0="pRTLPCB",$f="id",zf="pw",qf="ser",v0="cb",y0="seg",E0="ts",w0="d",I0="dframe",Kf=1870,Gf=30,b0=Kf-Gf,C0=25e3,T0=3e4;class Zn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Di(e),this.stats_=bl(n),this.urlFn=l=>(this.appCheckToken&&(l[Ca]=this.appCheckToken),jf(n,Wf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new p0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(T0)),e0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Cl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Du)this.id=a,this.password=l;else if(o===_0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Du]="t",s[qf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[v0]=this.scriptTagHolder.uniqueCallbackIdentifier),s[xf]=Il,this.transportSessionId&&(s[Df]=this.transportSessionId),this.lastSessionId&&(s[Uf]=this.lastSessionId),this.applicationId&&(s[Bf]=this.applicationId),this.appCheckToken&&(s[Ca]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ff.test(location.hostname)&&(s[Mf]=Lf);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zn.forceAllow_=!0}static forceDisallow(){Zn.forceDisallow_=!0}static isAvailable(){return Zn.forceAllow_?!0:!Zn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!n0()&&!s0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Nd(n),i=Nf(s,b0);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[I0]="t",s[$f]=e,s[zf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Se(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Cl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jb(),window[g0+this.uniqueCallbackIdentifier]=e,window[m0+this.uniqueCallbackIdentifier]=n,this.myIFrame=Cl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Le("frame writing exception"),a.stack&&Le(a.stack),Le(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$f]=this.myID,e[zf]=this.myPW,e[qf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gf+s.length<=Kf;){const o=this.pendingSegs.shift();s=s+"&"+y0+i+"="+o.seg+"&"+E0+i+"="+o.ts+"&"+w0+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(C0)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=16384,R0=45e3;let Tr=null;typeof MozWebSocket<"u"?Tr=MozWebSocket:typeof WebSocket<"u"&&(Tr=WebSocket);class ot{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Di(this.connId),this.stats_=bl(n),this.connURL=ot.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[xf]=Il,typeof location<"u"&&location.hostname&&Ff.test(location.hostname)&&(o[Mf]=Lf),n&&(o[Df]=n),s&&(o[Uf]=s),i&&(o[Ca]=i),r&&(o[Bf]=r),jf(e,Hf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,An.set("previous_websocket_failure",!0);try{let s;Fd(),this.mySock=new Tr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Tr!==null&&!ot.forceDisallow_}static previouslyFailed(){return An.isInMemoryStorage||An.get("previous_websocket_failure")===!0}markConnectionHealthy(){An.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ui(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Nf(n,S0);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(R0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ot.responsesRequiredToBeHealthy=2;ot.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Zn,ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ot&&ot.isAvailable();let s=n&&!ot.previouslyFailed();if(e.webSocketOnly&&(n||Qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ot];else{const i=this.transports_=[];for(const r of _i.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);_i.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_i.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=6e4,k0=5e3,P0=10*1024,N0=100*1024,Wo="t",Mu="d",O0="s",Lu="r",x0="e",Fu="o",Uu="a",Bu="n",Hu="p",D0="h";class M0{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Di("c:"+this.id+":"),this.transportManager_=new _i(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Js(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>N0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>P0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wo in e){const n=e[Wo];n===Uu?this.upgradeIfSecondaryHealthy_():n===Lu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Fu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ds("t",e),s=Ds("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Hu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ds("t",e),s=Ds("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ds(Wo,e);if(Mu in e){const s=e[Mu];if(n===D0){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Bu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===O0?this.onConnectionShutdown_(s):n===Lu?this.onReset_(s):n===x0?ba("Server Error: "+s):n===Fu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ba("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Il!==s&&Qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Js(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(A0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Js(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(k0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Hu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(An.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Qf{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!al()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Sr}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=32,Vu=768;class de{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function se(){return new de("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function dn(t){return t.pieces_.length-t.pieceNum_}function _e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new de(t.pieces_,e)}function Jf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function L0(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xf(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Zf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new de(e,0)}function Re(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof de)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new de(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function $e(t,e){const n=Z(t),s=Z(e);if(n===null)return e;if(n===s)return $e(_e(t),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ep(t,e){if(dn(t)!==dn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function lt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(dn(t)>dn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class F0{constructor(e,n){this.errorPrefix_=n,this.parts_=Xf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=io(this.parts_[s]);tp(this)}}function U0(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=io(e),tp(t)}function B0(t){const e=t.parts_.pop();t.byteLength_-=io(e),t.parts_.length>0&&(t.byteLength_-=1)}function tp(t){if(t.byteLength_>Vu)throw new Error(t.errorPrefix_+"has a key path longer than "+Vu+" bytes ("+t.byteLength_+").");if(t.parts_.length>Wu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Wu+") or object contains a cycle "+In(t))}function In(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends Qf{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Tl}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=1e3,H0=60*5*1e3,ju=30*1e3,W0=1.3,V0=3e4,j0="server_kill",$u=3;class Mt extends Yf{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Mt.nextPersistentConnectionId_++,this.log_=Di("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ms,this.maxReconnectDelay_=H0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Fd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Tl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Se(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new so,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Mt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ht(e,"w")){const s=ds(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ju)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=AE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Se(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ba("Unrecognized action received from server: "+Se(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>V0&&(this.reconnectDelay_=Ms),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*W0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new M0(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Qe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(j0)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Qe(h),l())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fa(this.interruptReasons_)&&(this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>wl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new de(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$u&&(this.reconnectDelay_=ju,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$u&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Rf.replace(/\./g,"-")]=1,al()?e["framework.cordova"]=1:Ld()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sr.getInstance().currentlyOnline();return fa(this.interruptReasons_)&&e}}Mt.nextPersistentConnectionId_=0;Mt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Q(_s,e),i=new Q(_s,n);return this.compare(s,i)!==0}minPost(){return Q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki;class np extends lo{static get __EMPTY_NODE(){return Ki}static set __EMPTY_NODE(e){Ki=e}compare(e,n){return Ts(e.name,n.name)}isDefinedOn(e){throw ws("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(Un,Ki)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,Ki)}toString(){return".key"}}const as=new np;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Pe.RED,this.left=i??Ye.EMPTY_NODE,this.right=r??Ye.EMPTY_NODE}copy(e,n,s,i,r){return new Pe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ye.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pe.RED=!0;Pe.BLACK=!1;class $0{copy(e,n,s,i,r){return this}insert(e,n,s){return new Pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ye{constructor(e,n=Ye.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ye(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Pe.BLACK,null,null))}remove(e){return new Ye(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Gi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Gi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Gi(this.root_,null,this.comparator_,!0,e)}}Ye.EMPTY_NODE=new $0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t,e){return Ts(t.name,e.name)}function Sl(t,e){return Ts(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta;function q0(t){Ta=t}const sp=function(t){return typeof t=="number"?"number:"+Of(t):"string:"+t},ip=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ht(e,".sv"),"Priority must be a string or number.")}else S(t===Ta||t.isEmpty(),"priority of unexpected type.");S(t===Ta||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu;class ke{constructor(e,n=ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ip(this.priorityNode_)}static set __childrenNodeConstructor(e){zu=e}static get __childrenNodeConstructor(){return zu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:Z(e)===".priority"?this.priorityNode_:ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||dn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Of(this.value_):e+=this.value_,this.lazyHash_=kf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ke.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ke.VALUE_TYPE_ORDER.indexOf(n),r=ke.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rp,op;function K0(t){rp=t}function G0(t){op=t}class Y0 extends lo{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ts(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(Un,new ke("[PRIORITY-POST]",op))}makePost(e,n){const s=rp(e);return new Q(n,new ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ee=new Y0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=Math.log(2);class J0{constructor(e){const n=r=>parseInt(Math.log(r)/Q0,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Pe(d,h.node,Pe.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=i(l,_),w=i(_+1,c);return h=t[_],d=n?n(h):h,new Pe(d,h.node,Pe.BLACK,m,w)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,w){const k=h-m,P=h;h-=m;const O=i(k+1,P),z=t[k],M=n?n(z):z;_(new Pe(M,z.node,w,null,O))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const w=l.nextBitIsOne(),k=Math.pow(2,l.count-(m+1));w?d(k,Pe.BLACK):(d(k,Pe.BLACK),d(k,Pe.RED))}return u},o=new J0(t.length),a=r(o);return new Ye(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo;const Qn={};class xt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Qn&&Ee,"ChildrenNode.ts has not been loaded"),Vo=Vo||new xt({".priority":Qn},{".priority":Ee}),Vo}get(e){const n=ds(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ye?n:null}hasIndex(e){return Ht(this.indexSet_,e.toString())}addIndex(e,n){S(e!==as,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Rr(s,e.getCompare()):a=Qn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new xt(u,c)}addToIndexes(e,n){const s=mr(this.indexes_,(i,r)=>{const o=ds(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===Qn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Rr(a,o.getCompare())}else return Qn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Q(e.name,a))),l.insert(e,e.node)}});return new xt(s,this.indexSet_)}removeFromIndexes(e,n){const s=mr(this.indexes_,i=>{if(i===Qn)return i;{const r=n.get(e.name);return r?i.remove(new Q(e.name,r)):i}});return new xt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;class ${constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ip(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ls||(Ls=new $(new Ye(Sl),null,xt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ls}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ls:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Q(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ls:this.priorityNode_;return new $(i,o,r)}}updateChild(e,n){const s=Z(e);if(s===null)return n;{S(Z(e)!==".priority"||dn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(_e(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ee,(o,a)=>{n[o]=a.val(e),s++,r&&$.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+sp(this.getPriority().val())+":"),this.forEachChild(Ee,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":kf(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Q(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mi?-1:0}withIndex(e){if(e===as||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===as||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ee),i=n.getIterator(Ee);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===as?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class X0 extends ${constructor(){super(new Ye(Sl),$.EMPTY_NODE,xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const Mi=new X0;Object.defineProperties(Q,{MIN:{value:new Q(_s,$.EMPTY_NODE)},MAX:{value:new Q(Un,Mi)}});np.__EMPTY_NODE=$.EMPTY_NODE;ke.__childrenNodeConstructor=$;q0(Mi);G0(Mi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=!0;function Ne(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ke(n,Ne(e))}if(!(t instanceof Array)&&Z0){const n=[];let s=!1;if(Xe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ne(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Q(o,l)))}}),n.length===0)return $.EMPTY_NODE;const r=Rr(n,z0,o=>o.name,Sl);if(s){const o=Rr(n,Ee.getCompare());return new $(r,Ne(e),new xt({".priority":o},{".priority":Ee}))}else return new $(r,Ne(e),xt.Default)}else{let n=$.EMPTY_NODE;return Xe(t,(s,i)=>{if(Ht(t,s)&&s.substring(0,1)!=="."){const r=Ne(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ne(e))}}K0(Ne);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC extends lo{constructor(e){super(),this.indexPath_=e,S(!J(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ts(e.name,n.name):r}makePost(e,n){const s=Ne(e),i=$.EMPTY_NODE.updateChild(this.indexPath_,s);return new Q(n,i)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,Mi);return new Q(Un,e)}toString(){return Xf(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC extends lo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ts(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const s=Ne(e);return new Q(n,s)}toString(){return".value"}}const nC=new tC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t){return{type:"value",snapshotNode:t}}function gs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function mi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function sC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(gi(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(gs(n,s)):o.trackChildChange(mi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ee,(i,r)=>{n.hasChild(i)||s.trackChildChange(gi(i,r))}),n.isLeafNode()||n.forEachChild(Ee,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(mi(i,r,o))}else s.trackChildChange(gs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.indexedFilter_=new Rl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vi.getStartPost_(e),this.endPost_=vi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new Q(n,s))||(s=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=$.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority($.EMPTY_NODE);const r=this;return n.forEachChild(Ee,(o,a)=>{r.matches(new Q(o,a))||(i=i.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new vi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Q(n,s))||(s=$.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=$.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority($.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new Q(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(mi(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(gi(n,h));const w=a.updateImmediateChild(n,$.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(gs(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(gi(c.name,c.node)),r.trackChildChange(gs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,$.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_s}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Un}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new Al;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rC(t){return t.loadsAllData()?new Rl(t.getIndex()):t.hasLimit()?new iC(t):new vi(t)}function qu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ee?n="$priority":t.index_===nC?n="$value":t.index_===as?n="$key":(S(t.index_ instanceof eC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Se(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Se(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Se(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Se(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Se(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ku(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Yf{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Di("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ar.getListenId_(e,s),a={};this.listens_[o]=a;const l=qu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ds(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ar.getListenId_(e,n);delete this.listens_[s]}get(e){const n=qu(e._queryParams),s=e._path.toString(),i=new so;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Is(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ui(a.responseText)}catch{Qe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Qe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(){return{value:null,children:new Map}}function lp(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Z(e);t.children.has(s)||t.children.set(s,kr());const i=t.children.get(s);e=_e(e),lp(i,e,n)}}function Sa(t,e,n){t.value!==null?n(e,t.value):aC(t,(s,i)=>{const r=new de(e.toString()+"/"+s);Sa(i,r,n)})}function aC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Xe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=10*1e3,cC=30*1e3,uC=5*60*1e3;class hC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new lC(e);const s=Gu+(cC-Gu)*Math.random();Js(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Xe(e,(i,r)=>{r>0&&Ht(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Js(this.reportStats_.bind(this),Math.floor(Math.random()*2*uC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function cp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Pl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ct.ACK_USER_WRITE,this.source=cp()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(e));return new Pr(se(),n,this.revert)}}else return S(Z(this.path)===e,"operationForChild called for unrelated child."),new Pr(_e(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new yi(this.source,se()):new yi(this.source,_e(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ct.OVERWRITE}operationForChild(e){return J(this.path)?new Bn(this.source,se(),this.snap.getImmediateChild(e)):new Bn(this.source,_e(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ct.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new de(e));return n.isEmpty()?null:n.value?new Bn(this.source,se(),n.value):new Ei(this.source,se(),n)}else return S(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ei(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function fC(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(sC(o.childName,o.snapshotNode))}),Fs(t,i,"child_removed",e,s,n),Fs(t,i,"child_added",e,s,n),Fs(t,i,"child_moved",r,s,n),Fs(t,i,"child_changed",e,s,n),Fs(t,i,"value",e,s,n),i}function Fs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>_C(t,a,l)),o.forEach(a=>{const l=pC(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function pC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function _C(t,e,n){if(e.childName==null||n.childName==null)throw ws("Should only compare child_ events.");const s=new Q(e.childName,e.snapshotNode),i=new Q(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t,e){return{eventCache:t,serverCache:e}}function Xs(t,e,n,s){return co(new fn(e,n,s),t.serverCache)}function up(t,e,n,s){return co(t.eventCache,new fn(e,n,s))}function Nr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Hn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo;const gC=()=>(jo||(jo=new Ye(t0)),jo);class ve{constructor(e,n=gC()){this.value=e,this.children=n}static fromObject(e){let n=new ve(null);return Xe(e,(s,i)=>{n=n.set(new de(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:se(),value:this.value};if(J(e))return null;{const s=Z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(_e(e),n);return r!=null?{path:Re(new de(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=Z(e),s=this.children.get(n);return s!==null?s.subtree(_e(e)):new ve(null)}}set(e,n){if(J(e))return new ve(n,this.children);{const s=Z(e),r=(this.children.get(s)||new ve(null)).set(_e(e),n),o=this.children.insert(s,r);return new ve(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new ve(null):new ve(null,this.children);{const n=Z(e),s=this.children.get(n);if(s){const i=s.remove(_e(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ve(null):new ve(this.value,r)}else return this}}get(e){if(J(e))return this.value;{const n=Z(e),s=this.children.get(n);return s?s.get(_e(e)):null}}setTree(e,n){if(J(e))return n;{const s=Z(e),r=(this.children.get(s)||new ve(null)).setTree(_e(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ve(this.value,o)}}fold(e){return this.fold_(se(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Re(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,se(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(J(e))return null;{const r=Z(e),o=this.children.get(r);return o?o.findOnPath_(_e(e),Re(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,se(),n)}foreachOnPath_(e,n,s){if(J(e))return this;{this.value&&s(n,this.value);const i=Z(e),r=this.children.get(i);return r?r.foreachOnPath_(_e(e),Re(n,i),s):new ve(null)}}foreach(e){this.foreach_(se(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Re(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new ve(null))}}function Zs(t,e,n){if(J(e))return new ft(new ve(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=$e(i,e);return r=r.updateChild(o,n),new ft(t.writeTree_.set(i,r))}else{const i=new ve(n),r=t.writeTree_.setTree(e,i);return new ft(r)}}}function Yu(t,e,n){let s=t;return Xe(n,(i,r)=>{s=Zs(s,Re(e,i),r)}),s}function Qu(t,e){if(J(e))return ft.empty();{const n=t.writeTree_.setTree(e,new ve(null));return new ft(n)}}function Ra(t,e){return $n(t,e)!=null}function $n(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($e(n.path,e)):null}function Ju(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(s,i)=>{e.push(new Q(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Q(s,i.value))}),e}function ln(t,e){if(J(e))return t;{const n=$n(t,e);return n!=null?new ft(new ve(n)):new ft(t.writeTree_.subtree(e))}}function Aa(t){return t.writeTree_.isEmpty()}function ms(t,e){return hp(se(),t.writeTree_,e)}function hp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=hp(Re(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Re(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t,e){return _p(e,t)}function mC(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Zs(t.visibleWrites,e,n)),t.lastWriteId=s}function vC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function yC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&EC(a,s.path)?i=!1:lt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return wC(t),!0;if(s.snap)t.visibleWrites=Qu(t.visibleWrites,s.path);else{const a=s.children;Xe(a,l=>{t.visibleWrites=Qu(t.visibleWrites,Re(s.path,l))})}return!0}else return!1}function EC(t,e){if(t.snap)return lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&lt(Re(t.path,n),e))return!0;return!1}function wC(t){t.visibleWrites=dp(t.allWrites,IC,se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function IC(t){return t.visible}function dp(t,e,n){let s=ft.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)lt(n,o)?(a=$e(n,o),s=Zs(s,a,r.snap)):lt(o,n)&&(a=$e(o,n),s=Zs(s,se(),r.snap.getChild(a)));else if(r.children){if(lt(n,o))a=$e(n,o),s=Yu(s,a,r.children);else if(lt(o,n))if(a=$e(o,n),J(a))s=Yu(s,se(),r.children);else{const l=ds(r.children,Z(a));if(l){const c=l.getChild(_e(a));s=Zs(s,se(),c)}}}else throw ws("WriteRecord should have .snap or .children")}}return s}function fp(t,e,n,s,i){if(!s&&!i){const r=$n(t.visibleWrites,e);if(r!=null)return r;{const o=ln(t.visibleWrites,e);if(Aa(o))return n;if(n==null&&!Ra(o,se()))return null;{const a=n||$.EMPTY_NODE;return ms(o,a)}}}else{const r=ln(t.visibleWrites,e);if(!i&&Aa(r))return n;if(!i&&n==null&&!Ra(r,se()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(lt(c.path,e)||lt(e,c.path))},a=dp(t.allWrites,o,e),l=n||$.EMPTY_NODE;return ms(a,l)}}}function bC(t,e,n){let s=$.EMPTY_NODE;const i=$n(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ee,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ln(t.visibleWrites,e);return n.forEachChild(Ee,(o,a)=>{const l=ms(ln(r,new de(o)),a);s=s.updateImmediateChild(o,l)}),Ju(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ln(t.visibleWrites,e);return Ju(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function CC(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Re(e,n);if(Ra(t.visibleWrites,r))return null;{const o=ln(t.visibleWrites,r);return Aa(o)?i.getChild(n):ms(o,i.getChild(n))}}function TC(t,e,n,s){const i=Re(e,n),r=$n(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ln(t.visibleWrites,i);return ms(o,s.getNode().getImmediateChild(n))}else return null}function SC(t,e){return $n(t.visibleWrites,e)}function RC(t,e,n,s,i,r,o){let a;const l=ln(t.visibleWrites,e),c=$n(l,se());if(c!=null)a=c;else if(n!=null)a=ms(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function AC(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function Or(t,e,n,s){return fp(t.writeTree,t.treePath,e,n,s)}function Nl(t,e){return bC(t.writeTree,t.treePath,e)}function Xu(t,e,n,s){return CC(t.writeTree,t.treePath,e,n,s)}function xr(t,e){return SC(t.writeTree,Re(t.treePath,e))}function kC(t,e,n,s,i,r){return RC(t.writeTree,t.treePath,e,n,s,i,r)}function Ol(t,e,n){return TC(t.writeTree,t.treePath,e,n)}function pp(t,e){return _p(Re(t.treePath,e),t.writeTree)}function _p(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,mi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,gi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,gs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,mi(s,e.snapshotNode,i.oldSnap));else throw ws("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const gp=new NC;class xl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new fn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ol(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Hn(this.viewCache_),r=kC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t){return{filter:t}}function xC(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function DC(t,e,n,s,i){const r=new PC;let o,a;if(n.type===ct.OVERWRITE){const c=n;c.source.fromUser?o=ka(t,e,c.path,c.snap,s,i,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=Dr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===ct.MERGE){const c=n;c.source.fromUser?o=LC(t,e,c.path,c.children,s,i,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Pa(t,e,c.path,c.children,s,i,a,r))}else if(n.type===ct.ACK_USER_WRITE){const c=n;c.revert?o=BC(t,e,c.path,s,i,r):o=FC(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ct.LISTEN_COMPLETE)o=UC(t,e,n.path,s,r);else throw ws("Unknown operation type: "+n.type);const l=r.getChanges();return MC(e,o,l),{viewCache:o,changes:l}}function MC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Nr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(ap(Nr(e)))}}function mp(t,e,n,s,i,r){const o=e.eventCache;if(xr(s,n)!=null)return e;{let a,l;if(J(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Hn(e),u=c instanceof $?c:$.EMPTY_NODE,h=Nl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Or(s,Hn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Z(n);if(c===".priority"){S(dn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Xu(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=_e(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Xu(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Ol(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Xs(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function Dr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=Z(n);if(!l.isCompleteForPath(n)&&dn(n)>1)return e;const m=_e(n),k=l.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(l.getNode(),k):c=u.updateChild(l.getNode(),_,k,m,gp,null)}const h=up(e,c,l.isFullyInitialized()||J(n),u.filtersNodes()),d=new xl(i,h,r);return mp(t,h,n,i,d,a)}function ka(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new xl(i,e,r);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Xs(e,c,!0,t.filter.filtersNodes());else{const h=Z(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Xs(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=_e(n),_=a.getNode().getImmediateChild(h);let m;if(J(d))m=s;else{const w=u.getCompleteChild(h);w!=null?Jf(d)===".priority"&&w.getChild(Zf(d)).isEmpty()?m=w:m=w.updateChild(d,s):m=$.EMPTY_NODE}if(_.equals(m))l=e;else{const w=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Xs(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Zu(t,e){return t.eventCache.isCompleteForChild(e)}function LC(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Re(n,l);Zu(e,Z(u))&&(a=ka(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Re(n,l);Zu(e,Z(u))||(a=ka(t,a,u,c,i,r,o))}),a}function eh(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Pa(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=s:c=new ve(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=eh(t,_,d);l=Dr(t,l,new de(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),w=eh(t,m,d);l=Dr(t,l,new de(h),w,i,r,o,a)}}),l}function FC(t,e,n,s,i,r,o){if(xr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Dr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(J(n)){let c=new ve(null);return l.getNode().forEachChild(as,(u,h)=>{c=c.set(new de(u),h)}),Pa(t,e,n,c,i,r,a,o)}else return e}else{let c=new ve(null);return s.foreach((u,h)=>{const d=Re(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Pa(t,e,n,c,i,r,a,o)}}function UC(t,e,n,s,i){const r=e.serverCache,o=up(e,r.getNode(),r.isFullyInitialized()||J(n),r.isFiltered());return mp(t,o,n,s,gp,i)}function BC(t,e,n,s,i,r){let o;if(xr(s,n)!=null)return e;{const a=new xl(s,e,i),l=e.eventCache.getNode();let c;if(J(n)||Z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Or(s,Hn(e));else{const h=e.serverCache.getNode();S(h instanceof $,"serverChildren would be complete if leaf node"),u=Nl(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Z(n);let h=Ol(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,_e(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,$.EMPTY_NODE,_e(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Or(s,Hn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||xr(s,se())!=null,Xs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Rl(s.getIndex()),r=rC(s);this.processor_=OC(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode($.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode($.EMPTY_NODE,a.getNode(),null),u=new fn(l,o.isFullyInitialized(),i.filtersNodes()),h=new fn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=co(h,u),this.eventGenerator_=new dC(this.query_)}get query(){return this.query_}}function WC(t){return t.viewCache_.serverCache.getNode()}function VC(t){return Nr(t.viewCache_)}function jC(t,e){const n=Hn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function th(t){return t.eventRegistrations_.length===0}function $C(t,e){t.eventRegistrations_.push(e)}function nh(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function sh(t,e,n,s){e.type===ct.MERGE&&e.source.queryId!==null&&(S(Hn(t.viewCache_),"We should always have a full cache before handling merges"),S(Nr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=DC(t.processor_,i,e,n,s);return xC(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,vp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function zC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(r,o)=>{s.push(gs(r,o))}),n.isFullyInitialized()&&s.push(ap(n.getNode())),vp(t,s,n.getNode(),e)}function vp(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return fC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr;class yp{constructor(){this.views=new Map}}function qC(t){S(!Mr,"__referenceConstructor has already been defined"),Mr=t}function KC(){return S(Mr,"Reference.ts has not been loaded"),Mr}function GC(t){return t.views.size===0}function Dl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),sh(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(sh(o,e,n,s));return r}}function Ep(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Or(n,i?s:null),l=!1;a?l=!0:s instanceof $?(a=Nl(n,s),l=!1):(a=$.EMPTY_NODE,l=!1);const c=co(new fn(a,l,!1),new fn(s,i,!1));return new HC(e,c)}return o}function YC(t,e,n,s,i,r){const o=Ep(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),$C(o,n),zC(o,n)}function QC(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=pn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(nh(c,n,s)),th(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(nh(l,n,s)),th(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!pn(t)&&r.push(new(KC())(e._repo,e._path)),{removed:r,events:o}}function wp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function cn(t,e){let n=null;for(const s of t.views.values())n=n||jC(s,e);return n}function Ip(t,e){if(e._queryParams.loadsAllData())return ho(t);{const s=e._queryIdentifier;return t.views.get(s)}}function bp(t,e){return Ip(t,e)!=null}function pn(t){return ho(t)!=null}function ho(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr;function JC(t){S(!Lr,"__referenceConstructor has already been defined"),Lr=t}function XC(){return S(Lr,"Reference.ts has not been loaded"),Lr}let ZC=1;class ih{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ve(null),this.pendingWriteTree_=AC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Cp(t,e,n,s,i){return mC(t.pendingWriteTree_,e,n,s,i),i?Fi(t,new Bn(cp(),e,n)):[]}function kn(t,e,n=!1){const s=vC(t.pendingWriteTree_,e);if(yC(t.pendingWriteTree_,e)){let r=new ve(null);return s.snap!=null?r=r.set(se(),!0):Xe(s.children,o=>{r=r.set(new de(o),!0)}),Fi(t,new Pr(s.path,r,n))}else return[]}function Li(t,e,n){return Fi(t,new Bn(kl(),e,n))}function eT(t,e,n){const s=ve.fromObject(n);return Fi(t,new Ei(kl(),e,s))}function tT(t,e){return Fi(t,new yi(kl(),e))}function nT(t,e,n){const s=Ll(t,n);if(s){const i=Fl(s),r=i.path,o=i.queryId,a=$e(r,e),l=new yi(Pl(o),a);return Ul(t,r,l)}else return[]}function Tp(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||bp(o,e))){const l=QC(o,e,n,s);GC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>pn(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=oT(d);for(let m=0;m<_.length;++m){const w=_[m],k=w.query,P=kp(t,w);t.listenProvider_.startListening(ei(k),wi(t,k),P.hashFn,P.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ei(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(fo(d));t.listenProvider_.stopListening(ei(d),_)}))}aT(t,c)}return a}function Sp(t,e,n,s){const i=Ll(t,s);if(i!=null){const r=Fl(i),o=r.path,a=r.queryId,l=$e(o,e),c=new Bn(Pl(a),l,n);return Ul(t,o,c)}else return[]}function sT(t,e,n,s){const i=Ll(t,s);if(i){const r=Fl(i),o=r.path,a=r.queryId,l=$e(o,e),c=ve.fromObject(n),u=new Ei(Pl(a),l,c);return Ul(t,o,u)}else return[]}function iT(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=$e(d,i);r=r||cn(_,m),o=o||pn(_)});let a=t.syncPointTree_.get(i);a?(o=o||pn(a),r=r||cn(a,se())):(a=new yp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=$.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const w=cn(m,se());w&&(r=r.updateImmediateChild(_,w))}));const c=bp(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=fo(e);S(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=lT();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=uo(t.pendingWriteTree_,i);let h=YC(a,e,n,u,r,l);if(!c&&!o&&!s){const d=Ip(a,e);h=h.concat(cT(t,e,d))}return h}function Ml(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=$e(o,e),c=cn(a,l);if(c)return c});return fp(i,e,r,n,!0)}function rT(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=$e(c,n);s=s||cn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||cn(i,se()):(i=new yp,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new fn(s,!0,!1):null,a=uo(t.pendingWriteTree_,e._path),l=Ep(i,e,a,r?o.getNode():$.EMPTY_NODE,r);return VC(l)}function Fi(t,e){return Rp(e,t.syncPointTree_,null,uo(t.pendingWriteTree_,se()))}function Rp(t,e,n,s){if(J(t.path))return Ap(t,e,n,s);{const i=e.get(se());n==null&&i!=null&&(n=cn(i,se()));let r=[];const o=Z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=pp(s,o);r=r.concat(Rp(a,l,c,u))}return i&&(r=r.concat(Dl(i,t,s,n))),r}}function Ap(t,e,n,s){const i=e.get(se());n==null&&i!=null&&(n=cn(i,se()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=pp(s,o),u=t.operationForChild(o);u&&(r=r.concat(Ap(u,a,l,c)))}),i&&(r=r.concat(Dl(i,t,s,n))),r}function kp(t,e){const n=e.query,s=wi(t,n);return{hashFn:()=>(WC(e)||$.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?nT(t,n._path,s):tT(t,n._path);{const r=i0(i,n);return Tp(t,n,null,r)}}}}function wi(t,e){const n=fo(e);return t.queryToTagMap.get(n)}function fo(t){return t._path.toString()+"$"+t._queryIdentifier}function Ll(t,e){return t.tagToQueryMap.get(e)}function Fl(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new de(t.substr(0,e))}}function Ul(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=uo(t.pendingWriteTree_,e);return Dl(s,n,i,null)}function oT(t){return t.fold((e,n,s)=>{if(n&&pn(n))return[ho(n)];{let i=[];return n&&(i=wp(n)),Xe(s,(r,o)=>{i=i.concat(o)}),i}})}function ei(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(XC())(t._repo,t._path):t}function aT(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=fo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function lT(){return ZC++}function cT(t,e,n){const s=e._path,i=wi(t,e),r=kp(t,n),o=t.listenProvider_.startListening(ei(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)S(!pn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!J(c)&&u&&pn(u))return[ho(u).query];{let d=[];return u&&(d=d.concat(wp(u).map(_=>_.query))),Xe(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ei(u),wi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Bl(n)}node(){return this.node_}}class Hl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Re(this.path_,e);return new Hl(this.syncTree_,n)}node(){return Ml(this.syncTree_,this.path_)}}const uT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},rh=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return hT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return dT(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},hT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},dT=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},fT=function(t,e,n,s){return Wl(e,new Hl(n,t),s)},Pp=function(t,e,n){return Wl(t,new Bl(e),n)};function Wl(t,e,n){const s=t.getPriority().val(),i=rh(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=rh(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ke(a,Ne(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ke(i))),o.forEachChild(Ee,(a,l)=>{const c=Wl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function jl(t,e){let n=e instanceof de?e:new de(e),s=t,i=Z(n);for(;i!==null;){const r=ds(s.node.children,i)||{children:{},childCount:0};s=new Vl(i,s,r),n=_e(n),i=Z(n)}return s}function Rs(t){return t.node.value}function Np(t,e){t.node.value=e,Na(t)}function Op(t){return t.node.childCount>0}function pT(t){return Rs(t)===void 0&&!Op(t)}function po(t,e){Xe(t.node.children,(n,s)=>{e(new Vl(n,t,s))})}function xp(t,e,n,s){n&&!s&&e(t),po(t,i=>{xp(i,e,!0,s)}),n&&s&&e(t)}function _T(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ui(t){return new de(t.parent===null?t.name:Ui(t.parent)+"/"+t.name)}function Na(t){t.parent!==null&&gT(t.parent,t.name,t)}function gT(t,e,n){const s=pT(n),i=Ht(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Na(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Na(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=/[\[\].#$\/\u0000-\u001F\u007F]/,vT=/[\[\].#$\u0000-\u001F\u007F]/,$o=10*1024*1024,Dp=function(t){return typeof t=="string"&&t.length!==0&&!mT.test(t)},Mp=function(t){return typeof t=="string"&&t.length!==0&&!vT.test(t)},yT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Mp(t)},ET=function(t,e,n,s){s&&e===void 0||$l(ll(t,"value"),e,n)},$l=function(t,e,n){const s=n instanceof de?new F0(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+In(s));if(typeof e=="function")throw new Error(t+"contains a function "+In(s)+" with contents = "+e.toString());if(Pf(e))throw new Error(t+"contains "+e.toString()+" "+In(s));if(typeof e=="string"&&e.length>$o/3&&io(e)>$o)throw new Error(t+"contains a string greater than "+$o+" utf8 bytes "+In(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Xe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Dp(o)))throw new Error(t+" contains an invalid key ("+o+") "+In(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);U0(s,o),$l(t,a,s),B0(s)}),i&&r)throw new Error(t+' contains ".value" child '+In(s)+" in addition to actual children.")}},Lp=function(t,e,n,s){if(!(s&&n===void 0)&&!Mp(n))throw new Error(ll(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},wT=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Lp(t,e,n,s)},IT=function(t,e){if(Z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},bT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Dp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!yT(n))throw new Error(ll(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fp(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!ep(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function St(t,e,n){Fp(t,n),TT(t,s=>lt(s,e)||lt(e,s))}function TT(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(ST(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ST(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();xn&&Le("event: "+n.toString()),Ss(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="repo_interrupt",AT=25;class kT{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new CT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kr(),this.transactionQueueTree_=new Vl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function PT(t,e,n){if(t.stats_=bl(t.repoInfo_),t.forceRestClient_||l0())t.server_=new Ar(t.repoInfo_,(s,i,r,o)=>{oh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ah(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Se(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Mt(t.repoInfo_,e,(s,i,r,o)=>{oh(t,s,i,r,o)},s=>{ah(t,s)},s=>{OT(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=f0(t.repoInfo_,()=>new hC(t.stats_,t.server_)),t.infoData_=new oC,t.infoSyncTree_=new ih({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Li(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ql(t,"connected",!1),t.serverSyncTree_=new ih({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);St(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function NT(t){const n=t.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function zl(t){return uT({timestamp:NT(t)})}function oh(t,e,n,s,i){t.dataUpdateCount++;const r=new de(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=mr(n,c=>Ne(c));o=sT(t.serverSyncTree_,r,l,i)}else{const l=Ne(n);o=Sp(t.serverSyncTree_,r,l,i)}else if(s){const l=mr(n,c=>Ne(c));o=eT(t.serverSyncTree_,r,l)}else{const l=Ne(n);o=Li(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=go(t,r)),St(t.eventQueue_,a,o)}function ah(t,e){ql(t,"connected",e),e===!1&&MT(t)}function OT(t,e){Xe(e,(n,s)=>{ql(t,n,s)})}function ql(t,e,n){const s=new de("/.info/"+e),i=Ne(n);t.infoData_.updateSnapshot(s,i);const r=Li(t.infoSyncTree_,s,i);St(t.eventQueue_,s,r)}function Up(t){return t.nextWriteId_++}function xT(t,e,n){const s=rT(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ne(i).withIndex(e._queryParams.getIndex());iT(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Li(t.serverSyncTree_,e._path,r);else{const a=wi(t.serverSyncTree_,e);o=Sp(t.serverSyncTree_,e._path,r,a)}return St(t.eventQueue_,e._path,o),Tp(t.serverSyncTree_,e,n,null,!0),r},i=>(_o(t,"get for query "+Se(e)+" failed: "+i),Promise.reject(new Error(i))))}function DT(t,e,n,s,i){_o(t,"set",{path:e.toString(),value:n,priority:s});const r=zl(t),o=Ne(n,s),a=Ml(t.serverSyncTree_,e),l=Pp(o,a,r),c=Up(t),u=Cp(t.serverSyncTree_,e,l,c,!0);Fp(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||Qe("set at "+e+" failed: "+d);const w=kn(t.serverSyncTree_,c,!m);St(t.eventQueue_,e,w),FT(t,i,d,_)});const h=jp(t,e);go(t,h),St(t.eventQueue_,h,[])}function MT(t){_o(t,"onDisconnectEvents");const e=zl(t),n=kr();Sa(t.onDisconnect_,se(),(i,r)=>{const o=fT(i,r,t.serverSyncTree_,e);lp(n,i,o)});let s=[];Sa(n,se(),(i,r)=>{s=s.concat(Li(t.serverSyncTree_,i,r));const o=jp(t,i);go(t,o)}),t.onDisconnect_=kr(),St(t.eventQueue_,se(),s)}function LT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(RT)}function _o(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function FT(t,e,n,s){e&&Ss(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Bp(t,e,n){return Ml(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function Kl(t,e=t.transactionQueueTree_){if(e||mo(t,e),Rs(e)){const n=Wp(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&UT(t,Ui(e),n)}else Op(e)&&po(e,n=>{Kl(t,n)})}function UT(t,e,n){const s=n.map(c=>c.currentWriteId),i=Bp(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=$e(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{_o(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(kn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();mo(t,jl(t.transactionQueueTree_,e)),Kl(t,t.transactionQueueTree_),St(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ss(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Qe("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}go(t,e)}},o)}function go(t,e){const n=Hp(t,e),s=Ui(n),i=Wp(t,n);return BT(t,i,s),s}function BT(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=$e(n,l.path);let u=!1,h;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(kn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=AT)u=!0,h="maxretry",i=i.concat(kn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Bp(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){$l("transaction failed: Data returned ",_,l.path);let m=Ne(_);typeof _=="object"&&_!=null&&Ht(_,".priority")||(m=m.updatePriority(d.getPriority()));const k=l.currentWriteId,P=zl(t),O=Pp(m,d,P);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=O,l.currentWriteId=Up(t),o.splice(o.indexOf(k),1),i=i.concat(Cp(t.serverSyncTree_,l.path,O,l.currentWriteId,l.applyLocally)),i=i.concat(kn(t.serverSyncTree_,k,!0))}else u=!0,h="nodata",i=i.concat(kn(t.serverSyncTree_,l.currentWriteId,!0))}St(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}mo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ss(s[a]);Kl(t,t.transactionQueueTree_)}function Hp(t,e){let n,s=t.transactionQueueTree_;for(n=Z(e);n!==null&&Rs(s)===void 0;)s=jl(s,n),e=_e(e),n=Z(e);return s}function Wp(t,e){const n=[];return Vp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Vp(t,e,n){const s=Rs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);po(e,i=>{Vp(t,i,n)})}function mo(t,e){const n=Rs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Np(e,n.length>0?n:void 0)}po(e,s=>{mo(t,s)})}function jp(t,e){const n=Ui(Hp(t,e)),s=jl(t.transactionQueueTree_,e);return _T(s,i=>{zo(t,i)}),zo(t,s),xp(s,i=>{zo(t,i)}),n}function zo(t,e){const n=Rs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(kn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Np(e,void 0):n.length=r+1,St(t.eventQueue_,Ui(e),i);for(let o=0;o<s.length;o++)Ss(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function WT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const lh=function(t,e){const n=VT(t),s=n.namespace;n.domain==="firebase.com"&&Ut(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ut("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Zb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Vf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new de(n.pathString)}},VT=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=HT(t.substring(u,h)));const d=WT(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Se(this.snapshot.exportVal())}}class $T{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return J(this._path)?null:Jf(this._path)}get ref(){return new Wt(this._repo,this._path)}get _queryIdentifier(){const e=Ku(this._queryParams),n=wl(e);return n==="{}"?"default":n}get _queryObject(){return Ku(this._queryParams)}isEqual(e){if(e=ze(e),!(e instanceof Gl))return!1;const n=this._repo===e._repo,s=ep(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+L0(this._path)}}class Wt extends Gl{constructor(e,n){super(e,n,new Al,!1)}get parent(){const e=Zf(this._path);return e===null?null:new Wt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ii{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new de(e),s=Oa(this.ref,e);return new Ii(this._node.getChild(n),s,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ii(i,Oa(this.ref,s),Ee)))}hasChild(e){const n=new de(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Yi(t,e){return t=ze(t),t._checkNotDeleted("ref"),e!==void 0?Oa(t._root,e):t._root}function Oa(t,e){return t=ze(t),Z(t._path)===null?wT("child","path",e,!1):Lp("child","path",e,!1),new Wt(t._repo,Re(t._path,e))}function qT(t,e){t=ze(t),IT("set",t._path),ET("set",e,t._path,!1);const n=new so;return DT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function qo(t){t=ze(t);const e=new zT(()=>{}),n=new Yl(e);return xT(t._repo,t,n).then(s=>new Ii(s,new Wt(t._repo,t._path),t._queryParams.getIndex()))}class Yl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new jT("value",this,new Ii(e.snapshotNode,new Wt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new $T(this,e,n):null}matches(e){return e instanceof Yl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}qC(Wt);JC(Wt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="FIREBASE_DATABASE_EMULATOR_HOST",xa={};let GT=!1;function YT(t,e,n,s){t.repoInfo_=new Vf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function QT(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ut("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=lh(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[KT]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=lh(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new os(os.OWNER):new u0(t.name,t.options,e);bT("Invalid Firebase Database URL",o),J(o.path)||Ut("Database URL must point to the root of a Firebase Database (not including a child path).");const h=XT(a,t,u,new c0(t.name,n));return new ZT(h,t)}function JT(t,e){const n=xa[e];(!n||n[t.key]!==t)&&Ut(`Database ${e}(${t.repoInfo_}) has already been deleted.`),LT(t),delete n[t.key]}function XT(t,e,n,s){let i=xa[e.name];i||(i={},xa[e.name]=i);let r=i[t.toURLString()];return r&&Ut("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new kT(t,GT,n,s),i[t.toURLString()]=r,r}class ZT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(PT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wt(this._repo,se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(JT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ut("Cannot call "+e+" on a deleted database.")}}function eS(t=Vd(),e){const n=hl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=yE("database");s&&tS(n,...s)}return n}function tS(t,e,n,s={}){t=ze(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ut("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ut('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new os(os.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:EE(s.mockUserToken,t.app.options.projectId);r=new os(o)}YT(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t){Gb(bs),fs(new Dn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return QT(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),an(Pu,Nu,t),an(Pu,Nu,"esm2017")}Mt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Mt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};nS();const sS={apiKey:"AIzaSyAN9kBsJ0pVgAF8LsKGbY4ZkUVLStUle9g",authDomain:"backpacks3.firebaseapp.com",databaseURL:"https://backpacks3-default-rtdb.firebaseio.com",projectId:"backpacks3",storageBucket:"backpacks3.appspot.com",messagingSenderId:"379848683602",appId:"1:379848683602:web:c098398938547878842f8b"},$p=Wd(sS),Et=wa($p),Qi=eS($p),iS=[{path:"/",name:"Dashboard",component:()=>Hm(()=>import("./Dashboard-42ad6d5a.js"),["./Dashboard-42ad6d5a.js","./Dashboard-b2e9cd6f.css"],import.meta.url),meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:uE}],Pt=Vv({history:iv("./"),routes:iS});Pt.beforeEach((t,e,n)=>{const s=t.query.projectId,i=vo();if(t.path==="/login"&&Et.currentUser){n("/?projectId="+i.projectId);return}if(t.matched.some(r=>r.meta.requiresAuth)&&!Et.currentUser){s!==void 0&&(i.projectId=s),n("/login");return}n()});const vo=Fm({id:"user",state:()=>({user:null,publicConfigs:null,project:{theme:"brio"},projectId:null,projectFetched:!1,targetBadge:null,assertionData:null,emailVerificationSent:!1,isVerifyingEmail:!1,isLoading:!0,showForms:!1,formToShow:"login",badgeStatus:""}),actions:{setUser(t){this.user=t},clearUser(){this.user=null},async login(t){const{email:e,password:n}=t;try{await DI(Et,e,n)}catch(s){switch(s.code){case"auth/user-not-found":alert("Cet utilisateur n'existe pas. Veuillez vous inscrire.");break;case"auth/wrong-password":alert("Mauvais mot de passe. Veuillez réessayer.");break;default:alert("Quelque chose s'est mal passé. Veuillez réessayer.")}return}this.setUser(Et.currentUser)},async register(t){const{email:e,password:n,name:s}=t;try{const{user:i}=await xI(Et,e,n,s);await MI(i),this.emailVerificationSent=!0,this.isVerifyingEmail=!0;const r=Et.currentUser.uid;console.log(`User created with UID: ${r}`);const o={email:e,name:s,points:0,badges:"placeholder",answers:"placeholder",registeredAt:Date.now()};console.log(`Attempting to write to database with data: ${JSON.stringify(o)}`);const a=Yi(Qi,"users/"+r);try{await qT(a,o),console.log("Data successfully written to database.")}catch(l){console.error("Error writing to database:",l);return}}catch(i){switch(i.code){case"auth/email-already-in-use":alert("Email already in use");break;case"auth/invalid-email":alert("Invalid email");break;case"auth/operation-not-allowed":alert("Operation not allowed");break;case"auth/weak-password":alert("Weak password");break;default:console.error("Error during user registration:",i)}return}this.setUser(Et.currentUser)},async logout(){await Eu(Et),this.clearUser(),this.showForms=!1,Pt.push("/login")},async fetchTargetedBadge(){this.projectId==null&&(this.projectId=this.publicConfigs.defaultProject);const e=(await qo(Yi(Qi,"projects/"+this.projectId))).val();this.project=e,this.project.projectId=this.projectId;const s=(await qo(Yi(Qi,"badges/"+e.badgeClass))).val();this.targetBadge=s,this.targetBadge.badgeClass=e.badgeClass,this.projectFetched=!0},async fetchPublicConfigs(){const e=(await qo(Yi(Qi,"configs/"))).val();this.publicConfigs=e,this.publicConfigs.maintenance==!1?(this.fetchUser(),this.fetchTargetedBadge()):this.isLoading=!1},fetchUser(){gf(Et,async t=>{t?(this.setUser(t),Pt.isReady()&&Pt.currentRoute.value.path==="/login"&&(this.isVerifyingEmail=!t.emailVerified)):this.clearUser(),this.isLoading=!1})},async checkEmailVerification(){const t=wa();t.currentUser&&!t.currentUser.emailVerified&&(await t.currentUser.reload(),t.currentUser.emailVerified&&(this.isVerifyingEmail=!1,this.emailVerificationSent=!1,Pt.isReady()&&Pt.currentRoute.value.path==="/login"&&Pt.push("/")))},cancelEmailVerification(){const t=wa();t.currentUser&&Eu(t).then(()=>{this.clearUser(),this.isVerifyingEmail=!1,this.emailVerificationSent=!1,Pt.push("/login")}).catch(e=>{console.error("Error signing out:",e)})},async sendPasswordReset(t){try{await OI(Et,t),alert("Le courriel de réinitialisation du mot de passe a été envoyé.")}catch(e){console.error("Error sending password reset email:",e),alert("Nous n'avons pas pu envoyer le courriel de réinitialisation du mot de passe. Veuillez réessayer.")}}}});const rS=t=>(Kr("data-v-ee50e000"),t=t(),Gr(),t),oS={key:0,class:"landing-container fade-in"},aS=rS(()=>T("div",{class:"wrapper-alternate"},[T("i",{class:"fa fa-spinner fa-spin fa-3x fa-fw"})],-1)),lS=[aS],cS={__name:"App",setup(t){const e=vo();Ue(()=>e.user);const n=Ue(()=>e.isLoading);Ue(()=>e.isVerifyingEmail);const s=Ue(()=>{if(e.project.theme=="brio"||e.project.theme=="ul-yellow"||e.project.theme=="ul-red")return e.project.theme;{const i=document.documentElement;return i.style.setProperty("--color-theme",e.project.theme),i.style.setProperty("--color-theme-light",e.project.theme),i.style.setProperty("--color-theme-accent",e.project.theme),i.style.setProperty("--color-theme-button",e.project.theme),i.style.setProperty("--color-theme-button-hover",e.project.theme),"default"}});return Gh(()=>{setTimeout(()=>{e.fetchPublicConfigs()},1e3)}),(i,r)=>{const o=fg("router-view");return n.value?(Me(),je("div",oS,lS)):(Me(),je("div",{key:1,onContextmenu:r[0]||(r[0]=Hs(()=>{},["prevent"])),class:Ci(`theme-${s.value}`)},[be(o)],34))}}},uS=Si(cS,[["__scopeId","data-v-ee50e000"]]);Am(uS).use(Nm()).use(Pt).mount("#app");export{Oy as C,it as F,Si as _,Me as a,T as b,je as c,qs as d,be as e,xe as f,wa as g,zv as h,Be as i,Gr as j,qv as k,Sd as l,Ci as n,Qa as o,Kr as p,Dt as r,tc as t,vo as u,Tm as v,En as w};
