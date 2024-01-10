import styled from "styled-components";

const FooterContainer = styled.footer`
  background: linear-gradient(10deg , black, #007bff, black);
  color: ${({ theme }) => theme.colors.textWhite};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sm};
`;
const Footer = () => {
  return (
    <FooterContainer>
      <footer>
        <p>&copy; 2023 Fitness Club</p>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
