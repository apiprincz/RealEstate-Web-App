import { Grid } from "@mui/material";
import React, { useState } from "react";
import {
  PropertyContainer,
  PropertyTextSmall,
  PropertyTitle,
} from "../Styles/Property.styled";

import "./styles.css";
import { Hr, SiteIcon } from "../Styles/PageContent.styled";

const NeighborhoodCard = ({ neighborhood, index, section }) => {
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
      className="neighborhoodCard"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
      container
      flexDirection="row"
      alignItems="center"
     
    >
      <Grid
        className={
          index === activeIndex
            ? `neighborhoodCardImage activeNeighborhoodCardImage`
            : "neighborhoodCardImage"
        }
        xs={6}
      >
        {index === activeIndex && (
          <Grid
            className={
              index === activeIndex && `activeNeighborhoodCardImageOverlay`
            }
          ></Grid>
        )}
        <a href={`/property/`}>
          <img src={neighborhood.files[0].secure_url} alt="neighborhood image" />
        </a>
      </Grid>
      <Grid xs={6} >
        <PropertyContainer fixedHeight>
          <Grid  
           container
            flexDirection="column"
            alignItems="center"
            justifyContent='space-between'
            style={{height:'100%'}}
            className='neighborhoodCardContent'
     >
            <Grid>
              <PropertyTitle>
 
                <a href={`/property/`}>{neighborhood.location}</a>
              </PropertyTitle>
            </Grid>
            <Grid py={2}>
              <PropertyTextSmall><span style={{fontWeight:'bold'}}>{neighborhood.propertyCount}</span> Properties</PropertyTextSmall>
            </Grid>

            <Hr />
            <Grid >
              <Grid container>
                <PropertyTextSmall><span style={{fontWeight:'bold'}}>{neighborhood.proximity.minutes} Minutes</span> Driving</PropertyTextSmall>
              </Grid>
            </Grid>
          </Grid>
        </PropertyContainer>
      </Grid>
    </Grid>
  );
};

export default NeighborhoodCard;
