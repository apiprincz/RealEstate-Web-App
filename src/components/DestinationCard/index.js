import { Grid } from "@mui/material";
import React, { useState } from "react";
import {
  PropertyContainer,
  PropertyTextSmall,
  PropertyTitle,
} from "../Styles/Property.styled";

import "./styles.css";
import { Hr, SiteIcon } from "../Styles/PageContent.styled";

const DestinationCard = ({ destination, index, section }) => {
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
      className="destinationCard"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
      container
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
     
    >
      <Grid
        className={
          index === activeIndex
            ? `destinationCardImage activeDestinationCardImage`
            : "destinationCardImage"
        }
      
      >
        {index === activeIndex && (
          <Grid
            className={
              index === activeIndex && `activeDestinationCardImageOverlay`
            }
          ></Grid>
        )}
        <a href={`/property/`}>
          <img src={destination.files[0].secure_url} alt="destination image" />
        </a>
      </Grid>
      <Grid container xs={12} >
        <PropertyContainer  style={{width:'100%'}}>
          <Grid  
           container
            flexDirection="column"
            alignItems="center"
            justifyContent='space-between'
          
            className='destinationCardContent'
     >
            <Grid>
              <PropertyTitle >
 
                <a href={`/property/`}>{destination.location}</a>
              </PropertyTitle>
            </Grid>
        

            <Hr />
            <Grid py={2} >
              <Grid container>
                <PropertyTextSmall><span style={{fontWeight:'bold'}}>{destination.propertyCount} </span> Properties</PropertyTextSmall>
              </Grid>
            </Grid>
          </Grid>
        </PropertyContainer>
      </Grid>
    </Grid>
  );
};

export default DestinationCard;
