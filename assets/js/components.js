var Ux=Object.defineProperty;var ed=Rt=>{throw TypeError(Rt)};var Nx=(Rt,At,Ht)=>At in Rt?Ux(Rt,At,{enumerable:!0,configurable:!0,writable:!0,value:Ht}):Rt[At]=Ht;var jn=(Rt,At,Ht)=>Nx(Rt,typeof At!="symbol"?At+"":At,Ht),pc=(Rt,At,Ht)=>At.has(Rt)||ed("Cannot "+Ht);var ne=(Rt,At,Ht)=>(pc(Rt,At,"read from private field"),Ht?Ht.call(Rt):At.get(Rt)),ct=(Rt,At,Ht)=>At.has(Rt)?ed("Cannot add the same private member more than once"):At instanceof WeakSet?At.add(Rt):At.set(Rt,Ht),st=(Rt,At,Ht,Ri)=>(pc(Rt,At,"write to private field"),Ri?Ri.call(Rt,Ht):At.set(Rt,Ht),Ht),mn=(Rt,At,Ht)=>(pc(Rt,At,"access private method"),Ht);(function(){"use strict";var Ts,As,zr,ws,sa,aa,Vr,Rs,Mi,mc,vc,td,Xn,dc,Ei,Gr,bi,Yn,Tn,yi,qi,hr,Hr,pr,Cs,kr,Ps,Ds,Zi,Ja,Qt,Fx,Ox,gc,no,io,_c,oi,Ti,Un,Wr,oa,la,Qa,Qf;var At=Array.isArray,Ht=Array.prototype.indexOf,Ri=Array.prototype.includes,ua=Array.from,nd=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,id=Object.getOwnPropertyDescriptors,rd=Object.prototype,sd=Array.prototype,xc=Object.getPrototypeOf,Sc=Object.isExtensible;function ad(n){for(var e=0;e<n.length;e++)n[e]()}function Mc(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}const en=2,fa=4,da=8,Ec=1<<24,Ci=16,Kn=32,gr=64,ro=128,Bn=512,Zt=1024,xn=2048,Pi=4096,Rn=8192,Di=16384,so=32768,qr=65536,bc=1<<17,yc=1<<18,Zr=1<<19,od=1<<20,ji=1<<25,_r=32768,ao=1<<21,oo=1<<22,Ki=1<<23,Is=Symbol("$state"),ld=Symbol("legacy props"),cd=Symbol(""),jr=new class extends Error{constructor(){super(...arguments);jn(this,"name","StaleReactionError");jn(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function ud(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function fd(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function dd(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function hd(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function pd(n){throw new Error("https://svelte.dev/e/effect_orphan")}function md(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function vd(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function gd(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function _d(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function xd(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Sd(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Md=1,Ed=2,bd=16,yd=1,Td=4,Ad=8,wd=16,Rd=1,Cd=2,tn=Symbol(),Pd="http://www.w3.org/1999/xhtml";function Dd(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Tc(n){return n===this.v}function Ld(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Ac(n){return!Ld(n,this.v)}let Bx=!1,Cn=null;function Kr(n){Cn=n}function nn(n,e=!1,t){Cn={p:Cn,i:!1,c:null,e:null,s:n,x:null,l:null}}function rn(n){var e=Cn,t=e.e;if(t!==null){e.e=null;for(var i of t)qc(i)}return e.i=!0,Cn=e.p,{}}function wc(){return!0}let $r=[];function Id(){var n=$r;$r=[],ad(n)}function $i(n){if($r.length===0){var e=$r;queueMicrotask(()=>{e===$r&&Id()})}$r.push(n)}function Rc(n){var e=mt;if(e===null)return ot.f|=Ki,n;if((e.f&so)===0){if((e.f&ro)===0)throw n;e.b.error(n)}else Jr(n,e)}function Jr(n,e){for(;e!==null;){if((e.f&ro)!==0)try{e.b.error(n);return}catch(t){n=t}e=e.parent}throw n}const Ud=-7169;function kt(n,e){n.f=n.f&Ud|e}function lo(n){(n.f&Bn)!==0||n.deps===null?kt(n,Zt):kt(n,Pi)}function Cc(n){if(n!==null)for(const e of n)(e.f&en)===0||(e.f&_r)===0||(e.f^=_r,Cc(e.deps))}function Pc(n,e,t){(n.f&xn)!==0?e.add(n):(n.f&Pi)!==0&&t.add(n),Cc(n.deps),kt(n,Zt)}const ha=new Set;let gt=null,sn=null,$n=[],co=null,uo=!1;const fc=class fc{constructor(){ct(this,Mi);jn(this,"committed",!1);jn(this,"current",new Map);jn(this,"previous",new Map);ct(this,Ts,new Set);ct(this,As,new Set);ct(this,zr,0);ct(this,ws,0);ct(this,sa,null);ct(this,aa,new Set);ct(this,Vr,new Set);jn(this,"skipped_effects",new Set);jn(this,"is_fork",!1);ct(this,Rs,!1)}is_deferred(){return this.is_fork||ne(this,ws)>0}process(e){var r;$n=[],this.apply();var t=[],i=[];for(const s of e)mn(this,Mi,mc).call(this,s,t,i);if(this.is_deferred()){mn(this,Mi,vc).call(this,i),mn(this,Mi,vc).call(this,t);for(const s of this.skipped_effects)Uc(s)}else{for(const s of ne(this,Ts))s();ne(this,Ts).clear(),ne(this,zr)===0&&mn(this,Mi,td).call(this),gt=null,Dc(i),Dc(t),(r=ne(this,sa))==null||r.resolve()}sn=null}capture(e,t){t!==tn&&!this.previous.has(e)&&this.previous.set(e,t),(e.f&Ki)===0&&(this.current.set(e,e.v),sn==null||sn.set(e,e.v))}activate(){gt=this,this.apply()}deactivate(){gt===this&&(gt=null,sn=null)}flush(){if(this.activate(),$n.length>0){if(Nd(),gt!==null&&gt!==this)return}else ne(this,zr)===0&&this.process([]);this.deactivate()}discard(){for(const e of ne(this,As))e(this);ne(this,As).clear()}increment(e){st(this,zr,ne(this,zr)+1),e&&st(this,ws,ne(this,ws)+1)}decrement(e){st(this,zr,ne(this,zr)-1),e&&st(this,ws,ne(this,ws)-1),!ne(this,Rs)&&(st(this,Rs,!0),$i(()=>{st(this,Rs,!1),this.is_deferred()?$n.length>0&&this.flush():this.revive()}))}revive(){for(const e of ne(this,aa))ne(this,Vr).delete(e),kt(e,xn),Li(e);for(const e of ne(this,Vr))kt(e,Pi),Li(e);this.flush()}oncommit(e){ne(this,Ts).add(e)}ondiscard(e){ne(this,As).add(e)}settled(){return(ne(this,sa)??st(this,sa,Mc())).promise}static ensure(){if(gt===null){const e=gt=new fc;ha.add(gt),$i(()=>{gt===e&&e.flush()})}return gt}apply(){}};Ts=new WeakMap,As=new WeakMap,zr=new WeakMap,ws=new WeakMap,sa=new WeakMap,aa=new WeakMap,Vr=new WeakMap,Rs=new WeakMap,Mi=new WeakSet,mc=function(e,t,i){e.f^=Zt;for(var r=e.first,s=null;r!==null;){var a=r.f,o=(a&(Kn|gr))!==0,c=o&&(a&Zt)!==0,l=c||(a&Rn)!==0||this.skipped_effects.has(r);if(!l&&r.fn!==null){o?r.f^=Zt:s!==null&&(a&(fa|da|Ec))!==0?s.b.defer_effect(r):(a&fa)!==0?t.push(r):Fs(r)&&((a&Ci)!==0&&ne(this,Vr).add(r),Os(r));var u=r.first;if(u!==null){r=u;continue}}var f=r.parent;for(r=r.next;r===null&&f!==null;)f===s&&(s=null),r=f.next,f=f.parent}},vc=function(e){for(var t=0;t<e.length;t+=1)Pc(e[t],ne(this,aa),ne(this,Vr))},td=function(){var r;if(ha.size>1){this.previous.clear();var e=sn,t=!0;for(const s of ha){if(s===this){t=!1;continue}const a=[];for(const[c,l]of this.current){if(s.current.has(c))if(t&&l!==s.current.get(c))s.current.set(c,l);else continue;a.push(c)}if(a.length===0)continue;const o=[...s.current.keys()].filter(c=>!this.current.has(c));if(o.length>0){var i=$n;$n=[];const c=new Set,l=new Map;for(const u of a)Lc(u,o,c,l);if($n.length>0){gt=s,s.apply();for(const u of $n)mn(r=s,Mi,mc).call(r,u,[],[]);s.deactivate()}$n=i}}gt=null,sn=e}this.committed=!0,ha.delete(this)};let Ji=fc;function Nd(){uo=!0;var n=null;try{for(var e=0;$n.length>0;){var t=Ji.ensure();if(e++>1e3){var i,r;Fd()}t.process($n),Qi.clear()}}finally{uo=!1,co=null}}function Fd(){try{md()}catch(n){Jr(n,co)}}let Jn=null;function Dc(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(Di|Rn))===0&&Fs(i)&&(Jn=new Set,Os(i),i.deps===null&&i.first===null&&i.nodes===null&&(i.teardown===null&&i.ac===null?Jc(i):i.fn=null),(Jn==null?void 0:Jn.size)>0)){Qi.clear();for(const r of Jn){if((r.f&(Di|Rn))!==0)continue;const s=[r];let a=r.parent;for(;a!==null;)Jn.has(a)&&(Jn.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const c=s[o];(c.f&(Di|Rn))===0&&Os(c)}}Jn.clear()}}Jn=null}}function Lc(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const s=r.f;(s&en)!==0?Lc(r,e,t,i):(s&(oo|Ci))!==0&&(s&xn)===0&&Ic(r,e,i)&&(kt(r,xn),Li(r))}}function Ic(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(Ri.call(e,r))return!0;if((r.f&en)!==0&&Ic(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function Li(n){for(var e=co=n;e.parent!==null;){e=e.parent;var t=e.f;if(uo&&e===mt&&(t&Ci)!==0&&(t&yc)===0)return;if((t&(gr|Kn))!==0){if((t&Zt)===0)return;e.f^=Zt}}$n.push(e)}function Uc(n){if(!((n.f&Kn)!==0&&(n.f&Zt)!==0)){kt(n,Zt);for(var e=n.first;e!==null;)Uc(e),e=e.next}}function Od(n){let e=0,t=xr(0),i;return()=>{vo()&&(O(t),Zc(()=>(e===0&&(i=ga(()=>n(()=>Us(t)))),e+=1,()=>{$i(()=>{e-=1,e===0&&(i==null||i(),i=void 0,Us(t))})})))}}var Bd=qr|Zr|ro;function zd(n,e,t){new Vd(n,e,t)}class Vd{constructor(e,t,i){ct(this,Qt);jn(this,"parent");jn(this,"is_pending",!1);ct(this,Xn);ct(this,dc,null);ct(this,Ei);ct(this,Gr);ct(this,bi);ct(this,Yn,null);ct(this,Tn,null);ct(this,yi,null);ct(this,qi,null);ct(this,hr,null);ct(this,Hr,0);ct(this,pr,0);ct(this,Cs,!1);ct(this,kr,!1);ct(this,Ps,new Set);ct(this,Ds,new Set);ct(this,Zi,null);ct(this,Ja,Od(()=>(st(this,Zi,xr(ne(this,Hr))),()=>{st(this,Zi,null)})));st(this,Xn,e),st(this,Ei,t),st(this,Gr,i),this.parent=mt.b,this.is_pending=!!ne(this,Ei).pending,st(this,bi,go(()=>{mt.b=this;{var r=mn(this,Qt,gc).call(this);try{st(this,Yn,zn(()=>i(r)))}catch(s){this.error(s)}ne(this,pr)>0?mn(this,Qt,io).call(this):this.is_pending=!1}return()=>{var s;(s=ne(this,hr))==null||s.remove()}},Bd))}defer_effect(e){Pc(e,ne(this,Ps),ne(this,Ds))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!ne(this,Ei).pending}update_pending_count(e){mn(this,Qt,_c).call(this,e),st(this,Hr,ne(this,Hr)+e),!(!ne(this,Zi)||ne(this,Cs))&&(st(this,Cs,!0),$i(()=>{st(this,Cs,!1),ne(this,Zi)&&Qr(ne(this,Zi),ne(this,Hr))}))}get_effect_pending(){return ne(this,Ja).call(this),O(ne(this,Zi))}error(e){var t=ne(this,Ei).onerror;let i=ne(this,Ei).failed;if(ne(this,kr)||!t&&!i)throw e;ne(this,Yn)&&(Sn(ne(this,Yn)),st(this,Yn,null)),ne(this,Tn)&&(Sn(ne(this,Tn)),st(this,Tn,null)),ne(this,yi)&&(Sn(ne(this,yi)),st(this,yi,null));var r=!1,s=!1;const a=()=>{if(r){Dd();return}r=!0,s&&Sd(),Ji.ensure(),st(this,Hr,0),ne(this,yi)!==null&&Mr(ne(this,yi),()=>{st(this,yi,null)}),this.is_pending=this.has_pending_snippet(),st(this,Yn,mn(this,Qt,no).call(this,()=>(st(this,kr,!1),zn(()=>ne(this,Gr).call(this,ne(this,Xn)))))),ne(this,pr)>0?mn(this,Qt,io).call(this):this.is_pending=!1};$i(()=>{try{s=!0,t==null||t(e,a),s=!1}catch(o){Jr(o,ne(this,bi)&&ne(this,bi).parent)}i&&st(this,yi,mn(this,Qt,no).call(this,()=>{Ji.ensure(),st(this,kr,!0);try{return zn(()=>{i(ne(this,Xn),()=>e,()=>a)})}catch(o){return Jr(o,ne(this,bi).parent),null}finally{st(this,kr,!1)}}))})}}Xn=new WeakMap,dc=new WeakMap,Ei=new WeakMap,Gr=new WeakMap,bi=new WeakMap,Yn=new WeakMap,Tn=new WeakMap,yi=new WeakMap,qi=new WeakMap,hr=new WeakMap,Hr=new WeakMap,pr=new WeakMap,Cs=new WeakMap,kr=new WeakMap,Ps=new WeakMap,Ds=new WeakMap,Zi=new WeakMap,Ja=new WeakMap,Qt=new WeakSet,Fx=function(){try{st(this,Yn,zn(()=>ne(this,Gr).call(this,ne(this,Xn))))}catch(e){this.error(e)}},Ox=function(){const e=ne(this,Ei).pending;e&&(st(this,Tn,zn(()=>e(ne(this,Xn)))),$i(()=>{var t=mn(this,Qt,gc).call(this);st(this,Yn,mn(this,Qt,no).call(this,()=>(Ji.ensure(),zn(()=>ne(this,Gr).call(this,t))))),ne(this,pr)>0?mn(this,Qt,io).call(this):(Mr(ne(this,Tn),()=>{st(this,Tn,null)}),this.is_pending=!1)}))},gc=function(){var e=ne(this,Xn);return this.is_pending&&(st(this,hr,er()),ne(this,Xn).before(ne(this,hr)),e=ne(this,hr)),e},no=function(e){var t=mt,i=ot,r=Cn;Vn(ne(this,bi)),Mn(ne(this,bi)),Kr(ne(this,bi).ctx);try{return e()}catch(s){return Rc(s),null}finally{Vn(t),Mn(i),Kr(r)}},io=function(){const e=ne(this,Ei).pending;ne(this,Yn)!==null&&(st(this,qi,document.createDocumentFragment()),ne(this,qi).append(ne(this,hr)),tu(ne(this,Yn),ne(this,qi))),ne(this,Tn)===null&&st(this,Tn,zn(()=>e(ne(this,Xn))))},_c=function(e){var t;if(!this.has_pending_snippet()){this.parent&&mn(t=this.parent,Qt,_c).call(t,e);return}if(st(this,pr,ne(this,pr)+e),ne(this,pr)===0){this.is_pending=!1;for(const i of ne(this,Ps))kt(i,xn),Li(i);for(const i of ne(this,Ds))kt(i,Pi),Li(i);ne(this,Ps).clear(),ne(this,Ds).clear(),ne(this,Tn)&&Mr(ne(this,Tn),()=>{st(this,Tn,null)}),ne(this,qi)&&(ne(this,Xn).before(ne(this,qi)),st(this,qi,null))}};function Gd(n,e,t,i){const r=pa;var s=n.filter(d=>!d.settled);if(t.length===0&&s.length===0){i(e.map(r));return}var a=gt,o=mt,c=Hd(),l=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(d=>d.promise)):null;function u(d){c();try{i(d)}catch(m){(o.f&Di)===0&&Jr(m,o)}a==null||a.deactivate(),fo()}if(t.length===0){l.then(()=>u(e.map(r)));return}function f(){c(),Promise.all(t.map(d=>kd(d))).then(d=>u([...e.map(r),...d])).catch(d=>Jr(d,o))}l?l.then(f):f()}function Hd(){var n=mt,e=ot,t=Cn,i=gt;return function(s=!0){Vn(n),Mn(e),Kr(t),s&&(i==null||i.activate())}}function fo(){Vn(null),Mn(null),Kr(null)}function pa(n){var e=en|xn,t=ot!==null&&(ot.f&en)!==0?ot:null;return mt!==null&&(mt.f|=Zr),{ctx:Cn,deps:null,effects:null,equals:Tc,f:e,fn:n,reactions:null,rv:0,v:tn,wv:0,parent:t??mt,ac:null}}function kd(n,e,t){let i=mt;i===null&&fd();var r=i.b,s=void 0,a=xr(tn),o=!ot,c=new Map;return Qd(()=>{var m;var l=Mc();s=l.promise;try{Promise.resolve(n()).then(l.resolve,l.reject).then(()=>{u===gt&&u.committed&&u.deactivate(),fo()})}catch(v){l.reject(v),fo()}var u=gt;if(o){var f=r.is_rendered();r.update_pending_count(1),u.increment(f),(m=c.get(u))==null||m.reject(jr),c.delete(u),c.set(u,l)}const d=(v,_=void 0)=>{if(u.activate(),_)_!==jr&&(a.f|=Ki,Qr(a,_));else{(a.f&Ki)!==0&&(a.f^=Ki),Qr(a,v);for(const[p,h]of c){if(c.delete(p),p===u)break;h.reject(jr)}}o&&(r.update_pending_count(-1),u.decrement(f))};l.promise.then(d,v=>d(null,v||"unknown"))}),Xc(()=>{for(const l of c.values())l.reject(jr)}),new Promise(l=>{function u(f){function d(){f===s?l(a):u(s)}f.then(d,d)}u(s)})}function li(n){const e=pa(n);return iu(e),e}function Nc(n){const e=pa(n);return e.equals=Ac,e}function Fc(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)Sn(e[t])}}function Wd(n){for(var e=n.parent;e!==null;){if((e.f&en)===0)return(e.f&Di)===0?e:null;e=e.parent}return null}function ho(n){var e,t=mt;Vn(Wd(n));try{n.f&=~_r,Fc(n),e=lu(n)}finally{Vn(t)}return e}function Oc(n){var e=ho(n);if(!n.equals(e)&&(n.wv=au(),(!(gt!=null&&gt.is_fork)||n.deps===null)&&(n.v=e,n.deps===null))){kt(n,Zt);return}nr||(sn!==null?(vo()||gt!=null&&gt.is_fork)&&sn.set(n,e):lo(n))}let po=new Set;const Qi=new Map;let Bc=!1;function xr(n,e){var t={f:0,v:n,reactions:null,equals:Tc,rv:0,wv:0};return t}function Ft(n,e){const t=xr(n);return iu(t),t}function Xd(n,e=!1,t=!0){const i=xr(n);return e||(i.equals=Ac),i}function Ct(n,e,t=!1){ot!==null&&(!Qn||(ot.f&bc)!==0)&&wc()&&(ot.f&(en|Ci|oo|bc))!==0&&(Gn===null||!Ri.call(Gn,n))&&xd();let i=t?Sr(e):e;return Qr(n,i)}function Qr(n,e){if(!n.equals(e)){var t=n.v;nr?Qi.set(n,e):Qi.set(n,t),n.v=e;var i=Ji.ensure();if(i.capture(n,t),(n.f&en)!==0){const r=n;(n.f&xn)!==0&&ho(r),lo(r)}n.wv=au(),zc(n,xn),mt!==null&&(mt.f&Zt)!==0&&(mt.f&(Kn|gr))===0&&(Hn===null?th([n]):Hn.push(n)),!i.is_fork&&po.size>0&&!Bc&&Yd()}return e}function Yd(){Bc=!1;for(const n of po)(n.f&Zt)!==0&&kt(n,Pi),Fs(n)&&Os(n);po.clear()}function Us(n){Ct(n,n.v+1)}function zc(n,e){var t=n.reactions;if(t!==null)for(var i=t.length,r=0;r<i;r++){var s=t[r],a=s.f,o=(a&xn)===0;if(o&&kt(s,e),(a&en)!==0){var c=s;sn==null||sn.delete(c),(a&_r)===0&&(a&Bn&&(s.f|=_r),zc(c,Pi))}else o&&((a&Ci)!==0&&Jn!==null&&Jn.add(s),Li(s))}}function Sr(n){if(typeof n!="object"||n===null||Is in n)return n;const e=xc(n);if(e!==rd&&e!==sd)return n;var t=new Map,i=At(n),r=Ft(0),s=br,a=o=>{if(br===s)return o();var c=ot,l=br;Mn(null),su(s);var u=o();return Mn(c),su(l),u};return i&&t.set("length",Ft(n.length)),new Proxy(n,{defineProperty(o,c,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&gd();var u=t.get(c);return u===void 0?u=a(()=>{var f=Ft(l.value);return t.set(c,f),f}):Ct(u,l.value,!0),!0},deleteProperty(o,c){var l=t.get(c);if(l===void 0){if(c in o){const u=a(()=>Ft(tn));t.set(c,u),Us(r)}}else Ct(l,tn),Us(r);return!0},get(o,c,l){var m;if(c===Is)return n;var u=t.get(c),f=c in o;if(u===void 0&&(!f||(m=Yr(o,c))!=null&&m.writable)&&(u=a(()=>{var v=Sr(f?o[c]:tn),_=Ft(v);return _}),t.set(c,u)),u!==void 0){var d=O(u);return d===tn?void 0:d}return Reflect.get(o,c,l)},getOwnPropertyDescriptor(o,c){var l=Reflect.getOwnPropertyDescriptor(o,c);if(l&&"value"in l){var u=t.get(c);u&&(l.value=O(u))}else if(l===void 0){var f=t.get(c),d=f==null?void 0:f.v;if(f!==void 0&&d!==tn)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return l},has(o,c){var d;if(c===Is)return!0;var l=t.get(c),u=l!==void 0&&l.v!==tn||Reflect.has(o,c);if(l!==void 0||mt!==null&&(!u||(d=Yr(o,c))!=null&&d.writable)){l===void 0&&(l=a(()=>{var m=u?Sr(o[c]):tn,v=Ft(m);return v}),t.set(c,l));var f=O(l);if(f===tn)return!1}return u},set(o,c,l,u){var S;var f=t.get(c),d=c in o;if(i&&c==="length")for(var m=l;m<f.v;m+=1){var v=t.get(m+"");v!==void 0?Ct(v,tn):m in o&&(v=a(()=>Ft(tn)),t.set(m+"",v))}if(f===void 0)(!d||(S=Yr(o,c))!=null&&S.writable)&&(f=a(()=>Ft(void 0)),Ct(f,Sr(l)),t.set(c,f));else{d=f.v!==tn;var _=a(()=>Sr(l));Ct(f,_)}var p=Reflect.getOwnPropertyDescriptor(o,c);if(p!=null&&p.set&&p.set.call(u,l),!d){if(i&&typeof c=="string"){var h=t.get("length"),b=Number(c);Number.isInteger(b)&&b>=h.v&&Ct(h,b+1)}Us(r)}return!0},ownKeys(o){O(r);var c=Reflect.ownKeys(o).filter(f=>{var d=t.get(f);return d===void 0||d.v!==tn});for(var[l,u]of t)u.v!==tn&&!(l in o)&&c.push(l);return c},setPrototypeOf(){_d()}})}var Vc,Gc,Hc,kc;function qd(){if(Vc===void 0){Vc=window,Gc=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Hc=Yr(e,"firstChild").get,kc=Yr(e,"nextSibling").get,Sc(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),Sc(t)&&(t.__t=void 0)}}function er(n=""){return document.createTextNode(n)}function tr(n){return Hc.call(n)}function Ns(n){return kc.call(n)}function oe(n,e){return tr(n)}function jt(n,e=!1){{var t=tr(n);return t instanceof Comment&&t.data===""?Ns(t):t}}function je(n,e=1,t=!1){let i=n;for(;e--;)i=Ns(i);return i}function Zd(n){n.textContent=""}function Wc(){return!1}function mo(n){var e=ot,t=mt;Mn(null),Vn(null);try{return n()}finally{Mn(e),Vn(t)}}function jd(n){mt===null&&(ot===null&&pd(),hd()),nr&&dd()}function Kd(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Ii(n,e,t){var i=mt;i!==null&&(i.f&Rn)!==0&&(n|=Rn);var r={ctx:Cn,deps:null,nodes:null,f:n|xn|Bn,first:null,fn:e,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,wv:0,ac:null};if(t)try{Os(r),r.f|=so}catch(o){throw Sn(r),o}else e!==null&&Li(r);var s=r;if(t&&s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Zr)===0&&(s=s.first,(n&Ci)!==0&&(n&qr)!==0&&s!==null&&(s.f|=qr)),s!==null&&(s.parent=i,i!==null&&Kd(s,i),ot!==null&&(ot.f&en)!==0&&(n&gr)===0)){var a=ot;(a.effects??(a.effects=[])).push(s)}return r}function vo(){return ot!==null&&!Qn}function Xc(n){const e=Ii(da,null,!1);return kt(e,Zt),e.teardown=n,e}function Yc(n){jd();var e=mt.f,t=!ot&&(e&Kn)!==0&&(e&so)===0;if(t){var i=Cn;(i.e??(i.e=[])).push(n)}else return qc(n)}function qc(n){return Ii(fa|od,n,!1)}function $d(n){Ji.ensure();const e=Ii(gr|Zr,n,!0);return(t={})=>new Promise(i=>{t.outro?Mr(e,()=>{Sn(e),i(void 0)}):(Sn(e),i(void 0))})}function Jd(n){return Ii(fa,n,!1)}function Qd(n){return Ii(oo|Zr,n,!0)}function Zc(n,e=0){return Ii(da|e,n,!0)}function Oe(n,e=[],t=[],i=[]){Gd(i,e,t,r=>{Ii(da,()=>n(...r.map(O)),!0)})}function go(n,e=0){var t=Ii(Ci|e,n,!0);return t}function zn(n){return Ii(Kn|Zr,n,!0)}function jc(n){var e=n.teardown;if(e!==null){const t=nr,i=ot;nu(!0),Mn(null);try{e.call(null)}finally{nu(t),Mn(i)}}}function Kc(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&mo(()=>{r.abort(jr)});var i=t.next;(t.f&gr)!==0?t.parent=null:Sn(t,e),t=i}}function eh(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Kn)===0&&Sn(e),e=t}}function Sn(n,e=!0){var t=!1;(e||(n.f&yc)!==0)&&n.nodes!==null&&n.nodes.end!==null&&($c(n.nodes.start,n.nodes.end),t=!0),Kc(n,e&&!t),va(n,0),kt(n,Di);var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)s.stop();jc(n);var r=n.parent;r!==null&&r.first!==null&&Jc(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=null}function $c(n,e){for(;n!==null;){var t=n===e?null:Ns(n);n.remove(),n=t}}function Jc(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function Mr(n,e,t=!0){var i=[];Qc(n,i,!0);var r=()=>{t&&Sn(n),e&&e()},s=i.length;if(s>0){var a=()=>--s||r();for(var o of i)o.out(a)}else r()}function Qc(n,e,t){if((n.f&Rn)===0){n.f^=Rn;var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||t)&&e.push(o);for(var r=n.first;r!==null;){var s=r.next,a=(r.f&qr)!==0||(r.f&Kn)!==0&&(n.f&Ci)!==0;Qc(r,e,a?t:!1),r=s}}}function _o(n){eu(n,!0)}function eu(n,e){if((n.f&Rn)!==0){n.f^=Rn,(n.f&Zt)===0&&(kt(n,xn),Li(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&qr)!==0||(t.f&Kn)!==0;eu(t,r?e:!1),t=i}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||e)&&a.in()}}function tu(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:Ns(t);e.append(t),t=r}}let ma=!1,nr=!1;function nu(n){nr=n}let ot=null,Qn=!1;function Mn(n){ot=n}let mt=null;function Vn(n){mt=n}let Gn=null;function iu(n){ot!==null&&(Gn===null?Gn=[n]:Gn.push(n))}let En=null,Pn=0,Hn=null;function th(n){Hn=n}let ru=1,Er=0,br=Er;function su(n){br=n}function au(){return++ru}function Fs(n){var e=n.f;if((e&xn)!==0)return!0;if(e&en&&(n.f&=~_r),(e&Pi)!==0){for(var t=n.deps,i=t.length,r=0;r<i;r++){var s=t[r];if(Fs(s)&&Oc(s),s.wv>n.wv)return!0}(e&Bn)!==0&&sn===null&&kt(n,Zt)}return!1}function ou(n,e,t=!0){var i=n.reactions;if(i!==null&&!(Gn!==null&&Ri.call(Gn,n)))for(var r=0;r<i.length;r++){var s=i[r];(s.f&en)!==0?ou(s,e,!1):e===s&&(t?kt(s,xn):(s.f&Zt)!==0&&kt(s,Pi),Li(s))}}function lu(n){var _;var e=En,t=Pn,i=Hn,r=ot,s=Gn,a=Cn,o=Qn,c=br,l=n.f;En=null,Pn=0,Hn=null,ot=(l&(Kn|gr))===0?n:null,Gn=null,Kr(n.ctx),Qn=!1,br=++Er,n.ac!==null&&(mo(()=>{n.ac.abort(jr)}),n.ac=null);try{n.f|=ao;var u=n.fn,f=u(),d=n.deps,m=gt==null?void 0:gt.is_fork;if(En!==null){var v;if(m||va(n,Pn),d!==null&&Pn>0)for(d.length=Pn+En.length,v=0;v<En.length;v++)d[Pn+v]=En[v];else n.deps=d=En;if(vo()&&(n.f&Bn)!==0)for(v=Pn;v<d.length;v++)((_=d[v]).reactions??(_.reactions=[])).push(n)}else!m&&d!==null&&Pn<d.length&&(va(n,Pn),d.length=Pn);if(wc()&&Hn!==null&&!Qn&&d!==null&&(n.f&(en|Pi|xn))===0)for(v=0;v<Hn.length;v++)ou(Hn[v],n);if(r!==null&&r!==n){if(Er++,r.deps!==null)for(let p=0;p<t;p+=1)r.deps[p].rv=Er;if(e!==null)for(const p of e)p.rv=Er;Hn!==null&&(i===null?i=Hn:i.push(...Hn))}return(n.f&Ki)!==0&&(n.f^=Ki),f}catch(p){return Rc(p)}finally{n.f^=ao,En=e,Pn=t,Hn=i,ot=r,Gn=s,Kr(a),Qn=o,br=c}}function nh(n,e){let t=e.reactions;if(t!==null){var i=Ht.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&(e.f&en)!==0&&(En===null||!Ri.call(En,e))){var s=e;(s.f&Bn)!==0&&(s.f^=Bn,s.f&=~_r),lo(s),Fc(s),va(s,0)}}function va(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)nh(n,t[i])}function Os(n){var e=n.f;if((e&Di)===0){kt(n,Zt);var t=mt,i=ma;mt=n,ma=!0;try{(e&(Ci|Ec))!==0?eh(n):Kc(n),jc(n);var r=lu(n);n.teardown=typeof r=="function"?r:null,n.wv=ru;var s}finally{ma=i,mt=t}}}function O(n){var e=n.f,t=(e&en)!==0;if(ot!==null&&!Qn){var i=mt!==null&&(mt.f&Di)!==0;if(!i&&(Gn===null||!Ri.call(Gn,n))){var r=ot.deps;if((ot.f&ao)!==0)n.rv<Er&&(n.rv=Er,En===null&&r!==null&&r[Pn]===n?Pn++:En===null?En=[n]:En.push(n));else{(ot.deps??(ot.deps=[])).push(n);var s=n.reactions;s===null?n.reactions=[ot]:Ri.call(s,ot)||s.push(ot)}}}if(nr&&Qi.has(n))return Qi.get(n);if(t){var a=n;if(nr){var o=a.v;return((a.f&Zt)===0&&a.reactions!==null||uu(a))&&(o=ho(a)),Qi.set(a,o),o}var c=(a.f&Bn)===0&&!Qn&&ot!==null&&(ma||(ot.f&Bn)!==0),l=a.deps===null;Fs(a)&&(c&&(a.f|=Bn),Oc(a)),c&&!l&&cu(a)}if(sn!=null&&sn.has(n))return sn.get(n);if((n.f&Ki)!==0)throw n.v;return n.v}function cu(n){if(n.deps!==null){n.f|=Bn;for(const e of n.deps)(e.reactions??(e.reactions=[])).push(n),(e.f&en)!==0&&(e.f&Bn)===0&&cu(e)}}function uu(n){if(n.v===tn)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Qi.has(e)||(e.f&en)!==0&&uu(e))return!0;return!1}function ga(n){var e=Qn;try{return Qn=!0,n()}finally{Qn=e}}const ih=["touchstart","touchmove"];function rh(n){return ih.includes(n)}const fu=new Set,xo=new Set;function sh(n,e,t,i={}){function r(s){if(i.capture||Bs.call(e,s),!s.cancelBubble)return mo(()=>t==null?void 0:t.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?$i(()=>{e.addEventListener(n,r,i)}):e.addEventListener(n,r,i),r}function du(n,e,t,i,r){var s={capture:i,passive:r},a=sh(n,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Xc(()=>{e.removeEventListener(n,a,s)})}function ah(n){for(var e=0;e<n.length;e++)fu.add(n[e]);for(var t of xo)t(n)}let hu=null;function Bs(n){var p;var e=this,t=e.ownerDocument,i=n.type,r=((p=n.composedPath)==null?void 0:p.call(n))||[],s=r[0]||n.target;hu=n;var a=0,o=hu===n&&n.__root;if(o){var c=r.indexOf(o);if(c!==-1&&(e===document||e===window)){n.__root=e;return}var l=r.indexOf(e);if(l===-1)return;c<=l&&(a=c)}if(s=r[a]||n.target,s!==e){nd(n,"currentTarget",{configurable:!0,get(){return s||t}});var u=ot,f=mt;Mn(null),Vn(null);try{for(var d,m=[];s!==null;){var v=s.assignedSlot||s.parentNode||s.host||null;try{var _=s["__"+i];_!=null&&(!s.disabled||n.target===s)&&_.call(s,n)}catch(h){d?m.push(h):d=h}if(n.cancelBubble||v===e||v===null)break;s=v}if(d){for(let h of m)queueMicrotask(()=>{throw h});throw d}}finally{n.__root=e,delete n.currentTarget,Mn(u),Vn(f)}}}function pu(n){var e=document.createElement("template");return e.innerHTML=n.replaceAll("<!>","<!---->"),e.content}function _a(n,e){var t=mt;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function Ne(n,e){var t=(e&Rd)!==0,i=(e&Cd)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=pu(s?n:"<!>"+n),t||(r=tr(r)));var a=i||Gc?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=tr(a),c=a.lastChild;_a(o,c)}else _a(a,a);return a}}function ci(){var n=document.createDocumentFragment(),e=document.createComment(""),t=er();return n.append(e,t),_a(e,t),n}function Re(n,e){n!==null&&n.before(e)}function Wt(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t+"")}function oh(n,e){return lh(n,e)}const es=new Map;function lh(n,{target:e,anchor:t,props:i={},events:r,context:s,intro:a=!0}){qd();var o=new Set,c=f=>{for(var d=0;d<f.length;d++){var m=f[d];if(!o.has(m)){o.add(m);var v=rh(m);e.addEventListener(m,Bs,{passive:v});var _=es.get(m);_===void 0?(document.addEventListener(m,Bs,{passive:v}),es.set(m,1)):es.set(m,_+1)}}};c(ua(fu)),xo.add(c);var l=void 0,u=$d(()=>{var f=t??e.appendChild(er());return zd(f,{pending:()=>{}},d=>{if(s){nn({});var m=Cn;m.c=s}r&&(i.$$events=r),l=n(d,i)||{},s&&rn()}),()=>{var v;for(var d of o){e.removeEventListener(d,Bs);var m=es.get(d);--m===0?(document.removeEventListener(d,Bs),es.delete(d)):es.set(d,m)}xo.delete(c),f!==t&&((v=f.parentNode)==null||v.removeChild(f))}});return So.set(l,u),l}let So=new WeakMap;function ch(n,e){const t=So.get(n);return t?(So.delete(n),t(e)):Promise.resolve()}class uh{constructor(e,t=!0){jn(this,"anchor");ct(this,oi,new Map);ct(this,Ti,new Map);ct(this,Un,new Map);ct(this,Wr,new Set);ct(this,oa,!0);ct(this,la,()=>{var e=gt;if(ne(this,oi).has(e)){var t=ne(this,oi).get(e),i=ne(this,Ti).get(t);if(i)_o(i),ne(this,Wr).delete(t);else{var r=ne(this,Un).get(t);r&&(ne(this,Ti).set(t,r.effect),ne(this,Un).delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[s,a]of ne(this,oi)){if(ne(this,oi).delete(s),s===e)break;const o=ne(this,Un).get(a);o&&(Sn(o.effect),ne(this,Un).delete(a))}for(const[s,a]of ne(this,Ti)){if(s===t||ne(this,Wr).has(s))continue;const o=()=>{if(Array.from(ne(this,oi).values()).includes(s)){var l=document.createDocumentFragment();tu(a,l),l.append(er()),ne(this,Un).set(s,{effect:a,fragment:l})}else Sn(a);ne(this,Wr).delete(s),ne(this,Ti).delete(s)};ne(this,oa)||!i?(ne(this,Wr).add(s),Mr(a,o,!1)):o()}}});ct(this,Qa,e=>{ne(this,oi).delete(e);const t=Array.from(ne(this,oi).values());for(const[i,r]of ne(this,Un))t.includes(i)||(Sn(r.effect),ne(this,Un).delete(i))});this.anchor=e,st(this,oa,t)}ensure(e,t){var i=gt,r=Wc();if(t&&!ne(this,Ti).has(e)&&!ne(this,Un).has(e))if(r){var s=document.createDocumentFragment(),a=er();s.append(a),ne(this,Un).set(e,{effect:zn(()=>t(a)),fragment:s})}else ne(this,Ti).set(e,zn(()=>t(this.anchor)));if(ne(this,oi).set(i,e),r){for(const[o,c]of ne(this,Ti))o===e?i.skipped_effects.delete(c):i.skipped_effects.add(c);for(const[o,c]of ne(this,Un))o===e?i.skipped_effects.delete(c.effect):i.skipped_effects.add(c.effect);i.oncommit(ne(this,la)),i.ondiscard(ne(this,Qa))}else ne(this,la).call(this)}}oi=new WeakMap,Ti=new WeakMap,Un=new WeakMap,Wr=new WeakMap,oa=new WeakMap,la=new WeakMap,Qa=new WeakMap;function wt(n,e,t=!1){var i=new uh(n),r=t?qr:0;function s(a,o){i.ensure(a,o)}go(()=>{var a=!1;e((o,c=!0)=>{a=!0,s(c,o)}),a||s(!1,null)},r)}function ui(n,e){return e}function fh(n,e,t){for(var i=[],r=e.length,s,a=e.length,o=0;o<r;o++){let f=e[o];Mr(f,()=>{if(s){if(s.pending.delete(f),s.done.add(f),s.pending.size===0){var d=n.outrogroups;Mo(ua(s.done)),d.delete(s),d.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=i.length===0&&t!==null;if(c){var l=t,u=l.parentNode;Zd(u),u.append(l),n.items.clear()}Mo(e,!c)}else s={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(s)}function Mo(n,e=!0){for(var t=0;t<n.length;t++)Sn(n[t],e)}var mu;function fi(n,e,t,i,r,s=null){var a=n,o=new Map;{var c=n;a=c.appendChild(er())}var l=null,u=Nc(()=>{var p=t();return At(p)?p:p==null?[]:ua(p)}),f,d=!0;function m(){_.fallback=l,dh(_,f,a,e,i),l!==null&&(f.length===0?(l.f&ji)===0?_o(l):(l.f^=ji,Vs(l,null,a)):Mr(l,()=>{l=null}))}var v=go(()=>{f=O(u);for(var p=f.length,h=new Set,b=gt,S=Wc(),E=0;E<p;E+=1){var T=f[E],w=i(T,E),C=d?null:o.get(w);C?(C.v&&Qr(C.v,T),C.i&&Qr(C.i,E),S&&b.skipped_effects.delete(C.e)):(C=hh(o,d?a:mu??(mu=er()),T,w,E,r,e,t),d||(C.e.f|=ji),o.set(w,C)),h.add(w)}if(p===0&&s&&!l&&(d?l=zn(()=>s(a)):(l=zn(()=>s(mu??(mu=er()))),l.f|=ji)),!d)if(S){for(const[U,x]of o)h.has(U)||b.skipped_effects.add(x.e);b.oncommit(m),b.ondiscard(()=>{})}else m();O(u)}),_={effect:v,items:o,outrogroups:null,fallback:l};d=!1}function zs(n){for(;n!==null&&(n.f&Kn)===0;)n=n.next;return n}function dh(n,e,t,i,r){var U;var s=e.length,a=n.items,o=zs(n.effect.first),c,l=null,u=[],f=[],d,m,v,_;for(_=0;_<s;_+=1){if(d=e[_],m=r(d,_),v=a.get(m).e,n.outrogroups!==null)for(const x of n.outrogroups)x.pending.delete(v),x.done.delete(v);if((v.f&ji)!==0)if(v.f^=ji,v===o)Vs(v,null,t);else{var p=l?l.next:o;v===n.effect.last&&(n.effect.last=v.prev),v.prev&&(v.prev.next=v.next),v.next&&(v.next.prev=v.prev),ir(n,l,v),ir(n,v,p),Vs(v,p,t),l=v,u=[],f=[],o=zs(l.next);continue}if((v.f&Rn)!==0&&_o(v),v!==o){if(c!==void 0&&c.has(v)){if(u.length<f.length){var h=f[0],b;l=h.prev;var S=u[0],E=u[u.length-1];for(b=0;b<u.length;b+=1)Vs(u[b],h,t);for(b=0;b<f.length;b+=1)c.delete(f[b]);ir(n,S.prev,E.next),ir(n,l,S),ir(n,E,h),o=h,l=E,_-=1,u=[],f=[]}else c.delete(v),Vs(v,o,t),ir(n,v.prev,v.next),ir(n,v,l===null?n.effect.first:l.next),ir(n,l,v),l=v;continue}for(u=[],f=[];o!==null&&o!==v;)(c??(c=new Set)).add(o),f.push(o),o=zs(o.next);if(o===null)continue}(v.f&ji)===0&&u.push(v),l=v,o=zs(v.next)}if(n.outrogroups!==null){for(const x of n.outrogroups)x.pending.size===0&&(Mo(ua(x.done)),(U=n.outrogroups)==null||U.delete(x));n.outrogroups.size===0&&(n.outrogroups=null)}if(o!==null||c!==void 0){var T=[];if(c!==void 0)for(v of c)(v.f&Rn)===0&&T.push(v);for(;o!==null;)(o.f&Rn)===0&&o!==n.fallback&&T.push(o),o=zs(o.next);var w=T.length;if(w>0){var C=s===0?t:null;fh(n,T,C)}}}function hh(n,e,t,i,r,s,a,o){var c=(a&Md)!==0?(a&bd)===0?Xd(t,!1,!1):xr(t):null,l=(a&Ed)!==0?xr(r):null;return{v:c,i:l,e:zn(()=>(s(e,c??t,l??r,o),()=>{n.delete(i)}))}}function Vs(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=e&&(e.f&ji)===0?e.nodes.start:t;i!==null;){var a=Ns(i);if(s.before(i),i===r)return;i=a}}function ir(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function Kt(n,e,t=!1,i=!1,r=!1){var s=n,a="";Oe(()=>{var o=mt;if(a!==(a=e()??"")&&(o.nodes!==null&&($c(o.nodes.start,o.nodes.end),o.nodes=null),a!=="")){var c=a+"";t?c=`<svg>${c}</svg>`:i&&(c=`<math>${c}</math>`);var l=pu(c);if((t||i)&&(l=tr(l)),_a(tr(l),l.lastChild),t||i)for(;tr(l);)s.before(tr(l));else s.before(l)}})}const vu=[...` 	
\r\f \v\uFEFF`];function ph(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r in t)if(t[r])i=i?i+" "+r:r;else if(i.length)for(var s=r.length,a=0;(a=i.indexOf(r,a))>=0;){var o=a+s;(a===0||vu.includes(i[a-1]))&&(o===i.length||vu.includes(i[o]))?i=(a===0?"":i.substring(0,a))+i.substring(o+1):a=o}}return i===""?null:i}function mh(n,e){return n==null?null:String(n)}function ei(n,e,t,i,r,s){var a=n.__className;if(a!==t||a===void 0){var o=ph(t,i,s);o==null?n.removeAttribute("class"):n.className=o,n.__className=t}else if(s&&r!==s)for(var c in s){var l=!!s[c];(r==null||l!==!!r[c])&&n.classList.toggle(c,l)}return s}function Eo(n,e,t,i){var r=n.__style;if(r!==e){var s=mh(e);s==null?n.removeAttribute("style"):n.style.cssText=s,n.__style=e}return i}const vh=Symbol("is custom element"),gh=Symbol("is html");function zt(n,e,t,i){var r=_h(n);r[e]!==(r[e]=t)&&(e==="loading"&&(n[cd]=t),t==null?n.removeAttribute(e):typeof t!="string"&&gu(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function Et(n,e,t){var i=ot,r=mt;Mn(null),Vn(null);try{e!=="style"&&(bo.has(n.getAttribute("is")||n.nodeName)||!customElements||customElements.get(n.getAttribute("is")||n.tagName.toLowerCase())?gu(n).includes(e):t&&typeof t=="object")?n[e]=t:zt(n,e,t==null?t:String(t))}finally{Mn(i),Vn(r)}}function _h(n){return n.__attributes??(n.__attributes={[vh]:n.nodeName.includes("-"),[gh]:n.namespaceURI===Pd})}var bo=new Map;function gu(n){var e=n.getAttribute("is")||n.nodeName,t=bo.get(e);if(t)return t;bo.set(e,t=[]);for(var i,r=n,s=Element.prototype;s!==r;){i=id(r);for(var a in i)i[a].set&&t.push(a);r=xc(r)}return t}function _u(n,e){return n===e||(n==null?void 0:n[Is])===e}function di(n={},e,t,i){return Jd(()=>{var r,s;return Zc(()=>{r=s,s=[],ga(()=>{n!==t(...s)&&(e(n,...s),r&&_u(t(...r),n)&&e(null,...r))})}),()=>{$i(()=>{s&&_u(t(...s),n)&&e(null,...s)})}}),n}let xa=!1;function xh(n){var e=xa;try{return xa=!1,[n(),xa]}finally{xa=e}}function He(n,e,t,i){var b;var r=(t&Ad)!==0,s=(t&wd)!==0,a=i,o=!0,c=()=>(o&&(o=!1,a=s?ga(i):i),a),l;if(r){var u=Is in n||ld in n;l=((b=Yr(n,e))==null?void 0:b.set)??(u&&e in n?S=>n[e]=S:void 0)}var f,d=!1;r?[f,d]=xh(()=>n[e]):f=n[e],f===void 0&&i!==void 0&&(f=c(),l&&(vd(),l(f)));var m;if(m=()=>{var S=n[e];return S===void 0?c():(o=!0,S)},(t&Td)===0)return m;if(l){var v=n.$$legacy;return(function(S,E){return arguments.length>0?((!E||v||d)&&l(E?m():S),S):m()})}var _=!1,p=((t&yd)!==0?pa:Nc)(()=>(_=!1,m()));r&&O(p);var h=mt;return(function(S,E){if(arguments.length>0){const T=E?O(p):r?Sr(S):S;return Ct(p,T),_=!0,a!==void 0&&(a=T),S}return nr&&_||(h.f&Di)!==0?p.v:O(p)})}function hi(n){Cn===null&&ud(),Yc(()=>{const e=ga(n);if(typeof e=="function")return e})}function Pt(n,e,t=[]){class i extends HTMLElement{constructor(){super(...arguments);jn(this,"_component",null)}connectedCallback(){if(this._component)return;this.innerHTML="";let a={};const o=this.getAttribute("id");if(o){const c=document.querySelector(`script[data-for="${o}"]`);if(c)try{a=JSON.parse(c.textContent||"{}"),c.remove()}catch(l){console.warn(`Failed to parse JSON props for #${o}:`,l)}}if(Object.keys(a).length===0)for(const c of t){const l=this.getAttribute(c);if(l!==null)try{a[c]=JSON.parse(l)}catch{a[c]=l}}this._component=oh(e,{target:this,props:a})}disconnectedCallback(){this._component&&(ch(this._component),this._component=null)}}customElements.define(n,i)}const Sh="5";typeof window<"u"&&((Qf=window.__svelte??(window.__svelte={})).v??(Qf.v=new Set)).add(Sh);var Mh=Ne('<a class="link svelte-i67nal"><h3> </h3></a>'),Eh=Ne('<header data-nav-element="navbar" class="navbar svelte-i67nal"><div class="vignette svelte-i67nal"></div> <div class="inner svelte-i67nal"><button data-nav-element="overlay" aria-hidden="true" class="overlay svelte-i67nal"></button> <a aria-label="Go Back Home" class="logo svelte-i67nal">Austin Joseph</a> <ul role="list" class="drawer svelte-i67nal"><button type="button" class="drawer-close-hit svelte-i67nal" aria-label="Close navigation"></button> <li class="links svelte-i67nal"></li></ul> <button data-nav-element="menu" class="menu svelte-i67nal"><div class="marker svelte-i67nal"></div> <div>Menu</div></button></div></header>');function bh(n,e){nn(e,!0);let t=He(e,"rootpath",3,"/"),i=He(e,"links",19,()=>[]),r=Ft("closed");function s(){Ct(r,"closed"),document.body.style.overflow="",window.lenis&&window.lenis.start()}function a(){Ct(r,O(r)==="open"?"closed":"open",!0),document.body.style.overflow=O(r)==="open"?"hidden":"",window.lenis&&(O(r)==="open"?window.lenis.stop():window.lenis.start())}hi(()=>(window.addEventListener("navigation:exit",s),()=>window.removeEventListener("navigation:exit",s)));var o=Eh(),c=je(oe(o),2),l=oe(c);l.__click=s;var u=je(l,2),f=je(u,2),d=oe(f);d.__click=s;var m=je(d,2);fi(m,21,i,ui,(_,p)=>{var h=Mh(),b=oe(h),S=oe(b);Oe(()=>{zt(h,"href",O(p).href),Wt(S,O(p).label)}),Re(_,h)});var v=je(f,2);v.__click=a,Oe(()=>{zt(o,"data-nav-state",O(r)),zt(u,"href",t())}),Re(n,o),rn()}ah(["click"]);var yh=Ne('<img width="24" height="24" class="svelte-1hhfvj"/>'),Th=Ne("<span> </span>"),Ah=Ne('<li><a class="link svelte-1hhfvj" target="_blank" rel="noopener noreferrer"><!></a></li>'),wh=Ne('<footer><div class="vignette svelte-1hhfvj"></div> <div class="component svelte-1hhfvj"><div class="inner svelte-1hhfvj"><div class="row copyright svelte-1hhfvj"><div class="u-text-secondary svelte-1hhfvj"><div class="text-sm svelte-1hhfvj">© <span> </span> Austin Joseph.</div></div></div> <div class="location svelte-1hhfvj"><span class="location-label svelte-1hhfvj">London, England</span> <span class="location-time svelte-1hhfvj"> </span></div> <ul role="list" class="row svelte-1hhfvj"></ul></div></div></footer>');function Rh(n,e){nn(e,!0);let t=He(e,"fixed",3,!1),i=He(e,"links",19,()=>[]);const r=new Date().getFullYear();let s=Ft("");function a(){Ct(s,new Date().toLocaleTimeString("en-GB",{timeZone:"Europe/London",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}).toUpperCase(),!0)}Yc(()=>{a();const E=setInterval(a,1e3);return()=>clearInterval(E)});var o=wh();let c;var l=je(oe(o),2),u=oe(l),f=oe(u),d=oe(f),m=oe(d),v=je(oe(m)),_=oe(v),p=je(f,2),h=je(oe(p),2),b=oe(h),S=je(p,2);fi(S,21,i,ui,(E,T)=>{var w=Ah(),C=oe(w),U=oe(C);{var x=R=>{var z=yh();Oe(()=>{zt(z,"src",O(T).icon),zt(z,"alt",O(T).label)}),Re(R,z)},y=R=>{var z=Th(),D=oe(z);Oe(()=>Wt(D,O(T).label)),Re(R,z)};wt(U,R=>{O(T).icon?R(x):R(y,!1)})}Oe(()=>{zt(C,"href",O(T).href),zt(C,"title",O(T).label)}),Re(E,w)}),Oe(()=>{c=ei(o,1,"footer svelte-1hhfvj",null,c,{abs:t()}),Wt(_,r),Wt(b,`[${O(s)??""}]`)}),Re(n,o),rn()}var Ch=Ne('<h4 class="svelte-l43pdu"><!></h4>'),Ph=Ne('<div class="preloader svelte-l43pdu"><div class="preloader-canvas svelte-l43pdu"><c-drum></c-drum></div> <div class="preloader-footer svelte-l43pdu"><!> <div class="progress-row svelte-l43pdu"><div class="progress-bar svelte-l43pdu"><div class="progress-thumb svelte-l43pdu"></div></div> <p class="progress-pct svelte-l43pdu"> </p></div></div></div>',2);function Dh(n,e){nn(e,!0);let t=He(e,"title",3,""),i=He(e,"images",19,()=>[]),r=Ft(void 0),s=Ft(void 0),a=Ft(0);hi(()=>{const b=window.gsap;if(!b)return;document.body.style.cursor="wait";const S=5.16,E={value:0},T=()=>{Ct(a,E.value,!0)},w=b.timeline();return w.to(E,{value:12,duration:S*.15,ease:"power2.inOut",onUpdate:T}),w.to(E,{value:60,duration:S*.25,ease:"power2.inOut",onUpdate:T}),w.to(E,{value:84,duration:S*.3,ease:"power2.inOut",onUpdate:T}),w.to(E,{value:100,duration:S*.25,ease:"power2.inOut",onUpdate:T}),w.to(O(s),{opacity:0,duration:.25,ease:"power2.out",delay:.15}),w.to(O(r),{opacity:0,duration:.3,ease:"power2.out",onStart:()=>{document.body.style.cursor="",window.dispatchEvent(new CustomEvent("preloader:exit"))},onComplete:()=>{var U;const C=(U=O(r))==null?void 0:U.closest("c-preloader");C&&C.remove()}}),()=>{w.kill()}});var o=Ph(),c=oe(o),l=oe(c);Oe(()=>Et(l,"images",JSON.stringify(i()))),ei(l,1,"svelte-l43pdu");var u=je(c,2),f=oe(u);{var d=b=>{var S=Ch(),E=oe(S);Kt(E,t),Re(b,S)};wt(f,b=>{t()&&b(d)})}var m=je(f,2),v=oe(m),_=oe(v),p=je(v,2),h=oe(p);di(u,b=>Ct(s,b),()=>O(s)),di(o,b=>Ct(r,b),()=>O(r)),Oe(b=>{Eo(_,`width: ${O(a)??""}%`),Wt(h,`${b??""}%`)},[()=>Math.round(O(a))]),Re(n,o),rn()}var Lh=Ne('<div class="info svelte-bahvkp" aria-hidden="true"><span class="u-text-secondary u-text-info"> </span> <span class="u-text-info"> </span></div>'),Ih=Ne('<main class="main svelte-bahvkp"><section class="section-hr svelte-bahvkp"><div class="container-xl svelte-bahvkp"><div class="inner svelte-bahvkp" data-canvas-map=""><div class="wrap svelte-bahvkp"><div class="text svelte-bahvkp"><div class="heading svelte-bahvkp"><div class="heading-text svelte-bahvkp"><div class="eyebrow svelte-bahvkp"><div></div> <div class="eyebrow-text svelte-bahvkp"> </div></div> <h1 class="svelte-bahvkp"><!></h1></div> <c-button></c-button></div></div></div> <div class="track svelte-bahvkp"><!> <c-strip></c-strip> <!></div></div></div></section></main>',2);function Uh(n,e){nn(e,!0);let t=He(e,"eyebrow",3,"Available for freelance work"),i=He(e,"availabilitystatus",3,"available"),r=He(e,"title",3,""),s=He(e,"buttonlabel",3,"Get in touch"),a=He(e,"buttonhref",3,"#"),o=He(e,"projects",19,()=>[]),c;const l="strip-"+Math.random().toString(36).slice(2,8);let u=Ft(0),f=Ft(-1);const d=li(()=>O(f)!==-1?O(f):O(u)),m=li(()=>i()==="hold"||i()==="on_hold"?"hold":i()==="blocked"||i()==="not_accepting"?"blocked":"available");hi(()=>{if(o().length===0)return;const Y=j=>{const $=j.detail;($==null?void 0:$.index)!=null&&Ct(u,$.index,!0)},ae=j=>{const $=j.detail;($==null?void 0:$.index)!=null&&Ct(f,$.index,!0)};return c==null||c.addEventListener("strip:update",Y),c==null||c.addEventListener("strip:hover",ae),()=>{c==null||c.removeEventListener("strip:update",Y),c==null||c.removeEventListener("strip:hover",ae)}});var v=Ih(),_=oe(v),p=oe(_),h=oe(p),b=oe(h),S=oe(b),E=oe(S),T=oe(E),w=oe(T),C=oe(w),U=je(C,2),x=oe(U),y=je(w,2),R=oe(y);Kt(R,r);var z=je(T,2);Oe(()=>Et(z,"label",s())),Oe(()=>Et(z,"href",a())),Et(z,"arialabel","Read more about me"),Et(z,"active",!0);var D=je(b,2),V=oe(D);{var k=Y=>{var ae=Lh(),j=oe(ae),$=oe(j),ge=je(j,2),ce=oe(ge);Oe(()=>{var ye,Fe;Wt($,(ye=o()[O(d)])==null?void 0:ye.name),Wt(ce,(Fe=o()[O(d)])==null?void 0:Fe.title)}),Re(Y,ae)};wt(V,Y=>{o().length&&Y(k)})}var N=je(V,2);Oe(()=>Et(N,"id",l));var B=je(N,2);Kt(B,()=>`<script type="application/json" data-for="${l}">${JSON.stringify({projects:o()}).replace(/<\//g,"<\\/")}<\/script>`),di(D,Y=>c=Y,()=>c),Oe(()=>{ei(C,1,`marker is-${O(m)}`,"svelte-bahvkp"),Wt(x,t())}),Re(n,v),rn()}var Nh=Ne("<b-margin-header></b-margin-header> <!>",3),Fh=Ne("<b-margin-text></b-margin-text> <!>",3),Oh=Ne('<section class="section ab svelte-1ijkaem"><div class="container-xl py-lg pb-0"><div class="l-inner svelte-1ijkaem"><div class="col-img svelte-1ijkaem"></div> <div class="col-body svelte-1ijkaem"></div></div></div></section>');function Bh(n,e){He(e,"images",19,()=>[]);let t=He(e,"items",19,()=>[]);var i=Oh(),r=oe(i),s=oe(r),a=je(oe(s),2);fi(a,21,t,ui,(o,c)=>{const l=li(()=>`ab-${O(c).id}`);var u=ci(),f=jt(u);{var d=v=>{var _=Nh(),p=jt(_);Oe(()=>Et(p,"id",O(l)));var h=je(p,2);Kt(h,()=>`<script type="application/json" data-for="${O(l)}">${JSON.stringify({title:O(c).title,description:O(c).description,layout:O(c).layout})}<\/script>`),Re(v,_)},m=v=>{var _=ci(),p=jt(_);{var h=b=>{var S=Fh(),E=jt(S);Oe(()=>Et(E,"id",O(l)));var T=je(E,2);Kt(T,()=>`<script type="application/json" data-for="${O(l)}">${JSON.stringify({columns:O(c).columns,items:O(c).items})}<\/script>`),Re(b,S)};wt(p,b=>{O(c).type==="b-margin-text"&&b(h)},!0)}Re(v,_)};wt(f,v=>{O(c).type==="b-margin-header"?v(d):v(m,!1)})}Re(o,u)}),Re(n,i)}var zh=Ne("<b-header></b-header> <!>",3),Vh=Ne("<b-margin-header></b-margin-header> <!>",3),Gh=Ne("<b-text></b-text> <!>",3),Hh=Ne("<b-margin-text></b-margin-text> <!>",3),kh=Ne("<b-img></b-img> <!>",3),Wh=Ne("<b-grid></b-grid> <!>",3),Xh=Ne('<section class="section tx svelte-12lz2p6"><div class="container-xl py-lg"><div class="l-inner svelte-12lz2p6"><div class="col-spacer svelte-12lz2p6" aria-hidden="true"></div> <div class="col-body svelte-12lz2p6"></div></div></div></section>');function Yh(n,e){let t=He(e,"items",19,()=>[]);var i=Xh(),r=oe(i),s=oe(r),a=je(oe(s),2);fi(a,21,t,ui,(o,c)=>{const l=li(()=>`tx-${O(c).id}`);var u=ci(),f=jt(u);{var d=v=>{var _=zh(),p=jt(_);Oe(()=>Et(p,"id",O(l)));var h=je(p,2);Kt(h,()=>`<script type="application/json" data-for="${O(l)}">${JSON.stringify({title:O(c).title,description:O(c).description,layout:O(c).layout})}<\/script>`),Re(v,_)},m=v=>{var _=ci(),p=jt(_);{var h=S=>{var E=Vh(),T=jt(E);Oe(()=>Et(T,"id",O(l)));var w=je(T,2);Kt(w,()=>`<script type="application/json" data-for="${O(l)}">${JSON.stringify({title:O(c).title,description:O(c).description,layout:O(c).layout})}<\/script>`),Re(S,E)},b=S=>{var E=ci(),T=jt(E);{var w=U=>{var x=Gh(),y=jt(x);Oe(()=>Et(y,"id",O(l)));var R=je(y,2);Kt(R,()=>`<script type="application/json" data-for="${O(l)}">${JSON.stringify({columns:O(c).columns,items:O(c).items})}<\/script>`),Re(U,x)},C=U=>{var x=ci(),y=jt(x);{var R=D=>{var V=Hh(),k=jt(V);Oe(()=>Et(k,"id",O(l)));var N=je(k,2);Kt(N,()=>`<script type="application/json" data-for="${O(l)}">${JSON.stringify({columns:O(c).columns,items:O(c).items})}<\/script>`),Re(D,V)},z=D=>{var V=ci(),k=jt(V);{var N=Y=>{var ae=kh(),j=jt(ae);Oe(()=>Et(j,"id",O(l)));var $=je(j,2);Kt($,()=>`<script type="application/json" data-for="${O(l)}">${JSON.stringify({images:O(c).images,spacing:O(c).spacing})}<\/script>`),Re(Y,ae)},B=Y=>{var ae=ci(),j=jt(ae);{var $=ge=>{var ce=Wh(),ye=jt(ce);Oe(()=>Et(ye,"id",O(l)));var Fe=je(ye,2);Kt(Fe,()=>`<script type="application/json" data-for="${O(l)}">${JSON.stringify({columns:O(c).columns,items:O(c).items})}<\/script>`),Re(ge,ce)};wt(j,ge=>{O(c).type==="b-grid"&&ge($)},!0)}Re(Y,ae)};wt(k,Y=>{O(c).type==="b-img"?Y(N):Y(B,!1)},!0)}Re(D,V)};wt(y,D=>{O(c).type==="b-margin-text"?D(R):D(z,!1)},!0)}Re(U,x)};wt(T,U=>{O(c).type==="b-text"?U(w):U(C,!1)},!0)}Re(S,E)};wt(p,S=>{O(c).type==="b-margin-header"?S(h):S(b,!1)},!0)}Re(v,_)};wt(f,v=>{O(c).type==="b-header"?v(d):v(m,!1)})}Re(o,u)}),Re(n,i)}var qh=Ne('<div class="message svelte-n2mvd"><p class="svelte-n2mvd"> </p></div>'),Zh=Ne('<div class="section svelte-n2mvd"><div class="container svelte-n2mvd"><div class="inner svelte-n2mvd"><div class="heading svelte-n2mvd"><div class="title svelte-n2mvd"><h1 class="svelte-n2mvd"> </h1></div> <!></div> <c-button></c-button></div></div></div>',2);function jh(n,e){let t=He(e,"title",3,"page not found."),i=He(e,"message",3,""),r=He(e,"buttonlabel",3,"Go back Home"),s=He(e,"buttonhref",3,"/");var a=Zh(),o=oe(a),c=oe(o),l=oe(c),u=oe(l),f=oe(u),d=oe(f),m=je(u,2);{var v=p=>{var h=qh(),b=oe(h),S=oe(b);Oe(()=>Wt(S,i())),Re(p,h)};wt(m,p=>{i()&&p(v)})}var _=je(l,2);Oe(()=>Et(_,"href",s())),Oe(()=>Et(_,"label",r())),Et(_,"active","true"),Oe(()=>Wt(d,t())),Re(n,a)}var Kh=Ne('<div class="message svelte-1cu9g3s"><p class="svelte-1cu9g3s"> </p></div>'),$h=Ne('<div class="section svelte-1cu9g3s"><div class="container svelte-1cu9g3s"><div class="inner svelte-1cu9g3s"><div class="heading svelte-1cu9g3s"><div class="title svelte-1cu9g3s"><h1 class="svelte-1cu9g3s">coming soon.</h1></div> <!></div> <c-button></c-button></div></div></div>',2);function Jh(n,e){let t=He(e,"message",3,"Still in progress. One day I'll stop overthinking it, ship something minimal, and pretend it was always the plan - but not today."),i=He(e,"buttonlabel",3,"Go back Home"),r=He(e,"buttonhref",3,"/");var s=$h(),a=oe(s),o=oe(a),c=oe(o),l=je(oe(c),2);{var u=d=>{var m=Kh(),v=oe(m),_=oe(v);Oe(()=>Wt(_,t())),Re(d,m)};wt(l,d=>{t()&&d(u)})}var f=je(c,2);Oe(()=>Et(f,"href",r())),Oe(()=>Et(f,"label",i())),Et(f,"active","true"),Re(n,s)}var Qh=Ne('<div><div class="motion svelte-er4ugn"><div class="glow svelte-er4ugn"></div> <div class="mask svelte-er4ugn"><div class="cone svelte-er4ugn"></div></div></div> <div class="orb svelte-er4ugn"><div class="border svelte-er4ugn"></div></div> <a class="wrapper svelte-er4ugn"><div class="label svelte-er4ugn"> </div></a></div>');function ep(n,e){let t=He(e,"href",3,"#"),i=He(e,"label",3,"Button"),r=He(e,"arialabel",3,""),s=He(e,"active",3,!1);var a=Qh(),o=je(oe(a),4),c=oe(o),l=oe(c);Oe(()=>{ei(a,1,`button ${s()?"button-active":""}`,"svelte-er4ugn"),zt(o,"href",t()),zt(o,"aria-label",r()||void 0),Wt(l,i())}),Re(n,a)}var tp=Ne('<img alt="" loading="eager" class="svelte-ag87v9"/>'),np=Ne('<a class="indexcard svelte-ag87v9"><div class="bg svelte-ag87v9"><!></div> <div class="text svelte-ag87v9"><div class="heading svelte-ag87v9"><h4> </h4></div></div></a>');function ip(n,e){let t=He(e,"href",3,"#"),i=He(e,"title",3,""),r=He(e,"backgroundimage",3,"");var s=np(),a=oe(s),o=oe(a);{var c=m=>{var v=tp();Oe(()=>zt(v,"src",r())),Re(m,v)};wt(o,m=>{r()&&m(c)})}var l=je(a,2),u=oe(l),f=oe(u),d=oe(f);Oe(()=>{zt(s,"href",t()),Wt(d,i())}),Re(n,s)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="182",rp=0,xu=1,sp=2,Sa=1,ap=2,Gs=3,rr=0,bn=1,un=2,Ui=0,ts=1,Su=2,Mu=3,Eu=4,op=5,yr=100,lp=101,cp=102,up=103,fp=104,dp=200,hp=201,pp=202,mp=203,To=204,Ao=205,vp=206,gp=207,_p=208,xp=209,Sp=210,Mp=211,Ep=212,bp=213,yp=214,wo=0,Ro=1,Co=2,ns=3,Po=4,Do=5,Lo=6,Io=7,bu=0,Tp=1,Ap=2,an=0,yu=1,Tu=2,Au=3,wu=4,Ru=5,Cu=6,Pu=7,Du=300,Tr=301,is=302,Uo=303,No=304,Ma=306,Fo=1e3,Ni=1001,Oo=1002,on=1003,wp=1004,Ea=1005,vt=1006,Bo=1007,Ar=1008,kn=1009,Lu=1010,Iu=1011,Hs=1012,zo=1013,pi=1014,mi=1015,Fi=1016,Vo=1017,Go=1018,ks=1020,Uu=35902,Nu=35899,Fu=1021,Ou=1022,ti=1023,Oi=1026,wr=1027,Bu=1028,Ho=1029,rs=1030,ko=1031,Wo=1033,ba=33776,ya=33777,Ta=33778,Aa=33779,Xo=35840,Yo=35841,qo=35842,Zo=35843,jo=36196,Ko=37492,$o=37496,Jo=37488,Qo=37489,el=37490,tl=37491,nl=37808,il=37809,rl=37810,sl=37811,al=37812,ol=37813,ll=37814,cl=37815,ul=37816,fl=37817,dl=37818,hl=37819,pl=37820,ml=37821,vl=36492,gl=36494,_l=36495,xl=36283,Sl=36284,Ml=36285,El=36286,Rp=3200,Cp=0,Pp=1,sr="",Xt="srgb",ss="srgb-linear",wa="linear",_t="srgb",as=7680,zu=519,Dp=512,Lp=513,Ip=514,bl=515,Up=516,Np=517,yl=518,Fp=519,Vu=35044,Gu="300 es",vi=2e3,Ra=2001;function Hu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Op(){const n=Ws("canvas");return n.style.display="block",n}const ku={};function Wu(...n){const e="THREE."+n.shift();console.log(e,...n)}function Je(...n){const e="THREE."+n.shift();console.warn(e,...n)}function ft(...n){const e="THREE."+n.shift();console.error(e,...n)}function Xs(...n){const e=n.join(" ");e in ku||(ku[e]=!0,Je(...n))}function Bp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tl=Math.PI/180,Al=180/Math.PI;function Ys(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function zp(n,e){return(n%e+e)%e}function wl(n,e,t){return(1-t)*n+t*e}function qs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],m=s[a+1],v=s[a+2],_=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(f!==_||c!==d||l!==m||u!==v){let p=c*d+l*m+u*v+f*_;p<0&&(d=-d,m=-m,v=-v,_=-_,p=-p);let h=1-o;if(p<.9995){const b=Math.acos(p),S=Math.sin(b);h=Math.sin(h*b)/S,o=Math.sin(o*b)/S,c=c*h+d*o,l=l*h+m*o,u=u*h+v*o,f=f*h+_*o}else{c=c*h+d*o,l=l*h+m*o,u=u*h+v*o,f=f*h+_*o;const b=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=b,l*=b,u*=b,f*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+u*f+c*m-l*d,e[t+1]=c*v+u*d+l*f-o*m,e[t+2]=l*v+u*m+o*d-c*f,e[t+3]=u*v-o*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),d=c(i/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*m*v,this._y=l*m*f-d*u*v,this._z=l*u*v+d*m*f,this._w=l*u*f-d*m*v;break;case"YXZ":this._x=d*u*f+l*m*v,this._y=l*m*f-d*u*v,this._z=l*u*v-d*m*f,this._w=l*u*f+d*m*v;break;case"ZXY":this._x=d*u*f-l*m*v,this._y=l*m*f+d*u*v,this._z=l*u*v+d*m*f,this._w=l*u*f-d*m*v;break;case"ZYX":this._x=d*u*f-l*m*v,this._y=l*m*f+d*u*v,this._z=l*u*v-d*m*f,this._w=l*u*f+d*m*v;break;case"YZX":this._x=d*u*f+l*m*v,this._y=l*m*f+d*u*v,this._z=l*u*v-d*m*f,this._w=l*u*f-d*m*v;break;case"XZY":this._x=d*u*f-l*m*v,this._y=l*m*f-d*u*v,this._z=l*u*v+d*m*f,this._w=l*u*f+d*m*v;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rl=new H,Xu=new Zs;class et{constructor(e,t,i,r,s,a,o,c,l){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],m=i[5],v=i[8],_=r[0],p=r[3],h=r[6],b=r[1],S=r[4],E=r[7],T=r[2],w=r[5],C=r[8];return s[0]=a*_+o*b+c*T,s[3]=a*p+o*S+c*w,s[6]=a*h+o*E+c*C,s[1]=l*_+u*b+f*T,s[4]=l*p+u*S+f*w,s[7]=l*h+u*E+f*C,s[2]=d*_+m*b+v*T,s[5]=d*p+m*S+v*w,s[8]=d*h+m*E+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,m=l*s-a*c,v=t*f+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cl=new et,Yu=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qu=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vp(){const n={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_t&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(r.r=ls(r.r),r.g=ls(r.g),r.b=ls(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===sr?wa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ss]:{primaries:e,whitePoint:i,transfer:wa,toXYZ:Yu,fromXYZ:qu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Yu,fromXYZ:qu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}const dt=Vp();function Bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let cs;class Gp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{cs===void 0&&(cs=Ws("canvas")),cs.width=e.width,cs.height=e.height;const r=cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=cs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Bi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bi(t[i]/255)*255):t[i]=Bi(t[i]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hp=0;class Pl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Dl(r[a].image)):s.push(Dl(r[a]))}else s=Dl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Dl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}let kp=0;const Ll=new H;class dn extends os{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,i=Ni,r=Ni,s=vt,a=Ar,o=ti,c=kn,l=dn.DEFAULT_ANISOTROPY,u=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Ys(),this.name="",this.source=new Pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ll).x}get height(){return this.source.getSize(Ll).y}get depth(){return this.source.getSize(Ll).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fo:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fo:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null,dn.DEFAULT_MAPPING=Du,dn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],v=c[9],_=c[2],p=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,E=(m+1)/2,T=(h+1)/2,w=(u+d)/4,C=(f+_)/4,U=(v+p)/4;return S>E&&S>T?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=C/i):E>T?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=w/r,s=U/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=U/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-v)*(p-v)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(f-_)/b,this.z=(d-u)/b,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wp extends os{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new dn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Pl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends Wp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zu extends dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xp extends dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class js{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ni):ni.fromBufferAttribute(s,a),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Pa.subVectors(this.max,Ks),us.subVectors(e.a,Ks),fs.subVectors(e.b,Ks),ds.subVectors(e.c,Ks),ar.subVectors(fs,us),or.subVectors(ds,fs),Rr.subVectors(us,ds);let t=[0,-ar.z,ar.y,0,-or.z,or.y,0,-Rr.z,Rr.y,ar.z,0,-ar.x,or.z,0,-or.x,Rr.z,0,-Rr.x,-ar.y,ar.x,0,-or.y,or.x,0,-Rr.y,Rr.x,0];return!Il(t,us,fs,ds,Pa)||(t=[1,0,0,0,1,0,0,0,1],!Il(t,us,fs,ds,Pa))?!1:(Da.crossVectors(ar,or),t=[Da.x,Da.y,Da.z],Il(t,us,fs,ds,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zi=[new H,new H,new H,new H,new H,new H,new H,new H],ni=new H,Ca=new js,us=new H,fs=new H,ds=new H,ar=new H,or=new H,Rr=new H,Ks=new H,Pa=new H,Da=new H,Cr=new H;function Il(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Cr.fromArray(n,s);const o=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),c=e.dot(Cr),l=t.dot(Cr),u=i.dot(Cr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Yp=new js,$s=new H,Ul=new H;class Nl{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Yp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const t=$s.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector($s,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Ul)),this.expandByPoint($s.copy(e.center).sub(Ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Vi=new H,Fl=new H,La=new H,lr=new H,Ol=new H,Ia=new H,Bl=new H;class ju{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fl.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),lr.copy(this.origin).sub(Fl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(La),o=lr.dot(this.direction),c=-lr.dot(La),l=lr.lengthSq(),u=Math.abs(1-a*a);let f,d,m,v;if(u>0)if(f=a*c-o,d=a*o-c,v=s*u,f>=0)if(d>=-v)if(d<=v){const _=1/u;f*=_,d*=_,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=v?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fl).addScaledVector(La,d),m}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);const i=Vi.dot(this.direction),r=Vi.dot(Vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,r,s){Ol.subVectors(t,e),Ia.subVectors(i,e),Bl.crossVectors(Ol,Ia);let a=this.direction.dot(Bl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;lr.subVectors(this.origin,e);const c=o*this.direction.dot(Ia.crossVectors(lr,Ia));if(c<0)return null;const l=o*this.direction.dot(Ol.cross(lr));if(l<0||c+l>a)return null;const u=-o*lr.dot(Bl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,i,r,s,a,o,c,l,u,f,d,m,v,_,p){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,f,d,m,v,_,p)}set(e,t,i,r,s,a,o,c,l,u,f,d,m,v,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=v,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/hs.setFromMatrixColumn(e,0).length(),s=1/hs.setFromMatrixColumn(e,1).length(),a=1/hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,v=o*u,_=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+v*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=v+m*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,m=c*f,v=l*u,_=l*f;t[0]=d+_*o,t[4]=v*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,m=c*f,v=l*u,_=l*f;t[0]=d-_*o,t[4]=-a*f,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,m=a*f,v=o*u,_=o*f;t[0]=c*u,t[4]=v*l-m,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=m*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,v=o*c,_=o*l;t[0]=c*u,t[4]=_-d*f,t[8]=v*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*f+v,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*c,m=a*l,v=o*c,_=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+_,t[5]=a*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qp,e,Zp)}lookAt(e,t,i){const r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),cr.crossVectors(i,Dn),cr.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),cr.crossVectors(i,Dn)),cr.normalize(),Ua.crossVectors(Dn,cr),r[0]=cr.x,r[4]=Ua.x,r[8]=Dn.x,r[1]=cr.y,r[5]=Ua.y,r[9]=Dn.y,r[2]=cr.z,r[6]=Ua.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],m=i[13],v=i[2],_=i[6],p=i[10],h=i[14],b=i[3],S=i[7],E=i[11],T=i[15],w=r[0],C=r[4],U=r[8],x=r[12],y=r[1],R=r[5],z=r[9],D=r[13],V=r[2],k=r[6],N=r[10],B=r[14],Y=r[3],ae=r[7],j=r[11],$=r[15];return s[0]=a*w+o*y+c*V+l*Y,s[4]=a*C+o*R+c*k+l*ae,s[8]=a*U+o*z+c*N+l*j,s[12]=a*x+o*D+c*B+l*$,s[1]=u*w+f*y+d*V+m*Y,s[5]=u*C+f*R+d*k+m*ae,s[9]=u*U+f*z+d*N+m*j,s[13]=u*x+f*D+d*B+m*$,s[2]=v*w+_*y+p*V+h*Y,s[6]=v*C+_*R+p*k+h*ae,s[10]=v*U+_*z+p*N+h*j,s[14]=v*x+_*D+p*B+h*$,s[3]=b*w+S*y+E*V+T*Y,s[7]=b*C+S*R+E*k+T*ae,s[11]=b*U+S*z+E*N+T*j,s[15]=b*x+S*D+E*B+T*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],m=e[14],v=e[3],_=e[7],p=e[11],h=e[15],b=c*m-l*d,S=o*m-l*f,E=o*d-c*f,T=a*m-l*u,w=a*d-c*u,C=a*f-o*u;return t*(_*b-p*S+h*E)-i*(v*b-p*T+h*w)+r*(v*S-_*T+h*C)-s*(v*E-_*w+p*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],m=e[11],v=e[12],_=e[13],p=e[14],h=e[15],b=f*p*l-_*d*l+_*c*m-o*p*m-f*c*h+o*d*h,S=v*d*l-u*p*l-v*c*m+a*p*m+u*c*h-a*d*h,E=u*_*l-v*f*l+v*o*m-a*_*m-u*o*h+a*f*h,T=v*f*c-u*_*c-v*o*d+a*_*d+u*o*p-a*f*p,w=t*b+i*S+r*E+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=b*C,e[1]=(_*d*s-f*p*s-_*r*m+i*p*m+f*r*h-i*d*h)*C,e[2]=(o*p*s-_*c*s+_*r*l-i*p*l-o*r*h+i*c*h)*C,e[3]=(f*c*s-o*d*s-f*r*l+i*d*l+o*r*m-i*c*m)*C,e[4]=S*C,e[5]=(u*p*s-v*d*s+v*r*m-t*p*m-u*r*h+t*d*h)*C,e[6]=(v*c*s-a*p*s-v*r*l+t*p*l+a*r*h-t*c*h)*C,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*m+t*c*m)*C,e[8]=E*C,e[9]=(v*f*s-u*_*s-v*i*m+t*_*m+u*i*h-t*f*h)*C,e[10]=(a*_*s-v*o*s+v*i*l-t*_*l-a*i*h+t*o*h)*C,e[11]=(u*o*s-a*f*s-u*i*l+t*f*l+a*i*m-t*o*m)*C,e[12]=T*C,e[13]=(u*_*r-v*f*r+v*i*d-t*_*d-u*i*p+t*f*p)*C,e[14]=(v*o*r-a*_*r-v*i*c+t*_*c+a*i*p-t*o*p)*C,e[15]=(a*f*r-u*o*r+u*i*c-t*f*c-a*i*d+t*o*d)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,m=s*u,v=s*f,_=a*u,p=a*f,h=o*f,b=c*l,S=c*u,E=c*f,T=i.x,w=i.y,C=i.z;return r[0]=(1-(_+h))*T,r[1]=(m+E)*T,r[2]=(v-S)*T,r[3]=0,r[4]=(m-E)*w,r[5]=(1-(d+h))*w,r[6]=(p+b)*w,r[7]=0,r[8]=(v+S)*C,r[9]=(p-b)*C,r[10]=(1-(d+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=hs.set(r[0],r[1],r[2]).length();const a=hs.set(r[4],r[5],r[6]).length(),o=hs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),ii.copy(this);const l=1/s,u=1/a,f=1/o;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,t.setFromRotationMatrix(ii),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=vi,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),m=(i+r)/(i-r);let v,_;if(c)v=s/(a-s),_=a*s/(a-s);else if(o===vi)v=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ra)v=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=vi,c=!1){const l=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),m=-(i+r)/(i-r);let v,_;if(c)v=1/(a-s),_=a/(a-s);else if(o===vi)v=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ra)v=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=v,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hs=new H,ii=new Bt,qp=new H(0,0,0),Zp=new H(1,1,1),cr=new H,Ua=new H,Dn=new H,Ku=new Bt,$u=new Zs;class Gi{constructor(e=0,t=0,i=0,r=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ku,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $u.setFromEuler(this),this.setFromQuaternion($u,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jp=0;const Ju=new H,ps=new Zs,Hi=new Bt,Na=new H,Js=new H,Kp=new H,$p=new Zs,Qu=new H(1,0,0),ef=new H(0,1,0),tf=new H(0,0,1),nf={type:"added"},Jp={type:"removed"},ms={type:"childadded",child:null},Vl={type:"childremoved",child:null};class Ln extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new H,t=new Gi,i=new Zs,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new et}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Qu,e)}rotateY(e){return this.rotateOnAxis(ef,e)}rotateZ(e){return this.rotateOnAxis(tf,e)}translateOnAxis(e,t){return Ju.copy(e).applyQuaternion(this.quaternion),this.position.add(Ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qu,e)}translateY(e){return this.translateOnAxis(ef,e)}translateZ(e){return this.translateOnAxis(tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Na.copy(e):Na.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Js,Na,this.up):Hi.lookAt(Na,Js,this.up),this.quaternion.setFromRotationMatrix(Hi),r&&(Hi.extractRotation(r.matrixWorld),ps.setFromRotationMatrix(Hi),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nf),ms.child=e,this.dispatchEvent(ms),ms.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jp),Vl.child=e,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nf),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,Kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,$p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ln.DEFAULT_UP=new H(0,1,0),Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new H,ki=new H,Gl=new H,Wi=new H,vs=new H,gs=new H,rf=new H,Hl=new H,kl=new H,Wl=new H,Xl=new Ot,Yl=new Ot,ql=new Ot;class si{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ri.subVectors(e,t),r.cross(ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ri.subVectors(r,t),ki.subVectors(i,t),Gl.subVectors(e,t);const a=ri.dot(ri),o=ri.dot(ki),c=ri.dot(Gl),l=ki.dot(ki),u=ki.dot(Gl),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-o*u)*d,v=(a*u-o*c)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Wi.x),c.addScaledVector(a,Wi.y),c.addScaledVector(o,Wi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Xl.setScalar(0),Yl.setScalar(0),ql.setScalar(0),Xl.fromBufferAttribute(e,t),Yl.fromBufferAttribute(e,i),ql.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xl,s.x),a.addScaledVector(Yl,s.y),a.addScaledVector(ql,s.z),a}static isFrontFacing(e,t,i,r){return ri.subVectors(i,t),ki.subVectors(e,t),ri.cross(ki).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ri.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return si.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;vs.subVectors(r,i),gs.subVectors(s,i),Hl.subVectors(e,i);const c=vs.dot(Hl),l=gs.dot(Hl);if(c<=0&&l<=0)return t.copy(i);kl.subVectors(e,r);const u=vs.dot(kl),f=gs.dot(kl);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(vs,a);Wl.subVectors(e,s);const m=vs.dot(Wl),v=gs.dot(Wl);if(v>=0&&m<=v)return t.copy(s);const _=m*l-c*v;if(_<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(i).addScaledVector(gs,o);const p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return rf.subVectors(s,r),o=(f-u)/(f-u+(m-v)),t.copy(r).addScaledVector(rf,o);const h=1/(p+_+d);return a=_*h,o=d*h,t.copy(i).addScaledVector(vs,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Zl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=zp(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Zl(a,s,e+1/3),this.g=Zl(a,s,e),this.b=Zl(a,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=sf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return dt.workingToColorSpace(hn.copy(this),e),Math.round(ut(hn.r*255,0,255))*65536+Math.round(ut(hn.g*255,0,255))*256+Math.round(ut(hn.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(hn.copy(this),t);const i=hn.r,r=hn.g,s=hn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Xt){dt.workingToColorSpace(hn.copy(this),e);const t=hn.r,i=hn.g,r=hn.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+t,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ur),e.getHSL(Fa);const i=wl(ur.h,Fa.h,t),r=wl(ur.s,Fa.s,t),s=wl(ur.l,Fa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new xt;xt.NAMES=sf;let Qp=0;class Oa extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=ts,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=To,this.blendDst=Ao,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==To&&(i.blendSrc=this.blendSrc),this.blendDst!==Ao&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class af extends Oa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new H,Ba=new Ke;let em=0;class _i{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:em++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vu,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vu&&(e.usage=this.usage),e}}class of extends _i{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class lf extends _i{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xi extends _i{constructor(e,t,i){super(new Float32Array(e),t,i)}}let tm=0;const Wn=new Bt,jl=new Ln,_s=new H,In=new js,Qs=new js,$t=new H;class Yi extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hu(e)?lf:of)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,i){return Wn.makeTranslation(e,t,i),this.applyMatrix4(Wn),this}scale(e,t,i){return Wn.makeScale(e,t,i),this.applyMatrix4(Wn),this}lookAt(e){return jl.lookAt(e),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(In.min,Qs.min),In.expandByPoint($t),$t.addVectors(In.max,Qs.max),In.expandByPoint($t)):(In.expandByPoint(Qs.min),In.expandByPoint(Qs.max))}In.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)$t.fromBufferAttribute(o,l),c&&(_s.fromBufferAttribute(e,l),$t.add(_s)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<i.count;U++)o[U]=new H,c[U]=new H;const l=new H,u=new H,f=new H,d=new Ke,m=new Ke,v=new Ke,_=new H,p=new H;function h(U,x,y){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,x),f.fromBufferAttribute(i,y),d.fromBufferAttribute(s,U),m.fromBufferAttribute(s,x),v.fromBufferAttribute(s,y),u.sub(l),f.sub(l),m.sub(d),v.sub(d);const R=1/(m.x*v.y-v.x*m.y);isFinite(R)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(R),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(R),o[U].add(_),o[x].add(_),o[y].add(_),c[U].add(p),c[x].add(p),c[y].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,x=b.length;U<x;++U){const y=b[U],R=y.start,z=y.count;for(let D=R,V=R+z;D<V;D+=3)h(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const S=new H,E=new H,T=new H,w=new H;function C(U){T.fromBufferAttribute(r,U),w.copy(T);const x=o[U];S.copy(x),S.sub(T.multiplyScalar(T.dot(x))).normalize(),E.crossVectors(w,x);const R=E.dot(c[U])<0?-1:1;a.setXYZW(U,S.x,S.y,S.z,R)}for(let U=0,x=b.length;U<x;++U){const y=b[U],R=y.start,z=y.count;for(let D=R,V=R+z;D<V;D+=3)C(e.getX(D+0)),C(e.getX(D+1)),C(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _i(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,u=new H,f=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let m=0,v=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let h=0;h<u;h++)d[v++]=l[m++]}return new _i(d,u,f)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yi,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=e(d,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cf=new Bt,Pr=new ju,za=new Nl,uf=new H,Va=new H,Ga=new H,Ha=new H,Kl=new H,ka=new H,ff=new H,Wa=new H;class pn extends Ln{constructor(e=new Yi,t=new af){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ka.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Kl.fromBufferAttribute(f,e),a?ka.addScaledVector(Kl,u):ka.addScaledVector(Kl.sub(t),u))}t.add(ka)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),Pr.copy(e.ray).recast(e.near),!(za.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(za,uf)===null||Pr.origin.distanceToSquared(uf)>(e.far-e.near)**2))&&(cf.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(cf),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const p=d[v],h=a[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,T=S;E<T;E+=3){const w=o.getX(E),C=o.getX(E+1),U=o.getX(E+2);r=Xa(this,h,e,i,l,u,f,w,C,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=v,h=_;p<h;p+=3){const b=o.getX(p),S=o.getX(p+1),E=o.getX(p+2);r=Xa(this,a,e,i,l,u,f,b,S,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const p=d[v],h=a[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,T=S;E<T;E+=3){const w=E,C=E+1,U=E+2;r=Xa(this,h,e,i,l,u,f,w,C,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=v,h=_;p<h;p+=3){const b=p,S=p+1,E=p+2;r=Xa(this,a,e,i,l,u,f,b,S,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function nm(n,e,t,i,r,s,a,o){let c;if(e.side===bn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===rr,o),c===null)return null;Wa.copy(o),Wa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Wa);return l<t.near||l>t.far?null:{distance:l,point:Wa.clone(),object:n}}function Xa(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Va),n.getVertexPosition(c,Ga),n.getVertexPosition(l,Ha);const u=nm(n,e,t,i,Va,Ga,Ha,ff);if(u){const f=new H;si.getBarycoord(ff,Va,Ga,Ha,f),r&&(u.uv=si.getInterpolatedAttribute(r,o,c,l,f,new Ke)),s&&(u.uv1=si.getInterpolatedAttribute(s,o,c,l,f,new Ke)),a&&(u.normal=si.getInterpolatedAttribute(a,o,c,l,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new H,materialIndex:0};si.getNormal(Va,Ga,Ha,d.normal),u.face=d,u.barycoord=f}return u}class ea extends Yi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Xi(l,3)),this.setAttribute("normal",new Xi(u,3)),this.setAttribute("uv",new Xi(f,2));function v(_,p,h,b,S,E,T,w,C,U,x){const y=E/C,R=T/U,z=E/2,D=T/2,V=w/2,k=C+1,N=U+1;let B=0,Y=0;const ae=new H;for(let j=0;j<N;j++){const $=j*R-D;for(let ge=0;ge<k;ge++){const ce=ge*y-z;ae[_]=ce*b,ae[p]=$*S,ae[h]=V,l.push(ae.x,ae.y,ae.z),ae[_]=0,ae[p]=0,ae[h]=w>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(ge/C),f.push(1-j/U),B+=1}}for(let j=0;j<U;j++)for(let $=0;$<C;$++){const ge=d+$+k*j,ce=d+$+k*(j+1),ye=d+($+1)+k*(j+1),Fe=d+($+1)+k*j;c.push(ge,ce,Fe),c.push(ce,ye,Fe),Y+=6}o.addGroup(m,Y,x),m+=Y,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function vn(n){const e={};for(let t=0;t<n.length;t++){const i=xs(n[t]);for(const r in i)e[r]=i[r]}return e}function im(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function df(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const rm={clone:xs,merge:vn};var sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Oa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=im(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hf extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new H,pf=new Ke,mf=new Ke;class Jt extends hf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Al*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(Tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,t){return this.getViewBounds(e,pf,mf),t.subVectors(mf,pf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ss=-90,Ms=1;class om extends Ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(Ss,Ms,e,t);r.layers=this.layers,this.add(r);const s=new Jt(Ss,Ms,e,t);s.layers=this.layers,this.add(s);const a=new Jt(Ss,Ms,e,t);a.layers=this.layers,this.add(a);const o=new Jt(Ss,Ms,e,t);o.layers=this.layers,this.add(o);const c=new Jt(Ss,Ms,e,t);c.layers=this.layers,this.add(c);const l=new Jt(Ss,Ms,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class vf extends dn{constructor(e=[],t=Tr,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gf extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ea(5,5,5),s=new ln({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Ui});s.uniforms.tEquirect.value=t;const a=new pn(r,s),o=t.minFilter;return t.minFilter===Ar&&(t.minFilter=vt),new om(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class gn extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lm={type:"move"};class $l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),h=this._getHandJoint(l,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,v=.005;l.inputState.pinching&&d>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Jl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(e),this.density=t}clone(){return new Jl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Dr extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cm extends dn{constructor(e=null,t=1,i=1,r,s,a,o,c,l=on,u=on,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ql=new H,um=new H,fm=new et;class Lr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ql.subVectors(i,t).cross(um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ql),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fm.getNormalMatrix(e),r=this.coplanarPoint(Ql).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Nl,dm=new Ke(.5,.5),Ya=new H;class _f{constructor(e=new Lr,t=new Lr,i=new Lr,r=new Lr,s=new Lr,a=new Lr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],m=s[7],v=s[8],_=s[9],p=s[10],h=s[11],b=s[12],S=s[13],E=s[14],T=s[15];if(r[0].setComponents(l-a,m-u,h-v,T-b).normalize(),r[1].setComponents(l+a,m+u,h+v,T+b).normalize(),r[2].setComponents(l+o,m+f,h+_,T+S).normalize(),r[3].setComponents(l-o,m-f,h-_,T-S).normalize(),i)r[4].setComponents(c,d,p,E).normalize(),r[5].setComponents(l-c,m-d,h-p,T-E).normalize();else if(r[4].setComponents(l-c,m-d,h-p,T-E).normalize(),t===vi)r[5].setComponents(l+c,m+d,h+p,T+E).normalize();else if(t===Ra)r[5].setComponents(c,d,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const t=dm.distanceTo(e.center);return Ir.radius=.7071067811865476+t,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ya.x=r.normal.x>0?e.max.x:e.min.x,Ya.y=r.normal.y>0?e.max.y:e.min.y,Ya.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ta extends dn{constructor(e,t,i=pi,r,s,a,o=on,c=on,l,u=Oi,f=1){if(u!==Oi&&u!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hm extends ta{constructor(e,t=pi,i=Tr,r,s,a=on,o=on,c,l=Oi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xf extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ai extends Yi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,m=[],v=[],_=[],p=[];for(let h=0;h<u;h++){const b=h*d-a;for(let S=0;S<l;S++){const E=S*f-s;v.push(E,-b,0),_.push(0,0,1),p.push(S/o),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let b=0;b<o;b++){const S=b+l*h,E=b+l*(h+1),T=b+1+l*(h+1),w=b+1+l*h;m.push(S,E,w),m.push(E,T,w)}this.setIndex(m),this.setAttribute("position",new Xi(v,3)),this.setAttribute("normal",new Xi(_,3)),this.setAttribute("uv",new Xi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.widthSegments,e.heightSegments)}}class pm extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mm extends Oa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vm extends Oa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ec={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class gm{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const m=l[f],v=l[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const _m=new gm;class tc{constructor(e){this.manager=e!==void 0?e:_m,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}tc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Es=new WeakMap;class xm extends tc{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ec.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=Es.get(a);f===void 0&&(f=[],Es.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=Ws("img");function c(){u(),t&&t(this);const f=Es.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onLoad&&m.onLoad(this)}Es.delete(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),ec.remove(`image:${e}`);const d=Es.get(this)||[];for(let m=0;m<d.length;m++){const v=d[m];v.onError&&v.onError(f)}Es.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ec.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Ur extends tc{constructor(e){super(e)}load(e,t,i,r){const s=new dn,a=new xm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Sf extends hf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Sm extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Mf=new Bt;class Ef{constructor(e,t,i=0,r=1/0){this.ray=new ju(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ft("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mf),this}intersectObject(e,t=!0,i=[]){return nc(e,this,i,t),i.sort(bf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)nc(e[r],this,i,t);return i.sort(bf),i}}function bf(n,e){return n.distance-e.distance}function nc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)nc(s[a],e,t,!0)}}function yf(n,e,t,i){const r=Mm(i);switch(t){case Fu:return n*e;case Bu:return n*e/r.components*r.byteLength;case Ho:return n*e/r.components*r.byteLength;case rs:return n*e*2/r.components*r.byteLength;case ko:return n*e*2/r.components*r.byteLength;case Ou:return n*e*3/r.components*r.byteLength;case ti:return n*e*4/r.components*r.byteLength;case Wo:return n*e*4/r.components*r.byteLength;case ba:case ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yo:case Zo:return Math.max(n,16)*Math.max(e,8)/4;case Xo:case qo:return Math.max(n,8)*Math.max(e,8)/2;case jo:case Ko:case Jo:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $o:case el:case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case cl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ml:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case vl:case gl:case _l:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xl:case Sl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ml:case El:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mm(n){switch(n){case kn:case Lu:return{byteLength:1,components:1};case Hs:case Iu:case Fi:return{byteLength:2,components:1};case Vo:case Go:return{byteLength:2,components:4};case pi:case zo:case mi:return{byteLength:4,components:1};case Uu:case Nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}})),typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Em(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,u);else{f.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<f.length;m++){const v=f[d],_=f[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++d,f[d]=_)}f.length=d+1;for(let m=0,v=f.length;m<v;m++){const _=f[m];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ym=`#ifdef USE_ALPHAHASH
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
#endif`,Tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cm=`#ifdef USE_AOMAP
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
#endif`,Pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
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
#endif`,Lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
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
#endif`,Om=`#ifdef USE_BUMPMAP
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ym=`#define PI 3.141592653589793
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
} // validated`,qm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zm=`vec3 transformedNormal = objectNormal;
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
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",ev=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tv=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uv=`#ifdef USE_GRADIENTMAP
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
}`,fv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pv=`uniform bool receiveShadow;
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
#endif`,mv=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_v=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Mv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ev=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,bv=`#if defined( RE_IndirectDiffuse )
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
#endif`,yv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lv=`#if defined( USE_POINTS_UV )
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
#endif`,Iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bv=`#ifdef USE_MORPHTARGETS
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
#endif`,zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xv=`#ifdef USE_NORMALMAP
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
#endif`,Yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$v=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,og=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cg=`#ifdef USE_SKINNING
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
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vg=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nt={alphahash_fragment:bm,alphahash_pars_fragment:ym,alphamap_fragment:Tm,alphamap_pars_fragment:Am,alphatest_fragment:wm,alphatest_pars_fragment:Rm,aomap_fragment:Cm,aomap_pars_fragment:Pm,batching_pars_vertex:Dm,batching_vertex:Lm,begin_vertex:Im,beginnormal_vertex:Um,bsdfs:Nm,iridescence_fragment:Fm,bumpmap_pars_fragment:Om,clipping_planes_fragment:Bm,clipping_planes_pars_fragment:zm,clipping_planes_pars_vertex:Vm,clipping_planes_vertex:Gm,color_fragment:Hm,color_pars_fragment:km,color_pars_vertex:Wm,color_vertex:Xm,common:Ym,cube_uv_reflection_fragment:qm,defaultnormal_vertex:Zm,displacementmap_pars_vertex:jm,displacementmap_vertex:Km,emissivemap_fragment:$m,emissivemap_pars_fragment:Jm,colorspace_fragment:Qm,colorspace_pars_fragment:ev,envmap_fragment:tv,envmap_common_pars_fragment:nv,envmap_pars_fragment:iv,envmap_pars_vertex:rv,envmap_physical_pars_fragment:mv,envmap_vertex:sv,fog_vertex:av,fog_pars_vertex:ov,fog_fragment:lv,fog_pars_fragment:cv,gradientmap_pars_fragment:uv,lightmap_pars_fragment:fv,lights_lambert_fragment:dv,lights_lambert_pars_fragment:hv,lights_pars_begin:pv,lights_toon_fragment:vv,lights_toon_pars_fragment:gv,lights_phong_fragment:_v,lights_phong_pars_fragment:xv,lights_physical_fragment:Sv,lights_physical_pars_fragment:Mv,lights_fragment_begin:Ev,lights_fragment_maps:bv,lights_fragment_end:yv,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:Av,logdepthbuf_pars_vertex:wv,logdepthbuf_vertex:Rv,map_fragment:Cv,map_pars_fragment:Pv,map_particle_fragment:Dv,map_particle_pars_fragment:Lv,metalnessmap_fragment:Iv,metalnessmap_pars_fragment:Uv,morphinstance_vertex:Nv,morphcolor_vertex:Fv,morphnormal_vertex:Ov,morphtarget_pars_vertex:Bv,morphtarget_vertex:zv,normal_fragment_begin:Vv,normal_fragment_maps:Gv,normal_pars_fragment:Hv,normal_pars_vertex:kv,normal_vertex:Wv,normalmap_pars_fragment:Xv,clearcoat_normal_fragment_begin:Yv,clearcoat_normal_fragment_maps:qv,clearcoat_pars_fragment:Zv,iridescence_pars_fragment:jv,opaque_fragment:Kv,packing:$v,premultiplied_alpha_fragment:Jv,project_vertex:Qv,dithering_fragment:eg,dithering_pars_fragment:tg,roughnessmap_fragment:ng,roughnessmap_pars_fragment:ig,shadowmap_pars_fragment:rg,shadowmap_pars_vertex:sg,shadowmap_vertex:ag,shadowmask_pars_fragment:og,skinbase_vertex:lg,skinning_pars_vertex:cg,skinning_vertex:ug,skinnormal_vertex:fg,specularmap_fragment:dg,specularmap_pars_fragment:hg,tonemapping_fragment:pg,tonemapping_pars_fragment:mg,transmission_fragment:vg,transmission_pars_fragment:gg,uv_pars_fragment:_g,uv_pars_vertex:xg,uv_vertex:Sg,worldpos_vertex:Mg,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Ee={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},xi={basic:{uniforms:vn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:vn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new xt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:vn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:vn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:vn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new xt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:vn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:vn([Ee.points,Ee.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:vn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:vn([Ee.common,Ee.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:vn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:vn([Ee.sprite,Ee.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:vn([Ee.common,Ee.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:vn([Ee.lights,Ee.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};xi.physical={uniforms:vn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const qa={r:0,b:0,g:0},Nr=new Gi,Eg=new Bt;function bg(n,e,t,i,r,s,a){const o=new xt(0);let c=s===!0?0:1,l,u,f=null,d=0,m=null;function v(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?t:e).get(E)),E}function _(S){let E=!1;const T=v(S);T===null?h(o,c):T&&T.isColor&&(h(T,1),E=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(S,E){const T=v(E);T&&(T.isCubeTexture||T.mapping===Ma)?(u===void 0&&(u=new pn(new ea(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:xs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Nr.copy(E.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(Nr)),u.material.toneMapped=dt.getTransfer(T.colorSpace)!==_t,(f!==T||d!==T.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=T,d=T.version,m=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new pn(new ai(2,2),new ln({name:"BackgroundMaterial",uniforms:xs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=dt.getTransfer(T.colorSpace)!==_t,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,f=T,d=T.version,m=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function h(S,E){S.getRGB(qa,df(n)),i.buffers.color.setClear(qa.r,qa.g,qa.b,E,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),c=E,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,h(o,c)},render:_,addToRenderList:p,dispose:b}}function yg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(y,R,z,D,V){let k=!1;const N=f(D,z,R);s!==N&&(s=N,l(s.object)),k=m(y,D,z,V),k&&v(y,D,z,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,E(y,R,z,D),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,R,z){const D=z.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);let k=V[R.id];k===void 0&&(k={},V[R.id]=k);let N=k[D];return N===void 0&&(N=d(c()),k[D]=N),N}function d(y){const R=[],z=[],D=[];for(let V=0;V<t;V++)R[V]=0,z[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:D,object:y,attributes:{},index:null}}function m(y,R,z,D){const V=s.attributes,k=R.attributes;let N=0;const B=z.getAttributes();for(const Y in B)if(B[Y].location>=0){const j=V[Y];let $=k[Y];if($===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),j===void 0||j.attribute!==$||$&&j.data!==$.data)return!0;N++}return s.attributesNum!==N||s.index!==D}function v(y,R,z,D){const V={},k=R.attributes;let N=0;const B=z.getAttributes();for(const Y in B)if(B[Y].location>=0){let j=k[Y];j===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(j=y.instanceColor));const $={};$.attribute=j,j&&j.data&&($.data=j.data),V[Y]=$,N++}s.attributes=V,s.attributesNum=N,s.index=D}function _(){const y=s.newAttributes;for(let R=0,z=y.length;R<z;R++)y[R]=0}function p(y){h(y,0)}function h(y,R){const z=s.newAttributes,D=s.enabledAttributes,V=s.attributeDivisors;z[y]=1,D[y]===0&&(n.enableVertexAttribArray(y),D[y]=1),V[y]!==R&&(n.vertexAttribDivisor(y,R),V[y]=R)}function b(){const y=s.newAttributes,R=s.enabledAttributes;for(let z=0,D=R.length;z<D;z++)R[z]!==y[z]&&(n.disableVertexAttribArray(z),R[z]=0)}function S(y,R,z,D,V,k,N){N===!0?n.vertexAttribIPointer(y,R,z,V,k):n.vertexAttribPointer(y,R,z,D,V,k)}function E(y,R,z,D){_();const V=D.attributes,k=z.getAttributes(),N=R.defaultAttributeValues;for(const B in k){const Y=k[B];if(Y.location>=0){let ae=V[B];if(ae===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),ae!==void 0){const j=ae.normalized,$=ae.itemSize,ge=e.get(ae);if(ge===void 0)continue;const ce=ge.buffer,ye=ge.type,Fe=ge.bytesPerElement,W=ye===n.INT||ye===n.UNSIGNED_INT||ae.gpuType===zo;if(ae.isInterleavedBufferAttribute){const Q=ae.data,_e=Q.stride,de=ae.offset;if(Q.isInstancedInterleavedBuffer){for(let ue=0;ue<Y.locationSize;ue++)h(Y.location+ue,Q.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ue=0;ue<Y.locationSize;ue++)p(Y.location+ue);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let ue=0;ue<Y.locationSize;ue++)S(Y.location+ue,$/Y.locationSize,ye,j,_e*Fe,(de+$/Y.locationSize*ue)*Fe,W)}else{if(ae.isInstancedBufferAttribute){for(let Q=0;Q<Y.locationSize;Q++)h(Y.location+Q,ae.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Q=0;Q<Y.locationSize;Q++)p(Y.location+Q);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let Q=0;Q<Y.locationSize;Q++)S(Y.location+Q,$/Y.locationSize,ye,j,$*Fe,$/Y.locationSize*Q*Fe,W)}}else if(N!==void 0){const j=N[B];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(Y.location,j);break;case 3:n.vertexAttrib3fv(Y.location,j);break;case 4:n.vertexAttrib4fv(Y.location,j);break;default:n.vertexAttrib1fv(Y.location,j)}}}}b()}function T(){U();for(const y in i){const R=i[y];for(const z in R){const D=R[z];for(const V in D)u(D[V].object),delete D[V];delete R[z]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const R=i[y.id];for(const z in R){const D=R[z];for(const V in D)u(D[V].object),delete D[V];delete R[z]}delete i[y.id]}function C(y){for(const R in i){const z=i[R];if(z[y.id]===void 0)continue;const D=z[y.id];for(const V in D)u(D[V].object),delete D[V];delete z[y.id]}}function U(){x(),a=!0,s!==r&&(s=r,l(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:x,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function Tg(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),t.update(u,i,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];t.update(m,i,1)}function c(l,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)a(l[v],u[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let v=0;for(let _=0;_<f;_++)v+=u[_]*d[_];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ag(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==ti&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const U=C===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==kn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==mi&&!U)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Je("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:E,maxSamples:T,samples:w}}function wg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Lr,o=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):l();else{const b=s?0:i,S=b*4;let E=h.clippingState||null;c.value=E,E=u(v,d,S,m);for(let T=0;T!==S;++T)E[T]=t[T];h.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,v){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=c.value,v!==!0||p===null){const h=m+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,E=m;S!==_;++S,E+=4)a.copy(f[S]).applyMatrix4(b,o),a.normal.toArray(p,E),p[E+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Rg(n){let e=new WeakMap;function t(a,o){return o===Uo?a.mapping=Tr:o===No&&(a.mapping=is),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Uo||o===No)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new gf(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const dr=4,Af=[.125,.215,.35,.446,.526,.582],Fr=20,Cg=256,na=new Sf,wf=new xt;let ic=null,rc=0,sc=0,ac=!1;const Pg=new H;class Rf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Pg}=s;ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ic,rc,sc),this._renderer.xr.enabled=ac,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:Fi,format:ti,colorSpace:ss,depthBuffer:!1},r=Cf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Dg(s)),this._blurMaterial=Ig(s,e,t),this._ggxMaterial=Lg(s,e,t)}return r}_compileMaterial(e){const t=new pn(new Yi,e);this._renderer.compile(t,na)}_sceneToCubeUV(e,t,i,r,s){const c=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(wf),f.toneMapping=an,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pn(new ea,new af({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let h=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,h=!0):(p.color.copy(wf),h=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[S],s.y,s.z)):E===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[S]));const T=this._cubeSize;bs(r,E*T,S>2?T:0,T,T),f.setRenderTarget(r),h&&f.render(_,c),f.render(e,c)}f.toneMapping=m,f.autoClear=d,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Tr||e.mapping===is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;bs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,na)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=0+l*1.25,m=f*d,{_lodMax:v}=this,_=this._sizeLods[i],p=3*_*(i>v-dr?i-v+dr:0),h=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=v-t,bs(s,p,h,3*_,2*_),r.setRenderTarget(s),r.render(o,na),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-i,bs(e,p,h,3*_,2*_),r.setRenderTarget(e),r.render(o,na)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=l;const d=l.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Fr-1),_=s/v,p=isFinite(s)?1+Math.floor(u*_):Fr;p>Fr&&Je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fr}`);const h=[];let b=0;for(let C=0;C<Fr;++C){const U=C/_,x=Math.exp(-U*U/2);h.push(x),C===0?b+=x:C<p&&(b+=2*x)}for(let C=0;C<h.length;C++)h[C]=h[C]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=v,d.mipInt.value=S-i;const E=this._sizeLods[r],T=3*E*(r>S-dr?r-S+dr:0),w=4*(this._cubeSize-E);bs(t,T,w,3*E,2*E),c.setRenderTarget(t),c.render(f,na)}}function Dg(n){const e=[],t=[],i=[];let r=n;const s=n-dr+1+Af.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-dr?c=Af[a-n+dr-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,_=3,p=2,h=1,b=new Float32Array(_*v*m),S=new Float32Array(p*v*m),E=new Float32Array(h*v*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,U=w>2?0:-1,x=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];b.set(x,_*v*w),S.set(d,p*v*w);const y=[w,w,w,w,w,w];E.set(y,h*v*w)}const T=new Yi;T.setAttribute("position",new _i(b,_)),T.setAttribute("uv",new _i(S,p)),T.setAttribute("faceIndex",new _i(E,h)),i.push(new pn(T,null)),r>dr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Cf(n,e,t){const i=new gi(n,e,t);return i.texture.mapping=Ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Lg(n,e,t){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Za(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Ig(n,e,t){const i=new Float32Array(Fr),r=new H(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Za(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Pf(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Df(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Za(){return`

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
	`}function Ug(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Uo||c===No,u=c===Tr||c===is;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Rf(n)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Rf(n)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ng(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Xs("WebGLRenderer: "+i+" extension not supported."),r}}}function Fg(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER)}function l(f){const d=[],m=f.index,v=f.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let S=0,E=b.length;S<E;S+=3){const T=b[S+0],w=b[S+1],C=b[S+2];d.push(T,w,w,C,C,T)}}else if(v!==void 0){const b=v.array;_=v.version;for(let S=0,E=b.length/3-1;S<E;S+=3){const T=S+0,w=S+1,C=S+2;d.push(T,w,w,C,C,T)}}else return;const p=new(Hu(d)?lf:of)(d,1);p.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Og(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,m){n.drawElements(i,m,s,d*a),t.update(m,i,1)}function l(d,m,v){v!==0&&(n.drawElementsInstanced(i,m,s,d*a,v),t.update(m,i,v))}function u(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,v);let p=0;for(let h=0;h<v;h++)p+=m[h];t.update(p,i,1)}function f(d,m,v,_){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)l(d[h]/a,m[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,_,0,v);let h=0;for(let b=0;b<v;b++)h+=m[b]*_[b];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Bg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function zg(n,e,t){const i=new WeakMap,r=new Ot;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let x=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),v===!0&&(S=2),_===!0&&(S=3);let E=o.attributes.position.count*S,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*T*4*f),C=new Zu(w,E,T,f);C.type=mi,C.needsUpdate=!0;const U=S*4;for(let y=0;y<f;y++){const R=p[y],z=h[y],D=b[y],V=E*T*4*y;for(let k=0;k<R.count;k++){const N=k*U;m===!0&&(r.fromBufferAttribute(R,k),w[V+N+0]=r.x,w[V+N+1]=r.y,w[V+N+2]=r.z,w[V+N+3]=0),v===!0&&(r.fromBufferAttribute(z,k),w[V+N+4]=r.x,w[V+N+5]=r.y,w[V+N+6]=r.z,w[V+N+7]=0),_===!0&&(r.fromBufferAttribute(D,k),w[V+N+8]=r.x,w[V+N+9]=r.y,w[V+N+10]=r.z,w[V+N+11]=D.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new Ke(E,T)},i.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];const v=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Vg(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Gg={[yu]:"LINEAR_TONE_MAPPING",[Tu]:"REINHARD_TONE_MAPPING",[Au]:"CINEON_TONE_MAPPING",[wu]:"ACES_FILMIC_TONE_MAPPING",[Cu]:"AGX_TONE_MAPPING",[Pu]:"NEUTRAL_TONE_MAPPING",[Ru]:"CUSTOM_TONE_MAPPING"};function Hg(n,e,t,i,r){const s=new gi(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new gi(e,t,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),o=new Yi;o.setAttribute("position",new Xi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Xi([0,2,0,0,2,0],2));const c=new pm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new pn(o,c),u=new Sf(-1,1,1,-1,0,1);let f=null,d=null,m=!1,v,_=null,p=[],h=!1;this.setSize=function(b,S){s.setSize(b,S),a.setSize(b,S);for(let E=0;E<p.length;E++){const T=p[E];T.setSize&&T.setSize(b,S)}},this.setEffects=function(b){p=b,h=p.length>0&&p[0].isRenderPass===!0;const S=s.width,E=s.height;for(let T=0;T<p.length;T++){const w=p[T];w.setSize&&w.setSize(S,E)}},this.begin=function(b,S){if(m||b.toneMapping===an&&p.length===0)return!1;if(_=S,S!==null){const E=S.width,T=S.height;(s.width!==E||s.height!==T)&&this.setSize(E,T)}return h===!1&&b.setRenderTarget(s),v=b.toneMapping,b.toneMapping=an,!0},this.hasRenderPass=function(){return h},this.end=function(b,S){b.toneMapping=v,m=!0;let E=s,T=a;for(let w=0;w<p.length;w++){const C=p[w];if(C.enabled!==!1&&(C.render(b,T,E,S),C.needsSwap!==!1)){const U=E;E=T,T=U}}if(f!==b.outputColorSpace||d!==b.toneMapping){f=b.outputColorSpace,d=b.toneMapping,c.defines={},dt.getTransfer(f)===_t&&(c.defines.SRGB_TRANSFER="");const w=Gg[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(_),b.render(l,u),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Lf=new dn,oc=new ta(1,1),If=new Zu,Uf=new Xp,Nf=new vf,Ff=[],Of=[],Bf=new Float32Array(16),zf=new Float32Array(9),Vf=new Float32Array(4);function ys(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ff[r];if(s===void 0&&(s=new Float32Array(r),Ff[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ja(n,e){let t=Of[e];t===void 0&&(t=new Int32Array(e),Of[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function qg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,i))return;Vf.set(i),n.uniformMatrix2fv(this.addr,!1,Vf),qt(t,i)}}function Zg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,i))return;zf.set(i),n.uniformMatrix3fv(this.addr,!1,zf),qt(t,i)}}function jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,i))return;Bf.set(i),n.uniformMatrix4fv(this.addr,!1,Bf),qt(t,i)}}function Kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function e_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function t_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function n_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function i_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function r_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(oc.compareFunction=t.isReversedDepthBuffer()?yl:bl,s=oc):s=Lf,t.setTexture2D(e||s,r)}function s_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Uf,r)}function a_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nf,r)}function o_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||If,r)}function l_(n){switch(n){case 5126:return kg;case 35664:return Wg;case 35665:return Xg;case 35666:return Yg;case 35674:return qg;case 35675:return Zg;case 35676:return jg;case 5124:case 35670:return Kg;case 35667:case 35671:return $g;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return e_;case 36294:return t_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return o_}}function c_(n,e){n.uniform1fv(this.addr,e)}function u_(n,e){const t=ys(e,this.size,2);n.uniform2fv(this.addr,t)}function f_(n,e){const t=ys(e,this.size,3);n.uniform3fv(this.addr,t)}function d_(n,e){const t=ys(e,this.size,4);n.uniform4fv(this.addr,t)}function h_(n,e){const t=ys(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function p_(n,e){const t=ys(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function m_(n,e){const t=ys(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function v_(n,e){n.uniform1iv(this.addr,e)}function g_(n,e){n.uniform2iv(this.addr,e)}function __(n,e){n.uniform3iv(this.addr,e)}function x_(n,e){n.uniform4iv(this.addr,e)}function S_(n,e){n.uniform1uiv(this.addr,e)}function M_(n,e){n.uniform2uiv(this.addr,e)}function E_(n,e){n.uniform3uiv(this.addr,e)}function b_(n,e){n.uniform4uiv(this.addr,e)}function y_(n,e,t){const i=this.cache,r=e.length,s=ja(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=oc:a=Lf;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function T_(n,e,t){const i=this.cache,r=e.length,s=ja(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Uf,s[a])}function A_(n,e,t){const i=this.cache,r=e.length,s=ja(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Nf,s[a])}function w_(n,e,t){const i=this.cache,r=e.length,s=ja(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||If,s[a])}function R_(n){switch(n){case 5126:return c_;case 35664:return u_;case 35665:return f_;case 35666:return d_;case 35674:return h_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return v_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return x_;case 5125:return S_;case 36294:return M_;case 36295:return E_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return w_}}class C_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=l_(t.type)}}class P_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R_(t.type)}}class D_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const lc=/(\w+)(\])?(\[|\.)?/g;function Gf(n,e){n.seq.push(e),n.map[e.id]=e}function L_(n,e,t){const i=n.name,r=i.length;for(lc.lastIndex=0;;){const s=lc.exec(i),a=lc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Gf(t,l===void 0?new C_(o,n,e):new P_(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new D_(o),Gf(t,f)),t=f}}}class Ka{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);L_(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Hf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const I_=37297;let U_=0;function N_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const kf=new et;function F_(n){dt._getMatrix(kf,dt.workingColorSpace,n);const e=`mat3( ${kf.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case wa:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+N_(n.getShaderSource(e),o)}else return s}function O_(n,e){const t=F_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const B_={[yu]:"Linear",[Tu]:"Reinhard",[Au]:"Cineon",[wu]:"ACESFilmic",[Cu]:"AgX",[Pu]:"Neutral",[Ru]:"Custom"};function z_(n,e){const t=B_[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $a=new H;function V_(){dt.getLuminanceCoefficients($a);const n=$a.x.toFixed(4),e=$a.y.toFixed(4),t=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function H_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function k_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ia(n){return n!==""}function Xf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W_=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(n){return n.replace(W_,Y_)}const X_=new Map;function Y_(n,e){let t=nt[e];if(t===void 0){const i=X_.get(e);if(i!==void 0)t=nt[i],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cc(t)}const q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(n){return n.replace(q_,Z_)}function Z_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const j_={[Sa]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function K_(n){return j_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $_={[Tr]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE_UV"};function J_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":$_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Q_={[is]:"ENVMAP_MODE_REFRACTION"};function e0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Q_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const t0={[bu]:"ENVMAP_BLENDING_MULTIPLY",[Tp]:"ENVMAP_BLENDING_MIX",[Ap]:"ENVMAP_BLENDING_ADD"};function n0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":t0[n.combine]||"ENVMAP_BLENDING_NONE"}function i0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function r0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=K_(t),l=J_(t),u=e0(t),f=n0(t),d=i0(t),m=G_(t),v=H_(s),_=r.createProgram();let p,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ia).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ia).join(`
`),h.length>0&&(h+=`
`)):(p=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),h=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?nt.tonemapping_pars_fragment:"",t.toneMapping!==an?z_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,O_("linearToOutputTexel",t.outputColorSpace),V_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),a=cc(a),a=Xf(a,t),a=Yf(a,t),o=cc(o),o=Xf(o,t),o=Yf(o,t),a=qf(a),o=qf(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=b+p+a,E=b+h+o,T=Hf(r,r.VERTEX_SHADER,S),w=Hf(r,r.FRAGMENT_SHADER,E);r.attachShader(_,T),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(R){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(_)||"",D=r.getShaderInfoLog(T)||"",V=r.getShaderInfoLog(w)||"",k=z.trim(),N=D.trim(),B=V.trim();let Y=!0,ae=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,T,w);else{const j=Wf(r,T,"vertex"),$=Wf(r,w,"fragment");ft("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+j+`
`+$)}else k!==""?Je("WebGLProgram: Program Info Log:",k):(N===""||B==="")&&(ae=!1);ae&&(R.diagnostics={runnable:Y,programLog:k,vertexShader:{log:N,prefix:p},fragmentShader:{log:B,prefix:h}})}r.deleteShader(T),r.deleteShader(w),U=new Ka(r,_),x=k_(r,_)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let x;this.getAttributes=function(){return x===void 0&&C(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,I_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let s0=0;class a0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new o0(e),t.set(e,i)),i}}class o0{constructor(e){this.id=s0++,this.code=e,this.usedTimes=0}}function l0(n,e,t,i,r,s,a){const o=new zl,c=new a0,l=new Set,u=[],f=new Map,d=r.logarithmicDepthBuffer;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,y,R,z,D){const V=z.fog,k=D.geometry,N=x.isMeshStandardMaterial?z.environment:null,B=(x.isMeshStandardMaterial?t:e).get(x.envMap||N),Y=B&&B.mapping===Ma?B.image.height:null,ae=v[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&Je("WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const j=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,$=j!==void 0?j.length:0;let ge=0;k.morphAttributes.position!==void 0&&(ge=1),k.morphAttributes.normal!==void 0&&(ge=2),k.morphAttributes.color!==void 0&&(ge=3);let ce,ye,Fe,W;if(ae){const Qe=xi[ae];ce=Qe.vertexShader,ye=Qe.fragmentShader}else ce=x.vertexShader,ye=x.fragmentShader,c.update(x),Fe=c.getVertexShaderID(x),W=c.getFragmentShaderID(x);const Q=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),de=D.isInstancedMesh===!0,ue=D.isBatchedMesh===!0,Ce=!!x.map,Ve=!!x.matcap,Xe=!!B,Se=!!x.aoMap,xe=!!x.lightMap,pe=!!x.bumpMap,Ze=!!x.normalMap,P=!!x.displacementMap,it=!!x.emissiveMap,tt=!!x.metalnessMap,ht=!!x.roughnessMap,De=x.anisotropy>0,A=x.clearcoat>0,g=x.dispersion>0,I=x.iridescence>0,K=x.sheen>0,ie=x.transmission>0,Z=De&&!!x.anisotropyMap,Te=A&&!!x.clearcoatMap,me=A&&!!x.clearcoatNormalMap,Le=A&&!!x.clearcoatRoughnessMap,Ge=I&&!!x.iridescenceMap,le=I&&!!x.iridescenceThicknessMap,he=K&&!!x.sheenColorMap,Ae=K&&!!x.sheenRoughnessMap,we=!!x.specularMap,ve=!!x.specularColorMap,Ye=!!x.specularIntensityMap,L=ie&&!!x.transmissionMap,re=ie&&!!x.thicknessMap,ee=!!x.gradientMap,fe=!!x.alphaMap,te=x.alphaTest>0,J=!!x.alphaHash,se=!!x.extensions;let ze=an;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ze=n.toneMapping);const rt={shaderID:ae,shaderType:x.type,shaderName:x.name,vertexShader:ce,fragmentShader:ye,defines:x.defines,customVertexShaderID:Fe,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:ue,batchingColor:ue&&D._colorsTexture!==null,instancing:de,instancingColor:de&&D.instanceColor!==null,instancingMorph:de&&D.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ss,alphaToCoverage:!!x.alphaToCoverage,map:Ce,matcap:Ve,envMap:Xe,envMapMode:Xe&&B.mapping,envMapCubeUVHeight:Y,aoMap:Se,lightMap:xe,bumpMap:pe,normalMap:Ze,displacementMap:P,emissiveMap:it,normalMapObjectSpace:Ze&&x.normalMapType===Pp,normalMapTangentSpace:Ze&&x.normalMapType===Cp,metalnessMap:tt,roughnessMap:ht,anisotropy:De,anisotropyMap:Z,clearcoat:A,clearcoatMap:Te,clearcoatNormalMap:me,clearcoatRoughnessMap:Le,dispersion:g,iridescence:I,iridescenceMap:Ge,iridescenceThicknessMap:le,sheen:K,sheenColorMap:he,sheenRoughnessMap:Ae,specularMap:we,specularColorMap:ve,specularIntensityMap:Ye,transmission:ie,transmissionMap:L,thicknessMap:re,gradientMap:ee,opaque:x.transparent===!1&&x.blending===ts&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:te,alphaHash:J,combine:x.combine,mapUv:Ce&&_(x.map.channel),aoMapUv:Se&&_(x.aoMap.channel),lightMapUv:xe&&_(x.lightMap.channel),bumpMapUv:pe&&_(x.bumpMap.channel),normalMapUv:Ze&&_(x.normalMap.channel),displacementMapUv:P&&_(x.displacementMap.channel),emissiveMapUv:it&&_(x.emissiveMap.channel),metalnessMapUv:tt&&_(x.metalnessMap.channel),roughnessMapUv:ht&&_(x.roughnessMap.channel),anisotropyMapUv:Z&&_(x.anisotropyMap.channel),clearcoatMapUv:Te&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:me&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(x.sheenRoughnessMap.channel),specularMapUv:we&&_(x.specularMap.channel),specularColorMapUv:ve&&_(x.specularColorMap.channel),specularIntensityMapUv:Ye&&_(x.specularIntensityMap.channel),transmissionMapUv:L&&_(x.transmissionMap.channel),thicknessMapUv:re&&_(x.thicknessMap.channel),alphaMapUv:fe&&_(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ze||De),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(Ce||fe),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ge,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:it&&x.emissiveMap.isVideoTexture===!0&&dt.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===un,flipSided:x.side===bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:se&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&x.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function h(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)y.push(R),y.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(b(y,x),S(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function b(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function S(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function E(x){const y=v[x.type];let R;if(y){const z=xi[y];R=rm.clone(z.uniforms)}else R=x.uniforms;return R}function T(x,y){let R=f.get(y);return R!==void 0?++R.usedTimes:(R=new r0(n,y,x,s),u.push(R),f.set(y,R)),R}function w(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),f.delete(x.cacheKey),x.destroy()}}function C(x){c.remove(x)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:E,acquireProgram:T,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:U}}function c0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function u0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,v,_,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:_,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=_,h.group=p),e++,h}function o(f,d,m,v,_,p){const h=a(f,d,m,v,_,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(f,d,m,v,_,p){const h=a(f,d,m,v,_,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||u0),i.length>1&&i.sort(d||jf),r.length>1&&r.sort(d||jf)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function f0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Kf,n.set(i,[a])):r>=s.length?(a=new Kf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function d0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new xt};break;case"SpotLight":t={position:new H,direction:new H,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function h0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let p0=0;function m0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function v0(n){const e=new d0,t=h0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new H);const r=new H,s=new Bt,a=new Bt;function o(l){let u=0,f=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let m=0,v=0,_=0,p=0,h=0,b=0,S=0,E=0,T=0,w=0,C=0;l.sort(m0);for(let x=0,y=l.length;x<y;x++){const R=l[x],z=R.color,D=R.intensity,V=R.distance;let k=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===rs?k=R.shadow.map.texture:k=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=z.r*D,f+=z.g*D,d+=z.b*D;else if(R.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(R.sh.coefficients[N],D);C++}else if(R.isDirectionalLight){const N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const B=R.shadow,Y=t.get(R);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,i.directionalShadow[m]=Y,i.directionalShadowMap[m]=k,i.directionalShadowMatrix[m]=R.shadow.matrix,b++}i.directional[m]=N,m++}else if(R.isSpotLight){const N=e.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(z).multiplyScalar(D),N.distance=V,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,i.spot[_]=N;const B=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,B.updateMatrices(R),R.castShadow&&w++),i.spotLightMatrix[_]=B.matrix,R.castShadow){const Y=t.get(R);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=k,E++}_++}else if(R.isRectAreaLight){const N=e.get(R);N.color.copy(z).multiplyScalar(D),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=N,p++}else if(R.isPointLight){const N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){const B=R.shadow,Y=t.get(R);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,Y.shadowCameraNear=B.camera.near,Y.shadowCameraFar=B.camera.far,i.pointShadow[v]=Y,i.pointShadowMap[v]=k,i.pointShadowMatrix[v]=R.shadow.matrix,S++}i.point[v]=N,v++}else if(R.isHemisphereLight){const N=e.get(R);N.skyColor.copy(R.color).multiplyScalar(D),N.groundColor.copy(R.groundColor).multiplyScalar(D),i.hemi[h]=N,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==m||U.pointLength!==v||U.spotLength!==_||U.rectAreaLength!==p||U.hemiLength!==h||U.numDirectionalShadows!==b||U.numPointShadows!==S||U.numSpotShadows!==E||U.numSpotMaps!==T||U.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,U.directionalLength=m,U.pointLength=v,U.spotLength=_,U.rectAreaLength=p,U.hemiLength=h,U.numDirectionalShadows=b,U.numPointShadows=S,U.numSpotShadows=E,U.numSpotMaps=T,U.numLightProbes=C,i.version=p0++)}function c(l,u){let f=0,d=0,m=0,v=0,_=0;const p=u.matrixWorldInverse;for(let h=0,b=l.length;h<b;h++){const S=l[h];if(S.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(S.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:i}}function $f(n){const e=new v0(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function g0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new $f(n),e.set(r,[o])):s>=a.length?(o=new $f(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const _0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,S0=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],M0=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Jf=new Bt,ra=new H,uc=new H;function E0(n,e,t){let i=new _f;const r=new Ke,s=new Ke,a=new Ot,o=new mm,c=new vm,l={},u=t.maxTextureSize,f={[rr]:bn,[bn]:rr,[un]:un},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:_0,fragmentShader:x0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Yi;v.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pn(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sa;let h=this.type;this.render=function(w,C,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;w.type===ap&&(Je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Sa);const x=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Ui),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const D=h!==this.type;D&&C.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(k=>k.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,k=w.length;V<k;V++){const N=w[V],B=N.shadow;if(B===void 0){Je("WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Y=B.getFrameExtents();if(r.multiply(Y),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,B.mapSize.y=s.y)),B.map===null||D===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Gs){if(N.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new gi(r.x,r.y,{format:rs,type:Fi,minFilter:vt,magFilter:vt,generateMipmaps:!1}),B.map.texture.name=N.name+".shadowMap",B.map.depthTexture=new ta(r.x,r.y,mi),B.map.depthTexture.name=N.name+".shadowMapDepth",B.map.depthTexture.format=Oi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=on,B.map.depthTexture.magFilter=on}else{N.isPointLight?(B.map=new gf(r.x),B.map.depthTexture=new hm(r.x,pi)):(B.map=new gi(r.x,r.y),B.map.depthTexture=new ta(r.x,r.y,pi)),B.map.depthTexture.name=N.name+".shadowMap",B.map.depthTexture.format=Oi;const j=n.state.buffers.depth.getReversed();this.type===Sa?(B.map.depthTexture.compareFunction=j?yl:bl,B.map.depthTexture.minFilter=vt,B.map.depthTexture.magFilter=vt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=on,B.map.depthTexture.magFilter=on)}B.camera.updateProjectionMatrix()}const ae=B.map.isWebGLCubeRenderTarget?6:1;for(let j=0;j<ae;j++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,j),n.clear();else{j===0&&(n.setRenderTarget(B.map),n.clear());const $=B.getViewport(j);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),z.viewport(a)}if(N.isPointLight){const $=B.camera,ge=B.matrix,ce=N.distance||$.far;ce!==$.far&&($.far=ce,$.updateProjectionMatrix()),ra.setFromMatrixPosition(N.matrixWorld),$.position.copy(ra),uc.copy($.position),uc.add(S0[j]),$.up.copy(M0[j]),$.lookAt(uc),$.updateMatrixWorld(),ge.makeTranslation(-ra.x,-ra.y,-ra.z),Jf.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Jf,$.coordinateSystem,$.reversedDepth)}else B.updateMatrices(N);i=B.getFrustum(),E(C,U,B.camera,N,this.type)}B.isPointLightShadow!==!0&&this.type===Gs&&b(B,U),B.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(x,y,R)};function b(w,C){const U=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new gi(r.x,r.y,{format:rs,type:Fi})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,U,d,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,U,m,_,null)}function S(w,C,U,x){let y=null;const R=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)y=R;else if(y=U.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=y.uuid,D=C.uuid;let V=l[z];V===void 0&&(V={},l[z]=V);let k=V[D];k===void 0&&(k=y.clone(),V[D]=k,C.addEventListener("dispose",T)),y=k}if(y.visible=C.visible,y.wireframe=C.wireframe,x===Gs?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:f[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=n.properties.get(y);z.light=U}return y}function E(w,C,U,x,y){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Gs)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const D=e.update(w),V=w.material;if(Array.isArray(V)){const k=D.groups;for(let N=0,B=k.length;N<B;N++){const Y=k[N],ae=V[Y.materialIndex];if(ae&&ae.visible){const j=S(w,ae,x,y);w.onBeforeShadow(n,w,C,U,D,j,Y),n.renderBufferDirect(U,null,D,j,w,Y),w.onAfterShadow(n,w,C,U,D,j,Y)}}}else if(V.visible){const k=S(w,V,x,y);w.onBeforeShadow(n,w,C,U,D,k,null),n.renderBufferDirect(U,null,D,k,w,null),w.onAfterShadow(n,w,C,U,D,k,null)}}const z=w.children;for(let D=0,V=z.length;D<V;D++)E(z[D],C,U,x,y)}function T(w){w.target.removeEventListener("dispose",T);for(const U in l){const x=l[U],y=w.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const b0={[wo]:Ro,[Co]:Lo,[Po]:Io,[ns]:Do,[Ro]:wo,[Lo]:Co,[Io]:Po,[Do]:ns};function y0(n,e){function t(){let L=!1;const re=new Ot;let ee=null;const fe=new Ot(0,0,0,0);return{setMask:function(te){ee!==te&&!L&&(n.colorMask(te,te,te,te),ee=te)},setLocked:function(te){L=te},setClear:function(te,J,se,ze,rt){rt===!0&&(te*=ze,J*=ze,se*=ze),re.set(te,J,se,ze),fe.equals(re)===!1&&(n.clearColor(te,J,se,ze),fe.copy(re))},reset:function(){L=!1,ee=null,fe.set(-1,0,0,0)}}}function i(){let L=!1,re=!1,ee=null,fe=null,te=null;return{setReversed:function(J){if(re!==J){const se=e.get("EXT_clip_control");J?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),re=J;const ze=te;te=null,this.setClear(ze)}},getReversed:function(){return re},setTest:function(J){J?Q(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(J){ee!==J&&!L&&(n.depthMask(J),ee=J)},setFunc:function(J){if(re&&(J=b0[J]),fe!==J){switch(J){case wo:n.depthFunc(n.NEVER);break;case Ro:n.depthFunc(n.ALWAYS);break;case Co:n.depthFunc(n.LESS);break;case ns:n.depthFunc(n.LEQUAL);break;case Po:n.depthFunc(n.EQUAL);break;case Do:n.depthFunc(n.GEQUAL);break;case Lo:n.depthFunc(n.GREATER);break;case Io:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=J}},setLocked:function(J){L=J},setClear:function(J){te!==J&&(re&&(J=1-J),n.clearDepth(J),te=J)},reset:function(){L=!1,ee=null,fe=null,te=null,re=!1}}}function r(){let L=!1,re=null,ee=null,fe=null,te=null,J=null,se=null,ze=null,rt=null;return{setTest:function(Qe){L||(Qe?Q(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(Qe){re!==Qe&&!L&&(n.stencilMask(Qe),re=Qe)},setFunc:function(Qe,Gt,Lt){(ee!==Qe||fe!==Gt||te!==Lt)&&(n.stencilFunc(Qe,Gt,Lt),ee=Qe,fe=Gt,te=Lt)},setOp:function(Qe,Gt,Lt){(J!==Qe||se!==Gt||ze!==Lt)&&(n.stencilOp(Qe,Gt,Lt),J=Qe,se=Gt,ze=Lt)},setLocked:function(Qe){L=Qe},setClear:function(Qe){rt!==Qe&&(n.clearStencil(Qe),rt=Qe)},reset:function(){L=!1,re=null,ee=null,fe=null,te=null,J=null,se=null,ze=null,rt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,m=[],v=null,_=!1,p=null,h=null,b=null,S=null,E=null,T=null,w=null,C=new xt(0,0,0),U=0,x=!1,y=null,R=null,z=null,D=null,V=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,B=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),N=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),N=B>=2);let ae=null,j={};const $=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),ce=new Ot().fromArray($),ye=new Ot().fromArray(ge);function Fe(L,re,ee,fe){const te=new Uint8Array(4),J=n.createTexture();n.bindTexture(L,J),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<ee;se++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(re+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return J}const W={};W[n.TEXTURE_2D]=Fe(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=Fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=Fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=Fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(n.DEPTH_TEST),a.setFunc(ns),pe(!1),Ze(xu),Q(n.CULL_FACE),Se(Ui);function Q(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function _e(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function de(L,re){return f[L]!==re?(n.bindFramebuffer(L,re),f[L]=re,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=re),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=re),!0):!1}function ue(L,re){let ee=m,fe=!1;if(L){ee=d.get(re),ee===void 0&&(ee=[],d.set(re,ee));const te=L.textures;if(ee.length!==te.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let J=0,se=te.length;J<se;J++)ee[J]=n.COLOR_ATTACHMENT0+J;ee.length=te.length,fe=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,fe=!0);fe&&n.drawBuffers(ee)}function Ce(L){return v!==L?(n.useProgram(L),v=L,!0):!1}const Ve={[yr]:n.FUNC_ADD,[lp]:n.FUNC_SUBTRACT,[cp]:n.FUNC_REVERSE_SUBTRACT};Ve[up]=n.MIN,Ve[fp]=n.MAX;const Xe={[dp]:n.ZERO,[hp]:n.ONE,[pp]:n.SRC_COLOR,[To]:n.SRC_ALPHA,[Sp]:n.SRC_ALPHA_SATURATE,[_p]:n.DST_COLOR,[vp]:n.DST_ALPHA,[mp]:n.ONE_MINUS_SRC_COLOR,[Ao]:n.ONE_MINUS_SRC_ALPHA,[xp]:n.ONE_MINUS_DST_COLOR,[gp]:n.ONE_MINUS_DST_ALPHA,[Mp]:n.CONSTANT_COLOR,[Ep]:n.ONE_MINUS_CONSTANT_COLOR,[bp]:n.CONSTANT_ALPHA,[yp]:n.ONE_MINUS_CONSTANT_ALPHA};function Se(L,re,ee,fe,te,J,se,ze,rt,Qe){if(L===Ui){_===!0&&(_e(n.BLEND),_=!1);return}if(_===!1&&(Q(n.BLEND),_=!0),L!==op){if(L!==p||Qe!==x){if((h!==yr||E!==yr)&&(n.blendEquation(n.FUNC_ADD),h=yr,E=yr),Qe)switch(L){case ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Su:n.blendFunc(n.ONE,n.ONE);break;case Mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ft("WebGLState: Invalid blending: ",L);break}else switch(L){case ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Su:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Mu:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eu:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",L);break}b=null,S=null,T=null,w=null,C.set(0,0,0),U=0,p=L,x=Qe}return}te=te||re,J=J||ee,se=se||fe,(re!==h||te!==E)&&(n.blendEquationSeparate(Ve[re],Ve[te]),h=re,E=te),(ee!==b||fe!==S||J!==T||se!==w)&&(n.blendFuncSeparate(Xe[ee],Xe[fe],Xe[J],Xe[se]),b=ee,S=fe,T=J,w=se),(ze.equals(C)===!1||rt!==U)&&(n.blendColor(ze.r,ze.g,ze.b,rt),C.copy(ze),U=rt),p=L,x=!1}function xe(L,re){L.side===un?_e(n.CULL_FACE):Q(n.CULL_FACE);let ee=L.side===bn;re&&(ee=!ee),pe(ee),L.blending===ts&&L.transparent===!1?Se(Ui):Se(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const fe=L.stencilWrite;o.setTest(fe),fe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),it(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function pe(L){y!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),y=L)}function Ze(L){L!==rp?(Q(n.CULL_FACE),L!==R&&(L===xu?n.cullFace(n.BACK):L===sp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),R=L}function P(L){L!==z&&(N&&n.lineWidth(L),z=L)}function it(L,re,ee){L?(Q(n.POLYGON_OFFSET_FILL),(D!==re||V!==ee)&&(n.polygonOffset(re,ee),D=re,V=ee)):_e(n.POLYGON_OFFSET_FILL)}function tt(L){L?Q(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function ht(L){L===void 0&&(L=n.TEXTURE0+k-1),ae!==L&&(n.activeTexture(L),ae=L)}function De(L,re,ee){ee===void 0&&(ae===null?ee=n.TEXTURE0+k-1:ee=ae);let fe=j[ee];fe===void 0&&(fe={type:void 0,texture:void 0},j[ee]=fe),(fe.type!==L||fe.texture!==re)&&(ae!==ee&&(n.activeTexture(ee),ae=ee),n.bindTexture(L,re||W[L]),fe.type=L,fe.texture=re)}function A(){const L=j[ae];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(L){ft("WebGLState:",L)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(L){ft("WebGLState:",L)}}function K(){try{n.texSubImage2D(...arguments)}catch(L){ft("WebGLState:",L)}}function ie(){try{n.texSubImage3D(...arguments)}catch(L){ft("WebGLState:",L)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(L){ft("WebGLState:",L)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(L){ft("WebGLState:",L)}}function me(){try{n.texStorage2D(...arguments)}catch(L){ft("WebGLState:",L)}}function Le(){try{n.texStorage3D(...arguments)}catch(L){ft("WebGLState:",L)}}function Ge(){try{n.texImage2D(...arguments)}catch(L){ft("WebGLState:",L)}}function le(){try{n.texImage3D(...arguments)}catch(L){ft("WebGLState:",L)}}function he(L){ce.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function Ae(L){ye.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ye.copy(L))}function we(L,re){let ee=l.get(re);ee===void 0&&(ee=new WeakMap,l.set(re,ee));let fe=ee.get(L);fe===void 0&&(fe=n.getUniformBlockIndex(re,L.name),ee.set(L,fe))}function ve(L,re){const fe=l.get(re).get(L);c.get(re)!==fe&&(n.uniformBlockBinding(re,fe,L.__bindingPointIndex),c.set(re,fe))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ae=null,j={},f={},d=new WeakMap,m=[],v=null,_=!1,p=null,h=null,b=null,S=null,E=null,T=null,w=null,C=new xt(0,0,0),U=0,x=!1,y=null,R=null,z=null,D=null,V=null,ce.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:_e,bindFramebuffer:de,drawBuffers:ue,useProgram:Ce,setBlending:Se,setMaterial:xe,setFlipSided:pe,setCullFace:Ze,setLineWidth:P,setPolygonOffset:it,setScissorTest:tt,activeTexture:ht,bindTexture:De,unbindTexture:A,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Ge,texImage3D:le,updateUBOMapping:we,uniformBlockBinding:ve,texStorage2D:me,texStorage3D:Le,texSubImage2D:K,texSubImage3D:ie,compressedTexSubImage2D:Z,compressedTexSubImage3D:Te,scissor:he,viewport:Ae,reset:Ye}}function T0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,g){return m?new OffscreenCanvas(A,g):Ws("canvas")}function _(A,g,I){let K=1;const ie=De(A);if((ie.width>I||ie.height>I)&&(K=I/Math.max(ie.width,ie.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(K*ie.width),Te=Math.floor(K*ie.height);f===void 0&&(f=v(Z,Te));const me=g?v(Z,Te):f;return me.width=Z,me.height=Te,me.getContext("2d").drawImage(A,0,0,Z,Te),Je("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Z+"x"+Te+")."),me}else return"data"in A&&Je("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function p(A){return A.generateMipmaps}function h(A){n.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(A,g,I,K,ie=!1){if(A!==null){if(n[A]!==void 0)return n[A];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=g;if(g===n.RED&&(I===n.FLOAT&&(Z=n.R32F),I===n.HALF_FLOAT&&(Z=n.R16F),I===n.UNSIGNED_BYTE&&(Z=n.R8)),g===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(Z=n.R8UI),I===n.UNSIGNED_SHORT&&(Z=n.R16UI),I===n.UNSIGNED_INT&&(Z=n.R32UI),I===n.BYTE&&(Z=n.R8I),I===n.SHORT&&(Z=n.R16I),I===n.INT&&(Z=n.R32I)),g===n.RG&&(I===n.FLOAT&&(Z=n.RG32F),I===n.HALF_FLOAT&&(Z=n.RG16F),I===n.UNSIGNED_BYTE&&(Z=n.RG8)),g===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(Z=n.RG8UI),I===n.UNSIGNED_SHORT&&(Z=n.RG16UI),I===n.UNSIGNED_INT&&(Z=n.RG32UI),I===n.BYTE&&(Z=n.RG8I),I===n.SHORT&&(Z=n.RG16I),I===n.INT&&(Z=n.RG32I)),g===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),I===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),I===n.UNSIGNED_INT&&(Z=n.RGB32UI),I===n.BYTE&&(Z=n.RGB8I),I===n.SHORT&&(Z=n.RGB16I),I===n.INT&&(Z=n.RGB32I)),g===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),I===n.UNSIGNED_INT&&(Z=n.RGBA32UI),I===n.BYTE&&(Z=n.RGBA8I),I===n.SHORT&&(Z=n.RGBA16I),I===n.INT&&(Z=n.RGBA32I)),g===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),g===n.RGBA){const Te=ie?wa:dt.getTransfer(K);I===n.FLOAT&&(Z=n.RGBA32F),I===n.HALF_FLOAT&&(Z=n.RGBA16F),I===n.UNSIGNED_BYTE&&(Z=Te===_t?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function E(A,g){let I;return A?g===null||g===pi||g===ks?I=n.DEPTH24_STENCIL8:g===mi?I=n.DEPTH32F_STENCIL8:g===Hs&&(I=n.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===pi||g===ks?I=n.DEPTH_COMPONENT24:g===mi?I=n.DEPTH_COMPONENT32F:g===Hs&&(I=n.DEPTH_COMPONENT16),I}function T(A,g){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==vt?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function w(A){const g=A.target;g.removeEventListener("dispose",w),U(g),g.isVideoTexture&&u.delete(g)}function C(A){const g=A.target;g.removeEventListener("dispose",C),y(g)}function U(A){const g=i.get(A);if(g.__webglInit===void 0)return;const I=A.source,K=d.get(I);if(K){const ie=K[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&x(A),Object.keys(K).length===0&&d.delete(I)}i.remove(A)}function x(A){const g=i.get(A);n.deleteTexture(g.__webglTexture);const I=A.source,K=d.get(I);delete K[g.__cacheKey],a.memory.textures--}function y(A){const g=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(g.__webglFramebuffer[K]))for(let ie=0;ie<g.__webglFramebuffer[K].length;ie++)n.deleteFramebuffer(g.__webglFramebuffer[K][ie]);else n.deleteFramebuffer(g.__webglFramebuffer[K]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[K])}else{if(Array.isArray(g.__webglFramebuffer))for(let K=0;K<g.__webglFramebuffer.length;K++)n.deleteFramebuffer(g.__webglFramebuffer[K]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let K=0;K<g.__webglColorRenderbuffer.length;K++)g.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[K]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=A.textures;for(let K=0,ie=I.length;K<ie;K++){const Z=i.get(I[K]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(I[K])}i.remove(A)}let R=0;function z(){R=0}function D(){const A=R;return A>=r.maxTextures&&Je("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),R+=1,A}function V(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function k(A,g){const I=i.get(A);if(A.isVideoTexture&&tt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&I.__version!==A.version){const K=A.image;if(K===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{W(I,A,g);return}}else A.isExternalTexture&&(I.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+g)}function N(A,g){const I=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&I.__version!==A.version){W(I,A,g);return}else A.isExternalTexture&&(I.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+g)}function B(A,g){const I=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&I.__version!==A.version){W(I,A,g);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+g)}function Y(A,g){const I=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&I.__version!==A.version){Q(I,A,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+g)}const ae={[Fo]:n.REPEAT,[Ni]:n.CLAMP_TO_EDGE,[Oo]:n.MIRRORED_REPEAT},j={[on]:n.NEAREST,[wp]:n.NEAREST_MIPMAP_NEAREST,[Ea]:n.NEAREST_MIPMAP_LINEAR,[vt]:n.LINEAR,[Bo]:n.LINEAR_MIPMAP_NEAREST,[Ar]:n.LINEAR_MIPMAP_LINEAR},$={[Dp]:n.NEVER,[Fp]:n.ALWAYS,[Lp]:n.LESS,[bl]:n.LEQUAL,[Ip]:n.EQUAL,[yl]:n.GEQUAL,[Up]:n.GREATER,[Np]:n.NOTEQUAL};function ge(A,g){if(g.type===mi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===vt||g.magFilter===Bo||g.magFilter===Ea||g.magFilter===Ar||g.minFilter===vt||g.minFilter===Bo||g.minFilter===Ea||g.minFilter===Ar)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ae[g.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ae[g.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ae[g.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,j[g.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,j[g.minFilter]),g.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,$[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===on||g.minFilter!==Ea&&g.minFilter!==Ar||g.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ce(A,g){let I=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",w));const K=g.source;let ie=d.get(K);ie===void 0&&(ie={},d.set(K,ie));const Z=V(g);if(Z!==A.__cacheKey){ie[Z]===void 0&&(ie[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),ie[Z].usedTimes++;const Te=ie[A.__cacheKey];Te!==void 0&&(ie[A.__cacheKey].usedTimes--,Te.usedTimes===0&&x(g)),A.__cacheKey=Z,A.__webglTexture=ie[Z].texture}return I}function ye(A,g,I){return Math.floor(Math.floor(A/I)/g)}function Fe(A,g,I,K){const Z=A.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,I,K,g.data);else{Z.sort((le,he)=>le.start-he.start);let Te=0;for(let le=1;le<Z.length;le++){const he=Z[Te],Ae=Z[le],we=he.start+he.count,ve=ye(Ae.start,g.width,4),Ye=ye(he.start,g.width,4);Ae.start<=we+1&&ve===Ye&&ye(Ae.start+Ae.count-1,g.width,4)===ve?he.count=Math.max(he.count,Ae.start+Ae.count-he.start):(++Te,Z[Te]=Ae)}Z.length=Te+1;const me=n.getParameter(n.UNPACK_ROW_LENGTH),Le=n.getParameter(n.UNPACK_SKIP_PIXELS),Ge=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let le=0,he=Z.length;le<he;le++){const Ae=Z[le],we=Math.floor(Ae.start/4),ve=Math.ceil(Ae.count/4),Ye=we%g.width,L=Math.floor(we/g.width),re=ve,ee=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Ye,L,re,ee,I,K,g.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ge)}}function W(A,g,I){let K=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(K=n.TEXTURE_3D);const ie=ce(A,g),Z=g.source;t.bindTexture(K,A.__webglTexture,n.TEXTURE0+I);const Te=i.get(Z);if(Z.version!==Te.__version||ie===!0){t.activeTexture(n.TEXTURE0+I);const me=dt.getPrimaries(dt.workingColorSpace),Le=g.colorSpace===sr?null:dt.getPrimaries(g.colorSpace),Ge=g.colorSpace===sr||me===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let le=_(g.image,!1,r.maxTextureSize);le=ht(g,le);const he=s.convert(g.format,g.colorSpace),Ae=s.convert(g.type);let we=S(g.internalFormat,he,Ae,g.colorSpace,g.isVideoTexture);ge(K,g);let ve;const Ye=g.mipmaps,L=g.isVideoTexture!==!0,re=Te.__version===void 0||ie===!0,ee=Z.dataReady,fe=T(g,le);if(g.isDepthTexture)we=E(g.format===wr,g.type),re&&(L?t.texStorage2D(n.TEXTURE_2D,1,we,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,we,le.width,le.height,0,he,Ae,null));else if(g.isDataTexture)if(Ye.length>0){L&&re&&t.texStorage2D(n.TEXTURE_2D,fe,we,Ye[0].width,Ye[0].height);for(let te=0,J=Ye.length;te<J;te++)ve=Ye[te],L?ee&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ve.width,ve.height,he,Ae,ve.data):t.texImage2D(n.TEXTURE_2D,te,we,ve.width,ve.height,0,he,Ae,ve.data);g.generateMipmaps=!1}else L?(re&&t.texStorage2D(n.TEXTURE_2D,fe,we,le.width,le.height),ee&&Fe(g,le,he,Ae)):t.texImage2D(n.TEXTURE_2D,0,we,le.width,le.height,0,he,Ae,le.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,we,Ye[0].width,Ye[0].height,le.depth);for(let te=0,J=Ye.length;te<J;te++)if(ve=Ye[te],g.format!==ti)if(he!==null)if(L){if(ee)if(g.layerUpdates.size>0){const se=yf(ve.width,ve.height,g.format,g.type);for(const ze of g.layerUpdates){const rt=ve.data.subarray(ze*se/ve.data.BYTES_PER_ELEMENT,(ze+1)*se/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,ze,ve.width,ve.height,1,he,rt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ve.width,ve.height,le.depth,he,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,we,ve.width,ve.height,le.depth,0,ve.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ve.width,ve.height,le.depth,he,Ae,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,we,ve.width,ve.height,le.depth,0,he,Ae,ve.data)}else{L&&re&&t.texStorage2D(n.TEXTURE_2D,fe,we,Ye[0].width,Ye[0].height);for(let te=0,J=Ye.length;te<J;te++)ve=Ye[te],g.format!==ti?he!==null?L?ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,ve.width,ve.height,he,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,te,we,ve.width,ve.height,0,ve.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ee&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ve.width,ve.height,he,Ae,ve.data):t.texImage2D(n.TEXTURE_2D,te,we,ve.width,ve.height,0,he,Ae,ve.data)}else if(g.isDataArrayTexture)if(L){if(re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,we,le.width,le.height,le.depth),ee)if(g.layerUpdates.size>0){const te=yf(le.width,le.height,g.format,g.type);for(const J of g.layerUpdates){const se=le.data.subarray(J*te/le.data.BYTES_PER_ELEMENT,(J+1)*te/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,le.width,le.height,1,he,Ae,se)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,he,Ae,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,le.width,le.height,le.depth,0,he,Ae,le.data);else if(g.isData3DTexture)L?(re&&t.texStorage3D(n.TEXTURE_3D,fe,we,le.width,le.height,le.depth),ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,he,Ae,le.data)):t.texImage3D(n.TEXTURE_3D,0,we,le.width,le.height,le.depth,0,he,Ae,le.data);else if(g.isFramebufferTexture){if(re)if(L)t.texStorage2D(n.TEXTURE_2D,fe,we,le.width,le.height);else{let te=le.width,J=le.height;for(let se=0;se<fe;se++)t.texImage2D(n.TEXTURE_2D,se,we,te,J,0,he,Ae,null),te>>=1,J>>=1}}else if(Ye.length>0){if(L&&re){const te=De(Ye[0]);t.texStorage2D(n.TEXTURE_2D,fe,we,te.width,te.height)}for(let te=0,J=Ye.length;te<J;te++)ve=Ye[te],L?ee&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,he,Ae,ve):t.texImage2D(n.TEXTURE_2D,te,we,he,Ae,ve);g.generateMipmaps=!1}else if(L){if(re){const te=De(le);t.texStorage2D(n.TEXTURE_2D,fe,we,te.width,te.height)}ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Ae,le)}else t.texImage2D(n.TEXTURE_2D,0,we,he,Ae,le);p(g)&&h(K),Te.__version=Z.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Q(A,g,I){if(g.image.length!==6)return;const K=ce(A,g),ie=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+I);const Z=i.get(ie);if(ie.version!==Z.__version||K===!0){t.activeTexture(n.TEXTURE0+I);const Te=dt.getPrimaries(dt.workingColorSpace),me=g.colorSpace===sr?null:dt.getPrimaries(g.colorSpace),Le=g.colorSpace===sr||Te===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ge=g.isCompressedTexture||g.image[0].isCompressedTexture,le=g.image[0]&&g.image[0].isDataTexture,he=[];for(let J=0;J<6;J++)!Ge&&!le?he[J]=_(g.image[J],!0,r.maxCubemapSize):he[J]=le?g.image[J].image:g.image[J],he[J]=ht(g,he[J]);const Ae=he[0],we=s.convert(g.format,g.colorSpace),ve=s.convert(g.type),Ye=S(g.internalFormat,we,ve,g.colorSpace),L=g.isVideoTexture!==!0,re=Z.__version===void 0||K===!0,ee=ie.dataReady;let fe=T(g,Ae);ge(n.TEXTURE_CUBE_MAP,g);let te;if(Ge){L&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Ye,Ae.width,Ae.height);for(let J=0;J<6;J++){te=he[J].mipmaps;for(let se=0;se<te.length;se++){const ze=te[se];g.format!==ti?we!==null?L?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se,0,0,ze.width,ze.height,we,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se,Ye,ze.width,ze.height,0,ze.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se,0,0,ze.width,ze.height,we,ve,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se,Ye,ze.width,ze.height,0,we,ve,ze.data)}}}else{if(te=g.mipmaps,L&&re){te.length>0&&fe++;const J=De(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Ye,J.width,J.height)}for(let J=0;J<6;J++)if(le){L?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,he[J].width,he[J].height,we,ve,he[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,he[J].width,he[J].height,0,we,ve,he[J].data);for(let se=0;se<te.length;se++){const rt=te[se].image[J].image;L?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se+1,0,0,rt.width,rt.height,we,ve,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se+1,Ye,rt.width,rt.height,0,we,ve,rt.data)}}else{L?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,we,ve,he[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,we,ve,he[J]);for(let se=0;se<te.length;se++){const ze=te[se];L?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se+1,0,0,we,ve,ze.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se+1,Ye,we,ve,ze.image[J])}}}p(g)&&h(n.TEXTURE_CUBE_MAP),Z.__version=ie.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function _e(A,g,I,K,ie,Z){const Te=s.convert(I.format,I.colorSpace),me=s.convert(I.type),Le=S(I.internalFormat,Te,me,I.colorSpace),Ge=i.get(g),le=i.get(I);if(le.__renderTarget=g,!Ge.__hasExternalTextures){const he=Math.max(1,g.width>>Z),Ae=Math.max(1,g.height>>Z);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,Z,Le,he,Ae,g.depth,0,Te,me,null):t.texImage2D(ie,Z,Le,he,Ae,0,Te,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),it(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ie,le.__webglTexture,0,P(g)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ie,le.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(A,g,I){if(n.bindRenderbuffer(n.RENDERBUFFER,A),g.depthBuffer){const K=g.depthTexture,ie=K&&K.isDepthTexture?K.type:null,Z=E(g.stencilBuffer,ie),Te=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;it(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(g),Z,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(g),Z,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Z,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,A)}else{const K=g.textures;for(let ie=0;ie<K.length;ie++){const Z=K[ie],Te=s.convert(Z.format,Z.colorSpace),me=s.convert(Z.type),Le=S(Z.internalFormat,Te,me,Z.colorSpace);it(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(g),Le,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(g),Le,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Le,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(A,g,I){const K=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(g.depthTexture);if(ie.__renderTarget=g,(!ie.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),ie.__webglTexture===void 0){ie.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),ge(n.TEXTURE_CUBE_MAP,g.depthTexture);const Ge=s.convert(g.depthTexture.format),le=s.convert(g.depthTexture.type);let he;g.depthTexture.format===Oi?he=n.DEPTH_COMPONENT24:g.depthTexture.format===wr&&(he=n.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,he,g.width,g.height,0,Ge,le,null)}}else k(g.depthTexture,0);const Z=ie.__webglTexture,Te=P(g),me=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,Le=g.depthTexture.format===wr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Oi)it(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,me,Z,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,Le,me,Z,0);else if(g.depthTexture.format===wr)it(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,me,Z,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,Le,me,Z,0);else throw new Error("Unknown depthTexture format")}function Ce(A){const g=i.get(A),I=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),K){const ie=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,K.removeEventListener("dispose",ie)};K.addEventListener("dispose",ie),g.__depthDisposeCallback=ie}g.__boundDepthTexture=K}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let K=0;K<6;K++)ue(g.__webglFramebuffer[K],A,K);else{const K=A.texture.mipmaps;K&&K.length>0?ue(g.__webglFramebuffer[0],A,0):ue(g.__webglFramebuffer,A,0)}else if(I){g.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[K]),g.__webglDepthbuffer[K]===void 0)g.__webglDepthbuffer[K]=n.createRenderbuffer(),de(g.__webglDepthbuffer[K],A,!1);else{const ie=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Z)}}else{const K=A.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),de(g.__webglDepthbuffer,A,!1);else{const ie=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(A,g,I){const K=i.get(A);g!==void 0&&_e(K.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ce(A)}function Xe(A){const g=A.texture,I=i.get(A),K=i.get(g);A.addEventListener("dispose",C);const ie=A.textures,Z=A.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=g.version,a.memory.textures++),Z){I.__webglFramebuffer=[];for(let me=0;me<6;me++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[me]=[];for(let Le=0;Le<g.mipmaps.length;Le++)I.__webglFramebuffer[me][Le]=n.createFramebuffer()}else I.__webglFramebuffer[me]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let me=0;me<g.mipmaps.length;me++)I.__webglFramebuffer[me]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Te)for(let me=0,Le=ie.length;me<Le;me++){const Ge=i.get(ie[me]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&it(A)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let me=0;me<ie.length;me++){const Le=ie[me];I.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[me]);const Ge=s.convert(Le.format,Le.colorSpace),le=s.convert(Le.type),he=S(Le.internalFormat,Ge,le,Le.colorSpace,A.isXRRenderTarget===!0),Ae=P(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,he,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,I.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),de(I.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ge(n.TEXTURE_CUBE_MAP,g);for(let me=0;me<6;me++)if(g.mipmaps&&g.mipmaps.length>0)for(let Le=0;Le<g.mipmaps.length;Le++)_e(I.__webglFramebuffer[me][Le],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le);else _e(I.__webglFramebuffer[me],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(g)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let me=0,Le=ie.length;me<Le;me++){const Ge=ie[me],le=i.get(Ge);let he=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,le.__webglTexture),ge(he,Ge),_e(I.__webglFramebuffer,A,Ge,n.COLOR_ATTACHMENT0+me,he,0),p(Ge)&&h(he)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(me=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,K.__webglTexture),ge(me,g),g.mipmaps&&g.mipmaps.length>0)for(let Le=0;Le<g.mipmaps.length;Le++)_e(I.__webglFramebuffer[Le],A,g,n.COLOR_ATTACHMENT0,me,Le);else _e(I.__webglFramebuffer,A,g,n.COLOR_ATTACHMENT0,me,0);p(g)&&h(me),t.unbindTexture()}A.depthBuffer&&Ce(A)}function Se(A){const g=A.textures;for(let I=0,K=g.length;I<K;I++){const ie=g[I];if(p(ie)){const Z=b(A),Te=i.get(ie).__webglTexture;t.bindTexture(Z,Te),h(Z),t.unbindTexture()}}}const xe=[],pe=[];function Ze(A){if(A.samples>0){if(it(A)===!1){const g=A.textures,I=A.width,K=A.height;let ie=n.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(A),me=g.length>1;if(me)for(let Ge=0;Ge<g.length;Ge++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Le=A.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ge=0;Ge<g.length;Ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Ge]);const le=i.get(g[Ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,I,K,0,0,I,K,ie,n.NEAREST),c===!0&&(xe.length=0,pe.length=0,xe.push(n.COLOR_ATTACHMENT0+Ge),A.depthBuffer&&A.resolveDepthBuffer===!1&&(xe.push(Z),pe.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,pe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Ge=0;Ge<g.length;Ge++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Ge]);const le=i.get(g[Ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const g=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function P(A){return Math.min(r.maxSamples,A.samples)}function it(A){const g=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function tt(A){const g=a.render.frame;u.get(A)!==g&&(u.set(A,g),A.update())}function ht(A,g){const I=A.colorSpace,K=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||I!==ss&&I!==sr&&(dt.getTransfer(I)===_t?(K!==ti||ie!==kn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",I)),g}function De(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=z,this.setTexture2D=k,this.setTexture2DArray=N,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=Ve,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function A0(n,e){function t(i,r=sr){let s;const a=dt.getTransfer(r);if(i===kn)return n.UNSIGNED_BYTE;if(i===Vo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Go)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lu)return n.BYTE;if(i===Iu)return n.SHORT;if(i===Hs)return n.UNSIGNED_SHORT;if(i===zo)return n.INT;if(i===pi)return n.UNSIGNED_INT;if(i===mi)return n.FLOAT;if(i===Fi)return n.HALF_FLOAT;if(i===Fu)return n.ALPHA;if(i===Ou)return n.RGB;if(i===ti)return n.RGBA;if(i===Oi)return n.DEPTH_COMPONENT;if(i===wr)return n.DEPTH_STENCIL;if(i===Bu)return n.RED;if(i===Ho)return n.RED_INTEGER;if(i===rs)return n.RG;if(i===ko)return n.RG_INTEGER;if(i===Wo)return n.RGBA_INTEGER;if(i===ba||i===ya||i===Ta||i===Aa)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ba)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ba)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ta)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Aa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xo||i===Yo||i===qo||i===Zo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jo||i===Ko||i===$o||i===Jo||i===Qo||i===el||i===tl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jo||i===Ko)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$o)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Jo)return s.COMPRESSED_R11_EAC;if(i===Qo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===el)return s.COMPRESSED_RG11_EAC;if(i===tl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===nl||i===il||i===rl||i===sl||i===al||i===ol||i===ll||i===cl||i===ul||i===fl||i===dl||i===hl||i===pl||i===ml)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===nl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===il)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===al)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ol)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ll)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ul)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pl)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ml)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vl||i===gl||i===_l)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vl)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_l)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xl||i===Sl||i===Ml||i===El)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===xl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===El)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const w0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R0=`
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

}`;class C0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new xf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ln({vertexShader:w0,fragmentShader:R0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pn(new ai(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P0 extends os{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,m=null,v=null;const _=typeof XRWebGLBinding<"u",p=new C0,h={},b=t.getContextAttributes();let S=null,E=null;const T=[],w=[],C=new Ke;let U=null;const x=new Jt;x.viewport=new Ot;const y=new Jt;y.viewport=new Ot;const R=[x,y],z=new Sm;let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=T[W];return Q===void 0&&(Q=new $l,T[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=T[W];return Q===void 0&&(Q=new $l,T[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=T[W];return Q===void 0&&(Q=new $l,T[W]=Q),Q.getHandSpace()};function k(W){const Q=w.indexOf(W.inputSource);if(Q===-1)return;const _e=T[Q];_e!==void 0&&(_e.update(W.inputSource,W.frame,l||a),_e.dispatchEvent({type:W.type,data:W.inputSource}))}function N(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",B);for(let W=0;W<T.length;W++){const Q=w[W];Q!==null&&(w[W]=null,T[W].disconnect(Q))}D=null,V=null,p.reset();for(const W in h)delete h[W];e.setRenderTarget(S),m=null,d=null,f=null,r=null,E=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",N),r.addEventListener("inputsourceschange",B),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,de=null,ue=null;b.depth&&(ue=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?wr:Oi,de=b.stencil?ks:pi);const Ce={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new gi(d.textureWidth,d.textureHeight,{format:ti,type:kn,depthTexture:new ta(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new gi(m.framebufferWidth,m.framebufferHeight,{format:ti,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(W){for(let Q=0;Q<W.removed.length;Q++){const _e=W.removed[Q],de=w.indexOf(_e);de>=0&&(w[de]=null,T[de].disconnect(_e))}for(let Q=0;Q<W.added.length;Q++){const _e=W.added[Q];let de=w.indexOf(_e);if(de===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=w.length){w.push(_e),de=Ce;break}else if(w[Ce]===null){w[Ce]=_e,de=Ce;break}if(de===-1)break}const ue=T[de];ue&&ue.connect(_e)}}const Y=new H,ae=new H;function j(W,Q,_e){Y.setFromMatrixPosition(Q.matrixWorld),ae.setFromMatrixPosition(_e.matrixWorld);const de=Y.distanceTo(ae),ue=Q.projectionMatrix.elements,Ce=_e.projectionMatrix.elements,Ve=ue[14]/(ue[10]-1),Xe=ue[14]/(ue[10]+1),Se=(ue[9]+1)/ue[5],xe=(ue[9]-1)/ue[5],pe=(ue[8]-1)/ue[0],Ze=(Ce[8]+1)/Ce[0],P=Ve*pe,it=Ve*Ze,tt=de/(-pe+Ze),ht=tt*-pe;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ht),W.translateZ(tt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ue[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const De=Ve+tt,A=Xe+tt,g=P-ht,I=it+(de-ht),K=Se*Xe/A*De,ie=xe*Xe/A*De;W.projectionMatrix.makePerspective(g,I,K,ie,De,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function $(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let Q=W.near,_e=W.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(_e=p.depthFar)),z.near=y.near=x.near=Q,z.far=y.far=x.far=_e,(D!==z.near||V!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),D=z.near,V=z.far),z.layers.mask=W.layers.mask|6,x.layers.mask=z.layers.mask&3,y.layers.mask=z.layers.mask&5;const de=W.parent,ue=z.cameras;$(z,de);for(let Ce=0;Ce<ue.length;Ce++)$(ue[Ce],de);ue.length===2?j(z,x,y):z.projectionMatrix.copy(x.projectionMatrix),ge(W,z,de)};function ge(W,Q,_e){_e===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(_e.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Al*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(W){return h[W]};let ce=null;function ye(W,Q){if(u=Q.getViewerPose(l||a),v=Q,u!==null){const _e=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let de=!1;_e.length!==z.cameras.length&&(z.cameras.length=0,de=!0);for(let Xe=0;Xe<_e.length;Xe++){const Se=_e[Xe];let xe=null;if(m!==null)xe=m.getViewport(Se);else{const Ze=f.getViewSubImage(d,Se);xe=Ze.viewport,Xe===0&&(e.setRenderTargetTextures(E,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(E))}let pe=R[Xe];pe===void 0&&(pe=new Jt,pe.layers.enable(Xe),pe.viewport=new Ot,R[Xe]=pe),pe.matrix.fromArray(Se.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Se.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(xe.x,xe.y,xe.width,xe.height),Xe===0&&(z.matrix.copy(pe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),de===!0&&z.cameras.push(pe)}const ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const Xe=f.getDepthInformation(_e[0]);Xe&&Xe.isValid&&Xe.texture&&p.init(Xe,r.renderState)}if(ue&&ue.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let Xe=0;Xe<_e.length;Xe++){const Se=_e[Xe].camera;if(Se){let xe=h[Se];xe||(xe=new xf,h[Se]=xe);const pe=f.getCameraImage(Se);xe.sourceTexture=pe}}}}for(let _e=0;_e<T.length;_e++){const de=w[_e],ue=T[_e];de!==null&&ue!==void 0&&ue.update(de,Q,l||a)}ce&&ce(W,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),v=null}const Fe=new Tf;Fe.setAnimationLoop(ye),this.setAnimationLoop=function(W){ce=W},this.dispose=function(){}}}const Or=new Gi,D0=new Bt;function L0(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,df(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,b,S,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,E)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?c(p,h,b,S):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===bn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===bn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=e.get(h),S=b.envMap,E=b.envMapRotation;S&&(p.envMap.value=S,Or.copy(E),Or.x*=-1,Or.y*=-1,Or.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),p.envMapRotation.value.setFromMatrix4(D0.makeRotationFromEuler(Or)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,b,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=S*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===bn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function I0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const E=S.program;i.uniformBlockBinding(b,E)}function l(b,S){let E=r[b.id];E===void 0&&(v(b),E=u(b),r[b.id]=E,b.addEventListener("dispose",p));const T=S.program;i.updateUBOMapping(b,T);const w=e.render.frame;s[b.id]!==w&&(d(b),s[b.id]=w)}function u(b){const S=f();b.__bindingPointIndex=S;const E=n.createBuffer(),T=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=r[b.id],E=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,C=E.length;w<C;w++){const U=Array.isArray(E[w])?E[w]:[E[w]];for(let x=0,y=U.length;x<y;x++){const R=U[x];if(m(R,w,x,T)===!0){const z=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let k=0;k<D.length;k++){const N=D[k],B=_(N);typeof N=="number"||typeof N=="boolean"?(R.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,z+V,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=0,R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=0,R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=0):(N.toArray(R.__data,V),V+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,S,E,T){const w=b.value,C=S+"_"+E;if(T[C]===void 0)return typeof w=="number"||typeof w=="boolean"?T[C]=w:T[C]=w.clone(),!0;{const U=T[C];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return T[C]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function v(b){const S=b.uniforms;let E=0;const T=16;for(let C=0,U=S.length;C<U;C++){const x=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,R=x.length;y<R;y++){const z=x[y],D=Array.isArray(z.value)?z.value:[z.value];for(let V=0,k=D.length;V<k;V++){const N=D[V],B=_(N),Y=E%T,ae=Y%B.boundary,j=Y+ae;E+=ae,j!==0&&T-j<B.storage&&(E+=T-j),z.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=B.storage}}}const w=E%T;return w>0&&(E+=T-w),b.__size=E,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Je("WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){const S=b.target;S.removeEventListener("dispose",p);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}const U0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Si=null;function N0(){return Si===null&&(Si=new cm(U0,16,16,rs,Fi),Si.name="DFG_LUT",Si.minFilter=vt,Si.magFilter=vt,Si.wrapS=Ni,Si.wrapT=Ni,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}class Br{constructor(e={}){const{canvas:t=Op(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=kn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const _=m,p=new Set([Wo,ko,Ho]),h=new Set([kn,pi,Hs,ks,Vo,Go]),b=new Uint32Array(4),S=new Int32Array(4);let E=null,T=null;const w=[],C=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=an,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let y=!1;this._outputColorSpace=Xt;let R=0,z=0,D=null,V=-1,k=null;const N=new Ot,B=new Ot;let Y=null;const ae=new xt(0);let j=0,$=t.width,ge=t.height,ce=1,ye=null,Fe=null;const W=new Ot(0,0,$,ge),Q=new Ot(0,0,$,ge);let _e=!1;const de=new _f;let ue=!1,Ce=!1;const Ve=new Bt,Xe=new H,Se=new Ot,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function Ze(){return D===null?ce:1}let P=i;function it(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yo}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Qe,!1),P===null){const F="webgl2";if(P=it(F,M),P===null)throw it(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw ft("WebGLRenderer: "+M.message),M}let tt,ht,De,A,g,I,K,ie,Z,Te,me,Le,Ge,le,he,Ae,we,ve,Ye,L,re,ee,fe,te;function J(){tt=new Ng(P),tt.init(),ee=new A0(P,tt),ht=new Ag(P,tt,e,ee),De=new y0(P,tt),ht.reversedDepthBuffer&&d&&De.buffers.depth.setReversed(!0),A=new Bg(P),g=new c0,I=new T0(P,tt,De,g,ht,ee,A),K=new Rg(x),ie=new Ug(x),Z=new Em(P),fe=new yg(P,Z),Te=new Fg(P,Z,A,fe),me=new Vg(P,Te,Z,A),Ye=new zg(P,ht,I),Ae=new wg(g),Le=new l0(x,K,ie,tt,ht,fe,Ae),Ge=new L0(x,g),le=new f0,he=new g0(tt),ve=new bg(x,K,ie,De,me,v,c),we=new E0(x,me,ht),te=new I0(P,A,ht,De),L=new Tg(P,tt,A),re=new Og(P,tt,A),A.programs=Le.programs,x.capabilities=ht,x.extensions=tt,x.properties=g,x.renderLists=le,x.shadowMap=we,x.state=De,x.info=A}J(),_!==kn&&(U=new Hg(_,t.width,t.height,r,s));const se=new P0(x,P);this.xr=se,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(M){M!==void 0&&(ce=M,this.setSize($,ge,!1))},this.getSize=function(M){return M.set($,ge)},this.setSize=function(M,F,q=!0){if(se.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,ge=F,t.width=Math.floor(M*ce),t.height=Math.floor(F*ce),q===!0&&(t.style.width=M+"px",t.style.height=F+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set($*ce,ge*ce).floor()},this.setDrawingBufferSize=function(M,F,q){$=M,ge=F,ce=q,t.width=Math.floor(M*q),t.height=Math.floor(F*q),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(_===kn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(N)},this.getViewport=function(M){return M.copy(W)},this.setViewport=function(M,F,q,X){M.isVector4?W.set(M.x,M.y,M.z,M.w):W.set(M,F,q,X),De.viewport(N.copy(W).multiplyScalar(ce).round())},this.getScissor=function(M){return M.copy(Q)},this.setScissor=function(M,F,q,X){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,F,q,X),De.scissor(B.copy(Q).multiplyScalar(ce).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(M){De.setScissorTest(_e=M)},this.setOpaqueSort=function(M){ye=M},this.setTransparentSort=function(M){Fe=M},this.getClearColor=function(M){return M.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,q=!0){let X=0;if(M){let G=!1;if(D!==null){const Me=D.texture.format;G=p.has(Me)}if(G){const Me=D.texture.type,Ie=h.has(Me),be=ve.getClearColor(),Ue=ve.getClearAlpha(),Be=be.r,qe=be.g,ke=be.b;Ie?(b[0]=Be,b[1]=qe,b[2]=ke,b[3]=Ue,P.clearBufferuiv(P.COLOR,0,b)):(S[0]=Be,S[1]=qe,S[2]=ke,S[3]=Ue,P.clearBufferiv(P.COLOR,0,S))}else X|=P.COLOR_BUFFER_BIT}F&&(X|=P.DEPTH_BUFFER_BIT),q&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),ve.dispose(),le.dispose(),he.dispose(),g.dispose(),K.dispose(),ie.dispose(),me.dispose(),fe.dispose(),te.dispose(),Le.dispose(),se.dispose(),se.removeEventListener("sessionstart",lt),se.removeEventListener("sessionend",Dt),It.stop()};function ze(M){M.preventDefault(),Wu("WebGLRenderer: Context Lost."),y=!0}function rt(){Wu("WebGLRenderer: Context Restored."),y=!1;const M=A.autoReset,F=we.enabled,q=we.autoUpdate,X=we.needsUpdate,G=we.type;J(),A.autoReset=M,we.enabled=F,we.autoUpdate=q,we.needsUpdate=X,we.type=G}function Qe(M){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Gt(M){const F=M.target;F.removeEventListener("dispose",Gt),Lt(F)}function Lt(M){qn(M),g.remove(M)}function qn(M){const F=g.get(M).programs;F!==void 0&&(F.forEach(function(q){Le.releaseProgram(q)}),M.isShaderMaterial&&Le.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,q,X,G,Me){F===null&&(F=xe);const Ie=G.isMesh&&G.matrixWorld.determinant()<0,be=Rx(M,F,q,X,G);De.setMaterial(X,Ie);let Ue=q.index,Be=1;if(X.wireframe===!0){if(Ue=Te.getWireframeAttribute(q),Ue===void 0)return;Be=2}const qe=q.drawRange,ke=q.attributes.position;let at=qe.start*Be,bt=(qe.start+qe.count)*Be;Me!==null&&(at=Math.max(at,Me.start*Be),bt=Math.min(bt,(Me.start+Me.count)*Be)),Ue!==null?(at=Math.max(at,0),bt=Math.min(bt,Ue.count)):ke!=null&&(at=Math.max(at,0),bt=Math.min(bt,ke.count));const Ut=bt-at;if(Ut<0||Ut===1/0)return;fe.setup(G,X,be,q,Ue);let Nt,yt=L;if(Ue!==null&&(Nt=Z.get(Ue),yt=re,yt.setIndex(Nt)),G.isMesh)X.wireframe===!0?(De.setLineWidth(X.wireframeLinewidth*Ze()),yt.setMode(P.LINES)):yt.setMode(P.TRIANGLES);else if(G.isLine){let We=X.linewidth;We===void 0&&(We=1),De.setLineWidth(We*Ze()),G.isLineSegments?yt.setMode(P.LINES):G.isLineLoop?yt.setMode(P.LINE_LOOP):yt.setMode(P.LINE_STRIP)}else G.isPoints?yt.setMode(P.POINTS):G.isSprite&&yt.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Xs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))yt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const We=G._multiDrawStarts,Mt=G._multiDrawCounts,pt=G._multiDrawCount,Fn=Ue?Z.get(Ue).bytesPerElement:1,Ls=g.get(X).currentProgram.getUniforms();for(let On=0;On<pt;On++)Ls.setValue(P,"_gl_DrawID",On),yt.render(We[On]/Fn,Mt[On])}else if(G.isInstancedMesh)yt.renderInstances(at,Ut,G.count);else if(q.isInstancedBufferGeometry){const We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Mt=Math.min(q.instanceCount,We);yt.renderInstances(at,Ut,Mt)}else yt.render(at,Ut)};function Ai(M,F,q){M.transparent===!0&&M.side===un&&M.forceSinglePass===!1?(M.side=bn,M.needsUpdate=!0,vr(M,F,q),M.side=rr,M.needsUpdate=!0,vr(M,F,q),M.side=un):vr(M,F,q)}this.compile=function(M,F,q=null){q===null&&(q=M),T=he.get(q),T.init(F),C.push(T),q.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),M!==q&&M.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const X=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Me=G.material;if(Me)if(Array.isArray(Me))for(let Ie=0;Ie<Me.length;Ie++){const be=Me[Ie];Ai(be,q,G),X.add(be)}else Ai(Me,q,G),X.add(Me)}),T=C.pop(),X},this.compileAsync=function(M,F,q=null){const X=this.compile(M,F,q);return new Promise(G=>{function Me(){if(X.forEach(function(Ie){g.get(Ie).currentProgram.isReady()&&X.delete(Ie)}),X.size===0){G(M);return}setTimeout(Me,10)}tt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Pe=null;function $e(M){Pe&&Pe(M)}function lt(){It.stop()}function Dt(){It.start()}const It=new Tf;It.setAnimationLoop($e),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(M){Pe=M,se.setAnimationLoop(M),M===null?It.stop():It.start()},se.addEventListener("sessionstart",lt),se.addEventListener("sessionend",Dt),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const q=se.enabled===!0&&se.isPresenting===!0,X=U!==null&&(D===null||q)&&U.begin(x,D);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(F),F=se.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,F,D),T=he.get(M,C.length),T.init(F),C.push(T),Ve.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),de.setFromProjectionMatrix(Ve,vi,F.reversedDepth),Ce=this.localClippingEnabled,ue=Ae.init(this.clippingPlanes,Ce),E=le.get(M,w.length),E.init(),w.push(E),se.enabled===!0&&se.isPresenting===!0){const Ie=x.xr.getDepthSensingMesh();Ie!==null&&cn(Ie,F,-1/0,x.sortObjects)}cn(M,F,0,x.sortObjects),E.finish(),x.sortObjects===!0&&E.sort(ye,Fe),pe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,pe&&ve.addToRenderList(E,M),this.info.render.frame++,ue===!0&&Ae.beginShadows();const G=T.state.shadowsArray;if(we.render(G,M,F),ue===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&U.hasRenderPass())===!1){const Ie=E.opaque,be=E.transmissive;if(T.setupLights(),F.isArrayCamera){const Ue=F.cameras;if(be.length>0)for(let Be=0,qe=Ue.length;Be<qe;Be++){const ke=Ue[Be];St(Ie,be,M,ke)}pe&&ve.render(M);for(let Be=0,qe=Ue.length;Be<qe;Be++){const ke=Ue[Be];mr(E,M,ke,ke.viewport)}}else be.length>0&&St(Ie,be,M,F),pe&&ve.render(M),mr(E,M,F)}D!==null&&z===0&&(I.updateMultisampleRenderTarget(D),I.updateRenderTargetMipmap(D)),X&&U.end(x),M.isScene===!0&&M.onAfterRender(x,M,F),fe.resetDefaultState(),V=-1,k=null,C.pop(),C.length>0?(T=C[C.length-1],ue===!0&&Ae.setGlobalState(x.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?E=w[w.length-1]:E=null};function cn(M,F,q,X){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||de.intersectsSprite(M)){X&&Se.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ve);const Ie=me.update(M),be=M.material;be.visible&&E.push(M,Ie,be,q,Se.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||de.intersectsObject(M))){const Ie=me.update(M),be=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Se.copy(M.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Se.copy(Ie.boundingSphere.center)),Se.applyMatrix4(M.matrixWorld).applyMatrix4(Ve)),Array.isArray(be)){const Ue=Ie.groups;for(let Be=0,qe=Ue.length;Be<qe;Be++){const ke=Ue[Be],at=be[ke.materialIndex];at&&at.visible&&E.push(M,Ie,at,q,Se.z,ke)}}else be.visible&&E.push(M,Ie,be,q,Se.z,null)}}const Me=M.children;for(let Ie=0,be=Me.length;Ie<be;Ie++)cn(Me[Ie],F,q,X)}function mr(M,F,q,X){const{opaque:G,transmissive:Me,transparent:Ie}=M;T.setupLightsView(q),ue===!0&&Ae.setGlobalState(x.clippingPlanes,q),X&&De.viewport(N.copy(X)),G.length>0&&Nn(G,F,q),Me.length>0&&Nn(Me,F,q),Ie.length>0&&Nn(Ie,F,q),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function St(M,F,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){const at=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new gi(1,1,{generateMipmaps:!0,type:at?Fi:kn,minFilter:Ar,samples:ht.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const Me=T.state.transmissionRenderTarget[X.id],Ie=X.viewport||N;Me.setSize(Ie.z*x.transmissionResolutionScale,Ie.w*x.transmissionResolutionScale);const be=x.getRenderTarget(),Ue=x.getActiveCubeFace(),Be=x.getActiveMipmapLevel();x.setRenderTarget(Me),x.getClearColor(ae),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),pe&&ve.render(q);const qe=x.toneMapping;x.toneMapping=an;const ke=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),ue===!0&&Ae.setGlobalState(x.clippingPlanes,X),Nn(M,q,X),I.updateMultisampleRenderTarget(Me),I.updateRenderTargetMipmap(Me),tt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let bt=0,Ut=F.length;bt<Ut;bt++){const Nt=F[bt],{object:yt,geometry:We,material:Mt,group:pt}=Nt;if(Mt.side===un&&yt.layers.test(X.layers)){const Fn=Mt.side;Mt.side=bn,Mt.needsUpdate=!0,wi(yt,q,X,We,Mt,pt),Mt.side=Fn,Mt.needsUpdate=!0,at=!0}}at===!0&&(I.updateMultisampleRenderTarget(Me),I.updateRenderTargetMipmap(Me))}x.setRenderTarget(be,Ue,Be),x.setClearColor(ae,j),ke!==void 0&&(X.viewport=ke),x.toneMapping=qe}function Nn(M,F,q){const X=F.isScene===!0?F.overrideMaterial:null;for(let G=0,Me=M.length;G<Me;G++){const Ie=M[G],{object:be,geometry:Ue,group:Be}=Ie;let qe=Ie.material;qe.allowOverride===!0&&X!==null&&(qe=X),be.layers.test(q.layers)&&wi(be,F,q,Ue,qe,Be)}}function wi(M,F,q,X,G,Me){M.onBeforeRender(x,F,q,X,G,Me),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(x,F,q,X,M,Me),G.transparent===!0&&G.side===un&&G.forceSinglePass===!1?(G.side=bn,G.needsUpdate=!0,x.renderBufferDirect(q,F,X,G,M,Me),G.side=rr,G.needsUpdate=!0,x.renderBufferDirect(q,F,X,G,M,Me),G.side=un):x.renderBufferDirect(q,F,X,G,M,Me),M.onAfterRender(x,F,q,X,G,Me)}function vr(M,F,q){F.isScene!==!0&&(F=xe);const X=g.get(M),G=T.state.lights,Me=T.state.shadowsArray,Ie=G.state.version,be=Le.getParameters(M,G.state,Me,F,q),Ue=Le.getProgramCacheKey(be);let Be=X.programs;X.environment=M.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(M.isMeshStandardMaterial?ie:K).get(M.envMap||X.environment),X.envMapRotation=X.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",Gt),Be=new Map,X.programs=Be);let qe=Be.get(Ue);if(qe!==void 0){if(X.currentProgram===qe&&X.lightsStateVersion===Ie)return to(M,be),qe}else be.uniforms=Le.getUniforms(M),M.onBeforeCompile(be,x),qe=Le.acquireProgram(be,Ue),Be.set(Ue,qe),X.uniforms=be.uniforms;const ke=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=Ae.uniform),to(M,be),X.needsLights=Px(M),X.lightsStateVersion=Ie,X.needsLights&&(ke.ambientLightColor.value=G.state.ambient,ke.lightProbe.value=G.state.probe,ke.directionalLights.value=G.state.directional,ke.directionalLightShadows.value=G.state.directionalShadow,ke.spotLights.value=G.state.spot,ke.spotLightShadows.value=G.state.spotShadow,ke.rectAreaLights.value=G.state.rectArea,ke.ltc_1.value=G.state.rectAreaLTC1,ke.ltc_2.value=G.state.rectAreaLTC2,ke.pointLights.value=G.state.point,ke.pointLightShadows.value=G.state.pointShadow,ke.hemisphereLights.value=G.state.hemi,ke.directionalShadowMap.value=G.state.directionalShadowMap,ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ke.spotShadowMap.value=G.state.spotShadowMap,ke.spotLightMatrix.value=G.state.spotLightMatrix,ke.spotLightMap.value=G.state.spotLightMap,ke.pointShadowMap.value=G.state.pointShadowMap,ke.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=qe,X.uniformsList=null,qe}function eo(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=Ka.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function to(M,F){const q=g.get(M);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Rx(M,F,q,X,G){F.isScene!==!0&&(F=xe),I.resetTextureUnits();const Me=F.fog,Ie=X.isMeshStandardMaterial?F.environment:null,be=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ss,Ue=(X.isMeshStandardMaterial?ie:K).get(X.envMap||Ie),Be=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,qe=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ke=!!q.morphAttributes.position,at=!!q.morphAttributes.normal,bt=!!q.morphAttributes.color;let Ut=an;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ut=x.toneMapping);const Nt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,yt=Nt!==void 0?Nt.length:0,We=g.get(X),Mt=T.state.lights;if(ue===!0&&(Ce===!0||M!==k)){const _n=M===k&&X.id===V;Ae.setState(X,M,_n)}let pt=!1;X.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Mt.state.version||We.outputColorSpace!==be||G.isBatchedMesh&&We.batching===!1||!G.isBatchedMesh&&We.batching===!0||G.isBatchedMesh&&We.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&We.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&We.instancing===!1||!G.isInstancedMesh&&We.instancing===!0||G.isSkinnedMesh&&We.skinning===!1||!G.isSkinnedMesh&&We.skinning===!0||G.isInstancedMesh&&We.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&We.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&We.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&We.instancingMorph===!1&&G.morphTexture!==null||We.envMap!==Ue||X.fog===!0&&We.fog!==Me||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ae.numPlanes||We.numIntersection!==Ae.numIntersection)||We.vertexAlphas!==Be||We.vertexTangents!==qe||We.morphTargets!==ke||We.morphNormals!==at||We.morphColors!==bt||We.toneMapping!==Ut||We.morphTargetsCount!==yt)&&(pt=!0):(pt=!0,We.__version=X.version);let Fn=We.currentProgram;pt===!0&&(Fn=vr(X,F,G));let Ls=!1,On=!1,ca=!1;const Tt=Fn.getUniforms(),An=We.uniforms;if(De.useProgram(Fn.program)&&(Ls=!0,On=!0,ca=!0),X.id!==V&&(V=X.id,On=!0),Ls||k!==M){De.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Tt.setValue(P,"projectionMatrix",M.projectionMatrix),Tt.setValue(P,"viewMatrix",M.matrixWorldInverse);const wn=Tt.map.cameraPosition;wn!==void 0&&wn.setValue(P,Xe.setFromMatrixPosition(M.matrixWorld)),ht.logarithmicDepthBuffer&&Tt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Tt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),k!==M&&(k=M,On=!0,ca=!0)}if(We.needsLights&&(Mt.state.directionalShadowMap.length>0&&Tt.setValue(P,"directionalShadowMap",Mt.state.directionalShadowMap,I),Mt.state.spotShadowMap.length>0&&Tt.setValue(P,"spotShadowMap",Mt.state.spotShadowMap,I),Mt.state.pointShadowMap.length>0&&Tt.setValue(P,"pointShadowMap",Mt.state.pointShadowMap,I)),G.isSkinnedMesh){Tt.setOptional(P,G,"bindMatrix"),Tt.setOptional(P,G,"bindMatrixInverse");const _n=G.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Tt.setValue(P,"boneTexture",_n.boneTexture,I))}G.isBatchedMesh&&(Tt.setOptional(P,G,"batchingTexture"),Tt.setValue(P,"batchingTexture",G._matricesTexture,I),Tt.setOptional(P,G,"batchingIdTexture"),Tt.setValue(P,"batchingIdTexture",G._indirectTexture,I),Tt.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&Tt.setValue(P,"batchingColorTexture",G._colorsTexture,I));const Zn=q.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&Ye.update(G,q,Fn),(On||We.receiveShadow!==G.receiveShadow)&&(We.receiveShadow=G.receiveShadow,Tt.setValue(P,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(An.envMap.value=Ue,An.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(An.envMapIntensity.value=F.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=N0()),On&&(Tt.setValue(P,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&Cx(An,ca),Me&&X.fog===!0&&Ge.refreshFogUniforms(An,Me),Ge.refreshMaterialUniforms(An,X,ce,ge,T.state.transmissionRenderTarget[M.id]),Ka.upload(P,eo(We),An,I)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ka.upload(P,eo(We),An,I),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Tt.setValue(P,"center",G.center),Tt.setValue(P,"modelViewMatrix",G.modelViewMatrix),Tt.setValue(P,"normalMatrix",G.normalMatrix),Tt.setValue(P,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const _n=X.uniformsGroups;for(let wn=0,hc=_n.length;wn<hc;wn++){const Xr=_n[wn];te.update(Xr,Fn),te.bind(Xr,Fn)}}return Fn}function Cx(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Px(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,F,q){const X=g.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),g.get(M.texture).__webglTexture=F,g.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const q=g.get(M);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0};const Dx=P.createFramebuffer();this.setRenderTarget=function(M,F=0,q=0){D=M,R=F,z=q;let X=null,G=!1,Me=!1;if(M){const be=g.get(M);if(be.__useDefaultFramebuffer!==void 0){De.bindFramebuffer(P.FRAMEBUFFER,be.__webglFramebuffer),N.copy(M.viewport),B.copy(M.scissor),Y=M.scissorTest,De.viewport(N),De.scissor(B),De.setScissorTest(Y),V=-1;return}else if(be.__webglFramebuffer===void 0)I.setupRenderTarget(M);else if(be.__hasExternalTextures)I.rebindTextures(M,g.get(M.texture).__webglTexture,g.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const qe=M.depthTexture;if(be.__boundDepthTexture!==qe){if(qe!==null&&g.has(qe)&&(M.width!==qe.image.width||M.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(M)}}const Ue=M.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Me=!0);const Be=g.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?X=Be[F][q]:X=Be[F],G=!0):M.samples>0&&I.useMultisampledRTT(M)===!1?X=g.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?X=Be[q]:X=Be,N.copy(M.viewport),B.copy(M.scissor),Y=M.scissorTest}else N.copy(W).multiplyScalar(ce).floor(),B.copy(Q).multiplyScalar(ce).floor(),Y=_e;if(q!==0&&(X=Dx),De.bindFramebuffer(P.FRAMEBUFFER,X)&&De.drawBuffers(M,X),De.viewport(N),De.scissor(B),De.setScissorTest(Y),G){const be=g.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,q)}else if(Me){const be=F;for(let Ue=0;Ue<M.textures.length;Ue++){const Be=g.get(M.textures[Ue]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ue,Be.__webglTexture,q,be)}}else if(M!==null&&q!==0){const be=g.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,be.__webglTexture,q)}V=-1},this.readRenderTargetPixels=function(M,F,q,X,G,Me,Ie,be=0){if(!(M&&M.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){De.bindFramebuffer(P.FRAMEBUFFER,Ue);try{const Be=M.textures[be],qe=Be.format,ke=Be.type;if(!ht.textureFormatReadable(qe)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(ke)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-X&&q>=0&&q<=M.height-G&&(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be),P.readPixels(F,q,X,G,ee.convert(qe),ee.convert(ke),Me))}finally{const Be=D!==null?g.get(D).__webglFramebuffer:null;De.bindFramebuffer(P.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(M,F,q,X,G,Me,Ie,be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue)if(F>=0&&F<=M.width-X&&q>=0&&q<=M.height-G){De.bindFramebuffer(P.FRAMEBUFFER,Ue);const Be=M.textures[be],qe=Be.format,ke=Be.type;if(!ht.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,at),P.bufferData(P.PIXEL_PACK_BUFFER,Me.byteLength,P.STREAM_READ),M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be),P.readPixels(F,q,X,G,ee.convert(qe),ee.convert(ke),0);const bt=D!==null?g.get(D).__webglFramebuffer:null;De.bindFramebuffer(P.FRAMEBUFFER,bt);const Ut=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Bp(P,Ut,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,at),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Me),P.deleteBuffer(at),P.deleteSync(Ut),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,q=0){const X=Math.pow(2,-q),G=Math.floor(M.image.width*X),Me=Math.floor(M.image.height*X),Ie=F!==null?F.x:0,be=F!==null?F.y:0;I.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,Ie,be,G,Me),De.unbindTexture()};const Lx=P.createFramebuffer(),Ix=P.createFramebuffer();this.copyTextureToTexture=function(M,F,q=null,X=null,G=0,Me=null){Me===null&&(G!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=G,G=0):Me=0);let Ie,be,Ue,Be,qe,ke,at,bt,Ut;const Nt=M.isCompressedTexture?M.mipmaps[Me]:M.image;if(q!==null)Ie=q.max.x-q.min.x,be=q.max.y-q.min.y,Ue=q.isBox3?q.max.z-q.min.z:1,Be=q.min.x,qe=q.min.y,ke=q.isBox3?q.min.z:0;else{const Zn=Math.pow(2,-G);Ie=Math.floor(Nt.width*Zn),be=Math.floor(Nt.height*Zn),M.isDataArrayTexture?Ue=Nt.depth:M.isData3DTexture?Ue=Math.floor(Nt.depth*Zn):Ue=1,Be=0,qe=0,ke=0}X!==null?(at=X.x,bt=X.y,Ut=X.z):(at=0,bt=0,Ut=0);const yt=ee.convert(F.format),We=ee.convert(F.type);let Mt;F.isData3DTexture?(I.setTexture3D(F,0),Mt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(I.setTexture2DArray(F,0),Mt=P.TEXTURE_2D_ARRAY):(I.setTexture2D(F,0),Mt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const pt=P.getParameter(P.UNPACK_ROW_LENGTH),Fn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ls=P.getParameter(P.UNPACK_SKIP_PIXELS),On=P.getParameter(P.UNPACK_SKIP_ROWS),ca=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Nt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Nt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Be),P.pixelStorei(P.UNPACK_SKIP_ROWS,qe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ke);const Tt=M.isDataArrayTexture||M.isData3DTexture,An=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const Zn=g.get(M),_n=g.get(F),wn=g.get(Zn.__renderTarget),hc=g.get(_n.__renderTarget);De.bindFramebuffer(P.READ_FRAMEBUFFER,wn.__webglFramebuffer),De.bindFramebuffer(P.DRAW_FRAMEBUFFER,hc.__webglFramebuffer);for(let Xr=0;Xr<Ue;Xr++)Tt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,g.get(M).__webglTexture,G,ke+Xr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,g.get(F).__webglTexture,Me,Ut+Xr)),P.blitFramebuffer(Be,qe,Ie,be,at,bt,Ie,be,P.DEPTH_BUFFER_BIT,P.NEAREST);De.bindFramebuffer(P.READ_FRAMEBUFFER,null),De.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||g.has(M)){const Zn=g.get(M),_n=g.get(F);De.bindFramebuffer(P.READ_FRAMEBUFFER,Lx),De.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ix);for(let wn=0;wn<Ue;wn++)Tt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Zn.__webglTexture,G,ke+wn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Zn.__webglTexture,G),An?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_n.__webglTexture,Me,Ut+wn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,_n.__webglTexture,Me),G!==0?P.blitFramebuffer(Be,qe,Ie,be,at,bt,Ie,be,P.COLOR_BUFFER_BIT,P.NEAREST):An?P.copyTexSubImage3D(Mt,Me,at,bt,Ut+wn,Be,qe,Ie,be):P.copyTexSubImage2D(Mt,Me,at,bt,Be,qe,Ie,be);De.bindFramebuffer(P.READ_FRAMEBUFFER,null),De.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else An?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Mt,Me,at,bt,Ut,Ie,be,Ue,yt,We,Nt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Mt,Me,at,bt,Ut,Ie,be,Ue,yt,Nt.data):P.texSubImage3D(Mt,Me,at,bt,Ut,Ie,be,Ue,yt,We,Nt):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Me,at,bt,Ie,be,yt,We,Nt.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Me,at,bt,Nt.width,Nt.height,yt,Nt.data):P.texSubImage2D(P.TEXTURE_2D,Me,at,bt,Ie,be,yt,We,Nt);P.pixelStorei(P.UNPACK_ROW_LENGTH,pt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Fn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ls),P.pixelStorei(P.UNPACK_SKIP_ROWS,On),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ca),Me===0&&F.generateMipmaps&&P.generateMipmap(Mt),De.unbindTexture()},this.initRenderTarget=function(M){g.get(M).__webglFramebuffer===void 0&&I.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?I.setTextureCube(M,0):M.isData3DTexture?I.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?I.setTexture2DArray(M,0):I.setTexture2D(M,0),De.unbindTexture()},this.resetState=function(){R=0,z=0,D=null,De.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}var F0=Ne('<div class="star-container svelte-1a66aez"></div>');function O0(n,e){nn(e,!0);let t=He(e,"images",19,()=>[]);const i={radius:1.1,cardWidth:1.65,cardHeight:1.15,baseRotationSpeed:.003,portraitSpeedMultiplier:1,tiltLoopSpeed:.005,tiltLimit:Math.PI,baseTilt:{tiltX:.3,tiltZ:.1},landscape:{cameraZ:9,masterRotationZ:0},portrait:{cameraZ:12,masterRotationZ:75*(Math.PI/180)}},r=`
        varying vec2 vUv;
        varying float vDepth;
        varying vec3 vCurveNormal;
        varying vec3 vViewPosition;

        void main() {
            vUv = uv;

            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

            vViewPosition = -mvPosition.xyz;
            vDepth = worldPos.z;
            vCurveNormal = normalize(normalMatrix * normal);

            gl_Position = projectionMatrix * mvPosition;
        }
    `,s=`
        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;
        uniform vec3 uLightDir;
        uniform float uAmbientStrength;
        uniform float uDiffuseStrength;
        uniform float uSpecularStrength;
        uniform float uRimStrength;
        uniform float uRadius;

        varying vec2 vUv;
        varying float vDepth;
        varying vec3 vCurveNormal;
        varying vec3 vViewPosition;

        vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y;
            float ri = i.x / i.y;
            vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
            vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st;
            return u * s / st + o;
        }

        void main() {
            vec2 uv = CoverUV(vUv, uPlaneSize, uImageRes);
            vec4 tex = texture2D(uTexture, uv);

            // DoubleSide: flip normal on back faces so lighting is consistent
            vec3 normal = normalize(vCurveNormal);
            if (!gl_FrontFacing) normal = -normal;

            vec3 lightDir = normalize(uLightDir);
            vec3 viewDir = normalize(vViewPosition);
            vec3 halfVector = normalize(lightDir + viewDir);

            float diffuse = max(dot(normal, lightDir), 0.0);
            float wrappedDiffuse = diffuse * 0.75 + 0.25;
            float specular = pow(max(dot(normal, halfVector), 0.0), 20.0);
            float rim = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.2);

            float horizonFade = smoothstep(-uRadius * 0.85, 0.0, vDepth);

            float lighting = uAmbientStrength + wrappedDiffuse * uDiffuseStrength;

            vec3 litColor = tex.rgb * lighting;
            litColor += vec3(1.0) * specular * uSpecularStrength;
            litColor += vec3(1.0) * rim * uRimStrength;

            float fade = mix(0.26, 1.0, horizonFade);
            gl_FragColor = vec4(litColor * fade, tex.a);
        }
    `;let a;hi(()=>{if(!t().length||!a)return;const c=t().length;let l,u,f=null,d=!1;try{l=new Br({antialias:!0,alpha:!0})}catch{return}const m=new Dr,v=new Jt(35,1,.1,30);l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.toneMapping=an,l.outputColorSpace=Xt,l.setClearColor(0,0),a.appendChild(l.domElement);function _(N){N.preventDefault(),cancelAnimationFrame(u)}function p(){d||k()}l.domElement.addEventListener("webglcontextlost",_),l.domElement.addEventListener("webglcontextrestored",p);const h=new gn;m.add(h);const b=new gn;h.add(b);const S=new gn;b.add(S);const E=new ai(1,1),T=new Ur,w=[],C=[];for(let N=0;N<c;N++){const B=T.load(t()[N].url,ce=>{if(ce.image){const ye=ce.image.width||1,Fe=ce.image.height||1;for(const W of ce.userData.materials||[])W.uniforms.uImageRes.value.set(ye,Fe)}});B.minFilter=vt,B.magFilter=vt,C.push(B);const Y=new ln({uniforms:{uTexture:{value:B},uImageRes:{value:new Ke(1,1)},uPlaneSize:{value:new Ke(i.cardWidth,i.cardHeight)},uLightDir:{value:new H(.7,.95,1.2)},uAmbientStrength:{value:.6},uDiffuseStrength:{value:.55},uSpecularStrength:{value:.12},uRimStrength:{value:.08},uRadius:{value:i.radius}},vertexShader:r,fragmentShader:s,side:un});B.userData.materials||(B.userData.materials=[]),B.userData.materials.push(Y),w.push(Y);const ae=new pn(E,Y),j=N/c*Math.PI*2,$=Math.sin(j)*i.radius,ge=Math.cos(j)*i.radius;ae.position.set($,0,ge),ae.rotation.y=j+Math.PI/2,ae.scale.set(i.cardWidth,i.cardHeight,1),S.add(ae)}let U=-i.tiltLimit,x=1,y=0,R=i.baseRotationSpeed;function z(){if(!a)return;const{width:N,height:B}=a.getBoundingClientRect();if(N===0||B===0)return;const Y=N/B<1,ae=Y?i.portrait:i.landscape;v.aspect=N/B,v.updateProjectionMatrix(),l.setSize(N,B),v.position.set(0,0,ae.cameraZ),v.lookAt(0,0,0);const j=i.radius*Math.sin(i.baseTilt.tiltX)/2.2;h.position.y=j,h.rotation.z=ae.masterRotationZ,R=Y?i.baseRotationSpeed*i.portraitSpeedMultiplier:i.baseRotationSpeed}z(),f=new ResizeObserver(z),f.observe(a);let D=!0;const V=new IntersectionObserver(([N])=>{D=N.isIntersecting,D&&!d?k():cancelAnimationFrame(u)},{threshold:0});V.observe(a);function k(){!D||d||(u=requestAnimationFrame(k),U+=i.tiltLoopSpeed*x,U>=i.tiltLimit?(U=i.tiltLimit,x=-1):U<=-i.tiltLimit&&(U=-i.tiltLimit,x=1),y+=R,b.rotation.y=U,b.rotation.x=i.baseTilt.tiltX,b.rotation.z=i.baseTilt.tiltZ,S.rotation.y=y-U,l.render(m,v))}return k(),()=>{d=!0,cancelAnimationFrame(u),f&&f.disconnect(),V.disconnect(),l.domElement.removeEventListener("webglcontextlost",_),l.domElement.removeEventListener("webglcontextrestored",p),S.clear(),b.clear(),h.clear(),m.clear(),E.dispose();for(const N of w)N.dispose();for(const N of C)N.dispose();w.length=0,C.length=0,l.dispose(),l.forceContextLoss(),l.domElement.parentNode&&l.domElement.parentNode.removeChild(l.domElement)}});var o=F0();di(o,c=>a=c,()=>a),Re(n,o),rn()}var B0=Ne('<div class="cube-container svelte-14dnk22"></div>');function z0(n,e){nn(e,!0);let t=He(e,"images",19,()=>[]);const i={radius:1.1,facePadding:.12,baseRotationSpeed:.003,portraitSpeedMultiplier:1,tiltLoopSpeed:.005,tiltLimit:Math.PI,baseTilt:{tiltX:.3,tiltZ:.1},landscape:{cameraZ:9,masterRotationZ:0},portrait:{cameraZ:12,masterRotationZ:75*(Math.PI/180)}},r=`
        varying vec2 vUv;
        varying float vDepth;
        varying vec3 vCurveNormal;
        varying vec3 vViewPosition;

        void main() {
            vUv = uv;

            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

            vViewPosition = -mvPosition.xyz;
            vDepth = worldPos.z;
            vCurveNormal = normalize(normalMatrix * normal);

            gl_Position = projectionMatrix * mvPosition;
        }
    `,s=`
        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;
        uniform vec3 uLightDir;
        uniform float uAmbientStrength;
        uniform float uDiffuseStrength;
        uniform float uSpecularStrength;
        uniform float uRimStrength;
        uniform float uRadius;

        varying vec2 vUv;
        varying float vDepth;
        varying vec3 vCurveNormal;
        varying vec3 vViewPosition;

        vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y;
            float ri = i.x / i.y;
            vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
            vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st;
            return u * s / st + o;
        }

        void main() {
            vec2 uv = CoverUV(vUv, uPlaneSize, uImageRes);
            vec4 tex = texture2D(uTexture, uv);

            // DoubleSide: flip normal on back faces so lighting is consistent
            vec3 normal = normalize(vCurveNormal);
            if (!gl_FrontFacing) normal = -normal;

            vec3 lightDir = normalize(uLightDir);
            vec3 viewDir = normalize(vViewPosition);
            vec3 halfVector = normalize(lightDir + viewDir);

            float diffuse = max(dot(normal, lightDir), 0.0);
            float wrappedDiffuse = diffuse * 0.75 + 0.25;
            float specular = pow(max(dot(normal, halfVector), 0.0), 20.0);
            float rim = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.2);

            float horizonFade = smoothstep(-uRadius * 0.85, 0.0, vDepth);

            float lighting = uAmbientStrength + wrappedDiffuse * uDiffuseStrength;

            vec3 litColor = tex.rgb * lighting;
            litColor += vec3(1.0) * specular * uSpecularStrength;
            litColor += vec3(1.0) * rim * uRimStrength;

            float fade = mix(0.26, 1.0, horizonFade);
            gl_FragColor = vec4(litColor * fade, tex.a);
        }
    `;let a;hi(()=>{if(!t().length||!a)return;const c=6;let l,u,f=null,d=!1;try{l=new Br({antialias:!0,alpha:!0})}catch{return}const m=new Dr,v=new Jt(35,1,.1,30);l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.toneMapping=an,l.outputColorSpace=Xt,l.setClearColor(0,0),a.appendChild(l.domElement);function _($){$.preventDefault(),cancelAnimationFrame(u)}function p(){d||j()}l.domElement.addEventListener("webglcontextlost",_),l.domElement.addEventListener("webglcontextrestored",p);const h=new gn;m.add(h);const b=new gn;h.add(b);const S=new gn;b.add(S);const E=i.radius,T=i.radius*2*(1-i.facePadding),w=[{pos:[E,0,0],rot:[0,Math.PI/2,0]},{pos:[-E,0,0],rot:[0,-Math.PI/2,0]},{pos:[0,E,0],rot:[-Math.PI/2,0,0]},{pos:[0,-E,0],rot:[Math.PI/2,0,0]},{pos:[0,0,E],rot:[0,0,0]},{pos:[0,0,-E],rot:[0,Math.PI,0]}],C=new ai(1,1),U=new Ur,x=[],y=[],R=new Map;function z($){const ge=R.get($);if(ge)return ge;const ce=U.load($,ye=>{if(ye.image){const Fe=ye.image.width||1,W=ye.image.height||1;for(const Q of ye.userData.materials||[])Q.uniforms.uImageRes.value.set(Fe,W)}});return ce.minFilter=vt,ce.magFilter=vt,R.set($,ce),y.push(ce),ce}for(let $=0;$<c;$++){const ge=t()[$%t().length],ce=z(ge.url),ye=new ln({uniforms:{uTexture:{value:ce},uImageRes:{value:new Ke(1,1)},uPlaneSize:{value:new Ke(T,T)},uLightDir:{value:new H(.7,.95,1.2)},uAmbientStrength:{value:.6},uDiffuseStrength:{value:.55},uSpecularStrength:{value:.12},uRimStrength:{value:.08},uRadius:{value:i.radius}},vertexShader:r,fragmentShader:s,side:un});ce.userData.materials||(ce.userData.materials=[]),ce.userData.materials.push(ye),x.push(ye);const Fe=new pn(C,ye),{pos:W,rot:Q}=w[$];Fe.position.set(W[0],W[1],W[2]),Fe.rotation.set(Q[0],Q[1],Q[2]),Fe.scale.set(T,T,1),S.add(Fe)}let D=-i.tiltLimit,V=1,k=0,N=i.baseRotationSpeed;function B(){if(!a)return;const{width:$,height:ge}=a.getBoundingClientRect();if($===0||ge===0)return;const ce=$/ge<1,ye=ce?i.portrait:i.landscape;v.aspect=$/ge,v.updateProjectionMatrix(),l.setSize($,ge),v.position.set(0,0,ye.cameraZ),v.lookAt(0,0,0);const Fe=i.radius*Math.sin(i.baseTilt.tiltX)/2.2;h.position.y=Fe,h.rotation.z=ye.masterRotationZ,N=ce?i.baseRotationSpeed*i.portraitSpeedMultiplier:i.baseRotationSpeed}B(),f=new ResizeObserver(B),f.observe(a);let Y=!0;const ae=new IntersectionObserver(([$])=>{Y=$.isIntersecting,Y&&!d?j():cancelAnimationFrame(u)},{threshold:0});ae.observe(a);function j(){!Y||d||(u=requestAnimationFrame(j),D+=i.tiltLoopSpeed*V,D>=i.tiltLimit?(D=i.tiltLimit,V=-1):D<=-i.tiltLimit&&(D=-i.tiltLimit,V=1),k+=N,b.rotation.y=D,b.rotation.x=i.baseTilt.tiltX,b.rotation.z=i.baseTilt.tiltZ,S.rotation.y=k-D,l.render(m,v))}return j(),()=>{d=!0,cancelAnimationFrame(u),f&&f.disconnect(),ae.disconnect(),l.domElement.removeEventListener("webglcontextlost",_),l.domElement.removeEventListener("webglcontextrestored",p),S.clear(),b.clear(),h.clear(),m.clear(),C.dispose();for(const $ of x)$.dispose();for(const $ of y)$.dispose();R.clear(),x.length=0,y.length=0,l.dispose(),l.forceContextLoss(),l.domElement.parentNode&&l.domElement.parentNode.removeChild(l.domElement)}});var o=B0();di(o,c=>a=c,()=>a),Re(n,o),rn()}var V0=Ne('<div class="helix-wrapper svelte-vcb9pb"><div class="helix-vignette top svelte-vcb9pb"></div> <div class="helix-container svelte-vcb9pb"></div> <div class="helix-vignette bottom svelte-vcb9pb"></div></div>');function G0(n,e){nn(e,!0);let t=He(e,"images",19,()=>[]);const i=2.4,r=1.6,s=.15,a=16,o=48,c=Math.PI*4/3,l=-20*(Math.PI/180),u=.003,f=10,d=.15,m=.05,v=`
        uniform float uTwist;
        uniform float uOffset;
        uniform float uStripCenter;

        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
            vUv = uv;

            // World-space Y of this vertex (card position + local vertex)
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            float globalY = worldPos.y;

            // Twist angle based on distance from strip center
            float angle = (globalY - uStripCenter) * uTwist + uOffset;
            float ca = cos(angle);
            float sa = sin(angle);

            // Wrap X around the helix
            float localX = position.x;
            vec3 pos;
            pos.x = ca * localX;
            pos.z = sa * localX;
            pos.y = position.y;

            // Compute twisted normal — the plane normal (0,0,1) rotated by twist angle
            vec3 twistedNormal = vec3(-sa, 0.0, ca);
            vNormal = normalize(normalMatrix * twistedNormal);

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,_=`
        precision mediump float;

        uniform sampler2D uTexture;
        uniform vec2 uPlaneSize;
        uniform vec2 uImageRes;
        uniform vec3 uLightDir;
        uniform float uAmbient;
        uniform float uDiffuse;

        varying vec2 vUv;
        varying vec3 vNormal;

        vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y;
            float ri = i.x / i.y;
            vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
            vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st;
            return u * s / st + o;
        }

        void main() {
            vec2 uv = CoverUV(vUv, uPlaneSize, uImageRes);
            vec4 tex = texture2D(uTexture, uv);

            // Lighting — ambient + diffuse from directional light
            vec3 n = normalize(vNormal);
            float diff = max(dot(n, uLightDir), 0.0);
            float lighting = uAmbient + uDiffuse * diff;

            gl_FragColor = vec4(tex.rgb * lighting, tex.a);
        }
    `;let p;hi(()=>{if(!t().length||!p)return;const S=t().length;let E,T=0,w=!1,C=null,U=!1;try{E=new Br({antialias:!0,alpha:!0})}catch{return}const x=new Dr;x.fog=new Jl(0,.04);const y=new Jt(40,1,.1,30);E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.toneMapping=an,E.outputColorSpace=Xt,E.setClearColor(0,0),p.appendChild(E.domElement);function R(xe){xe.preventDefault(),Ve()}function z(){!U&&ue&&Ce()}E.domElement.addEventListener("webglcontextlost",R),E.domElement.addEventListener("webglcontextrestored",z);const D=new H(3,4,5).normalize(),V=new gn;V.rotation.z=l,x.add(V);const k=S*r+(S-1)*s,N=0,B=c/k,Y=new ai(i,r,a,o),ae=new Ur,j=[],$=[];for(let xe=0;xe<S;xe++){const pe=ae.load(t()[xe].url);pe.minFilter=vt,pe.magFilter=vt,$.push(pe);const Ze=new ln({uniforms:{uTwist:{value:B},uOffset:{value:0},uStripCenter:{value:N},uTexture:{value:pe},uPlaneSize:{value:new Ke(i,r)},uImageRes:{value:new Ke(1,1)},uLightDir:{value:D},uAmbient:{value:.6},uDiffuse:{value:.5}},vertexShader:v,fragmentShader:_,side:un});pe.userData.materials||(pe.userData.materials=[],pe.onUpdate=()=>{if(pe.image){const tt=pe.image.width||1,ht=pe.image.height||1;for(const De of pe.userData.materials)De.uniforms.uImageRes.value.set(tt,ht)}}),pe.userData.materials.push(Ze),j.push(Ze);const P=new pn(Y,Ze),it=-k/2+r/2+xe*(r+s);P.position.y=it,V.add(P)}function ge(){if(!p)return;const{width:xe,height:pe}=p.getBoundingClientRect();xe===0||pe===0||(y.aspect=xe/pe,y.updateProjectionMatrix(),E.setSize(xe,pe),y.position.set(0,0,f),y.lookAt(0,0,0))}ge(),C=new ResizeObserver(ge),C.observe(p);let ce=0,ye=0,Fe=0,W=0;function Q(xe){const pe=p.getBoundingClientRect(),Ze=(xe.clientX-pe.left)/pe.width*2-1;ce=-((xe.clientY-pe.top)/pe.height*2-1)*d,ye=Ze*d}function _e(){ce=0,ye=0}p.addEventListener("mousemove",Q),p.addEventListener("mouseleave",_e);let de=0,ue=!0;function Ce(){U||!ue||w||(w=!0,T=requestAnimationFrame(Xe))}function Ve(){w&&(cancelAnimationFrame(T),T=0,w=!1)}function Xe(){if(!ue||U){w=!1;return}T=requestAnimationFrame(Xe),de+=u,Fe+=(ce-Fe)*m,W+=(ye-W)*m,V.rotation.x=Fe,V.rotation.y=W;for(const xe of j)xe.uniforms.uOffset.value=de;E.render(x,y)}const Se=new IntersectionObserver(([xe])=>{ue=xe.isIntersecting,ue&&!U?Ce():Ve()},{threshold:0});return Se.observe(p),Ce(),()=>{U=!0,Ve(),C&&C.disconnect(),Se.disconnect(),p==null||p.removeEventListener("mousemove",Q),p==null||p.removeEventListener("mouseleave",_e),E.domElement.removeEventListener("webglcontextlost",R),E.domElement.removeEventListener("webglcontextrestored",z),V.clear(),x.clear(),Y.dispose();for(const xe of j)xe.dispose();for(const xe of $)xe.userData.materials=null,xe.dispose();j.length=0,$.length=0,E.dispose(),E.forceContextLoss(),E.domElement.parentNode&&E.domElement.parentNode.removeChild(E.domElement)}});var h=V0(),b=je(oe(h),2);di(b,S=>p=S,()=>p),Re(n,h),rn()}var H0=Ne('<div class="drum-shell svelte-6qlern"><div class="drum-shadow svelte-6qlern" aria-hidden="true"></div> <div class="drum-container svelte-6qlern"></div></div>');function k0(n,e){nn(e,!0);let t=He(e,"images",19,()=>[]);const i=2*Math.PI,r=2.4,s=1.6,a=2,o=12,c=.006,l=[.7,.95,1.2],u=`
        uniform float uRadius;
        uniform float uBaseAngle;
        uniform float uScaleY;

        varying vec2 vUv;
        varying float vDepth;
        varying vec3 vCurveNormal;
        varying vec3 vViewPosition;
        varying float vHeight;

        void main() {
            // UVs stay at full scale — image doesn't distort
            vUv = uv;

            float angleOffset = position.x / uRadius;
            float angle = uBaseAngle + angleOffset;

            vec3 pos;
            pos.x = sin(angle) * uRadius;
            // Scale geometry height but keep image anchored from center
            pos.y = position.y * uScaleY;
            pos.z = cos(angle) * uRadius;

            // Per-vertex depth: positive = facing camera, negative = behind horizon
            vDepth = pos.z;
            vHeight = pos.y;
            vCurveNormal = normalize(vec3(sin(angle), 0.0, cos(angle)));

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
        }
    `,f=`
        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;
        uniform float uScaleY;
        uniform vec3 uLightDir;
        uniform float uAmbientStrength;
        uniform float uDiffuseStrength;
        uniform float uSpecularStrength;
        uniform float uRimStrength;

        varying vec2 vUv;
        varying float vDepth;
        varying vec3 vCurveNormal;
        varying vec3 vViewPosition;
        varying float vHeight;

        vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y;
            float ri = i.x / i.y;
            vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
            vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st;
            return u * s / st + o;
        }

        void main() {
            // Remap V so the image stays full-size, centered — mask reveal effect
            // When uScaleY=0.5, vUv.y 0→1 maps to image 0.25→0.75 (center crop)
            float remappedV = mix(0.5 - 0.5 * uScaleY, 0.5 + 0.5 * uScaleY, vUv.y);
            vec2 maskedUv = vec2(vUv.x, remappedV);

            vec2 uv = CoverUV(maskedUv, uPlaneSize, uImageRes);
            vec4 tex = texture2D(uTexture, uv);

            vec3 normal = normalize(vCurveNormal);
            vec3 lightDir = normalize(uLightDir);
            vec3 viewDir = normalize(vViewPosition);
            vec3 halfVector = normalize(lightDir + viewDir);

            float diffuse = max(dot(normal, lightDir), 0.0);
            float wrappedDiffuse = diffuse * 0.75 + 0.25;
            float specular = pow(max(dot(normal, halfVector), 0.0), 20.0);
            float rim = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.2);

            float horizonFade = smoothstep(-uPlaneSize.x * 0.85, 0.0, vDepth);
            float verticalShade = smoothstep(-uPlaneSize.y * 0.9, uPlaneSize.y * 0.4, vHeight);

            float lighting = uAmbientStrength
                + wrappedDiffuse * uDiffuseStrength
                + verticalShade * 0.08;

            vec3 litColor = tex.rgb * lighting;
            litColor += vec3(1.0) * specular * uSpecularStrength;
            litColor += vec3(1.0) * rim * uRimStrength;

            float fade = mix(0.26, 1.0, horizonFade);
            gl_FragColor = vec4(litColor * fade, tex.a);
        }
    `;let d;hi(()=>{if(!t().length||!d)return;let _,p=0,h=!1,b=null,S=!1;try{_=new Br({antialias:!0,alpha:!0})}catch{return}const E=new Dr,T=new Jt(40,1,.1,100);T.position.set(0,0,o),T.lookAt(0,0,0),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.toneMapping=an,_.outputColorSpace=Xt,_.setClearColor(0,0),d.appendChild(_.domElement),_.domElement.addEventListener("webglcontextlost",Se=>{Se.preventDefault(),de()}),_.domElement.addEventListener("webglcontextrestored",()=>{!S&&W&&_e()});const w=new gn;w.position.y=.5,w.rotation.z=10*(Math.PI/180),w.rotation.x=15*(Math.PI/180),E.add(w);const C=new Ur,U=[],x=new ai(r,s,16,1),y=t().length,R=5,z=i/R,D=new Map;function V(Se){if(D.has(Se))return D.get(Se);const xe=C.load(t()[Se].url,pe=>{if(pe.image){const Ze=pe.image.width||1,P=pe.image.height||1;for(const it of pe.userData.materials||[])it.uniforms.uImageRes.value.set(Ze,P)}});return xe.minFilter=vt,xe.magFilter=vt,D.set(Se,xe),xe}for(let Se=0;Se<R;Se++){const xe=Se%y,pe=-Se*z,Ze=V(xe),P=new ln({uniforms:{uRadius:{value:a},uBaseAngle:{value:pe},uScaleY:{value:0},uTexture:{value:Ze},uPlaneSize:{value:new Ke(r,s)},uImageRes:{value:new Ke(1,1)},uLightDir:{value:new H(l[0],l[1],l[2])},uAmbientStrength:{value:.6},uDiffuseStrength:{value:.55},uSpecularStrength:{value:.12},uRimStrength:{value:.08}},vertexShader:u,fragmentShader:f,side:un});Ze.userData.materials||(Ze.userData.materials=[]),Ze.userData.materials.push(P);const it=new pn(x,P);w.add(it),U.push(P)}let k;function N(){if(!d)return;const{width:Se,height:xe}=d.getBoundingClientRect();Se===0||xe===0||(T.aspect=Se/xe,T.updateProjectionMatrix(),_.setSize(Se,xe))}b=new ResizeObserver(()=>{clearTimeout(k),k=setTimeout(N,100)}),b.observe(d),requestAnimationFrame(N);const B=.6,Y=3,ae=.6,j=.12,$=j*(R-1),ge=B+$,ce=ge+Y,ye=ce+ae+$;let Fe=0,W=!0,Q=-1;function _e(){S||!W||h||(h=!0,p=requestAnimationFrame(Ve))}function de(){h&&(cancelAnimationFrame(p),p=0,h=!1)}function ue(Se){return Se<.5?4*Se*Se*Se:1-Math.pow(-2*Se+2,3)/2}function Ce(Se,xe){const pe=(R-1-Se)*j,Ze=Math.max(0,Math.min(1,(xe-pe)/B));if(xe<ge)return ue(Ze);if(xe<ce)return 1;const P=(R-1-Se)*j,it=Math.max(0,Math.min(1,(xe-ce-P)/ae));return 1-ue(it)}function Ve(){if(!W||S){h=!1;return}p=requestAnimationFrame(Ve);const Se=performance.now()/1e3;Q<0&&(Q=Se);const xe=Se-Q;if(xe>=ye){for(let pe=0;pe<R;pe++)U[pe].uniforms.uScaleY.value=0;_.render(E,T);return}Fe+=c;for(let pe=0;pe<R;pe++){const Ze=-pe*z;U[pe].uniforms.uBaseAngle.value=Ze+Fe,U[pe].uniforms.uScaleY.value=Ce(pe,xe)}_.render(E,T)}const Xe=new IntersectionObserver(([Se])=>{W=Se.isIntersecting,W&&!S?_e():de()},{threshold:0});return Xe.observe(d),_e(),()=>{S=!0,de(),b&&b.disconnect(),Xe.disconnect(),x.dispose();for(const Se of U)Se.dispose();D.forEach(Se=>Se.dispose()),D.clear(),_.dispose(),_.domElement.parentNode&&_.domElement.parentNode.removeChild(_.domElement)}});var m=H0(),v=je(oe(m),2);di(v,_=>d=_,()=>d),Re(n,m),rn()}var W0=Ne('<div class="drum-shell svelte-26mkw0"><div class="drum-shadow svelte-26mkw0" aria-hidden="true"></div> <div class="drum-container svelte-26mkw0"></div></div>');function X0(n,e){nn(e,!0);let t=He(e,"images",19,()=>[]);const i=2*Math.PI,r=4,s=1.4,a=2.4,o=.95,c=11,l=.006,u=[.7,.95,1.2],f=`
        uniform float uMajorRadius;
        uniform float uMinorRadius;
        uniform float uBaseAngle;
        uniform float uScaleY;

        varying vec2 vUv;
        varying float vDepth;
        varying vec3 vCurveNormal;
        varying vec3 vViewPosition;
        varying float vHeight;

        void main() {
            // UVs stay at full scale — image doesn't distort
            vUv = uv;

            // u = angle around the major axis (around Y); plane X → arc length
            // Arc length on the outer ring uses (R + r)
            float u = uBaseAngle + position.x / (uMajorRadius + uMinorRadius);

            // v = angle around the minor axis (tube cross-section), centered at outer face (v=0)
            // Plane Y → arc length on the tube; uScaleY shrinks height around center
            float v = (position.y * uScaleY) / uMinorRadius;

            float cv = cos(v);
            float sv = sin(v);
            float ringR = uMajorRadius + uMinorRadius * cv;

            vec3 pos;
            pos.x = sin(u) * ringR;
            pos.y = uMinorRadius * sv;
            pos.z = cos(u) * ringR;

            vDepth = pos.z;
            vHeight = pos.y;
            // Surface normal of the torus tube at (u, v)
            vCurveNormal = normalize(vec3(sin(u) * cv, sv, cos(u) * cv));

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
        }
    `,d=`
        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;
        uniform float uScaleY;
        uniform vec3 uLightDir;
        uniform float uAmbientStrength;
        uniform float uDiffuseStrength;
        uniform float uSpecularStrength;
        uniform float uRimStrength;

        varying vec2 vUv;
        varying float vDepth;
        varying vec3 vCurveNormal;
        varying vec3 vViewPosition;
        varying float vHeight;

        vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y;
            float ri = i.x / i.y;
            vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
            vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st;
            return u * s / st + o;
        }

        void main() {
            // Remap V so the image stays full-size, centered — mask reveal effect
            float remappedV = mix(0.5 - 0.5 * uScaleY, 0.5 + 0.5 * uScaleY, vUv.y);
            vec2 maskedUv = vec2(vUv.x, remappedV);

            vec2 uv = CoverUV(maskedUv, uPlaneSize, uImageRes);
            vec4 tex = texture2D(uTexture, uv);

            vec3 normal = normalize(vCurveNormal);
            vec3 lightDir = normalize(uLightDir);
            vec3 viewDir = normalize(vViewPosition);
            vec3 halfVector = normalize(lightDir + viewDir);

            float diffuse = max(dot(normal, lightDir), 0.0);
            float wrappedDiffuse = diffuse * 0.75 + 0.25;
            float specular = pow(max(dot(normal, halfVector), 0.0), 20.0);
            float rim = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.2);

            float horizonFade = smoothstep(-uPlaneSize.x * 0.85, 0.0, vDepth);
            float verticalShade = smoothstep(-uPlaneSize.y * 0.9, uPlaneSize.y * 0.4, vHeight);

            float lighting = uAmbientStrength
                + wrappedDiffuse * uDiffuseStrength
                + verticalShade * 0.08;

            vec3 litColor = tex.rgb * lighting;
            litColor += vec3(1.0) * specular * uSpecularStrength;
            litColor += vec3(1.0) * rim * uRimStrength;

            float fade = mix(0.26, 1.0, horizonFade);
            gl_FragColor = vec4(litColor * fade, tex.a);
        }
    `;let m;hi(()=>{if(!t().length||!m)return;let p,h=0,b=!1,S=null,E=!1;try{p=new Br({antialias:!0,alpha:!0})}catch{return}const T=new Dr,w=new Jt(40,1,.1,100);w.position.set(0,0,c),w.lookAt(0,0,0),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.toneMapping=an,p.outputColorSpace=Xt,p.setClearColor(0,0),m.appendChild(p.domElement),p.domElement.addEventListener("webglcontextlost",de=>{de.preventDefault(),ye()}),p.domElement.addEventListener("webglcontextrestored",()=>{!E&&$&&ce()});const C=new gn;C.position.y=0,C.rotation.z=4*(Math.PI/180),C.rotation.x=4*(Math.PI/180),C.scale.set(.84,.84*2.01,.84),T.add(C);const U=new Ur,x=[],y=new ai(r,s,24,14),R=t().length,z=5,D=i/z,V=new Map;function k(de){if(V.has(de))return V.get(de);const ue=U.load(t()[de].url,Ce=>{if(Ce.image){const Ve=Ce.image.width||1,Xe=Ce.image.height||1;for(const Se of Ce.userData.materials||[])Se.uniforms.uImageRes.value.set(Ve,Xe)}});return ue.minFilter=vt,ue.magFilter=vt,V.set(de,ue),ue}for(let de=0;de<z;de++){const ue=de%R,Ce=-de*D,Ve=k(ue),Xe=new ln({uniforms:{uMajorRadius:{value:a},uMinorRadius:{value:o},uBaseAngle:{value:Ce},uScaleY:{value:0},uTexture:{value:Ve},uPlaneSize:{value:new Ke(r,s)},uImageRes:{value:new Ke(1,1)},uLightDir:{value:new H(u[0],u[1],u[2])},uAmbientStrength:{value:.6},uDiffuseStrength:{value:.55},uSpecularStrength:{value:.12},uRimStrength:{value:.08}},vertexShader:f,fragmentShader:d,side:un});Ve.userData.materials||(Ve.userData.materials=[]),Ve.userData.materials.push(Xe);const Se=new pn(y,Xe);C.add(Se),x.push(Xe)}let N;function B(){if(!m)return;const{width:de,height:ue}=m.getBoundingClientRect();de===0||ue===0||(w.aspect=de/ue,w.updateProjectionMatrix(),p.setSize(de,ue))}S=new ResizeObserver(()=>{clearTimeout(N),N=setTimeout(B,100)}),S.observe(m),requestAnimationFrame(B);const Y=.6,ae=.12;let j=0,$=!0,ge=-1;function ce(){E||!$||b||(b=!0,h=requestAnimationFrame(Q))}function ye(){b&&(cancelAnimationFrame(h),h=0,b=!1)}function Fe(de){return de<.5?4*de*de*de:1-Math.pow(-2*de+2,3)/2}function W(de,ue){const Ce=(z-1-de)*ae,Ve=Math.max(0,Math.min(1,(ue-Ce)/Y));return Fe(Ve)}function Q(){if(!$||E){b=!1;return}h=requestAnimationFrame(Q);const de=performance.now()/1e3;ge<0&&(ge=de);const ue=de-ge;j+=l;for(let Ce=0;Ce<z;Ce++){const Ve=-Ce*D;x[Ce].uniforms.uBaseAngle.value=Ve+j,x[Ce].uniforms.uScaleY.value=W(Ce,ue)}p.render(T,w)}const _e=new IntersectionObserver(([de])=>{$=de.isIntersecting,$&&!E?ce():ye()},{threshold:0});return _e.observe(m),ce(),()=>{E=!0,ye(),S&&S.disconnect(),_e.disconnect(),y.dispose();for(const de of x)de.dispose();V.forEach(de=>de.dispose()),V.clear(),p.dispose(),p.domElement.parentNode&&p.domElement.parentNode.removeChild(p.domElement)}});var v=W0(),_=je(oe(v),2);di(_,p=>m=p,()=>m),Re(n,v),rn()}var Y0=Ne("<c-indexcard></c-indexcard>",2),q0=Ne('<div class="mobile-fallback svelte-6olp7"></div>'),Z0=Ne('<div class="canvas-container svelte-6olp7"></div>');function j0(n,e){nn(e,!0);let t=He(e,"projects",19,()=>[]);const i=2*Math.PI,r=6,s=6,a=8,o=20,c=991,l=3e-4,u=.004,f=.92,d=5e-4,m=.08,v=.001,_=120,p=.2,h=.2,b=new H;let S=Ft(void 0),E=Ft(!1);function T(D,V,k){const N=Math.max(0,Math.min(1,(k-D)/(V-D)));return N*N*(3-2*N)}const w=`
        uniform float uRadius;
        uniform float uBaseAngle;

        varying vec2 vUv;

        void main() {
            vUv = uv;

            float angleOffset = position.y / uRadius;
            float angle = uBaseAngle + angleOffset;

            vec3 pos;
            pos.x = position.x;
            pos.y = sin(angle) * uRadius;
            pos.z = cos(angle) * uRadius;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,C=`
        precision mediump float;

        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;
        uniform float uOpacity;

        varying vec2 vUv;

        vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y;
            float ri = i.x / i.y;
            vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
            vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st;
            return u * s / st + o;
        }

        void main() {
            vec2 uv = CoverUV(vUv, uPlaneSize, uImageRes);
            vec4 tex = texture2D(uTexture, uv);
            gl_FragColor = vec4(tex.rgb, uOpacity);
        }
    `;function U(){Ct(E,window.innerWidth<=c)}hi(()=>{if(U(),window.addEventListener("resize",U),O(E)||!t().length||!O(S))return()=>{window.removeEventListener("resize",U)};let D,V,k=null;try{D=new Br({antialias:!0,alpha:!0})}catch{return Ct(E,!0),()=>{window.removeEventListener("resize",U)}}let N=!1;const B=new Dr,Y=new Jt(45,1,.1,50);Y.position.set(0,0,o),Y.lookAt(0,0,0),D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.toneMapping=an,D.outputColorSpace=Xt,O(S).appendChild(D.domElement);function ae(re){re.preventDefault(),cancelAnimationFrame(V)}function j(){N||L()}D.domElement.addEventListener("webglcontextlost",ae),D.domElement.addEventListener("webglcontextrestored",j);const $=new gn;B.add($);const ge=new Ur,ce=[],ye=[],Fe=[],W=new ai(r,s,1,16),Q=t().length,_e=s/a,de=Math.ceil(i/(_e+.04)),ue=Math.max(Q,Math.floor(de/Q)*Q),Ce=i/ue,Ve=new Map;function Xe(re){if(Ve.has(re))return Ve.get(re);const ee=ge.load(t()[re].thumbnail_base);return ee.minFilter=vt,ee.magFilter=vt,Ve.set(re,ee),ee}for(let re=0;re<ue;re++){const ee=re%Q,fe=t()[ee],te=-re*Ce,J=Xe(ee),se=new ln({uniforms:{uRadius:{value:a},uBaseAngle:{value:te},uTexture:{value:J},uPlaneSize:{value:new Ke(r,s)},uImageRes:{value:new Ke(1,1)},uOpacity:{value:1}},vertexShader:w,fragmentShader:C,transparent:!0,side:un});J.userData.materials||(J.userData.materials=[],J.onUpdate=()=>{if(J.image){const rt=J.image,Qe=rt.width||1,Gt=rt.height||1;for(const Lt of J.userData.materials)Lt.uniforms.uImageRes.value.set(Qe,Gt)}}),J.userData.materials.push(se);const ze=new pn(W,se);ze.userData={meshIndex:re,projectIndex:ee,project:fe,baseSeatAngle:te},$.add(ze),ce.push(se),ye.push(ze),Fe.push(1)}function Se(){if(!O(S))return;const{width:re,height:ee}=O(S).getBoundingClientRect();re===0||ee===0||(Y.aspect=re/ee,Y.updateProjectionMatrix(),D.setSize(re,ee))}k=new ResizeObserver(Se),k.observe(O(S)),requestAnimationFrame(Se);const xe=new Ef,pe=new Ke;let Ze=-1,P=!1,it=null;function tt(re){if(!O(S))return-1;const ee=O(S).getBoundingClientRect();pe.x=(re.clientX-ee.left)/ee.width*2-1,pe.y=-((re.clientY-ee.top)/ee.height)*2+1,xe.setFromCamera(pe,Y);const fe=xe.ray.origin,te=xe.ray.direction,J=te.y*te.y+te.z*te.z,se=2*(fe.y*te.y+fe.z*te.z),ze=fe.y*fe.y+fe.z*fe.z-a*a,rt=se*se-4*J*ze;if(rt<0)return-1;const Qe=(-se-Math.sqrt(rt))/(2*J);if(Qe<0||(b.copy(fe).addScaledVector(te,Qe),Math.abs(b.x)>r/2))return-1;const Gt=Math.atan2(b.y,b.z),Lt=s/2/a;let qn=-1,Ai=1/0;for(let Pe=0;Pe<ue;Pe++){if(!ye[Pe].visible)continue;const $e=ce[Pe].uniforms.uBaseAngle.value;let lt=Gt-$e;lt=((lt+Math.PI)%i+i)%i-Math.PI,Math.abs(lt)<Lt&&Math.abs(lt)<Ai&&(Ai=Math.abs(lt),qn=Pe)}return qn}function ht(re){const ee=tt(re);ee>=0?(Ze=ee,P=!0,O(S).style.cursor="pointer"):(Ze=-1,P=!1,O(S).style.cursor="default")}function De(re){it=re,ht(re)}function A(){it=null,Ze=-1,P=!1,O(S)&&(O(S).style.cursor="default")}function g(re){var fe;const ee=tt(re);if(ee>=0){const te=ye[ee].userData.project;if(te!=null&&te.url){const J=(fe=O(S))==null?void 0:fe.closest("c-reel");J&&J.dispatchEvent(new CustomEvent("reel:exit",{bubbles:!0,detail:{url:te.url,project:te}}))}}}O(S).addEventListener("mousemove",De),O(S).addEventListener("mouseleave",A),O(S).addEventListener("click",g);const I=O(S).closest("[data-canvas-map]");let K=0,ie=0,Z=!1,Te=0,me=0,Le=-1,Ge=0;function le(re){re.preventDefault(),ie+=re.deltaY*l,Z=!1,me=performance.now()}function he(re){Ge=re.touches[0].clientY,ie=0,Z=!1,me=performance.now()}function Ae(re){re.preventDefault();const ee=re.touches[0].clientY;ie=(Ge-ee)*u,K+=ie,Ge=ee,me=performance.now()}function we(){me=performance.now()}I&&(I.addEventListener("wheel",le,{passive:!1}),I.addEventListener("touchstart",he,{passive:!0}),I.addEventListener("touchmove",Ae,{passive:!1}),I.addEventListener("touchend",we));let ve=!0;const Ye=new IntersectionObserver(([re])=>{ve=re.isIntersecting,ve&&!N?L():cancelAnimationFrame(V)},{threshold:0});Ye.observe(O(S));function L(){var J;if(N||!ve)return;V=requestAnimationFrame(L);const re=performance.now();if(Z||(K+=ie,ie*=f),!Z&&Math.abs(ie)<d&&re-me>_){const se=(K%i+i)%i,ze=Math.floor(se/Ce+.4);Te=Math.round(K/i)*i+ze*Ce,Math.abs(Te-K)>i/2&&(Te+=K>Te?i:-i),Z=!0,ie=0}Z&&(K+=(Te-K)*m,Math.abs(Te-K)<v&&(K=Te,Z=!1)),it&&(Math.abs(ie)>1e-4||Z)&&ht(it);const ee=(K%i+i)%i,fe=Math.round(ee/Ce)%ue,te=fe%Q;for(let se=0;se<ue;se++){const rt=-se*Ce+K;ce[se].uniforms.uBaseAngle.value=rt;const Qe=(rt%i+i)%i,Gt=Math.cos(Qe),Lt=T(.3,.6,Gt);ye[se].visible=Lt>.01;let qn;ye[se].visible?P?qn=se===Ze?Lt:Lt*p:qn=se===fe?Lt:Lt*p:qn=0,Fe[se]=qn;const Ai=ce[se].uniforms.uOpacity.value;ce[se].uniforms.uOpacity.value+=(Fe[se]-Ai)*h}if(te!==Le&&t()[te]){Le=te;const se=(J=O(S))==null?void 0:J.closest("c-reel");se&&se.dispatchEvent(new CustomEvent("reel:update",{bubbles:!0,detail:{project:t()[te],index:te}}))}D.render(B,Y)}return L(),requestAnimationFrame(()=>{var ee;const re=(ee=O(S))==null?void 0:ee.closest("c-reel");re&&t()[0]&&(Le=0,re.dispatchEvent(new CustomEvent("reel:update",{bubbles:!0,detail:{project:t()[0],index:0}})))}),()=>{var re,ee,fe;N=!0,window.removeEventListener("resize",U),cancelAnimationFrame(V),k&&k.disconnect(),Ye.disconnect(),(re=O(S))==null||re.removeEventListener("mousemove",De),(ee=O(S))==null||ee.removeEventListener("mouseleave",A),(fe=O(S))==null||fe.removeEventListener("click",g),I&&(I.removeEventListener("wheel",le),I.removeEventListener("touchstart",he),I.removeEventListener("touchmove",Ae),I.removeEventListener("touchend",we)),D.domElement.removeEventListener("webglcontextlost",ae),D.domElement.removeEventListener("webglcontextrestored",j),$.clear(),B.clear(),W.dispose();for(const te of ce)te.dispose();Ve.forEach(te=>{te.userData.materials=null,te.dispose()}),Ve.clear(),ce.length=0,ye.length=0,D.dispose(),D.forceContextLoss(),D.domElement.parentNode&&D.domElement.parentNode.removeChild(D.domElement)}});var x=ci(),y=jt(x);{var R=D=>{var V=q0();fi(V,21,t,ui,(k,N)=>{var B=Y0();Oe(()=>Et(B,"href",O(N).url)),Oe(()=>Et(B,"title",O(N).title)),Oe(()=>Et(B,"backgroundimage",O(N).thumbnail_base)),Oe(()=>Et(B,"overlayimage",O(N).thumbnail_overlay)),Re(k,B)}),Re(D,V)},z=D=>{var V=Z0();di(V,k=>Ct(S,k),()=>O(S)),Re(D,V)};wt(y,D=>{O(E)?D(R):D(z,!1)})}Re(n,x),rn()}var K0=Ne("<c-indexcard></c-indexcard>",2),$0=Ne('<div class="mobile-fallback svelte-5ts47l"></div>'),J0=Ne('<div class="canvas-container svelte-5ts47l"></div>');function Q0(n,e){nn(e,!0);let t=He(e,"projects",19,()=>[]);const i=2,r=3.2*i,s=4.2*i,o=s+.28,c=0,l=o*4,u=4,f=0,d=8,m=80,v=-30*(Math.PI/180),_=0,p=2,h=.08,b=o*5,S=.004,E=.008,T=.91,w=o*.08,C=.2,U=.28,x=991,y=.12;let R=Ft(void 0),z=Ft(!1);function D(){Ct(z,window.innerWidth<=x)}const V=`
        uniform float uSeatY;
        uniform float uViewCenterY;
        uniform float uCurveStrength;
        uniform float uCurveExp;
        uniform float uCurveRange;

        varying vec2 vUv;

        void main() {
            vUv = uv;

            vec3 pos = position;
            float stripY = uSeatY + pos.y;
            float relY = stripY - uViewCenterY;
            float clampedRelY = clamp(relY, -uCurveRange, uCurveRange);
            float curveExp = exp(-clampedRelY * uCurveExp);

            pos.z += uCurveStrength * (curveExp - 1.0);

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,k=`
        precision mediump float;

        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;
        uniform float uOpacity;

        varying vec2 vUv;

        vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y;
            float ri = i.x / i.y;
            vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
            vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st;
            return u * s / st + o;
        }

        void main() {
            vec2 uv = CoverUV(vUv, uPlaneSize, uImageRes);
            vec4 tex = texture2D(uTexture, uv);
            gl_FragColor = vec4(tex.rgb, uOpacity);
        }
    `;hi(()=>{if(D(),window.addEventListener("resize",D),O(z)||!t().length||!O(R))return()=>{window.removeEventListener("resize",D)};let j,$=0,ge=!1,ce=null,ye=!1;try{j=new Br({antialias:!0,alpha:!0})}catch{return Ct(z,!0),()=>{window.removeEventListener("resize",D)}}const Fe=new Dr,W=new Jt(m,1,.1,60);W.position.set(u,f,d),W.lookAt(0,0,0),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),j.toneMapping=an,j.outputColorSpace=Xt,O(R).appendChild(j.domElement);function Q(Pe){Pe.preventDefault(),Lt()}function _e(){!ye&&Qe&&Gt()}j.domElement.addEventListener("webglcontextlost",Q),j.domElement.addEventListener("webglcontextrestored",_e);const de=new gn;de.rotation.x=v,de.position.y=_,Fe.add(de);const ue=new Ur,Ce=[],Ve=[],Xe=[],Se=new ai(r,s,1,16),xe=t().length,pe=Math.ceil(d*2/o)+4,Ze=Math.max(xe*3,Math.ceil(pe/xe)*xe),P=Ze*o,it=P/2,tt=new Map;function ht(Pe){if(tt.has(Pe))return tt.get(Pe);const $e=ue.load(t()[Pe].thumbnail_base);return $e.minFilter=vt,$e.magFilter=vt,tt.set(Pe,$e),$e}for(let Pe=0;Pe<Ze;Pe++){const $e=Pe%xe,lt=ht($e),Dt=-it+o*.5+Pe*o,It=new ln({uniforms:{uTexture:{value:lt},uPlaneSize:{value:new Ke(r,s)},uImageRes:{value:new Ke(1,1)},uOpacity:{value:1},uSeatY:{value:Dt},uViewCenterY:{value:0},uCurveStrength:{value:p},uCurveExp:{value:h},uCurveRange:{value:b}},vertexShader:V,fragmentShader:k,transparent:!0,side:un});lt.userData.materials||(lt.userData.materials=[],lt.onUpdate=()=>{if(lt.image){const mr=lt.image,St=mr.width||1,Nn=mr.height||1;for(const wi of lt.userData.materials)wi.uniforms.uImageRes.value.set(St,Nn)}}),lt.userData.materials.push(It);const cn=new pn(Se,It);cn.position.y=Dt,cn.userData={meshIndex:Pe,projectIndex:$e,project:t()[$e],baseSeatY:Dt},de.add(cn),Ce.push(It),Ve.push(cn),Xe.push(1)}function De(){if(!O(R))return;const{width:Pe,height:$e}=O(R).getBoundingClientRect();Pe===0||$e===0||(W.aspect=Pe/$e,W.updateProjectionMatrix(),j.setSize(Pe,$e))}ce=new ResizeObserver(De),ce.observe(O(R)),requestAnimationFrame(De);const A=new Ef,g=new Ke;let I=-1,K=!1,ie=null,Z=-1;function Te(Pe){var lt;if(Pe===Z)return;Z=Pe;const $e=(lt=O(R))==null?void 0:lt.closest("c-strip");$e&&$e.dispatchEvent(new CustomEvent("strip:hover",{bubbles:!0,detail:{project:Pe===-1?null:t()[Pe],index:Pe}}))}function me(Pe){if(!O(R))return;const $e=O(R).getBoundingClientRect();g.x=(Pe.clientX-$e.left)/$e.width*2-1,g.y=-((Pe.clientY-$e.top)/$e.height)*2+1,A.setFromCamera(g,W);const lt=A.intersectObjects(Ve);if(lt.length>0){const Dt=lt[0].object;I=Dt.userData.meshIndex,K=!0,O(R).style.cursor="pointer",Te(Dt.userData.projectIndex)}else I=-1,K=!1,O(R).style.cursor="default",Te(-1)}function Le(Pe){ie=Pe,me(Pe)}function Ge(){ie=null,I=-1,K=!1,O(R)&&(O(R).style.cursor="default"),Te(-1)}function le(Pe){if(!O(R))return;const $e=O(R).getBoundingClientRect();g.x=(Pe.clientX-$e.left)/$e.width*2-1,g.y=-((Pe.clientY-$e.top)/$e.height)*2+1,A.setFromCamera(g,W);const lt=A.intersectObjects(Ve);if(lt.length>0){const It=lt[0].object.userData.project;if(It!=null&&It.url){const cn=O(R).closest("c-strip");cn&&cn.dispatchEvent(new CustomEvent("strip:exit",{bubbles:!0,detail:{url:It.url,project:It}}))}}}O(R).addEventListener("mousemove",Le),O(R).addEventListener("mouseleave",Ge),O(R).addEventListener("click",le);const he=O(R).closest("[data-canvas-map]");let Ae=0,we=0,ve=-1,Ye=-1,L=0;function re(Pe,$e){return((Pe+$e+it)%P+P)%P-it}function ee(Pe){return((Pe+it)%P+P)%P-it}function fe(Pe){A.setFromCamera(new Ke(0,Pe),W);const{origin:$e,direction:lt}=A.ray,Dt=-$e.z/lt.z;return $e.y+Dt*lt.y}const te=Ve[0].userData.baseSeatY,J=fe(y);Ae=ee(J-te);function se(Pe){Pe.preventDefault(),we+=Pe.deltaY*S}function ze(Pe){L=Pe.touches[0].clientY,we=0}function rt(Pe){Pe.preventDefault();const $e=Pe.touches[0].clientY;we=(L-$e)*E,Ae+=we,L=$e}he&&(he.addEventListener("wheel",se,{passive:!1}),he.addEventListener("touchstart",ze,{passive:!0}),he.addEventListener("touchmove",rt,{passive:!1}));let Qe=!0;function Gt(){ye||!Qe||ge||(ge=!0,$=requestAnimationFrame(Ai))}function Lt(){ge&&(cancelAnimationFrame($),$=0,ge=!1)}const qn=new IntersectionObserver(([Pe])=>{Qe=Pe.isIntersecting,Qe&&!ye?Gt():Lt()},{threshold:0});qn.observe(O(R));function Ai(){var mr;if(ye||!Qe){ge=!1;return}$=requestAnimationFrame(Ai),A.setFromCamera(new Ke(0,y),W);const Pe=A.ray,$e=-Pe.origin.z/Pe.direction.z,lt=Pe.origin.y+$e*Pe.direction.y;Ae+=we,we*=T,ie&&Math.abs(we)>.001&&me(ie);let Dt=0,It=1/0;for(let St=0;St<Ze;St++){const Nn=Ve[St].userData.baseSeatY,wi=re(Nn,Ae);Ve[St].position.y=wi,Ve[St].position.z=0,Ve[St].rotation.x=0,Ce[St].uniforms.uSeatY.value=wi,Ce[St].uniforms.uViewCenterY.value=lt;const vr=Math.abs(wi-lt);vr<It&&(It=vr,Dt=St);const eo=Math.min(vr/l,1),to=1-c*eo;Ve[St].scale.set(to,1,1)}if(Ye>=0){const St=Math.abs(Ve[Ye].position.y-lt);Dt!==Ye&&It>St-w&&(Dt=Ye,It=St)}Ye=Dt;const cn=Ve[Dt].userData.projectIndex;for(let St=0;St<Ze;St++){let Nn;K?Nn=St===I?1:C:Nn=St===Dt?1:C,Xe[St]=Nn;const wi=Ce[St].uniforms.uOpacity.value;Ce[St].uniforms.uOpacity.value+=(Nn-wi)*U}if(cn!==ve&&t()[cn]){ve=cn;const St=(mr=O(R))==null?void 0:mr.closest("c-strip");St&&St.dispatchEvent(new CustomEvent("strip:update",{bubbles:!0,detail:{project:t()[cn],index:cn}}))}j.render(Fe,W)}return Gt(),requestAnimationFrame(()=>{var $e;const Pe=($e=O(R))==null?void 0:$e.closest("c-strip");Pe&&t()[0]&&(ve=0,Pe.dispatchEvent(new CustomEvent("strip:update",{bubbles:!0,detail:{project:t()[0],index:0}})))}),()=>{var Pe,$e,lt;ye=!0,window.removeEventListener("resize",D),Lt(),ce&&ce.disconnect(),qn.disconnect(),(Pe=O(R))==null||Pe.removeEventListener("mousemove",Le),($e=O(R))==null||$e.removeEventListener("mouseleave",Ge),(lt=O(R))==null||lt.removeEventListener("click",le),he&&(he.removeEventListener("wheel",se),he.removeEventListener("touchstart",ze),he.removeEventListener("touchmove",rt)),j.domElement.removeEventListener("webglcontextlost",Q),j.domElement.removeEventListener("webglcontextrestored",_e),de.clear(),Fe.clear(),Se.dispose();for(const Dt of Ce)Dt.dispose();tt.forEach(Dt=>{Dt.userData.materials=null,Dt.dispose()}),tt.clear(),Ce.length=0,Ve.length=0,j.dispose(),j.forceContextLoss(),j.domElement.parentNode&&j.domElement.parentNode.removeChild(j.domElement)}});var N=ci(),B=jt(N);{var Y=j=>{var $=$0();fi($,21,t,ui,(ge,ce)=>{var ye=K0();Oe(()=>Et(ye,"href",O(ce).url)),Oe(()=>Et(ye,"title",O(ce).title)),Oe(()=>Et(ye,"backgroundimage",O(ce).thumbnail_base)),Oe(()=>Et(ye,"overlayimage",O(ce).thumbnail_overlay)),Re(ge,ye)}),Re(j,$)},ae=j=>{var $=J0();di($,ge=>Ct(R,ge),()=>O(R)),Re(j,$)};wt(B,j=>{O(z)?j(Y):j(ae,!1)})}Re(n,N),rn()}var ex=Ne('<div class="text svelte-1v32imz"><div class="text-md" data-motion-stagger=""><!></div></div>'),tx=Ne('<header><div class="heading svelte-1v32imz"><h2 data-motion-stagger="" class="svelte-1v32imz"><!></h2></div> <!></header>');function nx(n,e){nn(e,!0);let t=He(e,"title",3,""),i=He(e,"description",3,""),r=He(e,"layout",3,"column");const s=_=>_.replace(/<\/p>\s*<p>/g,"<br><br>").replace(/^<p>([\s\S]*)<\/p>$/,"$1"),a=li(()=>s(t())),o=li(()=>s(i()));var c=tx();let l;var u=oe(c),f=oe(u),d=oe(f);Kt(d,()=>O(a));var m=je(u,2);{var v=_=>{var p=ex(),h=oe(p),b=oe(h);Kt(b,()=>O(o)),Re(_,p)};wt(m,_=>{i()&&_(v)})}Oe(()=>l=ei(c,1,"header svelte-1v32imz",null,l,{"is-row":r()==="row"})),Re(n,c),rn()}var ix=Ne('<div class="text svelte-18x57qp"><div class="text-md" data-motion-stagger=""><!></div></div>'),rx=Ne('<header><div class="heading svelte-18x57qp"><h2 data-motion-stagger="" class="svelte-18x57qp"><!></h2></div> <div class="detail svelte-18x57qp"><!> <div class="label svelte-18x57qp" data-motion-stagger=""><span>About Me</span></div></div></header>');function sx(n,e){nn(e,!0);let t=He(e,"title",3,""),i=He(e,"description",3,""),r=He(e,"layout",3,"column");const s=p=>p.replace(/<\/p>\s*<p>/g,"<br><br>").replace(/^<p>([\s\S]*)<\/p>$/,"$1"),a=li(()=>s(t())),o=li(()=>s(i()));var c=rx();let l;var u=oe(c),f=oe(u),d=oe(f);Kt(d,()=>O(a));var m=je(u,2),v=oe(m);{var _=p=>{var h=ix(),b=oe(h),S=oe(b);Kt(S,()=>O(o)),Re(p,h)};wt(v,p=>{i()&&p(_)})}Oe(()=>l=ei(c,1,"header svelte-18x57qp",null,l,{"is-row":r()==="row"})),Re(n,c),rn()}var ax=Ne('<img loading="eager" decoding="async" class="svelte-1pcp5jh"/>'),ox=Ne('<figcaption class="caption text-sm svelte-1pcp5jh"> </figcaption>'),lx=Ne('<figure class="figure svelte-1pcp5jh"><div><!></div> <!></figure>'),cx=Ne('<section class="section"><div><div class="grid svelte-1pcp5jh"></div></div></section>');function ux(n,e){let t=Ft(Sr([])),i=He(e,"images",19,()=>[]),r=He(e,"spacing",3,"stack");function s(u){O(t)[u]=!0,Ct(t,O(t),!0)}var a=cx(),o=oe(a);let c;var l=oe(o);fi(l,21,i,ui,(u,f,d)=>{var m=lx(),v=oe(m);let _;var p=oe(v);{var h=E=>{var T=ax();Oe(()=>{zt(T,"src",O(f).url),zt(T,"alt",O(f).alt||""),zt(T,"width",O(f).width),zt(T,"height",O(f).height)}),du("load",T,()=>s(d)),Re(E,T)};wt(p,E=>{O(f).url&&E(h)})}var b=je(v,2);{var S=E=>{var T=ox(),w=oe(T);Oe(()=>Wt(w,O(f).caption)),Re(E,T)};wt(b,E=>{O(f).caption&&E(S)})}Oe(()=>_=ei(v,1,"img-wrap svelte-1pcp5jh",null,_,{loaded:O(t)[d]})),Re(u,m)}),Oe(()=>c=ei(o,1,"container-fw py-sm",null,c,{"pt-0":r()==="trim"})),Re(n,a)}var fx=Ne('<p class="heading svelte-h8mvjh" data-motion-stagger=""> </p>'),dx=Ne('<div class="col svelte-h8mvjh"><!> <div class="text-md" data-motion-stagger=""><!></div></div>'),hx=Ne('<section class="section svelte-h8mvjh"><div></div></section>');function px(n,e){nn(e,!0);let t=He(e,"columns",3,"4"),i=He(e,"items",19,()=>[]);const r=li(()=>Math.max(1,Number(t())-i().length+1));var s=hx(),a=oe(s);fi(a,21,i,ui,(o,c,l)=>{var u=dx(),f=oe(u);{var d=_=>{var p=fx(),h=oe(p);Oe(()=>Wt(h,O(c).heading)),Re(_,p)};wt(f,_=>{O(c).heading&&_(d)})}var m=je(f,2),v=oe(m);Kt(v,()=>O(c).content),Oe(()=>Eo(u,l===0?`grid-column-start: ${O(r)}`:"")),Re(o,u)}),Oe(()=>ei(a,1,`grid col-${t()??""}`,"svelte-h8mvjh")),Re(n,s),rn()}var mx=Ne('<p class="label svelte-r01adz" data-motion-stagger=""> </p>'),vx=Ne('<div class="item svelte-r01adz"><div class="content text-md svelte-r01adz" data-motion-stagger=""><!></div> <!></div>'),gx=Ne('<section class="section svelte-r01adz"><div class="items svelte-r01adz"></div></section>');function _x(n,e){nn(e,!0),He(e,"columns",3,"4");let t=He(e,"items",19,()=>[]);const i=(a="")=>a.replace(/<\/p>\s*<p>/g,"<br><br>").replace(/^<p>([\s\S]*)<\/p>$/,"$1");var r=gx(),s=oe(r);fi(s,21,t,ui,(a,o)=>{var c=vx(),l=oe(c),u=oe(l);Kt(u,()=>i(O(o).content));var f=je(l,2);{var d=m=>{var v=mx(),_=oe(v);Oe(()=>Wt(_,O(o).heading)),Re(m,v)};wt(f,m=>{O(o).heading&&m(d)})}Re(a,c)}),Re(n,r),rn()}var xx=Ne('<h5 data-motion-stagger=""> </h5>'),Sx=Ne('<h5 data-motion-stagger=""> </h5>'),Mx=Ne('<div class="cell svelte-1k4htmo"><!> <div class="text-md" data-motion-stagger=""><!></div></div>'),Ex=Ne('<section class="section"><div class="container-fw py-sm"><div></div></div></section>');function bx(n,e){nn(e,!0);let t=He(e,"columns",3,"4"),i=He(e,"items",19,()=>[]);const r=li(()=>Math.max(1,Number(t())-i().length+1));var s=Ex(),a=oe(s),o=oe(a);fi(o,21,i,ui,(c,l,u)=>{var f=Mx(),d=oe(f);{var m=h=>{var b=xx(),S=oe(b);Oe(()=>Wt(S,O(l).heading)),Re(h,b)},v=h=>{var b=Sx(),S=oe(b);Oe(E=>Wt(S,`(${E??""})`),[()=>String(u+1).padStart(2,"0")]),Re(h,b)};wt(d,h=>{O(l).heading?h(m):h(v,!1)})}var _=je(d,2),p=oe(_);Kt(p,()=>O(l).description),Oe(()=>Eo(f,u===0?`grid-column-start: ${O(r)}`:"")),Re(c,f)}),Oe(()=>ei(o,1,`grid col-${t()??""}`,"svelte-1k4htmo")),Re(n,s),rn()}var yx=Ne('<img loading="eager" decoding="async" class="svelte-144qpa3"/>'),Tx=Ne('<figcaption class="caption text-sm svelte-144qpa3"> </figcaption>'),Ax=Ne('<section class="section-fw"><figure class="figure svelte-144qpa3"><div><!></div> <!></figure></section>');function wx(n,e){let t=Ft(!1),i=He(e,"image",3,""),r=He(e,"alt",3,""),s=He(e,"caption",3,"");var a=Ax(),o=oe(a),c=oe(o);let l;var u=oe(c);{var f=v=>{var _=yx();Oe(()=>{zt(_,"src",i()),zt(_,"alt",r()),zt(_,"width",e.width),zt(_,"height",e.height)}),du("load",_,()=>{Ct(t,!0)}),Re(v,_)};wt(u,v=>{i()&&v(f)})}var d=je(c,2);{var m=v=>{var _=Tx(),p=oe(_);Oe(()=>Wt(p,s())),Re(v,_)};wt(d,v=>{s()&&v(m)})}Oe(()=>l=ei(c,1,"img-wrap svelte-144qpa3",null,l,{loaded:O(t)})),Re(n,a)}Pt("c-header",bh,["rootpath","links"]),Pt("c-footer",Rh,["fixed","links"]),Pt("c-preloader",Dh,["title","images"]),Pt("l-index",Uh,["eyebrow","availabilitystatus","title","buttonlabel","buttonhref","projects"]),Pt("c-button",ep,["href","label","arialabel","active"]),Pt("c-indexcard",ip,["href","title","backgroundimage","overlayimage"]),Pt("c-asterisk",O0,["images"]),Pt("c-cube",z0,["images"]),Pt("c-helix",G0,["images"]),Pt("c-drum",k0,["images"]),Pt("c-torus",X0,["images"]),Pt("c-reel",j0,["projects"]),Pt("c-strip",Q0,["projects"]),Pt("b-header",nx,["title","description","layout"]),Pt("b-margin-header",sx,["title","description","layout"]),Pt("b-img",ux,["images","spacing"]),Pt("b-text",px,["columns","items"]),Pt("b-margin-text",_x,["columns","items"]),Pt("b-grid",bx,["columns","items"]),Pt("b-fullbleed",wx,["image","alt","caption"]),Pt("l-about",Bh,["images","items"]),Pt("l-text",Yh,["items"]),Pt("l-404",jh,["title","message","buttonlabel","buttonhref"]),Pt("l-holding",Jh,["title","message","buttonlabel","buttonhref"]),console.log("Svelte components loaded"),window.dispatchEvent(new CustomEvent("svelte:ready"))})();
