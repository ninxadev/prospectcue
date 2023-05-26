// 05/26/2023, 04:22 PM
"use strict";var ProspectCue=(()=>{var T=Object.defineProperty;var K=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames,B=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var S=(n,e,t)=>e in n?T(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,L=(n,e)=>{for(var t in e||(e={}))R.call(e,t)&&S(n,t,e[t]);if(B)for(var t of B(e))Y.call(e,t)&&S(n,t,e[t]);return n};var x=(n,e)=>{for(var t in e)T(n,t,{get:e[t],enumerable:!0})},Z=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of W(e))!R.call(n,a)&&a!==t&&T(n,a,{get:()=>e[a],enumerable:!(o=K(e,a))||o.enumerable});return n};var J=n=>Z(T({},"__esModule",{value:!0}),n);var w=(n,e,t)=>(S(n,typeof e!="symbol"?e+"":e,t),t);var c=(n,e,t)=>new Promise((o,a)=>{var r=d=>{try{l(t.next(d))}catch(p){a(p)}},s=d=>{try{l(t.throw(d))}catch(p){a(p)}},l=d=>d.done?o(d.value):Promise.resolve(d.value).then(r,s);l((t=t.apply(n,e)).next())});var se={};x(se,{addAddressButtons:()=>D,addContactSearchBox:()=>j,addTagElements:()=>O,appendTagLink:()=>F,appended:()=>g,checkNewTagAlert:()=>h,colorConsole:()=>i,constants:()=>k,getAddressDivs:()=>C,processContactDivs:()=>$,runContactPageCustomizations:()=>_,startProspectCueCustomizations:()=>G,updatePencilIcon:()=>N,wait:()=>M});function C(n){var t;let e;for(let o of n)if(o.textContent&&o.textContent.trim()==="Street Address"){if(e=(t=o.closest(".pt-3 > div"))==null?void 0:t.children,!e){i("could not find addressDivChildren","red");return}let a={streetLabel:o,streetDiv:e[1],cityDiv:e[2],stateDiv:e[4],zipDiv:e[5],addressDivChildren:e};return g.addressDivs=a,a}}function i(n,e,t){let o={red:"#f1889a",green:"#6DECB9",blue:"#88FFF7",yellow:"#FFF6BF",orange:"#f19684"};e!=null||(e="blue"),console.log(`%c \u{1FA90} ${n}`,`font-size: 13px; color: ${o[e]} `,t)}var M={};x(M,{waitForElement:()=>m,waitForManyElements:()=>f,waitForTextContent:()=>Q});function m(n){let{elementName:e,selector:t}=n;return e&&i(`${e}...waiting for ${n.selector}`),new Promise((o,a)=>{let r=document.querySelector(t);if(r){o(r);return}let s=new MutationObserver(l=>{l.forEach(d=>{Array.from(d.addedNodes).forEach(u=>{if(u instanceof HTMLElement){let A=u.querySelector(t);u.matches(t)&&(i(`${e}...found -> ${t} in`,"green",u),s.disconnect(),o(u))}})}),setTimeout(()=>{i(`${e}...${t} not found after 4 seconds...`,"orange"),s.disconnect(),a(new Error(`${e} was not found after 4 seconds`))},4e3)});s.observe(document.body,{childList:!0,subtree:!0})})}function f(n,e=1,t,o){return i(`${o}: waiting for ${e} children on ${o} ${t?`with textContent ${t}`:""}`),new Promise((a,r)=>{let s=document.querySelectorAll(n);s.length>=e&&(i(`${o} already has at least ${e} nodes...`,"green",s),a(s));let l=new MutationObserver(d=>{i(`starting ${o} mutation observer...`,"yellow"),d.forEach(p=>{let u=document.querySelectorAll(n);u.length>=e&&(i(`${o}: ${o} now has at least ${e} nodes...`,"green",u),a(u),l.disconnect())}),setTimeout(()=>{i(`${o}: ${o} still does not have ${e} nodes after 4 seconds...`,"orange"),l.disconnect(),r(new Error(`${o} did not get ${e} nodes after 4 seconds`))},4e3)});l.observe(document.body,{childList:!0,subtree:!0})})}function Q(n,e,t){return new Promise(o=>{let a=document.querySelectorAll(n);for(let s=0;s<a.length;s++){let l=a[s];l.textContent===e&&(i(`${l}: found textContent immediately: ${e}...`,"green",l),o(l))}let r=new MutationObserver(s=>{s.forEach(l=>{let d=document.querySelectorAll(n);for(let p=0;p<d.length;p++){let u=d[p];u.textContent===e&&(i(`${t}: found textContent: ${e}...`,"green",u),o(u),r.disconnect())}})});r.observe(document.body,{childList:!0,subtree:!0})})}function D(){return c(this,null,function*(){let n=yield f(".hl_contact-details-left .form-group .label",20,void 0,"waiting for address labels"),e=C(n);if(!e){i("no address divs found, returning from startAddButtons","red");return}i("address divs found... inserting map buttons","green"),yield X(e)})}function X(n){return c(this,null,function*(){var d,p,u,A,I,P,q,z;if(document.querySelectorAll(".zg-map-btns").length>0){i("map buttons already present, returning","yellow");return}let e=document.createElement("div");e.id="mapLinks",e.className="mapContainerZG",e.style.display="inline-flex";let{streetLabel:t}=n;t.style.display="inline-flex",t.style.width="50%";let o={street:(p=(d=n.streetDiv.querySelector("input"))==null?void 0:d.value)!=null?p:null,city:(A=(u=n.cityDiv.querySelector("input"))==null?void 0:u.value)!=null?A:null,state:(P=(I=n.stateDiv.querySelector("input"))==null?void 0:I.value)!=null?P:null,zip:(z=(q=n.stateDiv.querySelector("input"))==null?void 0:q.value)!=null?z:null},a=encodeURIComponent(Object.values(o).filter(E=>E!==null).join(" ")),s=`<span class="zillowTitle">Search:</span><a href="https://www.google.com/search?q=${Object.values(o).filter(E=>E!==null).map(E=>encodeURIComponent(E)).join("+")}" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" class="zg-map-btns"></a>`,l=`<a href="https://www.zillow.com/homes/for_sale/${a}_rb" target="_blank" id="zillowLink"><img src="https://www.zillow.com/apple-touch-icon.png" class="zg-map-btns"></a>`;e.innerHTML=s+l,t.insertAdjacentElement("afterend",e)})}function V(){return c(this,null,function*(){if(document.getElementById("section-toggle")){i("section toggle already present, returning","yellow");return}let n=document.createElement("input");n.type="checkbox",n.id="section-toggle",n.className="focus:ring-curious-blue-500 h-5 w-5 text-curious-blue-600 border-gray-300 rounded mr-2 disabled:opacity-50";let e=document.createElement("label");e.htmlFor="section-toggle",e.innerText="Toggle Sections",e.style.color="var(--gray-600)",e.className="mb-0 mr-4",n.addEventListener("change",ee);let t=document.createElement("div");t.appendChild(n),t.appendChild(e),t.style.display="inline-flex";let{firstElementChild:o}=yield m({selector:".hl_contact-details-left .h-full.overflow-y-auto"});if(!o){i("parent node not found","red");return}o.className+=" text-xs !text-gray-600",o.insertBefore(t,o.firstChild),o.lastElementChild.style.color="var(--gray-600)"})}function ee(n){var t,o;if(n.target.checked)for(let a of g.contactDivTriggers)((t=a.parentElement)==null?void 0:t.getAttribute("data-open"))==="true"&&a.click();else for(let a of g.contactDivTriggers)((o=a.parentElement)==null?void 0:o.getAttribute("data-open"))==="false"&&a.click()}var k={};x(k,{ACTIONS_DIVS_SELECTOR:()=>y,CONTACT_DIVS_SELECTOR:()=>b,CONTACT_SECTION_LABELS_SELECTOR:()=>te});var b=".hl_contact-details-left > div > .h-full.overflow-y-auto > .py-3.px-3",y=".hl_contact-details-left > div > .h-full.overflow-y-auto > .bg-gray-100 > .py-3.px-3",te=".hl_contact-details-left .form-group .label";var v=class{constructor(e){w(this,"settings");w(this,"dialogSupported");w(this,"dialog");w(this,"elements");w(this,"focusable");w(this,"hasFormData");this.settings=L({accept:e.accept||"OK",bodyClass:e.bodyClass||"dialog-open",cancel:e.cancel||"Cancel"},e),this.init()}collectFormData(e){let t={};return e.forEach((o,a)=>{typeof o=="string"&&(t.hasOwnProperty(a)?(Array.isArray(t[a])||(t[a]=[t[a]]),t[a].push(o)):t[a]=o)}),t}getFocusable(){var e;return[...(e=this.dialog)==null?void 0:e.querySelectorAll('button,[href],select,textarea,input:not([type="hidden"]),[tabindex]:not([tabindex="-1"])')]}init(){this.dialogSupported=typeof HTMLDialogElement=="function",this.dialog=document.createElement("dialog"),this.dialog.role="dialog",this.dialog.dataset.component=this.dialogSupported?"dialog":"no-dialog",this.dialog.innerHTML=`
    <form method="dialog" data-ref="form">
      <fieldset data-ref="fieldset" role="document">
        <legend data-ref="message" id="${Math.round(Date.now()).toString(36)}"></legend>
        <div data-ref="template"></div>
      </fieldset>
      <menu>
        <button${this.dialogSupported?"":' type="button"'} data-ref="cancel" value="cancel"></button>
        <button${this.dialogSupported?"":' type="button"'} data-ref="accept" value="default"></button>
      </menu>
      <audio data-ref="soundAccept"></audio>
      <audio data-ref="soundOpen"></audio>
    </form>`,document.body.appendChild(this.dialog),this.elements={},this.focusable=[],this.dialog.querySelectorAll("[data-ref]").forEach(e=>this.elements[e.dataset.ref]=e),this.dialog.setAttribute("aria-labelledby",this.elements.message.id),this.elements.cancel.addEventListener("click",()=>{this.dialog.dispatchEvent(new Event("cancel"))}),this.dialog.addEventListener("keydown",e=>{if(e.key==="Enter"&&(this.dialogSupported||e.preventDefault(),this.elements.accept.dispatchEvent(new Event("click"))),e.key==="Escape"&&this.dialog.dispatchEvent(new Event("cancel")),e.key==="Tab"){e.preventDefault();let t=this.focusable.length-1,o=this.focusable.indexOf(e.target);o=e.shiftKey?o-1:o+1,o<0&&(o=t),o>t&&(o=0),this.focusable[o].focus()}}),this.toggle()}open(e){let t=L(L({},this.settings),e);this.dialog.className=t.dialogClass||"",this.elements.accept.innerText=t.accept,this.elements.cancel.innerText=t.cancel,this.elements.cancel.hidden=t.cancel==="",this.elements.message.innerHTML=t.message,this.elements.soundAccept.src=t.soundAccept||"",this.elements.soundOpen.src=t.soundOpen||"",this.elements.target=t.target||"",this.elements.template.innerHTML=t.template||"",this.focusable=this.getFocusable(),this.hasFormData=this.elements.fieldset.elements.length>0,t.soundOpen&&this.elements.soundOpen.play(),this.toggle(!0),this.hasFormData?(this.focusable[0].focus(),this.focusable[0].select()):this.elements.accept.focus()}toggle(e=!1){this.dialogSupported&&e&&this.dialog.showModal(),this.dialogSupported||document.body.classList.toggle(this.settings.bodyClass,e),this.dialog.hidden=!e,this.elements.target&&!e&&this.elements.target.focus()}waitForUser(){return new Promise(e=>{this.dialog.addEventListener("cancel",()=>{this.toggle(),e(!1)},{once:!0}),this.elements.accept.addEventListener("click",()=>{let t=this.hasFormData?this.collectFormData(new FormData(this.elements.form)):!0;this.elements.soundAccept.getAttribute("src").length>0&&this.elements.soundAccept.play(),this.toggle(),e(t)},{once:!0})})}alert(e){let t={message:e,cancel:"",template:""};return this.open(t),this.waitForUser()}confirm(e){let t={message:e,template:""};return this.open(t),this.waitForUser()}prompt(e,t){let o=`<label aria-label="${e}"><input type="text" name="prompt" value="${t}"></label>`,a={message:e,template:o};return this.open(a),this.waitForUser()}};function O(){return c(this,null,function*(){if(i("inserting tag link and tag alert....","blue"),g.tagsAdded=[],document.getElementById("tags-edit-container")){i("tags edit div already present","red");return}let n=yield f(y,3,void 0,"addTagElements"),e=null;for(let o=0;o<n.length;o++){let a=n[o],r=a.querySelector("span.text-sm.font-medium");if(r!=null&&r.textContent&&r.textContent.trim()==="Tags"){e=a.firstElementChild,i("Tags heading found-> ","orange",e);break}}if(e===null){i("tags section not found","red");return}let t=yield F(e);if(!t){i("new tag div not found","red");return}i("new tag div found -> ","green",t),h(t)})}function F(n){return c(this,null,function*(){if(document.getElementById("tags-edit"))return;let e=n.lastElementChild,t=document.createElement("div");t.id="tags-edit-container";let o=document.createElement("a");return o.addEventListener("click",a=>a.stopPropagation()),o.href=window.location.href.replace(/contacts.*/,"settings/tags"),o.target="_blank",o.innerHTML=`<span id="tags-edit" class="tags-edit">Edit Tags  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
  width="12" height="12"
  viewBox="0 0 172 172"
  style=" fill:#000000;"><g transform=""><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><path d="" fill="none"></path><path d="" fill="none"></path><path d="" fill="none"></path><path d="" fill="none"></path><path d="" fill="none"></path><path d="" fill="none"></path><g><path d="M5.375,26.875h118.25v118.25h-118.25z" fill="#c2e8ff"></path><path d="M118.25,32.25v107.5h-107.5v-107.5h107.5M129,21.5h-129v129h129v-129z" fill="#357ded"></path><path d="M129,43v32.25h-21.5l0,-32.25z" fill="#c2e8ff"></path><path d="M118.25,21.5v21.5h-32.25v-21.5z" fill="#c2e8ff"></path><g fill="#357ded"><path d="M150.5,0h-64.5l21.5,21.5l-43,43l21.5,21.5l43,-43l21.5,21.5z"></path></g></g><path d="" fill="none"></path><path d="" fill="none"></path></g></g></svg>
  </span>`,t.prepend(o),n.insertBefore(t,e),n})}function h(n){return c(this,null,function*(){if(!n){i("new tag div not found, waiting for click","orange");let t=yield m({selector:".add-new"});return H(t)}let e=document.querySelector(".add-new");if(e)return i("add new section found","orange"),H(e);i("add new section not found, waiting for click","orange",n),n.addEventListener("click",t=>c(this,null,function*(){let o=document.querySelector(".add-new");if(!o){i("click occurred on tag div, but add new not present","red");return}i("click occured on tag div, addNew found","green",o);let a=yield m({selector:".add-new"});i("add new tag section loaded -> ","green",a),H(a)}))})}function H(n){if(g.tagsAdded=[],i("now attaching tag alert..."),n.hasAttribute("listener"))return i("tag alert found, returning...");n.setAttribute("listener","tagAlert"),n.addEventListener("click",e=>{n.removeAttribute("listener"),ne(e)},{capture:!0,once:!0})}function ne(n){return c(this,null,function*(){var r;i("add new tag click captured","green",n),n.stopPropagation();let e=n.target,t=(r=e.innerText)==null?void 0:r.trim(),o=new v({dialogClass:"tag-confirm-dialog",accept:"Yes",cancel:"No",message:`Are you sure you want to add <span class="tag-add">${t}</span> as a new tag?`,target:e});o.open();let a=yield o.waitForUser();i(`tag add confirmation: ${a} for tag ${t}`,"green"),a&&(g.tagsAdded.push(t),e.click()),setTimeout(h,100)})}function $(){return c(this,null,function*(){let n=yield f(b,3,void 0,"processContactDivs: waiting for Contact divs"),e=yield f(y,3,void 0,"processContactDivs: waiting for Acions section"),t="M9 5l7 7-7 7";for(let o of n){let a=o.querySelector(".cursor-pointer"),r=o.querySelector("svg > path");r&&(g.contactDivTriggers.push(a),r.getAttribute("d")===t&&(i("opening contact div","green",o),o.firstChild.click()),o.setAttribute("data-open","true"),a.addEventListener("click",s=>{o.getAttribute("data-open")==="true"?o.setAttribute("data-open","false"):o.setAttribute("data-open","true")}))}for(let o of e){if(!o.childElementCount)continue;let a=o.querySelector(".cursor-pointer");g.contactDivTriggers.push(o),o.querySelectorAll("svg > path")[1].getAttribute("d")===t&&(i("opening actions div","green",o),o.firstChild.click()),o.setAttribute("data-open","true"),o.addEventListener("click",s=>{o.getAttribute("data-open")==="true"?o.setAttribute("data-open","false"):o.setAttribute("data-open","true")})}})}function j(){return c(this,null,function*(){let e=yield m({selector:".hl_contact-details-left .contact-detail-nav",elementName:"addContactSearchBox: waiting for parent node"}),t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("placeholder","search sections"),t.setAttribute("id","contact-search"),t.className="h-6 basis-36 focus:ring-curious-blue-500 focus:border-curious-blue-500 border border-blue-300 block text-xs  rounded disabled:opacity-50 text-gray-800",e.insertBefore(t,e.children[1]),t.addEventListener("input",o=>c(this,null,function*(){var s;let a=o.target.value;if(!a)return;let r=yield f(b,20,void 0,"addContactSearchBox");for(let l of r)if((s=l.textContent)!=null&&s.toLowerCase().includes(a.toLowerCase())){l.style.backgroundColor="yellow",l.scrollIntoView({behavior:"smooth",block:"center"});break}else l.style.backgroundColor="transparent"}))})}function U(){return c(this,null,function*(){let n=yield m({selector:".form-footer.save",elementName:"attachSaveAlert:"});if(n.hasAttribute("listener"))return;n.setAttribute("listener","saveAlert"),document.querySelectorAll("a[href], a.back").forEach(t=>{t.addEventListener("click",ae,{once:!0,capture:!0})})})}function oe(){let n=document.querySelector(".form-footer.save > div"),e=n==null?void 0:n.textContent,t=e==null?void 0:e.match(/^\d+/);return t?+t[0]:null}function ae(n){return c(this,null,function*(){n.preventDefault(),console.log("trying to exit without saving");let e=oe(),t=n.target,o=new v({dialogClass:"confirm-dialog",accept:"Save Changes",cancel:"Discard Changes",message:`You have ${e?e+" ":""}unsaved changes.`,target:t});o.open();let a=yield o.waitForUser();i(`save alert confirmation: ${a}`,"green"),a&&(i("saving changes...","green"),document.querySelector(".form-footer.save div:nth-child(2) > div > button").click())})}function N(){return c(this,null,function*(){(yield f("i.fas.fa-pencil-alt",1,void 0,"updatePhoneNumberIcon")).forEach(t=>t.className="icon icon-pencil --light"),(yield f("i.fas.fa-trash-alt",1,void 0,"deletePhoneNumberIcon")).forEach(t=>t.className="icon icon-trash --light")})}var g={addressDivs:{},tagsAdded:[],contactDivs:[],contactDivTriggers:[],searchBox:null};G();function G(){return c(this,null,function*(){i("Starting prospectcue customizations","green"),window.location.pathname.includes("/contacts/detail/")&&(yield _()),window.location.pathname.includes("conversations")&&(i("reloaded to conversations page, checking for add new tag","yellow"),yield h()),window.location.pathname.includes("/opportunities/list")&&(i("reloaded to opportunities list page, checking for add new tag","yellow"),yield h()),window.addEventListener("click",re,{})})}function _(){return c(this,null,function*(){i("running contact page customizations","green");try{yield $()}catch(n){i("error processing contact divs","red",n)}try{yield V()}catch(n){i("error adding section toggle","red",n)}try{yield D()}catch(n){i("error adding address buttons","red",n)}try{yield O()}catch(n){i("error adding tag elements","red",n)}try{yield U()}catch(n){i("error attaching save alert","red",n)}})}function ie(n){for(i("finding ancestor with href","yellow",n);n;){if(n instanceof HTMLAnchorElement&&n.hasAttribute("href"))return n;n=n.parentElement}return null}function re(n){let e=n.target,t=ie(e),o="/contacts/detail/",a="/conversations/conversations",r="/opportunities/list";i(`click was on an anchor element: ${t==null?void 0:t.href}`,"yellow");let s=window.location.pathname;setTimeout(()=>c(this,null,function*(){let l=window.location.pathname;s===l&&window.location.hash||(t!=null&&t.href.includes(o)?(yield _(),i("click on contact page, checking for add new tag","yellow")):window.location.pathname.includes(a)?(i("click on conversations page, checking for add new tag","yellow"),yield h()):s.includes(r)&&window.location.pathname.includes(r)&&(i("click on opportunities page, checking for add new tag","yellow"),yield h()),i("checking for pencil icons","yellow"),yield N())}),500)}return J(se);})();
//# sourceMappingURL=index.js.map
