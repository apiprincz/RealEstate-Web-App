import { Grid } from "@mui/material";
import React, { useState } from "react";
import { SiteIcon, SiteText, SiteTitle } from "../Styles/PageContent.styled";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import LandscapeOutlinedIcon from "@mui/icons-material/LandscapeOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import "./styles.css";
import { PropertyTypesContainer } from "../Styles/PageContainers.styled copy";
import { PropertyTextSmall, PropertyTitle } from "../Styles/Property.styled";

const PropertyType = ({ property, index }) => {
  const [activeIndex, setActiveIndex] = useState(false);

  const handleMouseEnter = (index) => {
    console.log("index", index);
    setActiveIndex(index);
  };
  const handleMouseLeave = () => {
    console.log("index", index);
    setActiveIndex("");
  };
  return (
    <Grid
      item
      xs={12}
      className={
        index === activeIndex
          ? `propertyType activePropertyType`
          : "propertyType"
      }
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    >
     
      <a href={`/property?propertyType=${property.propertyType}`}>
          <PropertyTypesContainer active={index === activeIndex ? true : false}>
            <Grid p={5} container flexDirection="column" alignItems="center">
              {property.propertyType === "shop" && (
                <SiteIcon large>
                  <StorefrontOutlinedIcon />
                </SiteIcon>
              )}
              {property.propertyType === "land" && (
                <SiteIcon large>
                  <LandscapeOutlinedIcon />
                </SiteIcon>
              )}
              {property.propertyType === "apartments" && (
                <SiteIcon large>
                  <ApartmentOutlinedIcon />
                </SiteIcon>
              )}
              {property.propertyType === "office" && (
                <SiteIcon large>
                  <MeetingRoomOutlinedIcon />
                </SiteIcon>
              )}
              <Grid pt={2}>
                <SiteTitle>{property.propertyType}</SiteTitle>
              </Grid>
              <Grid pt={1}>
                <PropertyTextSmall>{property.propertyCount} Properties</PropertyTextSmall>
              </Grid>
            </Grid>
          </PropertyTypesContainer>
        </a>
      
    </Grid>
  );
};

export default PropertyType;
