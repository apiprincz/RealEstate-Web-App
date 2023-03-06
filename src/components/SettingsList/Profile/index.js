import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InfoIcon from "@mui/icons-material/Info";
import Input from "../../CustomInput";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FileUpload from "../../FileUpload";
import Overlay from "../../Overlay";
import { Dropzone, FileItem } from "@dropzone-ui/react";

import "./styles.css";
import TooltipWrapper from "../../Tooltip";
import { SiteText } from "../../Styles/PageContent.styled";
import { agent, city } from "../../../constants/data";
const initialState = {
  name: "",
  id: "",
  email: "",
  password: "",
  username: "",
  location: "",
  area: "",
  role: "",
  company: "",
  bio: "",
  phone: "",
  socialHandle: {
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    website: "",
  },

  address: "",
  profilePhoto: [],
  profileBanner: [],
};

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [files, setFiles] = useState([]);
  const [bannerFiles, setBannerFiles] = useState([]);
  const [show, setShow] = useState(false);
  const [altShow, setAltShow] = useState();
  const [toggleShow, setToggleShow] = useState(false);
  const [profileData, setProfileData] = useState(initialState);
  const [selectedCity, setSelectedCity] = useState("");
  const user = agent;

  const handleSubmit = () => {};

  const handleChange = (e) => {
    switch (e.target.name) {
      case "twitter":
        setProfileData({
          ...profileData,
          socialHandle: {
            ...profileData.socialHandle,
            [e.target.name]: e.target.value,
          },
        });

        break;
      case "instagram":
        setProfileData({
          ...profileData,
          socialHandle: {
            ...profileData.socialHandle,
            [e.target.name]: e.target.value,
          },
        });

        break;
      case "website":
        setProfileData({
          ...profileData,
          socialHandle: {
            ...profileData.socialHandle,
            [e.target.name]: e.target.value,
          },
        });

        break;

      default:
        setProfileData({ ...profileData, [e.target.name]: e.target.value });

        break;
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
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

  const handleLocationChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };
  const handleAreaChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (profileData) {
      const selectedCity = city.filter(
        (city) => city.city === profileData.location
      );
      console.log("city", selectedCity[0]);

      setSelectedCity(selectedCity[0]);
    }
  }, [profileData]);

  const onDelete = (id) => {
    setFiles(files?.filter((x) => x.id !== id));
  };

  const updateBannerFiles = (event) => {
    console.log("incomming files", event);

    if (event.length >= 1) {
      setBannerFiles([event[event?.length - 1]]);
    } else {
      setBannerFiles([event[event?.length - 1]]);
    }
  };

  const updateFiles = (event) => {
    console.log("incomming files", event);

    if (event.length >= 1) {
      setFiles([event[event?.length - 1]]);
    } else {
      setFiles([event[event?.length - 1]]);
    }
  };
  useEffect(() => {
    if (files) {
      setProfileData({ ...profileData, profilePhoto: files });
    }
  }, [files]);
  useEffect(() => {
    if (bannerFiles) {
      setProfileData({ ...profileData, profileBanner: bannerFiles });
    }
  }, [bannerFiles]);

  useEffect(() => {
    if (user) {
      setProfileData({ ...user, profilePhoto: [], profileBanner: [] });
    }
  }, [user]);
  console.log("files", files);

  return (
    <Grid>
      <h1>Profile</h1>

      <form onSubmit={handleSubmit}>
        <Grid
          pt={5}
          container
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Grid sm={6}>
            <Grid spacing={2}>
              <Input
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
                value={profileData.email}
              />
              <br />
              <Input
                name="Full Name"
                label="Enter Full Name"
                handleChange={handleChange}
                value={profileData.name}
              />
              <br />

              <Input
                name="username"
                label="Enter Username"
                handleChange={handleChange}
                value={profileData.username}
              />
              <br />

              <>
                {" "}
                <Input
                  name="phone"
                  label="Mobile Phone"
                  onChange={handleChange}
                  type="tel"
                  value={profileData.phone}
                />
                <br />
              </>
              <Input
                name="Bio"
                label="Enter Bio"
                rows={4}
                handleChange={handleChange}
                multiline
                value={profileData.bio}
              />
              <br />

              <Input
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
                value={profileData.password}
              />
              <br />

              <Input
                name="company"
                label="Enter real Estate Company (if any)"
                handleChange={handleChange}
                value={profileData.company}
              />
              <br />

              <Input
                name="address"
                label="Full Company/Home Address"
                handleChange={handleChange}
                value={profileData.address}
              />
            </Grid>

            <Grid container spacing={2} py={2}>
              <Grid item md={6} sm={6} xs={6}>
                <FormControl fullWidth>
                  <InputLabel
                    id="demo-simple-select-label"
                    className="inputLabel"
                    style={{ color: "wheat" }}
                  >
                    Choose primary city
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    className="sortInput"
                    value={profileData.location}
                    label="Choose primary city "
                    name="location"
                    style={{ borderColor: "gray !important" }}
                    onChange={handleLocationChange}
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
                  disabled={profileData.location ? false : true}
                  fullWidth
                >
                  <InputLabel className="inputLabel" style={{ color: "wheat" }}>
                    {" "}
                    Primary Area of interest
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    className="sortInput"
                    value={profileData.area}
                    label="Primary Area of interest"
                    name="area"
                    style={{ borderColor: "gray !important" }}
                    onChange={handleAreaChange}
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

            <Grid py={2}>
              <Grid className="bold">Social Media Connections</Grid>

              {/* <Grid container justifyContent="space-between">
                <Grid xs={6} container alignItems="center">
                  <TwitterIcon /> &nbsp; twitter
                </Grid>
                <Grid xs={6}>
                  <Button type="submit" variant="contained" color="primary">
                    Connect
                  </Button>
                </Grid>
              </Grid> */}
            </Grid>
            <Grid py={1}>
              {/* <span style={{display:'block'}}> Help buyers verify your account by connecting Twitter</span> */}

              <Grid container alignItems="center">
                <Input
                  name="twitter"
                  label="Twitter Handle"
                  handleChange={handleChange}
                  value={profileData.socialHandle.twitter}
                />
              </Grid>
              <Grid py={1} container alignItems="center">
                <Input
                  name="instagram"
                  label="Instagram Handle"
                  handleChange={handleChange}
                  value={profileData.socialHandle.instagram}
                />
              </Grid>
              <Grid py={1} container alignItems="center">
                <Input
                  name="facebook"
                  label="Facebook Handle"
                  handleChange={handleChange}
                  value={profileData.socialHandle.facebook}
                />
              </Grid>
              <Grid py={1}>
                <Input
                  name="website"
                  label="Your Website (if any)"
                  handleChange={handleChange}
                  value={profileData.socialHandle.website}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid sm={4}>
            <Grid className="bold" pt={4} pb={1}>
              Profile Banner{" "}
              <TooltipWrapper
                value={`Recommended 1400px by 350px` + " " + "MaxSize:10MB"}
              >
                <InfoIcon />
              </TooltipWrapper>
            </Grid>

            <Grid
              className="profile"
              onMouseEnter={handleShowOverlay}
              onMouseLeave={handleHideOverlay}
            >
              {/* <FileUpload /> */}

              <Dropzone
                maxFileSize={1024000}
                maxFiles={2}
                // maxFiles={
                //   product ? 5 - Number(product?.campaignFiles?.length) : 5
                // }
                onChange={updateBannerFiles}
                value={profileData.profileBanner}
                onClean
                accept={"image/jpeg,.ts, video/*"}
                className="profileBanner"
                disableScroll
              >
                {user?.profileBanner && bannerFiles?.length === 0 ? (
                  <img
                    style={{ width: "100%", padding:'8px', height:'100%',borderRadius:'15px', pointerEvents: "none" }}
                    src={user?.profileBanner.secure_url}
                  />
                ) : (
                  <>
                    {" "}
                    {bannerFiles?.length > 0 &&
                      profileData?.profileBanner?.map((file) => (
                        <Grid>
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
                  </>
                )}
              </Dropzone>

              {show && <Overlay />}
            </Grid>
            <Grid>
              <Grid className="bold" pt={4} pb={1}>
                Profile Photo{" "}
                <TooltipWrapper
                  value={`Recommended 1400px by 350px` + " " + "MaxSize:10MB"}
                >
                  <InfoIcon />
                </TooltipWrapper>
              </Grid>

              <Grid
                className="photo"
                onMouseEnter={handlePhotoShowOverlay}
                onMouseLeave={handlePhotoHideOverlay}
              >
                <Dropzone
                  maxFileSize={1024000}
                  maxFiles={2}
                  // maxFiles={
                  //   product ? 5 - Number(product?.campaignFiles?.length) : 5
                  // }
                  onChange={updateFiles}
                  value={profileData.profilePhoto}
                  onClean
                  accept={"image/jpeg,.ts, video/*"}
                  className="profilePhoto"
                  disableScroll
                >
                        {user?.profilePhoto && files?.length === 0 ? (
                  <img
                    style={{ width: "100%",height:'100%', padding:'5px', pointerEvents: "none", borderRadius:'50%'}}
                    src={user?.profilePhoto.secure_url}
                  />
                ) : (
                  <>
                  {files?.length > 0 &&
                    profileData?.profilePhoto?.map((file) => (
                      <Grid>
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
                    ))}</>)}
                </Dropzone>
                {altShow && <Overlay />}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Button variant="contained">Submit</Button>
        </Grid>

        <Grid
          container
          justifyContent="space-between"
          className="loginControl"
        ></Grid>
      </form>
    </Grid>
  );
};

export default Profile;
