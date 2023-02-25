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
import { Grid, InputAdornment, TextField } from "@mui/material";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";

import {
  setListing,
  setPropertyType,
  useFilterContext,
} from "../../Contexts/FilterContext";
import { propertyData } from "../../constants/data";
import FilterMenu from "../../components/FilterMenu";
import BreadCrumbs from "../../components/BreadCrumbs";
import SidebarMenu from "../../components/SidebarMenu";
import Properties from "../../components/Properties";
import FilterModal from "../../components/SidebarMenu/FilterModal";
import useWindowDimensions from "../../Hooks/screen";

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

const PropertiesPage = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { filterItems, dispatch } = useFilterContext();

  // console.log("filterItems", filterItems)
  const [tab, setTab] = useState("sale");
  const [filterProperties, setFilterProperties] = useState();
  const { width } = useWindowDimensions();


  const handleTab = (tab) => {
    setTab(tab);
    dispatch(setListing(tab));
    dispatch(setPropertyType(tab));
  };
  useEffect(() => {
    setFilterProperties([...propertyData]);
  }, []);
  useEffect(() => {
    if (propertyData) {
      const listing = "rent";
      // const propertyType = "land";
      const propertyType = ["land", "apartments"];
      let newFilterProperties = [...propertyData];
      console.log("teywyeuui", filterProperties, filterItems);

      if (filterItems.propertyType.length > 0) {
        newFilterProperties = newFilterProperties.filter(
          (x) => filterItems.propertyType.indexOf(x.propertyType) !== -1
        );

        console.log("etwyypropertyType", newFilterProperties);
      }
      if (filterItems.location.length > 0) {
        newFilterProperties = newFilterProperties.filter(
          (x) => filterItems.location.indexOf(x.location) !== -1
        );

        console.log("uweuuuwelocation", newFilterProperties);
      }

      if (filterItems.listing) {
        console.log("043894", filterItems);

        newFilterProperties = newFilterProperties.filter(
          (x) => x.listing === filterItems.listing
        );
      }
      if (filterItems.price.length > 0) {
        console.log("043894", filterItems);

        newFilterProperties = newFilterProperties.filter(
          (x) => filterItems.price.indexOf(x.price) !== -1
        );

        console.log("123456", newFilterProperties);
      }

      if (filterItems.area.length > 0) {
        newFilterProperties = newFilterProperties.filter(
          (x) => filterItems.area.indexOf(x.propertyFeatures[0].area) !== -1
        );

        console.log("123456", newFilterProperties);
      }
      if (filterItems.room) {
        newFilterProperties = newFilterProperties.filter(
          (x) => x.propertyFeatures[0].room === filterItems.room
        );
      }
      if (filterItems.bathroom) {
        newFilterProperties = newFilterProperties.filter(
          (x) => x.propertyFeatures[0].bathroom === filterItems.bathroom
        );
      }
      if (filterItems.propertyAmenities.length > 0) {
        newFilterProperties = newFilterProperties.filter(
          (x) => filterItems.propertyAmenities.indexOf(x) !== -1
        );

        console.log("123456", newFilterProperties);
      }
      if (filterItems.search) {
        newFilterProperties = newFilterProperties.filter(
          (x) => x.search === filterItems.search
        );
      }
      if (filterItems.didNo) {
        newFilterProperties = newFilterProperties.filter(
          (x) => x.didNo === filterItems.didNo
        );
      }
      setFilterProperties(newFilterProperties);
    }
  }, [filterItems]);

  console.log("filterItems", filterItems);
  console.log("filterProperties", filterProperties);

  return (
    <Layout>
      <ThemeContainer>
        <Grid xs={12} p={2}>
          <FilterMenu />
          <Grid pt={5}>
            <SectionHero>Properties In Nigeria</SectionHero>
          </Grid>
          <Grid pt={3}>
            <BreadCrumbs></BreadCrumbs>
          </Grid>
          <Grid container pt={5}>
          <Grid md={3} lg={2.5}>
            {width <= 900 ? <FilterModal/> :
           <SidebarMenu/>}
          </Grid>
          <Properties filterProperties={filterProperties}/>
          </Grid>
        </Grid>
      </ThemeContainer>
    </Layout>
  );
};

export default PropertiesPage;
