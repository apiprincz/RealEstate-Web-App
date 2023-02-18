import styled from "styled-components";

export const ThemeHero = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
`;
export const SectionHero = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2em;
  
`;

export const SiteMotto = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 3em;
`;

export const SiteText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  cursor: ${props => props.cursorEnabled ? "pointer" : ""};
  line-height: ${props => props.xlineHeight ? "2rem" : ""};
  font-size: 0.9em;

  &:hover {
  color: ${props => props.cursorEnabled ?  "hsl(0, 0%, 80%)" : ""};

  }
`;
export const SiteSearchBox = styled.div`
  background: ${({ theme }) => theme.colors.primaryBg};
  // font-size: 1em;
  width: 100%;
`;
export const SiteBtn = styled.button`
  color: ${({ theme }) => theme.colors.btnColor};
  background: ${({ theme }) => theme.colors.btnBg};
  font-size: 0.8em;
  outline: none;
  border: none;
  padding: 15px 20px;
  webkit-filter: blur(0.5px);
  filter: blur(0.5px);
  cursor: pointer;

  &.activeBtn {
    webkit-filter: blur(0px);
    filter: blur(0px);
    background: ${({ theme }) => theme.colors.primaryBg};
    color: hsl(169, 82%, 60%) !important;
  }
`;
export const SearchBtn = styled.button`
  color: ${({ theme }) => theme.colors.primarySiteColor};
  background: ${({ theme }) => theme.colors.btnBg};
  border: 1px solid white;
  font-size: 0.8em;
  width: 100%;
  outline: none;
  // border: none;
  padding: 15px 20px;

  cursor: pointer;
  &:hover {
    webkit-filter: blur(0px);
    filter: blur(0px);
    background: ${({ theme }) => theme.colors.btnBgHover};
    color: ${({ theme }) => theme.colors.primarySiteColor};
  }
  &.activeBtn {
    background: ${({ theme }) => theme.colors.primaryBg};
    color: hsl(169, 82%, 60%) !important;
  }
`;
