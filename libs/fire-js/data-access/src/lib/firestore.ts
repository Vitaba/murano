// tslint:disable:no-any no-unsafe-any
declare var firebase: any;

let firestore: any;

function uuid() {
  // tslint:disable-next-line: restrict-plus-operands
  return (([1e7] as any) + 1e3 + 4e3 + 8e3).replace(
    /[018]/g,
    (c: any) =>
      // tslint:disable: no-bitwise
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16),
  );
}

const subscribers = [];
export const workerFirestore = {
  initFirebase(config) {
    if (firestore) {
      console.error('You cannot initialize firebase twice');

      return;
    }
    const app = firebase.initializeApp(config);
    firestore = app.firestore();
    const settings = { timestampsInSnapshots: true };

    firestore.settings(settings);
  },
  getCollection(collection, callback, _error) {
    const uid = uuid();
    const restaurantsCol = firestore.collection(collection);
    const snapshotRef = restaurantsCol.onSnapshot(snap => {
        // unwrap the data from the snapshot
      callback({ uid, data: snap.docs.map(d => d.data()) });
    });
    subscribers.push({ uid, ref: snapshotRef });
  },
  getCollectionDocument(collection, document, callback, _error) {
    const uid = uuid();
    const restaurantsCol = firestore.collection(collection)
    .doc(document);
    const snapshotRef = restaurantsCol.onSnapshot(snap => {
        // unwrap the data from the snapshot
      callback({ uid, data: snap.data() });
    });
    subscribers.push({ uid, ref: snapshotRef });
  },
  getSubCollection(collection, document, subcollection, callback, _error) {
    const uid = uuid();
    const restaurantsCol = firestore.collection(collection)
    .doc(document).collection(subcollection);
    const snapshotRef = restaurantsCol.onSnapshot(snap => {
        // unwrap the data from the snapshot
      callback({ uid, data: snap.docs.map(d => d.data()) });
    });
    subscribers.push({ uid, ref: snapshotRef });
  },
  addDocumentToSubCollection(
    collection, document, subcollection, value, callback, _error) {
    // TODO: Validate the object exists before making the set
    workerFirestore.setDocumentToSubCollection(
      collection, document,
      subcollection, {
        added_at: firebase.firestore.FieldValue.serverTimestamp(),
        hidden: false,
        ...value },
      callback, _error);
  },
  deleteDocumentToSubCollection(
    collection, document, subcollection, docUID, callback, _error) {
    const uid = uuid();
      // TODO: Validate the object exists before making the set
    const restaurantsCol = firestore.collection(collection)
        .doc(document).collection(subcollection).doc(docUID).set(
      { deleted_at: firebase.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });

    restaurantsCol.then(() => {
          callback({ uid });
        }).catch(error => {
          console.error('Error writing document: ', error);
        });
  },
  setDocumentToSubCollection(
    collection, document, subcollection, value, callback, _error) {
    const uid = uuid();
    const docUID = uuid();
    const restaurantsCol = firestore.collection(collection)
    .doc(document).collection(subcollection).doc(docUID).set(
      { id: docUID, ...value }, { merge: true });

    restaurantsCol.then(() => {
      callback({ uid, data: { id: docUID, ...value } });
    }).catch(error => {
      console.error('Error writing document: ', error);
    });
  },
  unsubscribe(uid) {
    const listener = subscribers.find(i => i.uid === uid);
    if (listener) {
      listener.ref();
    }
  },
};
