import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";


import {

  Grid,
  InputLabel,
  MenuItem,
  Select,

} from "@mui/material";
import { SiteText } from "../Styles/PageContent.styled";
import { Dropzone, FileItem } from "@dropzone-ui/react";
import { useParams } from "react-router-dom";
import { city, propertiesData } from "../../constants/data";

const PropertyImageForm = ({ propertyData, setPropertyData }) => {
  const [files, setFiles] = useState([]);
  const [locationValue, setLocationValue] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // const { filterItems, dispatch } = useFilterContext();
  const [cityAreaValue, setCityAreaValue] = useState("");

  // const { products } = useSelector((state) => state.stores.products);

  const { id } = useParams();

  // const property = id ? properties?.find((p) => p._id === id) : null;



  const onDelete = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };

  const updateFiles = (event) => {
    console.log("incomming files", event);
    if (files.length >= 5) {
      return;
    } else {
      setFiles(event);
    }
  };
  useEffect(() => {
    if (files) {
      setPropertyData({ ...propertyData, files: files.slice(0, 5) });
    }
  }, [files]);

  console.log("files", files?.slice(0, 5));

  console.log("propertyData", propertyData);

  const handleLocationChange = (e) => {
    setLocationValue(e.target.value);
    console.log("setLocation", locationValue);

    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
  };
  const handleAreaChange = (e) => {
    setCityAreaValue(e.target.value);
    console.log("setPropertyType", cityAreaValue, e.target.value);

    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (propertyData) {
      const selectedCity = city.filter(
        (city) => city.city === propertyData.location
      );
      console.log("city", selectedCity[0]);

      setSelectedCity(selectedCity[0]);
    }
  }, [propertyData]);

 

  useEffect(() => {
    if(id){

      const property = propertiesData.filter(property => property.id === id)
      console.log('filterproperty', property)
      setPropertyData({
        ...property[0]
      });
    }
  
    
  }, [id])

  console.log("ieitiitr",propertyData);
  return (
    <FormControl fullWidth>
      <Dropzone
        maxFileSize={1024000}
        maxFiles={5}
        // maxFiles={
        //   product ? 5 - Number(product?.campaignFiles?.length) : 5
        // }
        onChange={updateFiles}
        value={propertyData.files}
        onClean
        accept={"image/jpeg,.ts, video/*"}
        label={"Drop Files here or click to browse"}
        minHeight={"100px"}
        maxHeight={"500px"}
        disableScroll
      >
        <Grid container style={{ flexWrap: "nowrap", overflow: "auto" }}>
          {files.length > 0 &&
            propertyData?.files?.map((file) => (
              <Grid sm={3} xs={12}>
                <FileItem
                  {...file}
                  key={file.id}
                  onDelete={onDelete}
                  alwaysActive
                  preview
                  info
                  resultOnTooltip
                />
              </Grid>
            ))}
          {files.length <= 0 && (
            <Grid xs={12} style={{ display: "flex", justifyContent: "center" }}>
              {id ? <>Add More Files *</> : <>Add Files *</>}
            </Grid>
          )}
        </Grid>
      </Dropzone>
      {/* <Places/> */}
      <Grid container spacing={2} py={2}>
        <Grid item md={6} sm={6} xs={6}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              className="inputLabel"
              style={{ color: "wheat" }}
            >
              Location *
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="sortInput"
              value={propertyData.location}
              label="Location"
              name="location"
              style={{ borderColor: "gray !important" }}
              onChange={handleLocationChange}
              required={true}

            >
              <MenuItem value="abuja">
                <SiteText>Abuja</SiteText>
              </MenuItem>
              <MenuItem value="lagos">
                <SiteText>Lagos</SiteText>
              </MenuItem>
              <MenuItem value="ibadan">
                {" "}
                <SiteText>Ibadan</SiteText>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} sm={6} xs={6}>
          <FormControl
            disabled={propertyData.location ? false : true}
            fullWidth
          >
            <InputLabel className="inputLabel" style={{ color: "wheat" }}>
              {" "}
              Area *
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              className="sortInput"
              value={propertyData.cityArea}
              label="Area"
              name="cityArea"
              style={{ borderColor: "gray !important" }}
              onChange={handleAreaChange}
              required={true}
            >
              {selectedCity?.areas?.map((city, index) => (
                <MenuItem value={city.area}>
                  <SiteText>{city.label}</SiteText>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
     

     
    </FormControl>
  );
};

export default PropertyImageForm;
