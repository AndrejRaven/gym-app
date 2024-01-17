import React from "react";
import {
  Container,
  Image,
  StatusContainer,
  StatusItem,
  StatusList,
  Title,
} from "../styled/ProfileBanner.style";
import Button from "./Buttons";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProfileBanner = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  
  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <Container>
      <Image
        loading="lazy"
        src="https://pngimg.com/uploads/fitness/fitness_PNG139.png"
      />
      <Title>
        Welcome,
        <br /> {user?.displayName}
      </Title>
      <StatusContainer>
        <StatusList>
          <StatusItem>
            <p>
              Status: <b>Active (till 22.03.23)</b>
            </p>
          </StatusItem>
          <StatusItem>
            <p>Membership: Platinum</p>
          </StatusItem>
          <StatusItem>
            <Button
              classes="blue button-start"
              onClick={() => handleClick("/profile")}
            >
              My Profile
            </Button>
            <Button classes="button-start">My Schedule</Button>
          </StatusItem>
        </StatusList>
        <StatusList>
          <StatusItem style={{ float: "right" }}>
            <p>
              Points: <b>993</b>
            </p>
          </StatusItem>
        </StatusList>
      </StatusContainer>
    </Container>
  );
};

export default ProfileBanner;