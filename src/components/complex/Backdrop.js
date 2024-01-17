import ReactDOM from "react-dom";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <Background>
      {props.children}
    </Background>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
