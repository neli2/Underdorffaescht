import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Initialize Firebase only if it hasn't been initialized already
export const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export const firestore = app.firestore();

export const setDocument = (collection, data) => {
  return firestore.collection(collection).doc().set({
    ...data,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
};

export const streamCollection = (
  collection,
  onAddSnapshots,
  onModSnapshots,
  onDelSnapshots
) => {
  const unsubscribe = firestore.collection(collection).onSnapshot((snapshot) => {
    const addData = [];
    const modData = [];
    const delData = [];

    snapshot.docChanges().forEach((data) => {
      const obj = data.doc.data();
      obj["id"] = data.doc.id;
      if (data.type === "added") {
        addData.push(obj);
      } else if (data.type === "modified") {
        modData.push(obj);
      } else if (data.type === "removed") {
        delData.push(obj);
      }
    });

    if (addData.length !== 0) onAddSnapshots(addData);
    if (modData.length !== 0) onModSnapshots(modData);
    if (delData.length !== 0) onDelSnapshots(delData);
  });

  return unsubscribe;
};
