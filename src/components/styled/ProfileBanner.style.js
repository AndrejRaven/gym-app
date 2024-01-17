import styled from "styled-components";

// Define reusable components for better organization
export const Container = styled.div`
  background: linear-gradient(45deg, #ffff, #bbbbbb);
  margin-bottom: 20px; /* Add margin for better spacing */
  min-height: 80vh;
  color: ${({ theme }) => theme.colors.textWhite};
  position: relative;
  z-index: 3;
`;

export const Image = styled.img`
  position: absolute;
  height: 100%;
  right: 100px;
  bottom: 0;
  z-index: -10;
  filter: brightness(-2);
`;

export const Title = styled.h1`
  font-size: 72px;
  font-weight: bold;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: 10px; /* Add margin for better spacing */
  color: ${({ theme }) => theme.colors.heading};
`;

export const StatusList = styled.ul`
  list-style: none;
  flex: 1; /* Use flex: 1 to make the list take available space */
  margin: 0;
  margin-top: 50px;
  padding: 0;
`;

export const StatusItem = styled.li`
  margin-bottom: 20px; /* Add margin for better spacing between items */
  color: ${({ theme }) => theme.colors.heading};
  font-size: 24px;
`;

export const StatusContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap; /* Allow items to wrap to the next line if necessary */
  justify-content: space-between;
  max-width: 1200px;
`;