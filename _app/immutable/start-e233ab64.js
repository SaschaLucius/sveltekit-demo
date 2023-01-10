import{S as at,i as rt,s as ot,a as it,e as q,c as st,b as W,g as de,t as B,d as pe,f as F,h as J,j as lt,o as Pe,k as ct,l as ft,m as ut,n as be,p as x,q as dt,r as pt,u as ht,v as H,w as M,x as Te,y as X,z as Y,A as ce}from"./chunks/index-51a79e1d.js";import{S as tt,I as C,g as We,f as Ge,a as Ee,b as fe,s as z,i as He,c as ue,P as Me,d as mt,e as _t,h as gt}from"./chunks/singletons-915ea3f1.js";import{u as wt}from"./chunks/parse-f0c618df.js";function yt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function vt(r){return r.split("%25").map(decodeURI).join("%25")}function bt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const Et=["href","pathname","search","searchParams","toString","toJSON"];function Rt(r,e){const n=new URL(r);for(const s of Et){let l=n[s];Object.defineProperty(n,s,{get(){return e(),l},enumerable:!0,configurable:!0})}return kt(n),n}function kt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Lt="/__data.json";function St(r){return r.replace(/\/$/,"")+Lt}function Pt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(De(r)),he(r,e));const te=new Map;function At(r,e){const n=De(r,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:l,...f}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&te.set(n,{body:l,init:f,ttl:1e3*Number(t)}),Promise.resolve(new Response(l,f))}return he(r,e)}function Ot(r,e,n){if(te.size>0){const s=De(r,n),l=te.get(s);if(l){if(performance.now()<l.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(l.body,l.init);te.delete(s)}}return he(e,n)}function De(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Pt(e.body)}"]`),s}const It=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Tt(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${$t(r).map(s=>{const l=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(l)return e.push({name:l[1],matcher:l[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(f)return e.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((w,m)=>{if(m%2){if(w.startsWith("x+"))return Re(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return Re(String.fromCharCode(...w.slice(2).split("-").map(T=>parseInt(T,16))));const g=It.exec(w);if(!g)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,k,L,V,j]=g;return e.push({name:V,matcher:j,optional:!!k,rest:!!L,chained:L?m===1&&t[0]==="":!1}),L?"(.*?)":k?"([^/]*)?":"([^/]+?)"}return Re(w)}).join("")}).join("")}/?$`),params:e}}function Dt(r){return!/^\([^)]+\)$/.test(r)}function $t(r){return r.slice(1).split("/").filter(Dt)}function Ut(r,e,n){const s={},l=r.slice(1);let f="";for(let t=0;t<e.length;t+=1){const d=e[t];let w=l[t];if(d.chained&&d.rest&&f&&(w=w?f+"/"+w:f),f="",w===void 0)d.rest&&(s[d.name]="");else{if(d.matcher&&!n[d.matcher](w)){if(d.optional&&d.chained){let m=l.indexOf(void 0,t);if(m===-1){const g=e[t+1];if((g==null?void 0:g.rest)&&g.chained)f=w;else return}for(;m>=t;)l[m]=l[m-1],m-=1;continue}return}s[d.name]=w}}if(!f)return s}function Re(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Vt(r,e,n,s){const l=new Set(e);return Object.entries(n).map(([d,[w,m,g]])=>{const{pattern:k,params:L}=Tt(d),V={id:d,exec:j=>{const T=k.exec(j);if(T)return Ut(T,L,s)},errors:[1,...g||[]].map(j=>r[j]),layouts:[0,...m||[]].map(t),leaf:f(w)};return V.errors.length=V.layouts.length=Math.max(V.errors.length,V.layouts.length),V});function f(d){const w=d<0;return w&&(d=~d),[w,r[d]]}function t(d){return d===void 0?d:[l.has(d),r[d]]}}function jt(r){let e,n,s;var l=r[0][0];function f(t){return{props:{data:t[2],form:t[1]}}}return l&&(e=H(l,f(r))),{c(){e&&M(e.$$.fragment),n=q()},l(t){e&&Te(e.$$.fragment,t),n=q()},m(t,d){e&&X(e,t,d),W(t,n,d),s=!0},p(t,d){const w={};if(d&4&&(w.data=t[2]),d&2&&(w.form=t[1]),l!==(l=t[0][0])){if(e){de();const m=e;B(m.$$.fragment,1,0,()=>{Y(m,1)}),pe()}l?(e=H(l,f(t)),M(e.$$.fragment),F(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else l&&e.$set(w)},i(t){s||(e&&F(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&Y(e,t)}}}function Nt(r){let e,n,s;var l=r[0][0];function f(t){return{props:{data:t[2],$$slots:{default:[xt]},$$scope:{ctx:t}}}}return l&&(e=H(l,f(r))),{c(){e&&M(e.$$.fragment),n=q()},l(t){e&&Te(e.$$.fragment,t),n=q()},m(t,d){e&&X(e,t,d),W(t,n,d),s=!0},p(t,d){const w={};if(d&4&&(w.data=t[2]),d&523&&(w.$$scope={dirty:d,ctx:t}),l!==(l=t[0][0])){if(e){de();const m=e;B(m.$$.fragment,1,0,()=>{Y(m,1)}),pe()}l?(e=H(l,f(t)),M(e.$$.fragment),F(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else l&&e.$set(w)},i(t){s||(e&&F(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&Y(e,t)}}}function xt(r){let e,n,s;var l=r[0][1];function f(t){return{props:{data:t[3],form:t[1]}}}return l&&(e=H(l,f(r))),{c(){e&&M(e.$$.fragment),n=q()},l(t){e&&Te(e.$$.fragment,t),n=q()},m(t,d){e&&X(e,t,d),W(t,n,d),s=!0},p(t,d){const w={};if(d&8&&(w.data=t[3]),d&2&&(w.form=t[1]),l!==(l=t[0][1])){if(e){de();const m=e;B(m.$$.fragment,1,0,()=>{Y(m,1)}),pe()}l?(e=H(l,f(t)),M(e.$$.fragment),F(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else l&&e.$set(w)},i(t){s||(e&&F(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&Y(e,t)}}}function Xe(r){let e,n=r[5]&&Ye(r);return{c(){e=ct("div"),n&&n.c(),this.h()},l(s){e=ft(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var l=ut(e);n&&n.l(l),l.forEach(J),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),x(e,"position","absolute"),x(e,"left","0"),x(e,"top","0"),x(e,"clip","rect(0 0 0 0)"),x(e,"clip-path","inset(50%)"),x(e,"overflow","hidden"),x(e,"white-space","nowrap"),x(e,"width","1px"),x(e,"height","1px")},m(s,l){W(s,e,l),n&&n.m(e,null)},p(s,l){s[5]?n?n.p(s,l):(n=Ye(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&J(e),n&&n.d()}}}function Ye(r){let e;return{c(){e=dt(r[6])},l(n){e=pt(n,r[6])},m(n,s){W(n,e,s)},p(n,s){s&64&&ht(e,n[6])},d(n){n&&J(e)}}}function Ct(r){let e,n,s,l,f;const t=[Nt,jt],d=[];function w(g,k){return g[0][1]?0:1}e=w(r),n=d[e]=t[e](r);let m=r[4]&&Xe(r);return{c(){n.c(),s=it(),m&&m.c(),l=q()},l(g){n.l(g),s=st(g),m&&m.l(g),l=q()},m(g,k){d[e].m(g,k),W(g,s,k),m&&m.m(g,k),W(g,l,k),f=!0},p(g,[k]){let L=e;e=w(g),e===L?d[e].p(g,k):(de(),B(d[L],1,1,()=>{d[L]=null}),pe(),n=d[e],n?n.p(g,k):(n=d[e]=t[e](g),n.c()),F(n,1),n.m(s.parentNode,s)),g[4]?m?m.p(g,k):(m=Xe(g),m.c(),m.m(l.parentNode,l)):m&&(m.d(1),m=null)},i(g){f||(F(n),f=!0)},o(g){B(n),f=!1},d(g){d[e].d(g),g&&J(s),m&&m.d(g),g&&J(l)}}}function qt(r,e,n){let{stores:s}=e,{page:l}=e,{components:f}=e,{form:t}=e,{data_0:d=null}=e,{data_1:w=null}=e;lt(s.page.notify);let m=!1,g=!1,k=null;return Pe(()=>{const L=s.page.subscribe(()=>{m&&(n(5,g=!0),n(6,k=document.title||"untitled page"))});return n(4,m=!0),L}),r.$$set=L=>{"stores"in L&&n(7,s=L.stores),"page"in L&&n(8,l=L.page),"components"in L&&n(0,f=L.components),"form"in L&&n(1,t=L.form),"data_0"in L&&n(2,d=L.data_0),"data_1"in L&&n(3,w=L.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(l)},[f,t,d,w,m,g,k,s,l]}class Bt extends at{constructor(e){super(),rt(this,e,qt,Ct,ot,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",Jt=function(r,e){return new URL(r,e).href},Qe={},A=function(e,n,s){if(!n||n.length===0)return e();const l=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Jt(f,s),f in Qe)return;Qe[f]=!0;const t=f.endsWith(".css"),d=t?'[rel="stylesheet"]':"";if(!!s)for(let g=l.length-1;g>=0;g--){const k=l[g];if(k.href===f&&(!t||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${d}`))return;const m=document.createElement("link");if(m.rel=t?"stylesheet":Ft,t||(m.as="script",m.crossOrigin=""),m.href=f,document.head.appendChild(m),t)return new Promise((g,k)=>{m.addEventListener("load",g),m.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},Kt={},me=[()=>A(()=>import("./chunks/0-deafb52f.js"),["./chunks/0-deafb52f.js","./chunks/_layout-79cb23d1.js","./components/pages/_layout.svelte-8ebe7c99.js","./chunks/index-51a79e1d.js","./chunks/stores-3e77c7a7.js","./chunks/singletons-915ea3f1.js","./chunks/index-5744a07e.js","./assets/_layout-8454f68e.css"],import.meta.url),()=>A(()=>import("./chunks/1-7c9c4c29.js"),["./chunks/1-7c9c4c29.js","./components/pages/_error.svelte-ecd93082.js","./chunks/index-51a79e1d.js","./chunks/stores-3e77c7a7.js","./chunks/singletons-915ea3f1.js","./chunks/index-5744a07e.js"],import.meta.url),()=>A(()=>import("./chunks/2-efc553c1.js"),["./chunks/2-efc553c1.js","./chunks/_page-da46b06b.js","./components/pages/_page.svelte-e7ef9329.js","./chunks/index-51a79e1d.js","./assets/_page-e814e030.css"],import.meta.url),()=>A(()=>import("./chunks/3-0b9f7187.js"),["./chunks/3-0b9f7187.js","./chunks/_page-6a6e5f22.js","./chunks/environment-9aa685ef.js","./components/pages/about/_page.svelte-c836423a.js","./chunks/index-51a79e1d.js"],import.meta.url),()=>A(()=>import("./chunks/4-b384f5ef.js"),["./chunks/4-b384f5ef.js","./components/pages/actionforms/_page.svelte-ed8f4575.js","./chunks/index-51a79e1d.js"],import.meta.url),()=>A(()=>import("./chunks/5-85d7b4ad.js"),["./chunks/5-85d7b4ad.js","./components/pages/counter/_page.svelte-de9e4948.js","./chunks/index-51a79e1d.js","./chunks/index-5744a07e.js","./assets/_page-e91e92f2.css"],import.meta.url),()=>A(()=>import("./chunks/6-4a9ff10c.js"),["./chunks/6-4a9ff10c.js","./components/pages/forms/_page.svelte-05733f1e.js","./chunks/index-51a79e1d.js","./chunks/index-5744a07e.js","./assets/_page-385ecf50.css"],import.meta.url),()=>A(()=>import("./chunks/7-5f3b976e.js"),["./chunks/7-5f3b976e.js","./components/pages/item-list/_page.svelte-2424b38c.js","./chunks/index-51a79e1d.js","./assets/_page-a76262f7.css"],import.meta.url),()=>A(()=>import("./chunks/8-d6b32d3b.js"),["./chunks/8-d6b32d3b.js","./components/pages/lifecycle/_page.svelte-d3154af1.js","./chunks/index-51a79e1d.js","./assets/_page-e91e92f2.css"],import.meta.url),()=>A(()=>import("./chunks/9-a79fa93d.js"),["./chunks/9-a79fa93d.js","./components/pages/sverdle/_page.svelte-60494d76.js","./chunks/index-51a79e1d.js","./chunks/parse-f0c618df.js","./chunks/singletons-915ea3f1.js","./chunks/index-5744a07e.js","./assets/_page-9d501049.css"],import.meta.url),()=>A(()=>import("./chunks/10-0e54c1f9.js"),["./chunks/10-0e54c1f9.js","./chunks/_page-9c76c2d7.js","./chunks/environment-9aa685ef.js","./components/pages/sverdle/how-to-play/_page.svelte-1f58f4c6.js","./chunks/index-51a79e1d.js","./assets/_page-89a9e780.css"],import.meta.url),()=>A(()=>import("./chunks/11-1a815ae3.js"),["./chunks/11-1a815ae3.js","./components/pages/tic-tac-toe/0-plain/_page.svelte-dbcf0d34.js","./chunks/index-51a79e1d.js","./assets/_page-fd6813e4.css"],import.meta.url),()=>A(()=>import("./chunks/12-bd0e1a31.js"),["./chunks/12-bd0e1a31.js","./components/pages/tic-tac-toe/1-event-forwarding-and-slot/_page.svelte-b6312749.js","./chunks/index-51a79e1d.js","./assets/page-c6ef7e4f.css"],import.meta.url),()=>A(()=>import("./chunks/13-fc2d61be.js"),["./chunks/13-fc2d61be.js","./components/pages/tic-tac-toe/2-event-forwarding-and-props/_page.svelte-d3db0cf6.js","./chunks/index-51a79e1d.js","./assets/page-c6ef7e4f.css"],import.meta.url),()=>A(()=>import("./chunks/14-10a47c5c.js"),["./chunks/14-10a47c5c.js","./components/pages/tic-tac-toe/3-component-binding/_page.svelte-a6014375.js","./chunks/index-51a79e1d.js","./assets/page-c6ef7e4f.css"],import.meta.url),()=>A(()=>import("./chunks/15-4ceac859.js"),["./chunks/15-4ceac859.js","./components/pages/tic-tac-toe/4-value-binding/_page.svelte-f368d8ca.js","./chunks/index-51a79e1d.js","./chunks/types-a7d6b754.js","./assets/page-c6ef7e4f.css"],import.meta.url),()=>A(()=>import("./chunks/16-b13af282.js"),["./chunks/16-b13af282.js","./components/pages/tic-tac-toe/5-function-props/_page.svelte-1d2be4c4.js","./chunks/index-51a79e1d.js","./chunks/types-a7d6b754.js","./assets/page-c6ef7e4f.css"],import.meta.url),()=>A(()=>import("./chunks/17-11b45582.js"),["./chunks/17-11b45582.js","./components/pages/tic-tac-toe/6-context-api/_page.svelte-9f3eb3ee.js","./chunks/index-51a79e1d.js","./chunks/types-a7d6b754.js","./assets/page-c6ef7e4f.css"],import.meta.url),()=>A(()=>import("./chunks/18-067c93aa.js"),["./chunks/18-067c93aa.js","./components/pages/tic-tac-toe/7-simple-store/_page.svelte-a9cf9d26.js","./chunks/index-51a79e1d.js","./chunks/types-a7d6b754.js","./chunks/index-5744a07e.js","./assets/page-c6ef7e4f.css"],import.meta.url),()=>A(()=>import("./chunks/19-71308d9b.js"),["./chunks/19-71308d9b.js","./components/pages/tic-tac-toe/9-plain-with-button/_page.svelte-fd65bc26.js","./chunks/index-51a79e1d.js","./assets/_page-8e87b5b5.css"],import.meta.url)],zt=[],Wt={"/":[2],"/about":[3],"/actionforms":[-5],"/counter":[5],"/forms":[6],"/item-list":[7],"/lifecycle":[8],"/sverdle":[-10],"/sverdle/how-to-play":[10],"/tic-tac-toe/0-plain":[11],"/tic-tac-toe/1-event-forwarding-and-slot":[12],"/tic-tac-toe/2-event-forwarding-and-props":[13],"/tic-tac-toe/3-component-binding":[14],"/tic-tac-toe/4-value-binding":[15],"/tic-tac-toe/5-function-props":[16],"/tic-tac-toe/6-context-api":[17],"/tic-tac-toe/7-simple-store":[18],"/tic-tac-toe/9-plain-with-button":[19]},Gt={handleError:({error:r})=>{console.error(r)}};class Ae{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ze{constructor(e,n){this.status=e,this.location=n}}async function Ht(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,l])=>[s,await l])));return r}const ke=Vt(me,zt,Wt,Kt),Oe=me[0],Ie=me[1];Oe();Ie();let ne={};try{ne=JSON.parse(sessionStorage[tt])}catch{}function Le(r){ne[r]=ue()}function Mt({target:r,base:e}){var Je;const n=document.documentElement,s=[];let l=null;const f={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},d=!1,w=!1,m=!0,g=!1,k=!1,L=!1,V=!1,j,T=(Je=history.state)==null?void 0:Je[C];T||(T=Date.now(),history.replaceState({...history.state,[C]:T},"",location.href));const _e=ne[T];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let K,$e,ae;async function Ue(){ae=ae||Promise.resolve(),await ae,ae=null;const a=new URL(location.href),o=ie(a,!0);l=null,await je(o,a,[])}async function ge(a,{noScroll:o=!1,replaceState:c=!1,keepFocus:i=!1,state:p={},invalidateAll:u=!1},h,y){return typeof a=="string"&&(a=new URL(a,We(document))),se({url:a,scroll:o?ue():null,keepfocus:i,redirect_chain:h,details:{state:p,replaceState:c},nav_token:y,accepted:()=>{u&&(V=!0)},blocked:()=>{},type:"goto"})}async function Ve(a){const o=ie(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return l={id:o.id,promise:Ce(o).then(c=>(c.type==="loaded"&&c.state.error&&(l=null),c))},l.promise}async function re(...a){const c=ke.filter(i=>a.some(p=>i.exec(p))).map(i=>Promise.all([...i.layouts,i.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function je(a,o,c,i,p={},u){var y,v;$e=p;let h=a&&await Ce(a);if(h||(h=await Fe(o,{id:null},await ee(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,$e!==p)return!1;if(h.type==="redirect")if(c.length>10||c.includes(o.pathname))h=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ge(new URL(h.location,o).href,{},[...c,o.pathname],p),!1;else((v=(y=h.props)==null?void 0:y.page)==null?void 0:v.status)>=400&&await z.updated.check()&&await le(o);if(s.length=0,V=!1,g=!0,i&&i.details){const{details:_}=i,E=_.replaceState?0:1;_.state[C]=T+=E,history[_.replaceState?"replaceState":"pushState"](_.state,"",o)}if(l=null,w?(t=h.state,h.props.page&&(h.props.page.url=o),j.$set(h.props)):Ne(h),i){const{scroll:_,keepfocus:E}=i;if(E||Se(),await ce(),m){const S=o.hash&&document.getElementById(o.hash.slice(1));_?scrollTo(_.x,_.y):S?S.scrollIntoView():scrollTo(0,0)}}else await ce();m=!0,h.props.page&&(K=h.props.page),u&&u(),g=!1}function Ne(a){var i;t=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),K=a.props.page,j=new Bt({target:r,props:{...a.props,stores:z},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((i=t.route)==null?void 0:i.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};f.after_navigate.forEach(p=>p(c)),w=!0}async function Q({url:a,params:o,branch:c,status:i,error:p,route:u,form:h}){const y=c.filter(Boolean);let v="never";for(const P of c)(P==null?void 0:P.slash)!==void 0&&(v=P.slash);a.pathname=yt(a.pathname,v),a.search=a.search;const _={type:"loaded",state:{url:a,params:o,branch:c,error:p,route:u},props:{components:y.map(P=>P.node.component)}};h!==void 0&&(_.props.form=h);let E={},S=!K;for(let P=0;P<y.length;P+=1){const b=y[P];E={...E,...b.data},(S||!t.branch.some($=>$===b))&&(_.props[`data_${P}`]=E,S=S||Object.keys(b.data??{}).length>0)}return S||(S=Object.keys(K.data).length!==Object.keys(E).length),(!t.url||a.href!==t.url.href||t.error!==p||h!==void 0||S)&&(_.props.page={error:p,params:o,route:{id:(u==null?void 0:u.id)??null},status:i,url:new URL(a),form:h??null,data:S?E:K.data}),_}async function we({loader:a,parent:o,url:c,params:i,route:p,server_data_node:u}){var _,E,S;let h=null;const y={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await a();if((_=v.universal)!=null&&_.load){let N=function(...b){for(const $ of b){const{href:U}=new URL($,c);y.dependencies.add(U)}};const P={route:{get id(){return y.route=!0,p.id}},params:new Proxy(i,{get:(b,$)=>(y.params.add($),b[$])}),data:(u==null?void 0:u.data)??null,url:Rt(c,()=>{y.url=!0}),async fetch(b,$){let U;b instanceof Request?(U=b.url,$={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...$}):U=b;const R=new URL(U,c).href;return N(R),w?Ot(U,R,$):At(U,$)},setHeaders:()=>{},depends:N,parent(){return y.parent=!0,o()}};h=await v.universal.load.call(null,P)??null,h=h?await Ht(h):null}return{node:v,loader:a,server:u,universal:(E=v.universal)!=null&&E.load?{type:"data",data:h,uses:y}:null,data:h??(u==null?void 0:u.data)??null,slash:((S=v.universal)==null?void 0:S.trailingSlash)??(u==null?void 0:u.slash)}}function xe(a,o,c,i,p){if(V)return!0;if(!i)return!1;if(i.parent&&a||i.route&&o||i.url&&c)return!0;for(const u of i.params)if(p[u]!==t.params[u])return!0;for(const u of i.dependencies)if(s.some(h=>h(new URL(u))))return!0;return!1}function ye(a,o){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?o??null:null}async function Ce({id:a,invalidating:o,url:c,params:i,route:p}){if((l==null?void 0:l.id)===a)return l.promise;const{errors:u,layouts:h,leaf:y}=p,v=[...h,y];u.forEach(R=>R==null?void 0:R().catch(()=>{})),v.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let _=null;const E=t.url?a!==t.url.pathname+t.url.search:!1,S=t.route?a!==t.route.id:!1,N=v.reduce((R,I,D)=>{var Z;const O=t.branch[D],G=!!(I!=null&&I[0])&&((O==null?void 0:O.loader)!==I[1]||xe(R.some(Boolean),S,E,(Z=O.server)==null?void 0:Z.uses,i));return R.push(G),R},[]);if(N.some(Boolean)){try{_=await et(c,N)}catch(R){return oe({status:500,error:await ee(R,{url:c,params:i,route:{id:p.id}}),url:c,route:p})}if(_.type==="redirect")return _}const P=_==null?void 0:_.nodes;let b=!1;const $=v.map(async(R,I)=>{var Z;if(!R)return;const D=t.branch[I],O=P==null?void 0:P[I];if((!O||O.type==="skip")&&R[1]===(D==null?void 0:D.loader)&&!xe(b,S,E,(Z=D.universal)==null?void 0:Z.uses,i))return D;if(b=!0,(O==null?void 0:O.type)==="error")throw O;return we({loader:R[1],url:c,params:i,route:p,parent:async()=>{var ze;const Ke={};for(let ve=0;ve<I;ve+=1)Object.assign(Ke,(ze=await $[ve])==null?void 0:ze.data);return Ke},server_data_node:ye(O===void 0&&R[0]?{type:"skip"}:O??null,D==null?void 0:D.server)})});for(const R of $)R.catch(()=>{});const U=[];for(let R=0;R<v.length;R+=1)if(v[R])try{U.push(await $[R])}catch(I){if(I instanceof Ze)return{type:"redirect",location:I.location};let D=500,O;P!=null&&P.includes(I)?(D=I.status??D,O=I.error):I instanceof Ae?(D=I.status,O=I.body):O=await ee(I,{params:i,url:c,route:{id:p.id}});const G=await qe(R,U,u);return G?await Q({url:c,params:i,branch:U.slice(0,G.idx).concat(G.node),status:D,error:O,route:p}):await Fe(c,{id:p.id},O,D)}else U.push(void 0);return await Q({url:c,params:i,branch:U,status:200,error:null,route:p,form:o?void 0:null})}async function qe(a,o,c){for(;a--;)if(c[a]){let i=a;for(;!o[i];)i-=1;try{return{idx:i+1,node:{node:await c[a](),loader:c[a],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:a,error:o,url:c,route:i}){const p={},u=await Oe();let h=null;if(u.server)try{const _=await et(c,[!0]);if(_.type!=="data"||_.nodes[0]&&_.nodes[0].type!=="data")throw 0;h=_.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||d)&&await le(c)}const y=await we({loader:Oe,url:c,params:p,route:i,parent:()=>Promise.resolve({}),server_data_node:ye(h)}),v={node:await Ie(),loader:Ie,universal:null,server:null,data:null};return await Q({url:c,params:p,branch:[y,v],status:a,error:o,route:null})}function ie(a,o){if(He(a,e))return;const c=vt(a.pathname.slice(e.length)||"/");for(const i of ke){const p=i.exec(c);if(p)return{id:a.pathname+a.search,invalidating:o,route:i,params:bt(p),url:a}}}function Be({url:a,type:o,intent:c,delta:i}){var y,v;let p=!1;const u={from:{params:t.params,route:{id:((y=t.route)==null?void 0:y.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((v=c==null?void 0:c.route)==null?void 0:v.id)??null},url:a},willUnload:!c,type:o};i!==void 0&&(u.delta=i);const h={...u,cancel:()=>{p=!0}};return k||f.before_navigate.forEach(_=>_(h)),p?null:u}async function se({url:a,scroll:o,keepfocus:c,redirect_chain:i,details:p,type:u,delta:h,nav_token:y,accepted:v,blocked:_}){const E=ie(a,!1),S=Be({url:a,type:u,delta:h,intent:E});if(!S){_();return}Le(T),v(),k=!0,w&&z.navigating.set(S),await je(E,a,i,{scroll:o,keepfocus:c,details:p},y,()=>{k=!1,f.after_navigate.forEach(N=>N(S)),z.navigating.set(null)})}async function Fe(a,o,c,i){return a.origin===location.origin&&a.pathname===location.pathname&&!d?await oe({status:i,error:c,url:a,route:o}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}function nt(){let a;n.addEventListener("mousemove",u=>{const h=u.target;clearTimeout(a),a=setTimeout(()=>{i(h,2)},20)});function o(u){i(u.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(u=>{for(const h of u)h.isIntersecting&&(re(new URL(h.target.href).pathname),c.unobserve(h.target))},{threshold:0});function i(u,h){const y=Ge(u,n);if(!y)return;const{url:v,external:_}=Ee(y,e);if(_)return;const E=fe(y);E.reload||(h<=E.preload_data?Ve(v):h<=E.preload_code&&re(v.pathname))}function p(){c.disconnect();for(const u of n.querySelectorAll("a")){const{url:h,external:y}=Ee(u,e);if(y)continue;const v=fe(u);v.reload||(v.preload_code===Me.viewport&&c.observe(u),v.preload_code===Me.eager&&re(h.pathname))}}f.after_navigate.push(p),p()}return{after_navigate:a=>{Pe(()=>(f.after_navigate.push(a),()=>{const o=f.after_navigate.indexOf(a);f.after_navigate.splice(o,1)}))},before_navigate:a=>{Pe(()=>(f.before_navigate.push(a),()=>{const o=f.before_navigate.indexOf(a);f.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(g||!w)&&(m=!1)},goto:(a,o={})=>ge(a,o,[]),invalidate:a=>{if(typeof a=="function")s.push(a);else{const{href:o}=new URL(a,location.href);s.push(c=>c.href===o)}return Ue()},invalidateAll:()=>(V=!0,Ue()),preload_data:async a=>{const o=new URL(a,We(document));await Ve(o)},preload_code:re,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:c,route:i}=t;if(!i)return;const p=await qe(t.branch.length,c,i.errors);if(p){const u=await Q({url:o,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:a.status??500,error:a.error,route:i});t=u.state,j.$set(u.props),ce().then(Se)}}else if(a.type==="redirect")ge(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...K,form:a.data,status:a.status}};j.$set(o),a.type==="success"&&ce().then(Se)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var i;let c=!1;if(!k){const p={from:{params:t.params,route:{id:((i=t.route)==null?void 0:i.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};f.before_navigate.forEach(u=>u(p))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(T);try{sessionStorage[tt]=JSON.stringify(ne)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||nt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=Ge(o.composedPath()[0],n);if(!c)return;const{url:i,external:p,has:u}=Ee(c,e),h=fe(c);if(!i||!(c instanceof SVGAElement)&&i.protocol!==location.protocol&&!(i.protocol==="https:"||i.protocol==="http:")||u.download)return;if(p||h.reload){Be({url:i,type:"link"})||o.preventDefault(),k=!0;return}const[v,_]=i.href.split("#");if(_!==void 0&&v===location.href.split("#")[0]){L=!0,Le(T),t.url=i,z.page.set({...K,url:i}),z.page.notify();return}se({url:i,scroll:h.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:i.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),i=o.submitter;if(((i==null?void 0:i.formMethod)||c.method)!=="get")return;const u=new URL((i==null?void 0:i.hasAttribute("formaction"))&&(i==null?void 0:i.formAction)||c.action);if(He(u,e))return;const h=o.target,{noscroll:y,reload:v}=fe(h);if(v)return;o.preventDefault(),o.stopPropagation();const _=new FormData(h),E=i==null?void 0:i.getAttribute("name");E&&_.append(E,(i==null?void 0:i.getAttribute("value"))??""),u.search=new URLSearchParams(_).toString(),se({url:u,scroll:y?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[C]){if(o.state[C]===T)return;const i=o.state[C]-T;se({url:new URL(location.href),scroll:ne[o.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=o.state[C]},blocked:()=>{history.go(-i)},type:"popstate",delta:i})}}),addEventListener("hashchange",()=>{L&&(L=!1,history.replaceState({...history.state,[C]:++T},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&z.navigating.set(null)})},_hydrate:async({status:a=200,error:o,node_ids:c,params:i,route:p,data:u,form:h})=>{d=!0;const y=new URL(location.href);({params:i={},route:p={id:null}}=ie(y,!1)||{});let v;try{const _=c.map(async(E,S)=>{const N=u[S];return we({loader:me[E],url:y,params:i,route:p,parent:async()=>{const P={};for(let b=0;b<S;b+=1)Object.assign(P,(await _[b]).data);return P},server_data_node:ye(N)})});v=await Q({url:y,params:i,branch:await Promise.all(_),status:a,error:o,form:h,route:ke.find(({id:E})=>E===p.id)??null})}catch(_){if(_ instanceof Ze){await le(new URL(_.location,location.href));return}v=await oe({status:_ instanceof Ae?_.status:500,error:await ee(_,{url:y,params:i,route:p}),url:y,route:p})}Ne(v)}}}async function et(r,e){var f;const n=new URL(r);n.pathname=St(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await he(n.href),l=await s.json();if(!s.ok)throw new Error(l);return(f=l.nodes)==null||f.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=wt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),l}function ee(r,e){return r instanceof Ae?r.body:Gt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Se(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function Zt({env:r,hydrate:e,paths:n,target:s,version:l}){mt(n),gt(l);const f=Mt({target:s,base:n.base});_t({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{Zt as start};
