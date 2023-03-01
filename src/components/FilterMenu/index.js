import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  clearAll,
  setCityArea,
  setListing,
  setLocation,
  setLocationSingle,
  setPropertyType,
  setPropertyTypeSingle,
  setSearch,
  useFilterContext,
} from "../../Contexts/FilterContext";
import {
  SearchBtn,
  SiteBtn,
  SiteIcon,
  SiteSearchBox,
  SiteText,
} from "../Styles/PageContent.styled";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import useWindowDimensions from "../../Hooks/screen";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { city } from "../../constants/data";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const FilterMenu = () => {
  const [tab, setTab] = useState("sale");
  const [searchText, setSearchText] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [propertyTypeValue, setPropertyTypeValue] = useState("");
  const [cityAreaValue, setCityAreaValue] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const { filterItems, dispatch } = useFilterContext();
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const handleTab = (e) => {
    setTab(e);
    dispatch(setListing(e));
  };
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    console.log("search", searchText);
    dispatch(setSearch(e.target.value));
  };
  const handleLocationChange = (e) => {
    setLocationValue(e.target.value);
    console.log("setLocation", locationValue);
    dispatch(setLocationSingle(e.target.value));
    navigate(`${window.location.pathname}?page=1`);
  };
  const handlePropertyTypeChange = (e) => {
    setPropertyTypeValue(e.target.value);
    console.log("setPropertyType", propertyTypeValue, e.target.value);
    dispatch(setPropertyTypeSingle(e.target.value));
    navigate(`${window.location.pathname}?page=1`);
  };
  const handleAreaChange = (e) => {
    setCityAreaValue(e.target.value);
    console.log("setPropertyType", cityAreaValue, e.target.value);
    dispatch(setCityArea(e.target.value));
    navigate(`${window.location.pathname}?page=1`);
  };
  const handleReset = () => {
    dispatch(clearAll());
  };

  useEffect(() => {
    console.log("dgsgdsd", filterItems.location);

    if (filterItems.location.length === 0) {
      setLocationValue("");
    }

    if (filterItems.propertyType.length === 0) {
      setPropertyTypeValue("");
    }
  }, [filterItems]);

  useEffect(() => {
    if (filterItems && window.location.pathname === "/agents") {
      const selectedCity = city.filter(
        (city) => city.city === filterItems.location[0]
      );
      console.log("city", selectedCity[0]);

      setSelectedCity(selectedCity[0]);
    }
  }, [filterItems]);

  console.log("yweywrhhwrh", selectedCity);
  return (
    <Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        xs={12}
        pt={5}
        spacing={2}
      >
        {window.location.pathname === "/agents" ? (
          " "
        ) : (
          <Grid container item xs={12} md={2} lg={1.5} flexWrap="nowrap">
            <SiteBtn
              className={tab === "sale" ? "activeBtn" : ""}
              onClick={() => handleTab("sale")}
            >
              BUY
            </SiteBtn>
            <SiteBtn
              className={tab === "rent" ? "activeBtn" : ""}
              onClick={() => handleTab("rent")}
            >
              RENT
            </SiteBtn>
          </Grid>
        )}
        <Grid item sm={9} md={3.5} xs={12}>
          <Grid container>
            <TextField
              fullWidth
              style={{ color: "white !important" }}
              className="searchInput"
              id="input-with-icon-textfield"
              placeholder={
                window.location.pathname === "/agents"
                  ? "Enter agent name"
                  : "Search for city, neighbourhood..."
              }
              name="search"
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {window.location.pathname === "/agents" ? (
                      <PersonOutlineOutlinedIcon className="icon" />
                    ) : (
                      <PlaceOutlinedIcon className="icon" />
                    )}
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Grid>
        </Grid>
        {width <= 900 && width >= 600 && (
          <Grid item sm={3} md={2} xs={4}>
            <SearchBtn fullWidth onClick={handleReset}>
              Reset
            </SearchBtn>
          </Grid>
        )}

        <Grid item md={2} sm={6} xs={6}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              className="inputLabel"
              style={{ color: "wheat" }}
            >
              Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="sortInput"
              value={locationValue}
              label="Location"
              style={{ borderColor: "gray !important" }}
              onChange={handleLocationChange}
            >
              <MenuItem value="abuja">
                <SiteText>Abuja</SiteText>
              </MenuItem>
              <MenuItem value="lagos">
                <SiteText>Lagos</SiteText>
              </MenuItem>
              <MenuItem value="ibadan">
                {" "}
                <SiteText>Ibadan</SiteText>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={2} sm={6} xs={6}>
          {window.location.pathname === "/agents" ? (
            <FormControl
              disabled={filterItems.location.length > 0 ? false : true}
              fullWidth
            >
              <InputLabel className="inputLabel" style={{ color: "wheat" }}>
                {" "}
                Area
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                className="sortInput"
                value={cityAreaValue}
                label="Area"
                style={{ borderColor: "gray !important" }}
                onChange={handleAreaChange}
              >
                {selectedCity?.areas?.map((city, index) => (
                  <MenuItem value={city.area}>
                    <SiteText>{city.label}</SiteText>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <FormControl fullWidth>
              <InputLabel className="inputLabel" style={{ color: "wheat" }}>
                {" "}
                Property Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                className="sortInput"
                value={propertyTypeValue}
                label="Property Type"
                style={{ borderColor: "gray !important" }}
                onChange={handlePropertyTypeChange}
              >
                <MenuItem value="apartments">
                  <SiteText>Apartments</SiteText>
                </MenuItem>
                <MenuItem value="land">
                  <SiteText>Land</SiteText>
                </MenuItem>
                <MenuItem value="office">
                  {" "}
                  <SiteText>Offices</SiteText>
                </MenuItem>
                <MenuItem value="warehouse">
                  {" "}
                  <SiteText>Ware Houses</SiteText>
                </MenuItem>
                <MenuItem value="farm">
                  {" "}
                  <SiteText>Farms</SiteText>
                </MenuItem>
                <MenuItem value="shop">
                  {" "}
                  <SiteText>Shop</SiteText>
                </MenuItem>
              </Select>
            </FormControl>
          )}
        </Grid>

        {/* {width >= 600 && (
          <Grid item md={1.5} sm={4} xs={12} container justifyContent="center">
            <SiteText cursorEnabled style={{whiteSpace:'nowrap',display:'flex', alignItems:'center'}}>
              Advanced Search <SiteIcon><KeyboardArrowDownIcon /></SiteIcon> 
            </SiteText>
          </Grid>
        )} */}
        {(width >= 900 || width <= 600) && (
          <Grid item sm={3} md={2.5} xs={12}>
            <SearchBtn fullWidth onClick={handleReset}>
              Reset
            </SearchBtn>
          </Grid>
        )}

        {/* {width < 600 && (
          <Grid item md={1.5} sm={4} xs={12} container justifyContent="center">
            <SiteText cursorEnabled>
              Advanced Search <KeyboardArrowDownIcon />
            </SiteText>
          </Grid>
        )} */}
        {/* <Grid md={1.5}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label"  className='inputLabel' style={{color:'blueviolet'}}>Sort By Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="sortInput"
              // value={sortVal}
              label="Sort By Location"
              style={{borderColor:'white'}}
              // onChange={handleChange}
            >
              <MenuItem value="lth">
                <SiteText>Price:Low To High</SiteText>
              </MenuItem>
              <MenuItem value="htl">
                <SiteText>Price:High To Low</SiteText>
              </MenuItem>
              <MenuItem value="createdDate">
                {" "}
                <SiteText>Recently Created</SiteText>
              </MenuItem>
              <MenuItem value="roomsCount">
                {" "}
                <SiteText>No of Rooms</SiteText>
              </MenuItem>
              <MenuItem value="viewerCount">
                {" "}
                <SiteText>Most Viewed</SiteText>
              </MenuItem>
              <MenuItem value="favoriteCount">
                {" "}
                <SiteText>Most Favorited</SiteText>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid> */}
      </Grid>
    </Grid>
  );
};

export default FilterMenu;
