// tslint:disable:no-any no-unsafe-any
declare var firebase: any;
let storage: any;

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

export const workerFirestorage = {
  initFirebase() {
    if (storage) {
      console.error('You cannot initialize firebase twice');

      return;
    }
    storage = firebase.storage();
  },
  // Create a reference from a Google Cloud Storage URI
  downloadFile(
    reference,
    callback,
    _error,
  ) {
    const uid = uuid();

    const gsReference = storage.refFromURL(reference);

    // Get the download URL
    gsReference.getDownloadURL().then(url => {
      callback({ uid, data: { ...url } });
    }).catch(error => {
      console.error('Error getDownloadURL: ', error);
    });
  },

};
