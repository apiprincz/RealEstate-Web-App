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
// import PropertyAmenities from "../../Components/Amenities/Property";
// import Video from "../../Components/Video";
// import Property from "../../Components/Property";

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

const PropertyDetails = () => {
  const { id } = useParams();
  const [showOptions, setShowOptions] = useState(Boolean);
  const [activeIndex, setActiveIndex] = useState([0, 1]);
  const [activeAmenitiesIndex, setActiveAmenitiesIndex] = useState([0, 1]);
  const [values, setValues] = useState([]);
  const [agentDetail, setAgentDetail] = useState();
  const [propertyDetail, setPropertyDetail] = useState();

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
  const {agent} = useSelector((state) => state.agents);

  console.log("similarProp", id);

  // const f = properties?.properties?.filter(
  //   (property) =>
  //     property.price >= propertyDetail?.price - 200000 &&
  //     property.price <= propertyDetail?.price + 200000 &&
  //     property._id !== propertyDetail?._id
  // );

  console.log("jdfjhhf", propertyDetail);
  var nf = Intl.NumberFormat();

  // console.log("similarProp", deals);

  // console.log(propertyDetail);

  const handleFav = () => {};
  const format = (num) =>
    num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

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
  //   let amenities = [propertyDetail?.amenities];
  //   let features = [propertyDetail?.features];
  //   setAmenities(amenities);
  //   setFeatures(features);
  // }, [propertyDetail]);

  console.log("activeIndex", features);

  useEffect(() => {
    if (properties?.properties) {
      const property = properties?.properties?.filter(
        (property) => property._id === id
      );
      console.log("shhdsdf", property, properties?.properties);
      setPropertyDetail(property);
    }
  }, [properties]);

  const dispatchRedux = useDispatch();

  useEffect(() => {
    if ( propertyDetail?.[0].agentId)
      console.log("jjfdkkf", propertyDetail, propertyDetail?.[0].agentId);
    dispatchRedux(getAgent(propertyDetail?.[0].agentId));
  }, [propertyDetail]);
  useEffect(() => {
    if (agent?.agent) {
      console.log("foioooer", agent);
      setAgentDetail(agent?.agent);
    }
  }, [agent]);

  console.log("agenthdij", agentDetail, agent);

  return (
    <Layout>
      <Grid px={2} className="pageOffset">
        <Grid container spacing={3}>
          <Grid item sm={8}>
            <div className="propertyImage">
              <img src={propertyDetail?.[0].files[0]?.secure_url} />
            </div>
            <Grid container py={3} px={2} justifyContent="space-between">
              <Grid style={{ textTransform: "capitalize" }}>
                <SiteText>
                  Reserved For{" "}
                  <span className="propertyListing">
                    {propertyDetail?.[0]?.listing}
                  </span>
                </SiteText>
              </Grid>
              <Grid className="itemFav" onClick={handleFav}>
                <a href="#">
                  <SiteIcon>
                    <FavoriteBorderIcon fontSize="16px" />
                    &nbsp;{propertyDetail?.[0]?.favoriteCount?.length}{" "}
                  </SiteIcon>
                </a>
              </Grid>
            </Grid>
            <Grid item pt={5} sm={12}>
              <Grid>
                <SectionHero>{propertyDetail?.[0]?.title}</SectionHero>
              </Grid>
              <Grid
                my={1}
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Grid item xs={2} lg={1} sm={2}>
                  <SiteIcon>
                    <a
                      target="_blank"
                      href={`/properties/${propertyDetail?.[0]?.location}`}
                      className="propLocationIcon"
                    >
                      <AlternateEmailIcon />
                    </a>{" "}
                  </SiteIcon>
                </Grid>
                <Grid item xs={10} lg={11} sm={10} className="propLocation">
                  <SiteText>
                    {propertyDetail?.[0]?.address}{" "}
                    {propertyDetail?.[0]?.location}
                  </SiteText>
                </Grid>
              </Grid>
              <Grid
                my={1}
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Grid item xs={10} lg={11} sm={10} className="propLocation">
                  <SiteTextLarge>
                    NGN{nf.format(propertyDetail?.[0]?.price)}
                    {propertyDetail?.[0]?.priceTicker && <>/</>}
                    &nbsp;{propertyDetail?.[0]?.priceTicker}
                  </SiteTextLarge>
                </Grid>
              </Grid>
              <Grid
                my={4}
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
                pl={2}
              >
                <Hr />
              </Grid>
              <Grid
                container
                justifyContent="space-between"
                px={3}
                className="propFeatures"
                py={2}
              >
                <Grid
                  item
                  xs={5.8}
                  lg={2.7}
                  md={5.5}
                  p={1}
                  container
                  flexDirection="column"
                  className="propFeatureItem"
                >
                  <span className="propFeatureTitle">Bedrooms</span>
                  <hr
                    style={{
                      width: "100%",
                      margin: "2px 0px 5px",
                      color: "black",
                    }}
                  />

                  <Grid
                    container
                    mt={1}
                    alignItems="center"
                    className="propFeatureDetail"
                  >
                    <SingleBedIcon className="propFeatureIcon" /> &nbsp;&nbsp;
                    &nbsp; {propertyDetail?.[0]?.propertyFeatures[0]?.room}{" "}
                    &nbsp;&nbsp;
                    {propertyDetail?.[0]?.propertyFeatures[0]?.master && (
                      // <TooltipWrapper value="Master">
                      <Chip label="M" size="small" className="propSubIcon" />
                      // </TooltipWrapper>
                    )}
                    &nbsp;&nbsp;
                    {propertyDetail?.[0]?.propertyFeatures?.ensuite && (
                      // <TooltipWrapper value="En-suite">
                      <Chip label="E" size="small" className="propSubIcon" />
                      // </TooltipWrapper>
                    )}
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={5.8}
                  lg={2.7}
                  md={5.5}
                  p={1}
                  container
                  flexDirection="column"
                  className="propFeatureItem"
                >
                  <span className="propFeatureTitle">Bathrooms</span>
                  <hr
                    style={{
                      width: "100%",
                      margin: "2px 0px 5px",
                      color: "black",
                    }}
                  />

                  <Grid
                    container
                    mt={1}
                    alignItems="center"
                    className="propFeatureDetail"
                  >
                    <ShowerIcon className="propFeatureIcon" /> &nbsp;&nbsp;
                    &nbsp; {propertyDetail?.[0]?.propertyFeatures[0]?.bathroom}{" "}
                    &nbsp;&nbsp;
                    {propertyDetail?.[0]?.propertyAmenities?.includes(
                      "waterheater"
                    ) && (
                      // <TooltipWrapper value="Water Heater">
                      <Chip label="WH" size="small" className="propSubIcon" />
                      // </TooltipWrapper>
                    )}
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={5.8}
                  lg={2.7}
                  md={5.5}
                  p={1}
                  container
                  flexDirection="column"
                  className="propFeatureItem"
                >
                  <span className="propFeatureTitle">Area</span>
                  <hr
                    style={{
                      width: "100%",
                      margin: "2px 0px 5px",
                      color: "black",
                    }}
                  />

                  <Grid
                    container
                    mt={1}
                    alignItems="center"
                    className="propFeatureDetail"
                  >
                    <FitScreenIcon className="propFeatureIcon" /> &nbsp;&nbsp;
                    &nbsp;
                    {propertyDetail?.[0]?.propertyFeatures[0]?.area} SQFT
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={5.8}
                  lg={2.7}
                  md={5.5}
                  p={1}
                  container
                  flexDirection="column"
                  className="propFeatureItem"
                >
                  <span className="propFeatureTitle">Kitchen</span>
                  <hr
                    style={{
                      width: "100%",
                      margin: "2px 0px 5px",
                      color: "black",
                    }}
                  />

                  <Grid
                    container
                    mt={1}
                    alignItems="center"
                    className="propFeatureDetail"
                  >
                    <KitchenIcon className="propFeatureIcon" /> &nbsp;&nbsp;
                    &nbsp; {propertyDetail?.[0]?.propertyFeatures[0]?.kitchen}
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid container px={3} mt={3} className="propSale" py={2}>
              {propertyDetail?.[0]?.listing === "rent" ? (
                <Grid container justifyContent="space-between">
                  <Grid>Pay &amp; Pack-In Offer </Grid>
                  <Grid>
                    <span className="propertyListing">
                      For {propertyDetail?.[0]?.listing}
                    </span>
                  </Grid>
                </Grid>
              ) : (
                <Grid container justifyContent="space-between">
                  <Grid>Sales Ends On </Grid>
                  <Grid>
                    <span className="propertyListing">
                      For {propertyDetail?.[0]?.listing}
                    </span>
                  </Grid>
                </Grid>
              )}
              <hr style={{ width: "100%" }} />

              <Grid style={{ width: "100%" }}>
                <Grid className="propHero">
                  {propertyDetail?.[0]?.listing === "rent"
                    ? "Rent Per Annum (Avg.)"
                    : "Price"}
                </Grid>
                <Grid
                  className="propPrice"
                  mt={1}
                  container
                  alignItems="baseline"
                >
                  <h1>{propertyDetail?.[0]?.price && (format(propertyDetail?.[0]?.price))}</h1>
                  <span className="propHero">{propertyDetail?.[0]?.currency[0]}</span>
                </Grid>
                <Grid>
                  {propertyDetail?.[0]?.listing === "auction" ? (
                    <Grid mt={2} md={6} xs={12}>
                      <Button
                        className="buyDealBtn"
                        variant="contained"
                        size="large"
                      >
                        <LocalOfferIcon /> &nbsp;Place Bid
                      </Button>
                    </Grid>
                  ) : (
                    <Grid mt={2}>
                      <Grid container spacing={3}>
                        <Grid item md={6} sm={12} xs={12}>
                          <Button
                            className="buyDealBtn"
                            variant="contained"
                            size="large"
                          >
                            <AccountBalanceWalletIcon className="buyDealIcon" />
                            &nbsp; Buy Deal
                          </Button>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                          {propertyDetail?.[0]?.inviteOffers && (
                            <Button
                              className="buyDealBtn"
                              variant="outlined"
                              size="large"
                            >
                              <LocalOfferIcon /> &nbsp;Place Offer
                            </Button>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid> */}
            </Grid>
            <Grid
              my={4}
              container
              alignItems="center"
              justifyContent="space-between"
              spacing={2}
              pl={2}
            >
              <Hr />
            </Grid>
            <Grid
              // className="propertySectionContainer"
              container
              justifyContent="space-between"
            >
              <Grid sm={12} xs={12}>
                <Grid
                  container
                  className="sectionHeader"
                  onClick={() => handleShowOptions(0)}
                  justifyContent="space-between"
                  alignItems="center"
                  sm={12}
                >
                  <Grid className="filterTitle ">
                    <SiteTextLarge>About Property</SiteTextLarge>
                  </Grid>
                  <Grid>
                    {activeIndex?.includes(0) ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </Grid>
                </Grid>
                {activeIndex?.includes(0) && (
                  <Grid className="filterOptionContainer" py={3} px={3}>
                    <Grid>
                      <p>{propertyDetail?.[0]?.description}.</p>
                    </Grid>
                  </Grid>
                )}
              </Grid>
              <Grid sm={12} xs={12}>
                <Grid
                  container
                  className="sectionHeader"
                  onClick={() => handleShowOptions(1)}
                  justifyContent="space-between"
                  alignItems="center"
                  sm={12}
                >
                  <Grid className="filterTitle ">
                    <SiteTextLarge>Amenities</SiteTextLarge>
                  </Grid>
                  <Grid>
                    {activeIndex?.includes(1) ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </Grid>
                </Grid>
                {activeIndex?.includes(1) && (
                  <Grid className="filterOptionContainer" py={3} px={3}>
                    <Grid>
                      <FormControl fullWidth>
                        <FormGroup>
                          <Grid container sm={12}>
                            {propertyDetail?.[0]?.propertyAmenities.length >
                            0 ? (
                              <>
                                {propertyDetail?.[0]?.propertyAmenities.map(
                                  (amenities) => (
                                    <Grid sm={4} md={3}>
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            checked
                                            value={amenities}
                                            name={amenities}
                                          />
                                        }
                                        label={`${amenities.split("_")[0]} ${
                                          amenities.split("_")[1] || ""
                                        } ${amenities.split("_")[2] || ""}`}
                                        className="siteText checkboxLabel"
                                      />
                                    </Grid>
                                  )
                                )}{" "}
                              </>
                            ) : (
                              <>No Amenities</>
                            )}
                          </Grid>
                        </FormGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                )}
              </Grid>
              <Grid sm={12} xs={12}>
                <Grid
                  container
                  className="sectionHeader"
                  onClick={() => handleShowOptions(2)}
                  justifyContent="space-between"
                  alignItems="center"
                  sm={12}
                >
                  <Grid className="filterTitle ">
                    <SiteTextLarge>Schedule A Tour</SiteTextLarge>
                  </Grid>
                  <Grid>
                    {activeIndex?.includes(2) ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </Grid>
                </Grid>
                {activeIndex?.includes(2) && (
                  <Grid className="filterOptionContainer" py={3} px={3}>
                    <Grid>
                      <InspectionDate
                        booking={booking}
                        setBooking={setBooking}
                        values={values}
                        setValues={setValues}
                      />
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item p={4} sm={4}>
            <Grid item p={2} className="agentInfo">
              <Grid>
                <SiteTextLarge>Agent Information</SiteTextLarge>
              </Grid>
              <Grid py={3}>
                <SiteTextSmall>Posted By </SiteTextSmall>
              </Grid>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Grid item xs={2} lg={4} sm={4}>
                  <a
                    target="_blank"
                    href={`/agent/${agentDetail?._id}`}
                    className="agentImage"
                  >
                    <img
                      style={{ display: "block", width: "100%" }}
                      src={
                        agentDetail?.profilePhoto?.secure_url.secure_url ||
                        Avatar
                      }
                      alt="agent image"
                    />
                  </a>
                </Grid>
                {/* agentInfo */}
                <Grid item xs={10} lg={8} sm={8} className="agentDetails">
                  <Grid>
                    {agentDetail?.name && (
                      <SectionHeroSmall>{agentDetail?.name}</SectionHeroSmall>
                    )}
                  </Grid>
                  <Grid>{agentDetail?.phone && <>{agentDetail?.phone}</>}</Grid>
                  <Grid>
                    <SiteText>
                      <a
                        href={`/agent/${agentDetail?._id}`}
                        className="textColored"
                      >
                        See More Listings
                      </a>
                    </SiteText>
                  </Grid>
                </Grid>
              </Grid>

              {
              propertyDetail?.[0]?.agentInfo?.agentNo ||
              propertyDetail?.[0]?.agentInfo?.agentWhatsappNo ? (
                <Grid>
                  <Grid py={3}>
                    <Hr />
                  </Grid>

                  <Grid py={3}>
                    <SiteTextSmall>Agent Info </SiteTextSmall>
                  </Grid>
                 {propertyDetail?.[0]?.agentInfo?.agentName && <Grid container alignItems='center' pb={2}>
                    {/* <SiteIcon><CallIcon/></SiteIcon>  &nbsp; &nbsp; */}
                    
                     <SiteText>
                    {propertyDetail?.[0]?.agentInfo?.agentName}
                      </SiteText> 
                  </Grid>}
                 {propertyDetail?.[0]?.agentInfo?.agentNo && <Grid container alignItems='center'  pb={2}>
                    <SiteIcon><CallIcon/></SiteIcon>  &nbsp; &nbsp; <SiteText>
                    {propertyDetail?.[0]?.agentInfo?.agentNo}
                      </SiteText> 
                  </Grid>}
                  {propertyDetail?.[0]?.agentInfo?.agentWhatsappNo &&<Grid container alignItems='center' pb={2} >
                    <SiteIcon><WhatsAppIcon/></SiteIcon> &nbsp; &nbsp;<SiteText>
                    {propertyDetail?.[0]?.agentInfo?.agentWhatsappNo}
                      </SiteText> 
                  </Grid>}
                </Grid>
              ) : (
                <Grid>

                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>

        <Grid p={1} my={4}>
          <h4>Similar Properties You May Like</h4>

          <Grid className="propertyAlike" mt={2}>
            {/* <Grid px={1} py={3} className="similarPropContainer">
              {similarProperty?.map((item) => (
                <Grid md={4} sm={6} xs={12} mr={2} className="similarPropItem">
                   <Property item={item}></Property> 
                </Grid>
              ))}
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default PropertyDetails;
