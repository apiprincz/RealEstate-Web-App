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
import { SectionHero, SectionHeroSmall, SiteIcon } from "../../Styles/PageContent.styled"

import React, { useState } from "react";


import "./styles.css";
import TooltipWrapper from "../../Tooltip";
import PropertyInformationForm from "../../PropertyInformationForm";
const initialState = {
  name: "",
  phone: "",
  password: "",
  confirmPassword: "",
  email: "",
  referrer: "",
};

const AddNewProperty = () => {
  const [expanded, setExpanded] = useState("panel1");

  const [showPassword, setShowPassword] = useState(false);
  const [show, setShow] = useState(false);
  const [altShow, setAltShow] = useState();
  const [toggleShow, setToggleShow] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const handleSubmit = () => {};

  const handleChange = () => {};
  const handleShowPassword = () => {};
  const handleWalletCopy = () => {
    console.log("wallet");
  };

  const handleShowOverlay = () => {
    setShow(true);
  };
  const handleHideOverlay = () => {
    setShow(false);
  };

  const handlePhotoShowOverlay = () => {
    setAltShow(true);
    setShow(false);
  };
  const handlePhotoHideOverlay = () => {
    setAltShow(false);
    setShow(true);
  };
  const handleAccordionChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Grid>
     

      <Grid>
    
          <Grid sm={12}>
            <Grid  mb={3}>
              <Accordion
                // style={{ width: "100%" }}
                expanded={expanded === "panel1"}
                onChange={handleAccordionChange("panel1")}
                
              >
                <AccordionSummary
                  expandIcon={<SiteIcon><ExpandMoreIcon /></SiteIcon>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className='siteContainerRow'
                >
                  <SectionHeroSmall>Property Information</SectionHeroSmall>
                </AccordionSummary>
                <AccordionDetails className="siteContainerContent">
                  <Grid >
                 <PropertyInformationForm/>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion
                // style={{ width: "100%" }}
                expanded={expanded === "panel2"}
                onChange={handleAccordionChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<SiteIcon><ExpandMoreIcon /></SiteIcon>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className='siteContainerRow'
                >
                  <SectionHeroSmall>Image &amp; Gallery</SectionHeroSmall>
                </AccordionSummary>
                <AccordionDetails className="siteContainerContent">
                  <Grid py={3}>
                    Visit our <a href="#">help center</a> to learn how to get
                    started with buying and selling of property.
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion
                // style={{ width: "100%" }}
                expanded={expanded === "panel3"}
                onChange={handleAccordionChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<SiteIcon><ExpandMoreIcon /></SiteIcon>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className='siteContainerRow'
                >
                  <SectionHeroSmall>Amenities</SectionHeroSmall>
                </AccordionSummary>
                <AccordionDetails className="siteContainerContent">
                  <Grid py={3}>
                    Visit our <a href="#">help center</a> to learn how to get
                    started with buying and selling of property.
                  </Grid>
                </AccordionDetails>
              </Accordion>

            
            </Grid>
          </Grid>
    
      </Grid>

   
    </Grid>
  );
};

export default AddNewProperty;
