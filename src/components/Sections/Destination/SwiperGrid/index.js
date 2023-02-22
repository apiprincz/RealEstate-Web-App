import { useRef } from "react";
import { destinationData } from "../../../../constants/data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

import DestinationCard from "../../../DestinationCard";

const SwiperGrid = () => {
  const swiperRef = useRef();
  return (
   
    <Swiper
      modules={[Navigation]}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
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
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {destinationData.map((destination, index) => (
        <SwiperSlide  style={{ width: "100%" }} >
          <DestinationCard destination={destination} index={index}  />
        </SwiperSlide>
      ))}
    </Swiper>
    
  );
};

export default SwiperGrid;
