import React, { useContext, useState } from "react";
import Container from "../../components/container";
import {
  SearchBtn,
  SiteBtn,
  SiteText,
  SiteMotto,
  SiteSearchBox,
  ThemeHero,
  Hr,
} from "../../components/Styles/PageContent.styled";
import { ThemeContainer } from "../../components/Styles/ThemeSwitching.styled";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { light, dark } from "../../components/Styles/Theme.styled";
import Layout from "../../components/Layout";
import { Grid, InputAdornment, TextField } from "@mui/material";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import About from "../../components/Sections/About";
import FeaturedProperty from "../../components/Sections/Featured Property";
import PropertyTypes from "../../components/Sections/Property Types";
import Neighborhood from "../../components/Sections/Neighborhood";
import Destination from "../../components/Sections/Destination";
import { setListing, useFilterContext } from "../../Contexts/FilterContext";
import { useDispatch } from "react-redux";
const Home = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
const { filterItems,dispatch } = useFilterContext()
// const dispatch = useDispatch()
console.log("filterItems", filterItems)

  const [tab, setTab] = useState("sale");

  const handleTab = (tab) => {
    setTab(tab);
    dispatch(setListing(tab));

  };
  return (
    <Layout>
      {/* {darkMode === light ? "light" : "dark"} */}

      <ThemeContainer>
        <Grid xs={12} p={5}>
          <Grid container>
            <Grid md={6} xs={12}>
              <Grid>
                <SiteMotto>
                  Buy, Sell &amp; Rent Your Choice Landed Property in Nigeria.
                </SiteMotto>
              </Grid>
              <Grid py={2}>
                <SiteText>
                <span style={{color:"white"}}>Most<span style={{color:'hsl(169, 82%, 60%)'}}>Habitable</span></span><span style={{color:'gray'}}>.com</span> is the No 1. destination to buy, sell and rent all
                  kinds of landed properties in Lagos, Abuja and Ibadan.
                </SiteText>
              </Grid>
              <Grid xs={12} pt={5}>
                <Grid container>
                  <SiteBtn
                    className={tab === "sale" ? "activeBtn" : ""}
                    onClick={() => handleTab("sale")}
                  >
                    BUY
                  </SiteBtn>
                  &nbsp;
                  <SiteBtn
                    className={tab === "rent" ? "activeBtn" : ""}
                    onClick={() => handleTab("rent")}
                  >
                    RENT
                  </SiteBtn>
                </Grid>
                <Grid container xs={12}>
                  <SiteSearchBox>
                  <Grid xs={12} md={12} p={3} py={5}>

                    <Grid container >
                      <TextField
                        fullWidth
                        style={{ color: "white !important" }}
                        className="searchInput"
                        id="input-with-icon-textfield"
                        placeholder="Search for city, neighbourhood..."
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PlaceOutlinedIcon className="icon" />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />
                    </Grid>
                    <Grid py={2} xs={12}>
                      <SearchBtn fullWidth>Search</SearchBtn>
                    </Grid>
                    <Grid pt={2} xs={12}>
                      
                <SiteText cursorEnabled>
                      
                      Advanced Search <CallMadeOutlinedIcon/>
                </SiteText>

                    </Grid>
                    </Grid>
                  </SiteSearchBox>
                </Grid>
              </Grid>
            </Grid>
            <Grid container sm={6} xs={12}></Grid>
          </Grid>
        </Grid>
        <About/>
        <FeaturedProperty/>
        <Grid p={2}>
        <Hr></Hr>
        <PropertyTypes/>
        <Neighborhood/>
        <Destination/>

        </Grid>
      </ThemeContainer>
    </Layout>
  );
};

export default Home;
