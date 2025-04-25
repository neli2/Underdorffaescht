import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/functions";
import "firebase/compat/analytics";

export const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore();

export const getDocument = (collection, id) => {
  return firestore
    .collection(collection)
    .doc(id)
    .get()
    .then((snapshot) => {
      return snapshot.data();
    })
    .catch((err) => console.log(err));
};

export const setDocument = (collection, data) => {
  return firestore.collection(collection).doc().set(data);
};

export const updateDocument = (collection, id, data) => {
  return firestore.collection(collection).doc(id).update(data);
};

export const getCollection = (collection) => {
  return firestore
    .collection(collection)
    .get()
    .then((snapshot) => {
      const rawData = snapshot.docs.map((doc) => {
        const docId = { doc: doc.id };
        const docData = doc.data();
        return { ...docId, ...docData };
      });
      return rawData;
    })
    .catch((err) => console.log(err));
};

export const getSortedCollection = (collection) => {
  return firestore
    .collection(collection)
    .orderBy("timestamp")
    .get()
    .then((snapshot) => {
      const rawData = snapshot.docs.map((doc) => {
        const docId = { id: doc.id };
        const docData = doc.data();
        return { ...docId, ...docData };
      });
      return rawData;
    })
    .catch((err) => console.log(err));
};

export const streamCollection = (
  collection,
  onAddSnapshots,
  onModSnapshots,
  onDelSnapshots
) => {
  const unsuscribe = firestore.collection(collection).onSnapshot((snapshot) => {
    var addData = [];
    var modData = [];
    var delData = [];

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

  return () => {
    unsuscribe();
  };
};
