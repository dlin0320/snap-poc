(()=>{var e={d:(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};(()=>{"use strict";function t(e,n,t){if("string"==typeof e)throw new Error(`An HTML element ("${String(e)}") was used in a Snap component, which is not supported by Snaps UI. Please use one of the supported Snap components.`);if(!e)throw new Error("A JSX fragment was used in a Snap component, which is not supported by Snaps UI. Please use one of the supported Snap components.");return e({...n,key:t})}function o(e,n,o){return t(e,n,o)}e.r(n),e.d(n,{onHomePage:()=>J,onInstall:()=>N,onRpcRequest:()=>V,onTransaction:()=>W,onUpdate:()=>D,onUserInput:()=>z});class r extends TypeError{constructor(e,n){let t;const{message:o,explanation:r,...c}=e,{path:i}=e,s=0===i.length?o:`At path: ${i.join(".")} -- ${o}`;super(r??s),null!=r&&(this.cause=s),Object.assign(this,c),this.name=this.constructor.name,this.failures=()=>t??(t=[e,...n()])}}function c(e){return"object"==typeof e&&null!==e}function i(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function s(e,n,t,o){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:r,branch:c}=n,{type:s}=t,{refinement:a,message:l=`Expected a value of type \`${s}\`${a?` with refinement \`${a}\``:""}, but received: \`${i(o)}\``}=e;return{value:o,type:s,refinement:a,key:r[r.length-1],path:r,branch:c,...e,message:l}}function*a(e,n,t,o){(function(e){return c(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const r of e){const e=s(r,n,t,o);e&&(yield e)}}function*l(e,n,t={}){const{path:o=[],branch:r=[e],coerce:i=!1,mask:s=!1}=t,a={path:o,branch:r};if(i&&(e=n.coercer(e,a),s&&"type"!==n.type&&c(n.schema)&&c(e)&&!Array.isArray(e)))for(const t in e)void 0===n.schema[t]&&delete e[t];let u="valid";for(const o of n.validator(e,a))o.explanation=t.message,u="not_valid",yield[o,void 0];for(let[d,f,h]of n.entries(e,a)){const n=l(f,h,{path:void 0===d?o:[...o,d],branch:void 0===d?r:[...r,f],coerce:i,mask:s,message:t.message});for(const t of n)t[0]?(u=null===t[0].refinement||void 0===t[0].refinement?"not_valid":"not_refined",yield[t[0],void 0]):i&&(f=t[1],void 0===d?e=f:e instanceof Map?e.set(d,f):e instanceof Set?e.add(f):c(e)&&(void 0!==f||d in e)&&(e[d]=f))}if("not_valid"!==u)for(const o of n.refiner(e,a))o.explanation=t.message,u="not_refined",yield[o,void 0];"valid"===u&&(yield[void 0,e])}class u{constructor(e){const{type:n,schema:t,validator:o,refiner:r,coercer:c=(e=>e),entries:i=function*(){}}=e;this.type=n,this.schema=t,this.entries=i,this.coercer=c,this.validator=o?(e,n)=>a(o(e,n),n,this,e):()=>[],this.refiner=r?(e,n)=>a(r(e,n),n,this,e):()=>[]}assert(e,n){return function(e,n,t){const o=d(e,n,{message:t});if(o[0])throw o[0]}(e,this,n)}create(e,n){return function(e,n,t){const o=d(e,n,{coerce:!0,message:t});if(o[0])throw o[0];return o[1]}(e,this,n)}is(e){return function(e,n){const t=d(e,n);return!t[0]}(e,this)}mask(e,n){return function(e,n,t){const o=d(e,n,{coerce:!0,mask:!0,message:t});if(o[0])throw o[0];return o[1]}(e,this,n)}validate(e,n={}){return d(e,this,n)}}function d(e,n,t={}){const o=l(e,n,t),c=function(e){const{done:n,value:t}=e.next();return n?void 0:t}(o);if(c[0]){return[new r(c[0],(function*(){for(const e of o)e[0]&&(yield e[0])})),void 0]}return[void 0,c[1]]}function f(...e){const n="type"===e[0]?.type,t=e.map((({schema:e})=>e)),o=Object.assign({},...t);return n?function(e){const n=Object.keys(e);return new u({type:"type",schema:e,*entries(t){if(c(t))for(const o of n)yield[o,t[o],e[o]]},validator:e=>c(e)||`Expected an object, but received: ${i(e)}`,coercer:e=>c(e)?{...e}:e})}(o):g(o)}function h(e,n){return new u({type:e,schema:null,validator:n})}function p(){return h("boolean",(e=>"boolean"==typeof e))}function m(e){const n=i(e),t=typeof e;return new u({type:"literal",schema:"string"===t||"number"===t||"boolean"===t?e:null,validator:t=>t===e||`Expected the literal \`${n}\`, but received: ${i(t)}`})}function y(){return h("never",(()=>!1))}function v(e){return new u({...e,validator:(n,t)=>null===n||e.validator(n,t),refiner:(n,t)=>null===n||e.refiner(n,t)})}function g(e){const n=e?Object.keys(e):[],t=y();return new u({type:"object",schema:e??null,*entries(o){if(e&&c(o)){const r=new Set(Object.keys(o));for(const t of n)r.delete(t),yield[t,o[t],e[t]];for(const e of r)yield[e,o[e],t]}},validator:e=>c(e)||`Expected an object, but received: ${i(e)}`,coercer:e=>c(e)?{...e}:e})}function b(e){return new u({...e,validator:(n,t)=>void 0===n||e.validator(n,t),refiner:(n,t)=>void 0===n||e.refiner(n,t)})}function w(){return h("string",(e=>"string"==typeof e||`Expected a string, but received: ${i(e)}`))}function E(e){const n=e.map((e=>e.type)).join(" | ");return new u({type:"union",schema:null,coercer(n){for(const t of e){const[e,o]=t.validate(n,{coerce:!0});if(!e)return o}return n},validator(t,o){const r=[];for(const n of e){const[...e]=l(t,n,o),[c]=e;if(!c?.[0])return[];for(const[n]of e)n&&r.push(n)}return[`Expected the value to satisfy a union of \`${n}\`, but received: ${i(t)}`,...r]}})}var S;!function(e){e.ButtonClickEvent="ButtonClickEvent",e.FormSubmitEvent="FormSubmitEvent",e.InputChangeEvent="InputChangeEvent",e.FileUploadEvent="FileUploadEvent"}(S||(S={}));const k=g({type:w(),name:b(w())}),x=f(k,g({type:m(S.ButtonClickEvent),name:b(w())})),$=g({name:w(),size:h("number",(e=>"number"==typeof e&&!isNaN(e)||`Expected a number, but received: ${i(e)}`)),contentType:w(),contents:w()}),j=f(k,g({type:m(S.FormSubmitEvent),value:(C=w(),q=v(E([w(),$,p()])),new u({type:"record",schema:null,*entries(e){if(c(e))for(const n in e){const t=e[n];yield[n,n,C],yield[n,t,q]}},validator:e=>c(e)||`Expected an object, but received: ${i(e)}`})),name:w()}));var C,q;const A=f(k,g({type:m(S.InputChangeEvent),name:w(),value:E([w(),p()])}));E([x,j,A,f(k,g({type:m(S.FileUploadEvent),name:w(),file:v($)}))]);function I(e){return Object.fromEntries(Object.entries(e).filter((([,e])=>void 0!==e)))}function O(e){return n=>{const{key:t=null,...o}=n;return{type:e,props:I(o),key:t}}}const _=O("Box"),T=O("Heading"),U=O("Divider"),P=O("Text"),F=O("Button"),L=({error:e})=>o(_,{children:[t(T,{children:"Account Connection Error"}),t(U,{}),t(P,{children:"There was an error connecting to your accounts:"}),t(P,{children:e}),t(U,{}),t(P,{children:"Try connecting again:"}),t(F,{name:"connect-wallet",children:"Connect Wallet"})]}),B=({accounts:e=[]})=>{const n=e&&e.length>0;return o(_,{children:[t(T,{children:"Connected Accounts"}),t(U,{}),o(_,n?{children:[t(P,{children:"The following accounts are connected:"}),e.map(((e,n)=>o(_,{children:[o(P,{children:["• Account ",`${n+1}`,": ",e]}),t(F,{name:"show-details",children:"Show Details"})]},`account-${n}`))),t(U,{})]}:{children:[t(P,{children:"No accounts are currently connected."}),t(P,{children:"Connect your wallet to use this feature:"}),t(F,{name:"connect-wallet",children:"Connect Wallet"})]})]})},R=O("Link"),H=e=>{switch(e){case"High":return"🔴";case"Medium":return"🟠";case"Low":return"🟢";default:return"⚠️"}},M=({toAddress:e,riskLevel:n,label:r,blockExplorerUrl:c})=>o(_,{children:[t(T,{children:"Transaction Security Alert"}),o(P,{children:["Sending to: ",e]}),t(U,{}),o(_,{children:[o(P,{children:[H(n)," Risk Level: ",n]}),o(P,{children:["Label: ",r]})]}),t(U,{}),o(_,{children:[t(P,{children:"View address on block explorer:"}),t(R,{href:c,children:"View on Etherscan"})]})]}),N=async()=>{console.log("Installing the Snap..."),await ethereum.request({method:"eth_requestAccounts"}),console.log("Snap installed successfully")},D=async()=>{console.log("Updating the Snap..."),await ethereum.request({method:"eth_requestAccounts"}),console.log("Snap updated successfully")},W=async({transaction:e,chainId:n})=>(console.log("chainId",n),(async e=>{const n=e.to||"0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b";return{content:t(M,{toAddress:n,riskLevel:"High",label:"Scammer",blockExplorerUrl:`https://etherscan.io/address/${n}`})}})(e)),z=async({id:e,event:n,context:o})=>{if(console.log(`User input ID: ${e}`),console.log("Event:",n),console.log("Context:",o),n.type===S.ButtonClickEvent)if("connect-wallet"===n.name)try{console.log("Connecting wallet..."),await ethereum.request({method:"eth_requestAccounts"}),console.log("Wallet connected successfully")}catch(e){console.error("Error connecting wallet:",e)}else"show-details"===n.name&&(await snap.request({method:"snap_updateInterface",params:{id:e,ui:t(B,{accounts:["0x1234..."]})}}),console.log("Transaction type button clicked"))},J=async()=>{try{console.log("Initializing home page...");const e=await ethereum.request({method:"eth_accounts"});console.log("Found accounts:",e);const n=await snap.request({method:"snap_createInterface",params:{ui:t(B,{accounts:e})}});return console.log("Created interface:",n),{id:n}}catch(e){return console.error("Error getting accounts:",e),{content:t(L,{error:e.message})}}},V=async({origin:e,request:n})=>(console.log("Origin:",e),console.log("RPC request:",n),await snap.request({method:"snap_notify",params:{type:"native",message:"Received RPC request"}}),{result:null})})(),module.exports=n})();