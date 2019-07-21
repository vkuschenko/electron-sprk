(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/sidebar.e24bdf00.svg"},25:function(e,t,a){e.exports=a.p+"static/media/toolbar.f5413ef4.svg"},28:function(e,t,a){e.exports=a.p+"static/media/toggle-off.afdf74b5.svg"},29:function(e,t,a){e.exports=a.p+"static/media/toggle-on.172a4aa9.svg"},33:function(e,t,a){e.exports=a(55)},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(10),r=a.n(l),o=a(3),c=a(4),d=a(22),s=a(56),m=a(57),p=a(11),E=a(23);const g={date:new Date,from:"vkuschenko@gmail.com",isRead:!1},u=(e,t)=>[...Array(t)].map((t,a)=>Object(p.a)({},g,{content:Object(E.loremIpsum)({count:5,format:"plain",paragraphLowerBound:3,paragraphUpperBound:7,sentenceLowerBound:5,sentenceUpperBound:15,units:"paragraphs"}),id:a,subject:`${e} email`,folder:e})),b=u("inbox",30),h=u("sent",10),v=u("drafts",3),x=u("pins",5),f=u("archive",100),F=b.concat(h).concat(v).concat(x).concat(f),k=Object(m.a)("SET_EMAILS"),w=Object(m.a)("SET_ACTIVE_EMAIL"),$=Object(m.a)("RESET_ACTIVE_EMAIL"),O=Object(m.a)("DELETE_EMAIL"),C=Object(m.a)("SET_EMAIL_READ");var j=Object(s.a)({[k]:(e,{payload:t})=>t,[O]:(e,{payload:t})=>{const a=e.slice(),n=a.find(({id:e})=>e===t),i=a.indexOf(n);return a.splice(i,1),a},[C]:(e,{payload:t})=>{const a=e.slice();return a.find(({id:e})=>e===t.id).isRead=t.isRead,a}},[]);const y=Object(m.a)("SELECT_SIDEBAR_ELEMENT");var A=Object(s.a)({[y]:(e,{payload:t})=>Object(p.a)({},e,{selectedItem:t})},{selectedItem:"inbox"});var D=Object(s.a)({[w]:(e,{payload:t})=>t,[$]:(e,{payload:t})=>null},null),R=Object(c.c)({emails:j,sidebar:A,activeEmail:D});const I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d;var S=Object(c.e)(R,I(Object(c.a)(d.a)));var _=Object(o.b)(null,e=>({loadData:()=>e(e=>{setTimeout(()=>e(k(F)),1e3)})})),T=a(1);var L=Object(o.b)(({sidebar:e})=>e,e=>({sidebarElementClick:t=>{e(y(t)),e($())}})),z=a(32),M=a(24),B=a.n(M),H=a(25),N=a.n(H);const U=T.a.svg`
  margin: 0.25rem;
  width: ${({size:e})=>e?`${e}px`:"16px"};
  height: ${({size:e})=>e?`${e}px`:"16px"};
`,V=e=>"sidebar"===e?B.a:"toolbar"===e?N.a:"";var X=({category:e,id:t,size:a})=>i.a.createElement(U,{size:a},i.a.createElement("use",{xlinkHref:`${V(e)}#${t}`}));const J=T.a.li`
  display: flex;
  align-items: center;
  height: 2rem;
  padding-left: 1rem;
  font-size: 0.875rem;
  background-color: ${({selected:e})=>e&&"#464D5C"};
  color: ${"#FFFFFF"};
  cursor: default;

  &:hover {
    background-color: ${"#2F3845"};
  }
`;var P=e=>{let t=e.icon,a=e.iconSize,n=e.text,l=Object(z.a)(e,["icon","iconSize","text"]);return i.a.createElement(J,l,t&&i.a.createElement(X,{category:"sidebar",id:t,size:a}),n)};const q=T.a.nav`
  background-color: ${"#1F2633"};
  width: 200px;
`,G=T.a.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,K=T.a.li`
  font-size: 0.75rem;
  margin: 1rem 0 0 1.25rem;
  color: ${"#768091"};
  cursor: default;
`,Q=[{id:"inbox",text:"INBOX"},{id:"calendar",text:"CALENDAR"}],W=[{id:"sent",text:"Sent"},{id:"drafts",text:"Drafts"},{id:"pins",text:"Pins"},{id:"archive",text:"Archive"}];var Y=L(({selectedItem:e="inbox",sidebarElementClick:t})=>i.a.createElement(q,null,i.a.createElement(G,null,Q.map(({id:a,text:n})=>i.a.createElement(P,{key:a,icon:a,iconSize:20,text:n,onClick:()=>t&&t(a),selected:a===e})),i.a.createElement(K,null,"Folders"),W.map(({id:a,text:n})=>i.a.createElement(P,{key:a,icon:a,text:n,onClick:()=>t&&t(a),selected:a===e})))));var Z=Object(o.b)(({emails:e,sidebar:t,activeEmail:a})=>({emails:e.filter(({folder:e})=>e===t.selectedItem),activeEmail:a}),e=>({setActiveEmail:t=>e(w(t))}));const ee='"Roboto", sans-serif',te=T.a.div`
  display: flex;
  align-items: stretch;
  padding: 0.5rem 0;
  width: 100%;
  border-top: 1px solid ${({selected:e})=>e?"#8ECAFA":"#FFFFFF"};
  border-bottom: 1px solid
    ${({selected:e})=>e?"#8ECAFA":"#E3E3E3"};
  background-color: ${({selected:e})=>e?"#E8F2FA":"#FFFFFF"};
  color: ${"#252526"};
  cursor: default;

  &:hover {
    background-color: ${"#E8F2FA"};
  }
`,ae=T.a.div`
  display: flex;
  justify-content: center;
  min-width: 2rem;
`,ne=T.a.div`
  min-width: 0;
  margin-right: 1rem;
`,ie=T.a.div`
  display: flex;
  align-items: center;
  font: 700 1rem ${ee};
  margin-bottom: 0.5rem;
`,le=T.a.div`
  width: 100%;
`,re=T.a.div`
  font: 400 0.5rem ${ee};
  color: ${"#797A7D"};
`,oe=T.a.div`
  font: 700 0.75rem ${ee};
  margin-bottom: 0.5rem;
`,ce=T.a.div`
  font: 400 0.75rem ${ee};
  width: 100%;
  color: ${"#797A7D"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,de=T.a.div`
  margin-top: 5.5px;
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${"#4384D9"};
  border-radius: 50%;
`;var se=({date:e,from:t,subject:a,content:n,isRead:l,selected:r,onClick:o})=>i.a.createElement(te,{selected:r,onClick:o},i.a.createElement(ae,null,!l&&i.a.createElement(de,null)),i.a.createElement(ne,null,i.a.createElement(ie,null,i.a.createElement(le,null,t),i.a.createElement(re,null,e.toLocaleDateString())),i.a.createElement(oe,null,a),i.a.createElement(ce,null,n)));const me=T.a.div`
  width: 300px;
  height: 100vh;
  border-right: 1px solid ${"#252526"};
  overflow-y: auto;
`;var pe=Z(({emails:e=[],activeEmail:t,setActiveEmail:a})=>i.a.createElement(me,null,e.map(e=>i.a.createElement(se,Object.assign({key:e.id,selected:e.id===t,onClick:()=>a&&a(e.id)},e)))));var Ee=Object(o.b)(({emails:e,activeEmail:t})=>({email:e.find(({id:e})=>e===t)}),e=>({deleteEmail:t=>{e(O(t)),e($())},toggleEmailRead:(t,a)=>e(C({id:t,isRead:a}))}));const ge=T.a.button`
  width: 30px;
  height: 30px;
  margin: 0.5rem;
  padding: 0;
  background-color: ${"#FFFFFF"};
  border: 0;
  border-radius: 50%;
`;var ue=({icon:e,onClick:t})=>i.a.createElement(ge,{onClick:t},i.a.createElement(X,{category:"toolbar",id:e,size:20}));const be=T.a.div`
  display: flex;
  align-items: center;
  margin: 0.5rem;
`,he=T.a.div`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  background-color: ${"#F5F5F5"};
`,ve=T.a.img`
  width: 30px;
  height: 30px;
`;var xe=a(28),fe=a.n(xe),Fe=a(29),ke=a.n(Fe);var we=class extends n.Component{constructor(e){super(e),this.state={toggled:e.toggled||!1},this.onClickHandler=this.onClickHandler.bind(this)}componentDidUpdate(e){this.props.id!==e.id&&this.setState(()=>({toggled:this.props.toggled}))}onClickHandler(){const e=this.props,t=e.id,a=e.onClick,n=this.state.toggled;this.setState(()=>({toggled:!n})),a&&a(t,!n)}render(){const e=this.state.toggled;return i.a.createElement(be,null,i.a.createElement("span",null,"Is read:"),i.a.createElement(he,{onClick:this.onClickHandler},i.a.createElement(ve,{src:e?ke.a:fe.a})))}};const $e=T.a.div`
  display: flex;
`;var Oe=({id:e,isRead:t,onDelete:a,onToggleRead:n})=>i.a.createElement($e,null,i.a.createElement(ue,{icon:"delete",onClick:a}),i.a.createElement(we,{id:e,toggled:t,onClick:n}));const Ce=T.a.div`
  border-radius: 4px;
  box-shadow: 0px 0px 12px -3px ${"#252526"};
  margin: 0.5rem;
  padding: 0.5rem;
`;var je=({children:e})=>i.a.createElement(Ce,null,e);const ye=T.a.div`
  flex-grow: 1;
  flex-shrink: 9999;
  padding: 0.5rem;
  background-color: ${"#F5F5F5"};
`,Ae=T.a.h1`
  font: 700 1rem ${ee};
  margin: 1rem 0.5rem;
`;var De=Ee(({email:e=null,deleteEmail:t,toggleEmailRead:a})=>e&&i.a.createElement(ye,null,i.a.createElement(Oe,{id:e.id,isRead:e.isRead,onDelete:()=>t&&t(e.id),onToggleRead:a}),i.a.createElement(Ae,null,e.subject),i.a.createElement(je,null,e.content)));const Re=T.a.div`
  min-height: 100vh;
  display: flex;
  align-items: stretch;
`;var Ie=_(class extends n.Component{componentDidMount(){this.props.loadData()}render(){return i.a.createElement(Re,null,i.a.createElement(Y,null),i.a.createElement(pe,null),i.a.createElement(De,null))}});a(53),a(54);r.a.render(i.a.createElement(o.a,{store:S},i.a.createElement(Ie,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.000f00c0.chunk.js.map