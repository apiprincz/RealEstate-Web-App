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
import { propertiesData } from "../../constants/data";
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
import moment from "moment";
import "./styles.css";
// import PropertyAmenities from "../../Components/Amenities/Property";
// import Video from "../../Components/Video";
// import Property from "../../Components/Property";

import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Hr,
  SectionHero,
  SiteIcon,
  SiteText,
  SiteTextLarge,
} from "../../components/Styles/PageContent.styled";
import InspectionDate from "../../components/InspectionDate";

const PropertyDetails = () => {
  const { id } = useParams();
  const [showOptions, setShowOptions] = useState(Boolean);
  const [activeIndex, setActiveIndex] = useState([0, 1]);
  const [activeAmenitiesIndex, setActiveAmenitiesIndex] = useState([0, 1]);
  const [values, setValues] = useState([]);

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
    paystack_details:[],
    appointmentDays: [],
  });
  // const [similarProperty, setSimilarProperty] = useState();

  // const {deals} = useSelector(state => state.deals)
  console.log("similarProp");

  const propertyDetail = propertiesData?.find((property) => property.id === id);
  const similarProperty = propertiesData?.filter(
    (property) =>
      property.price >= propertyDetail?.price - 200000 &&
      property.price <= propertyDetail?.price + 200000 &&
      property.id !== propertyDetail?.id
  );

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

  useEffect(() => {
    let amenities = [propertyDetail?.amenities];
    let features = [propertyDetail?.features];
    setAmenities(amenities);
    setFeatures(features);
  }, [propertyDetail]);

  console.log("activeIndex", features);

  return (
    <Layout>
      <Grid px={2} className="pageOffset">
        <Grid container spacing={3}>
          <Grid item sm={8}>
            <div className="propertyImage">
              <img src={propertyDetail?.files[0].secure_url} />
            </div>
            <Grid container py={3} px={2} justifyContent="space-between">
              <Grid style={{ textTransform: "capitalize" }}>
                <SiteText>
                  Reserved For{" "}
                  <span className="propertyListing">
                    {propertyDetail?.listing}
                  </span>
                </SiteText>
              </Grid>
              <Grid className="itemFav" onClick={handleFav}>
                <a href="#">
                  <SiteIcon>
                    <FavoriteBorderIcon fontSize="16px" />
                    &nbsp;{propertyDetail?.favoriteCount?.length}{" "}
                  </SiteIcon>
                </a>
              </Grid>
            </Grid>
            <Grid item pt={5} sm={12}>
              <Grid>
                <SectionHero>{propertyDetail?.title}</SectionHero>
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
                      href={`/properties/${propertyDetail?.location}`}
                      className="propLocationIcon"
                    >
                      <AlternateEmailIcon />
                    </a>{" "}
                  </SiteIcon>
                </Grid>
                <Grid item xs={10} lg={11} sm={10} className="propLocation">
                  <SiteText>
                    {propertyDetail?.address} {propertyDetail?.location}
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
                    NGN{nf.format(propertyDetail?.price)}
                    {propertyDetail?.priceTicker && <>/</>}
                    &nbsp;{propertyDetail?.priceTicker}
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
                    &nbsp; {propertyDetail?.propertyFeatures[0]?.room}{" "}
                    &nbsp;&nbsp;
                    {propertyDetail?.propertyFeatures[0]?.master && (
                      // <TooltipWrapper value="Master">
                      <Chip label="M" size="small" className="propSubIcon" />
                      // </TooltipWrapper>
                    )}
                    &nbsp;&nbsp;
                    {propertyDetail?.propertyFeatures?.ensuite && (
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
                    &nbsp; {propertyDetail?.propertyFeatures[0]?.bathroom}{" "}
                    &nbsp;&nbsp;
                    {propertyDetail?.propertyAmenities?.includes(
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
                    {propertyDetail?.propertyFeatures[0]?.area} SQFT
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
                    &nbsp; {propertyDetail?.propertyFeatures[0]?.kitchen}
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid container px={3} mt={3} className="propSale" py={2}>
              {propertyDetail?.listing === "rent" ? (
                <Grid container justifyContent="space-between">
                  <Grid>Pay &amp; Pack-In Offer </Grid>
                  <Grid>
                    <span className="propertyListing">
                      For {propertyDetail?.listing}
                    </span>
                  </Grid>
                </Grid>
              ) : (
                <Grid container justifyContent="space-between">
                  <Grid>Sales Ends On </Grid>
                  <Grid>
                    <span className="propertyListing">
                      For {propertyDetail?.listing}
                    </span>
                  </Grid>
                </Grid>
              )}
              <hr style={{ width: "100%" }} />

              <Grid style={{ width: "100%" }}>
                <Grid className="propHero">
                  {propertyDetail?.listing === "rent"
                    ? "Rent Per Annum (Avg.)"
                    : "Price"}
                </Grid>
                <Grid
                  className="propPrice"
                  mt={1}
                  container
                  alignItems="baseline"
                >
                  <h1>{propertyDetail?.price && (format(propertyDetail?.price))}</h1>
                  <span className="propHero">{propertyDetail?.currency[0]}</span>
                </Grid>
                <Grid>
                  {propertyDetail?.listing === "auction" ? (
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
                          {propertyDetail?.inviteOffers && (
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
                      <p>{propertyDetail?.description}.</p>
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
                          {propertyDetail?.propertyAmenities.length > 0 ?
                            <>{propertyDetail?.propertyAmenities.map(
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
                            )} </> :  <>No Amenities</>}
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
                    <InspectionDate booking={booking} setBooking={setBooking} values={values} setValues={setValues}/>
                    </Grid>
                  </Grid>
                )}
              </Grid>

           
            </Grid>
          </Grid>
          <Grid item sm={4}>
            <Grid>
              <h2 className="propTitle">{propertyDetail?.title}</h2>
            </Grid>
            <Grid
              my={3}
              container
              alignItems="center"
              justifyContent="space-between"
              spacing={2}
            >
              <Grid item xs={2} lg={1} sm={2}>
                <a
                  target="_blank"
                  href={`/properties/${propertyDetail?.location}`}
                  className="propLocationIcon"
                >
                  <AlternateEmailIcon />
                </a>{" "}
              </Grid>
              <Grid item xs={10} lg={11} sm={10} className="propLocation">
                {propertyDetail?.address} {propertyDetail?.location}
              </Grid>
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
                  &nbsp; {propertyDetail?.propertyFeatures[0]?.room}{" "}
                  &nbsp;&nbsp;
                  {propertyDetail?.propertyFeatures[0]?.master && (
                    // <TooltipWrapper value="Master">
                    <Chip label="M" size="small" className="propSubIcon" />
                    // </TooltipWrapper>
                  )}
                  &nbsp;&nbsp;
                  {propertyDetail?.propertyFeatures?.ensuite && (
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
                  <ShowerIcon className="propFeatureIcon" /> &nbsp;&nbsp; &nbsp;{" "}
                  {propertyDetail?.propertyFeatures[0]?.bathroom} &nbsp;&nbsp;
                  {propertyDetail?.propertyAmenities?.includes(
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
                  {propertyDetail?.propertyFeatures[0]?.area} ACRE
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
                  &nbsp; {propertyDetail?.propertyFeatures[0]?.kitchen}
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid container px={3} mt={3} className="propSale" py={2}>
              {propertyDetail?.listing === "rent" ? (
                <Grid container justifyContent="space-between">
                  <Grid>Pay &amp; Pack-In Offer </Grid>
                  <Grid>
                    <span className="propertyListing">
                      For {propertyDetail?.listing}
                    </span>
                  </Grid>
                </Grid>
              ) : (
                <Grid container justifyContent="space-between">
                  <Grid>Sales Ends On </Grid>
                  <Grid>
                    <span className="propertyListing">
                      For {propertyDetail?.listing}
                    </span>
                  </Grid>
                </Grid>
              )}
              <hr style={{ width: "100%" }} />

              <Grid style={{ width: "100%" }}>
                <Grid className="propHero">
                  {propertyDetail?.listing === "rent"
                    ? "Rent Per Annum (Avg.)"
                    : "Price"}
                </Grid>
                <Grid
                  className="propPrice"
                  mt={1}
                  container
                  alignItems="baseline"
                >
                  <h1>{propertyDetail?.price && (format(propertyDetail?.price))}</h1>
                  <span className="propHero">{propertyDetail?.currency[0]}</span>
                </Grid>
                <Grid>
                  {propertyDetail?.listing === "auction" ? (
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
                          {propertyDetail?.inviteOffers && (
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
        </Grid>

        <Grid p={1} my={4}>
          <h4>Similar Properties You May Like</h4>

          <Grid className="propertyAlike" mt={2}>
            <Grid px={1} py={3} className="similarPropContainer">
              {similarProperty?.map((item) => (
                <Grid md={4} sm={6} xs={12} mr={2} className="similarPropItem">
                  {/* <Property item={item}></Property> */}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default PropertyDetails;
