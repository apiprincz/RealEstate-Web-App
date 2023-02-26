import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import {
  setArea,
  setListing,
  setLocation,
  setLocationSingle,
  setPrice,
  setPropertyType,
  setPropertyTypeSingle,
  useFilterContext,
} from "../../Contexts/FilterContext";
import {
  Hr,
  SearchBtn,
  SectionHeroSmall,
  SiteBtn,
  SiteSearchBox,
  SiteText,
} from "../Styles/PageContent.styled";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import useWindowDimensions from "../../Hooks/screen";
import { PropertyTitle } from "../Styles/Property.styled";
import { useNavigate } from "react-router-dom";

const SidebarMenu = () => {
  const [tab, setTab] = useState("sale");
  const [searchText, setSearchText] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [propertyTypeValue, setPropertyTypeValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [areaValue, setAreaValue] = useState("");
  const { filterItems, dispatch } = useFilterContext();
  const { width } = useWindowDimensions();
  const navigate = useNavigate()

  const handleTab = (e) => {
    setTab(e);
    dispatch(setListing(e));
  };
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    console.log("search", searchText);
    // dispatch(setSearch(search));
  };

  const handlePropertyTypeChange = (e) => {
    setPropertyTypeValue(e.target.name);
    console.log("sidebar", e.target.name);
    dispatch(setPropertyType(e.target.name));
    navigate(`/properties?page=1`);

  };
  const handleLocationChange = (e) => {
    setLocationValue(e.target.name);
    console.log("setLocation", locationValue);
    dispatch(setLocation(e.target.name));
    navigate(`/properties?page=1`);
    
  };
  const handlePriceChange = (e) => {
    setPriceValue(e.target.name);
    console.log("sidebar", e.target.name);
    dispatch(setPrice(e.target.name));
    navigate(`/properties?page=1`);

  };
  const handleAreaChange = (e) => {
    setAreaValue(e.target.name);
    console.log("sidebar", e.target.name);
    dispatch(setArea(e.target.name));
    navigate(`/properties?page=1`);

  };

  console.log("treyty", filterItems);
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      xs={12}
      style={{ background: "hsl(0,0%,12%)" }}
    >
      <Grid>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <Grid pb={3}>
            <SectionHeroSmall>Property Types</SectionHeroSmall>
          </Grid>
          <FormGroup className="checkBoxContainer">
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.propertyType.includes("apartments")}
                  onChange={handlePropertyTypeChange}
                  name="apartments"
                />
              }
              label={<SiteText>Apartments</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.propertyType.includes("land")}
                  onChange={handlePropertyTypeChange}
                  name="land"
                />
              }
              label={<SiteText>Land</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.propertyType.includes("office")}
                  onChange={handlePropertyTypeChange}
                  name="office"
                />
              }
              label={<SiteText>Office</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.propertyType.includes("warehouse")}
                  onChange={handlePropertyTypeChange}
                  name="warehouse"
                />
              }
              label={<SiteText>Ware House</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.propertyType.includes("farm")}
                  onChange={handlePropertyTypeChange}
                  name="farm"
                />
              }
              label={<SiteText>Farm</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.propertyType.includes("shop")}
                  onChange={handlePropertyTypeChange}
                  name="shop"
                />
              }
              label={<SiteText>Shop</SiteText>}
            />
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid xs={12} px={3} py={2}>
        <Hr />
      </Grid>
      <Grid>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <Grid pb={3}>
            <SectionHeroSmall>Location</SectionHeroSmall>
          </Grid>
          <FormGroup className="checkBoxContainer">
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.location.includes("ibadan")}
                  onChange={handleLocationChange}
                  name="ibadan"
                />
              }
              label={<SiteText>Ibadan</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.location.includes("lagos")}
                  onChange={handleLocationChange}
                  name="lagos"
                />
              }
              label={<SiteText>Lagos</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.location.includes("abuja")}
                  onChange={handleLocationChange}
                  name="abuja"
                />
              }
              label={<SiteText>Abuja</SiteText>}
            />
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid xs={12} px={3} py={2}>
        <Hr />
      </Grid>
      <Grid>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <Grid pb={3}>
            <SectionHeroSmall>Price</SectionHeroSmall>
          </Grid>
          <FormGroup className="checkBoxContainer">
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.price.includes("0-500000")}
                  onChange={handlePriceChange}
                  name="0-500000"
                />
              }
              label={<SiteText>Under 500k</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.price.includes("500000-1000000")}
                  onChange={handlePriceChange}
                  name="500000-1000000"
                />
              }
              label={<SiteText>500k - 1M</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.price.includes("1000000-2500000")}
                  onChange={handlePriceChange}
                  name="1000000-2500000"
                />
              }
              label={<SiteText>1M - 2.5M</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.price.includes("2500000-5000000")}
                  onChange={handlePriceChange}
                  name="2500000-5000000"
                />
              }
              label={<SiteText>2.5M - 5M</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.price.includes("5000000-12500000")}
                  onChange={handlePriceChange}
                  name="5000000-12500000"
                />
              }
              label={<SiteText>5M - 12.5M</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.price.includes("12500000-25000000")}
                  onChange={handlePriceChange}
                  name="12500000-25000000"
                />
              }
              label={<SiteText>12.5M - 25M</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.price.includes("25000000-50000000")}
                  onChange={handlePriceChange}
                  name="25000000-50000000"
                />
              }
              label={<SiteText>25M - 50M</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.price.includes("50000000-100000000")}
                  onChange={handlePriceChange}
                  name="50000000-100000000"
                />
              }
              label={<SiteText>Over 50M </SiteText>}
            />
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid xs={12} px={3} py={2}>
        <Hr />
      </Grid>
      <Grid>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <Grid pb={3}>
            <SectionHeroSmall>Land Area</SectionHeroSmall>
          </Grid>
          <FormGroup className="checkBoxContainer">
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.area.includes("0-100")}
                  onChange={handleAreaChange}
                  name="0-100"
                />
              }
              label={<SiteText>Under 100 sqft</SiteText>}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.area.includes("100-500")}
                  onChange={handleAreaChange}
                  name="100-500"
                />
              }
              label={<SiteText>100 sqft - 500 sqft</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.area.includes("500-1000")}
                  onChange={handleAreaChange}
                  name="500-1000"
                />
              }
              label={<SiteText>500 sqft - 1000 sqft</SiteText>}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.area.includes("1000-5000")}
                  onChange={handleAreaChange}
                  name="1000-5000"
                />
              }
              label={<SiteText>1000 sqft - 5000 sqft</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.area.includes("5000-10000")}
                  onChange={handleAreaChange}
                  name="5000-10000"
                />
              }
              label={<SiteText>5000 sqft - 10000 sqft</SiteText>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterItems?.area.includes("10000-20000")}
                  onChange={handleAreaChange}
                  name="10000-20000"
                />
              }
              label={<SiteText>Over 10000 sqft</SiteText>}
            />
          </FormGroup>
        </FormControl>
      </Grid>
      
     
    </Grid>
  );
};

export default SidebarMenu;
