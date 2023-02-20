import { useRef } from "react";
import { neighborhoodData } from "../../../../constants/data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";
import "swiper/css/grid";

// Import Swiper styles
import "swiper/css";

import NeighborhoodCard from "../../../NeighborhoodCard";

const SwiperGrid = () => {
  const swiperRef = useRef();
  return (
    <div style={{ height: '20rem', width:'100%' }}>
    <Swiper
      modules={[Grid, Navigation]}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      grid={{
        rows: 2,
        fill: "row",
      }}
    
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
      {neighborhoodData.map((neighborhood, index) => (
        <SwiperSlide  style={{ width: "100%" }} >
          <NeighborhoodCard neighborhood={neighborhood} index={index}  />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default SwiperGrid;
