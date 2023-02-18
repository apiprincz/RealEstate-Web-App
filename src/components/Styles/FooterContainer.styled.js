import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.text};
  padding: 40px 20px;
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.background};
  }
`;