import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const Slide = styled.div`
  min-width: fit-content;
  box-sizing: border-box;
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #555;
  }

  ${(props) => (props.direction === "next" ? "right: 0;" : "left: 0;")}
`;

const StyledSlider = styled.div`
  /* Add any additional styling for the Slider component here */
`;

const Slider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(getInitialSlidesPerView());

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getInitialSlidesPerView());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 < React.Children.count(children) ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : React.Children.count(children) - 1));
  };

  function getInitialSlidesPerView() {
    return window.innerWidth >= 768 ? 2 : 1; // Adjust breakpoint as needed
  }

  return (
    <StyledSlider>
      <SliderContainer>
        <SliderTrack style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}>
          {React.Children.map(children, (child, index) => (
            <Slide key={index}>{child}</Slide>
          ))}
        </SliderTrack>
        <SliderButton onClick={prevSlide} direction="prev">&#10094;</SliderButton>
        <SliderButton onClick={nextSlide} direction="next">&#10095;</SliderButton>
      </SliderContainer>
    </StyledSlider>
  );
};

export default Slider;
