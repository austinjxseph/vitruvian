var Lx=Object.defineProperty;var sd=wt=>{throw TypeError(wt)};var Ix=(wt,At,Vt)=>At in wt?Lx(wt,At,{enumerable:!0,configurable:!0,writable:!0,value:Vt}):wt[At]=Vt;var qn=(wt,At,Vt)=>Ix(wt,typeof At!="symbol"?At+"":At,Vt),mc=(wt,At,Vt)=>At.has(wt)||sd("Cannot "+Vt);var Q=(wt,At,Vt)=>(mc(wt,At,"read from private field"),Vt?Vt.call(wt):At.get(wt)),lt=(wt,At,Vt)=>At.has(wt)?sd("Cannot add the same private member more than once"):At instanceof WeakSet?At.add(wt):At.set(wt,Vt),st=(wt,At,Vt,yi)=>(mc(wt,At,"write to private field"),yi?yi.call(wt,Vt):At.set(wt,Vt),Vt),ln=(wt,At,Vt)=>(mc(wt,At,"access private method"),Vt);(function(){"use strict";var Ss,Ms,Ur,Es,aa,oa,Nr,bs,_i,gc,_c,ad,Wn,hc,vi,Fr,xi,Xn,Tn,Si,ki,dr,Or,hr,ys,Br,Ts,As,Wi,Qa,jt,Ux,Nx,vc,no,io,xc,ri,Mi,Un,zr,la,ca,eo,nd;var At=Array.isArray,Vt=Array.prototype.indexOf,yi=Array.prototype.includes,fa=Array.from,od=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,ld=Object.getOwnPropertyDescriptors,cd=Object.prototype,ud=Array.prototype,Sc=Object.getPrototypeOf,Mc=Object.isExtensible;function fd(n){for(var e=0;e<n.length;e++)n[e]()}function Ec(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}const $t=2,da=4,ha=8,bc=1<<24,Ti=16,jn=32,mr=64,ro=128,Bn=512,Yt=1024,hn=2048,Ai=4096,Rn=8192,wi=16384,so=32768,Hr=65536,yc=1<<17,Tc=1<<18,kr=1<<19,dd=1<<20,Xi=1<<25,gr=32768,ao=1<<21,oo=1<<22,Yi=1<<23,Cs=Symbol("$state"),hd=Symbol("legacy props"),pd=Symbol(""),Wr=new class extends Error{constructor(){super(...arguments);qn(this,"name","StaleReactionError");qn(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function md(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function gd(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function _d(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function vd(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function xd(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Sd(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Md(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ed(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function bd(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function yd(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Td(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Ad=1,wd=2,Rd=16,Cd=1,Pd=4,Dd=8,Ld=16,Id=1,Ud=2,Zt=Symbol(),Nd="http://www.w3.org/1999/xhtml";function Fd(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ac(n){return n===this.v}function Od(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function wc(n){return!Od(n,this.v)}let Fx=!1,Cn=null;function Xr(n){Cn=n}function pn(n,e=!1,t){Cn={p:Cn,i:!1,c:null,e:null,s:n,x:null,l:null}}function mn(n){var e=Cn,t=e.e;if(t!==null){e.e=null;for(var i of t)jc(i)}return e.i=!0,Cn=e.p,{}}function Rc(){return!0}let Yr=[];function Bd(){var n=Yr;Yr=[],fd(n)}function qi(n){if(Yr.length===0){var e=Yr;queueMicrotask(()=>{e===Yr&&Bd()})}Yr.push(n)}function Cc(n){var e=gt;if(e===null)return ot.f|=Yi,n;if((e.f&so)===0){if((e.f&ro)===0)throw n;e.b.error(n)}else qr(n,e)}function qr(n,e){for(;e!==null;){if((e.f&ro)!==0)try{e.b.error(n);return}catch(t){n=t}e=e.parent}throw n}const zd=-7169;function Gt(n,e){n.f=n.f&zd|e}function lo(n){(n.f&Bn)!==0||n.deps===null?Gt(n,Yt):Gt(n,Ai)}function Pc(n){if(n!==null)for(const e of n)(e.f&$t)===0||(e.f&gr)===0||(e.f^=gr,Pc(e.deps))}function Dc(n,e,t){(n.f&hn)!==0?e.add(n):(n.f&Ai)!==0&&t.add(n),Pc(n.deps),Gt(n,Yt)}const pa=new Set;let vt=null,Kt=null,$n=[],co=null,uo=!1;const dc=class dc{constructor(){lt(this,_i);qn(this,"committed",!1);qn(this,"current",new Map);qn(this,"previous",new Map);lt(this,Ss,new Set);lt(this,Ms,new Set);lt(this,Ur,0);lt(this,Es,0);lt(this,aa,null);lt(this,oa,new Set);lt(this,Nr,new Set);qn(this,"skipped_effects",new Set);qn(this,"is_fork",!1);lt(this,bs,!1)}is_deferred(){return this.is_fork||Q(this,Es)>0}process(e){var r;$n=[],this.apply();var t=[],i=[];for(const s of e)ln(this,_i,gc).call(this,s,t,i);if(this.is_deferred()){ln(this,_i,_c).call(this,i),ln(this,_i,_c).call(this,t);for(const s of this.skipped_effects)Nc(s)}else{for(const s of Q(this,Ss))s();Q(this,Ss).clear(),Q(this,Ur)===0&&ln(this,_i,ad).call(this),vt=null,Lc(i),Lc(t),(r=Q(this,aa))==null||r.resolve()}Kt=null}capture(e,t){t!==Zt&&!this.previous.has(e)&&this.previous.set(e,t),(e.f&Yi)===0&&(this.current.set(e,e.v),Kt==null||Kt.set(e,e.v))}activate(){vt=this,this.apply()}deactivate(){vt===this&&(vt=null,Kt=null)}flush(){if(this.activate(),$n.length>0){if(Vd(),vt!==null&&vt!==this)return}else Q(this,Ur)===0&&this.process([]);this.deactivate()}discard(){for(const e of Q(this,Ms))e(this);Q(this,Ms).clear()}increment(e){st(this,Ur,Q(this,Ur)+1),e&&st(this,Es,Q(this,Es)+1)}decrement(e){st(this,Ur,Q(this,Ur)-1),e&&st(this,Es,Q(this,Es)-1),!Q(this,bs)&&(st(this,bs,!0),qi(()=>{st(this,bs,!1),this.is_deferred()?$n.length>0&&this.flush():this.revive()}))}revive(){for(const e of Q(this,oa))Q(this,Nr).delete(e),Gt(e,hn),Ri(e);for(const e of Q(this,Nr))Gt(e,Ai),Ri(e);this.flush()}oncommit(e){Q(this,Ss).add(e)}ondiscard(e){Q(this,Ms).add(e)}settled(){return(Q(this,aa)??st(this,aa,Ec())).promise}static ensure(){if(vt===null){const e=vt=new dc;pa.add(vt),qi(()=>{vt===e&&e.flush()})}return vt}apply(){}};Ss=new WeakMap,Ms=new WeakMap,Ur=new WeakMap,Es=new WeakMap,aa=new WeakMap,oa=new WeakMap,Nr=new WeakMap,bs=new WeakMap,_i=new WeakSet,gc=function(e,t,i){e.f^=Yt;for(var r=e.first,s=null;r!==null;){var a=r.f,o=(a&(jn|mr))!==0,l=o&&(a&Yt)!==0,c=l||(a&Rn)!==0||this.skipped_effects.has(r);if(!c&&r.fn!==null){o?r.f^=Yt:s!==null&&(a&(da|ha|bc))!==0?s.b.defer_effect(r):(a&da)!==0?t.push(r):Ls(r)&&((a&Ti)!==0&&Q(this,Nr).add(r),Is(r));var f=r.first;if(f!==null){r=f;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)u===s&&(s=null),r=u.next,u=u.parent}},_c=function(e){for(var t=0;t<e.length;t+=1)Dc(e[t],Q(this,oa),Q(this,Nr))},ad=function(){var r;if(pa.size>1){this.previous.clear();var e=Kt,t=!0;for(const s of pa){if(s===this){t=!1;continue}const a=[];for(const[l,c]of this.current){if(s.current.has(l))if(t&&c!==s.current.get(l))s.current.set(l,c);else continue;a.push(l)}if(a.length===0)continue;const o=[...s.current.keys()].filter(l=>!this.current.has(l));if(o.length>0){var i=$n;$n=[];const l=new Set,c=new Map;for(const f of a)Ic(f,o,l,c);if($n.length>0){vt=s,s.apply();for(const f of $n)ln(r=s,_i,gc).call(r,f,[],[]);s.deactivate()}$n=i}}vt=null,Kt=e}this.committed=!0,pa.delete(this)};let ji=dc;function Vd(){uo=!0;var n=null;try{for(var e=0;$n.length>0;){var t=ji.ensure();if(e++>1e3){var i,r;Gd()}t.process($n),$i.clear()}}finally{uo=!1,co=null}}function Gd(){try{Sd()}catch(n){qr(n,co)}}let Zn=null;function Lc(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(wi|Rn))===0&&Ls(i)&&(Zn=new Set,Is(i),i.deps===null&&i.first===null&&i.nodes===null&&(i.teardown===null&&i.ac===null?Qc(i):i.fn=null),(Zn==null?void 0:Zn.size)>0)){$i.clear();for(const r of Zn){if((r.f&(wi|Rn))!==0)continue;const s=[r];let a=r.parent;for(;a!==null;)Zn.has(a)&&(Zn.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(wi|Rn))===0&&Is(l)}}Zn.clear()}}Zn=null}}function Ic(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const s=r.f;(s&$t)!==0?Ic(r,e,t,i):(s&(oo|Ti))!==0&&(s&hn)===0&&Uc(r,e,i)&&(Gt(r,hn),Ri(r))}}function Uc(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(yi.call(e,r))return!0;if((r.f&$t)!==0&&Uc(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function Ri(n){for(var e=co=n;e.parent!==null;){e=e.parent;var t=e.f;if(uo&&e===gt&&(t&Ti)!==0&&(t&Tc)===0)return;if((t&(mr|jn))!==0){if((t&Yt)===0)return;e.f^=Yt}}$n.push(e)}function Nc(n){if(!((n.f&jn)!==0&&(n.f&Yt)!==0)){Gt(n,Yt);for(var e=n.first;e!==null;)Nc(e),e=e.next}}function Hd(n){let e=0,t=_r(0),i;return()=>{go()&&(O(t),$c(()=>(e===0&&(i=va(()=>n(()=>Ps(t)))),e+=1,()=>{qi(()=>{e-=1,e===0&&(i==null||i(),i=void 0,Ps(t))})})))}}var kd=Hr|kr|ro;function Wd(n,e,t){new Xd(n,e,t)}class Xd{constructor(e,t,i){lt(this,jt);qn(this,"parent");qn(this,"is_pending",!1);lt(this,Wn);lt(this,hc,null);lt(this,vi);lt(this,Fr);lt(this,xi);lt(this,Xn,null);lt(this,Tn,null);lt(this,Si,null);lt(this,ki,null);lt(this,dr,null);lt(this,Or,0);lt(this,hr,0);lt(this,ys,!1);lt(this,Br,!1);lt(this,Ts,new Set);lt(this,As,new Set);lt(this,Wi,null);lt(this,Qa,Hd(()=>(st(this,Wi,_r(Q(this,Or))),()=>{st(this,Wi,null)})));st(this,Wn,e),st(this,vi,t),st(this,Fr,i),this.parent=gt.b,this.is_pending=!!Q(this,vi).pending,st(this,xi,_o(()=>{gt.b=this;{var r=ln(this,jt,vc).call(this);try{st(this,Xn,zn(()=>i(r)))}catch(s){this.error(s)}Q(this,hr)>0?ln(this,jt,io).call(this):this.is_pending=!1}return()=>{var s;(s=Q(this,dr))==null||s.remove()}},kd))}defer_effect(e){Dc(e,Q(this,Ts),Q(this,As))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!Q(this,vi).pending}update_pending_count(e){ln(this,jt,xc).call(this,e),st(this,Or,Q(this,Or)+e),!(!Q(this,Wi)||Q(this,ys))&&(st(this,ys,!0),qi(()=>{st(this,ys,!1),Q(this,Wi)&&jr(Q(this,Wi),Q(this,Or))}))}get_effect_pending(){return Q(this,Qa).call(this),O(Q(this,Wi))}error(e){var t=Q(this,vi).onerror;let i=Q(this,vi).failed;if(Q(this,Br)||!t&&!i)throw e;Q(this,Xn)&&(gn(Q(this,Xn)),st(this,Xn,null)),Q(this,Tn)&&(gn(Q(this,Tn)),st(this,Tn,null)),Q(this,Si)&&(gn(Q(this,Si)),st(this,Si,null));var r=!1,s=!1;const a=()=>{if(r){Fd();return}r=!0,s&&Td(),ji.ensure(),st(this,Or,0),Q(this,Si)!==null&&xr(Q(this,Si),()=>{st(this,Si,null)}),this.is_pending=this.has_pending_snippet(),st(this,Xn,ln(this,jt,no).call(this,()=>(st(this,Br,!1),zn(()=>Q(this,Fr).call(this,Q(this,Wn)))))),Q(this,hr)>0?ln(this,jt,io).call(this):this.is_pending=!1};qi(()=>{try{s=!0,t==null||t(e,a),s=!1}catch(o){qr(o,Q(this,xi)&&Q(this,xi).parent)}i&&st(this,Si,ln(this,jt,no).call(this,()=>{ji.ensure(),st(this,Br,!0);try{return zn(()=>{i(Q(this,Wn),()=>e,()=>a)})}catch(o){return qr(o,Q(this,xi).parent),null}finally{st(this,Br,!1)}}))})}}Wn=new WeakMap,hc=new WeakMap,vi=new WeakMap,Fr=new WeakMap,xi=new WeakMap,Xn=new WeakMap,Tn=new WeakMap,Si=new WeakMap,ki=new WeakMap,dr=new WeakMap,Or=new WeakMap,hr=new WeakMap,ys=new WeakMap,Br=new WeakMap,Ts=new WeakMap,As=new WeakMap,Wi=new WeakMap,Qa=new WeakMap,jt=new WeakSet,Ux=function(){try{st(this,Xn,zn(()=>Q(this,Fr).call(this,Q(this,Wn))))}catch(e){this.error(e)}},Nx=function(){const e=Q(this,vi).pending;e&&(st(this,Tn,zn(()=>e(Q(this,Wn)))),qi(()=>{var t=ln(this,jt,vc).call(this);st(this,Xn,ln(this,jt,no).call(this,()=>(ji.ensure(),zn(()=>Q(this,Fr).call(this,t))))),Q(this,hr)>0?ln(this,jt,io).call(this):(xr(Q(this,Tn),()=>{st(this,Tn,null)}),this.is_pending=!1)}))},vc=function(){var e=Q(this,Wn);return this.is_pending&&(st(this,dr,Zi()),Q(this,Wn).before(Q(this,dr)),e=Q(this,dr)),e},no=function(e){var t=gt,i=ot,r=Cn;Vn(Q(this,xi)),_n(Q(this,xi)),Xr(Q(this,xi).ctx);try{return e()}catch(s){return Cc(s),null}finally{Vn(t),_n(i),Xr(r)}},io=function(){const e=Q(this,vi).pending;Q(this,Xn)!==null&&(st(this,ki,document.createDocumentFragment()),Q(this,ki).append(Q(this,dr)),nu(Q(this,Xn),Q(this,ki))),Q(this,Tn)===null&&st(this,Tn,zn(()=>e(Q(this,Wn))))},xc=function(e){var t;if(!this.has_pending_snippet()){this.parent&&ln(t=this.parent,jt,xc).call(t,e);return}if(st(this,hr,Q(this,hr)+e),Q(this,hr)===0){this.is_pending=!1;for(const i of Q(this,Ts))Gt(i,hn),Ri(i);for(const i of Q(this,As))Gt(i,Ai),Ri(i);Q(this,Ts).clear(),Q(this,As).clear(),Q(this,Tn)&&xr(Q(this,Tn),()=>{st(this,Tn,null)}),Q(this,ki)&&(Q(this,Wn).before(Q(this,ki)),st(this,ki,null))}};function Yd(n,e,t,i){const r=ma;var s=n.filter(d=>!d.settled);if(t.length===0&&s.length===0){i(e.map(r));return}var a=vt,o=gt,l=qd(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(d=>d.promise)):null;function f(d){l();try{i(d)}catch(m){(o.f&wi)===0&&qr(m,o)}a==null||a.deactivate(),fo()}if(t.length===0){c.then(()=>f(e.map(r)));return}function u(){l(),Promise.all(t.map(d=>jd(d))).then(d=>f([...e.map(r),...d])).catch(d=>qr(d,o))}c?c.then(u):u()}function qd(){var n=gt,e=ot,t=Cn,i=vt;return function(s=!0){Vn(n),_n(e),Xr(t),s&&(i==null||i.activate())}}function fo(){Vn(null),_n(null),Xr(null)}function ma(n){var e=$t|hn,t=ot!==null&&(ot.f&$t)!==0?ot:null;return gt!==null&&(gt.f|=kr),{ctx:Cn,deps:null,effects:null,equals:Ac,f:e,fn:n,reactions:null,rv:0,v:Zt,wv:0,parent:t??gt,ac:null}}function jd(n,e,t){let i=gt;i===null&&gd();var r=i.b,s=void 0,a=_r(Zt),o=!ot,l=new Map;return rh(()=>{var m;var c=Ec();s=c.promise;try{Promise.resolve(n()).then(c.resolve,c.reject).then(()=>{f===vt&&f.committed&&f.deactivate(),fo()})}catch(g){c.reject(g),fo()}var f=vt;if(o){var u=r.is_rendered();r.update_pending_count(1),f.increment(u),(m=l.get(f))==null||m.reject(Wr),l.delete(f),l.set(f,c)}const d=(g,v=void 0)=>{if(f.activate(),v)v!==Wr&&(a.f|=Yi,jr(a,v));else{(a.f&Yi)!==0&&(a.f^=Yi),jr(a,g);for(const[p,h]of l){if(l.delete(p),p===f)break;h.reject(Wr)}}o&&(r.update_pending_count(-1),f.decrement(u))};c.promise.then(d,g=>d(null,g||"unknown"))}),Yc(()=>{for(const c of l.values())c.reject(Wr)}),new Promise(c=>{function f(u){function d(){u===s?c(a):f(s)}u.then(d,d)}f(s)})}function si(n){const e=ma(n);return ru(e),e}function Fc(n){const e=ma(n);return e.equals=wc,e}function Oc(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)gn(e[t])}}function $d(n){for(var e=n.parent;e!==null;){if((e.f&$t)===0)return(e.f&wi)===0?e:null;e=e.parent}return null}function ho(n){var e,t=gt;Vn($d(n));try{n.f&=~gr,Oc(n),e=cu(n)}finally{Vn(t)}return e}function Bc(n){var e=ho(n);if(!n.equals(e)&&(n.wv=ou(),(!(vt!=null&&vt.is_fork)||n.deps===null)&&(n.v=e,n.deps===null))){Gt(n,Yt);return}Ji||(Kt!==null?(go()||vt!=null&&vt.is_fork)&&Kt.set(n,e):lo(n))}let po=new Set;const $i=new Map;let zc=!1;function _r(n,e){var t={f:0,v:n,reactions:null,equals:Ac,rv:0,wv:0};return t}function Ht(n,e){const t=_r(n);return ru(t),t}function Zd(n,e=!1,t=!0){const i=_r(n);return e||(i.equals=wc),i}function Dt(n,e,t=!1){ot!==null&&(!Kn||(ot.f&yc)!==0)&&Rc()&&(ot.f&($t|Ti|oo|yc))!==0&&(Gn===null||!yi.call(Gn,n))&&yd();let i=t?vr(e):e;return jr(n,i)}function jr(n,e){if(!n.equals(e)){var t=n.v;Ji?$i.set(n,e):$i.set(n,t),n.v=e;var i=ji.ensure();if(i.capture(n,t),(n.f&$t)!==0){const r=n;(n.f&hn)!==0&&ho(r),lo(r)}n.wv=ou(),Vc(n,hn),gt!==null&&(gt.f&Yt)!==0&&(gt.f&(jn|mr))===0&&(Hn===null?ah([n]):Hn.push(n)),!i.is_fork&&po.size>0&&!zc&&Kd()}return e}function Kd(){zc=!1;for(const n of po)(n.f&Yt)!==0&&Gt(n,Ai),Ls(n)&&Is(n);po.clear()}function Ps(n){Dt(n,n.v+1)}function Vc(n,e){var t=n.reactions;if(t!==null)for(var i=t.length,r=0;r<i;r++){var s=t[r],a=s.f,o=(a&hn)===0;if(o&&Gt(s,e),(a&$t)!==0){var l=s;Kt==null||Kt.delete(l),(a&gr)===0&&(a&Bn&&(s.f|=gr),Vc(l,Ai))}else o&&((a&Ti)!==0&&Zn!==null&&Zn.add(s),Ri(s))}}function vr(n){if(typeof n!="object"||n===null||Cs in n)return n;const e=Sc(n);if(e!==cd&&e!==ud)return n;var t=new Map,i=At(n),r=Ht(0),s=Mr,a=o=>{if(Mr===s)return o();var l=ot,c=Mr;_n(null),au(s);var f=o();return _n(l),au(c),f};return i&&t.set("length",Ht(n.length)),new Proxy(n,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Ed();var f=t.get(l);return f===void 0?f=a(()=>{var u=Ht(c.value);return t.set(l,u),u}):Dt(f,c.value,!0),!0},deleteProperty(o,l){var c=t.get(l);if(c===void 0){if(l in o){const f=a(()=>Ht(Zt));t.set(l,f),Ps(r)}}else Dt(c,Zt),Ps(r);return!0},get(o,l,c){var m;if(l===Cs)return n;var f=t.get(l),u=l in o;if(f===void 0&&(!u||(m=Gr(o,l))!=null&&m.writable)&&(f=a(()=>{var g=vr(u?o[l]:Zt),v=Ht(g);return v}),t.set(l,f)),f!==void 0){var d=O(f);return d===Zt?void 0:d}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var f=t.get(l);f&&(c.value=O(f))}else if(c===void 0){var u=t.get(l),d=u==null?void 0:u.v;if(u!==void 0&&d!==Zt)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return c},has(o,l){var d;if(l===Cs)return!0;var c=t.get(l),f=c!==void 0&&c.v!==Zt||Reflect.has(o,l);if(c!==void 0||gt!==null&&(!f||(d=Gr(o,l))!=null&&d.writable)){c===void 0&&(c=a(()=>{var m=f?vr(o[l]):Zt,g=Ht(m);return g}),t.set(l,c));var u=O(c);if(u===Zt)return!1}return f},set(o,l,c,f){var M;var u=t.get(l),d=l in o;if(i&&l==="length")for(var m=c;m<u.v;m+=1){var g=t.get(m+"");g!==void 0?Dt(g,Zt):m in o&&(g=a(()=>Ht(Zt)),t.set(m+"",g))}if(u===void 0)(!d||(M=Gr(o,l))!=null&&M.writable)&&(u=a(()=>Ht(void 0)),Dt(u,vr(c)),t.set(l,u));else{d=u.v!==Zt;var v=a(()=>vr(c));Dt(u,v)}var p=Reflect.getOwnPropertyDescriptor(o,l);if(p!=null&&p.set&&p.set.call(f,c),!d){if(i&&typeof l=="string"){var h=t.get("length"),b=Number(l);Number.isInteger(b)&&b>=h.v&&Dt(h,b+1)}Ps(r)}return!0},ownKeys(o){O(r);var l=Reflect.ownKeys(o).filter(u=>{var d=t.get(u);return d===void 0||d.v!==Zt});for(var[c,f]of t)f.v!==Zt&&!(c in o)&&l.push(c);return l},setPrototypeOf(){bd()}})}var Gc,Hc,kc,Wc;function Jd(){if(Gc===void 0){Gc=window,Hc=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;kc=Gr(e,"firstChild").get,Wc=Gr(e,"nextSibling").get,Mc(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),Mc(t)&&(t.__t=void 0)}}function Zi(n=""){return document.createTextNode(n)}function Ki(n){return kc.call(n)}function Ds(n){return Wc.call(n)}function oe(n,e){return Ki(n)}function cn(n,e=!1){{var t=Ki(n);return t instanceof Comment&&t.data===""?Ds(t):t}}function Je(n,e=1,t=!1){let i=n;for(;e--;)i=Ds(i);return i}function Qd(n){n.textContent=""}function Xc(){return!1}function mo(n){var e=ot,t=gt;_n(null),Vn(null);try{return n()}finally{_n(e),Vn(t)}}function eh(n){gt===null&&(ot===null&&xd(),vd()),Ji&&_d()}function th(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Ci(n,e,t){var i=gt;i!==null&&(i.f&Rn)!==0&&(n|=Rn);var r={ctx:Cn,deps:null,nodes:null,f:n|hn|Bn,first:null,fn:e,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,wv:0,ac:null};if(t)try{Is(r),r.f|=so}catch(o){throw gn(r),o}else e!==null&&Ri(r);var s=r;if(t&&s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&kr)===0&&(s=s.first,(n&Ti)!==0&&(n&Hr)!==0&&s!==null&&(s.f|=Hr)),s!==null&&(s.parent=i,i!==null&&th(s,i),ot!==null&&(ot.f&$t)!==0&&(n&mr)===0)){var a=ot;(a.effects??(a.effects=[])).push(s)}return r}function go(){return ot!==null&&!Kn}function Yc(n){const e=Ci(ha,null,!1);return Gt(e,Yt),e.teardown=n,e}function qc(n){eh();var e=gt.f,t=!ot&&(e&jn)!==0&&(e&so)===0;if(t){var i=Cn;(i.e??(i.e=[])).push(n)}else return jc(n)}function jc(n){return Ci(da|dd,n,!1)}function nh(n){ji.ensure();const e=Ci(mr|kr,n,!0);return(t={})=>new Promise(i=>{t.outro?xr(e,()=>{gn(e),i(void 0)}):(gn(e),i(void 0))})}function ih(n){return Ci(da,n,!1)}function rh(n){return Ci(oo|kr,n,!0)}function $c(n,e=0){return Ci(ha|e,n,!0)}function Be(n,e=[],t=[],i=[]){Yd(i,e,t,r=>{Ci(ha,()=>n(...r.map(O)),!0)})}function _o(n,e=0){var t=Ci(Ti|e,n,!0);return t}function zn(n){return Ci(jn|kr,n,!0)}function Zc(n){var e=n.teardown;if(e!==null){const t=Ji,i=ot;iu(!0),_n(null);try{e.call(null)}finally{iu(t),_n(i)}}}function Kc(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&mo(()=>{r.abort(Wr)});var i=t.next;(t.f&mr)!==0?t.parent=null:gn(t,e),t=i}}function sh(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&jn)===0&&gn(e),e=t}}function gn(n,e=!0){var t=!1;(e||(n.f&Tc)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(Jc(n.nodes.start,n.nodes.end),t=!0),Kc(n,e&&!t),_a(n,0),Gt(n,wi);var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)s.stop();Zc(n);var r=n.parent;r!==null&&r.first!==null&&Qc(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=null}function Jc(n,e){for(;n!==null;){var t=n===e?null:Ds(n);n.remove(),n=t}}function Qc(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function xr(n,e,t=!0){var i=[];eu(n,i,!0);var r=()=>{t&&gn(n),e&&e()},s=i.length;if(s>0){var a=()=>--s||r();for(var o of i)o.out(a)}else r()}function eu(n,e,t){if((n.f&Rn)===0){n.f^=Rn;var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||t)&&e.push(o);for(var r=n.first;r!==null;){var s=r.next,a=(r.f&Hr)!==0||(r.f&jn)!==0&&(n.f&Ti)!==0;eu(r,e,a?t:!1),r=s}}}function vo(n){tu(n,!0)}function tu(n,e){if((n.f&Rn)!==0){n.f^=Rn,(n.f&Yt)===0&&(Gt(n,hn),Ri(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&Hr)!==0||(t.f&jn)!==0;tu(t,r?e:!1),t=i}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||e)&&a.in()}}function nu(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:Ds(t);e.append(t),t=r}}let ga=!1,Ji=!1;function iu(n){Ji=n}let ot=null,Kn=!1;function _n(n){ot=n}let gt=null;function Vn(n){gt=n}let Gn=null;function ru(n){ot!==null&&(Gn===null?Gn=[n]:Gn.push(n))}let vn=null,Pn=0,Hn=null;function ah(n){Hn=n}let su=1,Sr=0,Mr=Sr;function au(n){Mr=n}function ou(){return++su}function Ls(n){var e=n.f;if((e&hn)!==0)return!0;if(e&$t&&(n.f&=~gr),(e&Ai)!==0){for(var t=n.deps,i=t.length,r=0;r<i;r++){var s=t[r];if(Ls(s)&&Bc(s),s.wv>n.wv)return!0}(e&Bn)!==0&&Kt===null&&Gt(n,Yt)}return!1}function lu(n,e,t=!0){var i=n.reactions;if(i!==null&&!(Gn!==null&&yi.call(Gn,n)))for(var r=0;r<i.length;r++){var s=i[r];(s.f&$t)!==0?lu(s,e,!1):e===s&&(t?Gt(s,hn):(s.f&Yt)!==0&&Gt(s,Ai),Ri(s))}}function cu(n){var v;var e=vn,t=Pn,i=Hn,r=ot,s=Gn,a=Cn,o=Kn,l=Mr,c=n.f;vn=null,Pn=0,Hn=null,ot=(c&(jn|mr))===0?n:null,Gn=null,Xr(n.ctx),Kn=!1,Mr=++Sr,n.ac!==null&&(mo(()=>{n.ac.abort(Wr)}),n.ac=null);try{n.f|=ao;var f=n.fn,u=f(),d=n.deps,m=vt==null?void 0:vt.is_fork;if(vn!==null){var g;if(m||_a(n,Pn),d!==null&&Pn>0)for(d.length=Pn+vn.length,g=0;g<vn.length;g++)d[Pn+g]=vn[g];else n.deps=d=vn;if(go()&&(n.f&Bn)!==0)for(g=Pn;g<d.length;g++)((v=d[g]).reactions??(v.reactions=[])).push(n)}else!m&&d!==null&&Pn<d.length&&(_a(n,Pn),d.length=Pn);if(Rc()&&Hn!==null&&!Kn&&d!==null&&(n.f&($t|Ai|hn))===0)for(g=0;g<Hn.length;g++)lu(Hn[g],n);if(r!==null&&r!==n){if(Sr++,r.deps!==null)for(let p=0;p<t;p+=1)r.deps[p].rv=Sr;if(e!==null)for(const p of e)p.rv=Sr;Hn!==null&&(i===null?i=Hn:i.push(...Hn))}return(n.f&Yi)!==0&&(n.f^=Yi),u}catch(p){return Cc(p)}finally{n.f^=ao,vn=e,Pn=t,Hn=i,ot=r,Gn=s,Xr(a),Kn=o,Mr=l}}function oh(n,e){let t=e.reactions;if(t!==null){var i=Vt.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&(e.f&$t)!==0&&(vn===null||!yi.call(vn,e))){var s=e;(s.f&Bn)!==0&&(s.f^=Bn,s.f&=~gr),lo(s),Oc(s),_a(s,0)}}function _a(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)oh(n,t[i])}function Is(n){var e=n.f;if((e&wi)===0){Gt(n,Yt);var t=gt,i=ga;gt=n,ga=!0;try{(e&(Ti|bc))!==0?sh(n):Kc(n),Zc(n);var r=cu(n);n.teardown=typeof r=="function"?r:null,n.wv=su;var s}finally{ga=i,gt=t}}}function O(n){var e=n.f,t=(e&$t)!==0;if(ot!==null&&!Kn){var i=gt!==null&&(gt.f&wi)!==0;if(!i&&(Gn===null||!yi.call(Gn,n))){var r=ot.deps;if((ot.f&ao)!==0)n.rv<Sr&&(n.rv=Sr,vn===null&&r!==null&&r[Pn]===n?Pn++:vn===null?vn=[n]:vn.push(n));else{(ot.deps??(ot.deps=[])).push(n);var s=n.reactions;s===null?n.reactions=[ot]:yi.call(s,ot)||s.push(ot)}}}if(Ji&&$i.has(n))return $i.get(n);if(t){var a=n;if(Ji){var o=a.v;return((a.f&Yt)===0&&a.reactions!==null||fu(a))&&(o=ho(a)),$i.set(a,o),o}var l=(a.f&Bn)===0&&!Kn&&ot!==null&&(ga||(ot.f&Bn)!==0),c=a.deps===null;Ls(a)&&(l&&(a.f|=Bn),Bc(a)),l&&!c&&uu(a)}if(Kt!=null&&Kt.has(n))return Kt.get(n);if((n.f&Yi)!==0)throw n.v;return n.v}function uu(n){if(n.deps!==null){n.f|=Bn;for(const e of n.deps)(e.reactions??(e.reactions=[])).push(n),(e.f&$t)!==0&&(e.f&Bn)===0&&uu(e)}}function fu(n){if(n.v===Zt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if($i.has(e)||(e.f&$t)!==0&&fu(e))return!0;return!1}function va(n){var e=Kn;try{return Kn=!0,n()}finally{Kn=e}}const lh=["touchstart","touchmove"];function ch(n){return lh.includes(n)}const du=new Set,xo=new Set;function uh(n,e,t,i={}){function r(s){if(i.capture||Us.call(e,s),!s.cancelBubble)return mo(()=>t==null?void 0:t.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?qi(()=>{e.addEventListener(n,r,i)}):e.addEventListener(n,r,i),r}function hu(n,e,t,i,r){var s={capture:i,passive:r},a=uh(n,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Yc(()=>{e.removeEventListener(n,a,s)})}function fh(n){for(var e=0;e<n.length;e++)du.add(n[e]);for(var t of xo)t(n)}let pu=null;function Us(n){var p;var e=this,t=e.ownerDocument,i=n.type,r=((p=n.composedPath)==null?void 0:p.call(n))||[],s=r[0]||n.target;pu=n;var a=0,o=pu===n&&n.__root;if(o){var l=r.indexOf(o);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(a=l)}if(s=r[a]||n.target,s!==e){od(n,"currentTarget",{configurable:!0,get(){return s||t}});var f=ot,u=gt;_n(null),Vn(null);try{for(var d,m=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var v=s["__"+i];v!=null&&(!s.disabled||n.target===s)&&v.call(s,n)}catch(h){d?m.push(h):d=h}if(n.cancelBubble||g===e||g===null)break;s=g}if(d){for(let h of m)queueMicrotask(()=>{throw h});throw d}}finally{n.__root=e,delete n.currentTarget,_n(f),Vn(u)}}}function mu(n){var e=document.createElement("template");return e.innerHTML=n.replaceAll("<!>","<!---->"),e.content}function xa(n,e){var t=gt;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function ze(n,e){var t=(e&Id)!==0,i=(e&Ud)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=mu(s?n:"<!>"+n),t||(r=Ki(r)));var a=i||Hc?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=Ki(a),l=a.lastChild;xa(o,l)}else xa(a,a);return a}}function Qi(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Zi();return n.append(e,t),xa(e,t),n}function Ie(n,e){n!==null&&n.before(e)}function Jt(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t+"")}function dh(n,e){return hh(n,e)}const $r=new Map;function hh(n,{target:e,anchor:t,props:i={},events:r,context:s,intro:a=!0}){Jd();var o=new Set,l=u=>{for(var d=0;d<u.length;d++){var m=u[d];if(!o.has(m)){o.add(m);var g=ch(m);e.addEventListener(m,Us,{passive:g});var v=$r.get(m);v===void 0?(document.addEventListener(m,Us,{passive:g}),$r.set(m,1)):$r.set(m,v+1)}}};l(fa(du)),xo.add(l);var c=void 0,f=nh(()=>{var u=t??e.appendChild(Zi());return Wd(u,{pending:()=>{}},d=>{if(s){pn({});var m=Cn;m.c=s}r&&(i.$$events=r),c=n(d,i)||{},s&&mn()}),()=>{var g;for(var d of o){e.removeEventListener(d,Us);var m=$r.get(d);--m===0?(document.removeEventListener(d,Us),$r.delete(d)):$r.set(d,m)}xo.delete(l),u!==t&&((g=u.parentNode)==null||g.removeChild(u))}});return So.set(c,f),c}let So=new WeakMap;function ph(n,e){const t=So.get(n);return t?(So.delete(n),t(e)):Promise.resolve()}class mh{constructor(e,t=!0){qn(this,"anchor");lt(this,ri,new Map);lt(this,Mi,new Map);lt(this,Un,new Map);lt(this,zr,new Set);lt(this,la,!0);lt(this,ca,()=>{var e=vt;if(Q(this,ri).has(e)){var t=Q(this,ri).get(e),i=Q(this,Mi).get(t);if(i)vo(i),Q(this,zr).delete(t);else{var r=Q(this,Un).get(t);r&&(Q(this,Mi).set(t,r.effect),Q(this,Un).delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[s,a]of Q(this,ri)){if(Q(this,ri).delete(s),s===e)break;const o=Q(this,Un).get(a);o&&(gn(o.effect),Q(this,Un).delete(a))}for(const[s,a]of Q(this,Mi)){if(s===t||Q(this,zr).has(s))continue;const o=()=>{if(Array.from(Q(this,ri).values()).includes(s)){var c=document.createDocumentFragment();nu(a,c),c.append(Zi()),Q(this,Un).set(s,{effect:a,fragment:c})}else gn(a);Q(this,zr).delete(s),Q(this,Mi).delete(s)};Q(this,la)||!i?(Q(this,zr).add(s),xr(a,o,!1)):o()}}});lt(this,eo,e=>{Q(this,ri).delete(e);const t=Array.from(Q(this,ri).values());for(const[i,r]of Q(this,Un))t.includes(i)||(gn(r.effect),Q(this,Un).delete(i))});this.anchor=e,st(this,la,t)}ensure(e,t){var i=vt,r=Xc();if(t&&!Q(this,Mi).has(e)&&!Q(this,Un).has(e))if(r){var s=document.createDocumentFragment(),a=Zi();s.append(a),Q(this,Un).set(e,{effect:zn(()=>t(a)),fragment:s})}else Q(this,Mi).set(e,zn(()=>t(this.anchor)));if(Q(this,ri).set(i,e),r){for(const[o,l]of Q(this,Mi))o===e?i.skipped_effects.delete(l):i.skipped_effects.add(l);for(const[o,l]of Q(this,Un))o===e?i.skipped_effects.delete(l.effect):i.skipped_effects.add(l.effect);i.oncommit(Q(this,ca)),i.ondiscard(Q(this,eo))}else Q(this,ca).call(this)}}ri=new WeakMap,Mi=new WeakMap,Un=new WeakMap,zr=new WeakMap,la=new WeakMap,ca=new WeakMap,eo=new WeakMap;function Lt(n,e,t=!1){var i=new mh(n),r=t?Hr:0;function s(a,o){i.ensure(a,o)}_o(()=>{var a=!1;e((o,l=!0)=>{a=!0,s(l,o)}),a||s(!1,null)},r)}function ai(n,e){return e}function gh(n,e,t){for(var i=[],r=e.length,s,a=e.length,o=0;o<r;o++){let u=e[o];xr(u,()=>{if(s){if(s.pending.delete(u),s.done.add(u),s.pending.size===0){var d=n.outrogroups;Mo(fa(s.done)),d.delete(s),d.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&t!==null;if(l){var c=t,f=c.parentNode;Qd(f),f.append(c),n.items.clear()}Mo(e,!l)}else s={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(s)}function Mo(n,e=!0){for(var t=0;t<n.length;t++)gn(n[t],e)}var gu;function oi(n,e,t,i,r,s=null){var a=n,o=new Map;{var l=n;a=l.appendChild(Zi())}var c=null,f=Fc(()=>{var p=t();return At(p)?p:p==null?[]:fa(p)}),u,d=!0;function m(){v.fallback=c,_h(v,u,a,e,i),c!==null&&(u.length===0?(c.f&Xi)===0?vo(c):(c.f^=Xi,Fs(c,null,a)):xr(c,()=>{c=null}))}var g=_o(()=>{u=O(f);for(var p=u.length,h=new Set,b=vt,M=Xc(),E=0;E<p;E+=1){var A=u[E],w=i(A,E),C=d?null:o.get(w);C?(C.v&&jr(C.v,A),C.i&&jr(C.i,E),M&&b.skipped_effects.delete(C.e)):(C=vh(o,d?a:gu??(gu=Zi()),A,w,E,r,e,t),d||(C.e.f|=Xi),o.set(w,C)),h.add(w)}if(p===0&&s&&!c&&(d?c=zn(()=>s(a)):(c=zn(()=>s(gu??(gu=Zi()))),c.f|=Xi)),!d)if(M){for(const[U,x]of o)h.has(U)||b.skipped_effects.add(x.e);b.oncommit(m),b.ondiscard(()=>{})}else m();O(f)}),v={effect:g,items:o,outrogroups:null,fallback:c};d=!1}function Ns(n){for(;n!==null&&(n.f&jn)===0;)n=n.next;return n}function _h(n,e,t,i,r){var U;var s=e.length,a=n.items,o=Ns(n.effect.first),l,c=null,f=[],u=[],d,m,g,v;for(v=0;v<s;v+=1){if(d=e[v],m=r(d,v),g=a.get(m).e,n.outrogroups!==null)for(const x of n.outrogroups)x.pending.delete(g),x.done.delete(g);if((g.f&Xi)!==0)if(g.f^=Xi,g===o)Fs(g,null,t);else{var p=c?c.next:o;g===n.effect.last&&(n.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),er(n,c,g),er(n,g,p),Fs(g,p,t),c=g,f=[],u=[],o=Ns(c.next);continue}if((g.f&Rn)!==0&&vo(g),g!==o){if(l!==void 0&&l.has(g)){if(f.length<u.length){var h=u[0],b;c=h.prev;var M=f[0],E=f[f.length-1];for(b=0;b<f.length;b+=1)Fs(f[b],h,t);for(b=0;b<u.length;b+=1)l.delete(u[b]);er(n,M.prev,E.next),er(n,c,M),er(n,E,h),o=h,c=E,v-=1,f=[],u=[]}else l.delete(g),Fs(g,o,t),er(n,g.prev,g.next),er(n,g,c===null?n.effect.first:c.next),er(n,c,g),c=g;continue}for(f=[],u=[];o!==null&&o!==g;)(l??(l=new Set)).add(o),u.push(o),o=Ns(o.next);if(o===null)continue}(g.f&Xi)===0&&f.push(g),c=g,o=Ns(g.next)}if(n.outrogroups!==null){for(const x of n.outrogroups)x.pending.size===0&&(Mo(fa(x.done)),(U=n.outrogroups)==null||U.delete(x));n.outrogroups.size===0&&(n.outrogroups=null)}if(o!==null||l!==void 0){var A=[];if(l!==void 0)for(g of l)(g.f&Rn)===0&&A.push(g);for(;o!==null;)(o.f&Rn)===0&&o!==n.fallback&&A.push(o),o=Ns(o.next);var w=A.length;if(w>0){var C=s===0?t:null;gh(n,A,C)}}}function vh(n,e,t,i,r,s,a,o){var l=(a&Ad)!==0?(a&Rd)===0?Zd(t,!1,!1):_r(t):null,c=(a&wd)!==0?_r(r):null;return{v:l,i:c,e:zn(()=>(s(e,l??t,c??r,o),()=>{n.delete(i)}))}}function Fs(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=e&&(e.f&Xi)===0?e.nodes.start:t;i!==null;){var a=Ds(i);if(s.before(i),i===r)return;i=a}}function er(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function xn(n,e,t=!1,i=!1,r=!1){var s=n,a="";Be(()=>{var o=gt;if(a!==(a=e()??"")&&(o.nodes!==null&&(Jc(o.nodes.start,o.nodes.end),o.nodes=null),a!=="")){var l=a+"";t?l=`<svg>${l}</svg>`:i&&(l=`<math>${l}</math>`);var c=mu(l);if((t||i)&&(c=Ki(c)),xa(Ki(c),c.lastChild),t||i)for(;Ki(c);)s.before(Ki(c));else s.before(c)}})}const _u=[...` 	
\r\f \v\uFEFF`];function xh(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r in t)if(t[r])i=i?i+" "+r:r;else if(i.length)for(var s=r.length,a=0;(a=i.indexOf(r,a))>=0;){var o=a+s;(a===0||_u.includes(i[a-1]))&&(o===i.length||_u.includes(i[o]))?i=(a===0?"":i.substring(0,a))+i.substring(o+1):a=o}}return i===""?null:i}function Sh(n,e){return n==null?null:String(n)}function li(n,e,t,i,r,s){var a=n.__className;if(a!==t||a===void 0){var o=xh(t,i,s);o==null?n.removeAttribute("class"):n.className=o,n.__className=t}else if(s&&r!==s)for(var l in s){var c=!!s[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return s}function Os(n,e,t,i){var r=n.__style;if(r!==e){var s=Sh(e);s==null?n.removeAttribute("style"):n.style.cssText=s,n.__style=e}return i}const Mh=Symbol("is custom element"),Eh=Symbol("is html");function Ot(n,e,t,i){var r=bh(n);r[e]!==(r[e]=t)&&(e==="loading"&&(n[pd]=t),t==null?n.removeAttribute(e):typeof t!="string"&&vu(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function bt(n,e,t){var i=ot,r=gt;_n(null),Vn(null);try{e!=="style"&&(Eo.has(n.getAttribute("is")||n.nodeName)||!customElements||customElements.get(n.getAttribute("is")||n.tagName.toLowerCase())?vu(n).includes(e):t&&typeof t=="object")?n[e]=t:Ot(n,e,t==null?t:String(t))}finally{_n(i),Vn(r)}}function bh(n){return n.__attributes??(n.__attributes={[Mh]:n.nodeName.includes("-"),[Eh]:n.namespaceURI===Nd})}var Eo=new Map;function vu(n){var e=n.getAttribute("is")||n.nodeName,t=Eo.get(e);if(t)return t;Eo.set(e,t=[]);for(var i,r=n,s=Element.prototype;s!==r;){i=ld(r);for(var a in i)i[a].set&&t.push(a);r=Sc(r)}return t}function xu(n,e){return n===e||(n==null?void 0:n[Cs])===e}function tr(n={},e,t,i){return ih(()=>{var r,s;return $c(()=>{r=s,s=[],va(()=>{n!==t(...s)&&(e(n,...s),r&&xu(t(...r),n)&&e(null,...r))})}),()=>{qi(()=>{s&&xu(t(...s),n)&&e(null,...s)})}}),n}let Sa=!1;function yh(n){var e=Sa;try{return Sa=!1,[n(),Sa]}finally{Sa=e}}function qe(n,e,t,i){var b;var r=(t&Dd)!==0,s=(t&Ld)!==0,a=i,o=!0,l=()=>(o&&(o=!1,a=s?va(i):i),a),c;if(r){var f=Cs in n||hd in n;c=((b=Gr(n,e))==null?void 0:b.set)??(f&&e in n?M=>n[e]=M:void 0)}var u,d=!1;r?[u,d]=yh(()=>n[e]):u=n[e],u===void 0&&i!==void 0&&(u=l(),c&&(Md(),c(u)));var m;if(m=()=>{var M=n[e];return M===void 0?l():(o=!0,M)},(t&Pd)===0)return m;if(c){var g=n.$$legacy;return(function(M,E){return arguments.length>0?((!E||g||d)&&c(E?m():M),M):m()})}var v=!1,p=((t&Cd)!==0?ma:Fc)(()=>(v=!1,m()));r&&O(p);var h=gt;return(function(M,E){if(arguments.length>0){const A=E?O(p):r?vr(M):M;return Dt(p,A),v=!0,a!==void 0&&(a=A),M}return Ji&&v||(h.f&wi)!==0?p.v:O(p)})}function nr(n){Cn===null&&md(),qc(()=>{const e=va(n);if(typeof e=="function")return e})}function Bt(n,e,t=[]){class i extends HTMLElement{constructor(){super(...arguments);qn(this,"_component",null)}connectedCallback(){if(this._component)return;this.innerHTML="";let a={};const o=this.getAttribute("id");if(o){const l=document.querySelector(`script[data-for="${o}"]`);if(l)try{a=JSON.parse(l.textContent||"{}"),l.remove()}catch(c){console.warn(`Failed to parse JSON props for #${o}:`,c)}}if(Object.keys(a).length===0)for(const l of t){const c=this.getAttribute(l);if(c!==null)try{a[l]=JSON.parse(c)}catch{a[l]=c}}this._component=dh(e,{target:this,props:a})}disconnectedCallback(){this._component&&(ph(this._component),this._component=null)}}customElements.define(n,i)}const Th="5";typeof window<"u"&&((nd=window.__svelte??(window.__svelte={})).v??(nd.v=new Set)).add(Th);var Ah=ze('<a class="link svelte-i67nal"><h3> </h3></a>'),wh=ze('<header data-nav-element="navbar" class="navbar svelte-i67nal"><div class="vignette svelte-i67nal"></div> <div class="inner svelte-i67nal"><button data-nav-element="overlay" aria-hidden="true" class="overlay svelte-i67nal"></button> <a aria-label="Go Back Home" class="logo svelte-i67nal">Austin Joseph</a> <ul role="list" class="drawer svelte-i67nal"><button type="button" class="drawer-close-hit svelte-i67nal" aria-label="Close navigation"></button> <li class="links svelte-i67nal"></li></ul> <button data-nav-element="menu" class="menu svelte-i67nal"><div class="marker svelte-i67nal"></div> <div>Menu</div></button></div></header>');function Rh(n,e){pn(e,!0);let t=qe(e,"rootpath",3,"/"),i=qe(e,"links",19,()=>[]),r=Ht("closed");function s(){Dt(r,"closed"),document.body.style.overflow="",window.lenis&&window.lenis.start()}function a(){Dt(r,O(r)==="open"?"closed":"open",!0),document.body.style.overflow=O(r)==="open"?"hidden":"",window.lenis&&(O(r)==="open"?window.lenis.stop():window.lenis.start())}nr(()=>(window.addEventListener("navigation:exit",s),()=>window.removeEventListener("navigation:exit",s)));var o=wh(),l=Je(oe(o),2),c=oe(l);c.__click=s;var f=Je(c,2),u=Je(f,2),d=oe(u);d.__click=s;var m=Je(d,2);oi(m,21,i,ai,(v,p)=>{var h=Ah(),b=oe(h),M=oe(b);Be(()=>{Ot(h,"href",O(p).href),Jt(M,O(p).label)}),Ie(v,h)});var g=Je(u,2);g.__click=a,Be(()=>{Ot(o,"data-nav-state",O(r)),Ot(f,"href",t())}),Ie(n,o),mn()}fh(["click"]);var Ch=ze('<img width="24" height="24" class="svelte-1hhfvj"/>'),Ph=ze("<span> </span>"),Dh=ze('<li><a class="link svelte-1hhfvj" target="_blank" rel="noopener noreferrer"><!></a></li>'),Lh=ze('<footer><div class="vignette svelte-1hhfvj"></div> <div class="component svelte-1hhfvj"><div class="inner svelte-1hhfvj"><div class="row copyright svelte-1hhfvj"><div class="u-text-secondary svelte-1hhfvj"><div class="text-sm svelte-1hhfvj">© <span> </span> Austin Joseph.</div></div></div> <div class="location svelte-1hhfvj"><span class="location-label svelte-1hhfvj">London, England</span> <span class="location-time svelte-1hhfvj"> </span></div> <ul role="list" class="row svelte-1hhfvj"></ul></div></div></footer>');function Ih(n,e){pn(e,!0);let t=qe(e,"fixed",3,!1),i=qe(e,"links",19,()=>[]);const r=new Date().getFullYear();let s=Ht("");function a(){Dt(s,new Date().toLocaleTimeString("en-GB",{timeZone:"Europe/London",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}).toUpperCase(),!0)}qc(()=>{a();const E=setInterval(a,1e3);return()=>clearInterval(E)});var o=Lh();let l;var c=Je(oe(o),2),f=oe(c),u=oe(f),d=oe(u),m=oe(d),g=Je(oe(m)),v=oe(g),p=Je(u,2),h=Je(oe(p),2),b=oe(h),M=Je(p,2);oi(M,21,i,ai,(E,A)=>{var w=Dh(),C=oe(w),U=oe(C);{var x=R=>{var z=Ch();Be(()=>{Ot(z,"src",O(A).icon),Ot(z,"alt",O(A).label)}),Ie(R,z)},y=R=>{var z=Ph(),I=oe(z);Be(()=>Jt(I,O(A).label)),Ie(R,z)};Lt(U,R=>{O(A).icon?R(x):R(y,!1)})}Be(()=>{Ot(C,"href",O(A).href),Ot(C,"title",O(A).label)}),Ie(E,w)}),Be(()=>{l=li(o,1,"footer svelte-1hhfvj",null,l,{abs:t()}),Jt(v,r),Jt(b,`[${O(s)??""}]`)}),Ie(n,o),mn()}var Uh=ze('<h4 class="svelte-l43pdu"><!></h4>'),Nh=ze('<div class="preloader svelte-l43pdu"><div class="preloader-canvas svelte-l43pdu"><c-drum></c-drum></div> <div class="preloader-footer svelte-l43pdu"><!> <div class="progress-row svelte-l43pdu"><div class="progress-bar svelte-l43pdu"><div class="progress-thumb svelte-l43pdu"></div></div> <p class="progress-pct svelte-l43pdu"> </p></div></div></div>',2);function Fh(n,e){pn(e,!0);let t=qe(e,"title",3,""),i=qe(e,"images",19,()=>[]),r=Ht(void 0),s=Ht(void 0),a=Ht(0);nr(()=>{const b=window.gsap;if(!b)return;document.body.style.cursor="wait";const M=5.16,E={value:0},A=()=>{Dt(a,E.value,!0)},w=b.timeline();return w.to(E,{value:12,duration:M*.15,ease:"power2.inOut",onUpdate:A}),w.to(E,{value:60,duration:M*.25,ease:"power2.inOut",onUpdate:A}),w.to(E,{value:84,duration:M*.3,ease:"power2.inOut",onUpdate:A}),w.to(E,{value:100,duration:M*.25,ease:"power2.inOut",onUpdate:A}),w.to(O(s),{opacity:0,duration:.25,ease:"power2.out",delay:.15}),w.to(O(r),{opacity:0,duration:.3,ease:"power2.out",onStart:()=>{document.body.style.cursor="",window.dispatchEvent(new CustomEvent("preloader:exit"))},onComplete:()=>{var U;const C=(U=O(r))==null?void 0:U.closest("c-preloader");C&&C.remove()}}),()=>{w.kill()}});var o=Nh(),l=oe(o),c=oe(l);Be(()=>bt(c,"images",JSON.stringify(i()))),li(c,1,"svelte-l43pdu");var f=Je(l,2),u=oe(f);{var d=b=>{var M=Uh(),E=oe(M);xn(E,t),Ie(b,M)};Lt(u,b=>{t()&&b(d)})}var m=Je(u,2),g=oe(m),v=oe(g),p=Je(g,2),h=oe(p);tr(f,b=>Dt(s,b),()=>O(s)),tr(o,b=>Dt(r,b),()=>O(r)),Be(b=>{Os(v,`width: ${O(a)??""}%`),Jt(h,`${b??""}%`)},[()=>Math.round(O(a))]),Ie(n,o),mn()}var Oh=ze('<a class="slot-item svelte-bahvkp" data-slot-item=""> </a>'),Bh=ze('<div class="slot svelte-bahvkp"><div class="slot-marker svelte-bahvkp"><div class="slot-marker-pip svelte-bahvkp"></div></div> <div class="slot-window svelte-bahvkp"><div class="slot-inner svelte-bahvkp" data-slot-inner=""></div></div></div>'),zh=ze('<main class="main svelte-bahvkp"><section class="section-hr svelte-bahvkp"><div class="container-xl svelte-bahvkp"><div class="inner svelte-bahvkp" data-canvas-map=""><div class="wrap svelte-bahvkp"><div class="text svelte-bahvkp"><!> <div class="heading svelte-bahvkp"><div class="eyebrow svelte-bahvkp"><div></div> <div class="eyebrow-text svelte-bahvkp"> </div></div> <h1 class="svelte-bahvkp"><!></h1> <c-button></c-button></div></div></div> <div class="track svelte-bahvkp"><c-strip></c-strip> <!></div></div></div></section></main>',2);function Vh(n,e){pn(e,!0);let t=qe(e,"eyebrow",3,"Available for freelance work"),i=qe(e,"availabilitystatus",3,"available"),r=qe(e,"title",3,""),s=qe(e,"buttonlabel",3,"Get in touch"),a=qe(e,"buttonhref",3,"#"),o=qe(e,"projects",19,()=>[]),l,c;const f="strip-"+Math.random().toString(36).slice(2,8),u=32,d=u,m=.35,g=si(()=>o().length),v=si(()=>i()==="hold"||i()==="on_hold"?"hold":i()==="blocked"||i()==="not_accepting"?"blocked":"available"),p=si(()=>Array.from({length:3},()=>o()).flat());let h=-1,b=0;nr(()=>{if(O(g)===0)return;c=l.closest(".section-hr");const Se=c.querySelector("[data-slot-inner]"),Me=c.querySelectorAll("[data-slot-item]");if(!Se||!Me.length)return;b=O(g);function Oe(pe){return-pe*u+d}gsap.set(Se,{y:Oe(b)}),Xe(b);function Xe(pe){Me.forEach((Ee,fe)=>{const we=fe-pe;if(Math.abs(we)>3){gsap.set(Ee,{opacity:0});return}let He=0;we===-1?He=.2:we===0?He=1:we===1?He=.4:we===2?He=.15:we===3&&(He=.05),gsap.to(Ee,{opacity:He,duration:m,ease:"power2.out",overwrite:!0})})}function W(){const pe=(b%O(g)+O(g))%O(g),Ee=O(g)+pe;b!==Ee&&(gsap.killTweensOf(Se),gsap.set(Se,{y:Oe(Ee)}),b=Ee)}function ne(pe){const Ee=pe.detail,fe=Ee==null?void 0:Ee.index;if(fe==null||O(g)===0)return;if(h===-1){h=fe,b=O(g)+fe,gsap.set(Se,{y:Oe(b)}),Xe(b);return}let we=fe-h;we>O(g)/2&&(we-=O(g)),we<-O(g)/2&&(we+=O(g)),h=fe,(b+we<0||b+we>=O(g)*3)&&W(),b+=we,gsap.to(Se,{y:Oe(b),duration:m,ease:"power2.out",overwrite:!0}),Xe(b)}return l==null||l.addEventListener("strip:update",ne),()=>{l==null||l.removeEventListener("strip:update",ne),gsap.killTweensOf(Se),gsap.killTweensOf(Me)}});var M=zh(),E=oe(M),A=oe(E),w=oe(A),C=oe(w),U=oe(C),x=oe(U);{var y=Se=>{var Me=Bh(),Oe=oe(Me);Os(Oe,"height: 32px; margin-top: 32px");var Xe=Je(Oe,2),W=oe(Xe);oi(W,21,()=>O(p),ai,(ne,pe)=>{var Ee=Oh();Os(Ee,"height: 32px");var fe=oe(Ee);Be(()=>{Ot(Ee,"href",O(pe).url),Jt(fe,O(pe).title)}),Ie(ne,Ee)}),Ie(Se,Me)};Lt(x,Se=>{o().length&&Se(y)})}var R=Je(x,2),z=oe(R),I=oe(z),G=Je(I,2),q=oe(G),F=Je(z,2),V=oe(F);xn(V,r);var Z=Je(F,2);Be(()=>bt(Z,"label",s())),Be(()=>bt(Z,"href",a())),bt(Z,"active",!0);var le=Je(C,2),ee=oe(le);Be(()=>bt(ee,"id",f));var ae=Je(ee,2);xn(ae,()=>`<script type="application/json" data-for="${f}">${JSON.stringify({projects:o()}).replace(/<\//g,"<\\/")}<\/script>`),tr(le,Se=>l=Se,()=>l),Be(()=>{li(I,1,`marker is-${O(v)}`,"svelte-bahvkp"),Jt(q,t())}),Ie(n,M),mn()}var Gh=ze("<c-helix></c-helix> <!>",3),Hh=ze("<b-header></b-header> <!>",3),kh=ze("<b-text></b-text> <!>",3),Wh=ze('<section class="section ab svelte-1ijkaem"><div class="container-xl py-lg"><div class="l-inner svelte-1ijkaem"><div class="col-img svelte-1ijkaem"><!></div> <div class="col-spacer svelte-1ijkaem" aria-hidden="true"></div> <div class="col-body svelte-1ijkaem"></div></div></div></section>');function Xh(n,e){pn(e,!0);let t=qe(e,"images",19,()=>[]),i=qe(e,"items",19,()=>[]);var r=Wh(),s=oe(r),a=oe(s),o=oe(a),l=oe(o);{var c=u=>{const d=si(()=>"ab-helix");var m=Gh(),g=cn(m);bt(g,"id",O(d));var v=Je(g,2);xn(v,()=>`<script type="application/json" data-for="${O(d)}">${JSON.stringify({images:t()})}<\/script>`),Ie(u,m)};Lt(l,u=>{t().length&&u(c)})}var f=Je(o,4);oi(f,21,i,ai,(u,d)=>{const m=si(()=>`ab-${O(d).id}`);var g=Qi(),v=cn(g);{var p=b=>{var M=Hh(),E=cn(M);Be(()=>bt(E,"id",O(m)));var A=Je(E,2);xn(A,()=>`<script type="application/json" data-for="${O(m)}">${JSON.stringify({title:O(d).title,description:O(d).description,layout:O(d).layout})}<\/script>`),Ie(b,M)},h=b=>{var M=Qi(),E=cn(M);{var A=w=>{var C=kh(),U=cn(C);Be(()=>bt(U,"id",O(m)));var x=Je(U,2);xn(x,()=>`<script type="application/json" data-for="${O(m)}">${JSON.stringify({columns:O(d).columns,items:O(d).items})}<\/script>`),Ie(w,C)};Lt(E,w=>{O(d).type==="b-text"&&w(A)},!0)}Ie(b,M)};Lt(v,b=>{O(d).type==="b-header"?b(p):b(h,!1)})}Ie(u,g)}),Ie(n,r),mn()}var Yh=ze("<b-header></b-header> <!>",3),qh=ze("<b-text></b-text> <!>",3),jh=ze("<b-img></b-img> <!>",3),$h=ze("<b-grid></b-grid> <!>",3),Zh=ze('<section class="section tx svelte-12lz2p6"><div class="container-xl py-lg"><div class="l-inner svelte-12lz2p6"><div class="col-spacer svelte-12lz2p6" aria-hidden="true"></div> <div class="col-body svelte-12lz2p6"></div></div></div></section>');function Kh(n,e){let t=qe(e,"items",19,()=>[]);var i=Zh(),r=oe(i),s=oe(r),a=Je(oe(s),2);oi(a,21,t,ai,(o,l)=>{const c=si(()=>`tx-${O(l).id}`);var f=Qi(),u=cn(f);{var d=g=>{var v=Yh(),p=cn(v);Be(()=>bt(p,"id",O(c)));var h=Je(p,2);xn(h,()=>`<script type="application/json" data-for="${O(c)}">${JSON.stringify({title:O(l).title,description:O(l).description,layout:O(l).layout})}<\/script>`),Ie(g,v)},m=g=>{var v=Qi(),p=cn(v);{var h=M=>{var E=qh(),A=cn(E);Be(()=>bt(A,"id",O(c)));var w=Je(A,2);xn(w,()=>`<script type="application/json" data-for="${O(c)}">${JSON.stringify({columns:O(l).columns,items:O(l).items})}<\/script>`),Ie(M,E)},b=M=>{var E=Qi(),A=cn(E);{var w=U=>{var x=jh(),y=cn(x);Be(()=>bt(y,"id",O(c)));var R=Je(y,2);xn(R,()=>`<script type="application/json" data-for="${O(c)}">${JSON.stringify({images:O(l).images,spacing:O(l).spacing})}<\/script>`),Ie(U,x)},C=U=>{var x=Qi(),y=cn(x);{var R=z=>{var I=$h(),G=cn(I);Be(()=>bt(G,"id",O(c)));var q=Je(G,2);xn(q,()=>`<script type="application/json" data-for="${O(c)}">${JSON.stringify({columns:O(l).columns,items:O(l).items})}<\/script>`),Ie(z,I)};Lt(y,z=>{O(l).type==="b-grid"&&z(R)},!0)}Ie(U,x)};Lt(A,U=>{O(l).type==="b-img"?U(w):U(C,!1)},!0)}Ie(M,E)};Lt(p,M=>{O(l).type==="b-text"?M(h):M(b,!1)},!0)}Ie(g,v)};Lt(u,g=>{O(l).type==="b-header"?g(d):g(m,!1)})}Ie(o,f)}),Ie(n,i)}var Jh=ze('<div class="message svelte-n2mvd"><p class="svelte-n2mvd"> </p></div>'),Qh=ze('<div class="section svelte-n2mvd"><div class="container svelte-n2mvd"><div class="inner svelte-n2mvd"><div class="heading svelte-n2mvd"><div class="title svelte-n2mvd"><h1 class="svelte-n2mvd"> </h1></div> <!></div> <c-button></c-button></div></div></div>',2);function ep(n,e){let t=qe(e,"title",3,"page not found."),i=qe(e,"message",3,""),r=qe(e,"buttonlabel",3,"Go back Home"),s=qe(e,"buttonhref",3,"/");var a=Qh(),o=oe(a),l=oe(o),c=oe(l),f=oe(c),u=oe(f),d=oe(u),m=Je(f,2);{var g=p=>{var h=Jh(),b=oe(h),M=oe(b);Be(()=>Jt(M,i())),Ie(p,h)};Lt(m,p=>{i()&&p(g)})}var v=Je(c,2);Be(()=>bt(v,"href",s())),Be(()=>bt(v,"label",r())),bt(v,"active","true"),Be(()=>Jt(d,t())),Ie(n,a)}var tp=ze('<div class="message svelte-1cu9g3s"><p class="svelte-1cu9g3s"> </p></div>'),np=ze('<div class="section svelte-1cu9g3s"><div class="container svelte-1cu9g3s"><div class="inner svelte-1cu9g3s"><div class="heading svelte-1cu9g3s"><div class="title svelte-1cu9g3s"><h1 class="svelte-1cu9g3s">coming soon.</h1></div> <!></div> <c-button></c-button></div></div></div>',2);function ip(n,e){let t=qe(e,"message",3,"Still in progress. One day I'll stop overthinking it, ship something minimal, and pretend it was always the plan - but not today."),i=qe(e,"buttonlabel",3,"Go back Home"),r=qe(e,"buttonhref",3,"/");var s=np(),a=oe(s),o=oe(a),l=oe(o),c=Je(oe(l),2);{var f=d=>{var m=tp(),g=oe(m),v=oe(g);Be(()=>Jt(v,t())),Ie(d,m)};Lt(c,d=>{t()&&d(f)})}var u=Je(l,2);Be(()=>bt(u,"href",r())),Be(()=>bt(u,"label",i())),bt(u,"active","true"),Ie(n,s)}var rp=ze('<div><div class="motion svelte-er4ugn"><div class="glow svelte-er4ugn"></div> <div class="mask svelte-er4ugn"><div class="cone svelte-er4ugn"></div></div></div> <div class="orb svelte-er4ugn"><div class="border svelte-er4ugn"></div></div> <a class="wrapper svelte-er4ugn"><div class="label svelte-er4ugn"> </div></a></div>');function sp(n,e){let t=qe(e,"href",3,"#"),i=qe(e,"label",3,"Button"),r=qe(e,"active",3,!1);var s=rp(),a=Je(oe(s),4),o=oe(a),l=oe(o);Be(()=>{li(s,1,`button ${r()?"button-active":""}`,"svelte-er4ugn"),Ot(a,"href",t()),Jt(l,i())}),Ie(n,s)}var ap=ze('<img alt="" loading="eager" class="svelte-ag87v9"/>'),op=ze('<a class="indexcard svelte-ag87v9"><div class="bg svelte-ag87v9"><!></div> <div class="text svelte-ag87v9"><div class="heading svelte-ag87v9"><h4> </h4></div></div></a>');function lp(n,e){let t=qe(e,"href",3,"#"),i=qe(e,"title",3,""),r=qe(e,"backgroundimage",3,"");var s=op(),a=oe(s),o=oe(a);{var l=m=>{var g=ap();Be(()=>Ot(g,"src",r())),Ie(m,g)};Lt(o,m=>{r()&&m(l)})}var c=Je(a,2),f=oe(c),u=oe(f),d=oe(u);Be(()=>{Ot(s,"href",t()),Jt(d,i())}),Ie(n,s)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bo="182",cp=0,Su=1,up=2,Ma=1,fp=2,Bs=3,ir=0,Sn=1,Mn=2,Pi=0,Zr=1,Mu=2,Eu=3,bu=4,dp=5,Er=100,hp=101,pp=102,mp=103,gp=104,_p=200,vp=201,xp=202,Sp=203,yo=204,To=205,Mp=206,Ep=207,bp=208,yp=209,Tp=210,Ap=211,wp=212,Rp=213,Cp=214,Ao=0,wo=1,Ro=2,Kr=3,Co=4,Po=5,Do=6,Lo=7,yu=0,Pp=1,Dp=2,un=0,Tu=1,Au=2,wu=3,Ru=4,Cu=5,Pu=6,Du=7,Lu=300,br=301,Jr=302,Io=303,Uo=304,Ea=306,No=1e3,Di=1001,Fo=1002,Qt=1003,Lp=1004,ba=1005,yt=1006,Oo=1007,yr=1008,Dn=1009,Iu=1010,Uu=1011,zs=1012,Bo=1013,ci=1014,ui=1015,Li=1016,zo=1017,Vo=1018,Vs=1020,Nu=35902,Fu=35899,Ou=1021,Bu=1022,Jn=1023,Ii=1026,Tr=1027,zu=1028,Go=1029,Qr=1030,Ho=1031,ko=1033,ya=33776,Ta=33777,Aa=33778,wa=33779,Wo=35840,Xo=35841,Yo=35842,qo=35843,jo=36196,$o=37492,Zo=37496,Ko=37488,Jo=37489,Qo=37490,el=37491,tl=37808,nl=37809,il=37810,rl=37811,sl=37812,al=37813,ol=37814,ll=37815,cl=37816,ul=37817,fl=37818,dl=37819,hl=37820,pl=37821,ml=36492,gl=36494,_l=36495,vl=36283,xl=36284,Sl=36285,Ml=36286,Ip=3200,Vu=0,Up=1,rr="",en="srgb",es="srgb-linear",Ra="linear",xt="srgb",ts=7680,Gu=519,Np=512,Fp=513,Op=514,El=515,Bp=516,zp=517,bl=518,Vp=519,Hu=35044,ku="300 es",fi=2e3,Ca=2001;function Wu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gp(){const n=Gs("canvas");return n.style.display="block",n}const Xu={};function Yu(...n){const e="THREE."+n.shift();console.log(e,...n)}function $e(...n){const e="THREE."+n.shift();console.warn(e,...n)}function ft(...n){const e="THREE."+n.shift();console.error(e,...n)}function Hs(...n){const e=n.join(" ");e in Xu||(Xu[e]=!0,$e(...n))}function Hp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yl=Math.PI/180,Tl=180/Math.PI;function ks(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function kp(n,e){return(n%e+e)%e}function Al(n,e,t){return(1-t)*n+t*e}function Ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function En(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],u=i[r+3],d=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==m||f!==g){let p=l*d+c*m+f*g+u*v;p<0&&(d=-d,m=-m,g=-g,v=-v,p=-p);let h=1-o;if(p<.9995){const b=Math.acos(p),M=Math.sin(b);h=Math.sin(h*b)/M,o=Math.sin(o*b)/M,l=l*h+d*o,c=c*h+m*o,f=f*h+g*o,u=u*h+v*o}else{l=l*h+d*o,c=c*h+m*o,f=f*h+g*o,u=u*h+v*o;const b=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=b,c*=b,f*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],u=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+f*u+l*m-c*d,e[t+1]=l*g+f*d+c*u-o*m,e[t+2]=c*g+f*m+o*d-l*u,e[t+3]=f*g-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),u=o(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*f*u+c*m*g,this._y=c*m*u-d*f*g,this._z=c*f*g+d*m*u,this._w=c*f*u-d*m*g;break;case"YXZ":this._x=d*f*u+c*m*g,this._y=c*m*u-d*f*g,this._z=c*f*g-d*m*u,this._w=c*f*u+d*m*g;break;case"ZXY":this._x=d*f*u-c*m*g,this._y=c*m*u+d*f*g,this._z=c*f*g+d*m*u,this._w=c*f*u-d*m*g;break;case"ZYX":this._x=d*f*u-c*m*g,this._y=c*m*u+d*f*g,this._z=c*f*g-d*m*u,this._w=c*f*u+d*m*g;break;case"YZX":this._x=d*f*u+c*m*g,this._y=c*m*u+d*f*g,this._z=c*f*g-d*m*u,this._w=c*f*u-d*m*g;break;case"XZY":this._x=d*f*u-c*m*g,this._y=c*m*u-d*f*g,this._z=c*f*g+d*m*u,this._w=c*f*u+d*m*g;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],u=t[10],d=i+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*f,this.y=i+l*f+o*c-s*u,this.z=r+l*u+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wl.copy(this).projectOnVector(e),this.sub(wl)}reflect(e){return this.sub(wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wl=new H,qu=new Xs;class Qe{constructor(e,t,i,r,s,a,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],u=i[7],d=i[2],m=i[5],g=i[8],v=r[0],p=r[3],h=r[6],b=r[1],M=r[4],E=r[7],A=r[2],w=r[5],C=r[8];return s[0]=a*v+o*b+l*A,s[3]=a*p+o*M+l*w,s[6]=a*h+o*E+l*C,s[1]=c*v+f*b+u*A,s[4]=c*p+f*M+u*w,s[7]=c*h+f*E+u*C,s[2]=d*v+m*b+g*A,s[5]=d*p+m*M+g*w,s[8]=d*h+m*E+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=f*a-o*c,d=o*l-f*s,m=c*s-a*l,g=t*u+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(r*c-f*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(f*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Rl.makeScale(e,t)),this}rotate(e){return this.premultiply(Rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rl=new Qe,ju=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$u=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wp(){const n={enabled:!0,workingColorSpace:es,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(r.r=is(r.r),r.g=is(r.g),r.b=is(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?Ra:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[es]:{primaries:e,whitePoint:i,transfer:Ra,toXYZ:ju,fromXYZ:$u,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:ju,fromXYZ:$u,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}const dt=Wp();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rs;class Xp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rs===void 0&&(rs=Gs("canvas")),rs.width=e.width,rs.height=e.height;const r=rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ui(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yp=0;class Cl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Pl(r[a].image)):s.push(Pl(r[a]))}else s=Pl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let qp=0;const Dl=new H;class nn extends ns{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=Di,r=Di,s=yt,a=yr,o=Jn,l=Dn,c=nn.DEFAULT_ANISOTROPY,f=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=ks(),this.name="",this.source=new Cl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dl).x}get height(){return this.source.getSize(Dl).y}get depth(){return this.source.getSize(Dl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case No:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case No:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null,nn.DEFAULT_MAPPING=Lu,nn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],f=l[4],u=l[8],d=l[1],m=l[5],g=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(f-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,E=(m+1)/2,A=(h+1)/2,w=(f+d)/4,C=(u+v)/4,U=(g+p)/4;return M>E&&M>A?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=C/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=w/r,s=U/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=U/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-f)*(d-f));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-v)/b,this.z=(d-f)/b,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jp extends ns{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new nn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Cl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends jp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zu extends nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $p extends nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ys{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(s,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),Da.subVectors(this.max,qs),ss.subVectors(e.a,qs),as.subVectors(e.b,qs),os.subVectors(e.c,qs),sr.subVectors(as,ss),ar.subVectors(os,as),Ar.subVectors(ss,os);let t=[0,-sr.z,sr.y,0,-ar.z,ar.y,0,-Ar.z,Ar.y,sr.z,0,-sr.x,ar.z,0,-ar.x,Ar.z,0,-Ar.x,-sr.y,sr.x,0,-ar.y,ar.x,0,-Ar.y,Ar.x,0];return!Ll(t,ss,as,os,Da)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,ss,as,os,Da))?!1:(La.crossVectors(sr,ar),t=[La.x,La.y,La.z],Ll(t,ss,as,os,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new H,new H,new H,new H,new H,new H,new H,new H],Qn=new H,Pa=new Ys,ss=new H,as=new H,os=new H,sr=new H,ar=new H,Ar=new H,qs=new H,Da=new H,La=new H,wr=new H;function Ll(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wr.fromArray(n,s);const o=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=t.dot(wr),f=i.dot(wr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Zp=new Ys,js=new H,Il=new H;class Ul{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(Il)),this.expandByPoint(js.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fi=new H,Nl=new H,Ia=new H,or=new H,Fl=new H,Ua=new H,Ol=new H;class Ku{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Nl.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),or.copy(this.origin).sub(Nl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ia),o=or.dot(this.direction),l=-or.dot(Ia),c=or.lengthSq(),f=Math.abs(1-a*a);let u,d,m,g;if(f>0)if(u=a*l-o,d=a*o-l,g=s*f,u>=0)if(d>=-g)if(d<=g){const v=1/f;u*=v,d*=v,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Nl).addScaledVector(Ia,d),m}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),r=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,r,s){Fl.subVectors(t,e),Ua.subVectors(i,e),Ol.crossVectors(Fl,Ua);let a=this.direction.dot(Ol),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;or.subVectors(this.origin,e);const l=o*this.direction.dot(Ua.crossVectors(or,Ua));if(l<0)return null;const c=o*this.direction.dot(Fl.cross(or));if(c<0||l+c>a)return null;const f=-o*or.dot(Ol);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,i,r,s,a,o,l,c,f,u,d,m,g,v,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,f,u,d,m,g,v,p)}set(e,t,i,r,s,a,o,l,c,f,u,d,m,g,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=u,h[14]=d,h[3]=m,h[7]=g,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),a=1/ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*f,m=a*u,g=o*f,v=o*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*f,m=l*u,g=c*f,v=c*u;t[0]=d+v*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=m*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*f,m=l*u,g=c*f,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*f,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*f,m=a*u,g=o*f,v=o*u;t[0]=l*f,t[4]=g*c-m,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*f,t[4]=v-d*u,t[8]=g*u+m,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=m*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=d*u+v,t[5]=a*f,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*f,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kp,e,Jp)}lookAt(e,t,i){const r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),lr.crossVectors(i,Ln),lr.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),lr.crossVectors(i,Ln)),lr.normalize(),Na.crossVectors(Ln,lr),r[0]=lr.x,r[4]=Na.x,r[8]=Ln.x,r[1]=lr.y,r[5]=Na.y,r[9]=Ln.y,r[2]=lr.z,r[6]=Na.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],u=i[5],d=i[9],m=i[13],g=i[2],v=i[6],p=i[10],h=i[14],b=i[3],M=i[7],E=i[11],A=i[15],w=r[0],C=r[4],U=r[8],x=r[12],y=r[1],R=r[5],z=r[9],I=r[13],G=r[2],q=r[6],F=r[10],V=r[14],Z=r[3],le=r[7],ee=r[11],ae=r[15];return s[0]=a*w+o*y+l*G+c*Z,s[4]=a*C+o*R+l*q+c*le,s[8]=a*U+o*z+l*F+c*ee,s[12]=a*x+o*I+l*V+c*ae,s[1]=f*w+u*y+d*G+m*Z,s[5]=f*C+u*R+d*q+m*le,s[9]=f*U+u*z+d*F+m*ee,s[13]=f*x+u*I+d*V+m*ae,s[2]=g*w+v*y+p*G+h*Z,s[6]=g*C+v*R+p*q+h*le,s[10]=g*U+v*z+p*F+h*ee,s[14]=g*x+v*I+p*V+h*ae,s[3]=b*w+M*y+E*G+A*Z,s[7]=b*C+M*R+E*q+A*le,s[11]=b*U+M*z+E*F+A*ee,s[15]=b*x+M*I+E*V+A*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],u=e[6],d=e[10],m=e[14],g=e[3],v=e[7],p=e[11],h=e[15],b=l*m-c*d,M=o*m-c*u,E=o*d-l*u,A=a*m-c*f,w=a*d-l*f,C=a*u-o*f;return t*(v*b-p*M+h*E)-i*(g*b-p*A+h*w)+r*(g*M-v*A+h*C)-s*(g*E-v*w+p*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=e[9],d=e[10],m=e[11],g=e[12],v=e[13],p=e[14],h=e[15],b=u*p*c-v*d*c+v*l*m-o*p*m-u*l*h+o*d*h,M=g*d*c-f*p*c-g*l*m+a*p*m+f*l*h-a*d*h,E=f*v*c-g*u*c+g*o*m-a*v*m-f*o*h+a*u*h,A=g*u*l-f*v*l-g*o*d+a*v*d+f*o*p-a*u*p,w=t*b+i*M+r*E+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=b*C,e[1]=(v*d*s-u*p*s-v*r*m+i*p*m+u*r*h-i*d*h)*C,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*h+i*l*h)*C,e[3]=(u*l*s-o*d*s-u*r*c+i*d*c+o*r*m-i*l*m)*C,e[4]=M*C,e[5]=(f*p*s-g*d*s+g*r*m-t*p*m-f*r*h+t*d*h)*C,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*h-t*l*h)*C,e[7]=(a*d*s-f*l*s+f*r*c-t*d*c-a*r*m+t*l*m)*C,e[8]=E*C,e[9]=(g*u*s-f*v*s-g*i*m+t*v*m+f*i*h-t*u*h)*C,e[10]=(a*v*s-g*o*s+g*i*c-t*v*c-a*i*h+t*o*h)*C,e[11]=(f*o*s-a*u*s-f*i*c+t*u*c+a*i*m-t*o*m)*C,e[12]=A*C,e[13]=(f*v*r-g*u*r+g*i*d-t*v*d-f*i*p+t*u*p)*C,e[14]=(g*o*r-a*v*r-g*i*l+t*v*l+a*i*p-t*o*p)*C,e[15]=(a*u*r-f*o*r+f*i*l-t*u*l-a*i*d+t*o*d)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,u=o+o,d=s*c,m=s*f,g=s*u,v=a*f,p=a*u,h=o*u,b=l*c,M=l*f,E=l*u,A=i.x,w=i.y,C=i.z;return r[0]=(1-(v+h))*A,r[1]=(m+E)*A,r[2]=(g-M)*A,r[3]=0,r[4]=(m-E)*w,r[5]=(1-(d+h))*w,r[6]=(p+b)*w,r[7]=0,r[8]=(g+M)*C,r[9]=(p-b)*C,r[10]=(1-(d+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=ls.set(r[0],r[1],r[2]).length();const a=ls.set(r[4],r[5],r[6]).length(),o=ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),ei.copy(this);const c=1/s,f=1/a,u=1/o;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=f,ei.elements[5]*=f,ei.elements[6]*=f,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,t.setFromRotationMatrix(ei),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=fi,l=!1){const c=this.elements,f=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),m=(i+r)/(i-r);let g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===fi)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Ca)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=fi,l=!1){const c=this.elements,f=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===fi)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===Ca)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ls=new H,ei=new Rt,Kp=new H(0,0,0),Jp=new H(1,1,1),lr=new H,Na=new H,Ln=new H,Ju=new Rt,Qu=new Xs;class hi{constructor(e=0,t=0,i=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],u=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class Bl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qp=0;const ef=new H,cs=new Xs,Oi=new Rt,Fa=new H,$s=new H,em=new H,tm=new Xs,tf=new H(1,0,0),nf=new H(0,1,0),rf=new H(0,0,1),sf={type:"added"},nm={type:"removed"},us={type:"childadded",child:null},zl={type:"childremoved",child:null};class rn extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new H,t=new hi,i=new Xs,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Qe}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(tf,e)}rotateY(e){return this.rotateOnAxis(nf,e)}rotateZ(e){return this.rotateOnAxis(rf,e)}translateOnAxis(e,t){return ef.copy(e).applyQuaternion(this.quaternion),this.position.add(ef.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tf,e)}translateY(e){return this.translateOnAxis(nf,e)}translateZ(e){return this.translateOnAxis(rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fa.copy(e):Fa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt($s,Fa,this.up):Oi.lookAt(Fa,$s,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(Oi),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sf),us.child=e,this.dispatchEvent(us),us.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nm),zl.child=e,this.dispatchEvent(zl),zl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sf),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,em),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,tm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new H(0,1,0),rn.DEFAULT_MATRIX_AUTO_UPDATE=!0,rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new H,Bi=new H,Vl=new H,zi=new H,fs=new H,ds=new H,af=new H,Gl=new H,Hl=new H,kl=new H,Wl=new It,Xl=new It,Yl=new It;class ni{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ti.subVectors(e,t),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ti.subVectors(r,t),Bi.subVectors(i,t),Vl.subVectors(e,t);const a=ti.dot(ti),o=ti.dot(Bi),l=ti.dot(Vl),c=Bi.dot(Bi),f=Bi.dot(Vl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,m=(c*l-o*f)*d,g=(a*f-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zi.x),l.addScaledVector(a,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Wl.setScalar(0),Xl.setScalar(0),Yl.setScalar(0),Wl.fromBufferAttribute(e,t),Xl.fromBufferAttribute(e,i),Yl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wl,s.x),a.addScaledVector(Xl,s.y),a.addScaledVector(Yl,s.z),a}static isFrontFacing(e,t,i,r){return ti.subVectors(i,t),Bi.subVectors(e,t),ti.cross(Bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ti.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;fs.subVectors(r,i),ds.subVectors(s,i),Gl.subVectors(e,i);const l=fs.dot(Gl),c=ds.dot(Gl);if(l<=0&&c<=0)return t.copy(i);Hl.subVectors(e,r);const f=fs.dot(Hl),u=ds.dot(Hl);if(f>=0&&u<=f)return t.copy(r);const d=l*u-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(i).addScaledVector(fs,a);kl.subVectors(e,s);const m=fs.dot(kl),g=ds.dot(kl);if(g>=0&&m<=g)return t.copy(s);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ds,o);const p=f*g-m*u;if(p<=0&&u-f>=0&&m-g>=0)return af.subVectors(s,r),o=(u-f)/(u-f+(m-g)),t.copy(r).addScaledVector(af,o);const h=1/(p+v+d);return a=v*h,o=d*h,t.copy(i).addScaledVector(fs,a).addScaledVector(ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function ql(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=kp(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ql(a,s,e+1/3),this.g=ql(a,s,e),this.b=ql(a,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=en){function i(s){s!==void 0&&parseFloat(s)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const i=of[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return dt.workingToColorSpace(sn.copy(this),e),Math.round(ct(sn.r*255,0,255))*65536+Math.round(ct(sn.g*255,0,255))*256+Math.round(ct(sn.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(sn.copy(this),t);const i=sn.r,r=sn.g,s=sn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=f<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=en){dt.workingToColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,r=sn.b;return e!==en?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(Oa);const i=Al(cr.h,Oa.h,t),r=Al(cr.s,Oa.s,t),s=Al(cr.l,Oa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new pt;pt.NAMES=of;let im=0;class Zs extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=Zr,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=To,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yo&&(i.blendSrc=this.blendSrc),this.blendDst!==To&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lf extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new H,Ba=new Ke;let rm=0;class pi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hu,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),r=En(r,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hu&&(e.usage=this.usage),e}}class cf extends pi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class uf extends pi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vi extends pi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sm=0;const kn=new Rt,jl=new rn,hs=new H,In=new Ys,Ks=new Ys,qt=new H;class Gi extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wu(e)?uf:cf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return jl.lookAt(e),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ul);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(In.min,Ks.min),In.expandByPoint(qt),qt.addVectors(In.max,Ks.max),In.expandByPoint(qt)):(In.expandByPoint(Ks.min),In.expandByPoint(Ks.max))}In.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)qt.fromBufferAttribute(o,c),l&&(hs.fromBufferAttribute(e,c),qt.add(hs)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new H,l[U]=new H;const c=new H,f=new H,u=new H,d=new Ke,m=new Ke,g=new Ke,v=new H,p=new H;function h(U,x,y){c.fromBufferAttribute(i,U),f.fromBufferAttribute(i,x),u.fromBufferAttribute(i,y),d.fromBufferAttribute(s,U),m.fromBufferAttribute(s,x),g.fromBufferAttribute(s,y),f.sub(c),u.sub(c),m.sub(d),g.sub(d);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(v.copy(f).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(R),p.copy(u).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(R),o[U].add(v),o[x].add(v),o[y].add(v),l[U].add(p),l[x].add(p),l[y].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,x=b.length;U<x;++U){const y=b[U],R=y.start,z=y.count;for(let I=R,G=R+z;I<G;I+=3)h(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new H,E=new H,A=new H,w=new H;function C(U){A.fromBufferAttribute(r,U),w.copy(A);const x=o[U];M.copy(x),M.sub(A.multiplyScalar(A.dot(x))).normalize(),E.crossVectors(w,x);const R=E.dot(l[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,R)}for(let U=0,x=b.length;U<x;++U){const y=b[U],R=y.start,z=y.count;for(let I=R,G=R+z;I<G;I+=3)C(e.getX(I+0)),C(e.getX(I+1)),C(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,f=new H,u=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(f),l.add(f),c.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,u=o.normalized,d=new c.constructor(l.length*f);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*f;for(let h=0;h<f;h++)d[g++]=c[m++]}return new pi(d,f,u)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,u=c.length;f<u;f++){const d=c[f],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let d=0,m=u.length;d<m;d++)f.push(u[d].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ff=new Rt,Rr=new Ku,za=new Ul,df=new H,Va=new H,Ga=new H,Ha=new H,$l=new H,ka=new H,hf=new H,Wa=new H;class bn extends rn{constructor(e=new Gi,t=new lf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],u=s[l];f!==0&&($l.fromBufferAttribute(u,e),a?ka.addScaledVector($l,f):ka.addScaledVector($l.sub(t),f))}t.add(ka)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(za.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(za,df)===null||Rr.origin.distanceToSquared(df)>(e.far-e.near)**2))&&(ff.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(ff),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const p=d[g],h=a[p.materialIndex],b=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,A=M;E<A;E+=3){const w=o.getX(E),C=o.getX(E+1),U=o.getX(E+2);r=Xa(this,h,e,i,c,f,u,w,C,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const b=o.getX(p),M=o.getX(p+1),E=o.getX(p+2);r=Xa(this,a,e,i,c,f,u,b,M,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const p=d[g],h=a[p.materialIndex],b=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,A=M;E<A;E+=3){const w=E,C=E+1,U=E+2;r=Xa(this,h,e,i,c,f,u,w,C,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const b=p,M=p+1,E=p+2;r=Xa(this,a,e,i,c,f,u,b,M,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function am(n,e,t,i,r,s,a,o){let l;if(e.side===Sn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ir,o),l===null)return null;Wa.copy(o),Wa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:n}}function Xa(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Va),n.getVertexPosition(l,Ga),n.getVertexPosition(c,Ha);const f=am(n,e,t,i,Va,Ga,Ha,hf);if(f){const u=new H;ni.getBarycoord(hf,Va,Ga,Ha,u),r&&(f.uv=ni.getInterpolatedAttribute(r,o,l,c,u,new Ke)),s&&(f.uv1=ni.getInterpolatedAttribute(s,o,l,c,u,new Ke)),a&&(f.normal=ni.getInterpolatedAttribute(a,o,l,c,u,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new H,materialIndex:0};ni.getNormal(Va,Ga,Ha,d.normal),f.face=d,f.barycoord=u}return f}class Js extends Gi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vi(c,3)),this.setAttribute("normal",new Vi(f,3)),this.setAttribute("uv",new Vi(u,2));function g(v,p,h,b,M,E,A,w,C,U,x){const y=E/C,R=A/U,z=E/2,I=A/2,G=w/2,q=C+1,F=U+1;let V=0,Z=0;const le=new H;for(let ee=0;ee<F;ee++){const ae=ee*R-I;for(let Se=0;Se<q;Se++){const Me=Se*y-z;le[v]=Me*b,le[p]=ae*M,le[h]=G,c.push(le.x,le.y,le.z),le[v]=0,le[p]=0,le[h]=w>0?1:-1,f.push(le.x,le.y,le.z),u.push(Se/C),u.push(1-ee/U),V+=1}}for(let ee=0;ee<U;ee++)for(let ae=0;ae<C;ae++){const Se=d+ae+q*ee,Me=d+ae+q*(ee+1),Oe=d+(ae+1)+q*(ee+1),Xe=d+(ae+1)+q*ee;l.push(Se,Me,Xe),l.push(Me,Oe,Xe),Z+=6}o.addGroup(m,Z,x),m+=Z,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=ps(n[t]);for(const r in i)e[r]=i[r]}return e}function om(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const lm={clone:ps,merge:fn};var cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=om(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mf extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new H,gf=new Ke,_f=new Ke;class an extends mf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tl*2*Math.atan(Math.tan(yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,t){return this.getViewBounds(e,gf,_f),t.subVectors(_f,gf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ms=-90,gs=1;class fm extends rn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(ms,gs,e,t);r.layers=this.layers,this.add(r);const s=new an(ms,gs,e,t);s.layers=this.layers,this.add(s);const a=new an(ms,gs,e,t);a.layers=this.layers,this.add(a);const o=new an(ms,gs,e,t);o.layers=this.layers,this.add(o);const l=new an(ms,gs,e,t);l.layers=this.layers,this.add(l);const c=new an(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(u,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class vf extends nn{constructor(e=[],t=br,i,r,s,a,o,l,c,f){super(e,t,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xf extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Js(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Pi});s.uniforms.tEquirect.value=t;const a=new bn(r,s),o=t.minFilter;return t.minFilter===yr&&(t.minFilter=yt),new fm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class ii extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dm={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),h=this._getHandJoint(c,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=f.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ii;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ya{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(e),this.density=t}clone(){return new Ya(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qs extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hm extends nn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Qt,f=Qt,u,d){super(null,a,o,l,c,f,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kl=new H,pm=new H,mm=new Qe;class Cr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Kl.subVectors(i,t).cross(pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Kl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||mm.getNormalMatrix(e),r=this.coplanarPoint(Kl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new Ul,gm=new Ke(.5,.5),qa=new H;class Jl{constructor(e=new Cr,t=new Cr,i=new Cr,r=new Cr,s=new Cr,a=new Cr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],u=s[5],d=s[6],m=s[7],g=s[8],v=s[9],p=s[10],h=s[11],b=s[12],M=s[13],E=s[14],A=s[15];if(r[0].setComponents(c-a,m-f,h-g,A-b).normalize(),r[1].setComponents(c+a,m+f,h+g,A+b).normalize(),r[2].setComponents(c+o,m+u,h+v,A+M).normalize(),r[3].setComponents(c-o,m-u,h-v,A-M).normalize(),i)r[4].setComponents(l,d,p,E).normalize(),r[5].setComponents(c-l,m-d,h-p,A-E).normalize();else if(r[4].setComponents(c-l,m-d,h-p,A-E).normalize(),t===fi)r[5].setComponents(c+l,m+d,h+p,A+E).normalize();else if(t===Ca)r[5].setComponents(l,d,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){Pr.center.set(0,0,0);const t=gm.distanceTo(e.center);return Pr.radius=.7071067811865476+t,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(qa.x=r.normal.x>0?e.max.x:e.min.x,qa.y=r.normal.y>0?e.max.y:e.min.y,qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ea extends nn{constructor(e,t,i=ci,r,s,a,o=Qt,l=Qt,c,f=Ii,u=1){if(f!==Ii&&f!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _m extends ea{constructor(e,t=ci,i=br,r,s,a=Qt,o=Qt,l,c=Ii){const f={width:e,height:e,depth:1},u=[f,f,f,f,f,f];super(e,e,t,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sf extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hi extends Gi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,u=e/o,d=t/l,m=[],g=[],v=[],p=[];for(let h=0;h<f;h++){const b=h*d-a;for(let M=0;M<c;M++){const E=M*u-s;g.push(E,-b,0),v.push(0,0,1),p.push(M/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const M=b+c*h,E=b+c*(h+1),A=b+1+c*(h+1),w=b+1+c*h;m.push(M,E,w),m.push(E,A,w)}this.setIndex(m),this.setAttribute("position",new Vi(g,3)),this.setAttribute("normal",new Vi(v,3)),this.setAttribute("uv",new Vi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class vm extends yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xm extends Zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vu,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sm extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mm extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ql={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Em{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){const u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,d=c.length;u<d;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const bm=new Em;class ec{constructor(e){this.manager=e!==void 0?e:bm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ec.DEFAULT_MATERIAL_NAME="__DEFAULT";const _s=new WeakMap;class ym extends ec{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ql.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=_s.get(a);u===void 0&&(u=[],_s.set(a,u)),u.push({onLoad:t,onError:r})}return a}const o=Gs("img");function l(){f(),t&&t(this);const u=_s.get(this)||[];for(let d=0;d<u.length;d++){const m=u[d];m.onLoad&&m.onLoad(this)}_s.delete(this),s.manager.itemEnd(e)}function c(u){f(),r&&r(u),Ql.remove(`image:${e}`);const d=_s.get(this)||[];for(let m=0;m<d.length;m++){const g=d[m];g.onError&&g.onError(u)}_s.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ql.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class ta extends ec{constructor(e){super(e)}load(e,t,i,r){const s=new nn,a=new ym(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Mf extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const tc=new Rt,Ef=new H,bf=new H;class Tm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jl,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ef),bf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bf),t.updateMatrixWorld(),tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nc extends mf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Am extends Tm{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wm extends Mf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Am}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Rm extends Mf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cm extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yf=new Rt;class Tf{constructor(e,t,i=0,r=1/0){this.ray=new Ku(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ft("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yf),this}intersectObject(e,t=!0,i=[]){return ic(e,this,i,t),i.sort(Af),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ic(e[r],this,i,t);return i.sort(Af),i}}function Af(n,e){return n.distance-e.distance}function ic(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)ic(s[a],e,t,!0)}}function wf(n,e,t,i){const r=Pm(i);switch(t){case Ou:return n*e;case zu:return n*e/r.components*r.byteLength;case Go:return n*e/r.components*r.byteLength;case Qr:return n*e*2/r.components*r.byteLength;case Ho:return n*e*2/r.components*r.byteLength;case Bu:return n*e*3/r.components*r.byteLength;case Jn:return n*e*4/r.components*r.byteLength;case ko:return n*e*4/r.components*r.byteLength;case ya:case Ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Aa:case wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xo:case qo:return Math.max(n,16)*Math.max(e,8)/4;case Wo:case Yo:return Math.max(n,8)*Math.max(e,8)/2;case jo:case $o:case Ko:case Jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zo:case Qo:case el:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case al:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ll:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case hl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ml:case gl:case _l:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vl:case xl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sl:case Ml:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pm(n){switch(n){case Dn:case Iu:return{byteLength:1,components:1};case zs:case Uu:case Li:return{byteLength:2,components:1};case zo:case Vo:return{byteLength:2,components:4};case ci:case Bo:case ui:return{byteLength:4,components:1};case Nu:case Fu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bo}})),typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Dm(n){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const f=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,f);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){const g=u[d],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){const v=u[m];n.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Im=`#ifdef USE_ALPHAHASH
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
#endif`,Um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bm=`#ifdef USE_AOMAP
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
#endif`,zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vm=`#ifdef USE_BATCHING
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
#endif`,Gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xm=`#ifdef USE_IRIDESCENCE
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
#endif`,Ym=`#ifdef USE_BUMPMAP
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
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tg=`#define PI 3.141592653589793
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
} // validated`,ng=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ig=`vec3 transformedNormal = objectNormal;
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
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",cg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ug=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xg=`#ifdef USE_GRADIENTMAP
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
}`,Sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bg=`uniform bool receiveShadow;
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
#endif`,yg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cg=`PhysicalMaterial material;
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
#endif`,Pg=`uniform sampler2D dfgLUT;
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
}`,Dg=`
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
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gg=`#if defined( USE_POINTS_UV )
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
#endif`,Hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
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
#endif`,jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e_=`#ifdef USE_NORMALMAP
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
#endif`,t_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,i_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,o_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,g_=`float getShadowMask() {
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
}`,__=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,x_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S_=`#ifdef USE_SKINNING
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
#endif`,M_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T_=`#ifdef USE_TRANSMISSION
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
#endif`,A_=`#ifdef USE_TRANSMISSION
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tt={alphahash_fragment:Lm,alphahash_pars_fragment:Im,alphamap_fragment:Um,alphamap_pars_fragment:Nm,alphatest_fragment:Fm,alphatest_pars_fragment:Om,aomap_fragment:Bm,aomap_pars_fragment:zm,batching_pars_vertex:Vm,batching_vertex:Gm,begin_vertex:Hm,beginnormal_vertex:km,bsdfs:Wm,iridescence_fragment:Xm,bumpmap_pars_fragment:Ym,clipping_planes_fragment:qm,clipping_planes_pars_fragment:jm,clipping_planes_pars_vertex:$m,clipping_planes_vertex:Zm,color_fragment:Km,color_pars_fragment:Jm,color_pars_vertex:Qm,color_vertex:eg,common:tg,cube_uv_reflection_fragment:ng,defaultnormal_vertex:ig,displacementmap_pars_vertex:rg,displacementmap_vertex:sg,emissivemap_fragment:ag,emissivemap_pars_fragment:og,colorspace_fragment:lg,colorspace_pars_fragment:cg,envmap_fragment:ug,envmap_common_pars_fragment:fg,envmap_pars_fragment:dg,envmap_pars_vertex:hg,envmap_physical_pars_fragment:yg,envmap_vertex:pg,fog_vertex:mg,fog_pars_vertex:gg,fog_fragment:_g,fog_pars_fragment:vg,gradientmap_pars_fragment:xg,lightmap_pars_fragment:Sg,lights_lambert_fragment:Mg,lights_lambert_pars_fragment:Eg,lights_pars_begin:bg,lights_toon_fragment:Tg,lights_toon_pars_fragment:Ag,lights_phong_fragment:wg,lights_phong_pars_fragment:Rg,lights_physical_fragment:Cg,lights_physical_pars_fragment:Pg,lights_fragment_begin:Dg,lights_fragment_maps:Lg,lights_fragment_end:Ig,logdepthbuf_fragment:Ug,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Fg,logdepthbuf_vertex:Og,map_fragment:Bg,map_pars_fragment:zg,map_particle_fragment:Vg,map_particle_pars_fragment:Gg,metalnessmap_fragment:Hg,metalnessmap_pars_fragment:kg,morphinstance_vertex:Wg,morphcolor_vertex:Xg,morphnormal_vertex:Yg,morphtarget_pars_vertex:qg,morphtarget_vertex:jg,normal_fragment_begin:$g,normal_fragment_maps:Zg,normal_pars_fragment:Kg,normal_pars_vertex:Jg,normal_vertex:Qg,normalmap_pars_fragment:e_,clearcoat_normal_fragment_begin:t_,clearcoat_normal_fragment_maps:n_,clearcoat_pars_fragment:i_,iridescence_pars_fragment:r_,opaque_fragment:s_,packing:a_,premultiplied_alpha_fragment:o_,project_vertex:l_,dithering_fragment:c_,dithering_pars_fragment:u_,roughnessmap_fragment:f_,roughnessmap_pars_fragment:d_,shadowmap_pars_fragment:h_,shadowmap_pars_vertex:p_,shadowmap_vertex:m_,shadowmask_pars_fragment:g_,skinbase_vertex:__,skinning_pars_vertex:v_,skinning_vertex:x_,skinnormal_vertex:S_,specularmap_fragment:M_,specularmap_pars_fragment:E_,tonemapping_fragment:b_,tonemapping_pars_fragment:y_,transmission_fragment:T_,transmission_pars_fragment:A_,uv_pars_fragment:w_,uv_pars_vertex:R_,uv_vertex:C_,worldpos_vertex:P_,background_vert:`varying vec2 vUv;
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
}`},ve={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},mi={basic:{uniforms:fn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:fn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new pt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:fn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:fn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:fn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new pt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:fn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:fn([ve.points,ve.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:fn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:fn([ve.common,ve.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:fn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:fn([ve.sprite,ve.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:fn([ve.common,ve.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:fn([ve.lights,ve.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};mi.physical={uniforms:fn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ja={r:0,b:0,g:0},Dr=new hi,D_=new Rt;function L_(n,e,t,i,r,s,a){const o=new pt(0);let l=s===!0?0:1,c,f,u=null,d=0,m=null;function g(M){let E=M.isScene===!0?M.background:null;return E&&E.isTexture&&(E=(M.backgroundBlurriness>0?t:e).get(E)),E}function v(M){let E=!1;const A=g(M);A===null?h(o,l):A&&A.isColor&&(h(A,1),E=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,E){const A=g(E);A&&(A.isCubeTexture||A.mapping===Ea)?(f===void 0&&(f=new bn(new Js(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:ps(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Dr.copy(E.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(D_.makeRotationFromEuler(Dr)),f.material.toneMapped=dt.getTransfer(A.colorSpace)!==xt,(u!==A||d!==A.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,u=A,d=A.version,m=n.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new bn(new Hi(2,2),new yn({name:"BackgroundMaterial",uniforms:ps(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=dt.getTransfer(A.colorSpace)!==xt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,m=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function h(M,E){M.getRGB(ja,pf(n)),i.buffers.color.setClear(ja.r,ja.g,ja.b,E,a)}function b(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),l=E,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,h(o,l)},render:v,addToRenderList:p,dispose:b}}function I_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(y,R,z,I,G){let q=!1;const F=u(I,z,R);s!==F&&(s=F,c(s.object)),q=m(y,I,z,G),q&&g(y,I,z,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,E(y,R,z,I),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function f(y){return n.deleteVertexArray(y)}function u(y,R,z){const I=z.wireframe===!0;let G=i[y.id];G===void 0&&(G={},i[y.id]=G);let q=G[R.id];q===void 0&&(q={},G[R.id]=q);let F=q[I];return F===void 0&&(F=d(l()),q[I]=F),F}function d(y){const R=[],z=[],I=[];for(let G=0;G<t;G++)R[G]=0,z[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:I,object:y,attributes:{},index:null}}function m(y,R,z,I){const G=s.attributes,q=R.attributes;let F=0;const V=z.getAttributes();for(const Z in V)if(V[Z].location>=0){const ee=G[Z];let ae=q[Z];if(ae===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),ee===void 0||ee.attribute!==ae||ae&&ee.data!==ae.data)return!0;F++}return s.attributesNum!==F||s.index!==I}function g(y,R,z,I){const G={},q=R.attributes;let F=0;const V=z.getAttributes();for(const Z in V)if(V[Z].location>=0){let ee=q[Z];ee===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor));const ae={};ae.attribute=ee,ee&&ee.data&&(ae.data=ee.data),G[Z]=ae,F++}s.attributes=G,s.attributesNum=F,s.index=I}function v(){const y=s.newAttributes;for(let R=0,z=y.length;R<z;R++)y[R]=0}function p(y){h(y,0)}function h(y,R){const z=s.newAttributes,I=s.enabledAttributes,G=s.attributeDivisors;z[y]=1,I[y]===0&&(n.enableVertexAttribArray(y),I[y]=1),G[y]!==R&&(n.vertexAttribDivisor(y,R),G[y]=R)}function b(){const y=s.newAttributes,R=s.enabledAttributes;for(let z=0,I=R.length;z<I;z++)R[z]!==y[z]&&(n.disableVertexAttribArray(z),R[z]=0)}function M(y,R,z,I,G,q,F){F===!0?n.vertexAttribIPointer(y,R,z,G,q):n.vertexAttribPointer(y,R,z,I,G,q)}function E(y,R,z,I){v();const G=I.attributes,q=z.getAttributes(),F=R.defaultAttributeValues;for(const V in q){const Z=q[V];if(Z.location>=0){let le=G[V];if(le===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),le!==void 0){const ee=le.normalized,ae=le.itemSize,Se=e.get(le);if(Se===void 0)continue;const Me=Se.buffer,Oe=Se.type,Xe=Se.bytesPerElement,W=Oe===n.INT||Oe===n.UNSIGNED_INT||le.gpuType===Bo;if(le.isInterleavedBufferAttribute){const ne=le.data,pe=ne.stride,Ee=le.offset;if(ne.isInstancedInterleavedBuffer){for(let fe=0;fe<Z.locationSize;fe++)h(Z.location+fe,ne.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let fe=0;fe<Z.locationSize;fe++)p(Z.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let fe=0;fe<Z.locationSize;fe++)M(Z.location+fe,ae/Z.locationSize,Oe,ee,pe*Xe,(Ee+ae/Z.locationSize*fe)*Xe,W)}else{if(le.isInstancedBufferAttribute){for(let ne=0;ne<Z.locationSize;ne++)h(Z.location+ne,le.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ne=0;ne<Z.locationSize;ne++)p(Z.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let ne=0;ne<Z.locationSize;ne++)M(Z.location+ne,ae/Z.locationSize,Oe,ee,ae*Xe,ae/Z.locationSize*ne*Xe,W)}}else if(F!==void 0){const ee=F[V];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(Z.location,ee);break;case 3:n.vertexAttrib3fv(Z.location,ee);break;case 4:n.vertexAttrib4fv(Z.location,ee);break;default:n.vertexAttrib1fv(Z.location,ee)}}}}b()}function A(){U();for(const y in i){const R=i[y];for(const z in R){const I=R[z];for(const G in I)f(I[G].object),delete I[G];delete R[z]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const R=i[y.id];for(const z in R){const I=R[z];for(const G in I)f(I[G].object),delete I[G];delete R[z]}delete i[y.id]}function C(y){for(const R in i){const z=i[R];if(z[y.id]===void 0)continue;const I=z[y.id];for(const G in I)f(I[G].object),delete I[G];delete z[y.id]}}function U(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function U_(n,e,t){let i;function r(c){i=c}function s(c,f){n.drawArrays(i,c,f),t.update(f,i,1)}function a(c,f,u){u!==0&&(n.drawArraysInstanced(i,c,f,u),t.update(f,i,u))}function o(c,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,u);let m=0;for(let g=0;g<u;g++)m+=f[g];t.update(m,i,1)}function l(c,f,u,d){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],f[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=f[v]*d[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function N_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Jn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const U=C===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Dn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ui&&!U)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&($e("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:E,maxSamples:A,samples:w}}function F_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Cr,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||i!==0||r;return r=d,i=u.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=f(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,h=n.get(u);if(!r||g===null||g.length===0||s&&!p)s?f(null):c();else{const b=s?0:i,M=b*4;let E=h.clippingState||null;l.value=E,E=f(g,d,M,m);for(let A=0;A!==M;++A)E[A]=t[A];h.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,d,m,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const h=m+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let M=0,E=m;M!==v;++M,E+=4)a.copy(u[M]).applyMatrix4(b,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function O_(n){let e=new WeakMap;function t(a,o){return o===Io?a.mapping=br:o===Uo&&(a.mapping=Jr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Io||o===Uo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new xf(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const fr=4,Cf=[.125,.215,.35,.446,.526,.582],Lr=20,B_=256,na=new nc,Pf=new pt;let rc=null,sc=0,ac=0,oc=!1;const z_=new H;class Df{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=z_}=s;rc=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=If(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rc,sc,ac),this._renderer.xr.enabled=oc,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rc=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:Li,format:Jn,colorSpace:es,depthBuffer:!1},r=Lf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=V_(s)),this._blurMaterial=H_(s,e,t),this._ggxMaterial=G_(s,e,t)}return r}_compileMaterial(e){const t=new bn(new Gi,e);this._renderer.compile(t,na)}_sceneToCubeUV(e,t,i,r,s){const l=new an(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(Pf),u.toneMapping=un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new Js,new lf({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let h=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,h=!0):(p.color.copy(Pf),h=!0);for(let M=0;M<6;M++){const E=M%3;E===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[M],s.y,s.z)):E===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[M]));const A=this._cubeSize;vs(r,E*A,M>2?A:0,A,A),u.setRenderTarget(r),h&&u.render(v,l),u.render(e,l)}u.toneMapping=m,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===br||e.mapping===Jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=If());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;vs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,na)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-f*f),d=0+c*1.25,m=u*d,{_lodMax:g}=this,v=this._sizeLods[i],p=3*v*(i>g-fr?i-g+fr:0),h=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-t,vs(s,p,h,3*v,2*v),r.setRenderTarget(s),r.render(o,na),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,vs(e,p,h,3*v,2*v),r.setRenderTarget(e),r.render(o,na)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const f=3,u=this._lodMeshes[r];u.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Lr-1),v=s/g,p=isFinite(s)?1+Math.floor(f*v):Lr;p>Lr&&$e(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Lr}`);const h=[];let b=0;for(let C=0;C<Lr;++C){const U=C/v,x=Math.exp(-U*U/2);h.push(x),C===0?b+=x:C<p&&(b+=2*x)}for(let C=0;C<h.length;C++)h[C]=h[C]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const E=this._sizeLods[r],A=3*E*(r>M-fr?r-M+fr:0),w=4*(this._cubeSize-E);vs(t,A,w,3*E,2*E),l.setRenderTarget(t),l.render(u,na)}}function V_(n){const e=[],t=[],i=[];let r=n;const s=n-fr+1+Cf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-fr?l=Cf[a-n+fr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),f=-c,u=1+c,d=[f,f,u,f,u,u,f,f,u,u,f,u],m=6,g=6,v=3,p=2,h=1,b=new Float32Array(v*g*m),M=new Float32Array(p*g*m),E=new Float32Array(h*g*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,U=w>2?0:-1,x=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];b.set(x,v*g*w),M.set(d,p*g*w);const y=[w,w,w,w,w,w];E.set(y,h*g*w)}const A=new Gi;A.setAttribute("position",new pi(b,v)),A.setAttribute("uv",new pi(M,p)),A.setAttribute("faceIndex",new pi(E,h)),i.push(new bn(A,null)),r>fr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Lf(n,e,t){const i=new di(n,e,t);return i.texture.mapping=Ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function G_(n,e,t){return new yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:B_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function H_(n,e,t){const i=new Float32Array(Lr),r=new H(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function If(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Uf(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function $a(){return`

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
	`}function k_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Io||l===Uo,f=l===br||l===Jr;if(c||f){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Df(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||f&&m&&r(m)?(t===null&&(t=new Df(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function W_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Hs("WebGLRenderer: "+i+" extension not supported."),r}}}function X_(n,e,t,i){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER)}function c(u){const d=[],m=u.index,g=u.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let M=0,E=b.length;M<E;M+=3){const A=b[M+0],w=b[M+1],C=b[M+2];d.push(A,w,w,C,C,A)}}else if(g!==void 0){const b=g.array;v=g.version;for(let M=0,E=b.length/3-1;M<E;M+=3){const A=M+0,w=M+1,C=M+2;d.push(A,w,w,C,C,A)}}else return;const p=new(Wu(d)?uf:cf)(d,1);p.version=v;const h=s.get(u);h&&e.remove(h),s.set(u,p)}function f(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:f}}function Y_(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*a),t.update(m,i,1)}function c(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*a,g),t.update(m,i,g))}function f(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,i,1)}function u(d,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/a,m[h],v[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,v,0,g);let h=0;for(let b=0;b<g;b++)h+=m[b]*v[b];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function q_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function j_(n,e,t){const i=new WeakMap,r=new It;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let x=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;m===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let E=o.attributes.position.count*M,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*A*4*u),C=new Zu(w,E,A,u);C.type=ui,C.needsUpdate=!0;const U=M*4;for(let y=0;y<u;y++){const R=p[y],z=h[y],I=b[y],G=E*A*4*y;for(let q=0;q<R.count;q++){const F=q*U;m===!0&&(r.fromBufferAttribute(R,q),w[G+F+0]=r.x,w[G+F+1]=r.y,w[G+F+2]=r.z,w[G+F+3]=0),g===!0&&(r.fromBufferAttribute(z,q),w[G+F+4]=r.x,w[G+F+5]=r.y,w[G+F+6]=r.z,w[G+F+7]=0),v===!0&&(r.fromBufferAttribute(I,q),w[G+F+8]=r.x,w[G+F+9]=r.y,w[G+F+10]=r.z,w[G+F+11]=I.itemSize===4?r.w:1)}}d={count:u,texture:C,size:new Ke(E,A)},i.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function $_(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Z_={[Tu]:"LINEAR_TONE_MAPPING",[Au]:"REINHARD_TONE_MAPPING",[wu]:"CINEON_TONE_MAPPING",[Ru]:"ACES_FILMIC_TONE_MAPPING",[Pu]:"AGX_TONE_MAPPING",[Du]:"NEUTRAL_TONE_MAPPING",[Cu]:"CUSTOM_TONE_MAPPING"};function K_(n,e,t,i,r){const s=new di(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new di(e,t,{type:Li,depthBuffer:!1,stencilBuffer:!1}),o=new Gi;o.setAttribute("position",new Vi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Vi([0,2,0,0,2,0],2));const l=new vm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new bn(o,l),f=new nc(-1,1,1,-1,0,1);let u=null,d=null,m=!1,g,v=null,p=[],h=!1;this.setSize=function(b,M){s.setSize(b,M),a.setSize(b,M);for(let E=0;E<p.length;E++){const A=p[E];A.setSize&&A.setSize(b,M)}},this.setEffects=function(b){p=b,h=p.length>0&&p[0].isRenderPass===!0;const M=s.width,E=s.height;for(let A=0;A<p.length;A++){const w=p[A];w.setSize&&w.setSize(M,E)}},this.begin=function(b,M){if(m||b.toneMapping===un&&p.length===0)return!1;if(v=M,M!==null){const E=M.width,A=M.height;(s.width!==E||s.height!==A)&&this.setSize(E,A)}return h===!1&&b.setRenderTarget(s),g=b.toneMapping,b.toneMapping=un,!0},this.hasRenderPass=function(){return h},this.end=function(b,M){b.toneMapping=g,m=!0;let E=s,A=a;for(let w=0;w<p.length;w++){const C=p[w];if(C.enabled!==!1&&(C.render(b,A,E,M),C.needsSwap!==!1)){const U=E;E=A,A=U}}if(u!==b.outputColorSpace||d!==b.toneMapping){u=b.outputColorSpace,d=b.toneMapping,l.defines={},dt.getTransfer(u)===xt&&(l.defines.SRGB_TRANSFER="");const w=Z_[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(v),b.render(c,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Nf=new nn,lc=new ea(1,1),Ff=new Zu,Of=new $p,Bf=new vf,zf=[],Vf=[],Gf=new Float32Array(16),Hf=new Float32Array(9),kf=new Float32Array(4);function xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=zf[r];if(s===void 0&&(s=new Float32Array(r),zf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Za(n,e){let t=Vf[e];t===void 0&&(t=new Int32Array(e),Vf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function J_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function nv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(kt(t,i))return;kf.set(i),n.uniformMatrix2fv(this.addr,!1,kf),Wt(t,i)}}function iv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(kt(t,i))return;Hf.set(i),n.uniformMatrix3fv(this.addr,!1,Hf),Wt(t,i)}}function rv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(kt(t,i))return;Gf.set(i),n.uniformMatrix4fv(this.addr,!1,Gf),Wt(t,i)}}function sv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function cv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function hv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(lc.compareFunction=t.isReversedDepthBuffer()?bl:El,s=lc):s=Nf,t.setTexture2D(e||s,r)}function pv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Of,r)}function mv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Bf,r)}function gv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ff,r)}function _v(n){switch(n){case 5126:return J_;case 35664:return Q_;case 35665:return ev;case 35666:return tv;case 35674:return nv;case 35675:return iv;case 35676:return rv;case 5124:case 35670:return sv;case 35667:case 35671:return av;case 35668:case 35672:return ov;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return uv;case 36295:return fv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}function vv(n,e){n.uniform1fv(this.addr,e)}function xv(n,e){const t=xs(e,this.size,2);n.uniform2fv(this.addr,t)}function Sv(n,e){const t=xs(e,this.size,3);n.uniform3fv(this.addr,t)}function Mv(n,e){const t=xs(e,this.size,4);n.uniform4fv(this.addr,t)}function Ev(n,e){const t=xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bv(n,e){const t=xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yv(n,e){const t=xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Tv(n,e){n.uniform1iv(this.addr,e)}function Av(n,e){n.uniform2iv(this.addr,e)}function wv(n,e){n.uniform3iv(this.addr,e)}function Rv(n,e){n.uniform4iv(this.addr,e)}function Cv(n,e){n.uniform1uiv(this.addr,e)}function Pv(n,e){n.uniform2uiv(this.addr,e)}function Dv(n,e){n.uniform3uiv(this.addr,e)}function Lv(n,e){n.uniform4uiv(this.addr,e)}function Iv(n,e,t){const i=this.cache,r=e.length,s=Za(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=lc:a=Nf;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Uv(n,e,t){const i=this.cache,r=e.length,s=Za(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Of,s[a])}function Nv(n,e,t){const i=this.cache,r=e.length,s=Za(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Bf,s[a])}function Fv(n,e,t){const i=this.cache,r=e.length,s=Za(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ff,s[a])}function Ov(n){switch(n){case 5126:return vv;case 35664:return xv;case 35665:return Sv;case 35666:return Mv;case 35674:return Ev;case 35675:return bv;case 35676:return yv;case 5124:case 35670:return Tv;case 35667:case 35671:return Av;case 35668:case 35672:return wv;case 35669:case 35673:return Rv;case 5125:return Cv;case 36294:return Pv;case 36295:return Dv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Fv}}class Bv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_v(t.type)}}class zv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ov(t.type)}}class Vv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const cc=/(\w+)(\])?(\[|\.)?/g;function Wf(n,e){n.seq.push(e),n.map[e.id]=e}function Gv(n,e,t){const i=n.name,r=i.length;for(cc.lastIndex=0;;){const s=cc.exec(i),a=cc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Wf(t,c===void 0?new Bv(o,n,e):new zv(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Vv(o),Wf(t,u)),t=u}}}class Ka{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Gv(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Xf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Hv=37297;let kv=0;function Wv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Yf=new Qe;function Xv(n){dt._getMatrix(Yf,dt.workingColorSpace,n);const e=`mat3( ${Yf.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Ra:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function qf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Wv(n.getShaderSource(e),o)}else return s}function Yv(n,e){const t=Xv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qv={[Tu]:"Linear",[Au]:"Reinhard",[wu]:"Cineon",[Ru]:"ACESFilmic",[Pu]:"AgX",[Du]:"Neutral",[Cu]:"Custom"};function jv(n,e){const t=qv[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ja=new H;function $v(){dt.getLuminanceCoefficients(Ja);const n=Ja.x.toFixed(4),e=Ja.y.toFixed(4),t=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function Kv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Jv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ia(n){return n!==""}function jf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $f(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(n){return n.replace(Qv,t0)}const e0=new Map;function t0(n,e){let t=tt[e];if(t===void 0){const i=e0.get(e);if(i!==void 0)t=tt[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uc(t)}const n0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zf(n){return n.replace(n0,i0)}function i0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const r0={[Ma]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"};function s0(n){return r0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const a0={[br]:"ENVMAP_TYPE_CUBE",[Jr]:"ENVMAP_TYPE_CUBE",[Ea]:"ENVMAP_TYPE_CUBE_UV"};function o0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":a0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const l0={[Jr]:"ENVMAP_MODE_REFRACTION"};function c0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":l0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const u0={[yu]:"ENVMAP_BLENDING_MULTIPLY",[Pp]:"ENVMAP_BLENDING_MIX",[Dp]:"ENVMAP_BLENDING_ADD"};function f0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":u0[n.combine]||"ENVMAP_BLENDING_NONE"}function d0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function h0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=s0(t),c=o0(t),f=c0(t),u=f0(t),d=d0(t),m=Zv(t),g=Kv(s),v=r.createProgram();let p,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ia).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ia).join(`
`),h.length>0&&(h+=`
`)):(p=[Kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),h=[Kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?tt.tonemapping_pars_fragment:"",t.toneMapping!==un?jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Yv("linearToOutputTexel",t.outputColorSpace),$v(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),a=uc(a),a=jf(a,t),a=$f(a,t),o=uc(o),o=jf(o,t),o=$f(o,t),a=Zf(a),o=Zf(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=b+p+a,E=b+h+o,A=Xf(r,r.VERTEX_SHADER,M),w=Xf(r,r.FRAGMENT_SHADER,E);r.attachShader(v,A),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(R){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(v)||"",I=r.getShaderInfoLog(A)||"",G=r.getShaderInfoLog(w)||"",q=z.trim(),F=I.trim(),V=G.trim();let Z=!0,le=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,w);else{const ee=qf(r,A,"vertex"),ae=qf(r,w,"fragment");ft("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+q+`
`+ee+`
`+ae)}else q!==""?$e("WebGLProgram: Program Info Log:",q):(F===""||V==="")&&(le=!1);le&&(R.diagnostics={runnable:Z,programLog:q,vertexShader:{log:F,prefix:p},fragmentShader:{log:V,prefix:h}})}r.deleteShader(A),r.deleteShader(w),U=new Ka(r,v),x=Jv(r,v)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let x;this.getAttributes=function(){return x===void 0&&C(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,Hv)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let p0=0;class m0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new g0(e),t.set(e,i)),i}}class g0{constructor(e){this.id=p0++,this.code=e,this.usedTimes=0}}function _0(n,e,t,i,r,s,a){const o=new Bl,l=new m0,c=new Set,f=[],u=new Map,d=r.logarithmicDepthBuffer;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,y,R,z,I){const G=z.fog,q=I.geometry,F=x.isMeshStandardMaterial?z.environment:null,V=(x.isMeshStandardMaterial?t:e).get(x.envMap||F),Z=V&&V.mapping===Ea?V.image.height:null,le=g[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&$e("WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const ee=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ae=ee!==void 0?ee.length:0;let Se=0;q.morphAttributes.position!==void 0&&(Se=1),q.morphAttributes.normal!==void 0&&(Se=2),q.morphAttributes.color!==void 0&&(Se=3);let Me,Oe,Xe,W;if(le){const it=mi[le];Me=it.vertexShader,Oe=it.fragmentShader}else Me=x.vertexShader,Oe=x.fragmentShader,l.update(x),Xe=l.getVertexShaderID(x),W=l.getFragmentShaderID(x);const ne=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Ee=I.isInstancedMesh===!0,fe=I.isBatchedMesh===!0,we=!!x.map,He=!!x.matcap,je=!!V,be=!!x.aoMap,ge=!!x.lightMap,de=!!x.bumpMap,We=!!x.normalMap,P=!!x.displacementMap,rt=!!x.emissiveMap,et=!!x.metalnessMap,ht=!!x.roughnessMap,Re=x.anisotropy>0,T=x.clearcoat>0,_=x.dispersion>0,D=x.iridescence>0,j=x.sheen>0,te=x.transmission>0,Y=Re&&!!x.anisotropyMap,ye=T&&!!x.clearcoatMap,he=T&&!!x.clearcoatNormalMap,Ce=T&&!!x.clearcoatRoughnessMap,Ue=D&&!!x.iridescenceMap,se=D&&!!x.iridescenceThicknessMap,ue=j&&!!x.sheenColorMap,Te=j&&!!x.sheenRoughnessMap,Ae=!!x.specularMap,me=!!x.specularColorMap,Ze=!!x.specularIntensityMap,L=te&&!!x.transmissionMap,ie=te&&!!x.thicknessMap,J=!!x.gradientMap,ce=!!x.alphaMap,K=x.alphaTest>0,$=!!x.alphaHash,re=!!x.extensions;let Ne=un;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ne=n.toneMapping);const nt={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:Me,fragmentShader:Oe,defines:x.defines,customVertexShaderID:Xe,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:fe,batchingColor:fe&&I._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&I.instanceColor!==null,instancingMorph:Ee&&I.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:es,alphaToCoverage:!!x.alphaToCoverage,map:we,matcap:He,envMap:je,envMapMode:je&&V.mapping,envMapCubeUVHeight:Z,aoMap:be,lightMap:ge,bumpMap:de,normalMap:We,displacementMap:P,emissiveMap:rt,normalMapObjectSpace:We&&x.normalMapType===Up,normalMapTangentSpace:We&&x.normalMapType===Vu,metalnessMap:et,roughnessMap:ht,anisotropy:Re,anisotropyMap:Y,clearcoat:T,clearcoatMap:ye,clearcoatNormalMap:he,clearcoatRoughnessMap:Ce,dispersion:_,iridescence:D,iridescenceMap:Ue,iridescenceThicknessMap:se,sheen:j,sheenColorMap:ue,sheenRoughnessMap:Te,specularMap:Ae,specularColorMap:me,specularIntensityMap:Ze,transmission:te,transmissionMap:L,thicknessMap:ie,gradientMap:J,opaque:x.transparent===!1&&x.blending===Zr&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:K,alphaHash:$,combine:x.combine,mapUv:we&&v(x.map.channel),aoMapUv:be&&v(x.aoMap.channel),lightMapUv:ge&&v(x.lightMap.channel),bumpMapUv:de&&v(x.bumpMap.channel),normalMapUv:We&&v(x.normalMap.channel),displacementMapUv:P&&v(x.displacementMap.channel),emissiveMapUv:rt&&v(x.emissiveMap.channel),metalnessMapUv:et&&v(x.metalnessMap.channel),roughnessMapUv:ht&&v(x.roughnessMap.channel),anisotropyMapUv:Y&&v(x.anisotropyMap.channel),clearcoatMapUv:ye&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:se&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(x.sheenRoughnessMap.channel),specularMapUv:Ae&&v(x.specularMap.channel),specularColorMapUv:me&&v(x.specularColorMap.channel),specularIntensityMapUv:Ze&&v(x.specularIntensityMap.channel),transmissionMapUv:L&&v(x.transmissionMap.channel),thicknessMapUv:ie&&v(x.thicknessMap.channel),alphaMapUv:ce&&v(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(We||Re),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!q.attributes.uv&&(we||ce),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:I.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Se,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===xt,decodeVideoTextureEmissive:rt&&x.emissiveMap.isVideoTexture===!0&&dt.getTransfer(x.emissiveMap.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===Sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function h(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)y.push(R),y.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(b(y,x),M(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function b(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function M(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function E(x){const y=g[x.type];let R;if(y){const z=mi[y];R=lm.clone(z.uniforms)}else R=x.uniforms;return R}function A(x,y){let R=u.get(y);return R!==void 0?++R.usedTimes:(R=new h0(n,y,x,s),f.push(R),u.set(y,R)),R}function w(x){if(--x.usedTimes===0){const y=f.indexOf(x);f[y]=f[f.length-1],f.pop(),u.delete(x.cacheKey),x.destroy()}}function C(x){l.remove(x)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:E,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:f,dispose:U}}function v0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function x0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Jf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,d,m,g,v,p){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},n[e]=h):(h.id=u.id,h.object=u,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=v,h.group=p),e++,h}function o(u,d,m,g,v,p){const h=a(u,d,m,g,v,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(u,d,m,g,v,p){const h=a(u,d,m,g,v,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(u,d){t.length>1&&t.sort(u||x0),i.length>1&&i.sort(d||Jf),r.length>1&&r.sort(d||Jf)}function f(){for(let u=e,d=n.length;u<d;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function S0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Qf,n.set(i,[a])):r>=s.length?(a=new Qf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function M0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new pt};break;case"SpotLight":t={position:new H,direction:new H,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function E0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let b0=0;function y0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function T0(n){const e=new M0,t=E0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Rt,a=new Rt;function o(c){let f=0,u=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let m=0,g=0,v=0,p=0,h=0,b=0,M=0,E=0,A=0,w=0,C=0;c.sort(y0);for(let x=0,y=c.length;x<y;x++){const R=c[x],z=R.color,I=R.intensity,G=R.distance;let q=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Qr?q=R.shadow.map.texture:q=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)f+=z.r*I,u+=z.g*I,d+=z.b*I;else if(R.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(R.sh.coefficients[F],I);C++}else if(R.isDirectionalLight){const F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const V=R.shadow,Z=t.get(R);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=R.shadow.matrix,b++}i.directional[m]=F,m++}else if(R.isSpotLight){const F=e.get(R);F.position.setFromMatrixPosition(R.matrixWorld),F.color.copy(z).multiplyScalar(I),F.distance=G,F.coneCos=Math.cos(R.angle),F.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),F.decay=R.decay,i.spot[v]=F;const V=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,V.updateMatrices(R),R.castShadow&&w++),i.spotLightMatrix[v]=V.matrix,R.castShadow){const Z=t.get(R);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,i.spotShadow[v]=Z,i.spotShadowMap[v]=q,E++}v++}else if(R.isRectAreaLight){const F=e.get(R);F.color.copy(z).multiplyScalar(I),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=F,p++}else if(R.isPointLight){const F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),F.distance=R.distance,F.decay=R.decay,R.castShadow){const V=R.shadow,Z=t.get(R);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,Z.shadowCameraNear=V.camera.near,Z.shadowCameraFar=V.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=R.shadow.matrix,M++}i.point[g]=F,g++}else if(R.isHemisphereLight){const F=e.get(R);F.skyColor.copy(R.color).multiplyScalar(I),F.groundColor.copy(R.groundColor).multiplyScalar(I),i.hemi[h]=F,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==p||U.hemiLength!==h||U.numDirectionalShadows!==b||U.numPointShadows!==M||U.numSpotShadows!==E||U.numSpotMaps!==A||U.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,U.directionalLength=m,U.pointLength=g,U.spotLength=v,U.rectAreaLength=p,U.hemiLength=h,U.numDirectionalShadows=b,U.numPointShadows=M,U.numSpotShadows=E,U.numSpotMaps=A,U.numLightProbes=C,i.version=b0++)}function l(c,f){let u=0,d=0,m=0,g=0,v=0;const p=f.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){const M=c[h];if(M.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),u++}else if(M.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:i}}function ed(n){const e=new T0(n),t=[],i=[];function r(f){c.camera=f,t.length=0,i.length=0}function s(f){t.push(f)}function a(f){i.push(f)}function o(){e.setup(t)}function l(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function A0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ed(n),e.set(r,[o])):s>=a.length?(o=new ed(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const w0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R0=`uniform sampler2D shadow_pass;
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
}`,C0=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],P0=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],td=new Rt,ra=new H,fc=new H;function D0(n,e,t){let i=new Jl;const r=new Ke,s=new Ke,a=new It,o=new Sm,l=new Mm,c={},f=t.maxTextureSize,u={[ir]:Sn,[Sn]:ir,[Mn]:Mn},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:w0,fragmentShader:R0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Gi;g.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new bn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ma;let h=this.type;this.render=function(w,C,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;w.type===fp&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Ma);const x=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Pi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const I=h!==this.type;I&&C.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(q=>q.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,q=w.length;G<q;G++){const F=w[G],V=F.shadow;if(V===void 0){$e("WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const Z=V.getFrameExtents();if(r.multiply(Z),s.copy(V.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Z.x),r.x=s.x*Z.x,V.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Z.y),r.y=s.y*Z.y,V.mapSize.y=s.y)),V.map===null||I===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Bs){if(F.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new di(r.x,r.y,{format:Qr,type:Li,minFilter:yt,magFilter:yt,generateMipmaps:!1}),V.map.texture.name=F.name+".shadowMap",V.map.depthTexture=new ea(r.x,r.y,ui),V.map.depthTexture.name=F.name+".shadowMapDepth",V.map.depthTexture.format=Ii,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Qt,V.map.depthTexture.magFilter=Qt}else{F.isPointLight?(V.map=new xf(r.x),V.map.depthTexture=new _m(r.x,ci)):(V.map=new di(r.x,r.y),V.map.depthTexture=new ea(r.x,r.y,ci)),V.map.depthTexture.name=F.name+".shadowMap",V.map.depthTexture.format=Ii;const ee=n.state.buffers.depth.getReversed();this.type===Ma?(V.map.depthTexture.compareFunction=ee?bl:El,V.map.depthTexture.minFilter=yt,V.map.depthTexture.magFilter=yt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Qt,V.map.depthTexture.magFilter=Qt)}V.camera.updateProjectionMatrix()}const le=V.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<le;ee++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,ee),n.clear();else{ee===0&&(n.setRenderTarget(V.map),n.clear());const ae=V.getViewport(ee);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),z.viewport(a)}if(F.isPointLight){const ae=V.camera,Se=V.matrix,Me=F.distance||ae.far;Me!==ae.far&&(ae.far=Me,ae.updateProjectionMatrix()),ra.setFromMatrixPosition(F.matrixWorld),ae.position.copy(ra),fc.copy(ae.position),fc.add(C0[ee]),ae.up.copy(P0[ee]),ae.lookAt(fc),ae.updateMatrixWorld(),Se.makeTranslation(-ra.x,-ra.y,-ra.z),td.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),V._frustum.setFromProjectionMatrix(td,ae.coordinateSystem,ae.reversedDepth)}else V.updateMatrices(F);i=V.getFrustum(),E(C,U,V.camera,F,this.type)}V.isPointLightShadow!==!0&&this.type===Bs&&b(V,U),V.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(x,y,R)};function b(w,C){const U=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new di(r.x,r.y,{format:Qr,type:Li})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,U,d,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,U,m,v,null)}function M(w,C,U,x){let y=null;const R=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)y=R;else if(y=U.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=y.uuid,I=C.uuid;let G=c[z];G===void 0&&(G={},c[z]=G);let q=G[I];q===void 0&&(q=y.clone(),G[I]=q,C.addEventListener("dispose",A)),y=q}if(y.visible=C.visible,y.wireframe=C.wireframe,x===Bs?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=n.properties.get(y);z.light=U}return y}function E(w,C,U,x,y){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Bs)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const I=e.update(w),G=w.material;if(Array.isArray(G)){const q=I.groups;for(let F=0,V=q.length;F<V;F++){const Z=q[F],le=G[Z.materialIndex];if(le&&le.visible){const ee=M(w,le,x,y);w.onBeforeShadow(n,w,C,U,I,ee,Z),n.renderBufferDirect(U,null,I,ee,w,Z),w.onAfterShadow(n,w,C,U,I,ee,Z)}}}else if(G.visible){const q=M(w,G,x,y);w.onBeforeShadow(n,w,C,U,I,q,null),n.renderBufferDirect(U,null,I,q,w,null),w.onAfterShadow(n,w,C,U,I,q,null)}}const z=w.children;for(let I=0,G=z.length;I<G;I++)E(z[I],C,U,x,y)}function A(w){w.target.removeEventListener("dispose",A);for(const U in c){const x=c[U],y=w.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const L0={[Ao]:wo,[Ro]:Do,[Co]:Lo,[Kr]:Po,[wo]:Ao,[Do]:Ro,[Lo]:Co,[Po]:Kr};function I0(n,e){function t(){let L=!1;const ie=new It;let J=null;const ce=new It(0,0,0,0);return{setMask:function(K){J!==K&&!L&&(n.colorMask(K,K,K,K),J=K)},setLocked:function(K){L=K},setClear:function(K,$,re,Ne,nt){nt===!0&&(K*=Ne,$*=Ne,re*=Ne),ie.set(K,$,re,Ne),ce.equals(ie)===!1&&(n.clearColor(K,$,re,Ne),ce.copy(ie))},reset:function(){L=!1,J=null,ce.set(-1,0,0,0)}}}function i(){let L=!1,ie=!1,J=null,ce=null,K=null;return{setReversed:function($){if(ie!==$){const re=e.get("EXT_clip_control");$?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),ie=$;const Ne=K;K=null,this.setClear(Ne)}},getReversed:function(){return ie},setTest:function($){$?ne(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function($){J!==$&&!L&&(n.depthMask($),J=$)},setFunc:function($){if(ie&&($=L0[$]),ce!==$){switch($){case Ao:n.depthFunc(n.NEVER);break;case wo:n.depthFunc(n.ALWAYS);break;case Ro:n.depthFunc(n.LESS);break;case Kr:n.depthFunc(n.LEQUAL);break;case Co:n.depthFunc(n.EQUAL);break;case Po:n.depthFunc(n.GEQUAL);break;case Do:n.depthFunc(n.GREATER);break;case Lo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=$}},setLocked:function($){L=$},setClear:function($){K!==$&&(ie&&($=1-$),n.clearDepth($),K=$)},reset:function(){L=!1,J=null,ce=null,K=null,ie=!1}}}function r(){let L=!1,ie=null,J=null,ce=null,K=null,$=null,re=null,Ne=null,nt=null;return{setTest:function(it){L||(it?ne(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(it){ie!==it&&!L&&(n.stencilMask(it),ie=it)},setFunc:function(it,Xt,Ut){(J!==it||ce!==Xt||K!==Ut)&&(n.stencilFunc(it,Xt,Ut),J=it,ce=Xt,K=Ut)},setOp:function(it,Xt,Ut){($!==it||re!==Xt||Ne!==Ut)&&(n.stencilOp(it,Xt,Ut),$=it,re=Xt,Ne=Ut)},setLocked:function(it){L=it},setClear:function(it){nt!==it&&(n.clearStencil(it),nt=it)},reset:function(){L=!1,ie=null,J=null,ce=null,K=null,$=null,re=null,Ne=null,nt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},u={},d=new WeakMap,m=[],g=null,v=!1,p=null,h=null,b=null,M=null,E=null,A=null,w=null,C=new pt(0,0,0),U=0,x=!1,y=null,R=null,z=null,I=null,G=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=V>=2);let le=null,ee={};const ae=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Me=new It().fromArray(ae),Oe=new It().fromArray(Se);function Xe(L,ie,J,ce){const K=new Uint8Array(4),$=n.createTexture();n.bindTexture(L,$),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let re=0;re<J;re++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,K):n.texImage2D(ie+re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,K);return $}const W={};W[n.TEXTURE_2D]=Xe(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=Xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=Xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=Xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(Kr),de(!1),We(Su),ne(n.CULL_FACE),be(Pi);function ne(L){f[L]!==!0&&(n.enable(L),f[L]=!0)}function pe(L){f[L]!==!1&&(n.disable(L),f[L]=!1)}function Ee(L,ie){return u[L]!==ie?(n.bindFramebuffer(L,ie),u[L]=ie,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ie),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function fe(L,ie){let J=m,ce=!1;if(L){J=d.get(ie),J===void 0&&(J=[],d.set(ie,J));const K=L.textures;if(J.length!==K.length||J[0]!==n.COLOR_ATTACHMENT0){for(let $=0,re=K.length;$<re;$++)J[$]=n.COLOR_ATTACHMENT0+$;J.length=K.length,ce=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ce=!0);ce&&n.drawBuffers(J)}function we(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const He={[Er]:n.FUNC_ADD,[hp]:n.FUNC_SUBTRACT,[pp]:n.FUNC_REVERSE_SUBTRACT};He[mp]=n.MIN,He[gp]=n.MAX;const je={[_p]:n.ZERO,[vp]:n.ONE,[xp]:n.SRC_COLOR,[yo]:n.SRC_ALPHA,[Tp]:n.SRC_ALPHA_SATURATE,[bp]:n.DST_COLOR,[Mp]:n.DST_ALPHA,[Sp]:n.ONE_MINUS_SRC_COLOR,[To]:n.ONE_MINUS_SRC_ALPHA,[yp]:n.ONE_MINUS_DST_COLOR,[Ep]:n.ONE_MINUS_DST_ALPHA,[Ap]:n.CONSTANT_COLOR,[wp]:n.ONE_MINUS_CONSTANT_COLOR,[Rp]:n.CONSTANT_ALPHA,[Cp]:n.ONE_MINUS_CONSTANT_ALPHA};function be(L,ie,J,ce,K,$,re,Ne,nt,it){if(L===Pi){v===!0&&(pe(n.BLEND),v=!1);return}if(v===!1&&(ne(n.BLEND),v=!0),L!==dp){if(L!==p||it!==x){if((h!==Er||E!==Er)&&(n.blendEquation(n.FUNC_ADD),h=Er,E=Er),it)switch(L){case Zr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFunc(n.ONE,n.ONE);break;case Eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ft("WebGLState: Invalid blending: ",L);break}else switch(L){case Zr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Eu:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bu:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",L);break}b=null,M=null,A=null,w=null,C.set(0,0,0),U=0,p=L,x=it}return}K=K||ie,$=$||J,re=re||ce,(ie!==h||K!==E)&&(n.blendEquationSeparate(He[ie],He[K]),h=ie,E=K),(J!==b||ce!==M||$!==A||re!==w)&&(n.blendFuncSeparate(je[J],je[ce],je[$],je[re]),b=J,M=ce,A=$,w=re),(Ne.equals(C)===!1||nt!==U)&&(n.blendColor(Ne.r,Ne.g,Ne.b,nt),C.copy(Ne),U=nt),p=L,x=!1}function ge(L,ie){L.side===Mn?pe(n.CULL_FACE):ne(n.CULL_FACE);let J=L.side===Sn;ie&&(J=!J),de(J),L.blending===Zr&&L.transparent===!1?be(Pi):be(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ce=L.stencilWrite;o.setTest(ce),ce&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),rt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function de(L){y!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),y=L)}function We(L){L!==cp?(ne(n.CULL_FACE),L!==R&&(L===Su?n.cullFace(n.BACK):L===up?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),R=L}function P(L){L!==z&&(F&&n.lineWidth(L),z=L)}function rt(L,ie,J){L?(ne(n.POLYGON_OFFSET_FILL),(I!==ie||G!==J)&&(n.polygonOffset(ie,J),I=ie,G=J)):pe(n.POLYGON_OFFSET_FILL)}function et(L){L?ne(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function ht(L){L===void 0&&(L=n.TEXTURE0+q-1),le!==L&&(n.activeTexture(L),le=L)}function Re(L,ie,J){J===void 0&&(le===null?J=n.TEXTURE0+q-1:J=le);let ce=ee[J];ce===void 0&&(ce={type:void 0,texture:void 0},ee[J]=ce),(ce.type!==L||ce.texture!==ie)&&(le!==J&&(n.activeTexture(J),le=J),n.bindTexture(L,ie||W[L]),ce.type=L,ce.texture=ie)}function T(){const L=ee[le];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(L){ft("WebGLState:",L)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(L){ft("WebGLState:",L)}}function j(){try{n.texSubImage2D(...arguments)}catch(L){ft("WebGLState:",L)}}function te(){try{n.texSubImage3D(...arguments)}catch(L){ft("WebGLState:",L)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(L){ft("WebGLState:",L)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(L){ft("WebGLState:",L)}}function he(){try{n.texStorage2D(...arguments)}catch(L){ft("WebGLState:",L)}}function Ce(){try{n.texStorage3D(...arguments)}catch(L){ft("WebGLState:",L)}}function Ue(){try{n.texImage2D(...arguments)}catch(L){ft("WebGLState:",L)}}function se(){try{n.texImage3D(...arguments)}catch(L){ft("WebGLState:",L)}}function ue(L){Me.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Me.copy(L))}function Te(L){Oe.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Oe.copy(L))}function Ae(L,ie){let J=c.get(ie);J===void 0&&(J=new WeakMap,c.set(ie,J));let ce=J.get(L);ce===void 0&&(ce=n.getUniformBlockIndex(ie,L.name),J.set(L,ce))}function me(L,ie){const ce=c.get(ie).get(L);l.get(ie)!==ce&&(n.uniformBlockBinding(ie,ce,L.__bindingPointIndex),l.set(ie,ce))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},le=null,ee={},u={},d=new WeakMap,m=[],g=null,v=!1,p=null,h=null,b=null,M=null,E=null,A=null,w=null,C=new pt(0,0,0),U=0,x=!1,y=null,R=null,z=null,I=null,G=null,Me.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:pe,bindFramebuffer:Ee,drawBuffers:fe,useProgram:we,setBlending:be,setMaterial:ge,setFlipSided:de,setCullFace:We,setLineWidth:P,setPolygonOffset:rt,setScissorTest:et,activeTexture:ht,bindTexture:Re,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:D,texImage2D:Ue,texImage3D:se,updateUBOMapping:Ae,uniformBlockBinding:me,texStorage2D:he,texStorage3D:Ce,texSubImage2D:j,texSubImage3D:te,compressedTexSubImage2D:Y,compressedTexSubImage3D:ye,scissor:ue,viewport:Te,reset:Ze}}function U0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,f=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return m?new OffscreenCanvas(T,_):Gs("canvas")}function v(T,_,D){let j=1;const te=Re(T);if((te.width>D||te.height>D)&&(j=D/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(j*te.width),ye=Math.floor(j*te.height);u===void 0&&(u=g(Y,ye));const he=_?g(Y,ye):u;return he.width=Y,he.height=ye,he.getContext("2d").drawImage(T,0,0,Y,ye),$e("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Y+"x"+ye+")."),he}else return"data"in T&&$e("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function p(T){return T.generateMipmaps}function h(T){n.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,_,D,j,te=!1){if(T!==null){if(n[T]!==void 0)return n[T];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=_;if(_===n.RED&&(D===n.FLOAT&&(Y=n.R32F),D===n.HALF_FLOAT&&(Y=n.R16F),D===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.R8UI),D===n.UNSIGNED_SHORT&&(Y=n.R16UI),D===n.UNSIGNED_INT&&(Y=n.R32UI),D===n.BYTE&&(Y=n.R8I),D===n.SHORT&&(Y=n.R16I),D===n.INT&&(Y=n.R32I)),_===n.RG&&(D===n.FLOAT&&(Y=n.RG32F),D===n.HALF_FLOAT&&(Y=n.RG16F),D===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RG8UI),D===n.UNSIGNED_SHORT&&(Y=n.RG16UI),D===n.UNSIGNED_INT&&(Y=n.RG32UI),D===n.BYTE&&(Y=n.RG8I),D===n.SHORT&&(Y=n.RG16I),D===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),D===n.UNSIGNED_INT&&(Y=n.RGB32UI),D===n.BYTE&&(Y=n.RGB8I),D===n.SHORT&&(Y=n.RGB16I),D===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),D===n.UNSIGNED_INT&&(Y=n.RGBA32UI),D===n.BYTE&&(Y=n.RGBA8I),D===n.SHORT&&(Y=n.RGBA16I),D===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){const ye=te?Ra:dt.getTransfer(j);D===n.FLOAT&&(Y=n.RGBA32F),D===n.HALF_FLOAT&&(Y=n.RGBA16F),D===n.UNSIGNED_BYTE&&(Y=ye===xt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(T,_){let D;return T?_===null||_===ci||_===Vs?D=n.DEPTH24_STENCIL8:_===ui?D=n.DEPTH32F_STENCIL8:_===zs&&(D=n.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ci||_===Vs?D=n.DEPTH_COMPONENT24:_===ui?D=n.DEPTH_COMPONENT32F:_===zs&&(D=n.DEPTH_COMPONENT16),D}function A(T,_){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Qt&&T.minFilter!==yt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function w(T){const _=T.target;_.removeEventListener("dispose",w),U(_),_.isVideoTexture&&f.delete(_)}function C(T){const _=T.target;_.removeEventListener("dispose",C),y(_)}function U(T){const _=i.get(T);if(_.__webglInit===void 0)return;const D=T.source,j=d.get(D);if(j){const te=j[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&x(T),Object.keys(j).length===0&&d.delete(D)}i.remove(T)}function x(T){const _=i.get(T);n.deleteTexture(_.__webglTexture);const D=T.source,j=d.get(D);delete j[_.__cacheKey],a.memory.textures--}function y(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let te=0;te<_.__webglFramebuffer[j].length;te++)n.deleteFramebuffer(_.__webglFramebuffer[j][te]);else n.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)n.deleteFramebuffer(_.__webglFramebuffer[j]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=T.textures;for(let j=0,te=D.length;j<te;j++){const Y=i.get(D[j]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(D[j])}i.remove(T)}let R=0;function z(){R=0}function I(){const T=R;return T>=r.maxTextures&&$e("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),R+=1,T}function G(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function q(T,_){const D=i.get(T);if(T.isVideoTexture&&et(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&D.__version!==T.version){const j=T.image;if(j===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{W(D,T,_);return}}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+_)}function F(T,_){const D=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){W(D,T,_);return}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+_)}function V(T,_){const D=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){W(D,T,_);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+_)}function Z(T,_){const D=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&D.__version!==T.version){ne(D,T,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+_)}const le={[No]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[Fo]:n.MIRRORED_REPEAT},ee={[Qt]:n.NEAREST,[Lp]:n.NEAREST_MIPMAP_NEAREST,[ba]:n.NEAREST_MIPMAP_LINEAR,[yt]:n.LINEAR,[Oo]:n.LINEAR_MIPMAP_NEAREST,[yr]:n.LINEAR_MIPMAP_LINEAR},ae={[Np]:n.NEVER,[Vp]:n.ALWAYS,[Fp]:n.LESS,[El]:n.LEQUAL,[Op]:n.EQUAL,[bl]:n.GEQUAL,[Bp]:n.GREATER,[zp]:n.NOTEQUAL};function Se(T,_){if(_.type===ui&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===yt||_.magFilter===Oo||_.magFilter===ba||_.magFilter===yr||_.minFilter===yt||_.minFilter===Oo||_.minFilter===ba||_.minFilter===yr)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,le[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,le[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,le[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ee[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ee[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ae[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Qt||_.minFilter!==ba&&_.minFilter!==yr||_.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Me(T,_){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",w));const j=_.source;let te=d.get(j);te===void 0&&(te={},d.set(j,te));const Y=G(_);if(Y!==T.__cacheKey){te[Y]===void 0&&(te[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),te[Y].usedTimes++;const ye=te[T.__cacheKey];ye!==void 0&&(te[T.__cacheKey].usedTimes--,ye.usedTimes===0&&x(_)),T.__cacheKey=Y,T.__webglTexture=te[Y].texture}return D}function Oe(T,_,D){return Math.floor(Math.floor(T/D)/_)}function Xe(T,_,D,j){const Y=T.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,D,j,_.data);else{Y.sort((se,ue)=>se.start-ue.start);let ye=0;for(let se=1;se<Y.length;se++){const ue=Y[ye],Te=Y[se],Ae=ue.start+ue.count,me=Oe(Te.start,_.width,4),Ze=Oe(ue.start,_.width,4);Te.start<=Ae+1&&me===Ze&&Oe(Te.start+Te.count-1,_.width,4)===me?ue.count=Math.max(ue.count,Te.start+Te.count-ue.start):(++ye,Y[ye]=Te)}Y.length=ye+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),Ce=n.getParameter(n.UNPACK_SKIP_PIXELS),Ue=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let se=0,ue=Y.length;se<ue;se++){const Te=Y[se],Ae=Math.floor(Te.start/4),me=Math.ceil(Te.count/4),Ze=Ae%_.width,L=Math.floor(Ae/_.width),ie=me,J=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Ze,L,ie,J,D,j,_.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ue)}}function W(T,_,D){let j=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=n.TEXTURE_3D);const te=Me(T,_),Y=_.source;t.bindTexture(j,T.__webglTexture,n.TEXTURE0+D);const ye=i.get(Y);if(Y.version!==ye.__version||te===!0){t.activeTexture(n.TEXTURE0+D);const he=dt.getPrimaries(dt.workingColorSpace),Ce=_.colorSpace===rr?null:dt.getPrimaries(_.colorSpace),Ue=_.colorSpace===rr||he===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let se=v(_.image,!1,r.maxTextureSize);se=ht(_,se);const ue=s.convert(_.format,_.colorSpace),Te=s.convert(_.type);let Ae=M(_.internalFormat,ue,Te,_.colorSpace,_.isVideoTexture);Se(j,_);let me;const Ze=_.mipmaps,L=_.isVideoTexture!==!0,ie=ye.__version===void 0||te===!0,J=Y.dataReady,ce=A(_,se);if(_.isDepthTexture)Ae=E(_.format===Tr,_.type),ie&&(L?t.texStorage2D(n.TEXTURE_2D,1,Ae,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Ae,se.width,se.height,0,ue,Te,null));else if(_.isDataTexture)if(Ze.length>0){L&&ie&&t.texStorage2D(n.TEXTURE_2D,ce,Ae,Ze[0].width,Ze[0].height);for(let K=0,$=Ze.length;K<$;K++)me=Ze[K],L?J&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,me.width,me.height,ue,Te,me.data):t.texImage2D(n.TEXTURE_2D,K,Ae,me.width,me.height,0,ue,Te,me.data);_.generateMipmaps=!1}else L?(ie&&t.texStorage2D(n.TEXTURE_2D,ce,Ae,se.width,se.height),J&&Xe(_,se,ue,Te)):t.texImage2D(n.TEXTURE_2D,0,Ae,se.width,se.height,0,ue,Te,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Ae,Ze[0].width,Ze[0].height,se.depth);for(let K=0,$=Ze.length;K<$;K++)if(me=Ze[K],_.format!==Jn)if(ue!==null)if(L){if(J)if(_.layerUpdates.size>0){const re=wf(me.width,me.height,_.format,_.type);for(const Ne of _.layerUpdates){const nt=me.data.subarray(Ne*re/me.data.BYTES_PER_ELEMENT,(Ne+1)*re/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,Ne,me.width,me.height,1,ue,nt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,me.width,me.height,se.depth,ue,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Ae,me.width,me.height,se.depth,0,me.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?J&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,me.width,me.height,se.depth,ue,Te,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Ae,me.width,me.height,se.depth,0,ue,Te,me.data)}else{L&&ie&&t.texStorage2D(n.TEXTURE_2D,ce,Ae,Ze[0].width,Ze[0].height);for(let K=0,$=Ze.length;K<$;K++)me=Ze[K],_.format!==Jn?ue!==null?L?J&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,me.width,me.height,ue,me.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Ae,me.width,me.height,0,me.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?J&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,me.width,me.height,ue,Te,me.data):t.texImage2D(n.TEXTURE_2D,K,Ae,me.width,me.height,0,ue,Te,me.data)}else if(_.isDataArrayTexture)if(L){if(ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Ae,se.width,se.height,se.depth),J)if(_.layerUpdates.size>0){const K=wf(se.width,se.height,_.format,_.type);for(const $ of _.layerUpdates){const re=se.data.subarray($*K/se.data.BYTES_PER_ELEMENT,($+1)*K/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,se.width,se.height,1,ue,Te,re)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ue,Te,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,se.width,se.height,se.depth,0,ue,Te,se.data);else if(_.isData3DTexture)L?(ie&&t.texStorage3D(n.TEXTURE_3D,ce,Ae,se.width,se.height,se.depth),J&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ue,Te,se.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,se.width,se.height,se.depth,0,ue,Te,se.data);else if(_.isFramebufferTexture){if(ie)if(L)t.texStorage2D(n.TEXTURE_2D,ce,Ae,se.width,se.height);else{let K=se.width,$=se.height;for(let re=0;re<ce;re++)t.texImage2D(n.TEXTURE_2D,re,Ae,K,$,0,ue,Te,null),K>>=1,$>>=1}}else if(Ze.length>0){if(L&&ie){const K=Re(Ze[0]);t.texStorage2D(n.TEXTURE_2D,ce,Ae,K.width,K.height)}for(let K=0,$=Ze.length;K<$;K++)me=Ze[K],L?J&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ue,Te,me):t.texImage2D(n.TEXTURE_2D,K,Ae,ue,Te,me);_.generateMipmaps=!1}else if(L){if(ie){const K=Re(se);t.texStorage2D(n.TEXTURE_2D,ce,Ae,K.width,K.height)}J&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Te,se)}else t.texImage2D(n.TEXTURE_2D,0,Ae,ue,Te,se);p(_)&&h(j),ye.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ne(T,_,D){if(_.image.length!==6)return;const j=Me(T,_),te=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+D);const Y=i.get(te);if(te.version!==Y.__version||j===!0){t.activeTexture(n.TEXTURE0+D);const ye=dt.getPrimaries(dt.workingColorSpace),he=_.colorSpace===rr?null:dt.getPrimaries(_.colorSpace),Ce=_.colorSpace===rr||ye===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ue=_.isCompressedTexture||_.image[0].isCompressedTexture,se=_.image[0]&&_.image[0].isDataTexture,ue=[];for(let $=0;$<6;$++)!Ue&&!se?ue[$]=v(_.image[$],!0,r.maxCubemapSize):ue[$]=se?_.image[$].image:_.image[$],ue[$]=ht(_,ue[$]);const Te=ue[0],Ae=s.convert(_.format,_.colorSpace),me=s.convert(_.type),Ze=M(_.internalFormat,Ae,me,_.colorSpace),L=_.isVideoTexture!==!0,ie=Y.__version===void 0||j===!0,J=te.dataReady;let ce=A(_,Te);Se(n.TEXTURE_CUBE_MAP,_);let K;if(Ue){L&&ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Ze,Te.width,Te.height);for(let $=0;$<6;$++){K=ue[$].mipmaps;for(let re=0;re<K.length;re++){const Ne=K[re];_.format!==Jn?Ae!==null?L?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re,0,0,Ne.width,Ne.height,Ae,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re,Ze,Ne.width,Ne.height,0,Ne.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re,0,0,Ne.width,Ne.height,Ae,me,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re,Ze,Ne.width,Ne.height,0,Ae,me,Ne.data)}}}else{if(K=_.mipmaps,L&&ie){K.length>0&&ce++;const $=Re(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Ze,$.width,$.height)}for(let $=0;$<6;$++)if(se){L?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ue[$].width,ue[$].height,Ae,me,ue[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ze,ue[$].width,ue[$].height,0,Ae,me,ue[$].data);for(let re=0;re<K.length;re++){const nt=K[re].image[$].image;L?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re+1,0,0,nt.width,nt.height,Ae,me,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re+1,Ze,nt.width,nt.height,0,Ae,me,nt.data)}}else{L?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,me,ue[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ze,Ae,me,ue[$]);for(let re=0;re<K.length;re++){const Ne=K[re];L?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re+1,0,0,Ae,me,Ne.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re+1,Ze,Ae,me,Ne.image[$])}}}p(_)&&h(n.TEXTURE_CUBE_MAP),Y.__version=te.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function pe(T,_,D,j,te,Y){const ye=s.convert(D.format,D.colorSpace),he=s.convert(D.type),Ce=M(D.internalFormat,ye,he,D.colorSpace),Ue=i.get(_),se=i.get(D);if(se.__renderTarget=_,!Ue.__hasExternalTextures){const ue=Math.max(1,_.width>>Y),Te=Math.max(1,_.height>>Y);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Y,Ce,ue,Te,_.depth,0,ye,he,null):t.texImage2D(te,Y,Ce,ue,Te,0,ye,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),rt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,te,se.__webglTexture,0,P(_)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,te,se.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(T,_,D){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){const j=_.depthTexture,te=j&&j.isDepthTexture?j.type:null,Y=E(_.stencilBuffer,te),ye=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;rt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),Y,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,T)}else{const j=_.textures;for(let te=0;te<j.length;te++){const Y=j[te],ye=s.convert(Y.format,Y.colorSpace),he=s.convert(Y.type),Ce=M(Y.internalFormat,ye,he,Y.colorSpace);rt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),Ce,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),Ce,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(T,_,D){const j=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(_.depthTexture);if(te.__renderTarget=_,(!te.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j){if(te.__webglInit===void 0&&(te.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Se(n.TEXTURE_CUBE_MAP,_.depthTexture);const Ue=s.convert(_.depthTexture.format),se=s.convert(_.depthTexture.type);let ue;_.depthTexture.format===Ii?ue=n.DEPTH_COMPONENT24:_.depthTexture.format===Tr&&(ue=n.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ue,_.width,_.height,0,Ue,se,null)}}else q(_.depthTexture,0);const Y=te.__webglTexture,ye=P(_),he=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,Ce=_.depthTexture.format===Tr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ii)rt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,he,Y,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,Ce,he,Y,0);else if(_.depthTexture.format===Tr)rt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,he,Y,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,Ce,he,Y,0);else throw new Error("Unknown depthTexture format")}function we(T){const _=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=j}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(D)for(let j=0;j<6;j++)fe(_.__webglFramebuffer[j],T,j);else{const j=T.texture.mipmaps;j&&j.length>0?fe(_.__webglFramebuffer[0],T,0):fe(_.__webglFramebuffer,T,0)}else if(D){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=n.createRenderbuffer(),Ee(_.__webglDepthbuffer[j],T,!1);else{const te=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Y)}}else{const j=T.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ee(_.__webglDepthbuffer,T,!1);else{const te=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(T,_,D){const j=i.get(T);_!==void 0&&pe(j.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&we(T)}function je(T){const _=T.texture,D=i.get(T),j=i.get(_);T.addEventListener("dispose",C);const te=T.textures,Y=T.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,a.memory.textures++),Y){D.__webglFramebuffer=[];for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[he]=[];for(let Ce=0;Ce<_.mipmaps.length;Ce++)D.__webglFramebuffer[he][Ce]=n.createFramebuffer()}else D.__webglFramebuffer[he]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)D.__webglFramebuffer[he]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ye)for(let he=0,Ce=te.length;he<Ce;he++){const Ue=i.get(te[he]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&rt(T)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){const Ce=te[he];D.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[he]);const Ue=s.convert(Ce.format,Ce.colorSpace),se=s.convert(Ce.type),ue=M(Ce.internalFormat,Ue,se,Ce.colorSpace,T.isXRRenderTarget===!0),Te=P(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,ue,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,D.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Se(n.TEXTURE_CUBE_MAP,_);for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)pe(D.__webglFramebuffer[he][Ce],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce);else pe(D.__webglFramebuffer[he],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);p(_)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let he=0,Ce=te.length;he<Ce;he++){const Ue=te[he],se=i.get(Ue);let ue=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,se.__webglTexture),Se(ue,Ue),pe(D.__webglFramebuffer,T,Ue,n.COLOR_ATTACHMENT0+he,ue,0),p(Ue)&&h(ue)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,j.__webglTexture),Se(he,_),_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)pe(D.__webglFramebuffer[Ce],T,_,n.COLOR_ATTACHMENT0,he,Ce);else pe(D.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,he,0);p(_)&&h(he),t.unbindTexture()}T.depthBuffer&&we(T)}function be(T){const _=T.textures;for(let D=0,j=_.length;D<j;D++){const te=_[D];if(p(te)){const Y=b(T),ye=i.get(te).__webglTexture;t.bindTexture(Y,ye),h(Y),t.unbindTexture()}}}const ge=[],de=[];function We(T){if(T.samples>0){if(rt(T)===!1){const _=T.textures,D=T.width,j=T.height;let te=n.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(T),he=_.length>1;if(he)for(let Ue=0;Ue<_.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Ce=T.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ue=0;Ue<_.length;Ue++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ue]);const se=i.get(_[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,D,j,0,0,D,j,te,n.NEAREST),l===!0&&(ge.length=0,de.length=0,ge.push(n.COLOR_ATTACHMENT0+Ue),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ge.push(Y),de.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,de)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ue=0;Ue<_.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ue]);const se=i.get(_[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function P(T){return Math.min(r.maxSamples,T.samples)}function rt(T){const _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function et(T){const _=a.render.frame;f.get(T)!==_&&(f.set(T,_),T.update())}function ht(T,_){const D=T.colorSpace,j=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==es&&D!==rr&&(dt.getTransfer(D)===xt?(j!==Jn||te!==Dn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",D)),_}function Re(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=He,this.setupRenderTarget=je,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function N0(n,e){function t(i,r=rr){let s;const a=dt.getTransfer(r);if(i===Dn)return n.UNSIGNED_BYTE;if(i===zo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Iu)return n.BYTE;if(i===Uu)return n.SHORT;if(i===zs)return n.UNSIGNED_SHORT;if(i===Bo)return n.INT;if(i===ci)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===Li)return n.HALF_FLOAT;if(i===Ou)return n.ALPHA;if(i===Bu)return n.RGB;if(i===Jn)return n.RGBA;if(i===Ii)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===zu)return n.RED;if(i===Go)return n.RED_INTEGER;if(i===Qr)return n.RG;if(i===Ho)return n.RG_INTEGER;if(i===ko)return n.RGBA_INTEGER;if(i===ya||i===Ta||i===Aa||i===wa)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ya)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ya)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ta)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Aa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wo||i===Xo||i===Yo||i===qo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jo||i===$o||i===Zo||i===Ko||i===Jo||i===Qo||i===el)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jo||i===$o)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zo)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ko)return s.COMPRESSED_R11_EAC;if(i===Jo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Qo)return s.COMPRESSED_RG11_EAC;if(i===el)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===tl||i===nl||i===il||i===rl||i===sl||i===al||i===ol||i===ll||i===cl||i===ul||i===fl||i===dl||i===hl||i===pl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===tl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===il)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===al)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ol)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ll)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ul)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ml||i===gl||i===_l)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ml)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_l)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vl||i===xl||i===Sl||i===Ml)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ml)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const F0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O0=`
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

}`;class B0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Sf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yn({vertexShader:F0,fragmentShader:O0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bn(new Hi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z0 extends ns{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,u=null,d=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",p=new B0,h={},b=t.getContextAttributes();let M=null,E=null;const A=[],w=[],C=new Ke;let U=null;const x=new an;x.viewport=new It;const y=new an;y.viewport=new It;const R=[x,y],z=new Cm;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ne=A[W];return ne===void 0&&(ne=new Zl,A[W]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(W){let ne=A[W];return ne===void 0&&(ne=new Zl,A[W]=ne),ne.getGripSpace()},this.getHand=function(W){let ne=A[W];return ne===void 0&&(ne=new Zl,A[W]=ne),ne.getHandSpace()};function q(W){const ne=w.indexOf(W.inputSource);if(ne===-1)return;const pe=A[ne];pe!==void 0&&(pe.update(W.inputSource,W.frame,c||a),pe.dispatchEvent({type:W.type,data:W.inputSource}))}function F(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",V);for(let W=0;W<A.length;W++){const ne=w[W];ne!==null&&(w[W]=null,A[W].disconnect(ne))}I=null,G=null,p.reset();for(const W in h)delete h[W];e.setRenderTarget(M),m=null,d=null,u=null,r=null,E=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",F),r.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ee=null,fe=null;b.depth&&(fe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=b.stencil?Tr:Ii,Ee=b.stencil?Vs:ci);const we={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(we),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new di(d.textureWidth,d.textureHeight,{format:Jn,type:Dn,depthTexture:new ea(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new di(m.framebufferWidth,m.framebufferHeight,{format:Jn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function V(W){for(let ne=0;ne<W.removed.length;ne++){const pe=W.removed[ne],Ee=w.indexOf(pe);Ee>=0&&(w[Ee]=null,A[Ee].disconnect(pe))}for(let ne=0;ne<W.added.length;ne++){const pe=W.added[ne];let Ee=w.indexOf(pe);if(Ee===-1){for(let we=0;we<A.length;we++)if(we>=w.length){w.push(pe),Ee=we;break}else if(w[we]===null){w[we]=pe,Ee=we;break}if(Ee===-1)break}const fe=A[Ee];fe&&fe.connect(pe)}}const Z=new H,le=new H;function ee(W,ne,pe){Z.setFromMatrixPosition(ne.matrixWorld),le.setFromMatrixPosition(pe.matrixWorld);const Ee=Z.distanceTo(le),fe=ne.projectionMatrix.elements,we=pe.projectionMatrix.elements,He=fe[14]/(fe[10]-1),je=fe[14]/(fe[10]+1),be=(fe[9]+1)/fe[5],ge=(fe[9]-1)/fe[5],de=(fe[8]-1)/fe[0],We=(we[8]+1)/we[0],P=He*de,rt=He*We,et=Ee/(-de+We),ht=et*-de;if(ne.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ht),W.translateZ(et),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),fe[10]===-1)W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Re=He+et,T=je+et,_=P-ht,D=rt+(Ee-ht),j=be*je/T*Re,te=ge*je/T*Re;W.projectionMatrix.makePerspective(_,D,j,te,Re,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ae(W,ne){ne===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ne.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ne=W.near,pe=W.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),z.near=y.near=x.near=ne,z.far=y.far=x.far=pe,(I!==z.near||G!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,G=z.far),z.layers.mask=W.layers.mask|6,x.layers.mask=z.layers.mask&3,y.layers.mask=z.layers.mask&5;const Ee=W.parent,fe=z.cameras;ae(z,Ee);for(let we=0;we<fe.length;we++)ae(fe[we],Ee);fe.length===2?ee(z,x,y):z.projectionMatrix.copy(x.projectionMatrix),Se(W,z,Ee)};function Se(W,ne,pe){pe===null?W.matrix.copy(ne.matrixWorld):(W.matrix.copy(pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(ne.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Tl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(W){return h[W]};let Me=null;function Oe(W,ne){if(f=ne.getViewerPose(c||a),g=ne,f!==null){const pe=f.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Ee=!1;pe.length!==z.cameras.length&&(z.cameras.length=0,Ee=!0);for(let je=0;je<pe.length;je++){const be=pe[je];let ge=null;if(m!==null)ge=m.getViewport(be);else{const We=u.getViewSubImage(d,be);ge=We.viewport,je===0&&(e.setRenderTargetTextures(E,We.colorTexture,We.depthStencilTexture),e.setRenderTarget(E))}let de=R[je];de===void 0&&(de=new an,de.layers.enable(je),de.viewport=new It,R[je]=de),de.matrix.fromArray(be.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(be.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(ge.x,ge.y,ge.width,ge.height),je===0&&(z.matrix.copy(de.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ee===!0&&z.cameras.push(de)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const je=u.getDepthInformation(pe[0]);je&&je.isValid&&je.texture&&p.init(je,r.renderState)}if(fe&&fe.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let je=0;je<pe.length;je++){const be=pe[je].camera;if(be){let ge=h[be];ge||(ge=new Sf,h[be]=ge);const de=u.getCameraImage(be);ge.sourceTexture=de}}}}for(let pe=0;pe<A.length;pe++){const Ee=w[pe],fe=A[pe];Ee!==null&&fe!==void 0&&fe.update(Ee,ne,c||a)}Me&&Me(W,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Xe=new Rf;Xe.setAnimationLoop(Oe),this.setAnimationLoop=function(W){Me=W},this.dispose=function(){}}}const Ir=new hi,V0=new Rt;function G0(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,pf(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,b,M,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),u(p,h)):h.isMeshPhongMaterial?(s(p,h),f(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,E)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),v(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,b,M):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Sn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Sn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=e.get(h),M=b.envMap,E=b.envMapRotation;M&&(p.envMap.value=M,Ir.copy(E),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),p.envMapRotation.value.setFromMatrix4(V0.makeRotationFromEuler(Ir)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,M){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=M*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function f(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function H0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const E=M.program;i.uniformBlockBinding(b,E)}function c(b,M){let E=r[b.id];E===void 0&&(g(b),E=f(b),r[b.id]=E,b.addEventListener("dispose",p));const A=M.program;i.updateUBOMapping(b,A);const w=e.render.frame;s[b.id]!==w&&(d(b),s[b.id]=w)}function f(b){const M=u();b.__bindingPointIndex=M;const E=n.createBuffer(),A=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=r[b.id],E=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,C=E.length;w<C;w++){const U=Array.isArray(E[w])?E[w]:[E[w]];for(let x=0,y=U.length;x<y;x++){const R=U[x];if(m(R,w,x,A)===!0){const z=R.__offset,I=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let q=0;q<I.length;q++){const F=I[q],V=v(F);typeof F=="number"||typeof F=="boolean"?(R.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,z+G,R.__data)):F.isMatrix3?(R.__data[0]=F.elements[0],R.__data[1]=F.elements[1],R.__data[2]=F.elements[2],R.__data[3]=0,R.__data[4]=F.elements[3],R.__data[5]=F.elements[4],R.__data[6]=F.elements[5],R.__data[7]=0,R.__data[8]=F.elements[6],R.__data[9]=F.elements[7],R.__data[10]=F.elements[8],R.__data[11]=0):(F.toArray(R.__data,G),G+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,M,E,A){const w=b.value,C=M+"_"+E;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{const U=A[C];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return A[C]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(b){const M=b.uniforms;let E=0;const A=16;for(let C=0,U=M.length;C<U;C++){const x=Array.isArray(M[C])?M[C]:[M[C]];for(let y=0,R=x.length;y<R;y++){const z=x[y],I=Array.isArray(z.value)?z.value:[z.value];for(let G=0,q=I.length;G<q;G++){const F=I[G],V=v(F),Z=E%A,le=Z%V.boundary,ee=Z+le;E+=le,ee!==0&&A-ee<V.storage&&(E+=A-ee),z.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=V.storage}}}const w=E%A;return w>0&&(E+=A-w),b.__size=E,b.__cache={},this}function v(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$e("WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){const M=b.target;M.removeEventListener("dispose",p);const E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}const k0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gi=null;function W0(){return gi===null&&(gi=new hm(k0,16,16,Qr,Li),gi.name="DFG_LUT",gi.minFilter=yt,gi.magFilter=yt,gi.wrapS=Di,gi.wrapT=Di,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}class sa{constructor(e={}){const{canvas:t=Gp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Dn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=m,p=new Set([ko,Ho,Go]),h=new Set([Dn,ci,zs,Vs,zo,Vo]),b=new Uint32Array(4),M=new Int32Array(4);let E=null,A=null;const w=[],C=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let y=!1;this._outputColorSpace=en;let R=0,z=0,I=null,G=-1,q=null;const F=new It,V=new It;let Z=null;const le=new pt(0);let ee=0,ae=t.width,Se=t.height,Me=1,Oe=null,Xe=null;const W=new It(0,0,ae,Se),ne=new It(0,0,ae,Se);let pe=!1;const Ee=new Jl;let fe=!1,we=!1;const He=new Rt,je=new H,be=new It,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function We(){return I===null?Me:1}let P=i;function rt(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bo}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",it,!1),P===null){const N="webgl2";if(P=rt(N,S),P===null)throw rt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw ft("WebGLRenderer: "+S.message),S}let et,ht,Re,T,_,D,j,te,Y,ye,he,Ce,Ue,se,ue,Te,Ae,me,Ze,L,ie,J,ce,K;function $(){et=new W_(P),et.init(),J=new N0(P,et),ht=new N_(P,et,e,J),Re=new I0(P,et),ht.reversedDepthBuffer&&d&&Re.buffers.depth.setReversed(!0),T=new q_(P),_=new v0,D=new U0(P,et,Re,_,ht,J,T),j=new O_(x),te=new k_(x),Y=new Dm(P),ce=new I_(P,Y),ye=new X_(P,Y,T,ce),he=new $_(P,ye,Y,T),Ze=new j_(P,ht,D),Te=new F_(_),Ce=new _0(x,j,te,et,ht,ce,Te),Ue=new G0(x,_),se=new S0,ue=new A0(et),me=new L_(x,j,te,Re,he,g,l),Ae=new D0(x,he,ht),K=new H0(P,T,ht,Re),L=new U_(P,et,T),ie=new Y_(P,et,T),T.programs=Ce.programs,x.capabilities=ht,x.extensions=et,x.properties=_,x.renderLists=se,x.shadowMap=Ae,x.state=Re,x.info=T}$(),v!==Dn&&(U=new K_(v,t.width,t.height,r,s));const re=new z0(x,P);this.xr=re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(S){S!==void 0&&(Me=S,this.setSize(ae,Se,!1))},this.getSize=function(S){return S.set(ae,Se)},this.setSize=function(S,N,X=!0){if(re.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=S,Se=N,t.width=Math.floor(S*Me),t.height=Math.floor(N*Me),X===!0&&(t.style.width=S+"px",t.style.height=N+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(ae*Me,Se*Me).floor()},this.setDrawingBufferSize=function(S,N,X){ae=S,Se=N,Me=X,t.width=Math.floor(S*X),t.height=Math.floor(N*X),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(v===Dn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(F)},this.getViewport=function(S){return S.copy(W)},this.setViewport=function(S,N,X,k){S.isVector4?W.set(S.x,S.y,S.z,S.w):W.set(S,N,X,k),Re.viewport(F.copy(W).multiplyScalar(Me).round())},this.getScissor=function(S){return S.copy(ne)},this.setScissor=function(S,N,X,k){S.isVector4?ne.set(S.x,S.y,S.z,S.w):ne.set(S,N,X,k),Re.scissor(V.copy(ne).multiplyScalar(Me).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(S){Re.setScissorTest(pe=S)},this.setOpaqueSort=function(S){Oe=S},this.setTransparentSort=function(S){Xe=S},this.getClearColor=function(S){return S.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,X=!0){let k=0;if(S){let B=!1;if(I!==null){const _e=I.texture.format;B=p.has(_e)}if(B){const _e=I.texture.type,Pe=h.has(_e),xe=me.getClearColor(),De=me.getClearAlpha(),Fe=xe.r,ke=xe.g,Ve=xe.b;Pe?(b[0]=Fe,b[1]=ke,b[2]=Ve,b[3]=De,P.clearBufferuiv(P.COLOR,0,b)):(M[0]=Fe,M[1]=ke,M[2]=Ve,M[3]=De,P.clearBufferiv(P.COLOR,0,M))}else k|=P.COLOR_BUFFER_BIT}N&&(k|=P.DEPTH_BUFFER_BIT),X&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",it,!1),me.dispose(),se.dispose(),ue.dispose(),_.dispose(),j.dispose(),te.dispose(),he.dispose(),ce.dispose(),K.dispose(),Ce.dispose(),re.dispose(),re.removeEventListener("sessionstart",Pt),re.removeEventListener("sessionend",on),Nn.stop()};function Ne(S){S.preventDefault(),Yu("WebGLRenderer: Context Lost."),y=!0}function nt(){Yu("WebGLRenderer: Context Restored."),y=!1;const S=T.autoReset,N=Ae.enabled,X=Ae.autoUpdate,k=Ae.needsUpdate,B=Ae.type;$(),T.autoReset=S,Ae.enabled=N,Ae.autoUpdate=X,Ae.needsUpdate=k,Ae.type=B}function it(S){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Xt(S){const N=S.target;N.removeEventListener("dispose",Xt),Ut(N)}function Ut(S){Le(S),_.remove(S)}function Le(S){const N=_.get(S).programs;N!==void 0&&(N.forEach(function(X){Ce.releaseProgram(X)}),S.isShaderMaterial&&Ce.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,X,k,B,_e){N===null&&(N=ge);const Pe=B.isMesh&&B.matrixWorld.determinant()<0,xe=Ax(S,N,X,k,B);Re.setMaterial(k,Pe);let De=X.index,Fe=1;if(k.wireframe===!0){if(De=ye.getWireframeAttribute(X),De===void 0)return;Fe=2}const ke=X.drawRange,Ve=X.attributes.position;let at=ke.start*Fe,Mt=(ke.start+ke.count)*Fe;_e!==null&&(at=Math.max(at,_e.start*Fe),Mt=Math.min(Mt,(_e.start+_e.count)*Fe)),De!==null?(at=Math.max(at,0),Mt=Math.min(Mt,De.count)):Ve!=null&&(at=Math.max(at,0),Mt=Math.min(Mt,Ve.count));const Nt=Mt-at;if(Nt<0||Nt===1/0)return;ce.setup(B,k,xe,X,De);let Ft,Et=L;if(De!==null&&(Ft=Y.get(De),Et=ie,Et.setIndex(Ft)),B.isMesh)k.wireframe===!0?(Re.setLineWidth(k.wireframeLinewidth*We()),Et.setMode(P.LINES)):Et.setMode(P.TRIANGLES);else if(B.isLine){let Ge=k.linewidth;Ge===void 0&&(Ge=1),Re.setLineWidth(Ge*We()),B.isLineSegments?Et.setMode(P.LINES):B.isLineLoop?Et.setMode(P.LINE_LOOP):Et.setMode(P.LINE_STRIP)}else B.isPoints?Et.setMode(P.POINTS):B.isSprite&&Et.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Hs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))Et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ge=B._multiDrawStarts,St=B._multiDrawCounts,mt=B._multiDrawCount,Fn=De?Y.get(De).bytesPerElement:1,Rs=_.get(k).currentProgram.getUniforms();for(let On=0;On<mt;On++)Rs.setValue(P,"_gl_DrawID",On),Et.render(Ge[On]/Fn,St[On])}else if(B.isInstancedMesh)Et.renderInstances(at,Nt,B.count);else if(X.isInstancedBufferGeometry){const Ge=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,St=Math.min(X.instanceCount,Ge);Et.renderInstances(at,Nt,St)}else Et.render(at,Nt)};function Ye(S,N,X){S.transparent===!0&&S.side===Mn&&S.forceSinglePass===!1?(S.side=Sn,S.needsUpdate=!0,ws(S,N,X),S.side=ir,S.needsUpdate=!0,ws(S,N,X),S.side=Mn):ws(S,N,X)}this.compile=function(S,N,X=null){X===null&&(X=S),A=ue.get(X),A.init(N),C.push(A),X.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),S!==X&&S.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),A.setupLights();const k=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const _e=B.material;if(_e)if(Array.isArray(_e))for(let Pe=0;Pe<_e.length;Pe++){const xe=_e[Pe];Ye(xe,X,B),k.add(xe)}else Ye(_e,X,B),k.add(_e)}),A=C.pop(),k},this.compileAsync=function(S,N,X=null){const k=this.compile(S,N,X);return new Promise(B=>{function _e(){if(k.forEach(function(Pe){_.get(Pe).currentProgram.isReady()&&k.delete(Pe)}),k.size===0){B(S);return}setTimeout(_e,10)}et.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let ut=null;function Ct(S){ut&&ut(S)}function Pt(){Nn.stop()}function on(){Nn.start()}const Nn=new Rf;Nn.setAnimationLoop(Ct),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(S){ut=S,re.setAnimationLoop(S),S===null?Nn.stop():Nn.start()},re.addEventListener("sessionstart",Pt),re.addEventListener("sessionend",on),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const X=re.enabled===!0&&re.isPresenting===!0,k=U!==null&&(I===null||X)&&U.begin(x,I);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(N),N=re.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,N,I),A=ue.get(S,C.length),A.init(N),C.push(A),He.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ee.setFromProjectionMatrix(He,fi,N.reversedDepth),we=this.localClippingEnabled,fe=Te.init(this.clippingPlanes,we),E=se.get(S,w.length),E.init(),w.push(E),re.enabled===!0&&re.isPresenting===!0){const Pe=x.xr.getDepthSensingMesh();Pe!==null&&_t(Pe,N,-1/0,x.sortObjects)}_t(S,N,0,x.sortObjects),E.finish(),x.sortObjects===!0&&E.sort(Oe,Xe),de=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,de&&me.addToRenderList(E,S),this.info.render.frame++,fe===!0&&Te.beginShadows();const B=A.state.shadowsArray;if(Ae.render(B,S,N),fe===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&U.hasRenderPass())===!1){const Pe=E.opaque,xe=E.transmissive;if(A.setupLights(),N.isArrayCamera){const De=N.cameras;if(xe.length>0)for(let Fe=0,ke=De.length;Fe<ke;Fe++){const Ve=De[Fe];bi(Pe,xe,S,Ve)}de&&me.render(S);for(let Fe=0,ke=De.length;Fe<ke;Fe++){const Ve=De[Fe];Ei(E,S,Ve,Ve.viewport)}}else xe.length>0&&bi(Pe,xe,S,N),de&&me.render(S),Ei(E,S,N)}I!==null&&z===0&&(D.updateMultisampleRenderTarget(I),D.updateRenderTargetMipmap(I)),k&&U.end(x),S.isScene===!0&&S.onAfterRender(x,S,N),ce.resetDefaultState(),G=-1,q=null,C.pop(),C.length>0?(A=C[C.length-1],fe===!0&&Te.setGlobalState(x.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?E=w[w.length-1]:E=null};function _t(S,N,X,k){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ee.intersectsSprite(S)){k&&be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(He);const Pe=he.update(S),xe=S.material;xe.visible&&E.push(S,Pe,xe,X,be.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ee.intersectsObject(S))){const Pe=he.update(S),xe=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),be.copy(S.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),be.copy(Pe.boundingSphere.center)),be.applyMatrix4(S.matrixWorld).applyMatrix4(He)),Array.isArray(xe)){const De=Pe.groups;for(let Fe=0,ke=De.length;Fe<ke;Fe++){const Ve=De[Fe],at=xe[Ve.materialIndex];at&&at.visible&&E.push(S,Pe,at,X,be.z,Ve)}}else xe.visible&&E.push(S,Pe,xe,X,be.z,null)}}const _e=S.children;for(let Pe=0,xe=_e.length;Pe<xe;Pe++)_t(_e[Pe],N,X,k)}function Ei(S,N,X,k){const{opaque:B,transmissive:_e,transparent:Pe}=S;A.setupLightsView(X),fe===!0&&Te.setGlobalState(x.clippingPlanes,X),k&&Re.viewport(F.copy(k)),B.length>0&&pr(B,N,X),_e.length>0&&pr(_e,N,X),Pe.length>0&&pr(Pe,N,X),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function bi(S,N,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){const at=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new di(1,1,{generateMipmaps:!0,type:at?Li:Dn,minFilter:yr,samples:ht.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const _e=A.state.transmissionRenderTarget[k.id],Pe=k.viewport||F;_e.setSize(Pe.z*x.transmissionResolutionScale,Pe.w*x.transmissionResolutionScale);const xe=x.getRenderTarget(),De=x.getActiveCubeFace(),Fe=x.getActiveMipmapLevel();x.setRenderTarget(_e),x.getClearColor(le),ee=x.getClearAlpha(),ee<1&&x.setClearColor(16777215,.5),x.clear(),de&&me.render(X);const ke=x.toneMapping;x.toneMapping=un;const Ve=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),fe===!0&&Te.setGlobalState(x.clippingPlanes,k),pr(S,X,k),D.updateMultisampleRenderTarget(_e),D.updateRenderTargetMipmap(_e),et.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Mt=0,Nt=N.length;Mt<Nt;Mt++){const Ft=N[Mt],{object:Et,geometry:Ge,material:St,group:mt}=Ft;if(St.side===Mn&&Et.layers.test(k.layers)){const Fn=St.side;St.side=Sn,St.needsUpdate=!0,to(Et,X,k,Ge,St,mt),St.side=Fn,St.needsUpdate=!0,at=!0}}at===!0&&(D.updateMultisampleRenderTarget(_e),D.updateRenderTargetMipmap(_e))}x.setRenderTarget(xe,De,Fe),x.setClearColor(le,ee),Ve!==void 0&&(k.viewport=Ve),x.toneMapping=ke}function pr(S,N,X){const k=N.isScene===!0?N.overrideMaterial:null;for(let B=0,_e=S.length;B<_e;B++){const Pe=S[B],{object:xe,geometry:De,group:Fe}=Pe;let ke=Pe.material;ke.allowOverride===!0&&k!==null&&(ke=k),xe.layers.test(X.layers)&&to(xe,N,X,De,ke,Fe)}}function to(S,N,X,k,B,_e){S.onBeforeRender(x,N,X,k,B,_e),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(x,N,X,k,S,_e),B.transparent===!0&&B.side===Mn&&B.forceSinglePass===!1?(B.side=Sn,B.needsUpdate=!0,x.renderBufferDirect(X,N,k,B,S,_e),B.side=ir,B.needsUpdate=!0,x.renderBufferDirect(X,N,k,B,S,_e),B.side=Mn):x.renderBufferDirect(X,N,k,B,S,_e),S.onAfterRender(x,N,X,k,B,_e)}function ws(S,N,X){N.isScene!==!0&&(N=ge);const k=_.get(S),B=A.state.lights,_e=A.state.shadowsArray,Pe=B.state.version,xe=Ce.getParameters(S,B.state,_e,N,X),De=Ce.getProgramCacheKey(xe);let Fe=k.programs;k.environment=S.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(S.isMeshStandardMaterial?te:j).get(S.envMap||k.environment),k.envMapRotation=k.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",Xt),Fe=new Map,k.programs=Fe);let ke=Fe.get(De);if(ke!==void 0){if(k.currentProgram===ke&&k.lightsStateVersion===Pe)return rd(S,xe),ke}else xe.uniforms=Ce.getUniforms(S),S.onBeforeCompile(xe,x),ke=Ce.acquireProgram(xe,De),Fe.set(De,ke),k.uniforms=xe.uniforms;const Ve=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ve.clippingPlanes=Te.uniform),rd(S,xe),k.needsLights=Rx(S),k.lightsStateVersion=Pe,k.needsLights&&(Ve.ambientLightColor.value=B.state.ambient,Ve.lightProbe.value=B.state.probe,Ve.directionalLights.value=B.state.directional,Ve.directionalLightShadows.value=B.state.directionalShadow,Ve.spotLights.value=B.state.spot,Ve.spotLightShadows.value=B.state.spotShadow,Ve.rectAreaLights.value=B.state.rectArea,Ve.ltc_1.value=B.state.rectAreaLTC1,Ve.ltc_2.value=B.state.rectAreaLTC2,Ve.pointLights.value=B.state.point,Ve.pointLightShadows.value=B.state.pointShadow,Ve.hemisphereLights.value=B.state.hemi,Ve.directionalShadowMap.value=B.state.directionalShadowMap,Ve.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ve.spotShadowMap.value=B.state.spotShadowMap,Ve.spotLightMatrix.value=B.state.spotLightMatrix,Ve.spotLightMap.value=B.state.spotLightMap,Ve.pointShadowMap.value=B.state.pointShadowMap,Ve.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=ke,k.uniformsList=null,ke}function id(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Ka.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function rd(S,N){const X=_.get(S);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Ax(S,N,X,k,B){N.isScene!==!0&&(N=ge),D.resetTextureUnits();const _e=N.fog,Pe=k.isMeshStandardMaterial?N.environment:null,xe=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:es,De=(k.isMeshStandardMaterial?te:j).get(k.envMap||Pe),Fe=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ve=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,Mt=!!X.morphAttributes.color;let Nt=un;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Nt=x.toneMapping);const Ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Et=Ft!==void 0?Ft.length:0,Ge=_.get(k),St=A.state.lights;if(fe===!0&&(we===!0||S!==q)){const dn=S===q&&k.id===G;Te.setState(k,S,dn)}let mt=!1;k.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==St.state.version||Ge.outputColorSpace!==xe||B.isBatchedMesh&&Ge.batching===!1||!B.isBatchedMesh&&Ge.batching===!0||B.isBatchedMesh&&Ge.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ge.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ge.instancing===!1||!B.isInstancedMesh&&Ge.instancing===!0||B.isSkinnedMesh&&Ge.skinning===!1||!B.isSkinnedMesh&&Ge.skinning===!0||B.isInstancedMesh&&Ge.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ge.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ge.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ge.instancingMorph===!1&&B.morphTexture!==null||Ge.envMap!==De||k.fog===!0&&Ge.fog!==_e||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Te.numPlanes||Ge.numIntersection!==Te.numIntersection)||Ge.vertexAlphas!==Fe||Ge.vertexTangents!==ke||Ge.morphTargets!==Ve||Ge.morphNormals!==at||Ge.morphColors!==Mt||Ge.toneMapping!==Nt||Ge.morphTargetsCount!==Et)&&(mt=!0):(mt=!0,Ge.__version=k.version);let Fn=Ge.currentProgram;mt===!0&&(Fn=ws(k,N,B));let Rs=!1,On=!1,ua=!1;const Tt=Fn.getUniforms(),An=Ge.uniforms;if(Re.useProgram(Fn.program)&&(Rs=!0,On=!0,ua=!0),k.id!==G&&(G=k.id,On=!0),Rs||q!==S){Re.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Tt.setValue(P,"projectionMatrix",S.projectionMatrix),Tt.setValue(P,"viewMatrix",S.matrixWorldInverse);const wn=Tt.map.cameraPosition;wn!==void 0&&wn.setValue(P,je.setFromMatrixPosition(S.matrixWorld)),ht.logarithmicDepthBuffer&&Tt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Tt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),q!==S&&(q=S,On=!0,ua=!0)}if(Ge.needsLights&&(St.state.directionalShadowMap.length>0&&Tt.setValue(P,"directionalShadowMap",St.state.directionalShadowMap,D),St.state.spotShadowMap.length>0&&Tt.setValue(P,"spotShadowMap",St.state.spotShadowMap,D),St.state.pointShadowMap.length>0&&Tt.setValue(P,"pointShadowMap",St.state.pointShadowMap,D)),B.isSkinnedMesh){Tt.setOptional(P,B,"bindMatrix"),Tt.setOptional(P,B,"bindMatrixInverse");const dn=B.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Tt.setValue(P,"boneTexture",dn.boneTexture,D))}B.isBatchedMesh&&(Tt.setOptional(P,B,"batchingTexture"),Tt.setValue(P,"batchingTexture",B._matricesTexture,D),Tt.setOptional(P,B,"batchingIdTexture"),Tt.setValue(P,"batchingIdTexture",B._indirectTexture,D),Tt.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&Tt.setValue(P,"batchingColorTexture",B._colorsTexture,D));const Yn=X.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&Ze.update(B,X,Fn),(On||Ge.receiveShadow!==B.receiveShadow)&&(Ge.receiveShadow=B.receiveShadow,Tt.setValue(P,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(An.envMap.value=De,An.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(An.envMapIntensity.value=N.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=W0()),On&&(Tt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&wx(An,ua),_e&&k.fog===!0&&Ue.refreshFogUniforms(An,_e),Ue.refreshMaterialUniforms(An,k,Me,Se,A.state.transmissionRenderTarget[S.id]),Ka.upload(P,id(Ge),An,D)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ka.upload(P,id(Ge),An,D),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Tt.setValue(P,"center",B.center),Tt.setValue(P,"modelViewMatrix",B.modelViewMatrix),Tt.setValue(P,"normalMatrix",B.normalMatrix),Tt.setValue(P,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const dn=k.uniformsGroups;for(let wn=0,pc=dn.length;wn<pc;wn++){const Vr=dn[wn];K.update(Vr,Fn),K.bind(Vr,Fn)}}return Fn}function wx(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Rx(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,N,X){const k=_.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),_.get(S.texture).__webglTexture=N,_.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const X=_.get(S);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0};const Cx=P.createFramebuffer();this.setRenderTarget=function(S,N=0,X=0){I=S,R=N,z=X;let k=null,B=!1,_e=!1;if(S){const xe=_.get(S);if(xe.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(P.FRAMEBUFFER,xe.__webglFramebuffer),F.copy(S.viewport),V.copy(S.scissor),Z=S.scissorTest,Re.viewport(F),Re.scissor(V),Re.setScissorTest(Z),G=-1;return}else if(xe.__webglFramebuffer===void 0)D.setupRenderTarget(S);else if(xe.__hasExternalTextures)D.rebindTextures(S,_.get(S.texture).__webglTexture,_.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ke=S.depthTexture;if(xe.__boundDepthTexture!==ke){if(ke!==null&&_.has(ke)&&(S.width!==ke.image.width||S.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(S)}}const De=S.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(_e=!0);const Fe=_.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?k=Fe[N][X]:k=Fe[N],B=!0):S.samples>0&&D.useMultisampledRTT(S)===!1?k=_.get(S).__webglMultisampledFramebuffer:Array.isArray(Fe)?k=Fe[X]:k=Fe,F.copy(S.viewport),V.copy(S.scissor),Z=S.scissorTest}else F.copy(W).multiplyScalar(Me).floor(),V.copy(ne).multiplyScalar(Me).floor(),Z=pe;if(X!==0&&(k=Cx),Re.bindFramebuffer(P.FRAMEBUFFER,k)&&Re.drawBuffers(S,k),Re.viewport(F),Re.scissor(V),Re.setScissorTest(Z),B){const xe=_.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,X)}else if(_e){const xe=N;for(let De=0;De<S.textures.length;De++){const Fe=_.get(S.textures[De]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+De,Fe.__webglTexture,X,xe)}}else if(S!==null&&X!==0){const xe=_.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,X)}G=-1},this.readRenderTargetPixels=function(S,N,X,k,B,_e,Pe,xe=0){if(!(S&&S.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De){Re.bindFramebuffer(P.FRAMEBUFFER,De);try{const Fe=S.textures[xe],ke=Fe.format,Ve=Fe.type;if(!ht.textureFormatReadable(ke)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Ve)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-k&&X>=0&&X<=S.height-B&&(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),P.readPixels(N,X,k,B,J.convert(ke),J.convert(Ve),_e))}finally{const Fe=I!==null?_.get(I).__webglFramebuffer:null;Re.bindFramebuffer(P.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(S,N,X,k,B,_e,Pe,xe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De)if(N>=0&&N<=S.width-k&&X>=0&&X<=S.height-B){Re.bindFramebuffer(P.FRAMEBUFFER,De);const Fe=S.textures[xe],ke=Fe.format,Ve=Fe.type;if(!ht.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,at),P.bufferData(P.PIXEL_PACK_BUFFER,_e.byteLength,P.STREAM_READ),S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),P.readPixels(N,X,k,B,J.convert(ke),J.convert(Ve),0);const Mt=I!==null?_.get(I).__webglFramebuffer:null;Re.bindFramebuffer(P.FRAMEBUFFER,Mt);const Nt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Hp(P,Nt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,at),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,_e),P.deleteBuffer(at),P.deleteSync(Nt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,X=0){const k=Math.pow(2,-X),B=Math.floor(S.image.width*k),_e=Math.floor(S.image.height*k),Pe=N!==null?N.x:0,xe=N!==null?N.y:0;D.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,Pe,xe,B,_e),Re.unbindTexture()};const Px=P.createFramebuffer(),Dx=P.createFramebuffer();this.copyTextureToTexture=function(S,N,X=null,k=null,B=0,_e=null){_e===null&&(B!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=B,B=0):_e=0);let Pe,xe,De,Fe,ke,Ve,at,Mt,Nt;const Ft=S.isCompressedTexture?S.mipmaps[_e]:S.image;if(X!==null)Pe=X.max.x-X.min.x,xe=X.max.y-X.min.y,De=X.isBox3?X.max.z-X.min.z:1,Fe=X.min.x,ke=X.min.y,Ve=X.isBox3?X.min.z:0;else{const Yn=Math.pow(2,-B);Pe=Math.floor(Ft.width*Yn),xe=Math.floor(Ft.height*Yn),S.isDataArrayTexture?De=Ft.depth:S.isData3DTexture?De=Math.floor(Ft.depth*Yn):De=1,Fe=0,ke=0,Ve=0}k!==null?(at=k.x,Mt=k.y,Nt=k.z):(at=0,Mt=0,Nt=0);const Et=J.convert(N.format),Ge=J.convert(N.type);let St;N.isData3DTexture?(D.setTexture3D(N,0),St=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(D.setTexture2DArray(N,0),St=P.TEXTURE_2D_ARRAY):(D.setTexture2D(N,0),St=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const mt=P.getParameter(P.UNPACK_ROW_LENGTH),Fn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Rs=P.getParameter(P.UNPACK_SKIP_PIXELS),On=P.getParameter(P.UNPACK_SKIP_ROWS),ua=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Fe),P.pixelStorei(P.UNPACK_SKIP_ROWS,ke),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ve);const Tt=S.isDataArrayTexture||S.isData3DTexture,An=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const Yn=_.get(S),dn=_.get(N),wn=_.get(Yn.__renderTarget),pc=_.get(dn.__renderTarget);Re.bindFramebuffer(P.READ_FRAMEBUFFER,wn.__webglFramebuffer),Re.bindFramebuffer(P.DRAW_FRAMEBUFFER,pc.__webglFramebuffer);for(let Vr=0;Vr<De;Vr++)Tt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(S).__webglTexture,B,Ve+Vr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(N).__webglTexture,_e,Nt+Vr)),P.blitFramebuffer(Fe,ke,Pe,xe,at,Mt,Pe,xe,P.DEPTH_BUFFER_BIT,P.NEAREST);Re.bindFramebuffer(P.READ_FRAMEBUFFER,null),Re.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||_.has(S)){const Yn=_.get(S),dn=_.get(N);Re.bindFramebuffer(P.READ_FRAMEBUFFER,Px),Re.bindFramebuffer(P.DRAW_FRAMEBUFFER,Dx);for(let wn=0;wn<De;wn++)Tt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Yn.__webglTexture,B,Ve+wn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Yn.__webglTexture,B),An?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,dn.__webglTexture,_e,Nt+wn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,dn.__webglTexture,_e),B!==0?P.blitFramebuffer(Fe,ke,Pe,xe,at,Mt,Pe,xe,P.COLOR_BUFFER_BIT,P.NEAREST):An?P.copyTexSubImage3D(St,_e,at,Mt,Nt+wn,Fe,ke,Pe,xe):P.copyTexSubImage2D(St,_e,at,Mt,Fe,ke,Pe,xe);Re.bindFramebuffer(P.READ_FRAMEBUFFER,null),Re.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else An?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(St,_e,at,Mt,Nt,Pe,xe,De,Et,Ge,Ft.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(St,_e,at,Mt,Nt,Pe,xe,De,Et,Ft.data):P.texSubImage3D(St,_e,at,Mt,Nt,Pe,xe,De,Et,Ge,Ft):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,_e,at,Mt,Pe,xe,Et,Ge,Ft.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,_e,at,Mt,Ft.width,Ft.height,Et,Ft.data):P.texSubImage2D(P.TEXTURE_2D,_e,at,Mt,Pe,xe,Et,Ge,Ft);P.pixelStorei(P.UNPACK_ROW_LENGTH,mt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Fn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rs),P.pixelStorei(P.UNPACK_SKIP_ROWS,On),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ua),_e===0&&N.generateMipmaps&&P.generateMipmap(St),Re.unbindTexture()},this.initRenderTarget=function(S){_.get(S).__webglFramebuffer===void 0&&D.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?D.setTextureCube(S,0):S.isData3DTexture?D.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?D.setTexture2DArray(S,0):D.setTexture2D(S,0),Re.unbindTexture()},this.resetState=function(){R=0,z=0,I=null,Re.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}var X0=ze('<div class="star-container svelte-1a66aez"></div>');function Y0(n,e){pn(e,!0);let t=qe(e,"images",19,()=>[]);const i={radius:1.1,cardWidth:1.65,cardHeight:1.15,baseRotationSpeed:.006,portraitSpeedMultiplier:1.3,tiltLoopSpeed:.005,tiltLimit:Math.PI,baseTilt:{tiltX:.65,tiltZ:.25},landscape:{cameraZ:9,masterRotationZ:0},portrait:{cameraZ:12,masterRotationZ:75*(Math.PI/180)}};let r;nr(()=>{if(!t().length||!r)return;const a=t().length;let o,l,c=null,f=!1;try{o=new sa({antialias:!0,alpha:!0})}catch{return}const u=new Qs;u.fog=new Ya(0,.06);const d=new an(35,1,.1,30);o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.toneMapping=un,o.outputColorSpace=en,o.setClearColor(0,0),r.appendChild(o.domElement);function m(F){F.preventDefault(),cancelAnimationFrame(l)}function g(){f||q()}o.domElement.addEventListener("webglcontextlost",m),o.domElement.addEventListener("webglcontextrestored",g);const v=new ii;u.add(v);const p=new ii;v.add(p);const h=new ii;p.add(h);const b=new Rm(16777215,.6);u.add(b);const M=new wm(16777215,1.2);M.position.set(3,4,5),u.add(M);const E=new Hi(1,1),A=new ta,w=[],C=[];for(let F=0;F<a;F++){const V=A.load(t()[F].url);V.minFilter=yt,V.magFilter=yt,C.push(V);const Z=new xm({map:V,side:Mn,roughness:.7,metalness:.05});w.push(Z);const le=new bn(E,Z),ee=F/a*Math.PI*2,ae=Math.sin(ee)*i.radius,Se=Math.cos(ee)*i.radius;le.position.set(ae,0,Se),le.rotation.y=ee+Math.PI/2,le.scale.set(i.cardWidth,i.cardHeight,1),h.add(le)}let U=-i.tiltLimit,x=1,y=0,R=i.baseRotationSpeed;function z(){if(!r)return;const{width:F,height:V}=r.getBoundingClientRect();if(F===0||V===0)return;const Z=F/V<1,le=Z?i.portrait:i.landscape;d.aspect=F/V,d.updateProjectionMatrix(),o.setSize(F,V),d.position.set(0,0,le.cameraZ),d.lookAt(0,0,0);const ee=i.radius*Math.sin(i.baseTilt.tiltX)/2.2;v.position.y=ee,v.rotation.z=le.masterRotationZ,R=Z?i.baseRotationSpeed*i.portraitSpeedMultiplier:i.baseRotationSpeed}z(),c=new ResizeObserver(z),c.observe(r);let I=!0;const G=new IntersectionObserver(([F])=>{I=F.isIntersecting,I&&!f?q():cancelAnimationFrame(l)},{threshold:0});G.observe(r);function q(){!I||f||(l=requestAnimationFrame(q),U+=i.tiltLoopSpeed*x,U>=i.tiltLimit?(U=i.tiltLimit,x=-1):U<=-i.tiltLimit&&(U=-i.tiltLimit,x=1),y+=R,p.rotation.y=U,p.rotation.x=i.baseTilt.tiltX,p.rotation.z=i.baseTilt.tiltZ,h.rotation.y=y-U,o.render(u,d))}return q(),()=>{f=!0,cancelAnimationFrame(l),c&&c.disconnect(),G.disconnect(),o.domElement.removeEventListener("webglcontextlost",m),o.domElement.removeEventListener("webglcontextrestored",g),h.clear(),p.clear(),v.clear(),u.clear(),E.dispose();for(const F of w)F.dispose();for(const F of C)F.dispose();w.length=0,C.length=0,o.dispose(),o.forceContextLoss(),o.domElement.parentNode&&o.domElement.parentNode.removeChild(o.domElement)}});var s=X0();tr(s,a=>r=a,()=>r),Ie(n,s),mn()}var q0=ze('<div class="helix-wrapper svelte-vcb9pb"><div class="helix-vignette top svelte-vcb9pb"></div> <div class="helix-container svelte-vcb9pb"></div> <div class="helix-vignette bottom svelte-vcb9pb"></div></div>');function j0(n,e){pn(e,!0);let t=qe(e,"images",19,()=>[]);const i=2.4,r=1.6,s=.15,a=16,o=48,l=Math.PI*4/3,c=-20*(Math.PI/180),f=.003,u=10,d=.15,m=.05,g=`
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
    `,v=`
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
    `;let p;nr(()=>{if(!t().length||!p)return;const M=t().length;let E,A=0,w=!1,C=null,U=!1;try{E=new sa({antialias:!0,alpha:!0})}catch{return}const x=new Qs;x.fog=new Ya(0,.04);const y=new an(40,1,.1,30);E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.toneMapping=un,E.outputColorSpace=en,E.setClearColor(0,0),p.appendChild(E.domElement);function R(ge){ge.preventDefault(),He()}function z(){!U&&fe&&we()}E.domElement.addEventListener("webglcontextlost",R),E.domElement.addEventListener("webglcontextrestored",z);const I=new H(3,4,5).normalize(),G=new ii;G.rotation.z=c,x.add(G);const q=M*r+(M-1)*s,F=0,V=l/q,Z=new Hi(i,r,a,o),le=new ta,ee=[],ae=[];for(let ge=0;ge<M;ge++){const de=le.load(t()[ge].url);de.minFilter=yt,de.magFilter=yt,ae.push(de);const We=new yn({uniforms:{uTwist:{value:V},uOffset:{value:0},uStripCenter:{value:F},uTexture:{value:de},uPlaneSize:{value:new Ke(i,r)},uImageRes:{value:new Ke(1,1)},uLightDir:{value:I},uAmbient:{value:.6},uDiffuse:{value:.5}},vertexShader:g,fragmentShader:v,side:Mn});de.userData.materials||(de.userData.materials=[],de.onUpdate=()=>{if(de.image){const et=de.image.width||1,ht=de.image.height||1;for(const Re of de.userData.materials)Re.uniforms.uImageRes.value.set(et,ht)}}),de.userData.materials.push(We),ee.push(We);const P=new bn(Z,We),rt=-q/2+r/2+ge*(r+s);P.position.y=rt,G.add(P)}function Se(){if(!p)return;const{width:ge,height:de}=p.getBoundingClientRect();ge===0||de===0||(y.aspect=ge/de,y.updateProjectionMatrix(),E.setSize(ge,de),y.position.set(0,0,u),y.lookAt(0,0,0))}Se(),C=new ResizeObserver(Se),C.observe(p);let Me=0,Oe=0,Xe=0,W=0;function ne(ge){const de=p.getBoundingClientRect(),We=(ge.clientX-de.left)/de.width*2-1;Me=-((ge.clientY-de.top)/de.height*2-1)*d,Oe=We*d}function pe(){Me=0,Oe=0}p.addEventListener("mousemove",ne),p.addEventListener("mouseleave",pe);let Ee=0,fe=!0;function we(){U||!fe||w||(w=!0,A=requestAnimationFrame(je))}function He(){w&&(cancelAnimationFrame(A),A=0,w=!1)}function je(){if(!fe||U){w=!1;return}A=requestAnimationFrame(je),Ee+=f,Xe+=(Me-Xe)*m,W+=(Oe-W)*m,G.rotation.x=Xe,G.rotation.y=W;for(const ge of ee)ge.uniforms.uOffset.value=Ee;E.render(x,y)}const be=new IntersectionObserver(([ge])=>{fe=ge.isIntersecting,fe&&!U?we():He()},{threshold:0});return be.observe(p),we(),()=>{U=!0,He(),C&&C.disconnect(),be.disconnect(),p==null||p.removeEventListener("mousemove",ne),p==null||p.removeEventListener("mouseleave",pe),E.domElement.removeEventListener("webglcontextlost",R),E.domElement.removeEventListener("webglcontextrestored",z),G.clear(),x.clear(),Z.dispose();for(const ge of ee)ge.dispose();for(const ge of ae)ge.userData.materials=null,ge.dispose();ee.length=0,ae.length=0,E.dispose(),E.forceContextLoss(),E.domElement.parentNode&&E.domElement.parentNode.removeChild(E.domElement)}});var h=q0(),b=Je(oe(h),2);tr(b,M=>p=M,()=>p),Ie(n,h),mn()}var $0=ze('<div class="drum-shell svelte-6qlern"><div class="drum-shadow svelte-6qlern" aria-hidden="true"></div> <div class="drum-container svelte-6qlern"></div></div>');function Z0(n,e){pn(e,!0);let t=qe(e,"images",19,()=>[]);const i=2*Math.PI,r=2.4,s=1.6,a=2,o=12,l=.006,c=[.7,.95,1.2],f=`
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
    `,u=`
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
    `;let d;nr(()=>{if(!t().length||!d)return;let v,p=0,h=!1,b=null,M=!1;try{v=new sa({antialias:!0,alpha:!0})}catch{return}const E=new Qs,A=new an(40,1,.1,100);A.position.set(0,0,o),A.lookAt(0,0,0),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.toneMapping=un,v.outputColorSpace=en,v.setClearColor(0,0),d.appendChild(v.domElement),v.domElement.addEventListener("webglcontextlost",be=>{be.preventDefault(),Ee()}),v.domElement.addEventListener("webglcontextrestored",()=>{!M&&W&&pe()});const w=new ii;w.position.y=.5,w.rotation.z=10*(Math.PI/180),w.rotation.x=15*(Math.PI/180),E.add(w);const C=new ta,U=[],x=new Hi(r,s,16,1),y=t().length,R=5,z=i/R,I=new Map;function G(be){if(I.has(be))return I.get(be);const ge=C.load(t()[be].url,de=>{if(de.image){const We=de.image.width||1,P=de.image.height||1;for(const rt of de.userData.materials||[])rt.uniforms.uImageRes.value.set(We,P)}});return ge.minFilter=yt,ge.magFilter=yt,I.set(be,ge),ge}for(let be=0;be<R;be++){const ge=be%y,de=-be*z,We=G(ge),P=new yn({uniforms:{uRadius:{value:a},uBaseAngle:{value:de},uScaleY:{value:0},uTexture:{value:We},uPlaneSize:{value:new Ke(r,s)},uImageRes:{value:new Ke(1,1)},uLightDir:{value:new H(c[0],c[1],c[2])},uAmbientStrength:{value:.6},uDiffuseStrength:{value:.55},uSpecularStrength:{value:.12},uRimStrength:{value:.08}},vertexShader:f,fragmentShader:u,side:Mn});We.userData.materials||(We.userData.materials=[]),We.userData.materials.push(P);const rt=new bn(x,P);w.add(rt),U.push(P)}let q;function F(){if(!d)return;const{width:be,height:ge}=d.getBoundingClientRect();be===0||ge===0||(A.aspect=be/ge,A.updateProjectionMatrix(),v.setSize(be,ge))}b=new ResizeObserver(()=>{clearTimeout(q),q=setTimeout(F,100)}),b.observe(d),requestAnimationFrame(F);const V=.6,Z=3,le=.6,ee=.12,ae=ee*(R-1),Se=V+ae,Me=Se+Z,Oe=Me+le+ae;let Xe=0,W=!0,ne=-1;function pe(){M||!W||h||(h=!0,p=requestAnimationFrame(He))}function Ee(){h&&(cancelAnimationFrame(p),p=0,h=!1)}function fe(be){return be<.5?4*be*be*be:1-Math.pow(-2*be+2,3)/2}function we(be,ge){const de=(R-1-be)*ee,We=Math.max(0,Math.min(1,(ge-de)/V));if(ge<Se)return fe(We);if(ge<Me)return 1;const P=(R-1-be)*ee,rt=Math.max(0,Math.min(1,(ge-Me-P)/le));return 1-fe(rt)}function He(){if(!W||M){h=!1;return}p=requestAnimationFrame(He);const be=performance.now()/1e3;ne<0&&(ne=be);const ge=be-ne;if(ge>=Oe){for(let de=0;de<R;de++)U[de].uniforms.uScaleY.value=0;v.render(E,A);return}Xe+=l;for(let de=0;de<R;de++){const We=-de*z;U[de].uniforms.uBaseAngle.value=We+Xe,U[de].uniforms.uScaleY.value=we(de,ge)}v.render(E,A)}const je=new IntersectionObserver(([be])=>{W=be.isIntersecting,W&&!M?pe():Ee()},{threshold:0});return je.observe(d),pe(),()=>{M=!0,Ee(),b&&b.disconnect(),je.disconnect(),x.dispose();for(const be of U)be.dispose();I.forEach(be=>be.dispose()),I.clear(),v.dispose(),v.domElement.parentNode&&v.domElement.parentNode.removeChild(v.domElement)}});var m=$0(),g=Je(oe(m),2);tr(g,v=>d=v,()=>d),Ie(n,m),mn()}var K0=ze("<c-indexcard></c-indexcard>",2),J0=ze('<div class="mobile-fallback svelte-6olp7"></div>'),Q0=ze('<div class="canvas-container svelte-6olp7"></div>');function ex(n,e){pn(e,!0);let t=qe(e,"projects",19,()=>[]);const i=2*Math.PI,r=6,s=6,a=8,o=20,l=991,c=3e-4,f=.004,u=.92,d=5e-4,m=.08,g=.001,v=120,p=.2,h=.2,b=new H;let M=Ht(void 0),E=Ht(!1);function A(I,G,q){const F=Math.max(0,Math.min(1,(q-I)/(G-I)));return F*F*(3-2*F)}const w=`
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
    `;function U(){Dt(E,window.innerWidth<=l)}nr(()=>{if(U(),window.addEventListener("resize",U),O(E)||!t().length||!O(M))return()=>{window.removeEventListener("resize",U)};let I,G,q=null;try{I=new sa({antialias:!0,alpha:!0})}catch{return Dt(E,!0),()=>{window.removeEventListener("resize",U)}}let F=!1;const V=new Qs,Z=new an(45,1,.1,50);Z.position.set(0,0,o),Z.lookAt(0,0,0),I.setPixelRatio(Math.min(window.devicePixelRatio,2)),I.toneMapping=un,I.outputColorSpace=en,O(M).appendChild(I.domElement);function le(ie){ie.preventDefault(),cancelAnimationFrame(G)}function ee(){F||L()}I.domElement.addEventListener("webglcontextlost",le),I.domElement.addEventListener("webglcontextrestored",ee);const ae=new ii;V.add(ae);const Se=new ta,Me=[],Oe=[],Xe=[],W=new Hi(r,s,1,16),ne=t().length,pe=s/a,Ee=Math.ceil(i/(pe+.04)),fe=Math.max(ne,Math.floor(Ee/ne)*ne),we=i/fe,He=new Map;function je(ie){if(He.has(ie))return He.get(ie);const J=Se.load(t()[ie].thumbnail_base);return J.minFilter=yt,J.magFilter=yt,He.set(ie,J),J}for(let ie=0;ie<fe;ie++){const J=ie%ne,ce=t()[J],K=-ie*we,$=je(J),re=new yn({uniforms:{uRadius:{value:a},uBaseAngle:{value:K},uTexture:{value:$},uPlaneSize:{value:new Ke(r,s)},uImageRes:{value:new Ke(1,1)},uOpacity:{value:1}},vertexShader:w,fragmentShader:C,transparent:!0,side:Mn});$.userData.materials||($.userData.materials=[],$.onUpdate=()=>{if($.image){const nt=$.image,it=nt.width||1,Xt=nt.height||1;for(const Ut of $.userData.materials)Ut.uniforms.uImageRes.value.set(it,Xt)}}),$.userData.materials.push(re);const Ne=new bn(W,re);Ne.userData={meshIndex:ie,projectIndex:J,project:ce,baseSeatAngle:K},ae.add(Ne),Me.push(re),Oe.push(Ne),Xe.push(1)}function be(){if(!O(M))return;const{width:ie,height:J}=O(M).getBoundingClientRect();ie===0||J===0||(Z.aspect=ie/J,Z.updateProjectionMatrix(),I.setSize(ie,J))}q=new ResizeObserver(be),q.observe(O(M)),requestAnimationFrame(be);const ge=new Tf,de=new Ke;let We=-1,P=!1,rt=null;function et(ie){if(!O(M))return-1;const J=O(M).getBoundingClientRect();de.x=(ie.clientX-J.left)/J.width*2-1,de.y=-((ie.clientY-J.top)/J.height)*2+1,ge.setFromCamera(de,Z);const ce=ge.ray.origin,K=ge.ray.direction,$=K.y*K.y+K.z*K.z,re=2*(ce.y*K.y+ce.z*K.z),Ne=ce.y*ce.y+ce.z*ce.z-a*a,nt=re*re-4*$*Ne;if(nt<0)return-1;const it=(-re-Math.sqrt(nt))/(2*$);if(it<0||(b.copy(ce).addScaledVector(K,it),Math.abs(b.x)>r/2))return-1;const Xt=Math.atan2(b.y,b.z),Ut=s/2/a;let Le=-1,Ye=1/0;for(let ut=0;ut<fe;ut++){if(!Oe[ut].visible)continue;const Ct=Me[ut].uniforms.uBaseAngle.value;let Pt=Xt-Ct;Pt=((Pt+Math.PI)%i+i)%i-Math.PI,Math.abs(Pt)<Ut&&Math.abs(Pt)<Ye&&(Ye=Math.abs(Pt),Le=ut)}return Le}function ht(ie){const J=et(ie);J>=0?(We=J,P=!0,O(M).style.cursor="pointer"):(We=-1,P=!1,O(M).style.cursor="default")}function Re(ie){rt=ie,ht(ie)}function T(){rt=null,We=-1,P=!1,O(M)&&(O(M).style.cursor="default")}function _(ie){var ce;const J=et(ie);if(J>=0){const K=Oe[J].userData.project;if(K!=null&&K.url){const $=(ce=O(M))==null?void 0:ce.closest("c-reel");$&&$.dispatchEvent(new CustomEvent("reel:exit",{bubbles:!0,detail:{url:K.url,project:K}}))}}}O(M).addEventListener("mousemove",Re),O(M).addEventListener("mouseleave",T),O(M).addEventListener("click",_);const D=O(M).closest("[data-canvas-map]");let j=0,te=0,Y=!1,ye=0,he=0,Ce=-1,Ue=0;function se(ie){ie.preventDefault(),te+=ie.deltaY*c,Y=!1,he=performance.now()}function ue(ie){Ue=ie.touches[0].clientY,te=0,Y=!1,he=performance.now()}function Te(ie){ie.preventDefault();const J=ie.touches[0].clientY;te=(Ue-J)*f,j+=te,Ue=J,he=performance.now()}function Ae(){he=performance.now()}D&&(D.addEventListener("wheel",se,{passive:!1}),D.addEventListener("touchstart",ue,{passive:!0}),D.addEventListener("touchmove",Te,{passive:!1}),D.addEventListener("touchend",Ae));let me=!0;const Ze=new IntersectionObserver(([ie])=>{me=ie.isIntersecting,me&&!F?L():cancelAnimationFrame(G)},{threshold:0});Ze.observe(O(M));function L(){var $;if(F||!me)return;G=requestAnimationFrame(L);const ie=performance.now();if(Y||(j+=te,te*=u),!Y&&Math.abs(te)<d&&ie-he>v){const re=(j%i+i)%i,Ne=Math.floor(re/we+.4);ye=Math.round(j/i)*i+Ne*we,Math.abs(ye-j)>i/2&&(ye+=j>ye?i:-i),Y=!0,te=0}Y&&(j+=(ye-j)*m,Math.abs(ye-j)<g&&(j=ye,Y=!1)),rt&&(Math.abs(te)>1e-4||Y)&&ht(rt);const J=(j%i+i)%i,ce=Math.round(J/we)%fe,K=ce%ne;for(let re=0;re<fe;re++){const nt=-re*we+j;Me[re].uniforms.uBaseAngle.value=nt;const it=(nt%i+i)%i,Xt=Math.cos(it),Ut=A(.3,.6,Xt);Oe[re].visible=Ut>.01;let Le;Oe[re].visible?P?Le=re===We?Ut:Ut*p:Le=re===ce?Ut:Ut*p:Le=0,Xe[re]=Le;const Ye=Me[re].uniforms.uOpacity.value;Me[re].uniforms.uOpacity.value+=(Xe[re]-Ye)*h}if(K!==Ce&&t()[K]){Ce=K;const re=($=O(M))==null?void 0:$.closest("c-reel");re&&re.dispatchEvent(new CustomEvent("reel:update",{bubbles:!0,detail:{project:t()[K],index:K}}))}I.render(V,Z)}return L(),requestAnimationFrame(()=>{var J;const ie=(J=O(M))==null?void 0:J.closest("c-reel");ie&&t()[0]&&(Ce=0,ie.dispatchEvent(new CustomEvent("reel:update",{bubbles:!0,detail:{project:t()[0],index:0}})))}),()=>{var ie,J,ce;F=!0,window.removeEventListener("resize",U),cancelAnimationFrame(G),q&&q.disconnect(),Ze.disconnect(),(ie=O(M))==null||ie.removeEventListener("mousemove",Re),(J=O(M))==null||J.removeEventListener("mouseleave",T),(ce=O(M))==null||ce.removeEventListener("click",_),D&&(D.removeEventListener("wheel",se),D.removeEventListener("touchstart",ue),D.removeEventListener("touchmove",Te),D.removeEventListener("touchend",Ae)),I.domElement.removeEventListener("webglcontextlost",le),I.domElement.removeEventListener("webglcontextrestored",ee),ae.clear(),V.clear(),W.dispose();for(const K of Me)K.dispose();He.forEach(K=>{K.userData.materials=null,K.dispose()}),He.clear(),Me.length=0,Oe.length=0,I.dispose(),I.forceContextLoss(),I.domElement.parentNode&&I.domElement.parentNode.removeChild(I.domElement)}});var x=Qi(),y=cn(x);{var R=I=>{var G=J0();oi(G,21,t,ai,(q,F)=>{var V=K0();Be(()=>bt(V,"href",O(F).url)),Be(()=>bt(V,"title",O(F).title)),Be(()=>bt(V,"backgroundimage",O(F).thumbnail_base)),Be(()=>bt(V,"overlayimage",O(F).thumbnail_overlay)),Ie(q,V)}),Ie(I,G)},z=I=>{var G=Q0();tr(G,q=>Dt(M,q),()=>O(M)),Ie(I,G)};Lt(y,I=>{O(E)?I(R):I(z,!1)})}Ie(n,x),mn()}var tx=ze("<c-indexcard></c-indexcard>",2),nx=ze('<div class="mobile-fallback svelte-5ts47l"></div>'),ix=ze('<div class="canvas-container svelte-5ts47l"></div>');function rx(n,e){pn(e,!0);let t=qe(e,"projects",19,()=>[]);const i=2,r=3.2*i,s=4.2*i,o=s+.28,l=0,c=o*4,f=4,u=0,d=8,m=80,g=-30*(Math.PI/180),v=0,p=2,h=.08,b=o*5,M=.004,E=.008,A=.91,w=o*.08,C=.2,U=.28,x=991,y=-.08;let R=Ht(void 0),z=Ht(!1);function I(){Dt(z,window.innerWidth<=x)}const G=`
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
    `,q=`
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
    `;nr(()=>{if(I(),window.addEventListener("resize",I),O(z)||!t().length||!O(R))return()=>{window.removeEventListener("resize",I)};let ee,ae=0,Se=!1,Me=null,Oe=!1;try{ee=new sa({antialias:!0,alpha:!0})}catch{return Dt(z,!0),()=>{window.removeEventListener("resize",I)}}const Xe=new Qs,W=new an(m,1,.1,60);W.position.set(f,u,d),W.lookAt(0,0,0),ee.setPixelRatio(Math.min(window.devicePixelRatio,2)),ee.toneMapping=un,ee.outputColorSpace=en,O(R).appendChild(ee.domElement);function ne(Le){Le.preventDefault(),it()}function pe(){!Oe&&Ne&&nt()}ee.domElement.addEventListener("webglcontextlost",ne),ee.domElement.addEventListener("webglcontextrestored",pe);const Ee=new ii;Ee.rotation.x=g,Ee.position.y=v,Xe.add(Ee);const fe=new ta,we=[],He=[],je=[],be=new Hi(r,s,1,16),ge=t().length,de=Math.ceil(d*2/o)+4,We=Math.max(ge*3,Math.ceil(de/ge)*ge),P=We*o,rt=P/2,et=new Map;function ht(Le){if(et.has(Le))return et.get(Le);const Ye=fe.load(t()[Le].thumbnail_base);return Ye.minFilter=yt,Ye.magFilter=yt,et.set(Le,Ye),Ye}for(let Le=0;Le<We;Le++){const Ye=Le%ge,ut=ht(Ye),Ct=-rt+o*.5+Le*o,Pt=new yn({uniforms:{uTexture:{value:ut},uPlaneSize:{value:new Ke(r,s)},uImageRes:{value:new Ke(1,1)},uOpacity:{value:1},uSeatY:{value:Ct},uViewCenterY:{value:0},uCurveStrength:{value:p},uCurveExp:{value:h},uCurveRange:{value:b}},vertexShader:G,fragmentShader:q,transparent:!0,side:Mn});ut.userData.materials||(ut.userData.materials=[],ut.onUpdate=()=>{if(ut.image){const Nn=ut.image,_t=Nn.width||1,Ei=Nn.height||1;for(const bi of ut.userData.materials)bi.uniforms.uImageRes.value.set(_t,Ei)}}),ut.userData.materials.push(Pt);const on=new bn(be,Pt);on.position.y=Ct,on.userData={meshIndex:Le,projectIndex:Ye,project:t()[Ye],baseSeatY:Ct},Ee.add(on),we.push(Pt),He.push(on),je.push(1)}function Re(){if(!O(R))return;const{width:Le,height:Ye}=O(R).getBoundingClientRect();Le===0||Ye===0||(W.aspect=Le/Ye,W.updateProjectionMatrix(),ee.setSize(Le,Ye))}Me=new ResizeObserver(Re),Me.observe(O(R)),requestAnimationFrame(Re);const T=new Tf,_=new Ke;let D=-1,j=!1,te=null;function Y(Le){if(!O(R))return;const Ye=O(R).getBoundingClientRect();_.x=(Le.clientX-Ye.left)/Ye.width*2-1,_.y=-((Le.clientY-Ye.top)/Ye.height)*2+1,T.setFromCamera(_,W);const ut=T.intersectObjects(He);ut.length>0?(D=ut[0].object.userData.meshIndex,j=!0,O(R).style.cursor="pointer"):(D=-1,j=!1,O(R).style.cursor="default")}function ye(Le){te=Le,Y(Le)}function he(){te=null,D=-1,j=!1,O(R)&&(O(R).style.cursor="default")}function Ce(Le){if(!O(R))return;const Ye=O(R).getBoundingClientRect();_.x=(Le.clientX-Ye.left)/Ye.width*2-1,_.y=-((Le.clientY-Ye.top)/Ye.height)*2+1,T.setFromCamera(_,W);const ut=T.intersectObjects(He);if(ut.length>0){const Pt=ut[0].object.userData.project;if(Pt!=null&&Pt.url){const on=O(R).closest("c-strip");on&&on.dispatchEvent(new CustomEvent("strip:exit",{bubbles:!0,detail:{url:Pt.url,project:Pt}}))}}}O(R).addEventListener("mousemove",ye),O(R).addEventListener("mouseleave",he),O(R).addEventListener("click",Ce);const Ue=O(R).closest("[data-canvas-map]");let se=0,ue=0,Te=-1,Ae=-1,me=0;function Ze(Le,Ye){return((Le+Ye+rt)%P+P)%P-rt}function L(Le){return((Le+rt)%P+P)%P-rt}function ie(Le){T.setFromCamera(new Ke(0,Le),W);const{origin:Ye,direction:ut}=T.ray,Ct=-Ye.z/ut.z;return Ye.y+Ct*ut.y}const J=He[0].userData.baseSeatY,ce=ie(y);se=L(ce-J);function K(Le){Le.preventDefault(),ue+=Le.deltaY*M}function $(Le){me=Le.touches[0].clientY,ue=0}function re(Le){Le.preventDefault();const Ye=Le.touches[0].clientY;ue=(me-Ye)*E,se+=ue,me=Ye}Ue&&(Ue.addEventListener("wheel",K,{passive:!1}),Ue.addEventListener("touchstart",$,{passive:!0}),Ue.addEventListener("touchmove",re,{passive:!1}));let Ne=!0;function nt(){Oe||!Ne||Se||(Se=!0,ae=requestAnimationFrame(Ut))}function it(){Se&&(cancelAnimationFrame(ae),ae=0,Se=!1)}const Xt=new IntersectionObserver(([Le])=>{Ne=Le.isIntersecting,Ne&&!Oe?nt():it()},{threshold:0});Xt.observe(O(R));function Ut(){var Nn;if(Oe||!Ne){Se=!1;return}ae=requestAnimationFrame(Ut),T.setFromCamera(new Ke(0,y),W);const Le=T.ray,Ye=-Le.origin.z/Le.direction.z,ut=Le.origin.y+Ye*Le.direction.y;se+=ue,ue*=A,te&&Math.abs(ue)>.001&&Y(te);let Ct=0,Pt=1/0;for(let _t=0;_t<We;_t++){const Ei=He[_t].userData.baseSeatY,bi=Ze(Ei,se);He[_t].position.y=bi,He[_t].position.z=0,He[_t].rotation.x=0,we[_t].uniforms.uSeatY.value=bi,we[_t].uniforms.uViewCenterY.value=ut;const pr=Math.abs(bi-ut);pr<Pt&&(Pt=pr,Ct=_t);const to=Math.min(pr/c,1),ws=1-l*to;He[_t].scale.set(ws,1,1)}if(Ae>=0){const _t=Math.abs(He[Ae].position.y-ut);Ct!==Ae&&Pt>_t-w&&(Ct=Ae,Pt=_t)}Ae=Ct;const on=He[Ct].userData.projectIndex;for(let _t=0;_t<We;_t++){let Ei;j?Ei=_t===D?1:C:Ei=_t===Ct?1:C,je[_t]=Ei;const bi=we[_t].uniforms.uOpacity.value;we[_t].uniforms.uOpacity.value+=(je[_t]-bi)*U}if(on!==Te&&t()[on]){Te=on;const _t=(Nn=O(R))==null?void 0:Nn.closest("c-strip");_t&&_t.dispatchEvent(new CustomEvent("strip:update",{bubbles:!0,detail:{project:t()[on],index:on}}))}ee.render(Xe,W)}return nt(),requestAnimationFrame(()=>{var Ye;const Le=(Ye=O(R))==null?void 0:Ye.closest("c-strip");Le&&t()[0]&&(Te=0,Le.dispatchEvent(new CustomEvent("strip:update",{bubbles:!0,detail:{project:t()[0],index:0}})))}),()=>{var Le,Ye,ut;Oe=!0,window.removeEventListener("resize",I),it(),Me&&Me.disconnect(),Xt.disconnect(),(Le=O(R))==null||Le.removeEventListener("mousemove",ye),(Ye=O(R))==null||Ye.removeEventListener("mouseleave",he),(ut=O(R))==null||ut.removeEventListener("click",Ce),Ue&&(Ue.removeEventListener("wheel",K),Ue.removeEventListener("touchstart",$),Ue.removeEventListener("touchmove",re)),ee.domElement.removeEventListener("webglcontextlost",ne),ee.domElement.removeEventListener("webglcontextrestored",pe),Ee.clear(),Xe.clear(),be.dispose();for(const Ct of we)Ct.dispose();et.forEach(Ct=>{Ct.userData.materials=null,Ct.dispose()}),et.clear(),we.length=0,He.length=0,ee.dispose(),ee.forceContextLoss(),ee.domElement.parentNode&&ee.domElement.parentNode.removeChild(ee.domElement)}});var F=Qi(),V=cn(F);{var Z=ee=>{var ae=nx();oi(ae,21,t,ai,(Se,Me)=>{var Oe=tx();Be(()=>bt(Oe,"href",O(Me).url)),Be(()=>bt(Oe,"title",O(Me).title)),Be(()=>bt(Oe,"backgroundimage",O(Me).thumbnail_base)),Be(()=>bt(Oe,"overlayimage",O(Me).thumbnail_overlay)),Ie(Se,Oe)}),Ie(ee,ae)},le=ee=>{var ae=ix();tr(ae,Se=>Dt(R,Se),()=>O(R)),Ie(ee,ae)};Lt(V,ee=>{O(z)?ee(Z):ee(le,!1)})}Ie(n,F),mn()}var sx=ze('<div class="text svelte-1v32imz"><div class="text-md" data-motion-stagger=""><!></div></div>'),ax=ze('<header><div class="heading svelte-1v32imz"><h2 data-motion-stagger="" class="svelte-1v32imz"><!></h2></div> <!></header>');function ox(n,e){pn(e,!0);let t=qe(e,"title",3,""),i=qe(e,"description",3,""),r=qe(e,"layout",3,"column");const s=si(()=>t().replace(/^<p>(.*)<\/p>$/s,"$1")),a=si(()=>i().replace(/^<p>(.*)<\/p>$/s,"$1"));var o=ax();let l;var c=oe(o),f=oe(c),u=oe(f);xn(u,()=>O(s));var d=Je(c,2);{var m=g=>{var v=sx(),p=oe(v),h=oe(p);xn(h,()=>O(a)),Ie(g,v)};Lt(d,g=>{i()&&g(m)})}Be(()=>l=li(o,1,"header svelte-1v32imz",null,l,{"is-row":r()==="row"})),Ie(n,o),mn()}var lx=ze('<img loading="eager" decoding="async" class="svelte-1pcp5jh"/>'),cx=ze('<figcaption class="caption text-sm svelte-1pcp5jh"> </figcaption>'),ux=ze('<figure class="figure svelte-1pcp5jh"><div><!></div> <!></figure>'),fx=ze('<section class="section"><div><div class="grid svelte-1pcp5jh"></div></div></section>');function dx(n,e){let t=Ht(vr([])),i=qe(e,"images",19,()=>[]),r=qe(e,"spacing",3,"stack");function s(f){O(t)[f]=!0,Dt(t,O(t),!0)}var a=fx(),o=oe(a);let l;var c=oe(o);oi(c,21,i,ai,(f,u,d)=>{var m=ux(),g=oe(m);let v;var p=oe(g);{var h=E=>{var A=lx();Be(()=>{Ot(A,"src",O(u).url),Ot(A,"alt",O(u).alt||""),Ot(A,"width",O(u).width),Ot(A,"height",O(u).height)}),hu("load",A,()=>s(d)),Ie(E,A)};Lt(p,E=>{O(u).url&&E(h)})}var b=Je(g,2);{var M=E=>{var A=cx(),w=oe(A);Be(()=>Jt(w,O(u).caption)),Ie(E,A)};Lt(b,E=>{O(u).caption&&E(M)})}Be(()=>v=li(g,1,"img-wrap svelte-1pcp5jh",null,v,{loaded:O(t)[d]})),Ie(f,m)}),Be(()=>l=li(o,1,"container-fw py-sm",null,l,{"pt-0":r()==="trim"})),Ie(n,a)}var hx=ze('<p class="heading svelte-h8mvjh" data-motion-stagger=""> </p>'),px=ze('<div class="col svelte-h8mvjh"><!> <div class="text-md" data-motion-stagger=""><!></div></div>'),mx=ze('<section class="section svelte-h8mvjh"><div></div></section>');function gx(n,e){pn(e,!0);let t=qe(e,"columns",3,"4"),i=qe(e,"items",19,()=>[]);const r=si(()=>Math.max(1,Number(t())-i().length+1));var s=mx(),a=oe(s);oi(a,21,i,ai,(o,l,c)=>{var f=px(),u=oe(f);{var d=v=>{var p=hx(),h=oe(p);Be(()=>Jt(h,O(l).heading)),Ie(v,p)};Lt(u,v=>{O(l).heading&&v(d)})}var m=Je(u,2),g=oe(m);xn(g,()=>O(l).content),Be(()=>Os(f,c===0?`grid-column-start: ${O(r)}`:"")),Ie(o,f)}),Be(()=>li(a,1,`grid col-${t()??""}`,"svelte-h8mvjh")),Ie(n,s),mn()}var _x=ze('<h5 data-motion-stagger=""> </h5>'),vx=ze('<h5 data-motion-stagger=""> </h5>'),xx=ze('<div class="cell svelte-1k4htmo"><!> <div class="text-md" data-motion-stagger=""><!></div></div>'),Sx=ze('<section class="section"><div class="container-fw py-sm"><div></div></div></section>');function Mx(n,e){pn(e,!0);let t=qe(e,"columns",3,"4"),i=qe(e,"items",19,()=>[]);const r=si(()=>Math.max(1,Number(t())-i().length+1));var s=Sx(),a=oe(s),o=oe(a);oi(o,21,i,ai,(l,c,f)=>{var u=xx(),d=oe(u);{var m=h=>{var b=_x(),M=oe(b);Be(()=>Jt(M,O(c).heading)),Ie(h,b)},g=h=>{var b=vx(),M=oe(b);Be(E=>Jt(M,`(${E??""})`),[()=>String(f+1).padStart(2,"0")]),Ie(h,b)};Lt(d,h=>{O(c).heading?h(m):h(g,!1)})}var v=Je(d,2),p=oe(v);xn(p,()=>O(c).description),Be(()=>Os(u,f===0?`grid-column-start: ${O(r)}`:"")),Ie(l,u)}),Be(()=>li(o,1,`grid col-${t()??""}`,"svelte-1k4htmo")),Ie(n,s),mn()}var Ex=ze('<img loading="eager" decoding="async" class="svelte-144qpa3"/>'),bx=ze('<figcaption class="caption text-sm svelte-144qpa3"> </figcaption>'),yx=ze('<section class="section-fw"><figure class="figure svelte-144qpa3"><div><!></div> <!></figure></section>');function Tx(n,e){let t=Ht(!1),i=qe(e,"image",3,""),r=qe(e,"alt",3,""),s=qe(e,"caption",3,"");var a=yx(),o=oe(a),l=oe(o);let c;var f=oe(l);{var u=g=>{var v=Ex();Be(()=>{Ot(v,"src",i()),Ot(v,"alt",r()),Ot(v,"width",e.width),Ot(v,"height",e.height)}),hu("load",v,()=>{Dt(t,!0)}),Ie(g,v)};Lt(f,g=>{i()&&g(u)})}var d=Je(l,2);{var m=g=>{var v=bx(),p=oe(v);Be(()=>Jt(p,s())),Ie(g,v)};Lt(d,g=>{s()&&g(m)})}Be(()=>c=li(l,1,"img-wrap svelte-144qpa3",null,c,{loaded:O(t)})),Ie(n,a)}Bt("c-header",Rh,["rootpath","links"]),Bt("c-footer",Ih,["fixed","links"]),Bt("c-preloader",Fh,["title","images"]),Bt("l-index",Vh,["eyebrow","availabilitystatus","title","buttonlabel","buttonhref","projects"]),Bt("c-button",sp,["href","label","active"]),Bt("c-indexcard",lp,["href","title","backgroundimage","overlayimage"]),Bt("c-asterisk",Y0,["images"]),Bt("c-helix",j0,["images"]),Bt("c-drum",Z0,["images"]),Bt("c-reel",ex,["projects"]),Bt("c-strip",rx,["projects"]),Bt("b-header",ox,["title","description","layout"]),Bt("b-img",dx,["images","spacing"]),Bt("b-text",gx,["columns","items"]),Bt("b-grid",Mx,["columns","items"]),Bt("b-fullbleed",Tx,["image","alt","caption"]),Bt("l-about",Xh,["images","items"]),Bt("l-text",Kh,["items"]),Bt("l-404",ep,["title","message","buttonlabel","buttonhref"]),Bt("l-holding",ip,["title","message","buttonlabel","buttonhref"]),console.log("Svelte components loaded"),window.dispatchEvent(new CustomEvent("svelte:ready"))})();
