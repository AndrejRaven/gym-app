import styled from "styled-components";


export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 0;
  }
`;

export const NavMenu = styled.div`
  flex: 25%;
  width: 100%;
  padding: 20px;
  @media (max-width: 767px) {
    padding: 20px 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 767px) {
      justify-content: center;
      flex-direction: row;
      gap: 0;
    }
  }

  li {
    cursor: pointer;
    padding: 10px;
    color: #333;
    text-decoration: none;
    border-radius: 12px;
    transition: all 0.1s ease-in-out;
    font-size: 18px;
    display: flex;
    align-items: center;

    &:hover {
      color: #007bff;
      background-color: lightgrey;
    }

    &.active {
      color: #007bff;
      font-weight: bold;
      background-color: lightgrey;
    }

    @media (max-width: 767px) {
      font-size: 24px;
      flex: 25%;
      justify-content: center;
      span {
        font-size: 8px;
      }
    }

    svg {
      margin-right: 10px;
      @media (max-width: 767px) {
        width: 100%;
      }
    }
  }
`;

export const Content = styled.div`
  flex: 75%;
  width: 100%;
`;