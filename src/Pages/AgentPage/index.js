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
import { useSelector } from "react-redux";

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

const AgentPage = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { filterItems, dispatch } = useFilterContext();

  // console.log("filterItems", filterItems)
  const [tab, setTab] = useState("sale");
  const [filterAgents, setFilterAgents] = useState();
  const {agents} = useSelector((state) => state.agents);


  const handleTab = (tab) => {
    setTab(tab);
    dispatch(setListing(tab));
    dispatch(setPropertyType(tab));
  };
  useEffect(() => {
    if(agents?.agents){
      setFilterAgents([...agents?.agents]);

    }
  }, [agents]);
  useEffect(() => {
    if (agents?.agents) {
      const listing = "rent";
      // const propertyType = "land";
      const propertyType = ["land", "apartments"];
      let newFilterAgents = [...agents?.agents];
      console.log("teywyeuui", filterAgents, filterItems,newFilterAgents);

      if (filterItems.propertyType.length > 0) {
        newFilterAgents = newFilterAgents.filter(
          (x) => filterItems.propertyType.indexOf(x.propertyType) !== -1
        );

        console.log("etwyypropertyType", newFilterAgents);
      }
      if (filterItems.location.length > 0) {
        newFilterAgents = newFilterAgents.filter(
          (x) => filterItems.location.indexOf(x.location) !== -1
        );
        console.log("filterAgent",newFilterAgents, filterItems.location);

        console.log("agentlocation", newFilterAgents);
      }

      if (filterItems.listing) {
        console.log("043894", filterItems);

        newFilterAgents = newFilterAgents.filter(
          (x) => x.listing === filterItems.listing
        );
      }
      if (filterItems.cityArea) {
        console.log("043894", filterItems);

        newFilterAgents = newFilterAgents.filter(
          (x) => x.area === filterItems.cityArea
        );
      }
      if (filterItems.price.length > 0) {
        console.log("043894", filterItems);

        newFilterAgents = newFilterAgents.filter(
          (x) => filterItems.price.indexOf(x.price) !== -1
        );

        console.log("123456", newFilterAgents);
      }

      if (filterItems.area.length > 0) {
        newFilterAgents = newFilterAgents.filter(
          (x) => filterItems.area.indexOf(x.propertyFeatures[0].area) !== -1
        );

        console.log("123456", newFilterAgents);
      }
      if (filterItems.room) {
        newFilterAgents = newFilterAgents.filter(
          (x) => x.propertyFeatures[0].room === filterItems.room
        );
      }
      if (filterItems.bathroom) {
        newFilterAgents = newFilterAgents.filter(
          (x) => x.propertyFeatures[0].bathroom === filterItems.bathroom
        );
      }
      if (filterItems.propertyAmenities.length > 0) {
        newFilterAgents = newFilterAgents.filter(
          (x) => filterItems.propertyAmenities.indexOf(x) !== -1
        );

        console.log("123456", newFilterAgents);
      }
      if (filterItems.search) {
    console.log("jdsjjjd", filterItems.search)
        newFilterAgents = newFilterAgents.filter(
          (x) => x.name.toLowerCase().indexOf(filterItems.search) >= 0
        );


   
        // newFilterAgents = newFilterAgents.filter(
        //   (x) => new RegExp('\\b' + x.name + '\\b').test(filterItems.search)
        // );
      }
      if (filterItems.didNo) {
        newFilterAgents = newFilterAgents.filter(
          (x) => x.didNo === filterItems.didNo
        );
      }
      setFilterAgents(newFilterAgents);
    }
  }, [filterItems]);

  console.log("filterItems", filterItems);
  console.log("filterAgents345566", filterAgents, agents);

  return (
    <Layout>
      <ThemeContainer>
        <Grid xs={12} p={2}>
          <FilterMenu />
          <Grid pt={5}>
            <SectionHero>Agents List</SectionHero>
          </Grid>
          <Grid pt={3}>
            <BreadCrumbs></BreadCrumbs>
          </Grid>
          <Grid container pt={5}>
            <Agents filterAgents={filterAgents} />
          </Grid>
        </Grid>
      </ThemeContainer>
    </Layout>
  );
};

export default AgentPage;
