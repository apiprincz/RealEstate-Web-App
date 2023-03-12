import React, { useContext, useEffect, useState } from "react";

import {

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

  useFilterContext,
} from "../../Contexts/FilterContext";
import { agentData } from "../../constants/data";
import FilterMenu from "../../components/FilterMenu";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbsProperty";

import useWindowDimensions from "../../Hooks/screen";
import Agents from "../../components/Agents";
import SettingsMenu from "../../components/SettingsMenu";
import AddNewProperty from "../../components/SettingsList/AddNewProperty";
import CustomizedBreadcrumbs from "../../components/BreadCrumb";
import { useNavigate, useParams } from "react-router-dom";


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

const CreatePropertyPage = () => {

  const { filterItems, dispatch } = useFilterContext();

  // console.log("filterItems", filterItems)
  const [tab, setTab] = useState("sale");
  const [filterAgents, setFilterAgents] = useState();
  const { width } = useWindowDimensions();
  const navigate = useNavigate()

  const { id } = useParams();

  console.log("filterItems", filterItems);
  console.log("filterAgents345566", filterAgents);

  console.log('path122', window.location.pathname)

  useEffect(() => {
    
  if(window.location.pathname === "/property/edit" || window.location.pathname === "/property"  ) {
    navigate("/property/add")
  }
   
  }, [])
  

  return (
    <Layout>
      <ThemeContainer>
    
      <Grid py={2} px={5} style={{ position: "sticky", top: "100px" }}>
        {/* <SectionHero>Profile</SectionHero> */}
        <SectionHero>
          {window.location.pathname?.split("/")[2]}  {window.location.pathname?.split("/")[1]}
        </SectionHero>
        <Grid pt={1} >
        <BreadCrumbs></BreadCrumbs>
     
      </Grid>
      </Grid>
  
        <Grid xs={12} p={2}>
          <AddNewProperty />
        </Grid>
      </ThemeContainer>
    </Layout>
  );
};

export default CreatePropertyPage;
