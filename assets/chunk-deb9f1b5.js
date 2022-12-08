function F(e,t){let n;{var r=Error.stackTraceLimit;Error.stackTraceLimit=1/0,n=new Error(e),Error.stackTraceLimit=r}return n.stack=re(n.stack,t),n}function re(e,t){if(!e)return e;const n=oe(e);let r=0;return n.filter(o=>o.includes(" (internal/")||o.includes(" (node:internal")?!1:r<t&&ie(o)?(r++,!1):!0).join(`
`)}function ie(e){return e.startsWith("    at ")}function oe(e){return e.split(/\r?\n/)}function T(e,t){const n=globalThis.__vite_plugin_ssr=globalThis.__vite_plugin_ssr||{};return n[e]=n[e]||t}function U(e){return Array.from(new Set(e))}const R=T("assertPackageInstances.ts",{instances:[]});function ae(){const e=U(R.instances);if(e.length>1)throw new Error(`Multiple versions \`vite-plugin-ssr@${e[0]}\` and \`vite-plugin-ssr@${e[1]}\` loaded. Make sure only one version is loaded.`)}function G(){if(!!R.checkBundle&&!(R.instances.length<=1))throw new Error("vite-plugin-ssr is included twice in your bundle. Make sure it's inlcuded only once. (To reduce bundle size.)")}function rt(){R.checkBundle=!0,G()}function le(e){R.instances.push(e),ae(),G()}const ce="0.4.54",v={projectName:"vite-plugin-ssr",projectVersion:ce,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr",discordInviteToolChannel:"https://discord.com/invite/qTq92FQzKb"};le(v.projectVersion);const $=`[${v.npmPackageName}@${v.projectVersion}]`,ue=`${$}[Bug]`,fe=`${$}[Wrong Usage]`,de=`${$}[Warning]`,ge=`${$}[Info]`,W=2;function i(e,t){if(e)return;const n=(()=>{if(!t)return"";const s=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${v.projectName} maintainers; you can ignore this): ${s}`})();throw F([`${ue} You stumbled upon a bug in ${v.projectName}'s source code.`,`Reach out at ${v.githubRepository}/issues/new or ${v.discordInviteToolChannel} and include this error stack (the error stack is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Don't hesitate to reach out as it makes ${v.projectName} more robust.`,n].join(" "),W)}function E(e,t){if(e)return;const n=t.startsWith("[")?"":" ",r=`${fe}${n}${t}`;throw F(r,W)}function it(e){const t=e.startsWith("[")?"":" ";return F(`${$}${t}${e}`,W)}const M=T("assert.ts",{alreadyLogged:new Set});function he(e,t,{onlyOnce:n,showStackTrace:r}){if(e)return;const s=`${de} ${t}`;if(n){const{alreadyLogged:o}=M,a=n===!0?s:n;if(o.has(a))return;o.add(a)}console.warn(r?new Error(s):s)}function ot(e,t,{onlyOnce:n}){if(e)return;const r=`${ge} ${t}`;if(n){const{alreadyLogged:s}=M,o=r;if(s.has(o))return;s.add(o)}console.log(r)}const pe=["js","ts","cjs","cts","mjs","mts","jsx","tsx","cjsx","ctsx","mjsx","mtsx"],Y=["vue","svelte","marko","md","mdx"],me=[...pe,...Y];function J(e){const t=me.some(n=>e.endsWith("."+n));return i(!Ee(e)||t),t}function Ee(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function ve(e){return Y.some(t=>e.endsWith("."+t))}function S(e,t,n){return typeof e=="string"?k(e.split(""),t,n).join(""):k(e,t,n)}function k(e,t,n){const r=[];let s=t>=0?t:e.length+t;i(s>=0&&s<=e.length);let o=n>=0?n:e.length+n;for(i(o>=0&&o<=e.length);!(s===o||(s===e.length&&(s=0),s===o));){const a=e[s];i(a!==void 0),r.push(a),s++}return r}function ye(e){return e.startsWith("/")||e.startsWith("http")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function _e(e,t){i(ye(e),{url:e}),i(t.startsWith("/"),{url:e,baseServer:t});const[n,...r]=e.split("#");i(n!==void 0);const s=["",...r].join("#")||null;i(s===null||s.startsWith("#"));const o=s===null?"":L(s.slice(1)),[a,...l]=n.split("?");i(a!==void 0);const c=["",...l].join("?")||null;i(c===null||c.startsWith("?"),{url:e,searchOriginal:c});const u={},h={};Array.from(new URLSearchParams(c||"")).forEach(([m,A])=>{u[m]=A,h[m]=[...h[m]||[],A]});const{origin:f,pathnameResolved:j}=Re(a,t);i(f===null||f===L(f),{origin:f}),i(j.startsWith("/"),{url:e,pathnameResolved:j}),i(f===null||e.startsWith(f),{url:e,origin:f});const d=a.slice((f||"").length);{const m=`${f||""}${d}${c||""}${s||""}`;i(e===m,{url:e,urlRecreated:m})}let{pathname:p,hasBaseServer:w}=$e(j,t);return p=we(p),i(p.startsWith("/")),{origin:f,pathname:p,pathnameOriginal:d,hasBaseServer:w,search:u,searchAll:h,searchOriginal:c,hash:o,hashOriginal:s}}function L(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function we(e){return e.split("/").map(t=>L(t).split("/").join("%2F")).join("/")}function Re(e,t){var n;if(e.startsWith("//"))return{origin:null,pathnameResolved:e};let r,s;try{const o=new URL(e);r=o.origin,s=o.pathname}catch{r=null;let a=typeof window<"u"&&((n=window==null?void 0:window.document)===null||n===void 0?void 0:n.baseURI);a=a||"http://fake.example.org"+t,s=new URL(e,a).pathname}return i(s.startsWith("/"),{urlWithoutSearch:e,pathnameResolved:s}),i(s===s.split("?")[0].split("#")[0]),{origin:r,pathnameResolved:s}}function be(e){i(e.startsWith("/")),i(!e.includes("?")),i(!e.includes("#"))}function $e(e,t){be(e),i(je(t));let n=e;if(i(n.startsWith("/")),i(t.startsWith("/")),t==="/")return{pathname:e,hasBaseServer:!0};let r=t;return t.endsWith("/")&&n===S(t,0,-1)&&(r=S(t,0,-1),i(n===r)),n.startsWith(r)?(i(n.startsWith("/")||n.startsWith("http")),i(n.startsWith(r)),n=n.slice(r.length),n.startsWith("/")||(n="/"+n),i(n.startsWith("/")),{pathname:n,hasBaseServer:!0}):{pathname:e,hasBaseServer:!1}}function je(e){return e.startsWith("/")}function H(e,t){Object.assign(e,t)}function N(e){return e instanceof Function||typeof e=="function"}function b(e){return typeof e=="object"&&e!==null}function at(e){return(t,n)=>{const r=e(t),s=e(n);return r===s?0:r>s?-1:1}}function Pe(e){return(t,n)=>{const r=e(t),s=e(n);if(i([!0,!1,null].includes(r)),i([!0,!1,null].includes(s)),r===s)return 0;if(r===!0||s===!1)return-1;if(s===!0||r===!1)return 1;i(!1)}}function Se(e){return Pe(t=>{const n=e(t);return n===null?null:!n})}function Ie(){return typeof window<"u"&&typeof window.scrollY=="number"}function g(e,t,n="unknown"){if(!(typeof e=="object"&&e!==null&&t in e))return n==="undefined";if(n==="unknown")return!0;const s=e[t];return n==="array"?Array.isArray(s):n==="string[]"?Array.isArray(s)&&s.every(o=>typeof o=="string"):n==="function"?N(s):Array.isArray(n)?typeof s=="string"&&n.includes(s):n==="null"?s===null:n==="undefined"?s===void 0:n==="true"?s===!0:n==="false"?s===!1:typeof s===n}function Le(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const xe=e=>e!=null,Fe="\\";function q(e){i(e&&!e.includes(Fe),`Wrongly formatted path: ${e}`)}const C=/[^a-zA-Z-_]/;function K(e){return Te(e)!==null}function Te(e){if(e===void 0||e.includes("\\")||e.startsWith("/"))return null;let t=null;if(e.startsWith("@")){if(!e.includes("/"))return null;const[l,...c]=e.split("/");t=l,e=c.join("/"),i(t&&t.startsWith("@"))}if(e==="")return null;const[n,...r]=e.split("/"),s=n,o=r.length===0?null:r.join("/");return i(s),C.test(s)||t&&C.test(t.slice(1))?null:{npmPackageName:t?`${t}/${s}`:s,modulePath:o}}const We=["clientRouting"];function Ne(e){We.forEach(t=>{if(i(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;E(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is forbidden: remove \`export { ${t} }\` instead. (${n})`),E(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const Q=["render","clientRouting","prerender","doNotPrerender"];function Oe(e,t){E(!Q.includes(e),`${t} has \`export default { ${e} }\` which is forbidden, use \`export { ${e} }\` instead.`)}function Ae(e){const t={};e.forEach(s=>{ke(s).forEach(({exportName:a,exportValue:l,isFromDefaultExport:c})=>{var u;i(a!=="default"),t[a]=(u=t[a])!==null&&u!==void 0?u:[],t[a].push({exportValue:l,filePath:s.filePath,_filePath:s.filePath,_fileType:s.fileType,_isFromDefaultExport:c})})});const n=Ce(),r={};return Object.entries(t).forEach(([s,o])=>{o.forEach(({exportValue:a,_fileType:l,_isFromDefaultExport:c})=>{var u;r[s]=(u=r[s])!==null&&u!==void 0?u:a,l===".page"&&!c&&(s in n||(n[s]=a))})}),i(!("default"in r)),i(!("default"in t)),{exports:r,exportsAll:t,pageExports:n}}function ke(e){const{filePath:t,fileExports:n}=e;i(n),i(J(t));const r=[];return Object.entries(n).sort(Se(([s])=>s==="default")).forEach(([s,o])=>{let a=s==="default";if(a)if(ve(t))s="Page";else{E(b(o),`The \`export default\` of ${t} should be an object.`),Object.entries(o).forEach(([l,c])=>{Oe(l,t),r.push({exportName:l,exportValue:c,isFromDefaultExport:a})});return}r.push({exportName:s,exportValue:o,isFromDefaultExport:a})}),r.forEach(({exportName:s,isFromDefaultExport:o})=>{i(!(o&&Q.includes(s)))}),r}function Ce(){return new Proxy({},{get(...e){return Ie()||he(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function Z(e){const t=".page.",n=S(e.split(t),0,-1).join(t);return i(!n.includes("\\")),n}function _(e){q(e),i(e.startsWith("/")||K(e),{filePath:e})}function lt(e){const t=e.filter(n=>O(n));if(E(t.length<=1,`Only one \`_error.page.js\` is allowed. Found several: ${t.join(" ")}`),t.length>0){const n=t[0];return i(n),n}return null}function O(e){return i(!e.includes("\\")),e.includes("/_error")}const ze=[".page",".page.server",".page.route",".page.client",".css"];function De(e){if(q(e),e.endsWith(".css"))return i(K(e),e),".css";i(J(e),e);const n=e.split("/").slice(-1)[0].split("."),r=n.slice(-3)[0],s=n.slice(-2)[0];if(s==="page")return".page";if(i(r==="page",e),s==="server")return".page.server";if(s==="client")return".page.client";if(s==="route")return".page.route";i(!1,e)}function X(e){const t=o=>s.pageId===o||s.isDefaultPageFile&&(z(s.filePath)||Be(o,s.filePath)),n=De(e),s={filePath:e,fileType:n,isEnv:o=>{if(i(n!==".page.route"),o==="CLIENT_ONLY")return n===".page.client"||n===".css";if(o==="SERVER_ONLY")return n===".page.server";if(o==="CLIENT_AND_SERVER")return n===".page";i(!1)},isRelevant:t,isDefaultPageFile:x(e),isRendererPageFile:n!==".css"&&x(e)&&z(e),isErrorPageFile:O(e),pageId:Z(e)};return s}function x(e){return _(e),O(e)?!1:e.includes("/_default")}function z(e){return _(e),e.includes("/renderer/")}function Be(e,t){_(e),_(t),i(!e.endsWith("/")),i(!t.endsWith("/")),i(x(t));const n=S(t.split("/"),0,-1).filter(r=>r!=="_default").join("/");return e.startsWith(n)}function Ve(e){i(g(e,"isGeneratedFile"),"Missing `isGeneratedFile`."),i(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),i(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),i(g(e,"pageFilesLazy","object")),i(g(e,"pageFilesEager","object")),i(g(e,"pageFilesExportNamesLazy","object")),i(g(e,"pageFilesExportNamesEager","object")),i(g(e.pageFilesLazy,".page")),i(g(e.pageFilesLazy,".page.client")||g(e.pageFilesLazy,".page.server")),i(g(e,"pageFilesList","string[]"));const t={};P(e.pageFilesLazy).forEach(({filePath:r,pageFile:s,globValue:o})=>{var a;s=t[r]=(a=t[r])!==null&&a!==void 0?a:s;const l=o;D(l),s.loadFile=async()=>{"fileExports"in s||(s.fileExports=await l(),Ne(s))}}),P(e.pageFilesExportNamesLazy).forEach(({filePath:r,pageFile:s,globValue:o})=>{var a;s=t[r]=(a=t[r])!==null&&a!==void 0?a:s;const l=o;D(l),s.loadExportNames=async()=>{if(!("exportNames"in s)){const c=await l();E("exportNames"in c,"You seem to be using Vite 2 but the latest vite-plugin-ssr versions only work with Vite 3"),i(g(c,"exportNames","string[]"),s.filePath),s.exportNames=c.exportNames}}}),P(e.pageFilesEager).forEach(({filePath:r,pageFile:s,globValue:o})=>{var a;s=t[r]=(a=t[r])!==null&&a!==void 0?a:s;const l=o;i(b(l)),s.fileExports=l}),P(e.pageFilesExportNamesEager).forEach(({filePath:r,pageFile:s,globValue:o})=>{var a;s=t[r]=(a=t[r])!==null&&a!==void 0?a:s;const l=o;i(b(l)),i(g(l,"exportNames","string[]"),s.filePath),s.exportNames=l.exportNames}),e.pageFilesList.forEach(r=>{var s;t[r]=(s=t[r])!==null&&s!==void 0?s:X(r)});const n=Object.values(t);return n.forEach(({filePath:r})=>{i(!r.includes("\\"))}),n}function P(e){const t=[];return Object.entries(e).forEach(([n,r])=>{i(ze.includes(n)),i(b(r)),Object.entries(r).forEach(([s,o])=>{const a=X(s);i(a.fileType===n),t.push({filePath:s,pageFile:a,globValue:o})})}),t}function D(e){i(N(e))}const y=globalThis.__vite_plugin_ssr__pageFiles=globalThis.__vite_plugin_ssr__pageFiles||{pageFilesAll:void 0,pageFilesGetter:void 0};function ct(e){y.pageFilesAll=Ve(e)}async function ut(e,t){e?(i(!y.pageFilesGetter),i(t===void 0)):(i(y.pageFilesGetter),i(typeof t=="boolean"),(!y.pageFilesAll||!t)&&await y.pageFilesGetter()),i(y.pageFilesAll);const n=y.pageFilesAll,r=Ue(n);return{pageFilesAll:n,allPageIds:r}}function Ue(e){const t=e.filter(({isDefaultPageFile:r})=>!r).map(({filePath:r})=>r).map(Z);return U(t)}function Ge(e,t){return ee(e,t,!0)}function ft(e,t){return ee(e,t,!1)}function ee(e,t,n){const r=n?"CLIENT_ONLY":"SERVER_ONLY",s=e.filter(d=>d.isRelevant(t)&&d.fileType!==".page.route").sort(Me(n,t)),o=d=>{const p=s.filter(m=>m.pageId===t&&m.isEnv(d?"CLIENT_AND_SERVER":r));E(p.length<=1,`Merge the following files into a single file: ${p.map(m=>m.filePath).join(" ")}`);const w=p[0];return i(w===void 0||!w.isDefaultPageFile),w},a=o(!1),l=o(!0),c=d=>s.filter(p=>p.isRendererPageFile&&p.isEnv(d?"CLIENT_AND_SERVER":r))[0],u=c(!1),h=c(!0),f=s.filter(d=>d.isDefaultPageFile&&!d.isRendererPageFile&&(d.isEnv(r)||d.isEnv("CLIENT_AND_SERVER")));return[a,l,...f,u,h].filter(xe)}function Me(e,t){const n=e?"CLIENT_ONLY":"SERVER_ONLY",r=-1,s=1,o=0;return(a,l)=>{if(!a.isDefaultPageFile&&l.isDefaultPageFile)return r;if(!l.isDefaultPageFile&&a.isDefaultPageFile)return s;{const c=a.isRendererPageFile,u=l.isRendererPageFile;if(!c&&u)return r;if(!u&&c)return s;i(c===u)}{const c=B(t,a.filePath),u=B(t,l.filePath);if(c<u)return r;if(u<c)return s;i(c===u)}{if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return r;if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return s}return o}}function B(e,t){_(e),_(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const r=e.slice(n),s=t.slice(n),o=r.split("/").length,a=s.split("/").length;return o+a}const Ye="modulepreload",Je=function(e){return"/"+e},V={},dt=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Je(o),o in V)return;V[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let h=s.length-1;h>=0;h--){const f=s[h];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Ye,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function gt(e){const t=window.location.href,{origin:n,searchOriginal:r,hashOriginal:s,pathnameOriginal:o}=_e(t,"/");let a;if(e!=null&&e.withoutHash){a=`${o}${r||""}`;const l=`${n||""}${a}${s||""}`;i(t===l,{url:t,urlRecreated:l})}else{a=`${o}${r||""}${s||""}`;const l=`${n||""}${a}`;i(t===l,{url:t,urlRecreated:l})}return a}const He=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],r=t[2];return new RegExp(n,r)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function te(e){const t=JSON.parse(e);return ne(t)}function ne(e){return typeof e=="string"?qe(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=ne(n)}),e)}function qe(e){for(const{match:t,deserialize:n}of He)if(t(e))return n(e,te);return e}function ht(){var e;const t=(e=document.getElementById("vite-plugin-ssr_pageContext"))===null||e===void 0?void 0:e.textContent;i(t);const n=te(t);i(g(n,"pageContext","object"));const{pageContext:r}=n;return i(g(r,"_pageId","string")),H(r,{_pageContextRetrievedFromServer:{...r},_comesDirectlyFromServer:!0}),r}function Ke(e,t){if(!(t in e.exports))return null;const n=e.exports[t],r=e.exportsAll[t][0];i(r.exportValue===n);const{filePath:s}=r;return i(s),i(!t.endsWith(")")),E(N(n),`\`export { ${t} }\` of ${s} should be a function`),{hook:n,filePath:s}}function Qe(e,t){Ke(e,t)}function Ze(e){const t=Object.entries(e);for(const n in e)delete e[n];t.sort(([n],[r])=>Le(n,r)).forEach(([n,r])=>{e[n]=r})}const I=T("releasePageContextCommon.ts",{});function pt(e){i("exports"in e),i("exportsAll"in e),i("pageExports"in e),i(b(e.pageExports));const t=e.exports.Page;return H(e,{Page:t}),st(e),Ze(e),i([!0,!1].includes(e._comesDirectlyFromServer)),e._comesDirectlyFromServer?tt(e):e}const Xe=["then","toJSON"],et=["_pageId"];function tt(e){return new Proxy(e,{get:n});function t(r){return!(r in e||Xe.includes(r)||typeof r=="symbol"||typeof r!="string"||r.startsWith("__v_"))}function n(r,s){return I.disableAssertPassToClient!==s&&nt(e._pageContextRetrievedFromServer,s,t(s)),I.disableAssertPassToClient=s,window.setTimeout(()=>{I.disableAssertPassToClient=void 0},0),e[s]}}function nt(e,t,n){if(!n||e===null)return;const r=Object.keys(e).filter(s=>!et.includes(s));E(!1,[`\`pageContext.${t}\` is not available in the browser.`,`Make sure that \`passToClient.includes('${t}')\`.`,`(Currently \`passToClient\` is \`[${r.map(s=>`'${s}'`).join(", ")}]\`.)`,"See https://vite-plugin-ssr.com/passToClient"].join(" "))}function st(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}const se="__whileFetchingAssets";async function mt(e,t){const n=Ge(e,t);try{await Promise.all(n.map(l=>{var c;return(c=l.loadFile)===null||c===void 0?void 0:c.call(l)}))}catch(l){throw l&&Object.assign(l,{[se]:!0}),l}const{exports:r,exportsAll:s,pageExports:o}=Ae(n);return{exports:r,exportsAll:s,pageExports:o,_pageFilesLoaded:n}}function Et(e){return e?e[se]===!0:!1}function vt(e){var t;if(g(e.exports,"render"))Qe(e,"render");else{const n=e._pageFilesLoaded.filter(s=>s.fileType===".page.client");let r;n.length===0?r="No file `*.page.client.*` found for URL "+((t=e.urlOriginal)!==null&&t!==void 0?t:window.location.href):r="One of the following files should export a `render()` hook: "+n.map(s=>s.filePath).join(" "),E(!1,r)}}export{Ge as A,ye as B,ot as C,Et as D,Qe as E,vt as F,rt as G,dt as _,i as a,O as b,E as c,g as d,he as e,b as f,ct as g,at as h,N as i,$ as j,it as k,T as l,Pe as m,gt as n,H as o,_e as p,ft as q,pt as r,S as s,ht as t,mt as u,lt as v,Ke as w,te as x,ut as y,je as z};
