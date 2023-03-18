import { Grid } from "@mui/material";
import React, { useState } from "react";
import {
  PropertyContainer,
  PropertySpan,
  PropertyText,
  PropertyTextSmall,
  PropertyTitle,
} from "../Styles/Property.styled";
import moment from "moment";
import BathroomOutlinedIcon from '@mui/icons-material/BathroomOutlined';
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import FitScreenOutlinedIcon from '@mui/icons-material/FitScreenOutlined';
import "./styles.css";
import { Hr, SiteIcon } from "../Styles/PageContent.styled";
import { useSortContext } from "../../Contexts/SortContext";

const PropertyCard = ({ property, index, section }) => {
  const [activeIndex, setActiveIndex] = useState(false);
  const { sortItems, dispatch } = useSortContext();

  var nf = Intl.NumberFormat();

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
      lg={section === "feature" || sortItems.sortByList ? 12 : sortItems.sortByGrid ? 6 : 4 }
      sm={section === "feature"  || sortItems.sortByList? 12 : sortItems.sortByGrid ? 12 : 6}
      xs={12}
      className="propertyCard"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
      container={sortItems.sortByList ? true : false}
      alignItems='center'
      
    >
      <Grid
        className={
          index === activeIndex
            ? `propertyCardImage activePropertyCardImage`
            : "propertyCardImage"
        }
        xs={sortItems.sortByList ? 5 : ''}
      >
        {index === activeIndex && (
          <Grid
            className={
              index === activeIndex && `activePropertyCardImageOverlay`
            }
          ></Grid>
        )}
        <a href={`property/view/${property._id}`}>
          <img src={property.files[0].secure_url} alt="property image" />
        </a>
      </Grid>
      <Grid xs={sortItems.sortByList ? 7 : ''}>
      <PropertyContainer>
        <Grid p={2} >
          <Grid>
            <PropertyTitle>
              <a href={`property/view/${property._id}`}>{property.title}</a>
            </PropertyTitle>
          </Grid>
          <Grid py={2}>
            <PropertyTextSmall>{property.address}</PropertyTextSmall>
          </Grid>
          <Grid>
            <PropertyText colored>
              {property.currency}
              {nf.format(property.price)}{" "}
              {property.priceTicker && (
                <PropertySpan small> / {property.priceTicker}</PropertySpan>
              )}{" "}
            </PropertyText>
          </Grid>
          <Grid py={4}>
            <Grid container>
              <Grid container xs={4} flexDirection="column">
                <Grid>
                <PropertyTextSmall>Agent</PropertyTextSmall>


                </Grid>
                <Grid pt={1}>Ade</Grid>
              </Grid>
              <Grid container xs={4} flexDirection="column">
                <Grid>
                <PropertyTextSmall>Status</PropertyTextSmall>

                </Grid>
                <Grid pt={1} style={{textTransform:'capitalize'}}>For {property.listing}</Grid>
              </Grid>
              <Grid container xs={4} flexDirection="column">
                <Grid>
                <PropertyTextSmall>Date</PropertyTextSmall>

                </Grid>
                <Grid pt={1}>
                  {moment(property.createdAt).format("DD-MM-YYYY")}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Hr/>
          <Grid py={2}>
            <Grid container>
              <Grid container xs={4} alignItems='center'>
                <Grid>
                <SiteIcon><FitScreenOutlinedIcon/></SiteIcon>


                </Grid>&nbsp;
                <Grid >
                <PropertyTextSmall>{property.propertyFeatures[0].area} Sqft</PropertyTextSmall>


                </Grid>
              </Grid>


              {property.propertyFeatures[0].room ?
              <Grid container xs={4} alignItems='center'>
                <Grid>
                <SiteIcon><BedroomChildOutlinedIcon/></SiteIcon>

                </Grid>&nbsp;
                <Grid style={{textTransform:'capitalize'}}>
                <PropertyTextSmall>{property.propertyFeatures[0].room} Rooms</PropertyTextSmall>
                  
                  </Grid>
              </Grid> : <Grid></Grid>}
              {property.propertyFeatures[0].bathroom && 
              <Grid container xs={4} alignItems='center' style={{flexWrap:'nowrap'}}>
                <Grid>
                <SiteIcon><BathroomOutlinedIcon/></SiteIcon>

                </Grid>&nbsp;
                <Grid container style={{whiteSpace:'nowrap'}}>
                <PropertyTextSmall>{property.propertyFeatures[0].bathroom} Bathrooms</PropertyTextSmall>
                  
                </Grid>
              </Grid>}
            </Grid>
          </Grid>
        </Grid>
      </PropertyContainer>
      </Grid>
    
    </Grid>
  );
};

export default PropertyCard;
