import { Container, SpinnerContainer } from "../styled/Spinner.style";

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
