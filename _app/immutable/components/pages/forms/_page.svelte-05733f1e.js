import{S as et,i as tt,s as lt,k as r,q as d,a as p,l as s,m as b,r as w,h as l,c as _,n as E,b as v,I as t,u as pe,B as ge,w as Be,P as nt,x as De,y as Ae,X as T,T as J,Y as xe,f as $e,t as ke,z as Je,D as at,K as it}from"../../../chunks/index-51a79e1d.js";import{w as ut}from"../../../chunks/index-5744a07e.js";function rt(i){let f,h,m,o;return{c(){f=r("label"),h=d(i[0]),m=p(),o=r("input"),this.h()},l(a){f=s(a,"LABEL",{for:!0});var n=b(f);h=w(n,i[0]),n.forEach(l),m=_(a),o=s(a,"INPUT",{id:!0,name:!0,type:!0}),this.h()},h(){E(f,"for",i[1]),E(o,"id",i[1]),E(o,"name",i[1]),E(o,"type",i[2])},m(a,n){v(a,f,n),t(f,h),v(a,m,n),v(a,o,n)},p(a,[n]){n&1&&pe(h,a[0]),n&2&&E(f,"for",a[1]),n&2&&E(o,"id",a[1]),n&2&&E(o,"name",a[1]),n&4&&E(o,"type",a[2])},i:ge,o:ge,d(a){a&&l(f),a&&l(m),a&&l(o)}}}function st(i,f,h){let{label:m}=f,{name:o}=f,{type:a}=f;return i.$$set=n=>{"label"in n&&h(0,m=n.label),"name"in n&&h(1,o=n.name),"type"in n&&h(2,a=n.type)},[m,o,a]}class Re extends et{constructor(f){super(),tt(this,f,st,rt,lt,{label:0,name:1,type:2})}}const oe=ut({name:"defaultName",phone:"defaultPhone",email:"default@mail.com"});function ft(i){let f,h,m,o,a,n,P,C,O,V,c,ee,F,K,te,L,_e,X=JSON.stringify(i[0],null,2)+"",le,he,ne,R,ve,ae,y,Y,be,Ee,M,ye,G,de,we,B,Ne,Q,Se,Te,D,ie,j,W=JSON.stringify(i[2],null,2)+"",ue,re,H,Pe,se,N,Z,I,Oe,g,U,ce,q,Fe,x,fe,Ie,z,Ue,k,Le,je;return P=new Re({props:{label:"Username",name:"username",type:"text"}}),O=new Re({props:{label:"Password",name:"password",type:"password"}}),c=new Re({props:{label:"Email",name:"email",type:"email"}}),{c(){f=r("meta"),h=p(),m=r("h1"),o=d("Form with in Memory Storage"),a=p(),n=r("form"),Be(P.$$.fragment),C=p(),Be(O.$$.fragment),V=p(),Be(c.$$.fragment),ee=p(),F=r("button"),K=d("Submit"),te=p(),L=r("pre"),_e=d("	"),le=d(X),he=d(`
`),ne=p(),R=r("h1"),ve=d("Form with Store"),ae=p(),y=r("form"),Y=r("label"),be=d("Name"),Ee=p(),M=r("input"),ye=p(),G=r("label"),de=d("E-Mail"),we=p(),B=r("input"),Ne=p(),Q=r("label"),Se=d("Telephone"),Te=p(),D=r("input"),ie=p(),j=r("p"),ue=d(W),re=p(),H=r("h1"),Pe=d("Simple two-way bind"),se=p(),N=r("form"),Z=r("div"),I=r("input"),Oe=p(),g=r("div"),U=r("input"),ce=p(),q=r("p"),Fe=d("username: "),x=r("code"),fe=d(i[1]),Ie=p(),z=r("button"),Ue=d("reset"),this.h()},l(e){const u=nt("svelte-taxs8f",document.head);f=s(u,"META",{name:!0,content:!0}),u.forEach(l),h=_(e),m=s(e,"H1",{});var He=b(m);o=w(He,"Form with in Memory Storage"),He.forEach(l),a=_(e),n=s(e,"FORM",{});var A=b(n);De(P.$$.fragment,A),C=_(A),De(O.$$.fragment,A),V=_(A),De(c.$$.fragment,A),ee=_(A),F=s(A,"BUTTON",{});var qe=b(F);K=w(qe,"Submit"),qe.forEach(l),A.forEach(l),te=_(e),L=s(e,"PRE",{});var me=b(L);_e=w(me,"	"),le=w(me,X),he=w(me,`
`),me.forEach(l),ne=_(e),R=s(e,"H1",{});var ze=b(R);ve=w(ze,"Form with Store"),ze.forEach(l),ae=_(e),y=s(e,"FORM",{class:!0});var S=b(y);Y=s(S,"LABEL",{});var Ce=b(Y);be=w(Ce,"Name"),Ce.forEach(l),Ee=_(S),M=s(S,"INPUT",{type:!0}),ye=_(S),G=s(S,"LABEL",{});var Ve=b(G);de=w(Ve,"E-Mail"),Ve.forEach(l),we=_(S),B=s(S,"INPUT",{type:!0}),Ne=_(S),Q=s(S,"LABEL",{});var Ke=b(Q);Se=w(Ke,"Telephone"),Ke.forEach(l),Te=_(S),D=s(S,"INPUT",{type:!0}),S.forEach(l),ie=_(e),j=s(e,"P",{});var Xe=b(j);ue=w(Xe,W),Xe.forEach(l),re=_(e),H=s(e,"H1",{});var Ye=b(H);Pe=w(Ye,"Simple two-way bind"),Ye.forEach(l),se=_(e),N=s(e,"FORM",{});var $=b(N);Z=s($,"DIV",{});var Ge=b(Z);I=s(Ge,"INPUT",{type:!0,name:!0}),Ge.forEach(l),Oe=_($),g=s($,"DIV",{});var Qe=b(g);U=s(Qe,"INPUT",{type:!0,name:!0}),Qe.forEach(l),ce=_($),q=s($,"P",{});var Me=b(q);Fe=w(Me,"username: "),x=s(Me,"CODE",{});var We=b(x);fe=w(We,i[1]),We.forEach(l),Me.forEach(l),Ie=_($),z=s($,"BUTTON",{});var Ze=b(z);Ue=w(Ze,"reset"),Ze.forEach(l),$.forEach(l),this.h()},h(){document.title="Forms",E(f,"name","description"),E(f,"content","Forms"),E(M,"type","text"),E(B,"type","text"),E(D,"type","text"),E(y,"class","content svelte-bzadv5"),E(I,"type","text"),E(I,"name","username"),E(U,"type","text"),E(U,"name","repeat")},m(e,u){t(document.head,f),v(e,h,u),v(e,m,u),t(m,o),v(e,a,u),v(e,n,u),Ae(P,n,null),t(n,C),Ae(O,n,null),t(n,V),Ae(c,n,null),t(n,ee),t(n,F),t(F,K),v(e,te,u),v(e,L,u),t(L,_e),t(L,le),t(L,he),v(e,ne,u),v(e,R,u),t(R,ve),v(e,ae,u),v(e,y,u),t(y,Y),t(Y,be),t(y,Ee),t(y,M),T(M,i[2].name),t(y,ye),t(y,G),t(G,de),t(y,we),t(y,B),T(B,i[2].email),t(y,Ne),t(y,Q),t(Q,Se),t(y,Te),t(y,D),T(D,i[2].phone),v(e,ie,u),v(e,j,u),t(j,ue),v(e,re,u),v(e,H,u),t(H,Pe),v(e,se,u),v(e,N,u),t(N,Z),t(Z,I),T(I,i[1]),t(N,Oe),t(N,g),t(g,U),T(U,i[1]),t(N,ce),t(N,q),t(q,Fe),t(q,x),t(x,fe),t(N,Ie),t(N,z),t(z,Ue),k=!0,Le||(je=[J(n,"submit",xe(i[3])),J(M,"input",i[4]),J(B,"input",i[5]),J(D,"input",i[6]),J(I,"input",i[7]),J(U,"input",i[8]),J(z,"click",xe(i[9]))],Le=!0)},p(e,[u]){(!k||u&1)&&X!==(X=JSON.stringify(e[0],null,2)+"")&&pe(le,X),u&4&&M.value!==e[2].name&&T(M,e[2].name),u&4&&B.value!==e[2].email&&T(B,e[2].email),u&4&&D.value!==e[2].phone&&T(D,e[2].phone),(!k||u&4)&&W!==(W=JSON.stringify(e[2],null,2)+"")&&pe(ue,W),u&2&&I.value!==e[1]&&T(I,e[1]),u&2&&U.value!==e[1]&&T(U,e[1]),(!k||u&2)&&pe(fe,e[1])},i(e){k||($e(P.$$.fragment,e),$e(O.$$.fragment,e),$e(c.$$.fragment,e),k=!0)},o(e){ke(P.$$.fragment,e),ke(O.$$.fragment,e),ke(c.$$.fragment,e),k=!1},d(e){l(f),e&&l(h),e&&l(m),e&&l(a),e&&l(n),Je(P),Je(O),Je(c),e&&l(te),e&&l(L),e&&l(ne),e&&l(R),e&&l(ae),e&&l(y),e&&l(ie),e&&l(j),e&&l(re),e&&l(H),e&&l(se),e&&l(N),Le=!1,at(je)}}}function mt(i,f,h){let m;it(i,oe,F=>h(2,m=F));let o={},a="jane";function n(F){const K=new FormData(F.target);h(0,o=Object.fromEntries(K.entries()))}function P(){m.name=this.value,oe.set(m)}function C(){m.email=this.value,oe.set(m)}function O(){m.phone=this.value,oe.set(m)}function V(){a=this.value,h(1,a)}function c(){a=this.value,h(1,a)}return[o,a,m,n,P,C,O,V,c,()=>h(1,a="")]}class _t extends et{constructor(f){super(),tt(this,f,mt,ft,lt,{})}}export{_t as default};