import{S as B,i as R,s as S,k as E,q as C,l as v,m as P,r as j,h as d,n as y,b as p,F as M,O as D,u as F,B as w,a4 as J,a as q,c as O,f as b,g as G,d as L,t as k,_ as V,Q as K,R as Z,w as H,x as Q,y as U,T as I,z as W,L as x}from"../../../chunks/index-fefcd1da.js";var m=(r=>(r.X="X",r.O="O",r.EMPTY="",r))(m||{});function ee(r){let e,o,s,i;return{c(){e=E("td"),o=C(r[0]),this.h()},l(t){e=v(t,"TD",{class:!0});var f=P(e);o=j(f,r[0]),f.forEach(d),this.h()},h(){y(e,"class","svelte-1ngoojc")},m(t,f){p(t,e,f),M(e,o),s||(i=D(e,"click",r[1]),s=!0)},p(t,[f]){f&1&&F(o,t[0])},i:w,o:w,d(t){t&&d(e),s=!1,i()}}}function te(r,e,o){let{value:s=m.EMPTY}=e;function i(t){J.call(this,r,t)}return r.$$set=t=>{"value"in t&&o(0,s=t.value)},[s,i]}class le extends B{constructor(e){super(),R(this,e,te,ee,S,{value:0})}}function A(r,e,o){const s=r.slice();return s[10]=e[o],s[12]=o,s}function N(r,e,o){const s=r.slice();return s[13]=e[o],s[14]=e,s[15]=o,s}function X(r){let e,o,s;function i(l){r[4](l,r[13],r[14],r[15])}function t(){return r[5](r[12],r[15])}let f={};return r[13]!==void 0&&(f.value=r[13]),e=new le({props:f}),K.push(()=>Z(e,"value",i,r[13])),e.$on("click",t),{c(){H(e.$$.fragment)},l(l){Q(e.$$.fragment,l)},m(l,c){U(e,l,c),s=!0},p(l,c){r=l;const n={};!o&&c&1&&(o=!0,n.value=r[13],I(()=>o=!1)),e.$set(n)},i(l){s||(b(e.$$.fragment,l),s=!0)},o(l){k(e.$$.fragment,l),s=!1},d(l){W(e,l)}}}function z(r){let e,o,s,i=r[10],t=[];for(let l=0;l<i.length;l+=1)t[l]=X(N(r,i,l));const f=l=>k(t[l],1,1,()=>{t[l]=null});return{c(){e=E("tr");for(let l=0;l<t.length;l+=1)t[l].c();o=q()},l(l){e=v(l,"TR",{});var c=P(e);for(let n=0;n<t.length;n+=1)t[n].l(c);o=O(c),c.forEach(d)},m(l,c){p(l,e,c);for(let n=0;n<t.length;n+=1)t[n].m(e,null);M(e,o),s=!0},p(l,c){if(c&5){i=l[10];let n;for(n=0;n<i.length;n+=1){const T=N(l,i,n);t[n]?(t[n].p(T,c),b(t[n],1)):(t[n]=X(T),t[n].c(),b(t[n],1),t[n].m(e,o))}for(G(),n=i.length;n<t.length;n+=1)f(n);L()}},i(l){if(!s){for(let c=0;c<i.length;c+=1)b(t[c]);s=!0}},o(l){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)k(t[c]);s=!1},d(l){l&&d(e),V(t,l)}}}function ne(r){let e,o,s,i,t=r[1]?"Restart":"Reset",f,l,c,n,T=r[0],h=[];for(let a=0;a<T.length;a+=1)h[a]=z(A(r,T,a));const $=a=>k(h[a],1,1,()=>{h[a]=null});return{c(){e=E("table"),o=E("tbody");for(let a=0;a<h.length;a+=1)h[a].c();s=q(),i=E("button"),f=C(t),this.h()},l(a){e=v(a,"TABLE",{class:!0});var _=P(e);o=v(_,"TBODY",{});var u=P(o);for(let Y=0;Y<h.length;Y+=1)h[Y].l(u);u.forEach(d),_.forEach(d),s=O(a),i=v(a,"BUTTON",{});var g=P(i);f=j(g,t),g.forEach(d),this.h()},h(){y(e,"class","svelte-beguuw")},m(a,_){p(a,e,_),M(e,o);for(let u=0;u<h.length;u+=1)h[u].m(o,null);p(a,s,_),p(a,i,_),M(i,f),l=!0,c||(n=D(i,"click",r[3]),c=!0)},p(a,[_]){if(_&5){T=a[0];let u;for(u=0;u<T.length;u+=1){const g=A(a,T,u);h[u]?(h[u].p(g,_),b(h[u],1)):(h[u]=z(g),h[u].c(),b(h[u],1),h[u].m(o,null))}for(G(),u=T.length;u<h.length;u+=1)$(u);L()}(!l||_&2)&&t!==(t=a[1]?"Restart":"Reset")&&F(f,t)},i(a){if(!l){for(let _=0;_<T.length;_+=1)b(h[_]);l=!0}},o(a){h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)k(h[_]);l=!1},d(a){a&&d(e),V(h,a),a&&d(s),a&&d(i),c=!1,n()}}}function se(r,e,o){let s=[[m.EMPTY,m.EMPTY,m.EMPTY],[m.EMPTY,m.EMPTY,m.EMPTY],[m.EMPTY,m.EMPTY,m.EMPTY]];const i=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];let t=!0,f=!1;function l(a,_){if(s[a][_]==m.EMPTY&&!f){Object.values(m)[0],o(0,s[a][_]=Object.values(m)[Number(t)],s),t=!t;const u=T();u!=m.EMPTY&&alert(u)}}const c=()=>{o(0,s=[[m.EMPTY,m.EMPTY,m.EMPTY],[m.EMPTY,m.EMPTY,m.EMPTY],[m.EMPTY,m.EMPTY,m.EMPTY]]),t=!0,o(1,f=!1)};function n(a){const _=Math.floor(a/3),u=a%3;return s[_][u]}function T(){for(let a=0;a<i.length;a++){const[_,u,g]=i[a],Y=n(_);if(Y===n(u)&&Y===n(g))return o(1,f=!0),n(_)}return m.EMPTY}function h(a,_,u,g){u[g]=a,o(0,s)}return[s,f,l,c,h,(a,_)=>l(a,_)]}class ae extends B{constructor(e){super(),R(this,e,se,ne,S,{})}}function re(r){let e,o,s,i,t,f,l,c;return l=new ae({}),{c(){e=E("meta"),o=q(),s=E("h1"),i=C("Tic-Tac-Toe game"),t=q(),f=E("section"),H(l.$$.fragment),this.h()},l(n){const T=x("svelte-gs0vcz",document.head);e=v(T,"META",{name:!0,content:!0}),T.forEach(d),o=O(n),s=v(n,"H1",{});var h=P(s);i=j(h,"Tic-Tac-Toe game"),h.forEach(d),t=O(n),f=v(n,"SECTION",{class:!0});var $=P(f);Q(l.$$.fragment,$),$.forEach(d),this.h()},h(){document.title="Tic-Tac-Toe",y(e,"name","description"),y(e,"content","Tic-Tac-Toe game"),y(f,"class","svelte-7w87tm")},m(n,T){M(document.head,e),p(n,o,T),p(n,s,T),M(s,i),p(n,t,T),p(n,f,T),U(l,f,null),c=!0},p:w,i(n){c||(b(l.$$.fragment,n),c=!0)},o(n){k(l.$$.fragment,n),c=!1},d(n){d(e),n&&d(o),n&&d(s),n&&d(t),n&&d(f),W(l)}}}class ce extends B{constructor(e){super(),R(this,e,null,re,S,{})}}export{ce as default};
