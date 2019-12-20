importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");
// importScripts("../../../dist/umd/comlink.js");

importScripts("https://www.gstatic.com/firebasejs/5.0.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.0.4/firebase-firestore.js");

importScripts("/assets/worker-fire/bundles/vitaba-worker-fire-data-access.umd.js");
// importScripts("https://firebasestorage.googleapis.com/v0/b/vitaba-7f5f6.appspot.com/o/vitaba-worker-fire-data-access.umd.js?alt=media&token=9d180a35-1d92-4212-9b15-e9f4976fe139");
console.log(vitaba);
Comlink.expose(vitaba["worker-fire-data-access"].workerFirestore,self);