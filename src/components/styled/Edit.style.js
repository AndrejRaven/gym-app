import styled from "styled-components";

export const Underline = styled.div`
  width: 100%;
  height: 1px;
  background-color: #bfbfbf;
`;

export const Grid = styled.div`
  display: flex;
  width: 100%;
  margin: 30px 0;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 10%;
  justify-content: ${({ $spaceBetween }) => $spaceBetween && "space-between"};

  div {
    &.sx-1 {
      flex: 1;
    }
    &.sx-2 {
      flex: 2;
    }
    &.sx-3 {
      flex: 3;
    }
    &.sx-4 {
      flex: 4;
    }
    &.sx-5 {
      flex: 5;
    }
  }
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: 1px solid red;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: 10px;
  margin-right: 10px;
  background-color: ${({ variant }) =>
    variant === "outlined" ? "transparent" : "#007bff"};
  color: ${({ variant }) => (variant === "outlined" ? "#007bff" : "#fff")};
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    filter: grayscale(10)
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  .close-icon {
    align-self: flex-end;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
`;