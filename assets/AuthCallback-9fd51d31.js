import{u as f,q as g,d as h,r as l,p as m,t as p,v as x,n as S,j as t,I as w}from"./index-87e76123.js";const j=()=>{const{t:c}=f(),[e]=g(),d=h(),[r,s]=l.useState({loading:!0,errorMessage:""});return l.useEffect(()=>{const o=e.get("code"),n=e.get("state");if(o&&n){const u=m("/auth/callback"),i=Number(p(n.split("-")));i&&x(i,o,u).then(async()=>{s({loading:!1,errorMessage:""}),await d.doSignIn()?window.location.href="/":S.error(c("message.login-failed"))}).catch(a=>{console.error(a),s({loading:!1,errorMessage:JSON.stringify(a.response.data,null,2)})})}else s({loading:!1,errorMessage:"Failed to authorize. Invalid state passed to the auth callback."})},[e]),t.jsx("div",{className:"p-4 w-full h-full flex justify-center items-center",children:r.loading?t.jsx(w.Loader,{className:"animate-spin dark:text-gray-200"}):t.jsx("div",{className:"max-w-lg font-mono whitespace-pre-wrap opacity-80",children:r.errorMessage})})};export{j as default};