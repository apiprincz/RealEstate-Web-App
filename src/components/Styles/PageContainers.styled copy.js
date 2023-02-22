import styled from "styled-components";

export const AboutContainer = styled.div`
  background: ${({ theme }) => theme.colors.primaryBg2};
  width: 100%;
`;
export const PropertyTypesContainer = styled.div`
  background: ${({ theme }) => theme.colors.primaryBg3};
  width: 100%;
  background:  ${(props) => (props.active ? "hsl(0,0%,25%)" : "")};
;
`;

export const HeaderMenuContainer = styled.div`
  background: ${({ theme }) => theme.colors.background2};
;
`;

// hsl(0,0%,12%)
