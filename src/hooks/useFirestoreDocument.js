import { useState, useEffect } from 'react';
import {
  getFirestore,
  doc,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
} from 'firebase/firestore';

const useFirestoreDocument = (collectionName, documentId) => {
  const [documentData, setDocumentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const firestore = getFirestore();
    const documentRef = doc(firestore, collectionName, documentId);

    const unsubscribe = onSnapshot(documentRef, (snapshot) => {
      try {
        if (snapshot.exists()) {
          setDocumentData({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.error(`Document with ID ${documentId} does not exist.`);
          setDocumentData(null);
        }
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching document from ${collectionName}:`, error.message);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [collectionName, documentId]);

  const addDocument = async (newData) => {
    const firestore = getFirestore();
    const collectionRef = doc(firestore, collectionName);

    try {
      const docRef = await addDoc(collectionRef, newData);
      return docRef.id;
    } catch (error) {
      console.error(`Error adding document to ${collectionName}:`, error.message);
      return null;
    }
  };

  const updateDocument = async (updatedData) => {
    const firestore = getFirestore();
    const documentRef = doc(firestore, collectionName, documentId);

    try {
      await updateDoc(documentRef, updatedData);
    } catch (error) {
      console.error(`Error updating document in ${collectionName}:`, error.message);
    }
  };

  const deleteDocument = async () => {
    const firestore = getFirestore();
    const documentRef = doc(firestore, collectionName, documentId);

    try {
      await deleteDoc(documentRef);
    } catch (error) {
      console.error(`Error deleting document from ${collectionName}:`, error.message);
    }
  };

  return { documentData, loading, addDocument, updateDocument, deleteDocument };
};

export default useFirestoreDocument;
