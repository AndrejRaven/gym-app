import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
`;

const MainContainer = styled.div`
  min-height: 80vh;
`;



const Root = () => {
  return (
    <AppContainer>
      <Navbar />
      <MainContainer>
        <Outlet />
      </MainContainer>
        <Footer />
    </AppContainer>
  );
};

export default Root;
