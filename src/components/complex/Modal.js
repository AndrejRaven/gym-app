import ReactDOM from "react-dom";
import styled from "styled-components";
import Backdrop from "./Backdrop";

const Modal = styled.div`
  z-index: 100;
  position: fixed;
  top: 22vh;
  .close-icon {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.heading};
    transition: 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.textWhite};
    }
  }
`;

const ModalOverlay = (props) => {
  const content = (
    <Backdrop>
        <Modal>{props.children}</Modal>
    </Backdrop>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

export default ModalOverlay;