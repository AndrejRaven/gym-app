import { useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getFirestore,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const auth = getAuth();
const db = getFirestore();

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [firestoreUser, setFirestoreUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        // User is signed in
        try {
          // Check if the user document exists in the database
          const userDocRef = doc(db, "users", authUser.uid);
          const userDocSnapshot = await getDoc(userDocRef);

          if (!userDocSnapshot.exists()) {
            // User document doesn't exist, create it in the database
            const userData = {
              email: authUser.email,
              displayName: authUser.displayName,
              emailVerified: authUser.emailVerified,
              photoURL: authUser.photoURL,
              phoneNumber: authUser.phoneNumber,
              birthday: null,
              gender: null,
              adress: null,
              password: null,
              points: null,
              membership: null,
              statusMembership: null
            };

            await setDoc(userDocRef, userData);
          }

          setUser(authUser);
          const userData = userDocSnapshot.data();
          setFirestoreUser(userData);
          setLoading(false);
        } catch (error) {
          console.error(
            "Error checking or creating user in the database:",
            error.message
          );
        }
      } else {
        // User is signed out
        setUser(null);
        setFirestoreUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

const updateUserProfile = async (updateData) => {
  try {
    const userDocRef = doc(db, "users", auth.currentUser.uid);

    // Filter out fields not present in auth.currentUser
    const filteredUpdateData = Object.keys(updateData)
      .filter((field) => auth.currentUser[field] !== undefined)
      .reduce((acc, field) => {
        acc[field] = updateData[field];
        return acc;
      }, {});

    // Update user profile in Firestore database
    await updateDoc(userDocRef, filteredUpdateData);
    console.log("User profile updated in the database!");

    // Update user profile in authentication
    await updateProfile(auth.currentUser, filteredUpdateData);
    console.log("User profile updated in authentication!");
  } catch (error) {
    console.error("Error updating user profile:", error.message);
  }
};

const updateProfileField = async (fieldName, fieldValue) => {
  try {
    const userDocRef = doc(db, "users", auth.currentUser.uid);

    // Create an object with the specific field to update
    const updateData = { [fieldName]: fieldValue };

    // Update user profile in Firestore database
    await updateDoc(userDocRef, updateData);
    console.log(`${fieldName} updated in the database!`);

    // Update user profile in authentication
    await updateProfile(auth.currentUser, updateData);
    console.log(`${fieldName} updated in authentication!`);
  } catch (error) {
    console.error(`Error updating ${fieldName}:`, error.message);
    return null; // or throw the error if you want to handle it outside
  }
};

  return { user, firestoreUser, loading, signOut: handleSignOut, updateUserProfile, updateProfileField };
};

export default useAuth;
