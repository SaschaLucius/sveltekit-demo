import{S as J,i as L,s as M,k as b,a as O,q as w,P as W,l as T,h,c as R,m as v,r as C,n as B,I as g,b as k,B as q,J as H,T as S,u as X}from"../../../../chunks/index-51a79e1d.js";function P(r,e,o){const s=r.slice();return s[8]=e[o],s[10]=o,s}function U(r,e,o){const s=r.slice();return s[8]=e[o],s[12]=o,s}function z(r){let e,o=r[0][r[10]*3+r[12]]+"",s,t,l;function c(){return r[4](r[10],r[12])}return{c(){e=b("td"),s=w(o),this.h()},l(n){e=T(n,"TD",{class:!0});var u=v(e);s=C(u,o),u.forEach(h),this.h()},h(){B(e,"class","svelte-7ov6iw")},m(n,u){k(n,e,u),g(e,s),t||(l=S(e,"click",c),t=!0)},p(n,u){r=n,u&1&&o!==(o=r[0][r[10]*3+r[12]]+"")&&X(s,o)},d(n){n&&h(e),t=!1,l()}}}function F(r){let e,o,s=Array(3),t=[];for(let l=0;l<s.length;l+=1)t[l]=z(U(r,s,l));return{c(){e=b("tr");for(let l=0;l<t.length;l+=1)t[l].c();o=O()},l(l){e=T(l,"TR",{});var c=v(e);for(let n=0;n<t.length;n+=1)t[n].l(c);o=R(c),c.forEach(h)},m(l,c){k(l,e,c);for(let n=0;n<t.length;n+=1)t[n].m(e,null);g(e,o)},p(l,c){if(c&5){s=Array(3);let n;for(n=0;n<s.length;n+=1){const u=U(l,s,n);t[n]?t[n].p(u,c):(t[n]=z(u),t[n].c(),t[n].m(e,o))}for(;n<t.length;n+=1)t[n].d(1);t.length=s.length}},d(l){l&&h(e),H(t,l)}}}function Y(r){let e,o,s,t;return{c(){e=b("button"),o=w("Reset")},l(l){e=T(l,"BUTTON",{});var c=v(e);o=C(c,"Reset"),c.forEach(h)},m(l,c){k(l,e,c),g(e,o),s||(t=S(e,"click",r[3]),s=!0)},p:q,d(l){l&&h(e),s=!1,t()}}}function j(r){let e,o,s,t;return{c(){e=b("button"),o=w("Restart")},l(l){e=T(l,"BUTTON",{});var c=v(e);o=C(c,"Restart"),c.forEach(h)},m(l,c){k(l,e,c),g(e,o),s||(t=S(e,"click",r[3]),s=!0)},p:q,d(l){l&&h(e),s=!1,t()}}}function G(r){let e,o,s,t,l,c,n,u,A,y=Array(3),i=[];for(let a=0;a<y.length;a+=1)i[a]=F(P(r,y,a));function m(a,d){return a[1]?j:Y}let p=m(r),_=p(r);return{c(){e=b("meta"),o=O(),s=b("h1"),t=w("Tic-Tac-Toe game"),l=O(),c=b("section"),n=b("table"),u=b("tbody");for(let a=0;a<i.length;a+=1)i[a].c();A=O(),_.c(),this.h()},l(a){const d=W("svelte-gs0vcz",document.head);e=T(d,"META",{name:!0,content:!0}),d.forEach(h),o=R(a),s=T(a,"H1",{});var f=v(s);t=C(f,"Tic-Tac-Toe game"),f.forEach(h),l=R(a),c=T(a,"SECTION",{class:!0});var E=v(c);n=T(E,"TABLE",{class:!0});var D=v(n);u=T(D,"TBODY",{});var I=v(u);for(let N=0;N<i.length;N+=1)i[N].l(I);I.forEach(h),D.forEach(h),A=R(E),_.l(E),E.forEach(h),this.h()},h(){document.title="Tic-Tac-Toe",B(e,"name","description"),B(e,"content","Tic-Tac-Toe game"),B(n,"class","svelte-7ov6iw"),B(c,"class","svelte-7ov6iw")},m(a,d){g(document.head,e),k(a,o,d),k(a,s,d),g(s,t),k(a,l,d),k(a,c,d),g(c,n),g(n,u);for(let f=0;f<i.length;f+=1)i[f].m(u,null);g(c,A),_.m(c,null)},p(a,[d]){if(d&5){y=Array(3);let f;for(f=0;f<y.length;f+=1){const E=P(a,y,f);i[f]?i[f].p(E,d):(i[f]=F(E),i[f].c(),i[f].m(u,null))}for(;f<i.length;f+=1)i[f].d(1);i.length=y.length}p===(p=m(a))&&_?_.p(a,d):(_.d(1),_=p(a),_&&(_.c(),_.m(c,null)))},i:q,o:q,d(a){h(e),a&&h(o),a&&h(s),a&&h(l),a&&h(c),H(i,a),_.d()}}}function K(r,e,o){const s=["X","O"];let t=["","","","","","","","",""],l=0,c=!1;function n(i){if(t[i]==""&&!c){o(0,t[i]=s[l%2],t),l+=1;let m=A();m!=null&&alert(m)}}function u(){o(0,t=["","","","","","","","",""]),l=0,o(1,c=!1)}function A(){const i=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let m=0;m<i.length;m++){const[p,_,a]=i[m];if(t[p]&&t[p]===t[_]&&t[p]===t[a])return o(1,c=!0),t[p]}return null}return[t,c,n,u,(i,m)=>n(i*3+m)]}class V extends J{constructor(e){super(),L(this,e,K,G,M,{})}}export{V as default};
