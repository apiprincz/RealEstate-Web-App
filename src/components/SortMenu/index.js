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
import { useSortContext } from "../../Contexts/SortContext";
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';

const SortMenu = () => {
  const [sortVal, setSortVal] = useState("");

  const [sortValue, setSortValue] = useState("");
  const { sortItems, dispatch } = useSortContext();
  const { width } = useWindowDimensions();



  const handleChange = (e) => {
    setSortValue(e.target.value);
    console.log("setLocation", sortValue);
    // dispatch(setLocationSingle(e.target.value));
  };
  console.log("window");
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      md={6}
      sm={7}
      xs={12}
      // style={{background:'red'}}
    >
      <Grid xs={6} sm={6}>
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            className="inputLabel"
            style={{ color: "blueviolet" }}
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
      <Grid container justifyContent="space-between" xs={3} sm={2}>
        <SiteIcon>
          <GridViewIcon />
        </SiteIcon>
        <SiteIcon>
          <ListIcon />
        </SiteIcon>
      </Grid>
    </Grid>
  );
};

export default SortMenu;
