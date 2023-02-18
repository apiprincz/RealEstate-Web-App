import styled from "styled-components";


export const ThemeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  font-size:18px;
  lineHeight:20px;
  @media (max-width: 768px) {
    font-size:10px;
  lineHeight:10px;

  }
 
  
`;


