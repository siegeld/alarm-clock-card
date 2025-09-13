/*! For license information please see alarm-clock-card.js.LICENSE.txt */
(()=>{"use strict";var t,e,i={13:(t,e,i)=>{customElements.get("mwc-button")||i.e(380).then(i.bind(i,380))},617:(t,e,i)=>{i.d(e,{EM:()=>s,Ls:()=>l,MZ:()=>r,P:()=>c,nJ:()=>h,wk:()=>a});const s=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),n=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},o=(t,e,i)=>{e.constructor.createProperty(i,t)};function r(t){return(e,i)=>void 0!==i?o(t,e,i):n(t,e)}function a(t){return r({...t,state:!0})}const d=({finisher:t,descriptor:e})=>(i,s)=>{var n;if(void 0===s){const s=null!==(n=i.originalKey)&&void 0!==n?n:i.key,o=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(o.finisher=function(e){t(e,s)}),o}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(n,s)}};function l(t){return d({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}function c(t,e){return d({descriptor:i=>{const s={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[e]&&(this[e]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null),this[e]}}return s}})}function h(t){return d({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}var u;null===(u=window.HTMLSlotElement)||void 0===u||u.prototype.assignedElements},684:(t,e,i)=>{i.d(e,{WF:()=>$,AH:()=>d,qy:()=>w.qy});const s=window,n=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}const d=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new a(i,t,o)},l=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,o))(e)})(t):t;var c;const h=window,u=h.trustedTypes,_=u?u.emptyScript:"",m=h.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:g},y="finalized";class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(y))return!1;this[y]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{n?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style"),n=s.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}v[y]=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:v}),(null!==(c=h.reactiveElementVersions)&&void 0!==c?c:h.reactiveElementVersions=[]).push("1.6.3");var b,A,w=i(752);class $ extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,w.XX)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return w.c0}}$.finalized=!0,$._$litElement$=!0,null===(b=globalThis.litElementHydrateSupport)||void 0===b||b.call(globalThis,{LitElement:$});const x=globalThis.litElementPolyfillSupport;null==x||x({LitElement:$}),(null!==(A=globalThis.litElementVersions)&&void 0!==A?A:globalThis.litElementVersions=[]).push("3.3.3")},752:(t,e,i)=>{var s;i.d(e,{XX:()=>H,c0:()=>S,qy:()=>x,s6:()=>k});const n=window,o=n.trustedTypes,r=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,a="$lit$",d=`lit$${(Math.random()+"").slice(9)}$`,l="?"+d,c=`<${l}>`,h=document,u=()=>h.createComment(""),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,m=Array.isArray,p="[ \t\n\f\r]",g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,y=/>/g,v=RegExp(`>|${p}(?:([^\\s"'>=/]+)(${p}*=${p}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),b=/'/g,A=/"/g,w=/^(?:script|style|textarea|title)$/i,$=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),x=$(1),S=($(2),Symbol.for("lit-noChange")),k=Symbol.for("lit-nothing"),C=new WeakMap,E=h.createTreeWalker(h,129,null,!1);function R(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==r?r.createHTML(e):e}const D=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=g;for(let e=0;e<i;e++){const i=t[e];let l,h,u=-1,_=0;for(;_<i.length&&(r.lastIndex=_,h=r.exec(i),null!==h);)_=r.lastIndex,r===g?"!--"===h[1]?r=f:void 0!==h[1]?r=y:void 0!==h[2]?(w.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=v):void 0!==h[3]&&(r=v):r===v?">"===h[0]?(r=null!=n?n:g,u=-1):void 0===h[1]?u=-2:(u=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?v:'"'===h[3]?A:b):r===A||r===b?r=v:r===f||r===y?r=g:(r=v,n=void 0);const m=r===v&&t[e+1].startsWith("/>")?" ":"";o+=r===g?i+c:u>=0?(s.push(l),i.slice(0,u)+a+i.slice(u)+d+m):i+d+(-2===u?(s.push(void 0),e):m)}return[R(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const c=t.length-1,h=this.parts,[_,m]=D(t,e);if(this.el=z.createElement(_,i),E.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=E.nextNode())&&h.length<c;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(a)||e.startsWith(d)){const i=m[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+a).split(d),e=/([.?@])?(.*)/.exec(i);h.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?O:"?"===e[1]?U:"@"===e[1]?j:P})}else h.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(w.test(s.tagName)){const t=s.textContent.split(d),e=t.length-1;if(e>0){s.textContent=o?o.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],u()),E.nextNode(),h.push({type:2,index:++n});s.append(t[e],u())}}}else if(8===s.nodeType)if(s.data===l)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(d,t+1));)h.push({type:7,index:n}),t+=d.length-1}n++}}static createElement(t,e){const i=h.createElement("template");return i.innerHTML=t,i}}function M(t,e,i=t,s){var n,o,r,a;if(e===S)return e;let d=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const l=_(e)?void 0:e._$litDirective$;return(null==d?void 0:d.constructor)!==l&&(null===(o=null==d?void 0:d._$AO)||void 0===o||o.call(d,!1),void 0===l?d=void 0:(d=new l(t),d._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=d:i._$Cl=d),void 0!==d&&(e=M(t,d._$AS(t,e.values),d,s)),e}class T{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:h).importNode(i,!0);E.currentNode=n;let o=E.nextNode(),r=0,a=0,d=s[0];for(;void 0!==d;){if(r===d.index){let e;2===d.type?e=new L(o,o.nextSibling,this,t):1===d.type?e=new d.ctor(o,d.name,d.strings,this,t):6===d.type&&(e=new q(o,this,t)),this._$AV.push(e),d=s[++a]}r!==(null==d?void 0:d.index)&&(o=E.nextNode(),r++)}return E.currentNode=h,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class L{constructor(t,e,i,s){var n;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),_(t)?t===k||null==t||""===t?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==S&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>m(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==k&&_(this._$AH)?this._$AA.nextSibling.data=t:this.$(h.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=z.createElement(R(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new T(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new z(t)),e}T(t){m(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new L(this.k(u()),this.k(u()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class P{constructor(t,e,i,s,n){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=M(this,t,e,0),o=!_(t)||t!==this._$AH&&t!==S,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=M(this,s[i+r],e,r),a===S&&(a=this._$AH[r]),o||(o=!_(a)||a!==this._$AH[r]),a===k?t=k:t!==k&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class O extends P{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===k?void 0:t}}const N=o?o.emptyScript:"";class U extends P{constructor(){super(...arguments),this.type=4}j(t){t&&t!==k?this.element.setAttribute(this.name,N):this.element.removeAttribute(this.name)}}class j extends P{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=M(this,t,e,0))&&void 0!==i?i:k)===S)return;const s=this._$AH,n=t===k&&s!==k||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==k&&(s===k||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const I=n.litHtmlPolyfillSupport;null==I||I(z,L),(null!==(s=n.litHtmlVersions)&&void 0!==s?s:n.litHtmlVersions=[]).push("2.8.0");const H=(t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new L(e.insertBefore(u(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r}}},s={};function n(t){var e=s[t];if(void 0!==e)return e.exports;var o=s[t]={exports:{}};return i[t](o,o.exports,n),o.exports}n.m=i,n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.f={},n.e=t=>Promise.all(Object.keys(n.f).reduce((e,i)=>(n.f[i](t,e),e),[])),n.u=t=>t+".alarm-clock-card.js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="alarm-clock-card:",n.l=(i,s,o,r)=>{if(t[i])t[i].push(s);else{var a,d;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var h=l[c];if(h.getAttribute("src")==i||h.getAttribute("data-webpack")==e+o){a=h;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+o),a.src=i),t[i]=[s];var u=(e,s)=>{a.onerror=a.onload=null,clearTimeout(_);var n=t[i];if(delete t[i],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach(t=>t(s)),e)return e(s)},_=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),d&&document.head.appendChild(a)}},n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");if(i.length)for(var s=i.length-1;s>-1&&(!t||!/^http(s?):/.test(t));)t=i[s--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t={792:0};n.f.j=(e,i)=>{var s=n.o(t,e)?t[e]:void 0;if(0!==s)if(s)i.push(s[2]);else{var o=new Promise((i,n)=>s=t[e]=[i,n]);i.push(s[2]=o);var r=n.p+n.u(e),a=new Error;n.l(r,i=>{if(n.o(t,e)&&(0!==(s=t[e])&&(t[e]=void 0),s)){var o=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",a.name="ChunkLoadError",a.type=o,a.request=r,s[1](a)}},"chunk-"+e,e)}};var e=(e,i)=>{var s,o,[r,a,d]=i,l=0;if(r.some(e=>0!==t[e])){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);d&&d(n)}for(e&&e(i);l<r.length;l++)o=r[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0},i=self.webpackChunkalarm_clock_card=self.webpackChunkalarm_clock_card||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var o,r,a,d=n(684),l=n(617);(a=o||(o={})).language="language",a.system="system",a.comma_decimal="comma_decimal",a.decimal_comma="decimal_comma",a.space_comma="space_comma",a.none="none",function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(r||(r={})),new Set(["fan","input_boolean","light","switch","group","automation"]);var c=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n};new Set(["call-service","divider","section","weblink","cast","select"]),n(13);const h={en:{card:{title:"Alarm Clock",set_time:"Set Time",enable_alarm:"Enable Alarm",disable_alarm:"Disable Alarm",snooze:"Snooze",dismiss:"Dismiss",next_alarm:"Next alarm",alarm_in:"Alarm in:",snooze_ends_in:"Snooze ends in:",snoozed:"Snoozed",until:"Until",use_24_hour_format:"Use 24-hour format",settings:"Settings"},status:{off:"OFF",armed:"ARMED",ringing:"RINGING",snoozed:"SNOOZED"},days:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat",sun:"Sun"}},de:{card:{title:"Wecker",set_time:"Zeit einstellen",enable_alarm:"Wecker aktivieren",disable_alarm:"Wecker deaktivieren",snooze:"Schlummern",dismiss:"Ausschalten",next_alarm:"Nächster Wecker",alarm_in:"Wecker in:",snooze_ends_in:"Schlummern endet in:",snoozed:"Schlummert",until:"Bis",use_24_hour_format:"24-Stunden-Format verwenden",settings:"Einstellungen"},status:{off:"AUS",armed:"AKTIV",ringing:"KLINGELT",snoozed:"SCHLUMMERT"},days:{monday:"Montag",tuesday:"Dienstag",wednesday:"Mittwoch",thursday:"Donnerstag",friday:"Freitag",saturday:"Samstag",sunday:"Sonntag",mon:"Mo",tue:"Di",wed:"Mi",thu:"Do",fri:"Fr",sat:"Sa",sun:"So"}},es:{card:{title:"Despertador",set_time:"Establecer hora",enable_alarm:"Activar alarma",disable_alarm:"Desactivar alarma",snooze:"Posponer",dismiss:"Descartar",next_alarm:"Próxima alarma",alarm_in:"Alarma en:",snooze_ends_in:"Posposición termina en:",snoozed:"Pospuesta",until:"Hasta",use_24_hour_format:"Usar formato de 24 horas",settings:"Configuración"},status:{off:"APAGADA",armed:"ARMADA",ringing:"SONANDO",snoozed:"POSPUESTA"},days:{monday:"Lunes",tuesday:"Martes",wednesday:"Miércoles",thursday:"Jueves",friday:"Viernes",saturday:"Sábado",sunday:"Domingo",mon:"Lun",tue:"Mar",wed:"Mié",thu:"Jue",fri:"Vie",sat:"Sáb",sun:"Dom"}},fr:{card:{title:"Réveil",set_time:"Définir l'heure",enable_alarm:"Activer le réveil",disable_alarm:"Désactiver le réveil",snooze:"Reporter",dismiss:"Arrêter",next_alarm:"Prochain réveil",alarm_in:"Réveil dans:",snooze_ends_in:"Report se termine dans:",snoozed:"Reporté",until:"Jusqu'à",use_24_hour_format:"Utiliser le format 24 heures",settings:"Paramètres"},status:{off:"ARRÊTÉ",armed:"ARMÉ",ringing:"SONNERIE",snoozed:"REPORTÉ"},days:{monday:"Lundi",tuesday:"Mardi",wednesday:"Mercredi",thursday:"Jeudi",friday:"Vendredi",saturday:"Samedi",sunday:"Dimanche",mon:"Lun",tue:"Mar",wed:"Mer",thu:"Jeu",fri:"Ven",sat:"Sam",sun:"Dim"}},sl:{card:{title:"Budilka",set_time:"Nastavi čas",enable_alarm:"Vključi budilko",disable_alarm:"Izključi budilko",snooze:"Odloži",dismiss:"Ustavi",next_alarm:"Naslednja budilka",alarm_in:"Budilka čez:",snooze_ends_in:"Odlog se konča čez:",snoozed:"Odloženo",until:"Do",use_24_hour_format:"Uporabi 24-urni format",settings:"Nastavitve"},status:{off:"IZKLOPLJENO",armed:"VKLOPLJENO",ringing:"ZVONI",snoozed:"ODLOŽENO"},days:{monday:"Ponedeljek",tuesday:"Torek",wednesday:"Sreda",thursday:"Četrtek",friday:"Petek",saturday:"Sobota",sunday:"Nedelja",mon:"Pon",tue:"Tor",wed:"Sre",thu:"Čet",fri:"Pet",sat:"Sob",sun:"Ned"}},zh:{card:{title:"闹钟",set_time:"设置时间",enable_alarm:"启用闹钟",disable_alarm:"禁用闹钟",snooze:"小睡",dismiss:"关闭",next_alarm:"下次闹钟",alarm_in:"闹钟将在：",snooze_ends_in:"小睡结束时间：",snoozed:"小睡中",until:"直到",use_24_hour_format:"使用24小时格式",settings:"设置"},status:{off:"关闭",armed:"已设置",ringing:"响铃中",snoozed:"小睡中"},days:{monday:"星期一",tuesday:"星期二",wednesday:"星期三",thursday:"星期四",friday:"星期五",saturday:"星期六",sunday:"星期日",mon:"周一",tue:"周二",wed:"周三",thu:"周四",fri:"周五",sat:"周六",sun:"周日"}},ja:{card:{title:"アラーム時計",set_time:"時刻設定",enable_alarm:"アラーム有効",disable_alarm:"アラーム無効",snooze:"スヌーズ",dismiss:"停止",next_alarm:"次のアラーム",alarm_in:"アラームまで：",snooze_ends_in:"スヌーズ終了まで：",snoozed:"スヌーズ中",until:"まで",use_24_hour_format:"24時間表示を使用",settings:"設定"},status:{off:"オフ",armed:"セット済み",ringing:"鳴動中",snoozed:"スヌーズ中"},days:{monday:"月曜日",tuesday:"火曜日",wednesday:"水曜日",thursday:"木曜日",friday:"金曜日",saturday:"土曜日",sunday:"日曜日",mon:"月",tue:"火",wed:"水",thu:"木",fri:"金",sat:"土",sun:"日"}},ko:{card:{title:"알람 시계",set_time:"시간 설정",enable_alarm:"알람 켜기",disable_alarm:"알람 끄기",snooze:"다시 알림",dismiss:"해제",next_alarm:"다음 알람",alarm_in:"알람까지：",snooze_ends_in:"다시 알림 종료까지：",snoozed:"다시 알림 중",until:"까지",use_24_hour_format:"24시간 형식 사용",settings:"설정"},status:{off:"꺼짐",armed:"설정됨",ringing:"울림",snoozed:"다시 알림"},days:{monday:"월요일",tuesday:"화요일",wednesday:"수요일",thursday:"목요일",friday:"금요일",saturday:"토요일",sunday:"일요일",mon:"월",tue:"화",wed:"수",thu:"목",fri:"금",sat:"토",sun:"일"}},ru:{card:{title:"Будильник",set_time:"Установить время",enable_alarm:"Включить будильник",disable_alarm:"Выключить будильник",snooze:"Повтор",dismiss:"Отключить",next_alarm:"Следующий будильник",alarm_in:"Будильник через:",snooze_ends_in:"Повтор закончится через:",snoozed:"Повтор",until:"До",use_24_hour_format:"Использовать 24-часовой формат",settings:"Настройки"},status:{off:"ВЫКЛ",armed:"ВКЛ",ringing:"ЗВОНИТ",snoozed:"ПОВТОР"},days:{monday:"Понедельник",tuesday:"Вторник",wednesday:"Среда",thursday:"Четверг",friday:"Пятница",saturday:"Суббота",sunday:"Воскресенье",mon:"Пн",tue:"Вт",wed:"Ср",thu:"Чт",fri:"Пт",sat:"Сб",sun:"Вс"}},pt:{card:{title:"Despertador",set_time:"Definir horário",enable_alarm:"Ativar alarme",disable_alarm:"Desativar alarme",snooze:"Soneca",dismiss:"Dispensar",next_alarm:"Próximo alarme",alarm_in:"Alarme em:",snooze_ends_in:"Soneca termina em:",snoozed:"Soneca",until:"Até",use_24_hour_format:"Usar formato 24 horas",settings:"Configurações"},status:{off:"DESLIGADO",armed:"LIGADO",ringing:"TOCANDO",snoozed:"SONECA"},days:{monday:"Segunda-feira",tuesday:"Terça-feira",wednesday:"Quarta-feira",thursday:"Quinta-feira",friday:"Sexta-feira",saturday:"Sábado",sunday:"Domingo",mon:"Seg",tue:"Ter",wed:"Qua",thu:"Qui",fri:"Sex",sat:"Sáb",sun:"Dom"}},it:{card:{title:"Sveglia",set_time:"Imposta orario",enable_alarm:"Attiva sveglia",disable_alarm:"Disattiva sveglia",snooze:"Posticipa",dismiss:"Interrompi",next_alarm:"Prossima sveglia",alarm_in:"Sveglia tra:",snooze_ends_in:"Posticipo termina tra:",snoozed:"Posticipata",until:"Fino a",use_24_hour_format:"Usa formato 24 ore",settings:"Impostazioni"},status:{off:"SPENTO",armed:"ATTIVO",ringing:"SUONA",snoozed:"POSTICIPATO"},days:{monday:"Lunedì",tuesday:"Martedì",wednesday:"Mercoledì",thursday:"Giovedì",friday:"Venerdì",saturday:"Sabato",sunday:"Domenica",mon:"Lun",tue:"Mar",wed:"Mer",thu:"Gio",fri:"Ven",sat:"Sab",sun:"Dom"}},nl:{card:{title:"Wekker",set_time:"Tijd instellen",enable_alarm:"Wekker inschakelen",disable_alarm:"Wekker uitschakelen",snooze:"Sluimeren",dismiss:"Uitschakelen",next_alarm:"Volgende wekker",alarm_in:"Wekker over:",snooze_ends_in:"Sluimeren eindigt over:",snoozed:"Sluimert",until:"Tot",use_24_hour_format:"Gebruik 24-uurs formaat",settings:"Instellingen"},status:{off:"UIT",armed:"AAN",ringing:"GAAT AF",snoozed:"SLUIMERT"},days:{monday:"Maandag",tuesday:"Dinsdag",wednesday:"Woensdag",thursday:"Donderdag",friday:"Vrijdag",saturday:"Zaterdag",sunday:"Zondag",mon:"Ma",tue:"Di",wed:"Wo",thu:"Do",fri:"Vr",sat:"Za",sun:"Zo"}},he:{card:{title:"שעון מעורר",set_time:"הגדר שעה",enable_alarm:"הפעל מעורר",disable_alarm:"בטל מעורר",snooze:"נודניק",dismiss:"כבה",next_alarm:"המעורר הבא",alarm_in:"מעורר בעוד:",snooze_ends_in:"הנודניק מסתיים בעוד:",snoozed:"נודניק",until:"עד",use_24_hour_format:"השתמש בפורמט 24 שעות",settings:"הגדרות"},status:{off:"כבוי",armed:"פעיל",ringing:"מצלצל",snoozed:"נודניק"},days:{monday:"יום שני",tuesday:"יום שלישי",wednesday:"יום רביעי",thursday:"יום חמישי",friday:"יום שישי",saturday:"יום שבת",sunday:"יום ראשון",mon:"ב׳",tue:"ג׳",wed:"ד׳",thu:"ה׳",fri:"ו׳",sat:"ש׳",sun:"א׳"}},ar:{card:{title:"ساعة المنبه",set_time:"تحديد الوقت",enable_alarm:"تشغيل المنبه",disable_alarm:"إيقاف المنبه",snooze:"غفوة",dismiss:"إلغاء",next_alarm:"المنبه التالي",alarm_in:"المنبه خلال:",snooze_ends_in:"انتهاء الغفوة خلال:",snoozed:"غفوة",until:"حتى",use_24_hour_format:"استخدم تنسيق 24 ساعة",settings:"الإعدادات"},status:{off:"مغلق",armed:"مضبوط",ringing:"يرن",snoozed:"غفوة"},days:{monday:"الاثنين",tuesday:"الثلاثاء",wednesday:"الأربعاء",thursday:"الخميس",friday:"الجمعة",saturday:"السبت",sunday:"الأحد",mon:"اث",tue:"ثل",wed:"أرب",thu:"خم",fri:"جم",sat:"سبت",sun:"أحد"}},hi:{card:{title:"अलार्म घड़ी",set_time:"समय सेट करें",enable_alarm:"अलार्म चालू करें",disable_alarm:"अलार्म बंद करें",snooze:"स्नूज़",dismiss:"बंद करें",next_alarm:"अगला अलार्म",alarm_in:"अलार्म में:",snooze_ends_in:"स्नूज़ समाप्त होगा:",snoozed:"स्नूज़ किया गया",until:"तक",use_24_hour_format:"24 घंटे का प्रारूप उपयोग करें",settings:"सेटिंग्स"},status:{off:"बंद",armed:"सेट",ringing:"बज रहा है",snoozed:"स्नूज़"},days:{monday:"सोमवार",tuesday:"मंगलवार",wednesday:"बुधवार",thursday:"गुरुवार",friday:"शुक्रवार",saturday:"शनिवार",sunday:"रविवार",mon:"सोम",tue:"मंगल",wed:"बुध",thu:"गुरु",fri:"शुक्र",sat:"शनि",sun:"रवि"}}};var u=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let _=class extends d.WF{constructor(){super(...arguments),this._showSettingsMenu=!1,this.entities={}}static async getConfigElement(){return document.createElement("alarm-clock-card-editor")}static getStubConfig(){return{type:"custom:alarm-clock-card",device_id:"",name:"Alarm Clock",show_time_picker:!0,show_days:!0,show_scripts:!0,show_snooze_info:!0}}get _translations(){var t;return function(t){const e=t.split("-")[0].toLowerCase();return h[e]||h.en}(this.hass?(t=this.hass,t?.language||t?.user?.language||navigator.language||"en"):"en")}_debug(t,...e){this.config?.debug&&console.log(t,...e)}_debugError(t,...e){this.config?.debug?console.error(t,...e):console.error(t.replace("🔍 ALARM CARD: ","ALARM CARD: "),...e)}setConfig(t){if(!t.device_id)throw new Error("You need to define a device_id");this.config={show_time_picker:!0,show_days:!0,show_scripts:!0,show_snooze_info:!0,...t}}shouldUpdate(t){return this._debug("🔍 ALARM CARD: shouldUpdate called",{hasConfig:!!this.config,hasHass:!!this.hass,hasEntities:Object.keys(this.entities).length>0,changedProps:Array.from(t.keys())}),this.config?(t.has("hass")&&this.hass&&this.config&&(0===Object.keys(this.entities).length?(this._debug("🔍 ALARM CARD: No entities yet, calling _updateEntities"),this._updateEntities()):(this._debug("🔍 ALARM CARD: Refreshing entity states"),this._refreshEntityStates())),t.has("config")||t.has("hass")||t.has("entities")):(this._debug("🔍 ALARM CARD: No config, returning false"),!1)}_refreshEntityStates(){let t=!1;const e={...this.entities,days:{...this.entities.days}};for(const[i,s]of Object.entries(this.entities))if("days"!==i&&s&&s.entity_id){const n=this.hass.states[s.entity_id];!n||n.state===s.state&&n.last_updated===s.last_updated||(this._debug(`🔍 ALARM CARD: ${i} entity changed:`,s.state,"→",n.state),e[i]=n,t=!0)}if(this.entities.days)for(const[i,s]of Object.entries(this.entities.days))if(s&&s.entity_id){const n=this.hass.states[s.entity_id];!n||n.state===s.state&&n.last_updated===s.last_updated||(this._debug(`🔍 ALARM CARD: Day ${i} entity changed:`,s.state,"→",n.state),e.days[i]=n,t=!0)}t&&(this._debug("🔍 ALARM CARD: Changes detected, updating entities object"),this.entities=e)}async _updateEntities(){if(this.hass&&this.config.device_id){this._debug("🔍 ALARM CARD: Looking for entities for device:",this.config.device_id);try{const t=await this.hass.callWS({type:"config/entity_registry/list"});this._debug("🔍 ALARM CARD: Entity registry loaded, total entities:",t.length);const e=t.filter(t=>t.device_id===this.config.device_id);this._debug("🔍 ALARM CARD: Found device entities:",e.length,e);let i=null;for(const t of e)if(t.unique_id&&t.entity_id.startsWith("sensor.")&&t.unique_id&&!t.unique_id.includes("_")){i=t.unique_id,this._debug("🔍 ALARM CARD: Found coordinator unique_id:",i);break}if(!i)return this._debugError("🔍 ALARM CARD: Could not find coordinator unique_id"),void(this.entities={});const s={days:{}};this._debug("🔍 ALARM CARD: Processing device entities using unique_id patterns:");for(const t of e){if(this._debug("🔍 ALARM CARD: Checking entity:",t.entity_id,"unique_id:",t.unique_id),!t.unique_id){this._debug("🔍 ALARM CARD: No unique_id found for:",t.entity_id);continue}const e=this.hass.states[t.entity_id],n=t.unique_id;if(n===i)this._debug("🔍 ALARM CARD: Found MAIN entity:",t.entity_id),s.main=e||{entity_id:t.entity_id,state:"unknown"};else if(n===`${i}_alarm_time`)this._debug("🔍 ALARM CARD: Found TIME entity:",t.entity_id),s.time=e||{entity_id:t.entity_id,state:"07:00"};else if(n===`${i}_alarm_enabled`)this._debug("🔍 ALARM CARD: Found MAIN ENABLED entity:",t.entity_id),s.enabled=e||{entity_id:t.entity_id,state:"off"};else if(n===`${i}_alarm_status`)this._debug("🔍 ALARM CARD: Found STATUS entity:",t.entity_id),s.status=e||{entity_id:t.entity_id,state:"off"};else if(n===`${i}_next_alarm`)this._debug("🔍 ALARM CARD: Found NEXT_ALARM entity:",t.entity_id),s.nextAlarm=e||{entity_id:t.entity_id,state:null};else if(n===`${i}_time_until_alarm`)this._debug("🔍 ALARM CARD: Found TIME_UNTIL entity:",t.entity_id),s.timeUntil=e||{entity_id:t.entity_id,state:null};else if(n.startsWith(`${i}_`)&&n!==`${i}_alarm_enabled`){const i=n.match(/_(\w+)$/);if(i&&"enabled"!==i[1]){const n=i[1];["monday","tuesday","wednesday","thursday","friday","saturday","sunday"].includes(n)&&(this._debug("🔍 ALARM CARD: Found DAY entity:",t.entity_id,n),s.days[n]=e||{entity_id:t.entity_id,state:"off"})}}else this._debug("🔍 ALARM CARD: Unmatched entity:",t.entity_id,n)}this._debug("🔍 ALARM CARD: Final mapped entities:",s),this._debug("🔍 ALARM CARD: Entity count - main:",!!s.main,"time:",!!s.time,"enabled:",!!s.enabled,"days:",Object.keys(s.days||{}).length),this.entities=s}catch(t){this._debugError("🔍 ALARM CARD: Error loading entity registry:",t),this.entities={}}}else this._debugError("🔍 ALARM CARD: Missing hass or device_id:",{hass:!!this.hass,device_id:this.config.device_id})}render(){if(!this.config||0===Object.keys(this.entities).length)return d.qy`
        <ha-card>
          <div class="warning">
            ${this.config?`Device not available: ${this.config.device_id}`:"No configuration"}
          </div>
        </ha-card>
      `;const t=this.entities.time?.entity_id?this.hass.states[this.entities.time.entity_id]:null,e=this.entities.enabled?.entity_id?this.hass.states[this.entities.enabled.entity_id]:null,i=this.entities.main?.entity_id?this.hass.states[this.entities.main.entity_id]:null,s=t?.state||"07:00",n=this._formatTime(s),o="on"===e?.state,r=i?.state||"off";this._debug("🔍 ALARM CARD: Status logic debug (FRESH DATA):",{timeEntityId:this.entities.time?.entity_id,enabledEntityId:this.entities.enabled?.entity_id,mainEntityId:this.entities.main?.entity_id,enabledEntityFreshState:e?.state,mainEntityFreshState:i?.state,isEnabled:o,finalStatus:r});const a=this.entities.nextAlarm?.attributes||{},l=this.entities.timeUntil?.attributes||{},c=this.entities.nextAlarm?.state,h=a.next_alarm_day,u=l.human_readable,_=l.countdown_type,m=Object.keys(this.entities.days||{}).filter(t=>"on"===this.entities.days[t]?.state);return this._debug("🎯 ALARM CARD: Rendering with entity states:",{alarmTime:n,isEnabled:o,status:r,nextAlarm:c,nextAlarmDay:h,timeUntil:u,countdownType:_,enabledDays:m,entities:this.entities}),d.qy`
      <ha-card @click=${this._handleCardClick}>
        <div class="card-content">
          <div class="header">
            <div class="title">${this.config.name||this._translations.card.title}</div>
            <div class="header-right">
              <div class="status ${r}">${this._getStatusTranslation(r)}</div>
              <div class="settings-menu">
                <button 
                  class="settings-button"
                  @click=${this._toggleSettingsMenu}
                  title="Settings"
                >
                  ⋮
                </button>
                ${this._showSettingsMenu?this._renderSettingsMenu():""}
              </div>
            </div>
          </div>

          <div class="time-display">
            <div class="alarm-time">${n}</div>
            ${c&&h?d.qy`<div class="next-alarm">${this._translations.card.next_alarm}: ${h} at ${this._formatTime(new Date(c).toTimeString().substring(0,5))}</div>`:d.qy``}
            ${u?d.qy`
                  <div class="countdown">
                    <span class="countdown-label">
                      ${"snooze"===_?this._translations.card.snooze_ends_in:this._translations.card.alarm_in}
                    </span>
                    <span class="countdown-time">${u}</span>
                  </div>
                `:d.qy``}
          </div>

          ${this.config.show_time_picker?this._renderTimePicker():d.qy``}
          ${this._renderControls(o,r)}
          ${this.config.show_days?this._renderDays(m):d.qy``}
          ${this.config.show_snooze_info&&"snoozed"===r?this._renderSnoozeInfo():d.qy``}
        </div>
      </ha-card>
    `}_renderTimePicker(){const t=this.entities.time?.state||"07:00";return d.qy`
      <div class="time-picker">
        <input
          type="time"
          class="time-input"
          id="alarm-time-input"
          .value=${t}
          value=${t}
          step="60"
          lang="en-GB"
          @change=${this._onTimeInputChange}
        />
        <mwc-button
          raised
          @click=${this._onSetTimeButtonClick}
          class="set-time-button"
        >
          ${this._translations.card.set_time}
        </mwc-button>
      </div>
    `}_renderControls(t,e){return d.qy`
      <div class="controls">
        <mwc-button
          raised
          class="control-button ${t?"danger":"primary"}"
          @click=${this._toggleAlarm}
        >
          ${t?this._translations.card.disable_alarm:this._translations.card.enable_alarm}
        </mwc-button>
        ${"ringing"===e?d.qy`
              <mwc-button
                outlined
                class="control-button secondary"
                @click=${this._snoozeAlarm}
              >
                ${this._translations.card.snooze}
              </mwc-button>
              <mwc-button
                raised
                class="control-button danger"
                @click=${this._dismissAlarm}
              >
                ${this._translations.card.dismiss}
              </mwc-button>
            `:d.qy``}
      </div>
    `}_renderDays(t){return d.qy`
      <div class="days-grid">
        ${["monday","tuesday","wednesday","thursday","friday","saturday","sunday"].map(e=>{const i=t.includes(e);return d.qy`
              <button
                class="day-button ${i?"active":""}"
                @click=${()=>this._toggleDay(e)}
              >
                ${this._getDayTranslation(e)}
              </button>
            `})}
      </div>
    `}_renderScriptsInfo(t){const e=[];return t.pre_alarm_enabled&&t.pre_alarm_script&&e.push({label:"Pre-alarm",value:`${t.pre_alarm_script} (${t.pre_alarm_minutes}m before)`}),t.alarm_script&&e.push({label:"Alarm",value:t.alarm_script}),t.post_alarm_enabled&&t.post_alarm_script&&e.push({label:"Post-alarm",value:`${t.post_alarm_script} (${t.post_alarm_minutes}m after)`}),0===e.length?d.qy``:d.qy`
      <div class="scripts-info">
        <div class="scripts-title">Configured Scripts</div>
        ${e.map(t=>d.qy`
            <div class="script-item">
              <span class="script-label">${t.label}:</span>
              <span class="script-value">${t.value}</span>
            </div>
          `)}
      </div>
    `}_renderSnoozeInfo(){const t=this.entities.timeUntil?.attributes||{},e=t.snooze_count||0,i=this.entities.main?.attributes?.max_snoozes||3,s=t.snooze_until;return d.qy`
      <div class="snooze-info">
        <div>${this._translations.card.snoozed} (${e}/${i})</div>
        ${s?d.qy`<div>${this._translations.card.until}: ${this._formatTime(new Date(s).toTimeString().substring(0,5))}</div>`:d.qy``}
      </div>
    `}_onTimeInputChange(t){}_onSetTimeButtonClick(t){const e=this.shadowRoot?.querySelector("#alarm-time-input");if(e){const t=e.value;this._setAlarmTime(t)}}_setAlarmTime(t){this._debug("⏰ ALARM CARD: Setting alarm time to:",t),t&&this.config.device_id?(this._debug("⏰ ALARM CARD: Calling alarm_clock.set_alarm service:",{device_id:this.config.device_id,time:t}),this.hass.callService("alarm_clock","set_alarm",{device_id:this.config.device_id,time:t}),setTimeout(()=>this._refreshEntityStates(),100)):this._debugError("ALARM CARD: Cannot set time - missing time or device_id:",{time:t,device_id:this.config.device_id})}_toggleAlarm(){if(this._debug("🔘 ALARM CARD: Toggle alarm button clicked"),!this.config.device_id||!this.hass)return void this._debugError("ALARM CARD: Cannot toggle alarm - no device_id found");const t="on"===this.entities.enabled?.state,e=t?"turn_off":"turn_on";this._debug("🔘 ALARM CARD: Toggling alarm via switch:",{device_id:this.config.device_id,currentEnabled:t,service:e}),this.hass.callService("switch",e,{entity_id:this.entities.enabled?.entity_id}),setTimeout(()=>this._refreshEntityStates(),100)}async _toggleDay(t){if(this._debug("📅 ALARM CARD: Toggle day clicked:",t),!this.config.device_id)return void this._debugError("ALARM CARD: Cannot toggle day - no device_id found:",t);const e=this.entities.days?.[t];if(!e)return void this._debugError("ALARM CARD: Cannot toggle day - no day entity found:",t);const i="on"===e.state,s=i?"turn_off":"turn_on";this._debug("📅 ALARM CARD: Toggling day switch:",{day:t,device_id:this.config.device_id,currentEnabled:i,service:s}),await this.hass.callService("switch",s,{entity_id:e.entity_id}),this._debug("📅 ALARM CARD: Service call completed, forcing refresh"),setTimeout(()=>this._refreshEntityStates(),100)}_snoozeAlarm(){this._debug("💤 ALARM CARD: Snooze button clicked"),this.config.device_id?(this._debug("💤 ALARM CARD: Calling snooze service:",this.config.device_id),this.hass.callService("alarm_clock","snooze",{device_id:this.config.device_id}),setTimeout(()=>this._refreshEntityStates(),100)):this._debugError("ALARM CARD: Cannot snooze - no device_id found")}_dismissAlarm(){this._debug("🛑 ALARM CARD: Dismiss button clicked"),this.config.device_id?(this._debug("🛑 ALARM CARD: Calling dismiss service:",this.config.device_id),this.hass.callService("alarm_clock","dismiss",{device_id:this.config.device_id}),setTimeout(()=>this._refreshEntityStates(),100)):this._debugError("ALARM CARD: Cannot dismiss - no device_id found")}_formatTime(t){return t&&"off"!==t?this.config.use_24_hour_format?t:this._formatTime12Hour(t):t}_formatTime12Hour(t){if(!t||"off"===t)return t;try{const[e,i]=t.split(":"),s=parseInt(e,10),n=parseInt(i,10),o=s>=12?"PM":"AM";return`${0===s?12:s>12?s-12:s}:${n.toString().padStart(2,"0")} ${o}`}catch(e){return t}}_getStatusTranslation(t){const e=t.toLowerCase();return this._translations.status[e]||t.toUpperCase()}_getDayTranslation(t){const e={monday:"mon",tuesday:"tue",wednesday:"wed",thursday:"thu",friday:"fri",saturday:"sat",sunday:"sun"}[t.toLowerCase()]||t.toLowerCase();return this._translations.days[e]||t.charAt(0).toUpperCase()+t.slice(1)}_toggleSettingsMenu(){this._showSettingsMenu=!this._showSettingsMenu}_renderSettingsMenu(){return d.qy`
      <div class="settings-dropdown" @click=${this._handleSettingsClick}>
        <label class="settings-option">
          <input
            type="checkbox"
            .checked=${this.config.use_24_hour_format||!1}
            @change=${this._toggle24HourFormat}
          />
          ${this._translations.card.use_24_hour_format}
        </label>
      </div>
    `}_handleSettingsClick(t){t.stopPropagation()}_toggle24HourFormat(t){const e=t.target.checked;this.config={...this.config,use_24_hour_format:e},c(this,"config-changed",{config:this.config}),this._showSettingsMenu=!1}_handleCardClick(t){this._showSettingsMenu&&!t.target?.closest(".settings-menu")&&(this._showSettingsMenu=!1)}getCardSize(){return 6}static get styles(){return d.AH`
      :host {
        display: block;
      }

      ha-card {
        height: 100%;
      }

      .card-content {
        padding: 24px;
      }

      .warning {
        display: block;
        color: var(--error-color);
        font-weight: 500;
        padding: 16px;
        text-align: center;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }

      .title {
        font-size: 24px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .status {
        font-size: 14px;
        padding: 4px 12px;
        border-radius: 16px;
        font-weight: 500;
        text-transform: uppercase;
      }

      .settings-menu {
        position: relative;
      }

      .settings-button {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);
        font-size: 18px;
        padding: 8px;
        cursor: pointer;
        color: #ffffff;
        border-radius: 50%;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        opacity: 0.8;
      }

      .settings-button:hover {
        background: rgba(255, 255, 255, 0.2);
        color: #ffffff;
        opacity: 1;
        transform: scale(1.05);
      }

      .settings-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        min-width: 200px;
        z-index: 1000;
        padding: 8px;
      }

      .settings-option {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.2s;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .settings-option:hover {
        background-color: var(--secondary-background-color);
      }

      .settings-option input[type="checkbox"] {
        margin: 0;
        cursor: pointer;
      }

      .status.off {
        background: var(--error-color);
        color: white;
      }
      .status.armed {
        background: var(--success-color);
        color: white;
      }
      .status.ringing {
        background: var(--warning-color);
        color: white;
        animation: blink 1s infinite;
      }
      .status.snoozed {
        background: var(--info-color);
        color: white;
      }

      @keyframes blink {
        0%,
        50% {
          opacity: 1;
        }
        51%,
        100% {
          opacity: 0.3;
        }
      }

      .time-display {
        text-align: center;
        margin: 20px 0;
      }

      .alarm-time {
        font-size: 48px;
        font-weight: 300;
        color: var(--primary-text-color);
        margin-bottom: 8px;
      }

      .next-alarm {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-bottom: 8px;
      }

      .countdown {
        margin-top: 8px;
      }

      .countdown-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        display: block;
        margin-bottom: 4px;
      }

      .countdown-time {
        font-size: 18px;
        font-weight: 500;
        color: var(--primary-color);
      }

      .time-picker {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin: 20px 0;
      }

      .time-input {
        padding: 8px 12px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        font-size: 16px;
        background: var(--card-background-color);
        color: var(--primary-text-color);
      }

      .set-time-button {
        --mdc-theme-primary: var(--primary-color);
        --mdc-theme-on-primary: var(--text-primary-color);
      }

      .controls {
        display: flex;
        gap: 12px;
        margin: 20px 0;
        flex-wrap: wrap;
      }

      .control-button {
        flex: 1;
        min-width: 120px;
      }

      .control-button.primary {
        --mdc-theme-primary: var(--primary-color);
        --mdc-theme-on-primary: var(--text-primary-color);
      }

      .control-button.secondary {
        --mdc-theme-primary: var(--secondary-text-color);
        --mdc-theme-on-primary: var(--primary-text-color);
      }

      .control-button.danger {
        --mdc-theme-primary: var(--error-color);
        --mdc-theme-on-primary: white;
      }

      .days-grid {
        display: flex;
        justify-content: space-between;
        gap: 4px;
        margin: 20px 0;
        overflow: visible;
      }

      .day-button {
        background: rgba(255, 255, 255, 0.15);
        color: #ffffff;
        border: none;
        outline: none;
        box-shadow: none;
        min-width: 40px;
        flex: 1;
        max-width: calc((100% - 30px) / 7);
        height: 36px;
        font-size: 11px;
        font-weight: 500;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-family: inherit;
      }

      .day-button:hover {
        background: rgba(255, 255, 255, 0.25);
        transform: translateY(-1px);
      }

      .day-button.active {
        background: #ff9800;
        color: #ffffff;
        box-shadow: 0 2px 4px rgba(255, 152, 0, 0.3);
      }

      .day-button.active:hover {
        background: #e68900;
        transform: translateY(-1px);
      }

      .scripts-info {
        margin-top: 20px;
        padding: 16px;
        background: var(--secondary-background-color);
        border-radius: 8px;
      }

      .scripts-title {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 12px;
        color: var(--primary-text-color);
      }

      .script-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        font-size: 14px;
        flex-wrap: wrap;
        gap: 8px;
      }

      .script-label {
        color: var(--secondary-text-color);
      }

      .script-value {
        color: var(--primary-text-color);
        font-weight: 500;
        text-align: right;
        flex: 1;
      }

      .snooze-info {
        margin-top: 16px;
        padding: 12px;
        background: var(--warning-color);
        color: white;
        border-radius: 8px;
        text-align: center;
      }

      @media (max-width: 600px) {
        .card-content {
          padding: 16px;
        }

        .alarm-time {
          font-size: 36px;
        }

        .controls {
          flex-direction: column;
        }

        .control-button {
          flex: none;
        }

        .script-item {
          flex-direction: column;
          gap: 4px;
        }

        .script-value {
          text-align: left;
        }
      }
    `}};u([(0,l.MZ)({attribute:!1})],_.prototype,"hass",void 0),u([(0,l.wk)()],_.prototype,"config",void 0),u([(0,l.wk)()],_.prototype,"_showSettingsMenu",void 0),u([(0,l.wk)()],_.prototype,"entities",void 0),_=u([(0,l.EM)("alarm-clock-card")],_),window.customCards=window.customCards||[],window.customCards.push({type:"alarm-clock-card",name:"Alarm Clock Card",description:"A card for displaying and controlling alarm clock entities",preview:!0,documentationURL:"https://github.com/siegeld/alarm-clock"}),console.info("%c  ALARM-CLOCK-CARD  %c  Version 2.0.17  ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");var m=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let p=class extends d.WF{constructor(){super(...arguments),this._searchValue="",this._showDropdown=!1,this._filteredDevices=[],this._allDevices=[]}setConfig(t){this._config=t}get _device_id(){return this._config?.device_id||""}get _name(){return this._config?.name||""}get _show_time_picker(){return!1!==this._config?.show_time_picker}get _show_days(){return!1!==this._config?.show_days}get _show_scripts(){return!1!==this._config?.show_scripts}get _show_snooze_info(){return!1!==this._config?.show_snooze_info}get _use_24_hour_format(){return this._config?.use_24_hour_format||!1}render(){return this.hass&&this._config?d.qy`
      <div class="card-config">
        <div class="option">
          <label>Alarm Clock Device (Required)</label>
          <div class="device-picker">
            <input
              type="text"
              class="device-input"
              placeholder="Search for alarm clock device..."
              .value=${this._searchValue}
              @input=${this._handleSearch}
              @focus=${this._showResults}
              @blur=${this._hideResults}
            />
            <div class="results-dropdown" ?hidden=${!this._showDropdown}>
              ${this._filteredDevices.map(t=>d.qy`
                <div class="result-item" @click=${()=>this._selectDevice(t)}>
                  <div class="device-name">${t.name}</div>
                  <div class="device-info">Device ID: ${t.id}</div>
                </div>
              `)}
            </div>
          </div>
        </div>

        <div class="option">
          <label>Card Name (Optional)</label>
          <ha-textfield
            .value=${this._name}
            placeholder="Alarm Clock"
            @input=${this._nameChanged}
          ></ha-textfield>
        </div>

        <div class="option switches-section">
          <label>Display Options</label>
          
          <ha-formfield label="Show time picker">
            <ha-switch
              .checked=${this._show_time_picker}
              @change=${t=>this._toggleChanged("show_time_picker",t)}
            ></ha-switch>
          </ha-formfield>
          
          <ha-formfield label="Show day toggles">
            <ha-switch
              .checked=${this._show_days}
              @change=${t=>this._toggleChanged("show_days",t)}
            ></ha-switch>
          </ha-formfield>
          
          <ha-formfield label="Show scripts info">
            <ha-switch
              .checked=${this._show_scripts}
              @change=${t=>this._toggleChanged("show_scripts",t)}
            ></ha-switch>
          </ha-formfield>
          
          <ha-formfield label="Show snooze info when snoozed">
            <ha-switch
              .checked=${this._show_snooze_info}
              @change=${t=>this._toggleChanged("show_snooze_info",t)}
            ></ha-switch>
          </ha-formfield>
          
          <ha-formfield label="Use 24-hour format">
            <ha-switch
              .checked=${this._use_24_hour_format}
              @change=${t=>this._toggleChanged("use_24_hour_format",t)}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `:d.qy``}async _loadDevices(){if(this.hass)try{const t=await this.hass.callWS({type:"config/device_registry/list"});this._allDevices=t.filter(t=>"Alarm Clock Integration"===t.manufacturer||"Alarm Clock"===t.model||t.name&&t.name.toLowerCase().includes("alarm")).map(t=>({id:t.id,name:t.name_by_user||t.name||`Device ${t.id.substring(0,8)}`,manufacturer:t.manufacturer,model:t.model})),this._filteredDevices=this._allDevices}catch(t){console.error("Failed to load device registry:",t),this._allDevices=[],this._filteredDevices=[]}}_handleSearch(t){const e=t.target,i=e.value.toLowerCase();this._searchValue=e.value,0===i.length?this._filteredDevices=this._allDevices:this._filteredDevices=this._allDevices.filter(t=>t.name.toLowerCase().includes(i)||t.id.toLowerCase().includes(i)),this._showDropdown=!0}_showResults(){0===this._allDevices.length&&this._loadDevices(),this._showDropdown=!0}_hideResults(){setTimeout(()=>{this._showDropdown=!1},150)}_selectDevice(t){this._searchValue=t.name,this._showDropdown=!1,this._config={...this._config,device_id:t.id},c(this,"config-changed",{config:this._config})}_nameChanged(t){if(!this._config||!this.hass)return;const e=t.target.value;this._config={...this._config,name:e},c(this,"config-changed",{config:this._config})}_toggleChanged(t,e){if(!this._config||!this.hass)return;const i=e.target.checked;this._config={...this._config,[t]:i},c(this,"config-changed",{config:this._config})}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i=e.configValue;if(this[`_${i}`]===e.value)return;let s;s="checkbox"===e.type?e.checked:e.value,i&&(this._config={...this._config,[i]:s}),c(this,"config-changed",{config:this._config})}static get styles(){return d.AH`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 16px;
      }

      .option {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .option label {
        font-weight: 500;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      ha-entity-picker {
        width: 100%;
      }

      ha-textfield {
        width: 100%;
      }

      ha-formfield {
        display: flex;
        align-items: center;
        margin: 8px 0;
      }

      .switches-section {
        border-top: 1px solid var(--divider-color);
        padding-top: 16px;
      }

      ha-switch {
        flex-shrink: 0;
      }

      .device-picker {
        position: relative;
        width: 100%;
      }

      .device-input {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        font-size: 14px;
        background: var(--card-background-color);
        color: var(--primary-text-color);
        box-sizing: border-box;
      }

      .device-input:focus {
        outline: none;
        border-color: var(--primary-color);
      }

      .results-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-top: none;
        border-radius: 0 0 4px 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        max-height: 200px;
        overflow-y: auto;
        z-index: 999;
      }

      .result-item {
        padding: 12px;
        cursor: pointer;
        border-bottom: 1px solid var(--divider-color);
        transition: background-color 0.2s;
      }

      .result-item:hover {
        background-color: var(--secondary-background-color);
      }

      .result-item:last-child {
        border-bottom: none;
      }

      .device-name {
        font-weight: 500;
        color: var(--primary-text-color);
        margin-bottom: 2px;
      }

      .device-info {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
    `}};m([(0,l.MZ)({attribute:!1})],p.prototype,"hass",void 0),m([(0,l.wk)()],p.prototype,"_config",void 0),m([(0,l.wk)()],p.prototype,"_helpers",void 0),m([(0,l.wk)()],p.prototype,"_searchValue",void 0),m([(0,l.wk)()],p.prototype,"_showDropdown",void 0),m([(0,l.wk)()],p.prototype,"_filteredDevices",void 0),m([(0,l.wk)()],p.prototype,"_allDevices",void 0),p=m([(0,l.EM)("alarm-clock-card-editor")],p)})();