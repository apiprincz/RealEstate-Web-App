import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/container";
import {
  SearchBtn,
  SiteBtn,
  SiteText,
  SiteMotto,
  SiteSearchBox,
  ThemeHero,
  Hr,
  SectionHero,
} from "../../components/Styles/PageContent.styled";
import { ThemeContainer } from "../../components/Styles/ThemeSwitching.styled";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { light, dark } from "../../components/Styles/Theme.styled";
import Layout from "../../components/Layout";
import { Button, Grid, InputAdornment, TextField } from "@mui/material";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";

import {
  setListing,
  setPropertyType,
  useFilterContext,
} from "../../Contexts/FilterContext";
import { agentData } from "../../constants/data";
import FilterMenu from "../../components/FilterMenu";
import BreadCrumbs from "../../components/BreadCrumbs";
import SidebarMenu from "../../components/SidebarMenu";
import Properties from "../../components/Properties";
import FilterModal from "../../components/SidebarMenu/FilterModal";
import useWindowDimensions from "../../Hooks/screen";
import Agents from "../../components/Agents";
import SettingsMenu from "../../components/SettingsMenu";

// Initial state
const initialItems = {
  propertyType: [],
  location: [],
  listing: "",
  price: [],
  area: [],
  room: "",
  bathroom: "",
  propertyAmenities: [],
  search: "",
  didNo: "",
};

const ProfilePage = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { filterItems, dispatch } = useFilterContext();

  // console.log("filterItems", filterItems)
  const [tab, setTab] = useState("sale");
  const [filterAgents, setFilterAgents] = useState();
  const { width } = useWindowDimensions();

  const handleTab = (tab) => {
    setTab(tab);
    dispatch(setListing(tab));
    dispatch(setPropertyType(tab));
  };



  console.log("filterItems", filterItems);
  console.log("filterAgents345566", filterAgents);

  return (
    <Layout>
      <ThemeContainer>
        <Grid xs={12} p={2}>
       
         
           <SettingsMenu/>
       
        </Grid>
      </ThemeContainer>
    </Layout>
  );
};

export default ProfilePage;
