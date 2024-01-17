import { Card } from "../styled/Card";
import { Grid, Button, FormLabel, InputField, ModalContainer, Underline } from "../styled/Edit.style";
import PhotoUpload from "./photoUpload";
import { IoIosClose } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const ModalEditProfile = ({ setIsOpen, data }) => {
  const [inputValue, setInputValue] = useState(data?.value);
  const [isChanged, setIsChanged] = useState(false);
  const { updateProfileField } = useAuth();

  const closeModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsChanged(newValue !== data.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChanged) {
      updateProfileField(data.fieldName, inputValue);
    }
    setIsOpen(false);
  };

  return (
    <Card>
      <ModalContainer>
        <button onClick={closeModal} className="close-icon">
          <IoIosClose />
        </button>
        <h4>Edit profile</h4>
        <Underline />
        <Grid $spaceBetween={true} style={{ marginTop: "50px" }}>
          {data.inputType !== "file" && (
            <div className="sx-1">
              <FormLabel>{data.title}</FormLabel>
              <InputField
                type={data.inputType}
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
          )}
          {data.inputType === "file" && <PhotoUpload onUploadSuccess={console.log("ff")} />}
          <div style={{ display: "flex", gap: "10px", marginTop: "30px", justifyContent: "flex-end", width: '100%' }}>
            <Button onClick={closeModal} variant="outlined">
              Cancel
            </Button>
            <Button onClick={handleSubmit} type="submit" disabled={!isChanged}>
              Save
            </Button>
          </div>
        </Grid>
      </ModalContainer>
    </Card>
  );
};

export default ModalEditProfile;