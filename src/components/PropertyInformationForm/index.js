import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TwitterIcon from "@mui/icons-material/Twitter";
import InfoIcon from "@mui/icons-material/Info";
import Input from "../CustomInput";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import NumberFormat, { NumericFormat } from "react-number-format";

import {
  Button,
  Checkbox,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { SiteText } from "../Styles/PageContent.styled";

const PropertyInformationForm = ({ propertyData, setPropertyData }) => {
  const handleChange = (e) => {
    switch (e.target.name) {
      case "price":
        setPropertyData({
          ...propertyData,
          [e.target.name]: e.target.value.split("NGN")[1].replace(/,/g, ""),
        });
        break;

      case "room":
        setPropertyData({
          ...propertyData,
          propertyFeatures: [
            {
              ...propertyData.propertyFeatures[0],
              [e.target.name]: Number(e.target.value),
            },
          ],
        });

        break;
      case "bathroom":
        setPropertyData({
          ...propertyData,
          propertyFeatures: [
            {
              ...propertyData.propertyFeatures[0],
              [e.target.name]: Number(e.target.value),
            },
          ],
        });

        break;
      case "kitchen":
        setPropertyData({
          ...propertyData,
          propertyFeatures: [
            {
              ...propertyData.propertyFeatures[0],
              [e.target.name]: Number(e.target.value),
            },
          ],
        });

        break;
      case "area":
        setPropertyData({
          ...propertyData,
          propertyFeatures: [
            {
              ...propertyData.propertyFeatures[0],
              [e.target.name]: e.target.value.split("SQFT")[0],
            },
          ],
        });

        break;
      case "ensuite":
        setPropertyData({
          ...propertyData,
          propertyFeatures: [
            {
              ...propertyData.propertyFeatures[0],
              [e.target.name]: !propertyData.propertyFeatures[0].ensuite,
            },
          ],
        });

        break;
      case "master":
        setPropertyData({
          ...propertyData,
          propertyFeatures: [
            {
              ...propertyData.propertyFeatures[0],
              [e.target.name]: !propertyData.propertyFeatures[0].master,
            },
          ],
        });

        break;
      case "swimmingPool":
        setPropertyData({
          ...propertyData,
          propertyFeatures: [
            {
              ...propertyData.propertyFeatures[0],
              [e.target.name]: !propertyData.propertyFeatures[0].swimmingPool,
            },
          ],
        });

        break;

      default:
        setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
        break;
    }
  };
  const handleSubmit = () => {};

  console.log("propertyData", propertyData);
  return (
    <FormControl fullWidth>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="listing"
        value={propertyData.listing}
        onChange={handleChange}
      >
        <FormControlLabel
          className="siteText"
          value="sale"
          control={<Radio />}
          label="For Sale"
        />
        <FormControlLabel
          className="siteText"
          value="rent"
          control={<Radio />}
          label="For Rent"
        />
        <FormControlLabel
          className="siteText"
          value="shortlet"
          control={<Radio />}
          label="Short Let"
        />
      </RadioGroup>

      <Grid
        pt={3}
        container
        xs={12}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid xs={12}>
          <Grid container spacing={2}>
            <Input
              name="title"
              label="Title"
              handleChange={handleChange}
              type="text"
              value={propertyData.title}
              placeholder="2 Bedroom flat Apartment"
              required={true}
            />

            <Input
              name="address"
              label="Address"
              handleChange={handleChange}
              value={propertyData.address}

              type="text"
              placeholder="No 13. Aguda street, Iba estate, Lagos"
              required={true}
            />
            <br />

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel className="inputLabel" style={{ color: "wheat" }}>
                  {" "}
                  Property Type *
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  className="sortInput"
                  value={propertyData.propertyType}
                  name="propertyType"
                  label="Property Type"
                  style={{ borderColor: "gray !important" }}
                  onChange={handleChange}
                  fullWidth
                  required={true}
                >
                  <MenuItem value="apartments">
                    <SiteText>Apartments</SiteText>
                  </MenuItem>
                  <MenuItem value="event_centre">
                    <SiteText>Event Centre/Venue</SiteText>
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
            </Grid>
            <Grid container flexWrap="nowrap" item xs={6} sm={6} md={6}>
              <Grid xs={6} sm={6} md={10}>
                <NumberFormat
                  placeholder="Price *"
                  //   className="foo"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    padding: "0px 20px",
                  }}
                  required={true}
                  thousandSeparator={true}
                  prefix={"NGN"}
                  inputmode="numeric"
                  name="price"
           
             
                  renderText={(value, props) => (
                    <div {...props} style={{ paddingLeft: "10px" }}>
                      &nbsp;{value}
                    </div>
                  )}
                  onChange={handleChange}
                />
              </Grid>
              &nbsp;
              <Grid item xs={6} sm={6} md={2}>
                <FormControl fullWidth>
                  <InputLabel className="inputLabel" style={{ color: "wheat" }}>
                    {" "}
                    Per
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue="year"
                    className="sortInput"
                    label="per"
                    name="priceTicker"
                    value={propertyData.priceTicker}
                    onChange={handleChange}
                    disabled={propertyData.listing === "rent" ? false : true}
                  >
                    <MenuItem value="month">
                      <SiteText>Month</SiteText>
                    </MenuItem>
                    <MenuItem value="year">
                      <SiteText>Year</SiteText>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <br />
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel className="inputLabel" style={{ color: "wheat" }}>
                  Bedroom *
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  className="sortInput"
                  value={propertyData?.propertyFeatures[0]?.room}
                  name="room"
                  label="Bedroom"
                  style={{ borderColor: "gray !important" }}
                  onChange={handleChange}
                  fullWidth
                  disabled={propertyData.propertyType !== "apartments" }

                >
                  <MenuItem value="1">
                    <SiteText>1</SiteText>
                  </MenuItem>
                  <MenuItem value="2">
                    <SiteText>2</SiteText>
                  </MenuItem>
                  <MenuItem value="3">
                    {" "}
                    <SiteText>3</SiteText>
                  </MenuItem>
                  <MenuItem value="4">
                    {" "}
                    <SiteText>4</SiteText>
                  </MenuItem>
                  <MenuItem value="5">
                    {" "}
                    <SiteText>5</SiteText>
                  </MenuItem>
                  <MenuItem value="6">
                    {" "}
                    <SiteText>6</SiteText>
                  </MenuItem>
                  <MenuItem value="7">
                    {" "}
                    <SiteText>7</SiteText>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel className="inputLabel" style={{ color: "wheat" }}>
                  Bathroom
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  className="sortInput"
                  value={propertyData?.propertyFeatures[0]?.bathroom}
                  name="bathroom"
                  label="Bathroom"
                  style={{ borderColor: "gray !important" }}
                  onChange={handleChange}
                  fullWidth
                  disabled={propertyData.propertyType !== "apartments" }

                >
                  <MenuItem value="1">
                    <SiteText>1</SiteText>
                  </MenuItem>
                  <MenuItem value="2">
                    <SiteText>2</SiteText>
                  </MenuItem>
                  <MenuItem value="3">
                    {" "}
                    <SiteText>3</SiteText>
                  </MenuItem>
                  <MenuItem value="4">
                    {" "}
                    <SiteText>4</SiteText>
                  </MenuItem>
                  <MenuItem value="5">
                    {" "}
                    <SiteText>5</SiteText>
                  </MenuItem>
                  <MenuItem value="6">
                    {" "}
                    <SiteText>6</SiteText>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel className="inputLabel" style={{ color: "wheat" }}>
                  Kitchen
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  className="sortInput"
                  value={propertyData?.propertyFeatures[0]?.kitchen}
                  name="kitchen"
                  label="Kitchen"
                  style={{ borderColor: "gray !important" }}
                  onChange={handleChange}
                  fullWidth
                  disabled={propertyData.propertyType !== "apartments" }

                >
                  <MenuItem value="1">
                    <SiteText>1</SiteText>
                  </MenuItem>
                  <MenuItem value="2">
                    <SiteText>2</SiteText>
                  </MenuItem>
                  <MenuItem value="3">
                    {" "}
                    <SiteText>3</SiteText>
                  </MenuItem>
                  <MenuItem value="4">
                    {" "}
                    <SiteText>4</SiteText>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <NumberFormat
                placeholder="Area (SqFt)"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                  padding: "0px 20px",
                }}
                suffix={"SQFT"}
                inputmode="numeric"
                name="area"
                renderText={(value, props) => (
                  <div {...props} style={{ paddingLeft: "10px" }}>
                    &nbsp;{value}
                  </div>
                )}
                onChange={handleChange}
              />
            </Grid>

            <FormGroup>
              <Grid container pl={2} sm={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={propertyData.propertyFeatures[0].master}
                      onChange={handleChange}
                      name="master"
                      disabled={propertyData.propertyType !== "apartments" }

                    />
                  }
                  label="Master Bedroom"
                  className="siteText"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={propertyData.propertyFeatures[0].ensuite}
                      onChange={handleChange}
                      name="ensuite"
                      disabled={propertyData.propertyType !== "apartments" }
                     
                    />
                  }
                  label="En Suite"
                  className="siteText"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={propertyData.propertyFeatures[0].swimmingPool}
                      onChange={handleChange}
                      name="swimmingPool"
                      disabled={propertyData.propertyType !== "apartments" 
                    
                    }
                    />
                  }
                  label="Swimming Pool"
                  className="siteText"
                />
              </Grid>
            </FormGroup>

            <Input
              name="description"
              label="Description"
              type="text"
              rows={4}
              value={propertyData.description}
              handleChange={handleChange}
              multiline
            />
            <br />
          </Grid>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default PropertyInformationForm;
