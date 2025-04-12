"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[979],{1027:(e,r,t)=>{t.d(r,{F:()=>i});var n=t(3463);let o=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=n.$,i=(e,r)=>t=>{var n;if((null==r?void 0:r.variants)==null)return l(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:i,defaultVariants:s}=r,a=Object.keys(i).map(e=>{let r=null==t?void 0:t[e],n=null==s?void 0:s[e];if(null===r)return null;let l=o(r)||o(n);return i[e][l]}),d=t&&Object.entries(t).reduce((e,r)=>{let[t,n]=r;return void 0===n||(e[t]=n),e},{});return l(e,a,null==r?void 0:null===(n=r.compoundVariants)||void 0===n?void 0:n.reduce((e,r)=>{let{class:t,className:n,...o}=r;return Object.entries(o).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...s,...d}[r]):({...s,...d})[r]===t})?[...e,t,n]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},1488:(e,r,t)=>{t.d(r,{i:()=>l});var n=t(2115),o=t(1524);function l({prop:e,defaultProp:r,onChange:t=()=>{}}){let[l,i]=function({defaultProp:e,onChange:r}){let t=n.useState(e),[l]=t,i=n.useRef(l),s=(0,o.c)(r);return n.useEffect(()=>{i.current!==l&&(s(l),i.current=l)},[l,i,s]),t}({defaultProp:r,onChange:t}),s=void 0!==e,a=s?e:l,d=(0,o.c)(t);return[a,n.useCallback(r=>{if(s){let t="function"==typeof r?r(e):r;t!==e&&d(t)}else i(r)},[s,e,i,d])]}},1524:(e,r,t)=>{t.d(r,{c:()=>o});var n=t(2115);function o(e){let r=n.useRef(e);return n.useEffect(()=>{r.current=e}),n.useMemo(()=>(...e)=>r.current?.(...e),[])}},2317:(e,r,t)=>{t.d(r,{DX:()=>s,TL:()=>i});var n=t(2115),o=t(8068),l=t(5155);function i(e){let r=function(e){let r=n.forwardRef((e,r)=>{let{children:t,...l}=e;if(n.isValidElement(t)){var i;let e,s;let a=(i=t,(s=(e=Object.getOwnPropertyDescriptor(i.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?i.ref:(s=(e=Object.getOwnPropertyDescriptor(i,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?i.props.ref:i.props.ref||i.ref),d=function(e,r){let t={...r};for(let n in r){let o=e[n],l=r[n];/^on[A-Z]/.test(n)?o&&l?t[n]=(...e)=>{l(...e),o(...e)}:o&&(t[n]=o):"style"===n?t[n]={...o,...l}:"className"===n&&(t[n]=[o,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props);return t.type!==n.Fragment&&(d.ref=r?(0,o.t)(r,a):a),n.cloneElement(t,d)}return n.Children.count(t)>1?n.Children.only(null):null});return r.displayName=`${e}.SlotClone`,r}(e),t=n.forwardRef((e,t)=>{let{children:o,...i}=e,s=n.Children.toArray(o),a=s.find(d);if(a){let e=a.props.children,o=s.map(r=>r!==a?r:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,l.jsx)(r,{...i,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,o):null})}return(0,l.jsx)(r,{...i,ref:t,children:o})});return t.displayName=`${e}.Slot`,t}var s=i("Slot"),a=Symbol("radix.slottable");function d(e){return n.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===a}},3360:(e,r,t)=>{t.d(r,{hO:()=>a,sG:()=>s});var n=t(2115),o=t(7650),l=t(2317),i=t(5155),s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=(0,l.TL)(`Primitive.${r}`),o=n.forwardRef((e,n)=>{let{asChild:o,...l}=e;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(o?t:r,{...l,ref:n})});return o.displayName=`Primitive.${r}`,{...e,[r]:o}},{});function a(e,r){e&&o.flushSync(()=>e.dispatchEvent(r))}},3463:(e,r,t)=>{t.d(r,{$:()=>n});function n(){for(var e,r,t=0,n="",o=arguments.length;t<o;t++)(e=arguments[t])&&(r=function e(r){var t,n,o="";if("string"==typeof r||"number"==typeof r)o+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(n=e(r[t]))&&(o&&(o+=" "),o+=n)}else for(n in r)r[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(n&&(n+=" "),n+=r);return n}},3610:(e,r,t)=>{t.d(r,{m:()=>n});function n(e,r,{checkForDefaultPrevented:t=!0}={}){return function(n){if(e?.(n),!1===t||!n.defaultPrevented)return r?.(n)}}},4057:(e,r,t)=>{t.d(r,{A:()=>a});var n=t(2115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,n.forwardRef)((e,r)=>{let{color:t="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:d="",children:c,iconNode:u,...p}=e;return(0,n.createElement)("svg",{ref:r,...i,width:o,height:o,stroke:t,strokeWidth:a?24*Number(s)/Number(o):s,className:l("lucide",d),...p},[...u.map(e=>{let[r,t]=e;return(0,n.createElement)(r,t)}),...Array.isArray(c)?c:[c]])}),a=(e,r)=>{let t=(0,n.forwardRef)((t,i)=>{let{className:a,...d}=t;return(0,n.createElement)(s,{ref:i,iconNode:r,className:l("lucide-".concat(o(e)),a),...d})});return t.displayName="".concat(e),t}},6611:(e,r,t)=>{t.d(r,{N:()=>o});var n=t(2115),o=globalThis?.document?n.useLayoutEffect:()=>{}},7028:(e,r,t)=>{t.d(r,{C:()=>i});var n=t(2115),o=t(8068),l=t(6611),i=e=>{let{present:r,children:t}=e,i=function(e){var r,t;let[o,i]=n.useState(),a=n.useRef({}),d=n.useRef(e),c=n.useRef("none"),[u,p]=(r=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,r)=>{let n=t[e][r];return null!=n?n:e},r));return n.useEffect(()=>{let e=s(a.current);c.current="mounted"===u?e:"none"},[u]),(0,l.N)(()=>{let r=a.current,t=d.current;if(t!==e){let n=c.current,o=s(r);e?p("MOUNT"):"none"===o||(null==r?void 0:r.display)==="none"?p("UNMOUNT"):t&&n!==o?p("ANIMATION_OUT"):p("UNMOUNT"),d.current=e}},[e,p]),(0,l.N)(()=>{if(o){var e;let r;let t=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,n=e=>{let n=s(a.current).includes(e.animationName);if(e.target===o&&n&&(p("ANIMATION_END"),!d.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",r=t.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},l=e=>{e.target===o&&(c.current=s(a.current))};return o.addEventListener("animationstart",l),o.addEventListener("animationcancel",n),o.addEventListener("animationend",n),()=>{t.clearTimeout(r),o.removeEventListener("animationstart",l),o.removeEventListener("animationcancel",n),o.removeEventListener("animationend",n)}}p("ANIMATION_END")},[o,p]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:n.useCallback(e=>{e&&(a.current=getComputedStyle(e)),i(e)},[])}}(r),a="function"==typeof t?t({present:i.isPresent}):n.Children.only(t),d=(0,o.s)(i.ref,function(e){var r,t;let n=null===(r=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===r?void 0:r.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(o=(n=null===(t=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in n&&n.isReactWarning)?e.props.ref:e.props.ref||e.ref}(a));return"function"==typeof t||i.isPresent?n.cloneElement(a,{ref:d}):null};function s(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},7323:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(2115),o=t(7650),l=t(3360),i=t(6611),s=t(5155),a=n.forwardRef((e,r)=>{var t,a;let{container:d,...c}=e,[u,p]=n.useState(!1);(0,i.N)(()=>p(!0),[]);let f=d||u&&(null===(a=globalThis)||void 0===a?void 0:null===(t=a.document)||void 0===t?void 0:t.body);return f?o.createPortal((0,s.jsx)(l.sG.div,{...c,ref:r}),f):null});a.displayName="Portal"},8068:(e,r,t)=>{t.d(r,{s:()=>i,t:()=>l});var n=t(2115);function o(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function l(...e){return r=>{let t=!1,n=e.map(e=>{let n=o(e,r);return t||"function"!=typeof n||(t=!0),n});if(t)return()=>{for(let r=0;r<n.length;r++){let t=n[r];"function"==typeof t?t():o(e[r],null)}}}}function i(...e){return n.useCallback(l(...e),e)}},8166:(e,r,t)=>{t.d(r,{A:()=>i,q:()=>l});var n=t(2115),o=t(5155);function l(e,r){let t=n.createContext(r),l=e=>{let{children:r,...l}=e,i=n.useMemo(()=>l,Object.values(l));return(0,o.jsx)(t.Provider,{value:i,children:r})};return l.displayName=e+"Provider",[l,function(o){let l=n.useContext(t);if(l)return l;if(void 0!==r)return r;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function i(e,r=[]){let t=[],l=()=>{let r=t.map(e=>n.createContext(e));return function(t){let o=t?.[e]||r;return n.useMemo(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return l.scopeName=e,[function(r,l){let i=n.createContext(l),s=t.length;t=[...t,l];let a=r=>{let{scope:t,children:l,...a}=r,d=t?.[e]?.[s]||i,c=n.useMemo(()=>a,Object.values(a));return(0,o.jsx)(d.Provider,{value:c,children:l})};return a.displayName=r+"Provider",[a,function(t,o){let a=o?.[e]?.[s]||i,d=n.useContext(a);if(d)return d;if(void 0!==l)return l;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((r,{useScope:t,scopeName:n})=>{let o=t(e)[`__scope${n}`];return{...r,...o}},{});return n.useMemo(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return t.scopeName=r.scopeName,t}(l,...r)]}},9674:(e,r,t)=>{t.d(r,{qW:()=>p});var n,o=t(2115),l=t(3610),i=t(3360),s=t(8068),a=t(1524),d=t(5155),c="dismissableLayer.update",u=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),p=o.forwardRef((e,r)=>{var t,p;let{disableOutsidePointerEvents:b=!1,onEscapeKeyDown:g,onPointerDownOutside:v,onFocusOutside:h,onInteractOutside:y,onDismiss:w,...x}=e,k=o.useContext(u),[E,N]=o.useState(null),z=null!==(p=null==E?void 0:E.ownerDocument)&&void 0!==p?p:null===(t=globalThis)||void 0===t?void 0:t.document,[,C]=o.useState({}),O=(0,s.s)(r,e=>N(e)),P=Array.from(k.layers),[j]=[...k.layersWithOutsidePointerEventsDisabled].slice(-1),M=P.indexOf(j),L=E?P.indexOf(E):-1,T=k.layersWithOutsidePointerEventsDisabled.size>0,S=L>=M,R=function(e){var r;let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(r=globalThis)||void 0===r?void 0:r.document,n=(0,a.c)(e),l=o.useRef(!1),i=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!l.current){let r=function(){m("dismissableLayer.pointerDownOutside",n,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",i.current),i.current=r,t.addEventListener("click",i.current,{once:!0})):r()}else t.removeEventListener("click",i.current);l.current=!1},r=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(r),t.removeEventListener("pointerdown",e),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>l.current=!0}}(e=>{let r=e.target,t=[...k.branches].some(e=>e.contains(r));!S||t||(null==v||v(e),null==y||y(e),e.defaultPrevented||null==w||w())},z),D=function(e){var r;let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(r=globalThis)||void 0===r?void 0:r.document,n=(0,a.c)(e),l=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!l.current&&m("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>l.current=!0,onBlurCapture:()=>l.current=!1}}(e=>{let r=e.target;[...k.branches].some(e=>e.contains(r))||(null==h||h(e),null==y||y(e),e.defaultPrevented||null==w||w())},z);return!function(e,r=globalThis?.document){let t=(0,a.c)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&t(e)};return r.addEventListener("keydown",e,{capture:!0}),()=>r.removeEventListener("keydown",e,{capture:!0})},[t,r])}(e=>{L===k.layers.size-1&&(null==g||g(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))},z),o.useEffect(()=>{if(E)return b&&(0===k.layersWithOutsidePointerEventsDisabled.size&&(n=z.body.style.pointerEvents,z.body.style.pointerEvents="none"),k.layersWithOutsidePointerEventsDisabled.add(E)),k.layers.add(E),f(),()=>{b&&1===k.layersWithOutsidePointerEventsDisabled.size&&(z.body.style.pointerEvents=n)}},[E,z,b,k]),o.useEffect(()=>()=>{E&&(k.layers.delete(E),k.layersWithOutsidePointerEventsDisabled.delete(E),f())},[E,k]),o.useEffect(()=>{let e=()=>C({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,d.jsx)(i.sG.div,{...x,ref:O,style:{pointerEvents:T?S?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.m)(e.onFocusCapture,D.onFocusCapture),onBlurCapture:(0,l.m)(e.onBlurCapture,D.onBlurCapture),onPointerDownCapture:(0,l.m)(e.onPointerDownCapture,R.onPointerDownCapture)})});function f(){let e=new CustomEvent(c);document.dispatchEvent(e)}function m(e,r,t,n){let{discrete:o}=n,l=t.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});r&&l.addEventListener(e,r,{once:!0}),o?(0,i.hO)(l,s):l.dispatchEvent(s)}p.displayName="DismissableLayer",o.forwardRef((e,r)=>{let t=o.useContext(u),n=o.useRef(null),l=(0,s.s)(r,n);return o.useEffect(()=>{let e=n.current;if(e)return t.branches.add(e),()=>{t.branches.delete(e)}},[t.branches]),(0,d.jsx)(i.sG.div,{...e,ref:l})}).displayName="DismissableLayerBranch"},9795:(e,r,t)=>{t.d(r,{QP:()=>eu});let n=e=>{let r=s(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),o(t,r)||i(e)},getConflictingClassGroupIds:(e,r)=>{let o=t[e]||[];return r&&n[e]?[...o,...n[e]]:o}}},o=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],n=r.nextPart.get(t),l=n?o(e.slice(1),n):void 0;if(l)return l;if(0===r.validators.length)return;let i=e.join("-");return r.validators.find(({validator:e})=>e(i))?.classGroupId},l=/^\[(.+)\]$/,i=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},s=e=>{let{theme:r,classGroups:t}=e,n={nextPart:new Map,validators:[]};for(let e in t)a(t[e],n,e,r);return n},a=(e,r,t,n)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:d(r,e)).classGroupId=t;return}if("function"==typeof e){if(c(e)){a(e(n),r,t,n);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,o])=>{a(o,d(r,e),t,n)})})},d=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},c=e=>e.isThemeGetter,u=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,n=new Map,o=(o,l)=>{t.set(o,l),++r>e&&(r=0,n=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=n.get(e))?(o(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):o(e,r)}}},p=e=>{let{prefix:r,experimentalParseClassName:t}=e,n=e=>{let r;let t=[],n=0,o=0,l=0;for(let i=0;i<e.length;i++){let s=e[i];if(0===n&&0===o){if(":"===s){t.push(e.slice(l,i)),l=i+1;continue}if("/"===s){r=i;continue}}"["===s?n++:"]"===s?n--:"("===s?o++:")"===s&&o--}let i=0===t.length?e:e.substring(l),s=f(i);return{modifiers:t,hasImportantModifier:s!==i,baseClassName:s,maybePostfixModifierPosition:r&&r>l?r-l:void 0}};if(r){let e=r+":",t=n;n=r=>r.startsWith(e)?t(r.substring(e.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:r,maybePostfixModifierPosition:void 0}}if(t){let e=n;n=r=>t({className:r,parseClassName:e})}return n},f=e=>e.endsWith("!")?e.substring(0,e.length-1):e.startsWith("!")?e.substring(1):e,m=e=>{let r=Object.fromEntries(e.orderSensitiveModifiers.map(e=>[e,!0]));return e=>{if(e.length<=1)return e;let t=[],n=[];return e.forEach(e=>{"["===e[0]||r[e]?(t.push(...n.sort(),e),n=[]):n.push(e)}),t.push(...n.sort()),t}},b=e=>({cache:u(e.cacheSize),parseClassName:p(e),sortModifiers:m(e),...n(e)}),g=/\s+/,v=(e,r)=>{let{parseClassName:t,getClassGroupId:n,getConflictingClassGroupIds:o,sortModifiers:l}=r,i=[],s=e.trim().split(g),a="";for(let e=s.length-1;e>=0;e-=1){let r=s[e],{isExternal:d,modifiers:c,hasImportantModifier:u,baseClassName:p,maybePostfixModifierPosition:f}=t(r);if(d){a=r+(a.length>0?" "+a:a);continue}let m=!!f,b=n(m?p.substring(0,f):p);if(!b){if(!m||!(b=n(p))){a=r+(a.length>0?" "+a:a);continue}m=!1}let g=l(c).join(":"),v=u?g+"!":g,h=v+b;if(i.includes(h))continue;i.push(h);let y=o(b,m);for(let e=0;e<y.length;++e){let r=y[e];i.push(v+r)}a=r+(a.length>0?" "+a:a)}return a};function h(){let e,r,t=0,n="";for(;t<arguments.length;)(e=arguments[t++])&&(r=y(e))&&(n&&(n+=" "),n+=r);return n}let y=e=>{let r;if("string"==typeof e)return e;let t="";for(let n=0;n<e.length;n++)e[n]&&(r=y(e[n]))&&(t&&(t+=" "),t+=r);return t},w=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},x=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,k=/^\((?:(\w[\w-]*):)?(.+)\)$/i,E=/^\d+\/\d+$/,N=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,z=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,C=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,O=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,P=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,j=e=>E.test(e),M=e=>!!e&&!Number.isNaN(Number(e)),L=e=>!!e&&Number.isInteger(Number(e)),T=e=>e.endsWith("%")&&M(e.slice(0,-1)),S=e=>N.test(e),R=()=>!0,D=e=>z.test(e)&&!C.test(e),$=()=>!1,A=e=>O.test(e),W=e=>P.test(e),_=e=>!G(e)&&!Z(e),I=e=>ee(e,ei,$),G=e=>x.test(e),U=e=>ee(e,es,D),F=e=>ee(e,ea,M),B=e=>ee(e,et,$),V=e=>ee(e,eo,W),q=e=>ee(e,$,A),Z=e=>k.test(e),Q=e=>er(e,es),X=e=>er(e,ed),H=e=>er(e,et),J=e=>er(e,ei),K=e=>er(e,eo),Y=e=>er(e,ec,!0),ee=(e,r,t)=>{let n=x.exec(e);return!!n&&(n[1]?r(n[1]):t(n[2]))},er=(e,r,t=!1)=>{let n=k.exec(e);return!!n&&(n[1]?r(n[1]):t)},et=e=>"position"===e,en=new Set(["image","url"]),eo=e=>en.has(e),el=new Set(["length","size","percentage"]),ei=e=>el.has(e),es=e=>"length"===e,ea=e=>"number"===e,ed=e=>"family-name"===e,ec=e=>"shadow"===e;Symbol.toStringTag;let eu=function(e,...r){let t,n,o;let l=function(s){return n=(t=b(r.reduce((e,r)=>r(e),e()))).cache.get,o=t.cache.set,l=i,i(s)};function i(e){let r=n(e);if(r)return r;let l=v(e,t);return o(e,l),l}return function(){return l(h.apply(null,arguments))}}(()=>{let e=w("color"),r=w("font"),t=w("text"),n=w("font-weight"),o=w("tracking"),l=w("leading"),i=w("breakpoint"),s=w("container"),a=w("spacing"),d=w("radius"),c=w("shadow"),u=w("inset-shadow"),p=w("drop-shadow"),f=w("blur"),m=w("perspective"),b=w("aspect"),g=w("ease"),v=w("animate"),h=()=>["auto","avoid","all","avoid-page","page","left","right","column"],y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],x=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],E=()=>[Z,G,a],N=()=>[j,"full","auto",...E()],z=()=>[L,"none","subgrid",Z,G],C=()=>["auto",{span:["full",L,Z,G]},Z,G],O=()=>[L,"auto",Z,G],P=()=>["auto","min","max","fr",Z,G],D=()=>["start","end","center","between","around","evenly","stretch","baseline"],$=()=>["start","end","center","stretch"],A=()=>["auto",...E()],W=()=>[j,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...E()],ee=()=>[e,Z,G],er=()=>[T,U],et=()=>["","none","full",d,Z,G],en=()=>["",M,Q,U],eo=()=>["solid","dashed","dotted","double"],el=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ei=()=>["","none",f,Z,G],es=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Z,G],ea=()=>["none",M,Z,G],ed=()=>["none",M,Z,G],ec=()=>[M,Z,G],eu=()=>[j,"full",...E()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[S],breakpoint:[S],color:[R],container:[S],"drop-shadow":[S],ease:["in","out","in-out"],font:[_],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[S],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[S],shadow:[S],spacing:["px",M],text:[S],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",j,G,Z,b]}],container:["container"],columns:[{columns:[M,G,Z,s]}],"break-after":[{"break-after":h()}],"break-before":[{"break-before":h()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...y(),G,Z]}],overflow:[{overflow:x()}],"overflow-x":[{"overflow-x":x()}],"overflow-y":[{"overflow-y":x()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:N()}],"inset-x":[{"inset-x":N()}],"inset-y":[{"inset-y":N()}],start:[{start:N()}],end:[{end:N()}],top:[{top:N()}],right:[{right:N()}],bottom:[{bottom:N()}],left:[{left:N()}],visibility:["visible","invisible","collapse"],z:[{z:[L,"auto",Z,G]}],basis:[{basis:[j,"full","auto",s,...E()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[M,j,"auto","initial","none",G]}],grow:[{grow:["",M,Z,G]}],shrink:[{shrink:["",M,Z,G]}],order:[{order:[L,"first","last","none",Z,G]}],"grid-cols":[{"grid-cols":z()}],"col-start-end":[{col:C()}],"col-start":[{"col-start":O()}],"col-end":[{"col-end":O()}],"grid-rows":[{"grid-rows":z()}],"row-start-end":[{row:C()}],"row-start":[{"row-start":O()}],"row-end":[{"row-end":O()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":P()}],"auto-rows":[{"auto-rows":P()}],gap:[{gap:E()}],"gap-x":[{"gap-x":E()}],"gap-y":[{"gap-y":E()}],"justify-content":[{justify:[...D(),"normal"]}],"justify-items":[{"justify-items":[...$(),"normal"]}],"justify-self":[{"justify-self":["auto",...$()]}],"align-content":[{content:["normal",...D()]}],"align-items":[{items:[...$(),"baseline"]}],"align-self":[{self:["auto",...$(),"baseline"]}],"place-content":[{"place-content":D()}],"place-items":[{"place-items":[...$(),"baseline"]}],"place-self":[{"place-self":["auto",...$()]}],p:[{p:E()}],px:[{px:E()}],py:[{py:E()}],ps:[{ps:E()}],pe:[{pe:E()}],pt:[{pt:E()}],pr:[{pr:E()}],pb:[{pb:E()}],pl:[{pl:E()}],m:[{m:A()}],mx:[{mx:A()}],my:[{my:A()}],ms:[{ms:A()}],me:[{me:A()}],mt:[{mt:A()}],mr:[{mr:A()}],mb:[{mb:A()}],ml:[{ml:A()}],"space-x":[{"space-x":E()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":E()}],"space-y-reverse":["space-y-reverse"],size:[{size:W()}],w:[{w:[s,"screen",...W()]}],"min-w":[{"min-w":[s,"screen","none",...W()]}],"max-w":[{"max-w":[s,"screen","none","prose",{screen:[i]},...W()]}],h:[{h:["screen",...W()]}],"min-h":[{"min-h":["screen","none",...W()]}],"max-h":[{"max-h":["screen",...W()]}],"font-size":[{text:["base",t,Q,U]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,Z,F]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",T,G]}],"font-family":[{font:[X,G,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,Z,G]}],"line-clamp":[{"line-clamp":[M,"none",Z,F]}],leading:[{leading:[l,...E()]}],"list-image":[{"list-image":["none",Z,G]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Z,G]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:ee()}],"text-color":[{text:ee()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...eo(),"wavy"]}],"text-decoration-thickness":[{decoration:[M,"from-font","auto",Z,U]}],"text-decoration-color":[{decoration:ee()}],"underline-offset":[{"underline-offset":[M,"auto",Z,G]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:E()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Z,G]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Z,G]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...y(),H,B]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",J,I]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},L,Z,G],radial:["",Z,G],conic:[L,Z,G]},K,V]}],"bg-color":[{bg:ee()}],"gradient-from-pos":[{from:er()}],"gradient-via-pos":[{via:er()}],"gradient-to-pos":[{to:er()}],"gradient-from":[{from:ee()}],"gradient-via":[{via:ee()}],"gradient-to":[{to:ee()}],rounded:[{rounded:et()}],"rounded-s":[{"rounded-s":et()}],"rounded-e":[{"rounded-e":et()}],"rounded-t":[{"rounded-t":et()}],"rounded-r":[{"rounded-r":et()}],"rounded-b":[{"rounded-b":et()}],"rounded-l":[{"rounded-l":et()}],"rounded-ss":[{"rounded-ss":et()}],"rounded-se":[{"rounded-se":et()}],"rounded-ee":[{"rounded-ee":et()}],"rounded-es":[{"rounded-es":et()}],"rounded-tl":[{"rounded-tl":et()}],"rounded-tr":[{"rounded-tr":et()}],"rounded-br":[{"rounded-br":et()}],"rounded-bl":[{"rounded-bl":et()}],"border-w":[{border:en()}],"border-w-x":[{"border-x":en()}],"border-w-y":[{"border-y":en()}],"border-w-s":[{"border-s":en()}],"border-w-e":[{"border-e":en()}],"border-w-t":[{"border-t":en()}],"border-w-r":[{"border-r":en()}],"border-w-b":[{"border-b":en()}],"border-w-l":[{"border-l":en()}],"divide-x":[{"divide-x":en()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":en()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...eo(),"hidden","none"]}],"divide-style":[{divide:[...eo(),"hidden","none"]}],"border-color":[{border:ee()}],"border-color-x":[{"border-x":ee()}],"border-color-y":[{"border-y":ee()}],"border-color-s":[{"border-s":ee()}],"border-color-e":[{"border-e":ee()}],"border-color-t":[{"border-t":ee()}],"border-color-r":[{"border-r":ee()}],"border-color-b":[{"border-b":ee()}],"border-color-l":[{"border-l":ee()}],"divide-color":[{divide:ee()}],"outline-style":[{outline:[...eo(),"none","hidden"]}],"outline-offset":[{"outline-offset":[M,Z,G]}],"outline-w":[{outline:["",M,Q,U]}],"outline-color":[{outline:[e]}],shadow:[{shadow:["","none",c,Y,q]}],"shadow-color":[{shadow:ee()}],"inset-shadow":[{"inset-shadow":["none",Z,G,u]}],"inset-shadow-color":[{"inset-shadow":ee()}],"ring-w":[{ring:en()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:ee()}],"ring-offset-w":[{"ring-offset":[M,U]}],"ring-offset-color":[{"ring-offset":ee()}],"inset-ring-w":[{"inset-ring":en()}],"inset-ring-color":[{"inset-ring":ee()}],opacity:[{opacity:[M,Z,G]}],"mix-blend":[{"mix-blend":[...el(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":el()}],filter:[{filter:["","none",Z,G]}],blur:[{blur:ei()}],brightness:[{brightness:[M,Z,G]}],contrast:[{contrast:[M,Z,G]}],"drop-shadow":[{"drop-shadow":["","none",p,Z,G]}],grayscale:[{grayscale:["",M,Z,G]}],"hue-rotate":[{"hue-rotate":[M,Z,G]}],invert:[{invert:["",M,Z,G]}],saturate:[{saturate:[M,Z,G]}],sepia:[{sepia:["",M,Z,G]}],"backdrop-filter":[{"backdrop-filter":["","none",Z,G]}],"backdrop-blur":[{"backdrop-blur":ei()}],"backdrop-brightness":[{"backdrop-brightness":[M,Z,G]}],"backdrop-contrast":[{"backdrop-contrast":[M,Z,G]}],"backdrop-grayscale":[{"backdrop-grayscale":["",M,Z,G]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[M,Z,G]}],"backdrop-invert":[{"backdrop-invert":["",M,Z,G]}],"backdrop-opacity":[{"backdrop-opacity":[M,Z,G]}],"backdrop-saturate":[{"backdrop-saturate":[M,Z,G]}],"backdrop-sepia":[{"backdrop-sepia":["",M,Z,G]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":E()}],"border-spacing-x":[{"border-spacing-x":E()}],"border-spacing-y":[{"border-spacing-y":E()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Z,G]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[M,"initial",Z,G]}],ease:[{ease:["linear","initial",g,Z,G]}],delay:[{delay:[M,Z,G]}],animate:[{animate:["none",v,Z,G]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[m,Z,G]}],"perspective-origin":[{"perspective-origin":es()}],rotate:[{rotate:ea()}],"rotate-x":[{"rotate-x":ea()}],"rotate-y":[{"rotate-y":ea()}],"rotate-z":[{"rotate-z":ea()}],scale:[{scale:ed()}],"scale-x":[{"scale-x":ed()}],"scale-y":[{"scale-y":ed()}],"scale-z":[{"scale-z":ed()}],"scale-3d":["scale-3d"],skew:[{skew:ec()}],"skew-x":[{"skew-x":ec()}],"skew-y":[{"skew-y":ec()}],transform:[{transform:[Z,G,"","none","gpu","cpu"]}],"transform-origin":[{origin:es()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:eu()}],"translate-x":[{"translate-x":eu()}],"translate-y":[{"translate-y":eu()}],"translate-z":[{"translate-z":eu()}],"translate-none":["translate-none"],accent:[{accent:ee()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:ee()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Z,G]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":E()}],"scroll-mx":[{"scroll-mx":E()}],"scroll-my":[{"scroll-my":E()}],"scroll-ms":[{"scroll-ms":E()}],"scroll-me":[{"scroll-me":E()}],"scroll-mt":[{"scroll-mt":E()}],"scroll-mr":[{"scroll-mr":E()}],"scroll-mb":[{"scroll-mb":E()}],"scroll-ml":[{"scroll-ml":E()}],"scroll-p":[{"scroll-p":E()}],"scroll-px":[{"scroll-px":E()}],"scroll-py":[{"scroll-py":E()}],"scroll-ps":[{"scroll-ps":E()}],"scroll-pe":[{"scroll-pe":E()}],"scroll-pt":[{"scroll-pt":E()}],"scroll-pr":[{"scroll-pr":E()}],"scroll-pb":[{"scroll-pb":E()}],"scroll-pl":[{"scroll-pl":E()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Z,G]}],fill:[{fill:["none",...ee()]}],"stroke-w":[{stroke:[M,Q,U,F]}],stroke:[{stroke:["none",...ee()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}})}}]);