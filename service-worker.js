!function(){"use strict";const e=1604891187899,t="cache"+e,n=["/client/client.0288b9dc.js","/client/inject_styles.5607aec6.js","/client/client.a2f1460a.js","/client/index.4e210ada.js","/client/markmap.2ec94683.js","/client/footer.918fbd0e.js","/client/usage.0ad5c57f.js","/client/docs.83737277.js","/client/full.c8716a45.js","/client/loader.484e2e33.js","/client/repl.712914a8.js","/client/buttons.esm.87b24c20.js","/client/codemirror.ab024139.js"].concat(["/service-worker-index.html","/donate/alipay.svg","/donate/paypal.svg","/donate/qr_alipay.png","/donate/qr_wechat.png","/donate/wechat.svg","/favicon.png","/logo-192.png","/logo-512.png","/manifest.json","/style.css"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&s.has(n.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then((async e=>{try{const n=await fetch(t.request);return e.put(t.request,n.clone()),n}catch(n){const s=await e.match(t.request);if(s)return s;throw n}})))))}))}();