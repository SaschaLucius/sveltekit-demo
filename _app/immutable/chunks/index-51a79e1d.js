function $(){}function re(e,t){for(const n in t)e[n]=t[n];return e}function J(e){return e()}function G(){return Object.create(null)}function N(e){e.forEach(J)}function F(e){return typeof e=="function"}function Ee(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let A;function Ne(e,t){return A||(A=document.createElement("a")),A.href=t,e===A.href}function se(e){return Object.keys(e).length===0}function ce(e,...t){if(e==null)return $;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ke(e,t,n){e.$$.on_destroy.push(ce(t,n))}function Se(e,t,n,i){if(e){const r=K(e,t,n,i);return e[0](r)}}function K(e,t,n,i){return e[1]&&i?re(n.ctx.slice(),e[1](i(t))):n.ctx}function Ae(e,t,n,i){if(e[2]&&i){const r=e[2](i(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(t.dirty.length,r.length);for(let u=0;u<s;u+=1)l[u]=t.dirty[u]|r[u];return l}return t.dirty|r}return t.dirty}function Ce(e,t,n,i,r,l){if(r){const s=K(t,n,i,l);e.p(s,r)}}function Te(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}function De(e){return e??""}function Me(e,t,n){return e.set(n),t}function je(e){return e&&F(e.destroy)?e.destroy:$}const Q=typeof window<"u";let Pe=Q?()=>window.performance.now():()=>Date.now(),V=Q?e=>requestAnimationFrame(e):$;const w=new Set;function X(e){w.forEach(t=>{t.c(e)||(w.delete(t),t.f())}),w.size!==0&&V(X)}function qe(e){let t;return w.size===0&&V(X),{promise:new Promise(n=>{w.add(t={c:e,f:n})}),abort(){w.delete(t)}}}let M=!1;function oe(){M=!0}function le(){M=!1}function ue(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function ae(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const c=[];for(let o=0;o<t.length;o++){const f=t[o];f.claim_order!==void 0&&c.push(f)}t=c}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let c=0;c<t.length;c++){const o=t[c].claim_order,f=(r>0&&t[n[r]].claim_order<=o?r+1:ue(1,r,d=>t[n[d]].claim_order,o))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,r=Math.max(_,r)}const l=[],s=[];let u=t.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(t[c-1]);u>=c;u--)s.push(t[u]);u--}for(;u>=0;u--)s.push(t[u]);l.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<l.length&&s[c].claim_order>=l[o].claim_order;)o++;const f=o<l.length?l[o]:null;e.insertBefore(s[c],f)}}function fe(e,t){if(M){for(ae(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function Le(e,t,n){M&&!n?fe(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function de(e){e.parentNode&&e.parentNode.removeChild(e)}function ze(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _e(e){return document.createElement(e)}function he(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function R(e){return document.createTextNode(e)}function Be(){return R(" ")}function He(){return R("")}function Oe(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function Fe(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Re(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function me(e){return Array.from(e.childNodes)}function pe(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function Y(e,t,n,i,r=!1){pe(e);const l=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const u=e[s];if(t(u)){const c=n(u);return c===void 0?e.splice(s,1):e[s]=c,r||(e.claim_info.last_index=s),u}}for(let s=e.claim_info.last_index-1;s>=0;s--){const u=e[s];if(t(u)){const c=n(u);return c===void 0?e.splice(s,1):e[s]=c,r?c===void 0&&e.claim_info.last_index--:e.claim_info.last_index=s,u}}return i()})();return l.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,l}function Z(e,t,n,i){return Y(e,r=>r.nodeName===t,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||l.push(u.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(t))}function Ue(e,t,n){return Z(e,t,n,_e)}function We(e,t,n){return Z(e,t,n,he)}function ye(e,t){return Y(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>R(t),!0)}function Ge(e){return ye(e," ")}function Ie(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Je(e,t){e.value=t??""}function Ke(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function Qe(e,t,n){e.classList[n?"add":"remove"](t)}function ge(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,i,t),r}function Ve(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${e}_END`?(i-=1,n.push(r)):l===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Xe(e,t){return new e(t)}let E;function v(e){E=e}function b(){if(!E)throw new Error("Function called outside component initialization");return E}function Ye(e){b().$$.before_update.push(e)}function Ze(e){b().$$.on_mount.push(e)}function et(e){b().$$.after_update.push(e)}function tt(e){b().$$.on_destroy.push(e)}function nt(){const e=b();return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t];if(r){const l=ge(t,n,{cancelable:i});return r.slice().forEach(s=>{s.call(e,l)}),!l.defaultPrevented}return!0}}function it(e,t){return b().$$.context.set(e,t),t}function rt(e){return b().$$.context.get(e)}function st(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(i=>i.call(this,t))}const x=[],I=[],T=[],B=[],ee=Promise.resolve();let H=!1;function te(){H||(H=!0,ee.then(ne))}function ct(){return te(),ee}function O(e){T.push(e)}function ot(e){B.push(e)}const z=new Set;let C=0;function ne(){const e=E;do{for(;C<x.length;){const t=x[C];C++,v(t),be(t.$$)}for(v(null),x.length=0,C=0;I.length;)I.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];z.has(n)||(z.add(n),n())}T.length=0}while(x.length);for(;B.length;)B.pop()();H=!1,z.clear(),v(e)}function be(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}const D=new Set;let g;function lt(){g={r:0,c:[],p:g}}function ut(){g.r||N(g.c),g=g.p}function ie(e,t){e&&e.i&&(D.delete(e),e.i(t))}function we(e,t,n,i){if(e&&e.o){if(D.has(e))return;D.add(e),g.c.push(()=>{D.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const at=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ft(e,t){we(e,1,1,()=>{t.delete(e.key)})}function dt(e,t,n,i,r,l,s,u,c,o,f,_){let d=e.length,m=l.length,h=d;const j={};for(;h--;)j[e[h].key]=h;const k=[],P=new Map,q=new Map;for(h=m;h--;){const a=_(r,l,h),p=n(a);let y=s.get(p);y?i&&y.p(a,t):(y=o(p,a),y.c()),P.set(p,k[h]=y),p in j&&q.set(p,Math.abs(h-j[p]))}const U=new Set,W=new Set;function L(a){ie(a,1),a.m(u,f),s.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=k[m-1],p=e[d-1],y=a.key,S=p.key;a===p?(f=a.first,d--,m--):P.has(S)?!s.has(y)||U.has(y)?L(a):W.has(S)?d--:q.get(y)>q.get(S)?(W.add(y),L(a)):(U.add(S),d--):(c(p,s),d--)}for(;d--;){const a=e[d];P.has(a.key)||c(a,s)}for(;m;)L(k[m-1]);return k}function _t(e,t,n,i){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=n,i===void 0&&n(e.$$.ctx[r]))}function ht(e){e&&e.c()}function mt(e,t){e&&e.l(t)}function $e(e,t,n,i){const{fragment:r,after_update:l}=e.$$;r&&r.m(t,n),i||O(()=>{const s=e.$$.on_mount.map(J).filter(F);e.$$.on_destroy?e.$$.on_destroy.push(...s):N(s),e.$$.on_mount=[]}),l.forEach(O)}function xe(e,t){const n=e.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ve(e,t){e.$$.dirty[0]===-1&&(x.push(e),te(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function pt(e,t,n,i,r,l,s,u=[-1]){const c=E;v(e);const o=e.$$={fragment:null,ctx:[],props:l,update:$,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:t.target||c.$$.root};s&&s(o.root);let f=!1;if(o.ctx=n?n(e,t.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return o.ctx&&r(o.ctx[_],o.ctx[_]=h)&&(!o.skip_bound&&o.bound[_]&&o.bound[_](h),f&&ve(e,_)),d}):[],o.update(),f=!0,N(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){oe();const _=me(t.target);o.fragment&&o.fragment.l(_),_.forEach(de)}else o.fragment&&o.fragment.c();t.intro&&ie(e.$$.fragment),$e(e,t.target,t.anchor,t.customElement),le(),ne()}v(c)}class yt{$destroy(){xe(this,1),this.$destroy=$}$on(t,n){if(!F(n))return $;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!se(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{Ye as $,ct as A,$ as B,ce as C,N as D,F as E,he as F,We as G,Ne as H,fe as I,ze as J,ke as K,Se as L,Ce as M,Te as N,Ae as O,Ve as P,Pe as Q,qe as R,yt as S,Oe as T,I as U,_t as V,ot as W,Je as X,Fe as Y,dt as Z,ft as _,Be as a,tt as a0,Qe as a1,je as a2,at as a3,De as a4,st as a5,nt as a6,it as a7,rt as a8,Me as a9,Le as b,Ge as c,ut as d,He as e,ie as f,lt as g,de as h,pt as i,et as j,_e as k,Ue as l,me as m,Re as n,Ze as o,Ke as p,R as q,ye as r,Ee as s,we as t,Ie as u,Xe as v,ht as w,mt as x,$e as y,xe as z};