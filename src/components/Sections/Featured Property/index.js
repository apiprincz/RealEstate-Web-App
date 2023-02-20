import { Grid } from "@mui/material";
import { useRef } from "react";
import { propertyData } from "../../../constants/data";
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
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

import "./styles.css";

const FeaturedProperty = () => {
  const swiperRef = useRef();
  return (
    <Grid xs={12} p={5}>
      <Grid container pb={5} alignItems="center" justifyContent="space-between">
        <Grid
          sm={8}
        
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <SectionHero>Featured Properties</SectionHero>
        </Grid>
        <Grid
          sm={4}
          xs={6}
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <SiteTextColored><a href="/properties">See All {propertyData.length} Listings <CallMadeOutlinedIcon/></a></SiteTextColored>
        </Grid>

        <Grid sm={12} xs={6} pt={2} container alignItems="flex-end" justifyContent="flex-end">
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
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {propertyData.map((property, index) => (
            <SwiperSlide style={{ width: "100%" }}>
              <PropertyCard
                property={property}
                index={index}
                section="feature"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
};

export default FeaturedProperty;
