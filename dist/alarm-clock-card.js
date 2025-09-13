/*! For license information please see alarm-clock-card.js.LICENSE.txt */
(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;class a{constructor(t,e,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=r.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(i,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new a(r,t,i)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var s;const d=window,c=d.trustedTypes,l=c?c.emptyScript:"",p=d.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:h},f="finalized";class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const r=this._$Ep(i,e);void 0!==r&&(this._$Ev.set(r,i),t.push(r))}),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const a=this[t];this[e]=r,this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var i;const r=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{e?i.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):r.forEach(e=>{const r=document.createElement("style"),a=t.litNonce;void 0!==a&&r.setAttribute("nonce",a),r.textContent=e.cssText,i.appendChild(r)})})(r,this.constructor.elementStyles),r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var r;const a=this.constructor._$Ep(t,i);if(void 0!==a&&!0===i.reflect){const o=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(a):this.setAttribute(a,o),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,a=r._$Ev.get(t);if(void 0!==a&&this._$El!==a){const t=r.getPropertyOptions(a),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=a,this[a]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var v;g[f]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:g}),(null!==(s=d.reactiveElementVersions)&&void 0!==s?s:d.reactiveElementVersions=[]).push("1.6.3");const b=window,y=b.trustedTypes,_=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,w="?"+A,$=`<${w}>`,S=document,C=()=>S.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,E="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,T=/>/g,M=RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,O=/"/g,I=/^(?:script|style|textarea|title)$/i,L=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),H=L(1),F=(L(2),Symbol.for("lit-noChange")),U=Symbol.for("lit-nothing"),N=new WeakMap,V=S.createTreeWalker(S,129,null,!1);function j(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==_?_.createHTML(e):e}const B=(t,e)=>{const i=t.length-1,r=[];let a,o=2===e?"<svg>":"",n=D;for(let e=0;e<i;e++){const i=t[e];let s,d,c=-1,l=0;for(;l<i.length&&(n.lastIndex=l,d=n.exec(i),null!==d);)l=n.lastIndex,n===D?"!--"===d[1]?n=z:void 0!==d[1]?n=T:void 0!==d[2]?(I.test(d[2])&&(a=RegExp("</"+d[2],"g")),n=M):void 0!==d[3]&&(n=M):n===M?">"===d[0]?(n=null!=a?a:D,c=-1):void 0===d[1]?c=-2:(c=n.lastIndex-d[2].length,s=d[1],n=void 0===d[3]?M:'"'===d[3]?O:P):n===O||n===P?n=M:n===z||n===T?n=D:(n=M,a=void 0);const p=n===M&&t[e+1].startsWith("/>")?" ":"";o+=n===D?i+$:c>=0?(r.push(s),i.slice(0,c)+x+i.slice(c)+A+p):i+A+(-2===c?(r.push(void 0),e):p)}return[j(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),r]};class G{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let a=0,o=0;const n=t.length-1,s=this.parts,[d,c]=B(t,e);if(this.el=G.createElement(d,i),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=V.nextNode())&&s.length<n;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith(x)||e.startsWith(A)){const i=c[o++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+x).split(A),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:a,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?K:"@"===e[1]?Q:X})}else s.push({type:6,index:a})}for(const e of t)r.removeAttribute(e)}if(I.test(r.tagName)){const t=r.textContent.split(A),e=t.length-1;if(e>0){r.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],C()),V.nextNode(),s.push({type:2,index:++a});r.append(t[e],C())}}}else if(8===r.nodeType)if(r.data===w)s.push({type:2,index:a});else{let t=-1;for(;-1!==(t=r.data.indexOf(A,t+1));)s.push({type:7,index:a}),t+=A.length-1}a++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,r){var a,o,n,s;if(e===F)return e;let d=void 0!==r?null===(a=i._$Co)||void 0===a?void 0:a[r]:i._$Cl;const c=k(e)?void 0:e._$litDirective$;return(null==d?void 0:d.constructor)!==c&&(null===(o=null==d?void 0:d._$AO)||void 0===o||o.call(d,!1),void 0===c?d=void 0:(d=new c(t),d._$AT(t,i,r)),void 0!==r?(null!==(n=(s=i)._$Co)&&void 0!==n?n:s._$Co=[])[r]=d:i._$Cl=d),void 0!==d&&(e=q(t,d._$AS(t,e.values),d,r)),e}class W{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:r}=this._$AD,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);V.currentNode=a;let o=V.nextNode(),n=0,s=0,d=r[0];for(;void 0!==d;){if(n===d.index){let e;2===d.type?e=new Z(o,o.nextSibling,this,t):1===d.type?e=new d.ctor(o,d.name,d.strings,this,t):6===d.type&&(e=new tt(o,this,t)),this._$AV.push(e),d=r[++s]}n!==(null==d?void 0:d.index)&&(o=V.nextNode(),n++)}return V.currentNode=S,a}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{constructor(t,e,i,r){var a;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cp=null===(a=null==r?void 0:r.isConnected)||void 0===a||a}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),k(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>R(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==U&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:r}=t,a="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=G.createElement(j(r.h,r.h[0]),this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===a)this._$AH.v(i);else{const t=new W(a,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new G(t)),e}T(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const a of t)r===e.length?e.push(i=new Z(this.k(C()),this.k(C()),this,this.options)):i=e[r],i._$AI(a),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class X{constructor(t,e,i,r,a){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const a=this.strings;let o=!1;if(void 0===a)t=q(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const r=t;let n,s;for(t=a[0],n=0;n<a.length-1;n++)s=q(this,r[i+n],e,n),s===F&&(s=this._$AH[n]),o||(o=!k(s)||s!==this._$AH[n]),s===U?t=U:t!==U&&(t+=(null!=s?s:"")+a[n+1]),this._$AH[n]=s}o&&!r&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const J=y?y.emptyScript:"";class K extends X{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class Q extends X{constructor(t,e,i,r,a){super(t,e,i,r,a),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=q(this,t,e,0))&&void 0!==i?i:U)===F)return;const r=this._$AH,a=t===U&&r!==U||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==U&&(r===U||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const et=b.litHtmlPolyfillSupport;var it,rt;null==et||et(G,Z),(null!==(v=b.litHtmlVersions)&&void 0!==v?v:b.litHtmlVersions=[]).push("2.8.0");class at extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var r,a;const o=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let n=o._$litPart$;if(void 0===n){const t=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:null;o._$litPart$=n=new Z(e.insertBefore(C(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return F}}at.finalized=!0,at._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:at});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:at}),(null!==(rt=globalThis.litElementVersions)&&void 0!==rt?rt:globalThis.litElementVersions=[]).push("3.3.3");const nt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){customElements.define(t,e)}}})(t,e),st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function dt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):st(t,e)}function ct(t){return dt({...t,state:!0})}const lt=({finisher:t,descriptor:e})=>(i,r)=>{var a;if(void 0===r){const r=null!==(a=i.originalKey)&&void 0!==a?a:i.key,o=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return null!=t&&(o.finisher=function(e){t(e,r)}),o}{const a=i.constructor;void 0!==e&&Object.defineProperty(i,r,e(r)),null==t||t(a,r)}};function pt(t,e){return lt({descriptor:i=>{const r={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[e]&&(this[e]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}var ut,ht,mt,ft;null===(ut=window.HTMLSlotElement)||void 0===ut||ut.prototype.assignedElements,(ft=ht||(ht={})).language="language",ft.system="system",ft.comma_decimal="comma_decimal",ft.decimal_comma="decimal_comma",ft.space_comma="space_comma",ft.none="none",function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(mt||(mt={})),new Set(["fan","input_boolean","light","switch","group","automation"]);var gt=function(t,e,i,r){r=r||{},i=null==i?{}:i;var a=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return a.detail=i,t.dispatchEvent(a),a};new Set(["call-service","divider","section","weblink","cast","select"]);var vt=function(t,e){return vt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},vt(t,e)};var bt=function(){return bt=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var a in e=arguments[i])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},bt.apply(this,arguments)};function yt(t,e,i,r){var a,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o<3?a(n):o>3?a(e,i,n):a(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}function _t(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],r=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;const xt=o`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;let At=class extends at{render(){return H`<span><slot></slot></span>`}};At.styles=[xt],At=yt([nt("mwc-icon")],At);let wt=!1;const $t=()=>{},St={get passive(){return wt=!0,!1}};document.addEventListener("x",$t,St),document.removeEventListener("x",$t);class Ct extends at{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}var kt=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),Rt={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Et={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Dt={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},zt=["touchstart","pointerdown","mousedown","keydown"],Tt=["touchend","pointerup","mouseup","contextmenu"],Mt=[],Pt=function(t){function e(i){var r=t.call(this,bt(bt({},e.defaultAdapter),i))||this;return r.activationAnimationHasEnded=!1,r.activationTimer=0,r.fgDeactivationRemovalTimer=0,r.fgScale="0",r.frame={width:0,height:0},r.initialSize=0,r.layoutFrame=0,r.maxRadius=0,r.unboundedCoords={left:0,top:0},r.activationState=r.defaultActivationState(),r.activationTimerCallback=function(){r.activationAnimationHasEnded=!0,r.runDeactivationUXLogicIfReady()},r.activateHandler=function(t){r.activateImpl(t)},r.deactivateHandler=function(){r.deactivateImpl()},r.focusHandler=function(){r.handleFocus()},r.blurHandler=function(){r.handleBlur()},r.resizeHandler=function(){r.layout()},r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}vt(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Rt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Et},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Dt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var r=e.cssClasses,a=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(a),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,r=i.ROOT,a=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(r),t.adapter.removeClass(a),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var e,i;if(t){try{for(var r=_t(zt),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(i=r.return)&&i.call(r)}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var e,i;if("keydown"===t.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=_t(Tt),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(i=r.return)&&i.call(r)}finally{if(e)throw e.error}}},e.prototype.deregisterRootHandlers=function(){var t,e;try{for(var i=_t(zt),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.deregisterInteractionHandler(a,this.activateHandler)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,e;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=_t(Tt),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.deregisterDocumentInteractionHandler(a,this.deactivateHandler)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,i=e.strings;Object.keys(i).forEach(function(e){0===e.indexOf("VAR_")&&t.adapter.updateCssVariable(i[e],null)})},e.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var r=this.previousActivationEvent;r&&void 0!==t&&r.type!==t.type||(i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),void 0!==t&&Mt.length>0&&Mt.some(function(t){return e.adapter.containsEventTarget(t)})?this.resetActivationState():(void 0!==t&&(Mt.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){Mt=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive(t),i.wasElementMadeActive&&e.animateActivation()),i.wasElementMadeActive||(e.activationState=e.defaultActivationState())})))}}},e.prototype.checkElementMadeActive=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},e.prototype.animateActivation=function(){var t=this,i=e.strings,r=i.VAR_FG_TRANSLATE_START,a=i.VAR_FG_TRANSLATE_END,o=e.cssClasses,n=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,d=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var c="",l="";if(!this.adapter.isUnbounded()){var p=this.getFgTranslationCoordinates(),u=p.startPoint,h=p.endPoint;c=u.x+"px, "+u.y+"px",l=h.x+"px, "+h.y+"px"}this.adapter.updateCssVariable(r,c),this.adapter.updateCssVariable(a,l),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(n),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},d)},e.prototype.getFgTranslationCoordinates=function(){var t,e=this.activationState,i=e.activationEvent;return t=e.wasActivatedByPointer?function(t,e,i){if(!t)return{x:0,y:0};var r,a,o=e.x,n=e.y,s=o+i.left,d=n+i.top;if("touchstart"===t.type){var c=t;r=c.changedTouches[0].pageX-s,a=c.changedTouches[0].pageY-d}else{var l=t;r=l.pageX-s,a=l.pageY-d}return{x:r,y:a}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2},{startPoint:t={x:t.x-this.initialSize/2,y:t.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,r=this.activationState,a=r.hasDeactivationUXRun,o=r.isActivated;(a||!o)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(i)},Dt.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,e=this.activationState;if(e.isActivated){var i=bt({},e);e.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(i),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){this.frame=this.adapter.computeBoundingRect();var t=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?t:Math.sqrt(Math.pow(this.frame.width,2)+Math.pow(this.frame.height,2))+e.numbers.PADDING;var i=Math.floor(t*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&i%2!=0?this.initialSize=i-1:this.initialSize=i,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,i=t.VAR_FG_SIZE,r=t.VAR_LEFT,a=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(a,this.unboundedCoords.top+"px"))},e}(kt);const Ot=Pt,It=t=>(...e)=>({_$litDirective$:t,values:e});class Lt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const Ht=It(class extends Lt{constructor(t){var e;if(super(t),1!==t.type||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,r;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(t))&&this.it.add(t);return this.render(e)}const a=t.element.classList;this.it.forEach(t=>{t in e||(a.remove(t),this.it.delete(t))});for(const t in e){const i=!!e[t];i===this.it.has(t)||(null===(r=this.nt)||void 0===r?void 0:r.has(t))||(i?(a.add(t),this.it.add(t)):(a.remove(t),this.it.delete(t)))}return F}}),Ft="important",Ut=" !"+Ft,Nt=It(class extends Lt{constructor(t){var e;if(super(t),1!==t.type||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach(t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")});for(const t in e){const r=e[t];if(null!=r){this.ht.add(t);const e="string"==typeof r&&r.endsWith(Ut);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?Ft:""):i[t]=r}}return F}});class Vt extends Ct{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.internalUseStateLayerCustomProperties=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=Ot}get isActive(){return t=this.parentElement||this,e=":active",(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e);var t,e}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(t,e)=>{switch(t){case"--mdc-ripple-fg-scale":this.fgScale=e;break;case"--mdc-ripple-fg-size":this.fgSize=e;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=e;break;case"--mdc-ripple-fg-translate-start":this.translateStart=e;break;case"--mdc-ripple-left":this.leftPos=e;break;case"--mdc-ripple-top":this.topPos=e}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(t){this.waitForFoundation(()=>{this.mdcFoundation.activate(t)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(t){this.mdcFoundation?t():this.updateComplete.then(t)}update(t){t.has("disabled")&&this.disabled&&this.endHover(),super.update(t)}render(){const t=this.activated&&(this.primary||!this.accent),e=this.selected&&(this.primary||!this.accent),i={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":t,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":e,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties};return H`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ht(i)}"
          style="${Nt({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}yt([pt(".mdc-ripple-surface")],Vt.prototype,"mdcRoot",void 0),yt([dt({type:Boolean})],Vt.prototype,"primary",void 0),yt([dt({type:Boolean})],Vt.prototype,"accent",void 0),yt([dt({type:Boolean})],Vt.prototype,"unbounded",void 0),yt([dt({type:Boolean})],Vt.prototype,"disabled",void 0),yt([dt({type:Boolean})],Vt.prototype,"activated",void 0),yt([dt({type:Boolean})],Vt.prototype,"selected",void 0),yt([dt({type:Boolean})],Vt.prototype,"internalUseStateLayerCustomProperties",void 0),yt([ct()],Vt.prototype,"hovering",void 0),yt([ct()],Vt.prototype,"bgFocused",void 0),yt([ct()],Vt.prototype,"fgActivation",void 0),yt([ct()],Vt.prototype,"fgDeactivation",void 0),yt([ct()],Vt.prototype,"fgScale",void 0),yt([ct()],Vt.prototype,"fgSize",void 0),yt([ct()],Vt.prototype,"translateStart",void 0),yt([ct()],Vt.prototype,"translateEnd",void 0),yt([ct()],Vt.prototype,"leftPos",void 0),yt([ct()],Vt.prototype,"topPos",void 0);const jt=o`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;let Bt=class extends Vt{};Bt.styles=[jt],Bt=yt([nt("mwc-ripple")],Bt);class Gt{constructor(t){this.startPress=e=>{t().then(t=>{t&&t.startPress(e)})},this.endPress=()=>{t().then(t=>{t&&t.endPress()})},this.startFocus=()=>{t().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{t().then(t=>{t&&t.endFocus()})},this.startHover=()=>{t().then(t=>{t&&t.startHover()})},this.endHover=()=>{t().then(t=>{t&&t.endHover()})}}}class qt extends at{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.expandContent=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new Gt(()=>(this.shouldRenderRipple=!0,this.ripple))}renderOverlay(){return H``}renderRipple(){const t=this.raised||this.unelevated;return this.shouldRenderRipple?H`<mwc-ripple class="ripple" .primary="${!t}" .disabled="${this.disabled}"></mwc-ripple>`:""}focus(){const t=this.buttonElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.buttonElement;t&&(this.rippleHandlers.endFocus(),t.blur())}getRenderClasses(){return{"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense}}render(){return H`
      <button
          id="button"
          class="mdc-button ${Ht(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          aria-haspopup="${(t=>null!=t?t:U)(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${Ht({flex:this.expandContent})}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return H`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}qt.shadowRootOptions={mode:"open",delegatesFocus:!0},yt([function(t,e,i){if(void 0!==e)return function(t,e,i){const r=t.constructor;if(!i){const t=`__${e}`;if(!(i=r.getPropertyDescriptor(e,t)))throw new Error("@ariaProperty must be used after a @property decorator")}const a=i;let o="";if(!a.set)throw new Error(`@ariaProperty requires a setter for ${e}`);if(t.dispatchWizEvent)return i;const n={configurable:!0,enumerable:!0,set(t){if(""===o){const t=r.getPropertyOptions(e);o="string"==typeof t.attribute?t.attribute:e}this.hasAttribute(o)&&this.removeAttribute(o),a.set.call(this,t)}};return a.get&&(n.get=function(){return a.get.call(this)}),n}(t,e,i);throw new Error("@ariaProperty only supports TypeScript Decorators")},dt({type:String,attribute:"aria-haspopup"})],qt.prototype,"ariaHasPopup",void 0),yt([dt({type:Boolean,reflect:!0})],qt.prototype,"raised",void 0),yt([dt({type:Boolean,reflect:!0})],qt.prototype,"unelevated",void 0),yt([dt({type:Boolean,reflect:!0})],qt.prototype,"outlined",void 0),yt([dt({type:Boolean})],qt.prototype,"dense",void 0),yt([dt({type:Boolean,reflect:!0})],qt.prototype,"disabled",void 0),yt([dt({type:Boolean,attribute:"trailingicon"})],qt.prototype,"trailingIcon",void 0),yt([dt({type:Boolean,reflect:!0})],qt.prototype,"fullwidth",void 0),yt([dt({type:String})],qt.prototype,"icon",void 0),yt([dt({type:String})],qt.prototype,"label",void 0),yt([dt({type:Boolean})],qt.prototype,"expandContent",void 0),yt([pt("#button")],qt.prototype,"buttonElement",void 0),yt([lt({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector("mwc-ripple")},enumerable:!0,configurable:!0})})],qt.prototype,"ripple",void 0),yt([ct()],qt.prototype,"shouldRenderRipple",void 0),yt([function(t){return lt({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}({passive:!0})],qt.prototype,"handleRippleActivate",null);const Wt=o`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px );display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;let Zt=class extends qt{};Zt.styles=[Wt],Zt=yt([nt("mwc-button")],Zt);const Xt={en:{card:{title:"Alarm Clock",set_time:"Set Time",enable_alarm:"Enable Alarm",disable_alarm:"Disable Alarm",snooze:"Snooze",dismiss:"Dismiss",next_alarm:"Next alarm",alarm_in:"Alarm in:",snooze_ends_in:"Snooze ends in:",snoozed:"Snoozed",until:"Until",use_24_hour_format:"Use 24-hour format",settings:"Settings"},status:{off:"OFF",armed:"ARMED",ringing:"RINGING",snoozed:"SNOOZED"},days:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat",sun:"Sun"}},de:{card:{title:"Wecker",set_time:"Zeit einstellen",enable_alarm:"Wecker aktivieren",disable_alarm:"Wecker deaktivieren",snooze:"Schlummern",dismiss:"Ausschalten",next_alarm:"Nächster Wecker",alarm_in:"Wecker in:",snooze_ends_in:"Schlummern endet in:",snoozed:"Schlummert",until:"Bis",use_24_hour_format:"24-Stunden-Format verwenden",settings:"Einstellungen"},status:{off:"AUS",armed:"AKTIV",ringing:"KLINGELT",snoozed:"SCHLUMMERT"},days:{monday:"Montag",tuesday:"Dienstag",wednesday:"Mittwoch",thursday:"Donnerstag",friday:"Freitag",saturday:"Samstag",sunday:"Sonntag",mon:"Mo",tue:"Di",wed:"Mi",thu:"Do",fri:"Fr",sat:"Sa",sun:"So"}},es:{card:{title:"Despertador",set_time:"Establecer hora",enable_alarm:"Activar alarma",disable_alarm:"Desactivar alarma",snooze:"Posponer",dismiss:"Descartar",next_alarm:"Próxima alarma",alarm_in:"Alarma en:",snooze_ends_in:"Posposición termina en:",snoozed:"Pospuesta",until:"Hasta",use_24_hour_format:"Usar formato de 24 horas",settings:"Configuración"},status:{off:"APAGADA",armed:"ARMADA",ringing:"SONANDO",snoozed:"POSPUESTA"},days:{monday:"Lunes",tuesday:"Martes",wednesday:"Miércoles",thursday:"Jueves",friday:"Viernes",saturday:"Sábado",sunday:"Domingo",mon:"Lun",tue:"Mar",wed:"Mié",thu:"Jue",fri:"Vie",sat:"Sáb",sun:"Dom"}},fr:{card:{title:"Réveil",set_time:"Définir l'heure",enable_alarm:"Activer le réveil",disable_alarm:"Désactiver le réveil",snooze:"Reporter",dismiss:"Arrêter",next_alarm:"Prochain réveil",alarm_in:"Réveil dans:",snooze_ends_in:"Report se termine dans:",snoozed:"Reporté",until:"Jusqu'à",use_24_hour_format:"Utiliser le format 24 heures",settings:"Paramètres"},status:{off:"ARRÊTÉ",armed:"ARMÉ",ringing:"SONNERIE",snoozed:"REPORTÉ"},days:{monday:"Lundi",tuesday:"Mardi",wednesday:"Mercredi",thursday:"Jeudi",friday:"Vendredi",saturday:"Samedi",sunday:"Dimanche",mon:"Lun",tue:"Mar",wed:"Mer",thu:"Jeu",fri:"Ven",sat:"Sam",sun:"Dim"}},sl:{card:{title:"Budilka",set_time:"Nastavi čas",enable_alarm:"Vključi budilko",disable_alarm:"Izključi budilko",snooze:"Odloži",dismiss:"Ustavi",next_alarm:"Naslednja budilka",alarm_in:"Budilka čez:",snooze_ends_in:"Odlog se konča čez:",snoozed:"Odloženo",until:"Do",use_24_hour_format:"Uporabi 24-urni format",settings:"Nastavitve"},status:{off:"IZKLOPLJENO",armed:"VKLOPLJENO",ringing:"ZVONI",snoozed:"ODLOŽENO"},days:{monday:"Ponedeljek",tuesday:"Torek",wednesday:"Sreda",thursday:"Četrtek",friday:"Petek",saturday:"Sobota",sunday:"Nedelja",mon:"Pon",tue:"Tor",wed:"Sre",thu:"Čet",fri:"Pet",sat:"Sob",sun:"Ned"}},zh:{card:{title:"闹钟",set_time:"设置时间",enable_alarm:"启用闹钟",disable_alarm:"禁用闹钟",snooze:"小睡",dismiss:"关闭",next_alarm:"下次闹钟",alarm_in:"闹钟将在：",snooze_ends_in:"小睡结束时间：",snoozed:"小睡中",until:"直到",use_24_hour_format:"使用24小时格式",settings:"设置"},status:{off:"关闭",armed:"已设置",ringing:"响铃中",snoozed:"小睡中"},days:{monday:"星期一",tuesday:"星期二",wednesday:"星期三",thursday:"星期四",friday:"星期五",saturday:"星期六",sunday:"星期日",mon:"周一",tue:"周二",wed:"周三",thu:"周四",fri:"周五",sat:"周六",sun:"周日"}},ja:{card:{title:"アラーム時計",set_time:"時刻設定",enable_alarm:"アラーム有効",disable_alarm:"アラーム無効",snooze:"スヌーズ",dismiss:"停止",next_alarm:"次のアラーム",alarm_in:"アラームまで：",snooze_ends_in:"スヌーズ終了まで：",snoozed:"スヌーズ中",until:"まで",use_24_hour_format:"24時間表示を使用",settings:"設定"},status:{off:"オフ",armed:"セット済み",ringing:"鳴動中",snoozed:"スヌーズ中"},days:{monday:"月曜日",tuesday:"火曜日",wednesday:"水曜日",thursday:"木曜日",friday:"金曜日",saturday:"土曜日",sunday:"日曜日",mon:"月",tue:"火",wed:"水",thu:"木",fri:"金",sat:"土",sun:"日"}},ko:{card:{title:"알람 시계",set_time:"시간 설정",enable_alarm:"알람 켜기",disable_alarm:"알람 끄기",snooze:"다시 알림",dismiss:"해제",next_alarm:"다음 알람",alarm_in:"알람까지：",snooze_ends_in:"다시 알림 종료까지：",snoozed:"다시 알림 중",until:"까지",use_24_hour_format:"24시간 형식 사용",settings:"설정"},status:{off:"꺼짐",armed:"설정됨",ringing:"울림",snoozed:"다시 알림"},days:{monday:"월요일",tuesday:"화요일",wednesday:"수요일",thursday:"목요일",friday:"금요일",saturday:"토요일",sunday:"일요일",mon:"월",tue:"화",wed:"수",thu:"목",fri:"금",sat:"토",sun:"일"}},ru:{card:{title:"Будильник",set_time:"Установить время",enable_alarm:"Включить будильник",disable_alarm:"Выключить будильник",snooze:"Повтор",dismiss:"Отключить",next_alarm:"Следующий будильник",alarm_in:"Будильник через:",snooze_ends_in:"Повтор закончится через:",snoozed:"Повтор",until:"До",use_24_hour_format:"Использовать 24-часовой формат",settings:"Настройки"},status:{off:"ВЫКЛ",armed:"ВКЛ",ringing:"ЗВОНИТ",snoozed:"ПОВТОР"},days:{monday:"Понедельник",tuesday:"Вторник",wednesday:"Среда",thursday:"Четверг",friday:"Пятница",saturday:"Суббота",sunday:"Воскресенье",mon:"Пн",tue:"Вт",wed:"Ср",thu:"Чт",fri:"Пт",sat:"Сб",sun:"Вс"}},pt:{card:{title:"Despertador",set_time:"Definir horário",enable_alarm:"Ativar alarme",disable_alarm:"Desativar alarme",snooze:"Soneca",dismiss:"Dispensar",next_alarm:"Próximo alarme",alarm_in:"Alarme em:",snooze_ends_in:"Soneca termina em:",snoozed:"Soneca",until:"Até",use_24_hour_format:"Usar formato 24 horas",settings:"Configurações"},status:{off:"DESLIGADO",armed:"LIGADO",ringing:"TOCANDO",snoozed:"SONECA"},days:{monday:"Segunda-feira",tuesday:"Terça-feira",wednesday:"Quarta-feira",thursday:"Quinta-feira",friday:"Sexta-feira",saturday:"Sábado",sunday:"Domingo",mon:"Seg",tue:"Ter",wed:"Qua",thu:"Qui",fri:"Sex",sat:"Sáb",sun:"Dom"}},it:{card:{title:"Sveglia",set_time:"Imposta orario",enable_alarm:"Attiva sveglia",disable_alarm:"Disattiva sveglia",snooze:"Posticipa",dismiss:"Interrompi",next_alarm:"Prossima sveglia",alarm_in:"Sveglia tra:",snooze_ends_in:"Posticipo termina tra:",snoozed:"Posticipata",until:"Fino a",use_24_hour_format:"Usa formato 24 ore",settings:"Impostazioni"},status:{off:"SPENTO",armed:"ATTIVO",ringing:"SUONA",snoozed:"POSTICIPATO"},days:{monday:"Lunedì",tuesday:"Martedì",wednesday:"Mercoledì",thursday:"Giovedì",friday:"Venerdì",saturday:"Sabato",sunday:"Domenica",mon:"Lun",tue:"Mar",wed:"Mer",thu:"Gio",fri:"Ven",sat:"Sab",sun:"Dom"}},nl:{card:{title:"Wekker",set_time:"Tijd instellen",enable_alarm:"Wekker inschakelen",disable_alarm:"Wekker uitschakelen",snooze:"Sluimeren",dismiss:"Uitschakelen",next_alarm:"Volgende wekker",alarm_in:"Wekker over:",snooze_ends_in:"Sluimeren eindigt over:",snoozed:"Sluimert",until:"Tot",use_24_hour_format:"Gebruik 24-uurs formaat",settings:"Instellingen"},status:{off:"UIT",armed:"AAN",ringing:"GAAT AF",snoozed:"SLUIMERT"},days:{monday:"Maandag",tuesday:"Dinsdag",wednesday:"Woensdag",thursday:"Donderdag",friday:"Vrijdag",saturday:"Zaterdag",sunday:"Zondag",mon:"Ma",tue:"Di",wed:"Wo",thu:"Do",fri:"Vr",sat:"Za",sun:"Zo"}},he:{card:{title:"שעון מעורר",set_time:"הגדר שעה",enable_alarm:"הפעל מעורר",disable_alarm:"בטל מעורר",snooze:"נודניק",dismiss:"כבה",next_alarm:"המעורר הבא",alarm_in:"מעורר בעוד:",snooze_ends_in:"הנודניק מסתיים בעוד:",snoozed:"נודניק",until:"עד",use_24_hour_format:"השתמש בפורמט 24 שעות",settings:"הגדרות"},status:{off:"כבוי",armed:"פעיל",ringing:"מצלצל",snoozed:"נודניק"},days:{monday:"יום שני",tuesday:"יום שלישי",wednesday:"יום רביעי",thursday:"יום חמישי",friday:"יום שישי",saturday:"יום שבת",sunday:"יום ראשון",mon:"ב׳",tue:"ג׳",wed:"ד׳",thu:"ה׳",fri:"ו׳",sat:"ש׳",sun:"א׳"}},ar:{card:{title:"ساعة المنبه",set_time:"تحديد الوقت",enable_alarm:"تشغيل المنبه",disable_alarm:"إيقاف المنبه",snooze:"غفوة",dismiss:"إلغاء",next_alarm:"المنبه التالي",alarm_in:"المنبه خلال:",snooze_ends_in:"انتهاء الغفوة خلال:",snoozed:"غفوة",until:"حتى",use_24_hour_format:"استخدم تنسيق 24 ساعة",settings:"الإعدادات"},status:{off:"مغلق",armed:"مضبوط",ringing:"يرن",snoozed:"غفوة"},days:{monday:"الاثنين",tuesday:"الثلاثاء",wednesday:"الأربعاء",thursday:"الخميس",friday:"الجمعة",saturday:"السبت",sunday:"الأحد",mon:"اث",tue:"ثل",wed:"أرب",thu:"خم",fri:"جم",sat:"سبت",sun:"أحد"}},hi:{card:{title:"अलार्म घड़ी",set_time:"समय सेट करें",enable_alarm:"अलार्म चालू करें",disable_alarm:"अलार्म बंद करें",snooze:"स्नूज़",dismiss:"बंद करें",next_alarm:"अगला अलार्म",alarm_in:"अलार्म में:",snooze_ends_in:"स्नूज़ समाप्त होगा:",snoozed:"स्नूज़ किया गया",until:"तक",use_24_hour_format:"24 घंटे का प्रारूप उपयोग करें",settings:"सेटिंग्स"},status:{off:"बंद",armed:"सेट",ringing:"बज रहा है",snoozed:"स्नूज़"},days:{monday:"सोमवार",tuesday:"मंगलवार",wednesday:"बुधवार",thursday:"गुरुवार",friday:"शुक्रवार",saturday:"शनिवार",sunday:"रविवार",mon:"सोम",tue:"मंगल",wed:"बुध",thu:"गुरु",fri:"शुक्र",sat:"शनि",sun:"रवि"}}};var Yt=function(t,e,i,r){var a,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o<3?a(n):o>3?a(e,i,n):a(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let Jt=class extends at{constructor(){super(...arguments),this._showSettingsMenu=!1,this.entities={}}static async getConfigElement(){return document.createElement("alarm-clock-card-editor")}static getStubConfig(){return{type:"custom:alarm-clock-card",device_id:"",name:"Alarm Clock",show_time_picker:!0,show_days:!0,show_scripts:!0,show_snooze_info:!0}}get _translations(){var t;return function(t){const e=t.split("-")[0].toLowerCase();return Xt[e]||Xt.en}(this.hass?(t=this.hass,t?.language||t?.user?.language||navigator.language||"en"):"en")}_debug(t,...e){this.config?.debug&&console.log(t,...e)}_debugError(t,...e){this.config?.debug?console.error(t,...e):console.error(t.replace("🔍 ALARM CARD: ","ALARM CARD: "),...e)}setConfig(t){if(!t.device_id)throw new Error("You need to define a device_id");this.config={show_time_picker:!0,show_days:!0,show_scripts:!0,show_snooze_info:!0,...t}}shouldUpdate(t){return this._debug("🔍 ALARM CARD: shouldUpdate called",{hasConfig:!!this.config,hasHass:!!this.hass,hasEntities:Object.keys(this.entities).length>0,changedProps:Array.from(t.keys())}),this.config?(t.has("hass")&&this.hass&&this.config&&(0===Object.keys(this.entities).length?(this._debug("🔍 ALARM CARD: No entities yet, calling _updateEntities"),this._updateEntities()):(this._debug("🔍 ALARM CARD: Refreshing entity states"),this._refreshEntityStates())),t.has("config")||t.has("hass")||t.has("entities")):(this._debug("🔍 ALARM CARD: No config, returning false"),!1)}_refreshEntityStates(){let t=!1;const e={...this.entities,days:{...this.entities.days}};for(const[i,r]of Object.entries(this.entities))if("days"!==i&&r&&r.entity_id){const a=this.hass.states[r.entity_id];!a||a.state===r.state&&a.last_updated===r.last_updated||(this._debug(`🔍 ALARM CARD: ${i} entity changed:`,r.state,"→",a.state),e[i]=a,t=!0)}if(this.entities.days)for(const[i,r]of Object.entries(this.entities.days))if(r&&r.entity_id){const a=this.hass.states[r.entity_id];!a||a.state===r.state&&a.last_updated===r.last_updated||(this._debug(`🔍 ALARM CARD: Day ${i} entity changed:`,r.state,"→",a.state),e.days[i]=a,t=!0)}t&&(this._debug("🔍 ALARM CARD: Changes detected, updating entities object"),this.entities=e)}async _updateEntities(){if(this.hass&&this.config.device_id){this._debug("🔍 ALARM CARD: Looking for entities for device:",this.config.device_id);try{const t=await this.hass.callWS({type:"config/entity_registry/list"});this._debug("🔍 ALARM CARD: Entity registry loaded, total entities:",t.length);const e=t.filter(t=>t.device_id===this.config.device_id);this._debug("🔍 ALARM CARD: Found device entities:",e.length,e);let i=null;for(const t of e)if(t.unique_id&&t.entity_id.startsWith("sensor.")&&t.unique_id&&!t.unique_id.includes("_")){i=t.unique_id,this._debug("🔍 ALARM CARD: Found coordinator unique_id:",i);break}if(!i)return this._debugError("🔍 ALARM CARD: Could not find coordinator unique_id"),void(this.entities={});const r={days:{}};this._debug("🔍 ALARM CARD: Processing device entities using unique_id patterns:");for(const t of e){if(this._debug("🔍 ALARM CARD: Checking entity:",t.entity_id,"unique_id:",t.unique_id),!t.unique_id){this._debug("🔍 ALARM CARD: No unique_id found for:",t.entity_id);continue}const e=this.hass.states[t.entity_id],a=t.unique_id;if(a===i)this._debug("🔍 ALARM CARD: Found MAIN entity:",t.entity_id),r.main=e||{entity_id:t.entity_id,state:"unknown"};else if(a===`${i}_alarm_time`)this._debug("🔍 ALARM CARD: Found TIME entity:",t.entity_id),r.time=e||{entity_id:t.entity_id,state:"07:00"};else if(a===`${i}_alarm_enabled`)this._debug("🔍 ALARM CARD: Found MAIN ENABLED entity:",t.entity_id),r.enabled=e||{entity_id:t.entity_id,state:"off"};else if(a===`${i}_alarm_status`)this._debug("🔍 ALARM CARD: Found STATUS entity:",t.entity_id),r.status=e||{entity_id:t.entity_id,state:"off"};else if(a===`${i}_next_alarm`)this._debug("🔍 ALARM CARD: Found NEXT_ALARM entity:",t.entity_id),r.nextAlarm=e||{entity_id:t.entity_id,state:null};else if(a===`${i}_time_until_alarm`)this._debug("🔍 ALARM CARD: Found TIME_UNTIL entity:",t.entity_id),r.timeUntil=e||{entity_id:t.entity_id,state:null};else if(a.startsWith(`${i}_`)&&a!==`${i}_alarm_enabled`){const i=a.match(/_(\w+)$/);if(i&&"enabled"!==i[1]){const a=i[1];["monday","tuesday","wednesday","thursday","friday","saturday","sunday"].includes(a)&&(this._debug("🔍 ALARM CARD: Found DAY entity:",t.entity_id,a),r.days[a]=e||{entity_id:t.entity_id,state:"off"})}}else this._debug("🔍 ALARM CARD: Unmatched entity:",t.entity_id,a)}this._debug("🔍 ALARM CARD: Final mapped entities:",r),this._debug("🔍 ALARM CARD: Entity count - main:",!!r.main,"time:",!!r.time,"enabled:",!!r.enabled,"days:",Object.keys(r.days||{}).length),this.entities=r}catch(t){this._debugError("🔍 ALARM CARD: Error loading entity registry:",t),this.entities={}}}else this._debugError("🔍 ALARM CARD: Missing hass or device_id:",{hass:!!this.hass,device_id:this.config.device_id})}render(){if(!this.config||0===Object.keys(this.entities).length)return H`
        <ha-card>
          <div class="warning">
            ${this.config?`Device not available: ${this.config.device_id}`:"No configuration"}
          </div>
        </ha-card>
      `;const t=this.entities.time?.entity_id?this.hass.states[this.entities.time.entity_id]:null,e=this.entities.enabled?.entity_id?this.hass.states[this.entities.enabled.entity_id]:null,i=this.entities.main?.entity_id?this.hass.states[this.entities.main.entity_id]:null,r=t?.state||"07:00",a=this._formatTime(r),o="on"===e?.state,n=i?.state||"off";this._debug("🔍 ALARM CARD: Status logic debug (FRESH DATA):",{timeEntityId:this.entities.time?.entity_id,enabledEntityId:this.entities.enabled?.entity_id,mainEntityId:this.entities.main?.entity_id,enabledEntityFreshState:e?.state,mainEntityFreshState:i?.state,isEnabled:o,finalStatus:n});const s=this.entities.nextAlarm?.attributes||{},d=this.entities.timeUntil?.attributes||{},c=this.entities.nextAlarm?.state,l=s.next_alarm_day,p=d.human_readable,u=d.countdown_type,h=Object.keys(this.entities.days||{}).filter(t=>"on"===this.entities.days[t]?.state);return this._debug("🎯 ALARM CARD: Rendering with entity states:",{alarmTime:a,isEnabled:o,status:n,nextAlarm:c,nextAlarmDay:l,timeUntil:p,countdownType:u,enabledDays:h,entities:this.entities}),H`
      <ha-card @click=${this._handleCardClick}>
        <div class="card-content">
          <div class="header">
            <div class="title">${this.config.name||this._translations.card.title}</div>
            <div class="header-right">
              <div class="status ${n}">${this._getStatusTranslation(n)}</div>
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
            <div class="alarm-time">${a}</div>
            ${c&&l?H`<div class="next-alarm">${this._translations.card.next_alarm}: ${l} at ${this._formatTime(new Date(c).toTimeString().substring(0,5))}</div>`:H``}
            ${p?H`
                  <div class="countdown">
                    <span class="countdown-label">
                      ${"snooze"===u?this._translations.card.snooze_ends_in:this._translations.card.alarm_in}
                    </span>
                    <span class="countdown-time">${p}</span>
                  </div>
                `:H``}
          </div>

          ${this.config.show_time_picker?this._renderTimePicker():H``}
          ${this._renderControls(o,n)}
          ${this.config.show_days?this._renderDays(h):H``}
          ${this.config.show_snooze_info&&"snoozed"===n?this._renderSnoozeInfo():H``}
        </div>
      </ha-card>
    `}_renderTimePicker(){const t=this.entities.time?.state||"07:00";return H`
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
          @click=${this._onSetTimeButtonClick}
          class="set-time-button"
        >
          ${this._translations.card.set_time}
        </mwc-button>
      </div>
    `}_renderControls(t,e){return H`
      <div class="controls">
        <mwc-button
          raised
          class="control-button ${t?"danger":"primary"}"
          @click=${this._toggleAlarm}
        >
          ${t?this._translations.card.disable_alarm:this._translations.card.enable_alarm}
        </mwc-button>
        ${"ringing"===e?H`
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
            `:H``}
      </div>
    `}_renderDays(t){return H`
      <div class="days-grid">
        ${["monday","tuesday","wednesday","thursday","friday","saturday","sunday"].map(e=>{const i=t.includes(e);return H`
              <button
                class="day-button ${i?"active":""}"
                @click=${()=>this._toggleDay(e)}
              >
                ${this._getDayTranslation(e)}
              </button>
            `})}
      </div>
    `}_renderScriptsInfo(t){const e=[];return t.pre_alarm_enabled&&t.pre_alarm_script&&e.push({label:"Pre-alarm",value:`${t.pre_alarm_script} (${t.pre_alarm_minutes}m before)`}),t.alarm_script&&e.push({label:"Alarm",value:t.alarm_script}),t.post_alarm_enabled&&t.post_alarm_script&&e.push({label:"Post-alarm",value:`${t.post_alarm_script} (${t.post_alarm_minutes}m after)`}),0===e.length?H``:H`
      <div class="scripts-info">
        <div class="scripts-title">Configured Scripts</div>
        ${e.map(t=>H`
            <div class="script-item">
              <span class="script-label">${t.label}:</span>
              <span class="script-value">${t.value}</span>
            </div>
          `)}
      </div>
    `}_renderSnoozeInfo(){const t=this.entities.timeUntil?.attributes||{},e=t.snooze_count||0,i=this.entities.main?.attributes?.max_snoozes||3,r=t.snooze_until;return H`
      <div class="snooze-info">
        <div>${this._translations.card.snoozed} (${e}/${i})</div>
        ${r?H`<div>${this._translations.card.until}: ${this._formatTime(new Date(r).toTimeString().substring(0,5))}</div>`:H``}
      </div>
    `}_onTimeInputChange(t){}_onSetTimeButtonClick(t){const e=this.shadowRoot?.querySelector("#alarm-time-input");if(e){const t=e.value;this._setAlarmTime(t)}}_setAlarmTime(t){this._debug("⏰ ALARM CARD: Setting alarm time to:",t),t&&this.config.device_id?(this._debug("⏰ ALARM CARD: Calling alarm_clock.set_alarm service:",{device_id:this.config.device_id,time:t}),this.hass.callService("alarm_clock","set_alarm",{device_id:this.config.device_id,time:t}),setTimeout(()=>this._refreshEntityStates(),100)):this._debugError("ALARM CARD: Cannot set time - missing time or device_id:",{time:t,device_id:this.config.device_id})}_toggleAlarm(){if(this._debug("🔘 ALARM CARD: Toggle alarm button clicked"),!this.config.device_id||!this.hass)return void this._debugError("ALARM CARD: Cannot toggle alarm - no device_id found");const t="on"===this.entities.enabled?.state,e=t?"turn_off":"turn_on";this._debug("🔘 ALARM CARD: Toggling alarm via switch:",{device_id:this.config.device_id,currentEnabled:t,service:e}),this.hass.callService("switch",e,{entity_id:this.entities.enabled?.entity_id}),setTimeout(()=>this._refreshEntityStates(),100)}async _toggleDay(t){if(this._debug("📅 ALARM CARD: Toggle day clicked:",t),!this.config.device_id)return void this._debugError("ALARM CARD: Cannot toggle day - no device_id found:",t);const e=this.entities.days?.[t];if(!e)return void this._debugError("ALARM CARD: Cannot toggle day - no day entity found:",t);const i="on"===e.state,r=i?"turn_off":"turn_on";this._debug("📅 ALARM CARD: Toggling day switch:",{day:t,device_id:this.config.device_id,currentEnabled:i,service:r}),await this.hass.callService("switch",r,{entity_id:e.entity_id}),this._debug("📅 ALARM CARD: Service call completed, forcing refresh"),setTimeout(()=>this._refreshEntityStates(),100)}_snoozeAlarm(){this._debug("💤 ALARM CARD: Snooze button clicked"),this.config.device_id?(this._debug("💤 ALARM CARD: Calling snooze service:",this.config.device_id),this.hass.callService("alarm_clock","snooze",{device_id:this.config.device_id}),setTimeout(()=>this._refreshEntityStates(),100)):this._debugError("ALARM CARD: Cannot snooze - no device_id found")}_dismissAlarm(){this._debug("🛑 ALARM CARD: Dismiss button clicked"),this.config.device_id?(this._debug("🛑 ALARM CARD: Calling dismiss service:",this.config.device_id),this.hass.callService("alarm_clock","dismiss",{device_id:this.config.device_id}),setTimeout(()=>this._refreshEntityStates(),100)):this._debugError("ALARM CARD: Cannot dismiss - no device_id found")}_formatTime(t){return t&&"off"!==t?this.config.use_24_hour_format?t:this._formatTime12Hour(t):t}_formatTime12Hour(t){if(!t||"off"===t)return t;try{const[e,i]=t.split(":"),r=parseInt(e,10),a=parseInt(i,10),o=r>=12?"PM":"AM";return`${0===r?12:r>12?r-12:r}:${a.toString().padStart(2,"0")} ${o}`}catch(e){return t}}_getStatusTranslation(t){const e=t.toLowerCase();return this._translations.status[e]||t.toUpperCase()}_getDayTranslation(t){const e={monday:"mon",tuesday:"tue",wednesday:"wed",thursday:"thu",friday:"fri",saturday:"sat",sunday:"sun"}[t.toLowerCase()]||t.toLowerCase();return this._translations.days[e]||t.charAt(0).toUpperCase()+t.slice(1)}_toggleSettingsMenu(){this._showSettingsMenu=!this._showSettingsMenu}_renderSettingsMenu(){return H`
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
    `}_handleSettingsClick(t){t.stopPropagation()}_toggle24HourFormat(t){const e=t.target.checked;this.config={...this.config,use_24_hour_format:e},gt(this,"config-changed",{config:this.config}),this._showSettingsMenu=!1}_handleCardClick(t){this._showSettingsMenu&&!t.target?.closest(".settings-menu")&&(this._showSettingsMenu=!1)}getCardSize(){return 6}static get styles(){return o`
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
    `}};Yt([dt({attribute:!1})],Jt.prototype,"hass",void 0),Yt([ct()],Jt.prototype,"config",void 0),Yt([ct()],Jt.prototype,"_showSettingsMenu",void 0),Yt([ct()],Jt.prototype,"entities",void 0),Jt=Yt([nt("alarm-clock-card")],Jt),window.customCards=window.customCards||[],window.customCards.push({type:"alarm-clock-card",name:"Alarm Clock Card",description:"A card for displaying and controlling alarm clock entities",preview:!0,documentationURL:"https://github.com/siegeld/alarm-clock"}),console.info("%c  ALARM-CLOCK-CARD  %c  Version 2.0.17  ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");var Kt=function(t,e,i,r){var a,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o<3?a(n):o>3?a(e,i,n):a(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let Qt=class extends at{constructor(){super(...arguments),this._searchValue="",this._showDropdown=!1,this._filteredDevices=[],this._allDevices=[]}setConfig(t){this._config=t}get _device_id(){return this._config?.device_id||""}get _name(){return this._config?.name||""}get _show_time_picker(){return!1!==this._config?.show_time_picker}get _show_days(){return!1!==this._config?.show_days}get _show_scripts(){return!1!==this._config?.show_scripts}get _show_snooze_info(){return!1!==this._config?.show_snooze_info}get _use_24_hour_format(){return this._config?.use_24_hour_format||!1}render(){return this.hass&&this._config?H`
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
              ${this._filteredDevices.map(t=>H`
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
    `:H``}async _loadDevices(){if(this.hass)try{const t=await this.hass.callWS({type:"config/device_registry/list"});this._allDevices=t.filter(t=>"Alarm Clock Integration"===t.manufacturer||"Alarm Clock"===t.model||t.name&&t.name.toLowerCase().includes("alarm")).map(t=>({id:t.id,name:t.name_by_user||t.name||`Device ${t.id.substring(0,8)}`,manufacturer:t.manufacturer,model:t.model})),this._filteredDevices=this._allDevices}catch(t){console.error("Failed to load device registry:",t),this._allDevices=[],this._filteredDevices=[]}}_handleSearch(t){const e=t.target,i=e.value.toLowerCase();this._searchValue=e.value,0===i.length?this._filteredDevices=this._allDevices:this._filteredDevices=this._allDevices.filter(t=>t.name.toLowerCase().includes(i)||t.id.toLowerCase().includes(i)),this._showDropdown=!0}_showResults(){0===this._allDevices.length&&this._loadDevices(),this._showDropdown=!0}_hideResults(){setTimeout(()=>{this._showDropdown=!1},150)}_selectDevice(t){this._searchValue=t.name,this._showDropdown=!1,this._config={...this._config,device_id:t.id},gt(this,"config-changed",{config:this._config})}_nameChanged(t){if(!this._config||!this.hass)return;const e=t.target.value;this._config={...this._config,name:e},gt(this,"config-changed",{config:this._config})}_toggleChanged(t,e){if(!this._config||!this.hass)return;const i=e.target.checked;this._config={...this._config,[t]:i},gt(this,"config-changed",{config:this._config})}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i=e.configValue;if(this[`_${i}`]===e.value)return;let r;r="checkbox"===e.type?e.checked:e.value,i&&(this._config={...this._config,[i]:r}),gt(this,"config-changed",{config:this._config})}static get styles(){return o`
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
    `}};Kt([dt({attribute:!1})],Qt.prototype,"hass",void 0),Kt([ct()],Qt.prototype,"_config",void 0),Kt([ct()],Qt.prototype,"_helpers",void 0),Kt([ct()],Qt.prototype,"_searchValue",void 0),Kt([ct()],Qt.prototype,"_showDropdown",void 0),Kt([ct()],Qt.prototype,"_filteredDevices",void 0),Kt([ct()],Qt.prototype,"_allDevices",void 0),Qt=Kt([nt("alarm-clock-card-editor")],Qt)})();