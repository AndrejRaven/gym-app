import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframe for the spinning animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


const SpinnerContainer = styled.div`
  margin-top: 100px;
  width: ${(props) => props.size || "40px"};
  height: ${(props) => props.size || "40px"};
  border: ${(props) => props.borderWidth || "4px"} solid
    ${(props) => props.color || "#f3f3f3"};
  border-top: ${(props) => props.borderWidth || "4px"} solid
    ${(props) => props.spinnerColor || "#3498db"};
  border-radius: 50%;
  animation: ${spin} ${(props) => props.speed || "0.8s"} linear infinite;
`;

const Spinner = ({ size, borderWidth, color, spinnerColor, speed }) => {
  return (
    <Container>
      <SpinnerContainer
        size={size}
        borderWidth={borderWidth}
        color={color}
        spinnerColor={spinnerColor}
        speed={speed}
      />
    </Container>
  );
};

export default Spinner;
