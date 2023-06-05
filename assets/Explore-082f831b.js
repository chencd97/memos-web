import{u as A,f as L,w as N,x as T,r as n,i as b,y as o,z as x,j as t,M as C,n as R}from"./index-a482abc7.js";import{M as k}from"./MemoFilter-a8fb2dce.js";import{M as z}from"./Memo-e1782e54.js";import"./MemoEditorDialog-4bf485a9.js";const B=()=>{const{t:c}=A(),p=L(),g=N(),m=T(),d=g.state,[s,i]=n.useState({memos:[]}),[M,r]=n.useState(!1),f=b();n.useEffect(()=>{m.fetchAllMemos(o,0).then(e=>{e.length<o&&r(!0),i({memos:e}),f.setFinish()})},[p]);const{tag:a,text:w}=d,S=(!!(a||w)?s.memos.filter(e=>{let u=!0;if(a){const h=new Set;for(const j of Array.from(e.content.match(new RegExp(x,"g"))??[])){const E=j.replace(x,"$1").trim().split("/");let l="";for(const F of E)l+=F,h.add(l),l+="/"}h.has(a)||(u=!1)}return u}):s.memos).filter(e=>e.rowStatus==="NORMAL"),y=async()=>{try{const e=await m.fetchAllMemos(o,s.memos.length);e.length<o?r(!0):r(!1),i({memos:s.memos.concat(e)})}catch(e){console.error(e),R.error(e.response.data.message)}};return t.jsxs("section",{className:"w-full max-w-3xl min-h-full flex flex-col justify-start items-center px-4 sm:px-2 sm:pt-4 pb-8 bg-zinc-100 dark:bg-zinc-800",children:[t.jsx(C,{showSearch:!1}),!f.isLoading&&t.jsxs("main",{className:"relative w-full h-auto flex flex-col justify-start items-start -mt-2",children:[t.jsx(k,{}),S.map(e=>t.jsx(z,{memo:e,readonly:!0},`${e.id}-${e.displayTs}`)),M?s.memos.length===0?t.jsx("p",{className:"w-full text-center mt-12 text-gray-600",children:c("message.no-memos")}):null:t.jsx("p",{className:"m-auto text-center mt-4 italic cursor-pointer text-gray-500 hover:text-green-600",onClick:y,children:c("memo.fetch-more")})]})]})};export{B as default};
