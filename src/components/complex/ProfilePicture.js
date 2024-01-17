import React from "react";
import styled from "styled-components";
import { MdEdit } from "react-icons/md";

const ProfilePictureContainer = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const EditOverlay = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.textWhite};
  background-color: transparent; /* Initial background color */
  transition: background-color 0.3s ease; /* Add a smooth transition effect */
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    cursor: pointer;
    text-align: center;
    color: ${({ theme }) => theme.colors.heading};
  }
`;

const ProfilePicture = ({ imageUrl, onEditClick, editable }) => {
  return (
    <ProfilePictureContainer>
      <ProfileImage src={imageUrl} alt="Profile" />
      { editable ? <EditOverlay onClick={onEditClick}>
        <MdEdit />
      </EditOverlay> : null}
    </ProfilePictureContainer>
  );
};

export default ProfilePicture;
