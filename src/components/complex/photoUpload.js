import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, setDoc, Timestamp } from 'firebase/firestore';
import useAuth from '../../hooks/useAuth';
import ProfilePicture from './ProfilePicture';

const PhotoUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const { user } = useAuth();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file || !user) return;

    const storage = getStorage();
    const storageRef = ref(storage, `photos/${user.uid}`);
    await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(storageRef);

    // Save the download URL and other information to Firestore
    const firestore = getFirestore();
    const userPhotoDocRef = doc(firestore, 'photos', user.uid);

    try {
      // Replace the existing document with the new data
      await setDoc(userPhotoDocRef, {
        url: downloadURL,
        description: 'A description of the photo',
        timestamp: Timestamp.now(),
        // Add other fields as needed
      });

      console.log('Photo uploaded and Firestore document updated.');

      // Pass the downloadURL back to the parent component
      onUploadSuccess(downloadURL);
    } catch (error) {
      console.error('Error updating document: ', error.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Photo</button>
    </div>
  );
};

export default PhotoUpload;
