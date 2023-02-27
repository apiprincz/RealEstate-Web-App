import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import {
  setListing,
  setLocation,
  setLocationSingle,
  setPropertyType,
  setPropertyTypeSingle,
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
import { setSortBy, setSortByGrid, setSortByList, useSortContext } from "../../Contexts/SortContext";
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';

const SortMenu = () => {
  const [sortVal, setSortVal] = useState("");

  const [sortValue, setSortValue] = useState("");
  const { sortItems, dispatch } = useSortContext();
  const { width } = useWindowDimensions();



  const handleChange = (e) => {
    setSortValue(e.target.value);
    console.log("setLocation", e.target.value);
    dispatch(setSortBy(e.target.value));
  };
  const handleGrid = () => {

    dispatch(setSortByGrid());
  };
  const handleList = (e) => {
    
    dispatch(setSortByList());
  };
  console.log("window", sortItems.sortBy, sortItems);
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      md={6}
      sm={7}
      xs={width >= 525 ? 12: 6}
      // style={{background:'red'}}
    >
      <Grid xs={width >= 525 ? 6 : 12} sm={6}>
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            className="inputLabel"
            style={{ color: "wheat" }}
          >
            Sort By
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="sortInput"
            value={sortValue}
            label="Sort By"
            style={{ borderColor: "white" }}
            onChange={handleChange}
          >
           {window.location.pathname !=="/agents" && <MenuItem value="lth">
              <SiteText>Price:Low To High</SiteText>
            </MenuItem>}
            {window.location.pathname !=="/agents" &&  <MenuItem value="htl">
              <SiteText>Price:High To Low</SiteText>
            </MenuItem>}
            {window.location.pathname !=="/agents" && <MenuItem value="createdDate">
              {" "}
              <SiteText>Recently Created</SiteText>
            </MenuItem>}
            {window.location.pathname !=="/agents" && <MenuItem value="roomsCount">
              {" "}
              <SiteText>No of Rooms</SiteText>
            </MenuItem>}
            <MenuItem value="viewersCount">
              {" "}
              <SiteText>Most Viewed</SiteText>
            </MenuItem>
            <MenuItem value="favoritesCount">
              {" "}
              <SiteText>Most Favorited</SiteText>
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid
        xs={3}
        sm={4}
        style={{
          height: "100%",
          width: "3px",
          background: "white",
          borderRight: "1px solid white",
        }}
      ></Grid>
         {width >= 525 &&<Grid container justifyContent="flex-end"  xs={3} sm={2}>
        <SiteIcon onClick={handleGrid}>
          <GridViewIcon />
        </SiteIcon>
    {window.location.pathname !== "/agents" && <SiteIcon onClick={handleList}>
         &nbsp;
         &nbsp;
         &nbsp;
         &nbsp;
          <ListIcon />
        </SiteIcon>}
      </Grid>}
    </Grid>
  );
};

export default SortMenu;
