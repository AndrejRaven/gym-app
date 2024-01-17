import styled from "styled-components";

export const Card = styled.div`
  background: linear-gradient(45deg, #ffff, #bbbbbb);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden; /* Ensure content does not overflow the rounded corners */
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row; /* Default flex direction is row */

  &.column {
    flex-direction: column-reverse;
  }

  &.small {
    max-width: 450px;
    text-align: center;
    background: none;
    border: none;
    box-shadow: none;
  }

  @media (max-width: 578px) {
    flex-direction: column-reverse; 
    max-width: 300px;/* Change to column layout when width is smaller than 578px */
  }
`;

export const CardDescription = styled.div`
  flex: 1; /* Take remaining space in the flex container */
  padding: 20px;
  p {
    padding: 10px;
  }
`;

export const CardImage = styled.div`
  flex-shrink: 0; /* Do not shrink the image to fit */
  max-width: 400px;
  overflow: hidden; /* Ensure the image doesn't overflow the container */
  img {
    width: 100%;
    height: 100%;
    object-fit: fill; /* Maintain the aspect ratio and cover the entire space */
  }

  &.small {
    max-width: 100px;
    max-height: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Maintain the aspect ratio and cover the entire space */
    }
  }
  &.achivement {
    position: relative;
    margin: 0 auto;
    margin-top: 20px;
    width: 100%;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: ${(props) => `url(${props.back}) no-repeat center`};
      background-size: contain;
      -webkit-mask-image: ${(props) =>
        `linear-gradient(to right, transparent ${props.progress}%, black ${props.progress}%)`};
      mask-image: ${(props) =>
        `linear-gradient(to right, transparent ${props.progress}%, black ${props.progress}%)`};
      filter: grayscale(100%);
    }
  }
`;