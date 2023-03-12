import React, { useEffect, useState } from "react";
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
// AIzaSyDhBOLsioDhpDdLzheoQveOvZdRZqVHuHk

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
import { SiteBtn, SiteText } from "../Styles/PageContent.styled";
import { Dropzone, FileItem } from "@dropzone-ui/react";
import { useParams } from "react-router-dom";
import Places from "../Places";
import {
  setCityArea,
  setLocationSingle,
  useFilterContext,
} from "../../Contexts/FilterContext";
import { city, propertiesData } from "../../constants/data";

const PropertyAmenitiesForm = ({ propertyData, setPropertyData }) => {
  // const { products } = useSelector((state) => state.stores.products);

  const { id } = useParams();

  // const property = id ? properties?.find((p) => p._id === id) : null;

  const handleChange = (e) => {
    if (propertyData.propertyAmenities.includes(e.target.value)) {
      let newPropertyData = propertyData.propertyAmenities.filter(
        (item) => item !== e.target.value
      );
      setPropertyData({
        ...propertyData,
        propertyAmenities: [...newPropertyData],
      });
    } else {
      setPropertyData({
        ...propertyData,
        propertyAmenities: [...propertyData.propertyAmenities, e.target.value],
      });
    }
  };
  const handleReset = (e) => {
    setPropertyData({
      ...propertyData,
      propertyAmenities: [],
    });
  };
  const handleSelectAll = (e) => {
    setPropertyData({
      ...propertyData,
      propertyAmenities: [
        "gym",
        "refrigerator",
        "air_condition",
        "stunning_views",
        "balcony",
        "kitchen_cabinet",
        "laundry",
        "kitchen_shelf",
        "parking_garage",
        "tiled_floors",
        "24_hours_electricity",
        "surveillance_system",
        "dish_washer",
        "pop_ceiling",
        "prepaid_meter",
        "wardrobe",
        "wi_fi",
      ],
    });
  };

  useEffect(() => {
    if (id) {
      const property = propertiesData.filter((property) => property.id === id);
      console.log("filterproperty", property);
      setPropertyData({
        ...property[0]
      });
    }
  }, [id]);

  console.log("ieitiitr", propertyData);
  return (
    <FormControl fullWidth>
      <FormGroup>
        <Grid container pl={2} sm={12}>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes(
                    "air_condition"
                  )}
                  onChange={handleChange}
                  value="air_condition"
                  name="air_condition"
                />
              }
              label="Air Condition"
              className="siteText"
            />
          </Grid>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes("gym")}
                  onChange={handleChange}
                  value="gym"
                  name="gym"
                />
              }
              label="Gym"
              className="siteText"
            />
          </Grid>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes(
                    "refrigerator"
                  )}
                  onChange={handleChange}
                  value="refrigerator"
                  name="Refrigerator"
                />
              }
              label="Refrigerator"
              className="siteText"
            />
          </Grid>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes(
                    "stunning_views"
                  )}
                  onChange={handleChange}
                  value="stunning_views"
                />
              }
              label="Stunning Views"
              className="siteText"
            />
          </Grid>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes("balcony")}
                  onChange={handleChange}
                  value="balcony"
                />
              }
              label="Balcony"
              className="siteText"
            />
          </Grid>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes(
                    "kitchen_cabinet"
                  )}
                  onChange={handleChange}
                  value="kitchen_cabinet"
                />
              }
              label="Kitchen Cabinet"
              className="siteText"
            />
          </Grid>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes("laundry")}
                  onChange={handleChange}
                  value="laundry"
                />
              }
              label="Laundry"
              className="siteText"
            />
          </Grid>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes(
                    "kitchen_shelf"
                  )}
                  onChange={handleChange}
                  value="kitchen_shelf"
                />
              }
              label="Kitchen Shelf"
              className="siteText"
            />
          </Grid>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes(
                    "parking_garage"
                  )}
                  onChange={handleChange}
                  value="parking_garage"
                />
              }
              label="Parking Garage"
              className="siteText"
            />
          </Grid>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes(
                    "tiled_floors"
                  )}
                  onChange={handleChange}
                  value="tiled_floors"
                />
              }
              label="Tiled Floors"
              className="siteText"
            />
          </Grid>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes(
                    "24_hours_electricity"
                  )}
                  onChange={handleChange}
                  value="24_hours_electricity"
                />
              }
              label="24hr hours electricity"
              className="siteText"
            />
          </Grid>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes(
                    "dish_washer"
                  )}
                  onChange={handleChange}
                  value="dish_washer"
                />
              }
              label="Dish Washer"
              className="siteText"
            />
          </Grid>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes(
                    "surveillance_system"
                  )}
                  onChange={handleChange}
                  value="surveillance_system"
                />
              }
              label="24/7 Surveillance System"
              className="siteText"
            />
          </Grid>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes(
                    "pop_ceiling"
                  )}
                  onChange={handleChange}
                  value="pop_ceiling"
                />
              }
              label="POP Ceiling"
              className="siteText"
            />
          </Grid>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes(
                    "prepaid_meter"
                  )}
                  onChange={handleChange}
                  value="prepaid_meter"
                />
              }
              label="Prepaid Meter"
              className="siteText"
            />
          </Grid>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes("wardrobe")}
                  onChange={handleChange}
                  value="wardrobe"
                />
              }
              label="Wardrobe"
              className="siteText"
            />
          </Grid>
          <Grid sm={4} md={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyData.propertyAmenities.includes("wi_fi")}
                  onChange={handleChange}
                  value="wi_fi"
                />
              }
              label="Wi-Fi"
              className="siteText"
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <SiteBtn variant="outlined" onClick={handleSelectAll} small alt>
            Select All
          </SiteBtn>
          &nbsp;
          <SiteBtn variant="outlined" onClick={handleReset} small>
            Reset
          </SiteBtn>
        </Grid>
      </FormGroup>
    </FormControl>
  );
};

export default PropertyAmenitiesForm;
