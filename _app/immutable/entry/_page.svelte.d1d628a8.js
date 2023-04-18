import{S as Ce,i as He,s as Le,J as Pe,k as c,q as W,a as D,l as u,m as s,r as O,h as n,c as T,n as r,K as Et,p as K,b as kt,G as t,L as C,M as wt,u as te,H as Kt,N as Ue,O as Ye,w as Se,P as ut,Q as dt,R as Jt}from"../chunks/index.9d56d807.js";import{w as Er}from"../chunks/index.e22c36b8.js";var ze={dragStart:!0},wr=(e,o,l)=>Math.min(Math.max(e,o),l),Me=e=>typeof e=="string",kr=([e,o],l,i)=>{const f=(v,a)=>a===0?0:Math.ceil(v/a)*a;return[f(l,e),f(i,o)]},vr=(e,o)=>e.some(l=>o.some(i=>l.contains(i)));function Ae(e,o){if(e===void 0)return;if(Ne(e))return e.getBoundingClientRect();if(typeof e=="object"){const{top:i=0,left:f=0,right:v=0,bottom:a=0}=e;return{top:i,right:window.innerWidth-v,bottom:window.innerHeight-a,left:f}}if(e==="parent")return o.parentNode.getBoundingClientRect();const l=document.querySelector(e);if(l===null)throw new Error("The selector provided for bound doesn't exists in the document.");return l.getBoundingClientRect()}var ie=(e,o,l)=>e.style.setProperty(o,l),Ne=e=>e instanceof HTMLElement,Wt=(e,o={})=>{let l,i,{bounds:f,axis:v="both",gpuAcceleration:a=!0,legacyTranslate:p=!0,transform:b,applyUserSelectHack:g=!0,disabled:x=!1,ignoreMultitouch:_=!1,recomputeBounds:d=ze,grid:M,position:E,cancel:m,handle:N,defaultClass:h="neodrag",defaultClassDragging:B="neodrag-dragging",defaultClassDragged:y="neodrag-dragged",defaultPosition:z={x:0,y:0},onDragStart:I,onDrag:U,onDragEnd:j}=o,S=!1,k=0,A=0,Z=0,et=0,Q=0,lt=0,{x:ht,y:q}=E?{x:(E==null?void 0:E.x)??0,y:(E==null?void 0:E.y)??0}:z;it(ht,q);let V,rt,F,Y,at,st="",vt=!!E;d={...ze,...d};const Bt=document.body.style,ft=e.classList;function it(w=k,H=A){if(!b){if(p){let L=`${+w}px, ${+H}px`;return ie(e,"transform",a?`translate3d(${L}, 0)`:`translate(${L})`)}return ie(e,"translate",`${+w}px ${+H}px ${a?"1px":""}`)}const R=b({offsetX:w,offsetY:H,rootNode:e});Me(R)&&ie(e,"transform",R)}const Dt=(w,H)=>{const R={offsetX:k,offsetY:A,rootNode:e,currentNode:at};e.dispatchEvent(new CustomEvent(w,{detail:R})),H==null||H(R)},Tt=addEventListener;Tt("pointerdown",xt,!1),Tt("pointerup",Ot,!1),Tt("pointermove",Ct,!1),ie(e,"touch-action","none");const nt=()=>{let w=e.offsetWidth/rt.width;return isNaN(w)&&(w=1),w};function xt(w){if(x||w.button===2||_&&!w.isPrimary)return;if(d.dragStart&&(V=Ae(f,e)),Me(N)&&Me(m)&&N===m)throw new Error("`handle` selector can't be same as `cancel` selector");if(ft.add(h),F=function(P,ot){if(!P)return[ot];if(Ne(P))return[P];if(Array.isArray(P))return P;const $=ot.querySelectorAll(P);if($===null)throw new Error("Selector passed for `handle` option should be child of the element on which the action is applied");return Array.from($.values())}(N,e),Y=function(P,ot){if(!P)return[];if(Ne(P))return[P];if(Array.isArray(P))return P;const $=ot.querySelectorAll(P);if($===null)throw new Error("Selector passed for `cancel` option should be child of the element on which the action is applied");return Array.from($.values())}(m,e),l=/(both|x)/.test(v),i=/(both|y)/.test(v),vr(Y,F))throw new Error("Element being dragged can't be a child of the element on which `cancel` is applied");const H=w.composedPath()[0];if(!F.some(P=>{var ot;return P.contains(H)||((ot=P.shadowRoot)==null?void 0:ot.contains(H))})||vr(Y,[H]))return;at=F.length===1?e:F.find(P=>P.contains(H)),S=!0,rt=e.getBoundingClientRect(),g&&(st=Bt.userSelect,Bt.userSelect="none"),Dt("neodrag:start",I);const{clientX:R,clientY:L}=w,G=nt();l&&(Z=R-ht/G),i&&(et=L-q/G),V&&(Q=R-rt.left,lt=L-rt.top)}function Ot(){S&&(d.dragEnd&&(V=Ae(f,e)),ft.remove(B),ft.add(y),g&&(Bt.userSelect=st),Dt("neodrag:end",j),l&&(Z=k),i&&(et=A),S=!1)}function Ct(w){if(!S)return;d.drag&&(V=Ae(f,e)),ft.add(B),w.preventDefault(),rt=e.getBoundingClientRect();let H=w.clientX,R=w.clientY;const L=nt();if(V){const G={left:V.left+Q,top:V.top+lt,right:V.right+Q-rt.width,bottom:V.bottom+lt-rt.height};H=wr(H,G.left,G.right),R=wr(R,G.top,G.bottom)}if(Array.isArray(M)){let[G,P]=M;if(isNaN(+G)||G<0)throw new Error("1st argument of `grid` must be a valid positive number");if(isNaN(+P)||P<0)throw new Error("2nd argument of `grid` must be a valid positive number");let ot=H-Z,$=R-et;[ot,$]=kr([G/L,P/L],ot,$),H=Z+ot,R=et+$}l&&(k=Math.round((H-Z)*L)),i&&(A=Math.round((R-et)*L)),ht=k,q=A,Dt("neodrag",U),it()}return{destroy:()=>{const w=removeEventListener;w("pointerdown",xt,!1),w("pointerup",Ot,!1),w("pointermove",Ct,!1)},update:w=>{var R,L;v=w.axis||"both",x=w.disabled??!1,_=w.ignoreMultitouch??!1,N=w.handle,f=w.bounds,d=w.recomputeBounds??ze,m=w.cancel,g=w.applyUserSelectHack??!0,M=w.grid,a=w.gpuAcceleration??!0,p=w.legacyTranslate??!0,b=w.transform;const H=ft.contains(y);ft.remove(h,y),h=w.defaultClass??"neodrag",B=w.defaultClassDragging??"neodrag-dragging",y=w.defaultClassDragged??"neodrag-dragged",ft.add(h),H&&ft.add(y),vt&&(ht=k=((R=w.position)==null?void 0:R.x)??k,q=A=((L=w.position)==null?void 0:L.y)??A,it())}}};const xr=300,Ir="none";function Qt(e,o,l){return e.addEventListener(o,l),()=>e.removeEventListener(o,l)}function Br(e,o){return o.filter(l=>e.pointerId!==l.pointerId)}function ce(e,o,l,i,f){e.dispatchEvent(new CustomEvent(`${o}${f}`,{detail:{event:l,pointersCount:i.length}}))}function Dr(e,o,l,i,f,v=Ir){o.style.touchAction=v;let a=[];function p(g){a.push(g),ce(o,e,g,a,"down"),i==null||i(a,g);const x=g.pointerId;function _(h){x===h.pointerId&&(a=Br(h,a),a.length||d(),ce(o,e,h,a,"up"),f==null||f(a,h))}function d(){M(),E(),m(),N()}const M=Qt(o,"pointermove",h=>{a=a.map(B=>h.pointerId===B.pointerId?h:B),ce(o,e,h,a,"move"),l==null||l(a,h)}),E=Qt(o,"lostpointercapture",h=>{_(h)}),m=Qt(o,"pointerup",h=>{_(h)}),N=Qt(o,"pointerleave",h=>{a=[],d(),ce(o,e,h,a,"up"),f==null||f(a,h)})}const b=Qt(o,"pointerdown",p);return{destroy:()=>{b()}}}function $t(e,o={timeframe:xr}){const l="tap";let i,f,v;function a(b,g){if(Math.abs(g.clientX-f)<4&&Math.abs(g.clientY-v)<4&&Date.now()-i<o.timeframe){const x=e.getBoundingClientRect(),_=Math.round(g.clientX-x.left),d=Math.round(g.clientY-x.top);e.dispatchEvent(new CustomEvent(l,{detail:{x:_,y:d,target:g.target}}))}}function p(b,g){f=g.clientX,v=g.clientY,i=Date.now()}return Dr(l,e,null,p,a)}const ee=Er(0),{window:Ve}=Ye;function Tr(e){let o,l,i,f,v,a,p,b,g,x,_,d,M,E,m,N,h,B,y;return Pe(e[11]),{c(){o=c("div"),l=c("div"),i=c("div"),f=c("div"),v=W(e[0]),a=D(),p=c("div"),b=c("button"),g=W("✕"),x=D(),_=c("div"),d=c("iframe"),E=D(),m=c("div"),N=D(),h=c("div"),this.h()},l(z){o=u(z,"DIV",{class:!0,style:!0});var I=s(o);l=u(I,"DIV",{class:!0});var U=s(l);i=u(U,"DIV",{class:!0});var j=s(i);f=u(j,"DIV",{class:!0});var S=s(f);v=O(S,e[0]),S.forEach(n),a=T(j),p=u(j,"DIV",{class:!0});var k=s(p);b=u(k,"BUTTON",{class:!0});var A=s(b);g=O(A,"✕"),A.forEach(n),k.forEach(n),j.forEach(n),U.forEach(n),x=T(I),_=u(I,"DIV",{class:!0});var Z=s(_);d=u(Z,"IFRAME",{class:!0,src:!0,frameborder:!0,onload:!0,title:!0}),s(d).forEach(n),E=T(Z),m=u(Z,"DIV",{}),s(m).forEach(n),Z.forEach(n),N=T(I),h=u(I,"DIV",{class:!0,id:!0}),s(h).forEach(n),I.forEach(n),this.h()},h(){r(f,"class","title flex-grow overflow-hidden whitespace-nowrap text-ellipsis"),r(b,"class","close"),r(p,"class","controls bg-transparent border-none text-white font-bold mr-2"),r(i,"class","flex"),r(l,"class","titlebar absolute top-0 left-0 right-0 h-6 bg-[#5B5B5B] rounded-t-lg text-white text-center"),r(d,"class","w-full h-full border-none"),Et(d.src,M=e[1])||r(d,"src",M),r(d,"frameborder","0"),d.allowFullscreen=!0,r(d,"onload",e[8]),r(d,"title",e[0]),r(_,"class","content absolute top-6 left-0 right-0 bottom-0 overflow-hidden"),r(h,"class","notDraggable cursor-move absolute z-50 bottom-0 right-0 w-4 h-4 rounded-br-lg bg-[#5B5B5B]"),r(h,"id","resizeHandle"),r(o,"class","userWindow absolute inline-block w-[500px] h-[400px] m-5 p-2 rounded-lg bg-white shadow-lg shadow-black"),K(o,"z-index",e[4]),K(o,"max-width",e[5]-50+"px"),K(o,"max-height",e[6]-50+"px")},m(z,I){kt(z,o,I),t(o,l),t(l,i),t(i,f),t(f,v),t(i,a),t(i,p),t(p,b),t(b,g),t(o,x),t(o,_),t(_,d),e[12](d),t(_,E),t(_,m),t(o,N),t(o,h),e[14](o),B||(y=[C(Ve,"resize",e[11]),C(b,"click",e[7]),C(h,"dragend",e[13]),wt(Wt.call(null,o,{axis:"both",bounds:"parent",cancel:".notDraggable"})),C(o,"mousedown",e[10])],B=!0)},p(z,[I]){I&1&&te(v,z[0]),I&2&&!Et(d.src,M=z[1])&&r(d,"src",M),I&1&&r(d,"title",z[0]),I&16&&K(o,"z-index",z[4]),I&32&&K(o,"max-width",z[5]-50+"px"),I&64&&K(o,"max-height",z[6]-50+"px")},i:Kt,o:Kt,d(z){z&&n(o),e[12](null),e[14](null),B=!1,Ue(y)}}}function zr(e,o,l){let{title:i=""}=o,{url:f=""}=o,v,a;const p=()=>{a.remove(),ee.update(y=>y-1)},b=()=>{l(2,v.contentWindow.document.body.style.backgroundColor="#BFBFBF",v)};let g=0;function x(){const y=document.querySelectorAll(".userWindow");let z=0;for(let I=0;I<y.length;I++){const U=window.getComputedStyle(y[I]).zIndex,j=parseInt(U);!isNaN(j)&&j>z&&(z=j)}l(4,g=z+1)}function _(y){requestAnimationFrame(()=>{const z=y.x,I=y.y,U=z-a.clientWidth,j=I-a.clientHeight;l(3,a.style.width=a.clientWidth+U+"px",a),l(3,a.style.height=a.clientHeight+j+"px",a)})}function d(){x()}let M=0,E=0;function m(){l(5,M=Ve.outerWidth),l(6,E=Ve.outerHeight)}function N(y){Se[y?"unshift":"push"](()=>{v=y,l(2,v)})}const h=y=>_(y);function B(y){Se[y?"unshift":"push"](()=>{a=y,l(3,a)})}return e.$$set=y=>{"title"in y&&l(0,i=y.title),"url"in y&&l(1,f=y.url)},x(),[i,f,v,a,g,M,E,p,b,_,d,m,N,h,B]}class Mr extends Ce{constructor(o){super(),He(this,o,zr,Tr,Le,{title:0,url:1})}}const{window:We}=Ye;function _r(e){let o,l;return{c(){o=c("img"),this.h()},l(i){o=u(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){r(o,"class","m-auto w-10"),Et(o.src,l=e[2])||r(o,"src",l),r(o,"alt",e[0])},m(i,f){kt(i,o,f)},p(i,f){f&4&&!Et(o.src,l=i[2])&&r(o,"src",l),f&1&&r(o,"alt",i[0])},d(i){i&&n(o)}}}function Ar(e){let o,l,i,f,v,a,p,b,g,x,_,d,M,E,m,N,h,B,y,z,I,U,j;Pe(e[9]);let S=e[2]&&_r(e);return{c(){o=c("div"),l=c("div"),i=c("div"),f=c("div"),v=W(e[0]),a=D(),p=c("div"),b=c("button"),g=W("✕"),x=D(),_=c("div"),d=c("div"),M=c("h1"),E=W(e[0]),m=D(),N=c("p"),h=W(e[1]),B=D(),S&&S.c(),y=D(),z=c("button"),I=W("Ok"),this.h()},l(k){o=u(k,"DIV",{class:!0,style:!0});var A=s(o);l=u(A,"DIV",{class:!0});var Z=s(l);i=u(Z,"DIV",{class:!0});var et=s(i);f=u(et,"DIV",{class:!0});var Q=s(f);v=O(Q,e[0]),Q.forEach(n),a=T(et),p=u(et,"DIV",{class:!0});var lt=s(p);b=u(lt,"BUTTON",{class:!0});var ht=s(b);g=O(ht,"✕"),ht.forEach(n),lt.forEach(n),et.forEach(n),Z.forEach(n),x=T(A),_=u(A,"DIV",{class:!0});var q=s(_);d=u(q,"DIV",{class:!0});var V=s(d);M=u(V,"H1",{class:!0});var rt=s(M);E=O(rt,e[0]),rt.forEach(n),m=T(V),N=u(V,"P",{});var F=s(N);h=O(F,e[1]),F.forEach(n),B=T(V),S&&S.l(V),y=T(V),z=u(V,"BUTTON",{class:!0});var Y=s(z);I=O(Y,"Ok"),Y.forEach(n),V.forEach(n),q.forEach(n),A.forEach(n),this.h()},h(){r(f,"class","title flex-grow overflow-hidden whitespace-nowrap text-ellipsis"),r(b,"class","close"),r(p,"class","controls bg-transparent border-none text-white font-bold mr-2"),r(i,"class","flex"),r(l,"class","titlebar absolute top-0 left-0 right-0 h-6 bg-[#5B5B5B] rounded-t-lg text-white text-center"),r(M,"class","text-3xl"),r(z,"class","bg-[#5B5B5B] text-white font-bold mt-2 py-2 px-4 rounded"),r(d,"class","font-pixeloid bg-white m-5 text-center"),r(_,"class","content absolute top-6 left-0 right-0 bottom-0 overflow-hidden"),r(o,"class","userWindow absolute inline-block w-[250px] h-[200px] m-5 p-2 rounded-lg bg-white shadow-lg shadow-black"),K(o,"z-index",e[4]),K(o,"max-width",e[5]-50+"px"),K(o,"max-height",e[6]-10+"px")},m(k,A){kt(k,o,A),t(o,l),t(l,i),t(i,f),t(f,v),t(i,a),t(i,p),t(p,b),t(b,g),t(o,x),t(o,_),t(_,d),t(d,M),t(M,E),t(d,m),t(d,N),t(N,h),t(d,B),S&&S.m(d,null),t(d,y),t(d,z),t(z,I),e[10](o),U||(j=[C(We,"resize",e[9]),C(b,"click",e[7]),C(z,"click",e[7]),wt(Wt.call(null,o,{axis:"both",bounds:"parent"})),C(o,"mousedown",e[8])],U=!0)},p(k,[A]){A&1&&te(v,k[0]),A&1&&te(E,k[0]),A&2&&te(h,k[1]),k[2]?S?S.p(k,A):(S=_r(k),S.c(),S.m(d,y)):S&&(S.d(1),S=null),A&16&&K(o,"z-index",k[4]),A&32&&K(o,"max-width",k[5]-50+"px"),A&64&&K(o,"max-height",k[6]-10+"px")},i:Kt,o:Kt,d(k){k&&n(o),S&&S.d(),e[10](null),U=!1,Ue(j)}}}function Sr(e,o,l){let{title:i=""}=o,{content:f=""}=o,{image:v=""}=o,a;const p=()=>{a.remove(),ee.update(m=>m-1)};let b=0;function g(){const m=document.querySelectorAll(".userWindow");let N=0;for(let h=0;h<m.length;h++){const B=window.getComputedStyle(m[h]).zIndex,y=parseInt(B);!isNaN(y)&&y>N&&(N=y)}l(4,b=N+1)}function x(){g()}let _=0,d=0;function M(){l(5,_=We.innerWidth),l(6,d=We.outerHeight)}function E(m){Se[m?"unshift":"push"](()=>{a=m,l(3,a)})}return e.$$set=m=>{"title"in m&&l(0,i=m.title),"content"in m&&l(1,f=m.content),"image"in m&&l(2,v=m.image)},g(),[i,f,v,a,b,_,d,p,x,M,E]}class Nr extends Ce{constructor(o){super(),He(this,o,Sr,Ar,Le,{title:0,content:1,image:2})}}const{window:Oe}=Ye;function yr(e){let o,l,i,f,v,a,p,b,g,x,_,d,M,E,m,N;return{c(){o=c("div"),l=c("p"),i=W("my time: "),f=W(e[3]),v=D(),a=c("div"),p=c("button"),b=ut("svg"),g=ut("g"),x=ut("g"),_=ut("g"),d=ut("path"),M=ut("g"),E=ut("path"),this.h()},l(h){o=u(h,"DIV",{class:!0});var B=s(o);l=u(B,"P",{});var y=s(l);i=O(y,"my time: "),f=O(y,e[3]),y.forEach(n),B.forEach(n),v=T(h),a=u(h,"DIV",{class:!0});var z=s(a);p=u(z,"BUTTON",{class:!0});var I=s(p);b=dt(I,"svg",{xmlns:!0,"xmlns:xlink":!0,version:!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0});var U=s(b);g=dt(U,"g",{});var j=s(g);x=dt(j,"g",{});var S=s(x);_=dt(S,"g",{});var k=s(_);d=dt(k,"path",{d:!0}),s(d).forEach(n),k.forEach(n),M=dt(S,"g",{});var A=s(M);E=dt(A,"path",{d:!0}),s(E).forEach(n),A.forEach(n),S.forEach(n),j.forEach(n),U.forEach(n),I.forEach(n),z.forEach(n),this.h()},h(){r(o,"class","flex float-right min-w-fit mr-5 justify-evenly text-sm"),r(d,"d","M177.483,176.365c-6.903,0-12.5-5.597-12.5-12.5V12.5c0-6.903,5.597-12.5,12.5-12.5c6.903,0,12.5,5.597,12.5,12.5     v151.365C189.983,170.768,184.387,176.365,177.483,176.365z"),r(E,"d","M177.483,354.965c-87.831,0-159.286-71.456-159.286-159.285c0-35.124,11.209-68.431,32.417-96.32     c20.515-26.979,49.637-47.061,82-56.545c6.625-1.949,13.569,1.855,15.511,8.479c1.941,6.625-1.855,13.569-8.48,15.511     C82.857,83.449,43.196,136.443,43.196,195.68c0,74.045,60.24,134.285,134.286,134.285c74.045,0,134.286-60.24,134.286-134.285     c0-59.237-39.661-112.231-96.449-128.875c-6.625-1.941-10.421-8.886-8.479-15.511c1.94-6.625,8.885-10.426,15.511-8.479     c32.364,9.484,61.484,29.566,82,56.545c21.208,27.89,32.417,61.196,32.417,96.32C336.77,283.509,265.314,354.965,177.483,354.965     z"),r(b,"xmlns","http://www.w3.org/2000/svg"),r(b,"xmlns:xlink","http://www.w3.org/1999/xlink"),r(b,"version","1.1"),r(b,"x","0px"),r(b,"y","0px"),r(b,"viewBox","0 0 354.965 354.965"),K(b,"enable-background","new 0 0 354.965 354.965"),r(b,"xml:space","preserve"),r(p,"class","w-5 h-5"),r(a,"class","flex float-right mr-5 justify-evenly text-sm")},m(h,B){kt(h,o,B),t(o,l),t(l,i),t(l,f),kt(h,v,B),kt(h,a,B),t(a,p),t(p,b),t(b,g),t(g,x),t(x,_),t(_,d),t(x,M),t(M,E),m||(N=C(p,"click",e[20]),m=!0)},p(h,B){B[0]&8&&te(f,h[3])},d(h){h&&n(o),h&&n(v),h&&n(a),m=!1,N()}}}function Vr(e){let o,l,i,f,v,a,p,b,g,x,_,d,M,E,m,N,h,B,y,z,I,U,j,S,k,A,Z,et,Q,lt,ht,q,V,rt,F,Y,at,st,vt,Bt,ft,it,Dt,Tt,nt,xt,Ot,Ct,w,H,R,L,G,P,ot,$,ue,de,zt,he,fe,re,X,gt,Mt,je,ge,Ht,pe,me,pt,At,qe,be,Lt,we,ve,mt,St,Re,_e,Pt,ye,Ee,bt,Nt,Xe,ke,Ut,xe,Ie,ct,Vt,Fe,Be,Yt,De,Te,Ge;Pe(e[15]);let tt=e[5]>768&&yr(e);return{c(){o=c("div"),l=c("div"),i=c("a"),f=W("evan"),v=D(),a=c("div"),p=c("button"),b=c("span"),g=W("about"),x=D(),_=ut("svg"),d=ut("path"),M=D(),E=c("div"),m=c("button"),N=W("open"),h=D(),B=c("button"),y=W("copy to clipboard"),z=D(),I=c("button"),U=c("a"),j=W("open github"),S=D(),k=c("button"),A=c("span"),Z=W("projects"),et=D(),Q=ut("svg"),lt=ut("path"),ht=D(),q=c("div"),V=c("a"),rt=W("kazwire"),F=D(),Y=c("a"),at=W("elixir"),st=D(),vt=c("a"),Bt=W("twitch-spotify"),ft=D(),it=c("a"),Dt=W("evans_cogs"),Tt=D(),nt=c("button"),xt=c("span"),Ot=W("contact"),Ct=D(),w=ut("svg"),H=ut("path"),R=D(),L=c("div"),G=c("button"),P=W("open"),ot=D(),$=c("a"),ue=W("email me"),de=D(),zt=c("button"),he=W("copy discord"),fe=D(),tt&&tt.c(),re=D(),X=c("div"),gt=c("button"),Mt=c("img"),ge=D(),Ht=c("p"),pe=W("drawing"),me=D(),pt=c("button"),At=c("img"),be=D(),Lt=c("p"),we=W("about me"),ve=D(),mt=c("button"),St=c("img"),_e=D(),Pt=c("p"),ye=W("contact me"),Ee=D(),bt=c("button"),Nt=c("img"),ke=D(),Ut=c("p"),xe=W("kazwire (project)"),Ie=D(),ct=c("button"),Vt=c("img"),Be=D(),Yt=c("p"),De=W("trollface"),this.h()},l(J){o=u(J,"DIV",{id:!0,class:!0});var _t=s(o);l=u(_t,"DIV",{class:!0});var jt=s(l);i=u(jt,"A",{href:!0,class:!0});var Ze=s(i);f=O(Ze,"evan"),Ze.forEach(n),v=T(jt),a=u(jt,"DIV",{class:!0});var qt=s(a);p=u(qt,"BUTTON",{class:!0});var Rt=s(p);b=u(Rt,"SPAN",{});var Je=s(b);g=O(Je,"about"),Je.forEach(n),x=T(Rt),_=dt(Rt,"svg",{class:!0,xmlns:!0,viewBox:!0,fill:!0});var Ke=s(_);d=dt(Ke,"path",{"fill-rule":!0,d:!0}),s(d).forEach(n),Ke.forEach(n),M=T(Rt),E=u(Rt,"DIV",{class:!0});var Xt=s(E);m=u(Xt,"BUTTON",{class:!0});var Qe=s(m);N=O(Qe,"open"),Qe.forEach(n),h=T(Xt),B=u(Xt,"BUTTON",{class:!0});var $e=s(B);y=O($e,"copy to clipboard"),$e.forEach(n),z=T(Xt),I=u(Xt,"BUTTON",{class:!0});var tr=s(I);U=u(tr,"A",{href:!0,target:!0,rel:!0});var er=s(U);j=O(er,"open github"),er.forEach(n),tr.forEach(n),Xt.forEach(n),Rt.forEach(n),S=T(qt),k=u(qt,"BUTTON",{class:!0});var Ft=s(k);A=u(Ft,"SPAN",{});var rr=s(A);Z=O(rr,"projects"),rr.forEach(n),et=T(Ft),Q=dt(Ft,"svg",{class:!0,xmlns:!0,viewBox:!0,fill:!0});var or=s(Q);lt=dt(or,"path",{"fill-rule":!0,d:!0}),s(lt).forEach(n),or.forEach(n),ht=T(Ft),q=u(Ft,"DIV",{class:!0});var It=s(q);V=u(It,"A",{href:!0,target:!0,rel:!0,class:!0});var lr=s(V);rt=O(lr,"kazwire"),lr.forEach(n),F=T(It),Y=u(It,"A",{href:!0,target:!0,rel:!0,class:!0});var nr=s(Y);at=O(nr,"elixir"),nr.forEach(n),st=T(It),vt=u(It,"A",{href:!0,target:!0,rel:!0,class:!0});var ar=s(vt);Bt=O(ar,"twitch-spotify"),ar.forEach(n),ft=T(It),it=u(It,"A",{href:!0,target:!0,rel:!0,class:!0});var sr=s(it);Dt=O(sr,"evans_cogs"),sr.forEach(n),It.forEach(n),Ft.forEach(n),Tt=T(qt),nt=u(qt,"BUTTON",{class:!0});var Gt=s(nt);xt=u(Gt,"SPAN",{});var ir=s(xt);Ot=O(ir,"contact"),ir.forEach(n),Ct=T(Gt),w=dt(Gt,"svg",{class:!0,xmlns:!0,viewBox:!0,fill:!0});var cr=s(w);H=dt(cr,"path",{"fill-rule":!0,d:!0}),s(H).forEach(n),cr.forEach(n),R=T(Gt),L=u(Gt,"DIV",{class:!0});var Zt=s(L);G=u(Zt,"BUTTON",{class:!0});var ur=s(G);P=O(ur,"open"),ur.forEach(n),ot=T(Zt),$=u(Zt,"A",{class:!0,href:!0});var dr=s($);ue=O(dr,"email me"),dr.forEach(n),de=T(Zt),zt=u(Zt,"BUTTON",{class:!0});var hr=s(zt);he=O(hr,"copy discord"),hr.forEach(n),Zt.forEach(n),Gt.forEach(n),qt.forEach(n),fe=T(jt),tt&&tt.l(jt),jt.forEach(n),_t.forEach(n),re=T(J),X=u(J,"DIV",{id:!0,class:!0,style:!0});var yt=s(X);gt=u(yt,"BUTTON",{class:!0});var oe=s(gt);Mt=u(oe,"IMG",{src:!0,alt:!0,class:!0}),ge=T(oe),Ht=u(oe,"P",{class:!0});var fr=s(Ht);pe=O(fr,"drawing"),fr.forEach(n),oe.forEach(n),me=T(yt),pt=u(yt,"BUTTON",{class:!0});var le=s(pt);At=u(le,"IMG",{src:!0,alt:!0,class:!0}),be=T(le),Lt=u(le,"P",{class:!0});var gr=s(Lt);we=O(gr,"about me"),gr.forEach(n),le.forEach(n),ve=T(yt),mt=u(yt,"BUTTON",{class:!0});var ne=s(mt);St=u(ne,"IMG",{src:!0,alt:!0,class:!0}),_e=T(ne),Pt=u(ne,"P",{class:!0});var pr=s(Pt);ye=O(pr,"contact me"),pr.forEach(n),ne.forEach(n),Ee=T(yt),bt=u(yt,"BUTTON",{class:!0});var ae=s(bt);Nt=u(ae,"IMG",{src:!0,alt:!0,class:!0}),ke=T(ae),Ut=u(ae,"P",{class:!0});var mr=s(Ut);xe=O(mr,"kazwire (project)"),mr.forEach(n),ae.forEach(n),Ie=T(yt),ct=u(yt,"BUTTON",{class:!0});var se=s(ct);Vt=u(se,"IMG",{src:!0,alt:!0,class:!0}),Be=T(se),Yt=u(se,"P",{class:!0});var br=s(Yt);De=O(br,"trollface"),br.forEach(n),se.forEach(n),yt.forEach(n),this.h()},h(){r(i,"href","/"),r(i,"class","ml-5"),r(d,"fill-rule","evenodd"),r(d,"d","M4.293 6.293a1 1 0 0 1 1.414 0L10 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-4.293 4.293a1 1 0 0 1-1.414 0L10 12.586l-3.293-3.293a1 1 0 0 1 0-1.414z"),r(_,"class","w-3 h-3 absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none"),r(_,"xmlns","http://www.w3.org/2000/svg"),r(_,"viewBox","0 0 20 20"),r(_,"fill","currentColor"),r(m,"class","block w-full px-4 py-2 hover:bg-gray-100"),r(B,"class","block w-full px-4 py-2 hover:bg-gray-100"),r(U,"href","https://github.com/whos-evan"),r(U,"target","_blank"),r(U,"rel","noreferrer"),r(I,"class","block w-full px-4 py-2 hover:bg-gray-100"),r(E,"class","absolute top-full left-0 w-fit bg-white shadow-lg divide-y divide-gray-200 z-10"),Jt(E,"invisible",!e[0]),r(p,"class","relative"),r(lt,"fill-rule","evenodd"),r(lt,"d","M4.293 6.293a1 1 0 0 1 1.414 0L10 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-4.293 4.293a1 1 0 0 1-1.414 0L10 12.586l-3.293-3.293a1 1 0 0 1 0-1.414z"),r(Q,"class","w-3 h-3 absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none"),r(Q,"xmlns","http://www.w3.org/2000/svg"),r(Q,"viewBox","0 0 20 20"),r(Q,"fill","currentColor"),r(V,"href","https://kazwire.com"),r(V,"target","_blank"),r(V,"rel","noreferrer"),r(V,"class","block px-4 py-2 hover:bg-gray-100"),r(Y,"href","https://elixirofficial.com"),r(Y,"target","_blank"),r(Y,"rel","noreferrer"),r(Y,"class","block px-4 py-2 hover:bg-gray-100"),r(vt,"href","https://github.com/whos-evan/twitch-spotify"),r(vt,"target","_blank"),r(vt,"rel","noreferrer"),r(vt,"class","block px-4 py-2 hover:bg-gray-100"),r(it,"href","https://github.com/whos-evan/evans_cogs"),r(it,"target","_blank"),r(it,"rel","noreferrer"),r(it,"class","block px-4 py-2 hover:bg-gray-100"),r(q,"class","absolute top-full left-0 w-fit bg-white shadow-lg divide-y divide-gray-200 z-10"),Jt(q,"invisible",!e[1]),r(k,"class","relative"),r(H,"fill-rule","evenodd"),r(H,"d","M4.293 6.293a1 1 0 0 1 1.414 0L10 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-4.293 4.293a1 1 0 0 1-1.414 0L10 12.586l-3.293-3.293a1 1 0 0 1 0-1.414z"),r(w,"class","w-3 h-3 absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none"),r(w,"xmlns","http://www.w3.org/2000/svg"),r(w,"viewBox","0 0 20 20"),r(w,"fill","currentColor"),r(G,"class","block w-full px-4 py-2 hover:bg-gray-100"),r($,"class","block w-full px-4 py-2 hover:bg-gray-100"),r($,"href","mailto:coming@soon.com"),r(zt,"class","block w-full px-4 py-2 hover:bg-gray-100"),r(L,"class","absolute top-full left-0 w-fit bg-white shadow-lg divide-y divide-gray-200 z-10"),Jt(L,"invisible",!e[2]),r(nt,"class","relative"),r(a,"class","float-right w-full pl-5 gap-5 text-sm flex"),r(l,"class","flex justify-center items-center h-full"),r(o,"id","navBar"),r(o,"class","font-pixeloid w-full h-10 border-solid border-2 border-black bg-white rounded-t-lg"),Et(Mt.src,je="images/drawing.png")||r(Mt,"src",je),r(Mt,"alt","drawing"),r(Mt,"class","w-16 h-16 m-auto grayscale"),r(Ht,"class","bg-white text-center text-sm mt-2"),r(gt,"class","m-5"),Et(At.src,qe="images/mountain.png")||r(At,"src",qe),r(At,"alt","about me"),r(At,"class","w-16 h-16 m-auto grayscale"),r(Lt,"class","bg-white text-center text-sm mt-2"),r(pt,"class","m-5"),Et(St.src,Re="images/contact.png")||r(St,"src",Re),r(St,"alt","contact me"),r(St,"class","w-16 h-16 m-auto grayscale"),r(Pt,"class","bg-white text-center text-sm mt-2"),r(mt,"class","m-5"),Et(Nt.src,Xe="images/kazwire.png")||r(Nt,"src",Xe),r(Nt,"alt","kazwire"),r(Nt,"class","w-16 h-16 m-auto grayscale bg-white"),r(Ut,"class","bg-white text-center text-sm mt-2"),r(bt,"class","m-5"),Et(Vt.src,Fe="images/trollface.png")||r(Vt,"src",Fe),r(Vt,"alt","kazwire"),r(Vt,"class","w-16 h-16 m-auto grayscale bg-white"),r(Yt,"class","bg-white text-center text-sm mt-2"),r(ct,"class","m-5"),r(X,"id","content"),r(X,"class","font-pixeloid w-full flex flex-wrap items-start justify-start"),K(X,"background-image","url('images/background.jpg')"),K(X,"background-size","cover"),K(X,"background-position","center"),K(X,"background-repeat","no-repeat"),K(X,"height","calc(100vh - 40px)")},m(J,_t){kt(J,o,_t),t(o,l),t(l,i),t(i,f),t(l,v),t(l,a),t(a,p),t(p,b),t(b,g),t(p,x),t(p,_),t(_,d),t(p,M),t(p,E),t(E,m),t(m,N),t(E,h),t(E,B),t(B,y),t(E,z),t(E,I),t(I,U),t(U,j),t(a,S),t(a,k),t(k,A),t(A,Z),t(k,et),t(k,Q),t(Q,lt),t(k,ht),t(k,q),t(q,V),t(V,rt),t(q,F),t(q,Y),t(Y,at),t(q,st),t(q,vt),t(vt,Bt),t(q,ft),t(q,it),t(it,Dt),t(a,Tt),t(a,nt),t(nt,xt),t(xt,Ot),t(nt,Ct),t(nt,w),t(w,H),t(nt,R),t(nt,L),t(L,G),t(G,P),t(L,ot),t(L,$),t($,ue),t(L,de),t(L,zt),t(zt,he),t(l,fe),tt&&tt.m(l,null),kt(J,re,_t),kt(J,X,_t),t(X,gt),t(gt,Mt),t(gt,ge),t(gt,Ht),t(Ht,pe),t(X,me),t(X,pt),t(pt,At),t(pt,be),t(pt,Lt),t(Lt,we),t(X,ve),t(X,mt),t(mt,St),t(mt,_e),t(mt,Pt),t(Pt,ye),t(X,Ee),t(X,bt),t(bt,Nt),t(bt,ke),t(bt,Ut),t(Ut,xe),t(X,Ie),t(X,ct),t(ct,Vt),t(ct,Be),t(ct,Yt),t(Yt,De),Te||(Ge=[C(Oe,"resize",e[15]),C(m,"click",e[16]),C(B,"click",e[17]),C(p,"click",e[6]),C(k,"click",e[7]),C(G,"click",e[18]),C(zt,"click",e[19]),C(nt,"click",e[8]),wt(Wt.call(null,gt,{axis:"both",bounds:"parent"})),C(gt,"dblclick",e[21]),wt($t.call(null,gt,{timeframe:300})),C(gt,"tap",e[22]),wt(Wt.call(null,pt,{axis:"both",bounds:"parent"})),C(pt,"dblclick",e[23]),wt($t.call(null,pt,{timeframe:300})),C(pt,"tap",e[24]),wt(Wt.call(null,mt,{axis:"both",bounds:"parent"})),C(mt,"dblclick",e[25]),wt($t.call(null,mt,{timeframe:300})),C(mt,"tap",e[26]),wt(Wt.call(null,bt,{axis:"both",bounds:"parent"})),C(bt,"dblclick",e[27]),wt($t.call(null,bt,{timeframe:300})),C(bt,"tap",e[28]),wt(Wt.call(null,ct,{axis:"both",bounds:"parent"})),C(ct,"dblclick",e[29]),wt($t.call(null,ct,{timeframe:300})),C(ct,"tap",e[30]),C(ct,"tap",e[31])],Te=!0)},p(J,_t){_t[0]&1&&Jt(E,"invisible",!J[0]),_t[0]&2&&Jt(q,"invisible",!J[1]),_t[0]&4&&Jt(L,"invisible",!J[2]),J[5]>768?tt?tt.p(J,_t):(tt=yr(J),tt.c(),tt.m(l,null)):tt&&(tt.d(1),tt=null)},i:Kt,o:Kt,d(J){J&&n(o),tt&&tt.d(),J&&n(re),J&&n(X),Te=!1,Ue(Ge)}}}function Wr(e,o,l){let i=!1;function f(){i||(l(1,v=!1),l(2,p=!1)),l(0,i=!i)}let v=!1;function a(){v||(l(0,i=!1),l(2,p=!1)),l(1,v=!v)}let p=!1;function b(){p||(l(0,i=!1),l(1,v=!1)),l(2,p=!p)}function g(F,Y){new Mr({target:document.getElementById("content"),props:{url:F,title:Y}}),ee.update(at=>at+1)}function x(F,Y,at){new Nr({target:document.getElementById("content"),props:{content:F,title:Y,image:at}}),ee.update(st=>st+1)}function _(){navigator.clipboard.writeText("I am a software developer from the United States. I am currently a student."),x("Copied to clipboard!","about me")}function d(){navigator.clipboard.writeText("evan#9000"),x("Copied to clipboard!","discord")}function M(){document.querySelectorAll(".userWindow").forEach(Y=>{Y.remove()}),ee.set(0),x("Shutting down...","Shutting down"),l(0,i=!1),l(1,v=!1),l(2,p=!1);const F=document.createElement("div");F.classList.add("absolute","top-0","left-0","w-full","h-full","bg-black","z-50"),setTimeout(()=>{document.body.appendChild(F)},5e3)}function E(){document.body.style.backgroundColor=`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`,document.body.style.color=`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`,new Audio("/beep.mp3").play();let Y=["You are a loser","You have been trolled","We are engaging in a little bit of tomfoolery","Your computer has been hacked","Your computer is now mine","Your computer is now my property","I hope you enjoy this","Everything is going to be okay in the end","Do you like my new background color?"];for(let at=0;at<10;at++){let st=new SpeechSynthesisUtterance;st.text=Y[Math.floor(Math.random()*Y.length)],st.rate=10,st.pitch=2,window.speechSynthesis.speak(st)}g("https://youtube.com/embed/sjC9rxq0LMc?autoplay=1","moistcritical")}let m=new Date().toLocaleString("en-US",{timeZone:"America/Chicago"});m=m.split(",")[1],setInterval(()=>{l(3,m=new Date().toLocaleString("en-US",{timeZone:"America/Chicago"})),l(3,m=m.split(",")[1])},1e3);let N=0,h=0;function B(){l(5,h=Oe.innerWidth),l(4,N=Oe.innerHeight)}return[i,v,p,m,N,h,f,a,b,g,x,_,d,M,E,B,()=>g("about","about me"),()=>_(),()=>g("contact","contact me"),()=>d(),()=>{M()},()=>g("drawing","drawing"),()=>g("drawing","drawing"),()=>g("about","about me"),()=>g("about","about me"),()=>g("contact","contact me"),()=>g("contact","contact me"),()=>g("https://kazwire.com/","kazwire"),()=>g("https://kazwire.com/","kazwire"),()=>x("","trollface","/images/trollface.png"),()=>x("","trollface","/images/trollface.png"),()=>E()]}class Hr extends Ce{constructor(o){super(),He(this,o,Wr,Vr,Le,{},null,[-1,-1])}}export{Hr as default};