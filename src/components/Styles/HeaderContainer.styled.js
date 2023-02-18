import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  border: 1px solid ${({ theme }) => theme.colors.lineColor};
  padding: 20px;
  text-align: center;
  font-weight: bold;
`;

