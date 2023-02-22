import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import {
  useMenuContext,
  showMenu,
  hideMenu,
} from "../../../Contexts/MenuContext";
import { SiteIcon, SiteText } from "../../Styles/PageContent.styled";
import { HeaderMenuContainer } from "../../Styles/PageContainers.styled copy";

const ToggleList = () => {
  const { items, dispatch } = useMenuContext();
  const [show, setShow] = useState(false);

  const handleShowProfileMenu = () => {
    setTimeout(() => {
      setShow(true);
    }, 200);
  };
  const handleHideProfileMenu = () => {
    setTimeout(() => {
      setShow(false);
    }, 200);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    // dispatch({ type: LOG_OUT });
    // navigate(-1);
  };

  return (
    <>
      {items.settingsMenu ? (
        <Grid
          className="profileMenu"
          // onMouseLeave={handleHideProfileMenu}
          onMouseEnter={handleShowProfileMenu}
        >
            <HeaderMenuContainer>
            <ul className="profileList">
            {" "}
            <li>
              <br />

              <Grid
                style={{ cursor: "pointer" }}
                //  onClick={handleMainMenu}
                onClick={() => dispatch(hideMenu())}
                container
              >
              <SiteIcon> <ArrowBackIcon /></SiteIcon>  <SiteText>Back To Profile Menu</SiteText> 
              </Grid>
              <br />
           
            </li>
            <li>
              <a
                href="/settings?tab=profile"
                style={{ borderTop: "1px solid gray" }}
              >
                <Grid container alignItems="center">

                <PersonIcon /> Profile
                </Grid>
              </a>
            </li>
            <li>
              <a href="/settings?tab=notifications">
              <Grid container alignItems="center">

                <NotificationsActiveIcon /> Notifications
    </Grid>
              </a>
            </li>
          
            <li>
              <a href="settings?tab=verifications">
              <Grid container alignItems="center">

                <WorkspacePremiumIcon />
                Verifications
                </Grid>
              </a>
            </li>
            <li>
              <a href="settings?tab=account-support">
              <Grid container alignItems="center">

                <SupportAgentIcon />
                Account Support
                </Grid>
              </a>
            </li>
          
          </ul>
            </HeaderMenuContainer>
     
        </Grid>
      ) : (
        <Grid className="profileMenu" onMouseEnter={handleShowProfileMenu}>
               <HeaderMenuContainer>
               <ul className="profileList">
            {" "}
            <li>
              <a href="/account">
                <Grid container alignItems="center">
                  <PersonIcon /> <span>Profile</span>
                </Grid>
              </a>
            </li>
            <li>
              <a href="/favourites">
                <Grid container alignItems="center">
                  <FavoriteIcon /> <span>Favourites</span>
                </Grid>
              </a>
            </li>
            <li>
              <a href="/properties">
                <Grid container alignItems="center">
                  <HomeIcon /> <span> My Properties</span>
                </Grid>
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => dispatch(showMenu(e))}>
                <Grid container alignItems="center">
                  <SettingsIcon /> <span> Settings</span> <NavigateNextIcon />
                </Grid>
              </a>
            </li>
            <li className="logoutRow">
              <Button className="logout" onClick={handleLogout}>
                Logout <LoginIcon />
              </Button>
            </li>
          </ul>
                </HeaderMenuContainer>
       
        </Grid>
      )}
    </>
  );
};

export default ToggleList;
