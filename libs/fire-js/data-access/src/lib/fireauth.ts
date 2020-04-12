// tslint:disable:no-any no-unsafe-any
declare var firebase: any;
let auth: any;

const subscribers = [];

function uuid() {
  // tslint:disable-next-line: restrict-plus-operands
  return (([1e7] as any) + 1e3 + 4e3 + 8e3).replace(/[018]/g, (c: any) =>
    // tslint:disable: no-bitwise
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16),
  );
}

export const workerFireauth = {
  initFirebase() {
    if (auth) {
      console.error('You cannot initialize firebase twice');

      return;
    }
    auth = firebase.auth();
  },
  getIdToken(callback, _error) {
    const uid = uuid();
    const authRef = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken().then(
          idToken => {
            callback({ uid, data: idToken });
          },
          error => {
            callback({ uid, data: error });
          },
        );
      } else {
        callback({ uid, data: null });
      }
    });
    subscribers.push({ uid, ref: authRef });
  },
};
