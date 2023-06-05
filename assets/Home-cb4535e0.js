import{u as F,x as W,d as U,C as V,w as z,r as m,z as $,E as L,F as ne,P as oe,y as R,n as D,j as e,a as J,i as X,I as E,G as Y,H as Z,J as le,K as ce,Q as ie,R as ue,S as de,V as q,W as me,X as he,Y as fe,Z as _,h as ge,b as xe,M as pe}from"./index-a482abc7.js";import{u as G,S as O,M as ye}from"./MemoEditorDialog-4bf485a9.js";import{c as je,f as B,r as ve,g as Se,M as we}from"./MemoFilter-a8fb2dce.js";import{M as Ne}from"./Memo-e1782e54.js";const be=()=>{const{t:n}=F(),a=W(),t=U(),r=V(),h=z().state,{memos:c,isFetching:g}=a.state,[p,l]=m.useState(!1),i=t.getCurrentUserId(),{tag:N,duration:j,type:v,text:w,shortcutId:x,visibility:y}=h,k=x?r.getShortcutById(x):null,o=(!!(N||j&&j.from<j.to||v||w||k||y)||k?c.filter(s=>{let S=!0;if(k){const C=JSON.parse(k.payload);Array.isArray(C)&&(S=je(s,C))}if(N){const C=new Set;for(const se of Array.from(s.content.match(new RegExp($,"g"))??[])){const ae=se.replace($,"$1").trim().split("/");let H="";for(const re of ae)H+=re,C.add(H),H+="/"}C.has(N)||(S=!1)}return j&&j.from<j.to&&(L(s.displayTs)<j.from||L(s.displayTs)>j.to)&&(S=!1),v&&(v==="NOT_TAGGED"&&s.content.match($)!==null||v==="LINKED"&&(s.content.match(ne)===null||s.content.match(oe)===null))&&(S=!1),w&&!s.content.toLowerCase().includes(w.toLowerCase())&&(S=!1),y&&(S=s.visibility===y),S}):c).filter(s=>s.creatorId===i),M=o.filter(s=>s.pinned),u=o.filter(s=>!s.pinned),T=(s,S)=>S.displayTs-s.displayTs;M.sort(T),u.sort(T);const A=M.concat(u).filter(s=>s.rowStatus==="NORMAL"),d=m.useRef(null);m.useEffect(()=>{a.fetchMemos().then(s=>{s.length<R?l(!0):l(!1)}).catch(s=>{console.error(s),D.error(s.response.data.message)})},[i]),m.useEffect(()=>{const s=document.body.querySelector(".page-wrapper");s&&s.scrollTo(0,0)},[h]),m.useEffect(()=>{if(g||p)return;if(A.length<R){b();return}const s=new IntersectionObserver(([S])=>{S.isIntersecting&&(b(),s.unobserve(S.target))});return d!=null&&d.current&&s.observe(d.current),()=>{d!=null&&d.current&&s.unobserve(d.current)}},[g,p,h,A.length,d]);const b=async()=>{try{(await a.fetchMemos(R,c.length)).length<R?l(!0):l(!1)}catch(s){console.error(s),D.error(s.response.data.message)}};return e.jsxs("div",{className:"memo-list-container",children:[A.map(s=>e.jsx(Ne,{memo:s},`${s.id}-${s.displayTs}`)),g?e.jsx("div",{className:"status-text-container fetching-tip",children:e.jsx("p",{className:"status-text",children:n("memo.fetching-data")})}):e.jsx("div",{ref:d,className:"status-text-container",children:e.jsx("p",{className:"status-text",children:p?A.length===0?n("message.no-memos"):n("message.memos-ready"):e.jsx(e.Fragment,{children:e.jsx("span",{className:"cursor-pointer hover:text-green-600",onClick:b,children:n("memo.fetch-more")})})})})]})};const Te=n=>{const{destroy:a,shortcutId:t}=n,r=V(),[f,h]=m.useState(""),[c,g]=m.useState([]),p=X(!1),{t:l}=F();m.useEffect(()=>{if(t){const x=r.getShortcutById(t);if(x){h(x.title);const y=JSON.parse(x.payload);Array.isArray(y)&&g(y)}}},[t]);const i=x=>{const y=x.target.value;h(y)},N=async()=>{if(!f){D.error(l("shortcut-list.title-required"));return}for(const x of c)if(!x.value.value){D.error(l("shortcut-list.value-required"));return}try{t?await r.patchShortcut({id:t,title:f,payload:JSON.stringify(c)}):await r.createShortcut({title:f,payload:JSON.stringify(c)})}catch(x){console.error(x),D.error(x.response.data.message)}a()},j=()=>{if(c.length>0&&c[c.length-1].value.value===""){D(l("shortcut-list.fill-previous"));return}g([...c,Se()])},v=m.useCallback((x,y)=>{g(k=>{const I=[...k];return I[x]=y,I})},[]),w=m.useCallback(x=>{g(y=>y.filter((I,o)=>o!==x))},[]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"dialog-header-container",children:[e.jsx("p",{className:"title-text",children:l(t?"shortcut-list.edit-shortcut":"shortcut-list.create-shortcut")}),e.jsx("button",{className:"btn close-btn",onClick:a,children:e.jsx(E.X,{})})]}),e.jsxs("div",{className:"dialog-content-container",children:[e.jsxs("div",{className:"form-item-container input-form-container",children:[e.jsx("span",{className:"normal-text",children:l("common.title")}),e.jsx("input",{className:"title-input",type:"text",placeholder:l("shortcut-list.shortcut-title"),value:f,onChange:i})]}),e.jsxs("div",{className:"form-item-container filter-form-container",children:[e.jsx("span",{className:"normal-text",children:l("common.filter")}),e.jsxs("div",{className:"filters-wrapper",children:[c.map((x,y)=>e.jsx(ke,{index:y,filter:x,handleFilterChange:v,handleFilterRemove:w},y)),e.jsx("div",{className:"create-filter-btn",onClick:j,children:l("filter.new-filter")})]})]})]}),e.jsxs("div",{className:"dialog-footer-container",children:[e.jsx("div",{}),e.jsx("div",{className:"btns-container",children:e.jsx("button",{className:`btn-primary ${p.isLoading?"requesting":""}`,onClick:N,children:l("common.save")})})]})]})},ke=n=>{const{index:a,filter:t,handleFilterChange:r,handleFilterRemove:f}=n,{t:h}=F(),c=G(),[g,p]=m.useState(t.value.value),l=Array.from(c.getState().tags),{type:i}=t,N=Object.values(B).map(({text:u,value:T})=>({text:h(u),value:T})),j=Object.values(B[i].operators).map(({text:u,value:T})=>({text:h(u),value:T})),v=Object.values(ve).map(({text:u,value:T})=>({text:h(u),value:T})),w=i==="TYPE"?B.TYPE.values.map(({text:u,value:T})=>({text:h(u),value:T})):i==="VISIBILITY"?B.VISIBILITY.values.map(({text:u,value:T})=>({text:h(u),value:T})):l.sort().map(u=>({text:u,value:u})),x=Y("9999-12-31T23:59");m.useEffect(()=>{if(i==="DISPLAY_TIME"){const u=Y();o(u)}else p(t.value.value)},[i]);const y=u=>{["AND","OR"].includes(u)&&r(a,{...t,relation:u})},k=u=>{if(t.type!==u){const T=Object.values(B[u].operators);r(a,{...t,type:u,value:{operator:T[0].value,value:""}})}},I=u=>{r(a,{...t,value:{...t.value,operator:u}})},o=u=>{p(u),r(a,{...t,value:{...t.value,value:u}})},M=()=>{f(a)};return e.jsxs("div",{className:"memo-filter-input-wrapper",children:[a>0?e.jsx(O,{className:"relation-selector",dataSource:v,value:t.relation,handleValueChanged:y}):null,e.jsx(O,{className:"type-selector",dataSource:N,value:t.type,handleValueChanged:k}),e.jsx(O,{className:"operator-selector",dataSource:j,value:t.value.operator,handleValueChanged:I}),i==="TEXT"?e.jsx("input",{type:"text",className:"value-inputer",value:g,onChange:u=>{o(u.target.value)},placeholder:h("filter.text-placeholder")}):i==="DISPLAY_TIME"?e.jsx("input",{className:"datetime-selector",type:"datetime-local",value:g,max:x,onChange:u=>{o(u.target.value)}}):e.jsx(O,{className:"value-selector",dataSource:w,value:g,handleValueChanged:o}),e.jsx(E.X,{className:"remove-btn",onClick:M})]})};function ee(n){J({className:"create-shortcut-dialog",dialogName:"create-shortcut-dialog"},Te,{shortcutId:n})}const Ce=()=>{const{t:n}=F(),a=z(),t=V(),r=a.state,f=t.state.shortcuts,h=X(),c=f.filter(l=>l.rowStatus==="ARCHIVED").sort((l,i)=>L(i.createdTs)-L(l.createdTs)),g=f.filter(l=>l.rowStatus==="NORMAL").sort((l,i)=>L(i.createdTs)-L(l.createdTs)),p=c.concat(g);return m.useEffect(()=>{t.getMyAllShortcuts().catch(()=>{}).finally(()=>{h.setFinish()})},[]),e.jsxs("div",{className:"flex flex-col justify-start items-start w-full mt-2 h-auto shrink-0 flex-nowrap hide-scrollbar",children:[e.jsxs("div",{className:"flex flex-row justify-start items-center w-full px-4",children:[e.jsx("span",{className:"text-sm leading-6 font-mono text-gray-400",children:n("common.shortcuts")}),e.jsx("button",{className:"flex flex-col justify-center items-center w-5 h-5 bg-gray-200 dark:bg-zinc-700 rounded ml-2 hover:shadow",onClick:()=>ee(),children:e.jsx(E.Plus,{className:"w-4 h-4 text-gray-400"})})]}),e.jsx("div",{className:"flex flex-col justify-start items-start relative w-full h-auto flex-nowrap mb-2",children:p.map(l=>e.jsx(Ie,{shortcut:l,isActive:l.id===Number(r==null?void 0:r.shortcutId)},l.id))})]})},Ie=n=>{const{shortcut:a,isActive:t}=n,{t:r}=F(),f=z(),h=V(),[c,g]=Z(!1),p=()=>{t?f.setMemoShortcut(void 0):f.setMemoShortcut(a.id)},l=async v=>{if(v.stopPropagation(),c)try{await h.deleteShortcutById(a.id),f.getState().shortcutId===a.id&&f.setMemoShortcut(void 0)}catch(w){console.error(w),D.error(w.response.data.message)}else g()},i=v=>{v.stopPropagation(),ee(a.id)},N=async v=>{v.stopPropagation();try{const w={id:a.id,rowStatus:a.rowStatus==="ARCHIVED"?"NORMAL":"ARCHIVED"};await h.patchShortcut(w)}catch{}},j=()=>{g(!1)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative group flex flex-row justify-between items-center w-full h-10 py-0 px-4 mt-px first:mt-2 rounded-lg text-base cursor-pointer select-none shrink-0 hover:bg-white dark:hover:bg-zinc-700",onClick:p,children:[e.jsx("div",{className:`flex flex-row justify-start items-center truncate shrink leading-5 mr-1 text-black dark:text-gray-200 ${t&&"text-green-600"}`,children:e.jsx("span",{className:"truncate",children:a.title})}),e.jsxs("div",{className:"flex-row justify-end items-center hidden group/btns group-hover:flex shrink-0",children:[e.jsx("span",{className:"flex flex-row justify-center items-center toggle-btn",children:e.jsx(E.MoreHorizontal,{className:"w-4 h-auto"})}),e.jsx("div",{className:"absolute top-4 right-0 flex-col justify-start items-start w-auto h-auto px-4 pt-3 hidden group-hover/btns:flex z-1",children:e.jsxs("div",{className:"flex flex-col justify-start items-start w-24 h-auto p-1 whitespace-nowrap rounded-md bg-white dark:bg-zinc-700 shadow",children:[e.jsx("span",{className:"w-full text-sm leading-6 py-1 px-3 rounded text-left dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800",onClick:N,children:a.rowStatus==="ARCHIVED"?r("common.unpin"):r("common.pin")}),e.jsx("span",{className:"w-full text-sm leading-6 py-1 px-3 rounded text-left dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800",onClick:i,children:r("common.edit")}),e.jsxs("span",{className:`w-full text-sm leading-6 py-1 px-3 rounded text-left dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 text-orange-600 ${c&&"font-black"}`,onClick:l,onMouseLeave:j,children:[r("common.delete"),c?"!":""]})]})})]})]})})},P=n=>{const a=ie(`#${n}`,ue.regexp);return!(!a||a[1]!==n)},Me=n=>{const{destroy:a}=n,t=G(),{t:r}=F(),[f,h]=m.useState(""),[c,g]=m.useState([]),[p,l]=m.useState(!1),i=t.state.tags,N=c.filter(o=>!i.includes(o));m.useEffect(()=>{le().then(({data:o})=>{g(o.data.filter(M=>P(M)))})},[i]);const j=o=>{o.key==="Enter"&&y()},v=o=>{const M=o.target.value;h(M.trim())},w=async o=>{await t.upsertTag(o)},x=()=>{l(o=>!o)},y=async()=>{if(!P(f)){D.error("Invalid tag name");return}try{await t.upsertTag(f),h("")}catch(o){console.error(o),D.error(o.response.data.message)}},k=async o=>{await t.deleteTag(o)},I=async()=>{for(const o of c)P(o)&&await t.upsertTag(o)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"dialog-header-container",children:[e.jsx("p",{className:"title-text",children:r("tag-list.create-tag")}),e.jsx("button",{className:"btn close-btn",onClick:()=>a(),children:e.jsx(E.X,{})})]}),e.jsxs("div",{className:"dialog-content-container !w-80",children:[e.jsx(ce,{className:"mb-2",size:"md",placeholder:r("tag-list.tag-name"),value:f,onChange:v,onKeyDown:j,fullWidth:!0,startDecorator:e.jsx(E.Hash,{className:"w-4 h-auto"}),endDecorator:e.jsx(E.Check,{onClick:y,className:"w-4 h-auto cursor-pointer hover:opacity-80"})}),i.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"w-full mt-2 mb-1 text-sm text-gray-400",children:r("tag-list.all-tags")}),e.jsx("div",{className:"w-full flex flex-row justify-start items-start flex-wrap",children:Array.from(i).sort().map(o=>e.jsxs("span",{className:"max-w-[120px] text-sm mr-2 mt-1 font-mono cursor-pointer truncate dark:text-gray-300 hover:opacity-60 hover:line-through",onClick:()=>k(o),children:["#",o]},o))})]}),N.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4 mb-1 text-sm w-full flex flex-row justify-start items-center",children:[e.jsx("span",{className:"text-gray-400",children:"Tag suggestions"}),e.jsx("button",{className:"btn-normal ml-2 px-2 py-0 leading-6 font-mono",onClick:x,children:p?"hide":"show"})]}),p&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full flex flex-row justify-start items-start flex-wrap",children:N.map(o=>e.jsxs("span",{className:"max-w-[120px] text-sm mr-2 mt-1 font-mono cursor-pointer truncate dark:text-gray-300 hover:opacity-60",onClick:()=>w(o),children:["#",o]},o))}),e.jsx("button",{className:"btn-normal mt-2 px-2 py-0 leading-6 font-mono",onClick:I,children:"Save all"})]})]})]})]})};function De(){J({className:"create-tag-dialog",dialogName:"create-tag-dialog"},Me)}const Ee=()=>{const{t:n}=F(),a=z(),t=G(),r=t.state.tags,f=a.state,[h,c]=m.useState([]);return m.useEffect(()=>{t.fetchTags()},[]),m.useEffect(()=>{const g=Array.from(r).sort(),p={subTags:[]};for(const l of g){const i=l.split("/");let N=p,j="";for(let v=0;v<i.length;v++){const w=i[v];v===0?j+=w:j+="/"+w;let x=null;for(const y of N.subTags)if(y.text===j){x=y;break}x||(x={key:w,text:j,subTags:[]},N.subTags.push(x)),N=x}}c(p.subTags)},[r]),e.jsxs("div",{className:"flex flex-col justify-start items-start w-full mt-2 h-auto shrink-0 flex-nowrap hide-scrollbar",children:[e.jsxs("div",{className:"flex flex-row justify-start items-center w-full px-4",children:[e.jsx("span",{className:"text-sm leading-6 font-mono text-gray-400",children:n("common.tags")}),e.jsx("button",{onClick:()=>De(),className:"flex flex-col justify-center items-center w-5 h-5 bg-gray-200 dark:bg-zinc-700 rounded ml-2 hover:shadow",children:e.jsx(E.Plus,{className:"w-4 h-4 text-gray-400"})})]}),e.jsx("div",{className:"flex flex-col justify-start items-start relative w-full h-auto flex-nowrap mt-2 mb-2",children:h.map((g,p)=>e.jsx(te,{tag:g,tagQuery:f.tag},g.text+"-"+p))})]})},te=n=>{const a=z(),{tag:t,tagQuery:r}=n,f=r===t.text,h=t.subTags.length>0,[c,g]=Z(!1),p=()=>{f?a.setTagFilter(void 0):a.setTagFilter(t.text)},l=i=>{i.stopPropagation(),g()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"relative group flex flex-row justify-between items-center w-full h-10 py-0 px-4 mt-px first:mt-1 rounded-lg text-base cursor-pointer select-none shrink-0 hover:opacity-60",onClick:p,children:[e.jsxs("div",{className:`flex flex-row justify-start items-center truncate shrink leading-5 mr-1 text-black dark:text-gray-200 ${f&&"text-green-600"}`,children:[e.jsx("span",{className:"block w-4 shrink-0",children:"#"}),e.jsx("span",{className:"truncate",children:t.key})]}),e.jsx("div",{className:"flex flex-row justify-end items-center",children:h?e.jsx("span",{className:`flex flex-row justify-center items-center w-6 h-6 shrink-0 transition-all rotate-0 ${c&&"rotate-90"}`,onClick:l,children:e.jsx(E.ChevronRight,{className:"w-5 h-5 opacity-80 dark:text-gray-400"})}):null})]}),h?e.jsx("div",{className:`w-full flex flex-col justify-start items-start h-auto ml-5 pl-1 border-l-2 border-l-gray-200 dark:border-l-gray-400 ${!c&&"!hidden"}`,children:t.subTags.map((i,N)=>e.jsx(te,{tag:i,tagQuery:r},i.text+"-"+N))}):null]})},Fe=()=>{const{t:n}=F(),a=z(),[t,r]=m.useState(""),f=m.useRef(null);m.useEffect(()=>{const c=a.getState().text;r(c===void 0?"":c)},[a.state.text]),de(()=>{a.setTextFilter(t.length===0?void 0:t)},200,[t]);const h=c=>{const g=c.currentTarget.value;r(g)};return e.jsxs("div",{className:"w-full h-9 flex flex-row justify-start items-center py-2 px-3 rounded-md bg-gray-200 dark:bg-zinc-700",children:[e.jsx(E.Search,{className:"w-4 h-auto opacity-30 dark:text-gray-200"}),e.jsx("input",{className:"flex ml-2 w-24 grow text-sm outline-none bg-transparent dark:text-gray-200",type:"text",placeholder:n("memo.search-placeholder"),ref:f,value:t,onChange:h})]})};const Q={width:10,height:7},K=(n,a)=>{const t=[];for(let r=1;r<=n;r++)t.push({timestamp:a+_*r,count:0});return t},Ae=()=>{const{t:n}=F(),a=z(),t=U(),r=W(),f=q(Date.now()),h=new Date(f).getDay()+1,c=new Array(7-h).fill(0),g=(Q.width-1)*Q.height+h,p=f-g*_,l=r.state.memos,[i,N]=m.useState(0),[j,v]=m.useState(0),[w,x]=m.useState(K(g,p)),[y,k]=m.useState(null),I=m.useRef(null),o=t.getCurrentUserId();m.useEffect(()=>{t.getUserById(o).then(d=>{d&&v(Math.ceil((Date.now()-L(d.createdTs))/1e3/3600/24))})},[o]),m.useEffect(()=>{me(o).then(({data:{data:d}})=>{N(d.length);const b=K(g,p);for(const s of d){const S=(q(s*1e3)-p)/864e5-1;if(S>=0){const C=+S.toFixed(0);b[C].count+=1}}x([...b])}).catch(d=>{console.error(d)})},[l.length,o]);const M=m.useCallback((d,b)=>{const s=document.createElement("div");s.className="usage-detail-container pop-up";const S=he(d.target);s.style.left=S.left+"px",s.style.top=S.top-2+"px";const C={amount:b.count,date:fe(b.timestamp)};s.innerHTML=b.count===1?n("heatmap.memo-on",C):n("heatmap.memos-on",C),document.body.appendChild(s),s.offsetLeft-s.clientWidth/2<0&&(s.style.left=S.left+s.clientWidth*.4+"px",s.className+=" offset-left")},[]),u=m.useCallback(()=>{document.body.querySelectorAll("div.usage-detail-container.pop-up").forEach(d=>d.remove())},[]),T=m.useCallback(d=>{var b;((b=a.getState().duration)==null?void 0:b.from)===d.timestamp?(a.setFromAndToFilter(),k(null)):d.count>0&&(a.setFromAndToFilter(d.timestamp,d.timestamp+_),k(d))},[]),A={amount:i,period:"",date:""};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"usage-heat-map-wrapper",ref:I,children:[e.jsxs("div",{className:"usage-heat-map",children:[w.map((d,b)=>{const s=d.count,S=s<=0?"":s<=1?"stat-day-l1-bg":s<=2?"stat-day-l2-bg":s<=4?"stat-day-l3-bg":"stat-day-l4-bg";return e.jsx("div",{className:"stat-wrapper",onMouseEnter:C=>M(C,d),onMouseLeave:u,onClick:()=>T(d),children:e.jsx("span",{className:`stat-container ${S} ${y===d?"current":""} ${f===d.timestamp?"today":""}`})},b)}),c.map((d,b)=>e.jsx("div",{className:"stat-wrapper",children:e.jsx("span",{className:"stat-container null"})},b))]}),e.jsxs("div",{className:"day-tip-text-container",children:[e.jsx("span",{className:"tip-text",children:n("days.sun")}),e.jsx("span",{className:"tip-text"}),e.jsx("span",{className:"tip-text",children:n("days.tue")}),e.jsx("span",{className:"tip-text"}),e.jsx("span",{className:"tip-text",children:n("days.thu")}),e.jsx("span",{className:"tip-text"}),e.jsx("span",{className:"tip-text",children:n("days.sat")})]})]}),e.jsxs("p",{className:"w-full pl-4 text-xs -mt-2 mb-3 text-gray-400 dark:text-zinc-400",children:[e.jsxs("span",{className:"font-medium text-gray-500 dark:text-zinc-300 number",children:[i," "]}),n(i===1?"heatmap.memo-in":"heatmap.memos-in",A)," ",e.jsxs("span",{className:"font-medium text-gray-500 dark:text-zinc-300",children:[j," "]}),n(j===1?"heatmap.day":"heatmap.days",A)]})]})},Le=()=>{const n=ge(),a=U(),t=n.state.showHomeSidebar;return e.jsxs("div",{className:`fixed md:sticky top-0 left-0 w-full md:w-56 h-full shrink-0 pointer-events-none md:pointer-events-auto z-10 ${t&&"pointer-events-auto"}`,children:[e.jsx("div",{className:`fixed top-0 left-0 w-full h-full bg-black opacity-0 pointer-events-none transition-opacity duration-300 md:!hidden ${t&&"opacity-60 pointer-events-auto"}`,onClick:()=>n.setHomeSidebarStatus(!1)}),e.jsxs("aside",{className:`absolute md:relative top-0 right-0 w-56 pr-2 md:w-full h-full max-h-screen overflow-auto hide-scrollbar flex flex-col justify-start items-start py-4 z-30 bg-zinc-100 dark:bg-zinc-800 md:bg-transparent md:shadow-none transition-all duration-300 translate-x-full md:translate-x-0 ${t&&"!translate-x-0 shadow-2xl"}`,children:[e.jsx("div",{className:"px-4 pr-8 mb-4 w-full",children:e.jsx(Fe,{})}),e.jsx(Ae,{}),!a.isVisitorMode()&&e.jsxs(e.Fragment,{children:[e.jsx(Ce,{}),e.jsx(Ee,{})]})]})]})};function Ve(){const{t:n}=F(),a=xe(),t=U(),r=t.state.user;return m.useEffect(()=>{const f=t.getCurrentUserId();t.getUserById(f).then(h=>{if(!h){D.error(n("message.user-not-found"));return}})},[t.getCurrentUserId()]),m.useEffect(()=>{r!=null&&r.setting.locale&&a.setLocale(r.setting.locale)},[r==null?void 0:r.setting.locale]),e.jsxs("div",{className:"w-full flex flex-row justify-start items-start",children:[e.jsxs("div",{className:"flex-grow shrink w-auto px-4 sm:px-2 sm:pt-4",children:[e.jsx(pe,{}),e.jsxs("div",{className:"w-full h-auto flex flex-col justify-start items-start bg-zinc-100 dark:bg-zinc-800 rounded-lg",children:[!t.isVisitorMode()&&e.jsx(ye,{}),e.jsx(we,{})]}),e.jsx(be,{})]}),e.jsx(Le,{})]})}export{Ve as default};
