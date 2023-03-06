import React, { useRef } from "react";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
import Input from "../CustomInput";

const Places = () => {
  const inputRef = useRef();

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      console.log("udsidjjsd", place.adr_address.split(","));
      // window.alert("udsidjjsd",place.formatted_address, place, place.geometry.location.lat());
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());
    }
  };

  console.log("places", process.env.REACT_APP_GOOGLE_API_KEY)

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      libraries={["places"]}
    >
      <StandaloneSearchBox
        onLoad={(ref) => (inputRef.current = ref)}
        onPlacesChanged={handlePlaceChanged}
      >
        <Input
          type="text"
          className="form-control"
          placeholder="Enter Location"
        />
      </StandaloneSearchBox>
     
    </LoadScript>
  );
};

export default Places;
