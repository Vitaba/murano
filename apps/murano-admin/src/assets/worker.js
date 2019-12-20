importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");

importScripts("https://www.gstatic.com/firebasejs/5.0.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.0.4/firebase-firestore.js");

importScripts("/assets/fire-js/bundles/vitaba-fire-js-data-access.umd.js");

console.log(vitaba);
Comlink.expose(vitaba["fire-js-data-access"].workerFirestore,self);