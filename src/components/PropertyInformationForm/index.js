import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TwitterIcon from "@mui/icons-material/Twitter";
import InfoIcon from "@mui/icons-material/Info";
import Input from "../CustomInput";
import NumberInput from "../NumberInput";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import NumberFormat, { NumericFormat } from "react-number-format";

import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { SiteText } from "../Styles/PageContent.styled";

const initialState = {
  title: "",
  price: null,
  priceTicker: "",
  listing: "rent",
  propertyType: "",
  description: "",
  propertyFeatures: [
    {
      room: null,
      bathroom: null,
      kitchen: null,
      area: null,
      master: null,
      ensuite: null,
      swimmingPool: null,
    },
  ],
  propertyAmenities: [],
  location: "",
  address: "",
  country: "",
};

const PropertyInformationForm = () => {
  const [propertyData, setPropertyData] = useState(initialState);

  const handleChange = (e) => {
    if (e.target.name === "price") {
      setPropertyData({
        ...propertyData,
        [e.target.name]: e.target.value.split("NGN")[1].replace(/,/g, ""),
      });
    } else if (
      e.target.name === "room" ||
      e.target.name === "bathroom" ||
      e.target.name === "kitchen"
    ) {
      setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
    } else {
      setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
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
              placeholder="2 Bedroom flat Apartment"
            />

            <Input
              name="address"
              label="Address"
              handleChange={handleChange}
              type="text"
              placeholder="No 13. Aguda street, Iba estate, Lagos"
            />
            <br />

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel className="inputLabel" style={{ color: "wheat" }}>
                  {" "}
                  Property Type
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
            </Grid>
            <Grid container flexWrap="nowrap" item xs={6} sm={6} md={6}>
              <Grid xs={6} sm={6} md={10}>
                {/* <NumberInput
                  numberformat={propertyData.price}
                  name="price"
                  handleChange={handleChange}
                /> */}
                <NumberFormat
                  placeholder="Price"
                  //   className="foo"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    padding: "0px 20px",
                  }}
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
                  Bedroom
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  className="sortInput"
                  value={propertyData.propertyFeatures[0].room}
                  name="room"
                  label="Bedroom"
                  style={{ borderColor: "gray !important" }}
                  onChange={handleChange}
                  fullWidth
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
                  value={propertyData.propertyFeatures[0].bathroom}
                  name="bathroom"
                  label="Bathroom"
                  style={{ borderColor: "gray !important" }}
                  onChange={handleChange}
                  fullWidth
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
                  value={propertyData.propertyFeatures[0].kitchen}
                  name="kitchen"
                  label="Kitchen"
                  style={{ borderColor: "gray !important" }}
                  onChange={handleChange}
                  fullWidth
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
              <FormControl fullWidth>
                <InputLabel className="inputLabel" style={{ color: "wheat" }}>
                  Bedroom
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

            <>
              {" "}
              <Input
                name="phone"
                label="Mobile Phone"
                onChange={handleChange}
                type="tel"
              />
              <br />
            </>
            <Input
              name="Bio"
              label="Enter Bio"
              rows={4}
              handleChange={handleChange}
              multiline
            />
            <br />
          </Grid>
          <Grid py={2}>
            <Grid className="bold">Social Media Connections</Grid>
            <span style={{ display: "block" }}>
              {" "}
              Help buyers verify your account by connecting Twitter
            </span>

            <br />

            <Grid container justifyContent="space-between">
              <Grid xs={6} container alignItems="center">
                <TwitterIcon /> &nbsp; twitter
              </Grid>
              <Grid xs={6}>
                <Button type="submit" variant="contained" color="primary">
                  Connect
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid py={2}>
            <Grid className="bold">Links</Grid>
            {/* <span style={{display:'block'}}> Help buyers verify your account by connecting Twitter</span> */}

            <br />

            <Grid container alignItems="center">
              <Input
                name="social"
                label="Instagram Handle"
                handleChange={handleChange}
              />
            </Grid>
            <Grid py={1}>
              <Input
                name="website"
                label="Website"
                handleChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid pb={2}>
            <Grid className="bold">Wallet Address</Grid>
            {/* <span style={{display:'block'}}> Help buyers verify your account by connecting Twitter</span> */}

            <br />

            <Grid
              container
              alignItems="center"
              style={{ cursor: "pointer !Important" }}
            ></Grid>
          </Grid>
        </Grid>

        {/* <Grid sm={4}>
            <Grid className="bold" pt={4} pb={1}>
              Profile Banner{" "}
              <TooltipWrapper
                value={`Recommended 1400px by 350px` + " " + "MaxSize:10MB"}
              >
                <InfoIcon />
              </TooltipWrapper>
            </Grid>

            <Grid
              className="profile"
              onMouseEnter={handleShowOverlay}
              onMouseLeave={handleHideOverlay}
            >
              <FileUpload />
              {show}
              {show && <Overlay />}
            </Grid>
            <Grid>
              <Grid className="bold" pt={4} pb={1}>
                Profile Photo{" "}
                <TooltipWrapper
                  value={`Recommended 1400px by 350px` + " " + "MaxSize:10MB"}
                >
                  <InfoIcon />
                </TooltipWrapper>
              </Grid>

              <Grid
                className="photo"
                onMouseEnter={handlePhotoShowOverlay}
                onMouseLeave={handlePhotoHideOverlay}
              >
                <FileUpload />
                {altShow && <Overlay />}
              </Grid>
            </Grid>
          </Grid> */}
      </Grid>
      <Grid pt={3} mt={3}>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </Grid>
    </FormControl>
  );
};

export default PropertyInformationForm;
