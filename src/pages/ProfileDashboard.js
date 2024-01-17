import React, { useState, useEffect } from "react";
import {
  Content,
  DashboardContainer,
  NavMenu,
} from "../components/styled/ProfileDashboard.style.js";
import ProfilePicture from "../components/complex/ProfilePicture.js";
import { FaUser, FaCreditCard, FaLock, FaDatabase } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Card, CardDescription } from "../components/styled/Card.js";
import ModalOverlay from "../components/complex/Modal.js";
import ModalEditProfile from "../components/complex/Edit.js";
import Spinner from "../components/complex/Spinner.js";
import { auth } from "../firebase.js";
import useFirestoreDocument from "../hooks/useFirestoreDocument.js";

const ProfileDashboard = () => {
  const [activeItem, setActiveItem] = useState("profile");
  const [isOpen, setIsOpen] = useState(false);
  const [modalContext, setModalContext] = useState({});

    const { documentData: firestoreUser, loading } = useFirestoreDocument('users', auth.currentUser.uid);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleOpenModal = (e, { inputType, fieldName, value, title }) => {
    e.preventDefault();
    setModalContext({ inputType, fieldName, value, title });
    setIsOpen(true);
  };

  const renderProfileField = (title, fieldName, field, inputType = "text") => (
    <p>
      {title}: {field ? field : "---"}
      <span style={{ cursor: "pointer" }}>
        <MdEdit
          onClick={(e) =>
            handleOpenModal(e, { inputType, fieldName, value: field, title })
          }
        />
      </span>
    </p>
  );

  if (loading || !firestoreUser) {
    // You can return a loading indicator or null while data is being fetched
    return <Spinner />;
  }

  return (
    <DashboardContainer>
      {isOpen && (
        <ModalOverlay>
          <ModalEditProfile setIsOpen={setIsOpen} data={modalContext} />
        </ModalOverlay>
      )}
      <NavMenu>
        <ul>
          {[
            { icon: <FaUser />, label: "Personal info", item: "profile" },
            {
              icon: <FaCreditCard />,
              label: "Payments & Subscription",
              item: "payments",
            },
            { icon: <FaDatabase />, label: "Data & Privacy", item: "data" },
            { icon: <FaLock />, label: "Security", item: "security" },
          ].map((navItem) => (
            <li
              key={navItem.item}
              onClick={() => handleItemClick(navItem.item)}
              className={activeItem === navItem.item ? "active" : ""}
            >
              {navItem.icon} <span>{navItem.label}</span>
            </li>
          ))}
        </ul>
      </NavMenu>
      <Content>
        {activeItem === "profile" && (
          <div>
            <h1 style={{ marginBottom: "20px" }}>Profile Information</h1>
            <Card>
              <CardDescription>
                <h4>Basic info</h4>
                <ProfilePicture
                  imageUrl={firestoreUser?.photoURL}
                  editable={true}
                  onEditClick={(e) =>
                    handleOpenModal(e, {
                      inputType: "file",
                      fieldName: 'photoURL',
                      value: firestoreUser?.photoURL,
                      title: "Photo",
                    })
                  }
                />
                {renderProfileField("Name", "displayName", firestoreUser?.displayName)}
                {renderProfileField(
                  "Birthday",
                  "birthday",
                  firestoreUser?.birthday,
                  "date"
                )}
                {renderProfileField("Gender", 'gender', firestoreUser?.gender, "select")}
              </CardDescription>
            </Card>
            <Card>
              <CardDescription>
                <h4>Contact info</h4>
                {renderProfileField("Email", "email", firestoreUser?.email, "email")}
                {renderProfileField("Phone", "phoneNumber", firestoreUser?.phoneNumber, "tel")}
                {renderProfileField("Address", "adress", firestoreUser?.adress, "adress")}
              </CardDescription>
            </Card>
            <Card>
              <CardDescription>
                <h4>Password</h4>
                {renderProfileField(
                  "Password",
                  "password",
                  firestoreUser?.password,
                  "password"
                )}
              </CardDescription>
            </Card>
          </div>
        )}
        {activeItem === "payments" && (
          <h1>Payments and Subscription Content</h1>
        )}
        {activeItem === "data" && <h1>Data and Privacy Content</h1>}
        {activeItem === "security" && <h1>Security Content</h1>}
      </Content>
    </DashboardContainer>
  );
};

export default ProfileDashboard;
