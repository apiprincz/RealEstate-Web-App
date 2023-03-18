import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { propertiesData, agentData } from "../../constants/data";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import ShowerIcon from "@mui/icons-material/Shower";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import KitchenIcon from "@mui/icons-material/Kitchen";
import Chip from "@mui/material/Chip";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
// import TooltipWrapper from "../../Components/Tooltip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Avatar from "../../images/avatar1.png";
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import moment from "moment";
import "./styles.css";


import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Hr,
  SectionHero,
  SectionHeroSmall,
  SiteIcon,
  SiteText,
  SiteTextLarge,
  SiteTextSmall,
} from "../../components/Styles/PageContent.styled";
import InspectionDate from "../../components/InspectionDate";
import { getAgent } from "../../actions/agent";

const AgentDetails = () => {
  const { id } = useParams();
  const [showOptions, setShowOptions] = useState(Boolean);
  const [activeIndex, setActiveIndex] = useState([0, 1]);
  const [activeAmenitiesIndex, setActiveAmenitiesIndex] = useState([0, 1]);
  const [values, setValues] = useState([]);
  const [agentDetail, setAgentDetail] = useState();
  

  const [booking, setBooking] = useState({
    properties: [],
    mode: "",
    inspectionDays: [],
    inspectionTime: "",
    // email: user?.user?.email,
    userId: "",
    userPhone: "",
    userAddress: "",
    amount_paid: null,
    pay_stack_ref: "",
    amount_due: null,
    payment_method: null,
    payment_status: "pending",
    paystack_details: [],
    appointmentDays: [],
  });
  // const [similarProperty, setSimilarProperty] = useState();

  const { properties } = useSelector((state) => state.properties);
  const { agents } = useSelector((state) => state.agents);

  console.log("similarProp", id);

  // const f = properties?.properties?.filter(
  //   (property) =>
  //     property.price >= agentDetail?.price - 200000 &&
  //     property.price <= agentDetail?.price + 200000 &&
  //     property._id !== agentDetail?._id
  // );

  console.log("59854500", agents);
  var nf = Intl.NumberFormat();

 

  const handleFav = () => {};

  const handleShowOptions = (index) => {
    setShowOptions(!showOptions);
    if (activeIndex.includes(index)) {
      let newActiveArray = activeIndex.filter((item) => item !== index);
      setActiveIndex(newActiveArray);
      console.log("activeIndex", activeIndex);
    } else {
      let newActiveArray = activeIndex.push(index);
      setActiveIndex([...activeIndex], newActiveArray);
      console.log("activeIndexalt", activeIndex);
    }
  };
  const handleShowAmenitiesOptions = (index) => {
    // setShowOptions(!showOptions);
    if (activeAmenitiesIndex.includes(index)) {
      let newActiveArray = activeAmenitiesIndex.filter(
        (item) => item !== index
      );
      setActiveAmenitiesIndex(newActiveArray);
      console.log("activeAmenitiesIndex", activeAmenitiesIndex);
    } else {
      let newActiveArray = activeAmenitiesIndex.push(index);
      setActiveAmenitiesIndex([...activeAmenitiesIndex], newActiveArray);
      console.log("activeIndexalt", activeAmenitiesIndex);
    }
  };

  const [amenities, setAmenities] = useState();
  const [features, setFeatures] = useState();

  // useEffect(() => {
  //   let amenities = [agentDetail?.amenities];
  //   let features = [agentDetail?.features];
  //   setAmenities(amenities);
  //   setFeatures(features);
  // }, [agentDetail]);

  console.log("activeIndex", features);

  useEffect(() => {
    if (agents?.agents) {
      const agent = agents?.agents?.filter(
        (agent) => agent._id === id
      );
      console.log("sghwueuiiwej", agent,agents?.agents );
      setAgentDetail(agent);
    }
  }, [agents]);

  const dispatchRedux = useDispatch();

  useEffect(() => {
    if (agentDetail)
      console.log("jjfdkkf", agentDetail, agentDetail?.[0].agentId);
    // dispatchRedux(gePropertiesByAgent(agentDetail?.[0].agentId));
  }, [agentDetail]);
  // useEffect(() => {
  //   if (agent?.agent) {
   
  //     setAgentDetail(agent?.agent);
  //   }
  // }, [agent]);

  console.log("agenthdij", agentDetail);

  return (
    <Layout>
      <Grid px={2} className="pageOffset">
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <div className="agentImage">
              <img src={agentDetail?.[0].profilePhoto?.secure_url} />
            </div>
            <Grid container py={3} px={2} justifyContent="space-between">
              <Grid style={{ textTransform: "capitalize" }}>
                <SiteText>
                  Reserved For{" "}
                  <span className="agentListing">
                    {agentDetail?.[0]?.listing}
                  </span>
                </SiteText>
              </Grid>
        
            </Grid>
       
          </Grid>
      
        </Grid>

    
      </Grid>
    </Layout>
  );
};

export default AgentDetails;
