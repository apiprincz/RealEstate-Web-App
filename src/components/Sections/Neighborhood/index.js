import { Grid } from "@mui/material";
import { useRef } from "react";
import { propertiesData, propertyTypes } from "../../../constants/data";
import PropertyCard from "../../PropertyCard";
import {
  SectionHero,
  SiteIcon,
  SiteTextColored,
  SwiperBtn,
} from "../../Styles/PageContent.styled";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";

import "./styles.css";
import PropertyType from "../../PropertyType";
import SwiperGrid from "./SwiperGrid";

const Neighborhood = () => {
  const swiperRef = useRef();
  return (
    <Grid xs={12} py={5} px={2}>
      <Grid container pb={5} alignItems="center" justifyContent="space-between">
        <Grid
          sm={8}
        
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <SectionHero>Discover The Neighborhoods</SectionHero>
        </Grid>
     

        <Grid sm={4} xs={12} pt={2} container alignItems="flex-end" justifyContent="flex-end">
          <SwiperBtn onClick={() => swiperRef.current?.slidePrev()}>
            <SiteIcon>
              <ArrowBackIosNewOutlinedIcon />
            </SiteIcon>
          </SwiperBtn>
          &nbsp;
          <SwiperBtn onClick={() => swiperRef.current?.slideNext()}>
            <SiteIcon>
              <ArrowForwardIosOutlinedIcon />
            </SiteIcon>
          </SwiperBtn>
        </Grid>
      </Grid>

      <Grid py={5} container spacing={2}>
      <SwiperGrid/>
      </Grid>
    </Grid>
  );
};

export default Neighborhood;
