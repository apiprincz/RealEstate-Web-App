import styled from "styled-components";

export const ThemeHero = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
`;
export const SectionHero = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.5em;
  text-transform:capitalize;
  font-family: "Jost", sans-serif;

`;
export const SectionHeroSmall = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5em;
  font-family:'Jost';
  font-weight:500
`;

export const SiteMotto = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 3em;
`;
export const SiteTitle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2em;
  cursor: pointer;
  text-transform:capitalize;
  & a {
  color: ${({ theme }) => theme.colors.text};
  text-decoration:none;
 

  }
  & a:hover {
  color: ${({ theme }) => theme.colors.textAlt};
  text-decoration:underline;
 

  }
`;

export const SiteText = styled.p`
  color: ${({ theme }) => theme.colors.text} ;
  cursor: ${(props) => (props.cursorEnabled ? "pointer" : "")};
  line-height: ${(props) => (props.xlineHeight ? "2rem" : "")};
  font-size: 1em;
  font-family: "Jost", sans-serif;
  text-transform:capitalize;
  &:hover {
    color: ${(props) => (props.cursorEnabled ? "hsl(0, 0%, 80%)" : "")};
  }
 
  color: ${(props) => (props.gray ? "gray " : "")};
  

`;

export const SiteTextSmall = styled.p`
  color: ${({ theme }) => theme.colors.textAlt2};
  cursor: ${props => props.cursorEnabled ? "pointer" : ""};
  line-height: ${props => props.xlineHeight ? "2rem" : ""};
  font-size: 0.9em;
  font-family: 'Jost', sans-serif;
  text-transform:capitalize;
  border-color:white;
  &:hover {
  color: ${props => props.cursorEnabled ?  "hsl(0, 0%, 80%)" : ""};

  }
`;
export const SiteTextColored = styled.p`
  color: ${({ theme }) => theme.colors.textColored};
  cursor: ${(props) => (props.cursorEnabled ? "pointer" : "")};
  line-height: ${(props) => (props.xlineHeight ? "2rem" : "")};
  font-size: 0.9em;
  font-family: "Jost", sans-serif;
  width: 100%;
  text-align: right;

  & a {
    color: ${({ theme }) => theme.colors.textColored};

    font-size: 0.9em;
    font-family: "Jost", sans-serif;
    width: 100%;
    text-align: right;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.textColored2};
    }
  }
  &:hover {
    color: ${(props) => (props.cursorEnabled ? "hsl(0, 0%, 80%)" : "")};
  }
  @media (max-width: 570px) {
    text-align: left;
  }
`;
export const SiteSearchBox = styled.div`
  background: ${({ theme }) => theme.colors.primaryBg};
  // font-size: 1em;
  width: 100%;
`;
export const Hr = styled.hr`
  background: ${({ theme }) => theme.colors.textAlt3};
  // font-size: 1em;
  width: 100%;
  height: 0.1px;
  border: none;
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
  &:hover {
    background: ${({ theme }) => theme.colors.primaryBg};
  }
`;
export const SwiperBtn = styled.button`
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
  &:hover {
    background: ${({ theme }) => theme.colors.primaryBg};
  }
  @media (max-width: 768px) {
    padding: 10px;
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
export const SiteIcon = styled.p`
  color: ${({ theme }) => theme.colors.textAlt2};
  cursor: ${(props) => (props.cursorEnabled ? "pointer" : "")};
  font-size: 0.8em;
  height: 20px;
  font-family: "Jost", sans-serif;
  cursor:pointer;
  & svg {
    height: 0.8em;
  }
  &:hover {
    color: ${(props) => (props.cursorEnabled ? "hsl(0, 0%, 80%)" : "")};
  }
  height: ${(props) => (props.large ? "100px" : "")};
  & svg {
    font-size: ${(props) => (props.large ? "100px" : "")};
    height: ${(props) => (props.large ? "100px" : "")};
  }
`;
