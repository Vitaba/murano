// tslint:disable:no-any no-unsafe-any
declare var firebase: any;

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCoUxrUunx1KFyHwjzsm1BjH4hdlfLyvL4',
  appId: '1:236556781436:web:9a0428ccef47322d6c06f9',
  authDomain: 'vitaba-7f5f6.firebaseapp.com',
  databaseURL: 'https://vitaba-7f5f6.firebaseio.com',
  measurementId: 'G-4PLL0L5B95',
  messagingSenderId: '236556781436',
  projectId: 'vitaba-7f5f6',
  storageBucket: 'vitaba-7f5f6.appspot.com',
});
const firestore = app.firestore();

function uuid() {
  // tslint:disable-next-line: restrict-plus-operands
  return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(
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
  getCollection(collection, callback, _error) {
    const uid = uuid();
    const restaurantsCol = firestore.collection(collection);
    const snapshotRef = restaurantsCol.onSnapshot(snap => {
        // unwrap the data from the snapshot
      callback({ uid, data: snap.docs.map(d => d.data()) });
    });
    subscribers.push({ uid, ref: snapshotRef });
  },
  unsubscribe(uid) {
    const listener = subscribers.find(i => i.uid === uid);
    if (listener) {
      listener.ref();
    }
  },
};
