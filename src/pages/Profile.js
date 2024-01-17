import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, updateProfile } from "firebase/auth";
import PhotoUpload from "../components/complex/photoUpload";
import useAuth from '../hooks/useAuth';
import styled from "styled-components";

const ProfileFormContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: 1px solid red;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    filter: grayscale(10)
  }
`;

const ProfileForm = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const { updateUserProfile } = useAuth();

  const [initialState, setInitialState] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    photoURL: user?.photoURL || "",
  });

  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    photoURL: user?.photoURL || "",
  });

  const handleUpdateProfile = async () => {
    try {
      // Update user profile in authentication
      await updateProfile(auth.currentUser, {
        displayName: formData.displayName || null,
        email: formData.email || null,
        phoneNumber: formData.phoneNumber || null,
        photoURL: formData.photoURL || null,
      });
  
      updateUserProfile({
        displayName: formData.displayName || null,
        email: formData.email || null,
        phoneNumber: formData.phoneNumber || null,
        photoURL: formData.photoURL || null,
      })
  
      console.log("Profile updated successfully!");
      setInitialState({ ...formData }); // Update initial state after successful update
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  const handleUploadSuccess = (uploadedPhotoURL) => {
    console.log(uploadedPhotoURL)
    setFormData({ ...formData, photoURL: uploadedPhotoURL });
  };

  const isFormChanged = !(
    formData.displayName === initialState.displayName &&
    formData.email === initialState.email &&
    formData.phoneNumber === initialState.phoneNumber &&
    formData.photoURL === initialState.photoURL
  );

  return (
    <ProfileFormContainer>
      <Title>Update Profile</Title>
      <FormLabel>Display Name:</FormLabel>
      <InputField
        type="text"
        value={formData.displayName}
        onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
      />
      <FormLabel>Email:</FormLabel>
      <InputField
        type="email"
        disabled
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
       <FormLabel>Photo Upload:</FormLabel>
       <PhotoUpload onUploadSuccess={handleUploadSuccess} />
       <img src={formData.photoURL} style={{ width: '50px', height: '50px'}} />
      <SubmitButton onClick={handleUpdateProfile} disabled={!isFormChanged}>
        Update Profile
      </SubmitButton>
      
    </ProfileFormContainer>
  );
};

export default ProfileForm;
