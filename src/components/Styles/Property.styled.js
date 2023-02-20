import styled from "styled-components";



export const PropertyContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBg};
  height: ${props => props.fixedHeight ?  "200px" : ""};

  @media  (max-width:656px){
  height: ${props => props.fixedHeight ?  "160px" : ""};
     
  
}
  @media  (max-width:425px){
  height: ${props => props.fixedHeight ?  "120px" : ""};
     
  
}

 `

export const PropertyTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2em;
  cursor: pointer;
  & a {
  color: ${({ theme }) => theme.colors.text};
  text-decoration:none

  }
  & a:hover {
  color: ${({ theme }) => theme.colors.textAlt};
  text-decoration:underline;
 

  }
`;
export const PropertyText = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1em;
  color: ${props => props.colored ?  "#22e522" : ""};

  
`;
export const PropertySpan = styled.span`
  color: ${({ theme }) => theme.colors.textAlt2};
  font-size: 1.1em;
  font-size: ${props => props.small ?  "0.8em" : ""};
  text-transform : capitalize
 

  
`;

export const PropertyTextSmall = styled.p`
  color: ${({ theme }) => theme.colors.textAlt2};
  cursor: ${props => props.cursorEnabled ? "pointer" : ""};
  line-height: ${props => props.xlineHeight ? "2rem" : ""};
  font-size: 0.8em;
  font-family: 'Jost', sans-serif;
  &:hover {
  color: ${props => props.cursorEnabled ?  "hsl(0, 0%, 80%)" : ""};

  }
`;



