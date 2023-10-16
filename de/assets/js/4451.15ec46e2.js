(self.webpackChunkstudyu_docs=self.webpackChunkstudyu_docs||[]).push([[4451],{8201:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var o=n(7294),s=n(5893);function r(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:r.length>0?(0,s.jsx)(s.Fragment,{children:r}):null}}(e.children),r=e.title??t;return{...e,...r&&{title:r},children:n}}var a=n(6010),c=n(7325),i=n(3702);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:o}=e;return(0,s.jsx)("div",{className:(0,a.Z)(i.k.common.admonition,i.k.common.admonitionType(t),l.admonition,n),children:o})}function u(e){let{icon:t,title:n}=e;return(0,s.jsxs)("div",{className:l.admonitionHeading,children:[(0,s.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,s.jsx)("div",{className:l.admonitionContent,children:t}):null}function p(e){const{type:t,icon:n,title:o,children:r,className:a}=e;return(0,s.jsxs)(d,{type:t,className:a,children:[(0,s.jsx)(u,{title:o,icon:n}),(0,s.jsx)(m,{children:r})]})}function h(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,s.jsx)(h,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,s.jsx)(p,{...f,...e,className:(0,a.Z)("alert alert--secondary",e.className),children:e.children})}function y(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const b={icon:(0,s.jsx)(y,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,s.jsx)(p,{...b,...e,className:(0,a.Z)("alert alert--success",e.className),children:e.children})}function x(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const j={icon:(0,s.jsx)(x,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function k(e){return(0,s.jsx)(p,{...j,...e,className:(0,a.Z)("alert alert--info",e.className),children:e.children})}function N(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const C={icon:(0,s.jsx)(N,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};function B(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const w={icon:(0,s.jsx)(B,{}),title:(0,s.jsx)(c.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function L(e){return(0,s.jsx)(p,{...w,...e,className:(0,a.Z)("alert alert--danger",e.className),children:e.children})}const E={...{note:g,tip:v,info:k,caution:function(e){return(0,s.jsx)(p,{...C,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})},danger:L},...{secondary:e=>(0,s.jsx)(g,{title:"secondary",...e}),important:e=>(0,s.jsx)(k,{title:"important",...e}),success:e=>(0,s.jsx)(v,{title:"success",...e}),warning:e=>(0,s.jsx)(L,{title:"warning",...e})}};function T(e){const t=r(e),n=(o=t.type,E[o]||(console.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),E.info));var o;return(0,s.jsx)(n,{...t})}},4451:(e,t,n)=>{"use strict";n.d(t,{Z:()=>pe});var o=n(7294),s=n(1151),r=n(1514),a=n(1048),c=n(6010),i=n(9200),l=n(107);function d(){const{prism:e}=(0,l.L)(),{colorMode:t}=(0,i.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n(3702),m=n(7594),p=n.n(m);const h=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function y(e,t){const n=e.map((e=>{const{start:n,end:o}=g[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function b(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:r}=t;if(r&&f.test(r)){const e=r.match(f).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=p()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],t);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],t);case"html":return y(["js","jsBlock","html"],t);case"python":case"py":case"bash":return y(["bash"],t);case"markdown":case"md":return y(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return y(["tex"],t);case"lua":case"haskell":case"sql":return y(["lua"],t);case"wasm":return y(["wasm"],t);default:return y(Object.keys(g).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(o,s),c=n.split("\n"),i=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(a);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?i[l[t]].range+=`${p},`:d[t]?i[d[t]].start=p:u[t]&&(i[u[t]].range+=`${i[u[t]].start}-${p-1},`),c.splice(p,1)}n=c.join("\n");const m={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;p()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const v={codeBlockContainer:"codeBlockContainer_Ckt0"};var x=n(5893);function j(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,s]=e;const r=t[o];r&&"string"==typeof s&&(n[r]=s)})),n}(d());return(0,x.jsx)(t,{...n,style:o,className:(0,c.Z)(n.className,v.codeBlockContainer,u.k.common.codeBlock)})}const k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function N(e){let{children:t,className:n}=e;return(0,x.jsx)(j,{as:"pre",tabIndex:0,className:(0,c.Z)(k.codeBlockStandalone,"thin-scrollbar",n),children:(0,x.jsx)("code",{className:k.codeBlockLines,children:t})})}var C=n(3768);const B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function w(e,t){const[n,s]=(0,o.useState)(),r=(0,o.useCallback)((()=>{s(e.current?.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,o.useEffect)((()=>{r()}),[r]),function(e,t,n){void 0===n&&(n=B);const s=(0,C.zX)(t),r=(0,C.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(s);return e&&t.observe(e,r),()=>t.disconnect()}),[e,s,r])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const L={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var E={Prism:n(7410).Z,theme:L};function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(){return Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Z.apply(this,arguments)}var _=/\r\n|\r|\n/,S=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},z=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function I(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var A=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),T(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,o=Object.create(null),s=e.styles.reduce((function(e,n){var o=n.languages,s=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=Z({},e[t],s);e[t]=n})),e}),o);return s.root=n,s.plain=Z({},n,{backgroundColor:null}),s}(e.theme,e.language):void 0;return t.themeDict=n})),T(this,"getLineProps",(function(e){var n=e.key,o=e.className,s=e.style,r=Z({},I(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(r.style=a.plain),void 0!==s&&(r.style=void 0!==r.style?Z({},r.style,s):s),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),T(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,s=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===s&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===s&&!o)return r[n[0]];var a=o?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[a].concat(c))}})),T(this,"getTokenProps",(function(e){var n=e.key,o=e.className,s=e.style,r=e.token,a=Z({},I(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==s&&(a.style=void 0!==a.style?Z({},a.style,s):s),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),T(this,"tokenize",(function(e,t,n,o){var s={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",s);var r=s.tokens=e.tokenize(s.code,s.grammar,s.language);return e.hooks.run("after-tokenize",s),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,s=e.children,r=this.getThemeDict(this.props),a=t.languages[n];return s({tokens:function(e){for(var t=[[]],n=[e],o=[0],s=[e.length],r=0,a=0,c=[],i=[c];a>-1;){for(;(r=o[a]++)<s[a];){var l=void 0,d=t[a],u=n[a][r];if("string"==typeof u?(d=a>0?d:["plain"],l=u):(d=z(d,u.type),u.alias&&(d=z(d,u.alias)),l=u.content),"string"==typeof l){var m=l.split(_),p=m.length;c.push({types:d,content:m[0]});for(var h=1;h<p;h++)S(c),i.push(c=[]),c.push({types:d,content:m[h]})}else a++,t.push(d),n.push(l),o.push(0),s.push(l.length)}a--,t.pop(),n.pop(),o.pop(),s.pop()}return S(c),i}(void 0!==a?this.tokenize(t,o,a,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);const M=A,H={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function P(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:s,getTokenProps:r}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=s({line:t,className:(0,c.Z)(n,o&&H.codeLine)}),i=t.map(((e,t)=>(0,x.jsx)("span",{...r({token:e,key:t})},t)));return(0,x.jsxs)("span",{...a,children:[o?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{className:H.codeLineNumber}),(0,x.jsx)("span",{className:H.codeLineContent,children:i})]}):i,(0,x.jsx)("br",{})]})}var O=n(7325);function D(e){return(0,x.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,x.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function R(e){return(0,x.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,x.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const V={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function $(e){let{code:t,className:n}=e;const[s,r]=(0,o.useState)(!1),a=(0,o.useRef)(void 0),i=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),s=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const r=document.getSelection(),a=r.rangeCount>0&&r.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}o.remove(),a&&(r.removeAllRanges(),r.addRange(a)),s&&s.focus()}(t),r(!0),a.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,x.jsx)("button",{type:"button","aria-label":s?(0,O.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,O.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,O.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,V.copyButton,s&&V.copyButtonCopied),onClick:i,children:(0,x.jsxs)("span",{className:V.copyButtonIcons,"aria-hidden":"true",children:[(0,x.jsx)(D,{className:V.copyButtonIcon}),(0,x.jsx)(R,{className:V.copyButtonSuccessIcon})]})})}function W(e){return(0,x.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,x.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const q={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function F(e){let{className:t,onClick:n,isEnabled:o}=e;const s=(0,O.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,x.jsx)("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,o&&q.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,x.jsx)(W,{className:q.wordWrapButtonIcon,"aria-hidden":"true"})})}function G(e){let{children:t,className:n="",metastring:s,title:r,showLineNumbers:a,language:i}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,l.L)(),p=i??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u,f=d(),g=function(){const[e,t]=(0,o.useState)(!1),[n,s]=(0,o.useState)(!1),r=(0,o.useRef)(null),a=(0,o.useCallback)((()=>{const n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[r,e]),c=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=r.current,n=e>t||r.current.querySelector("code").hasAttribute("style");s(n)}),[r]);return w(r,c),(0,o.useEffect)((()=>{c()}),[e,c]),(0,o.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:a}}(),y=function(e){return e?.match(h)?.groups.title??""}(s)||r,{lineClassNames:v,code:N}=b(t,{metastring:s,language:p,magicComments:m}),C=a??function(e){return Boolean(e?.includes("showLineNumbers"))}(s);return(0,x.jsxs)(j,{as:"div",className:(0,c.Z)(n,p&&!n.includes(`language-${p}`)&&`language-${p}`),children:[y&&(0,x.jsx)("div",{className:k.codeBlockTitle,children:y}),(0,x.jsxs)("div",{className:k.codeBlockContent,children:[(0,x.jsx)(M,{...E,theme:f,code:N,language:p??"text",children:e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:s}=e;return(0,x.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,c.Z)(t,k.codeBlock,"thin-scrollbar"),children:(0,x.jsx)("code",{className:(0,c.Z)(k.codeBlockLines,C&&k.codeBlockLinesWithNumbering),children:n.map(((e,t)=>(0,x.jsx)(P,{line:e,getLineProps:o,getTokenProps:s,classNames:v[t],showLineNumbers:C},t)))})})}}),(0,x.jsxs)("div",{className:k.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,x.jsx)(F,{className:k.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,x.jsx)($,{className:k.codeButton,code:N})]})]})]})}function U(e){let{children:t,...n}=e;const s=(0,a.Z)(),r=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof r?G:N;return(0,x.jsx)(c,{...n,children:r},String(s))}var J=n(3699);var Y=n(4639);const K={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function Q(e){return!!e&&("SUMMARY"===e.tagName||Q(e.parentElement))}function X(e,t){return!!e&&(e===t||X(e.parentElement,t))}function ee(e){let{summary:t,children:n,...s}=e;const r=(0,a.Z)(),i=(0,o.useRef)(null),{collapsed:l,setCollapsed:d}=(0,Y.u)({initialState:!s.open}),[u,m]=(0,o.useState)(s.open),p=o.isValidElement(t)?t:(0,x.jsx)("summary",{children:t??"Details"});return(0,x.jsxs)("details",{...s,ref:i,open:u,"data-collapsed":l,className:(0,c.Z)(K.details,r&&K.isBrowser,s.className),onMouseDown:e=>{Q(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Q(t)&&X(t,i.current)&&(e.preventDefault(),l?(d(!1),m(!0)):d(!0))},children:[p,(0,x.jsx)(Y.z,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),m(!e)},children:(0,x.jsx)("div",{className:K.collapsibleContent,children:n})})]})}const te={details:"details_b_Ee"},ne="alert alert--info";function oe(e){let{...t}=e;return(0,x.jsx)(ee,{...t,className:(0,c.Z)(ne,te.details,t.className)})}function se(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.type)),s=(0,x.jsx)(x.Fragment,{children:t.filter((e=>e!==n))});return(0,x.jsx)(oe,{...e,summary:n,children:s})}var re=n(3899);function ae(e){return(0,x.jsx)(re.Z,{...e})}const ce={containsTaskList:"containsTaskList_mC6p"};function ie(e){if(void 0!==e)return(0,c.Z)(e,e?.includes("contains-task-list")&&ce.containsTaskList)}const le={img:"img_ev3q"};var de=n(8201),ue=n(3855);const me={Head:r.Z,details:se,Details:se,code:function(e){return o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,x.jsx)("code",{...e}):(0,x.jsx)(U,{...e})},a:function(e){return(0,x.jsx)(J.Z,{...e})},pre:function(e){return(0,x.jsx)(x.Fragment,{children:e.children})},ul:function(e){return(0,x.jsx)("ul",{...e,className:ie(e.className)})},img:function(e){return(0,x.jsx)("img",{loading:"lazy",...e,className:(t=e.className,(0,c.Z)(t,le.img))});var t},h1:e=>(0,x.jsx)(ae,{as:"h1",...e}),h2:e=>(0,x.jsx)(ae,{as:"h2",...e}),h3:e=>(0,x.jsx)(ae,{as:"h3",...e}),h4:e=>(0,x.jsx)(ae,{as:"h4",...e}),h5:e=>(0,x.jsx)(ae,{as:"h5",...e}),h6:e=>(0,x.jsx)(ae,{as:"h6",...e}),admonition:de.Z,mermaid:ue.Z};function pe(e){let{children:t}=e;return(0,x.jsx)(s.Zo,{components:me,children:t})}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,s,r]=t;if(o&&r){o=parseInt(o),r=parseInt(r);const e=o<r?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(r+=e);for(let t=o;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1151:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,ah:()=>r});var o=n(7294);const s=o.createContext({});function r(e){const t=o.useContext(s);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||a:r(e),o.createElement(s.Provider,{value:c},t)}}}]);