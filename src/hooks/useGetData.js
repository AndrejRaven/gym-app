import { useState, useEffect } from 'react';
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const useFirestore = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const firestore = getFirestore();
    const collectionRef = collection(firestore, collectionName);

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      try {
        const newData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(newData);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching data from ${collectionName}:`, error.message);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [collectionName]);

  const addData = async (newData) => {
    const firestore = getFirestore();
    const collectionRef = collection(firestore, collectionName);

    try {
      await addDoc(collectionRef, newData);
    } catch (error) {
      console.error(`Error adding data to ${collectionName}:`, error.message);
    }
  };

  const updateData = async (id, updatedData) => {
    const firestore = getFirestore();
    const documentRef = doc(firestore, collectionName, id);

    try {
      await updateDoc(documentRef, updatedData);
    } catch (error) {
      console.error(`Error updating data in ${collectionName}:`, error.message);
    }
  };

  const deleteData = async (id) => {
    const firestore = getFirestore();
    const documentRef = doc(firestore, collectionName, id);

    try {
      await deleteDoc(documentRef);
    } catch (error) {
      console.error(`Error deleting data from ${collectionName}:`, error.message);
    }
  };

  return { data, loading, addData, updateData, deleteData };
};

export default useFirestore;
