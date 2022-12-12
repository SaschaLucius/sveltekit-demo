import{S as we,i as ye,s as Te,k as l,a as w,C as P,q as B,l as u,m as r,h as s,c as y,D as Q,r as D,E as be,n as e,b as Ce,F as t,B as Ie,G as He,H as Se,w as We,x as ke,y as Be,I as De,J as Me,K as Ge,f as Ae,t as Le,z as Re}from"../../chunks/index-befb1351.js";import{p as Ve}from"../../chunks/stores-5a6c5443.js";const qe=""+new URL("../../assets/svelte-logo-87df40b8.svg",import.meta.url).href,Ke=""+new URL("../../assets/github-1ea8d62e.svg",import.meta.url).href;function Ue(d){let a,c,f,i,T,I,o,E,m,M,v,p,z,h,n,_,$,A,C,G,X,H,R,Y,Z,x,S,V,ee,j,te,W,q,ae,J,se,k,F,re,N,K,U,le;return{c(){a=l("header"),c=l("div"),f=l("a"),i=l("img"),I=w(),o=l("nav"),E=P("svg"),m=P("path"),M=w(),v=l("ul"),p=l("li"),z=l("a"),h=B("Counter"),_=w(),$=l("li"),A=l("a"),C=B("About"),X=w(),H=l("li"),R=l("a"),Y=B("Sverdle"),x=w(),S=l("li"),V=l("a"),ee=B("Tic-Tac-Toe"),te=w(),W=l("li"),q=l("a"),ae=B("Item list"),se=w(),k=P("svg"),F=P("path"),re=w(),N=l("div"),K=l("a"),U=l("img"),this.h()},l(b){a=u(b,"HEADER",{class:!0});var g=r(a);c=u(g,"DIV",{class:!0});var ue=r(c);f=u(ue,"A",{href:!0,class:!0});var ne=r(f);i=u(ne,"IMG",{src:!0,alt:!0,class:!0}),ne.forEach(s),ue.forEach(s),I=y(g),o=u(g,"NAV",{class:!0});var O=r(o);E=Q(O,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var ie=r(E);m=Q(ie,"path",{d:!0,class:!0}),r(m).forEach(s),ie.forEach(s),M=y(O),v=u(O,"UL",{class:!0});var L=r(v);p=u(L,"LI",{"aria-current":!0,class:!0});var ce=r(p);z=u(ce,"A",{href:!0,class:!0});var oe=r(z);h=D(oe,"Counter"),oe.forEach(s),ce.forEach(s),_=y(L),$=u(L,"LI",{"aria-current":!0,class:!0});var ve=r($);A=u(ve,"A",{href:!0,class:!0});var he=r(A);C=D(he,"About"),he.forEach(s),ve.forEach(s),X=y(L),H=u(L,"LI",{"aria-current":!0,class:!0});var fe=r(H);R=u(fe,"A",{href:!0,class:!0});var de=r(R);Y=D(de,"Sverdle"),de.forEach(s),fe.forEach(s),x=y(L),S=u(L,"LI",{"aria-current":!0,class:!0});var pe=r(S);V=u(pe,"A",{href:!0,class:!0});var _e=r(V);ee=D(_e,"Tic-Tac-Toe"),_e.forEach(s),pe.forEach(s),te=y(L),W=u(L,"LI",{"aria-current":!0,class:!0});var me=r(W);q=u(me,"A",{href:!0,class:!0});var ge=r(q);ae=D(ge,"Item list"),ge.forEach(s),me.forEach(s),L.forEach(s),se=y(O),k=Q(O,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var Ee=r(k);F=Q(Ee,"path",{d:!0,class:!0}),r(F).forEach(s),Ee.forEach(s),O.forEach(s),re=y(g),N=u(g,"DIV",{class:!0});var ze=r(N);K=u(ze,"A",{href:!0,class:!0});var $e=r(K);U=u($e,"IMG",{src:!0,alt:!0,class:!0}),$e.forEach(s),ze.forEach(s),g.forEach(s),this.h()},h(){be(i.src,T=qe)||e(i,"src",T),e(i,"alt","Home"),e(i,"class","svelte-1u9z1tp"),e(f,"href","/"),e(f,"class","svelte-1u9z1tp"),e(c,"class","corner svelte-1u9z1tp"),e(m,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),e(m,"class","svelte-1u9z1tp"),e(E,"viewBox","0 0 2 3"),e(E,"aria-hidden","true"),e(E,"class","svelte-1u9z1tp"),e(z,"href","/counter"),e(z,"class","svelte-1u9z1tp"),e(p,"aria-current",n=d[0].url.pathname==="/counter"?"page":void 0),e(p,"class","svelte-1u9z1tp"),e(A,"href","/about"),e(A,"class","svelte-1u9z1tp"),e($,"aria-current",G=d[0].url.pathname==="/about"?"page":void 0),e($,"class","svelte-1u9z1tp"),e(R,"href","/sverdle"),e(R,"class","svelte-1u9z1tp"),e(H,"aria-current",Z=d[0].url.pathname.startsWith("/sverdle")?"page":void 0),e(H,"class","svelte-1u9z1tp"),e(V,"href","/tic-tac-toe"),e(V,"class","svelte-1u9z1tp"),e(S,"aria-current",j=d[0].url.pathname.startsWith("/tic-tac-toe")?"page":void 0),e(S,"class","svelte-1u9z1tp"),e(q,"href","/item-list"),e(q,"class","svelte-1u9z1tp"),e(W,"aria-current",J=d[0].url.pathname.startsWith("/item-list")?"page":void 0),e(W,"class","svelte-1u9z1tp"),e(v,"class","svelte-1u9z1tp"),e(F,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),e(F,"class","svelte-1u9z1tp"),e(k,"viewBox","0 0 2 3"),e(k,"aria-hidden","true"),e(k,"class","svelte-1u9z1tp"),e(o,"class","svelte-1u9z1tp"),be(U.src,le=Ke)||e(U,"src",le),e(U,"alt","GitHub"),e(U,"class","svelte-1u9z1tp"),e(K,"href","https://github.com/sveltejs/kit"),e(K,"class","svelte-1u9z1tp"),e(N,"class","corner svelte-1u9z1tp"),e(a,"class","svelte-1u9z1tp")},m(b,g){Ce(b,a,g),t(a,c),t(c,f),t(f,i),t(a,I),t(a,o),t(o,E),t(E,m),t(o,M),t(o,v),t(v,p),t(p,z),t(z,h),t(v,_),t(v,$),t($,A),t(A,C),t(v,X),t(v,H),t(H,R),t(R,Y),t(v,x),t(v,S),t(S,V),t(V,ee),t(v,te),t(v,W),t(W,q),t(q,ae),t(o,se),t(o,k),t(k,F),t(a,re),t(a,N),t(N,K),t(K,U)},p(b,[g]){g&1&&n!==(n=b[0].url.pathname==="/counter"?"page":void 0)&&e(p,"aria-current",n),g&1&&G!==(G=b[0].url.pathname==="/about"?"page":void 0)&&e($,"aria-current",G),g&1&&Z!==(Z=b[0].url.pathname.startsWith("/sverdle")?"page":void 0)&&e(H,"aria-current",Z),g&1&&j!==(j=b[0].url.pathname.startsWith("/tic-tac-toe")?"page":void 0)&&e(S,"aria-current",j),g&1&&J!==(J=b[0].url.pathname.startsWith("/item-list")?"page":void 0)&&e(W,"aria-current",J)},i:Ie,o:Ie,d(b){b&&s(a)}}}function Fe(d,a,c){let f;return He(d,Ve,i=>c(0,f=i)),[f]}class Ne extends we{constructor(a){super(),ye(this,a,Fe,Ue,Te,{})}}function Oe(d){let a,c,f,i,T,I,o,E,m,M,v,p;c=new Ne({});const z=d[1].default,h=Se(z,d,d[0],null);return{c(){a=l("div"),We(c.$$.fragment),f=w(),i=l("main"),h&&h.c(),T=w(),I=l("footer"),o=l("p"),E=B("visit "),m=l("a"),M=B("kit.svelte.dev"),v=B(" to learn SvelteKit"),this.h()},l(n){a=u(n,"DIV",{class:!0});var _=r(a);ke(c.$$.fragment,_),f=y(_),i=u(_,"MAIN",{class:!0});var $=r(i);h&&h.l($),$.forEach(s),T=y(_),I=u(_,"FOOTER",{class:!0});var A=r(I);o=u(A,"P",{});var C=r(o);E=D(C,"visit "),m=u(C,"A",{href:!0,class:!0});var G=r(m);M=D(G,"kit.svelte.dev"),G.forEach(s),v=D(C," to learn SvelteKit"),C.forEach(s),A.forEach(s),_.forEach(s),this.h()},h(){e(i,"class","svelte-8o1gnw"),e(m,"href","https://kit.svelte.dev"),e(m,"class","svelte-8o1gnw"),e(I,"class","svelte-8o1gnw"),e(a,"class","app svelte-8o1gnw")},m(n,_){Ce(n,a,_),Be(c,a,null),t(a,f),t(a,i),h&&h.m(i,null),t(a,T),t(a,I),t(I,o),t(o,E),t(o,m),t(m,M),t(o,v),p=!0},p(n,[_]){h&&h.p&&(!p||_&1)&&De(h,z,n,n[0],p?Ge(z,n[0],_,null):Me(n[0]),null)},i(n){p||(Ae(c.$$.fragment,n),Ae(h,n),p=!0)},o(n){Le(c.$$.fragment,n),Le(h,n),p=!1},d(n){n&&s(a),Re(c),h&&h.d(n)}}}function Ze(d,a,c){let{$$slots:f={},$$scope:i}=a;return d.$$set=T=>{"$$scope"in T&&c(0,i=T.$$scope)},[i,f]}class Pe extends we{constructor(a){super(),ye(this,a,Ze,Oe,Te,{})}}export{Pe as default};
