import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";

import PropTypes from "prop-types";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  SectionHero,
  SectionHeroSmall,
  SiteBtn,
  SiteIcon,
} from "../../Styles/PageContent.styled";

import React, { useEffect, useState } from "react";

import "./styles.css";
import TooltipWrapper from "../../Tooltip";
import PropertyInformationForm from "../../PropertyInformationForm";
import PropertyImageForm from "../../PropertyImageForm";
import PropertyAmenitiesForm from "../../PropertyAmenitiesForm";
import { agent, propertiesData } from "../../../constants/data";
import { useNavigate, useParams } from "react-router-dom";


const initialState = {
  title: "",
  price: null,
  priceTicker: "",
  listing: "sale",
  propertyType: "",
  description: "",
  propertyFeatures: [
    {
      room: null,
      bathroom: null,
      kitchen: null,
      area: null,
      master: false,
      ensuite: false,
      swimmingPool: true,
    },
  ],
  propertyAmenities: [],
  location: "",
  address: "",
  cityArea: "",
  files:[],
  realtorId: "",
};

const AddNewProperty = () => {
  const [expanded, setExpanded] = useState("panel1");
  const [propertyData, setPropertyData] = useState(initialState);
  const user = agent

  const handleAccordionChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleReset = () => {
    setPropertyData({...initialState})
  }

  useEffect(() => {
    if(user){
      setPropertyData({...propertyData, realtorId:user.id})

    }
  
    
  }, [user])


  const { id } = useParams();

  useEffect(() => {
    if(id){

      const property = propertiesData.filter(property => property.id === id)
      console.log('filterproperty', property)
      setPropertyData({
        ...property[0]
      });
    }
  
    
  }, [])
  
  console.log("test", propertyData)

  

  return (
    <Grid>
      <Grid>
        <Grid sm={12}>
          <Grid mb={3}>
            <Accordion
              // style={{ width: "100%" }}
              expanded={expanded === "panel1"}
              onChange={handleAccordionChange("panel1")}
            >
              <AccordionSummary
                expandIcon={
                  <SiteIcon>
                    <ExpandMoreIcon />
                  </SiteIcon>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="siteContainerRow"
              >
                <SectionHeroSmall>Property Information</SectionHeroSmall>
              </AccordionSummary>
              <AccordionDetails className="siteContainerContent">
                <Grid>
                  <PropertyInformationForm
                    propertyData={propertyData}
                    setPropertyData={setPropertyData}
                  />
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion
              // style={{ width: "100%" }}
              expanded={expanded === "panel2"}
              onChange={handleAccordionChange("panel2")}
            >
              <AccordionSummary
                expandIcon={
                  <SiteIcon>
                    <ExpandMoreIcon />
                  </SiteIcon>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="siteContainerRow"
              >
                <SectionHeroSmall>Image &amp; Gallery</SectionHeroSmall>
              </AccordionSummary>
              <AccordionDetails className="siteContainerContent">
                <Grid py={3}>
                  <PropertyImageForm
                    propertyData={propertyData}
                    setPropertyData={setPropertyData}
                  />
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion
              // style={{ width: "100%" }}
              expanded={expanded === "panel3"}
              onChange={handleAccordionChange("panel3")}
            >
              <AccordionSummary
                expandIcon={
                  <SiteIcon>
                    <ExpandMoreIcon />
                  </SiteIcon>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="siteContainerRow"
              >
                <SectionHeroSmall>Amenities</SectionHeroSmall>
              </AccordionSummary>
              <AccordionDetails className="siteContainerContent">
                <Grid py={3}>
                  <PropertyAmenitiesForm
                    propertyData={propertyData}
                    setPropertyData={setPropertyData}
                  ></PropertyAmenitiesForm>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid container justifyContent="flex-end">
            <SiteBtn alt onClick={handleReset}>Reset</SiteBtn>
            &nbsp; &nbsp;
            <Button
              variant="contained"
              disabled={
                propertyData.propertyType === "apartments"
                  ? !propertyData.title ||
                    !propertyData.address ||
                    !propertyData.propertyType ||
                    !propertyData.price ||
                    !propertyData.propertyFeatures[0].room ||
                    !propertyData.propertyFeatures[0].bathroom ||
                    !propertyData.propertyFeatures[0].kitchen ||
                    !propertyData.description ||
                    propertyData.files.length < 1 ||
                    !propertyData.location ||
                    !propertyData.cityArea 
                   
                  : !propertyData.title ||
                    !propertyData.address ||
                    !propertyData.propertyType ||
                    !propertyData.price ||
                    !propertyData.description ||
                    propertyData.files.length < 1 ||
                    !propertyData.location ||
                    !propertyData.cityArea 
              }
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

// title: "",
//   price: null,
//   priceTicker: "",
//   listing: "rent",
//   propertyType: "",
//   description: "",
//   propertyFeatures: [
//     {
//       room: null,
//       bathroom: null,
//       kitchen: null,
//       area: null,
//       master: false,
//       ensuite: false,
//       swimmingPool: true,
//     },
//   ],
//   propertyAmenities: [],
//   location: "",
//   address: "",
//   country: "",

export default AddNewProperty;
