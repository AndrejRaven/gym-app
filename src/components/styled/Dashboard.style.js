import styled from "styled-components";

export const DashboardContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export  const SectionsContainers = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 30px;
  @media (max-width: 578px) {
    flex-direction: column-reverse;
    gap: 0; /* Change to column layout when width is smaller than 578px */
  }
`;

export const SectionContainer = styled.div`
  flex: 1;
  width: 100%;
`;

export const SectionTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #007bff;
`;

export const MainContent = styled.div`
  display: flex;
  margin: 0 auto;
  margin-left: 30px;
  flex-direction: column;
  flex: 0.75;
  width: 70%;
  gap: 30px;
  @media (max-width: 578px) {
    flex: 1;
    width: 100%;
  }
`;

export const Aside = styled.aside`
  flex: 0.25;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 50px;
  margin-right: 30px;
  @media (max-width: 578px) {
    flex: 0.9;
    width: 90%;
    margin: 0;
  }
`;
