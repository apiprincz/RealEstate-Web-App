import React, { useContext } from "react";
import { Button, Grid } from "@mui/material";
import "./styles.css";
import HeaderMenu from "./HeaderMenu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useEffect } from "react";
import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UndoIcon from "@mui/icons-material/Undo";
// import { LOG_OUT } from "../../constants/actionTypes";

import { ThemeContext } from "../../Contexts/ThemeContext";
import { light, dark } from "../Styles/Theme.styled";

import { useMenuContext, showMenu, hideMenu } from "../../Contexts/MenuContext";
import { useNavigate } from "react-router-dom";
import ToggleList from "./ToggleList";
import { HeaderMenuContainer } from "../Styles/PageContainers.styled copy";

const Header = () => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const [respScreen, setRespScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("profile"));
  const [show, setShow] = useState(false);
  const { items, dispatch } = useMenuContext();
  const navigate = useNavigate();

  const handleShowProfileMenu = () => {
    setShow(true);
  };
  const handleHideProfileMenu = () => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  useEffect(() => {
    if (screenSize.dynamicWidth < 600) {
      setRespScreen(true);
    } else {
      return;
    }
  }, [screenSize]);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
  
  };
  console.log("set", items);
  return (
    <Grid className="headerContainer">
      {/* {darkMode === light ? "light" : "dark"} */}

      <Grid container justifyContent="space-between" p={2} alignItems="center">
        <Grid sm={3} xs={3}>
          <a href="/" className="LogoText" style={{ color: "gray" }}>
            <span style={{ color: "white" }}>
              Most
              <span style={{ color: "hsl(169, 82%, 60%)" }}>Habitable</span>
            </span>
            .com
          </a>
        </Grid>
        <Grid
          md={6}
          sm={6}
          xs={9}
          container
          alignItems="center"
          justifyContent="flex-end"
        >
          <>
            {respScreen ? (
              <>
                {user ? (
                  <>
                    <Grid
                      container
                      xs={4}
                      justifyContent="center"
                      alignItems="center"
                      className="profileIcon"
                      style={{ position: "relative" }}
                      onMouseLeave={handleHideProfileMenu}
                      onMouseEnter={handleShowProfileMenu}
                    >
                      <a
                        className={`profileSvg ${
                          show ? "profileSvgBorder" : ""
                        }`}
                        href="#"
                      >
                        <AccountCircleIcon />
                      </a>
                      {show && (
                        <>
                          {items.settingsMenu ? (
                            <Grid
                              className="profileMenu"
                              // onMouseLeave={handleHideProfileMenu}
                              onMouseEnter={handleShowProfileMenu}
                            >
                   <ToggleList/>
                           
                            </Grid>
                          ) : (
                            <Grid
                              className="profileMenu"
                              onMouseEnter={handleShowProfileMenu}
                            >
                   <ToggleList/>
                           
                            </Grid>
                          )}
                        </>
                      )}
                      &nbsp;&nbsp;
                      <a
                        href="#"
                        className="respLogout"
                        style={{ color: "#f7996ce3" }}
                        onClick={handleLogout}
                      >
                        Logout <LoginIcon style={{ verticalAlign: "middle" }} />
                      </a>
                    </Grid>
                  </>
                ) : (
                  <>
                    <a href="/login" className="headerLink" style={{display:'flex', alignItems:'center'}}>
                      Log In{" "}
                      <LoginIcon
                        style={{ verticalAlign: "baseline", fontSize: "1rem" }}
                      />
                    </a>
                  </>
                )}{" "}
                &nbsp;&nbsp;
                {!isOpen ? (
                  <MenuIcon className="headerIcon" onClick={handleOpen} />
                
                ) : (
                  <CloseIcon className="headerIcon" onClick={handleClose} />
                )}
              </>
            ) : (
              <HeaderMenu />
            )}
          </>
        </Grid>
      </Grid>
      {isOpen && (
        <Grid className="headerRespMenuContainer">
                <HeaderMenuContainer>

          <HeaderMenu respScreen={respScreen} />
          </HeaderMenuContainer>

        </Grid>
      )}
    </Grid>
  );
};

export default Header;
