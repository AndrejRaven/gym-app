import styled from "styled-components";
import Button from "./Buttons";

// Define reusable components for better organization
const Container = styled.div`
  background: linear-gradient(45deg , #ffff, #bbbbbb);
  margin-bottom: 20px; /* Add margin for better spacing */
  min-height: 80vh;
  color: ${({ theme }) => theme.colors.textWhite};
  position: relative;
  z-index: 3;
`;

const Image = styled.img`
  position: absolute;
  height: 100%;
  right: 100px;
  bottom: 0;
  z-index:-10;
  filter: brightness(-2);
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: bold;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: 10px; /* Add margin for better spacing */
  color: ${({ theme }) => theme.colors.heading};
`;

const StatusList = styled.ul`
  list-style: none;
  flex: 1; /* Use flex: 1 to make the list take available space */
  margin: 0;
  margin-top: 50px;
  padding: 0;
`;

const StatusItem = styled.li`
  margin-bottom: 20px; /* Add margin for better spacing between items */
  color: ${({ theme }) => theme.colors.heading};
  font-size: 24px;
`;

const StatusContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap; /* Allow items to wrap to the next line if necessary */
  justify-content: space-between;
  max-width: 1200px;
`;

const ProfileBanner = () => {
  return (
    <Container>
      <Image src="https://pngimg.com/uploads/fitness/fitness_PNG139.png" />
        <Title>
          Welcome,
          <br /> Andrii Babiak
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
              <Button classes="blue button-start">My Profile</Button>
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
