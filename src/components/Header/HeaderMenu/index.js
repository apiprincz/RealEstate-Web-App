import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import { Button, Grid } from "@mui/material";
import { useRef } from "react";
// import { LOG_OUT } from "../../../constants/actionTypes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SiteBtn } from "../../Styles/PageContent.styled";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {  showMenu, useMenuContext  } from "../../../Contexts/MenuContext";
import ToggleList from "../ToggleList";



const HeaderMenu = ({ respScreen }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [show, setShow] = useState(false);
  const menuRef = useRef();
  const { items, dispatch } = useMenuContext();

  const navigate = useNavigate();
  const dispatchRedux = useDispatch();

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
    <ul className={respScreen ? "headerRespMenu" : "headerMenu"}>
      <li>
        <a href="/properties"> Properties</a>
      </li>
      <li>
        <a href="/agents"> Agents</a>
      </li>

      {respScreen ? (
        <>
          {user ? (
            <>
              <li>
                <a href="/account">Profile</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/login">
                  Log In{" "}
                  <LoginIcon
                    style={{ verticalAlign: "middle", fontSize: "1rem" }}
                  />
                </a>
              </li>
            </>
          )}
        </>
      ) : (
        <>
          {user ? (
            <>
              &nbsp;
              <li className="profileIcon" style={{ position: "relative" }}>
                <a
                  className={`profileSvg ${show ? "profileSvgBorder" : ""}`}
                  onMouseLeave={handleHideProfileMenu}
                  onMouseEnter={handleShowProfileMenu}
                  href="#"
                >
                  <AccountCircleIcon />
                </a>
                &nbsp;
                {show && (
                  <Grid
                    className="profileMenu"
                    onMouseEnter={handleShowProfileMenu}
                    onMouseLeave={handleHideProfileMenu}
                  >

                   <ToggleList/>
                  </Grid>
                )}
                <a
                  href="#"
                  className="logout"
                  style={{ color: "#f7996ce3" }}
                  onClick={handleLogout}
                >
                  Logout <LoginIcon style={{ verticalAlign: "middle" }} />
                </a>
              </li>
            </>
          ) : (
            <li>
              <a href="/login">
                <Grid
                  pb={1}
                  container
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <span>Log In</span>{" "}
                  <LoginIcon
                    style={{ verticalAlign: "middle", fontSize: "1rem" }}
                  />
                </Grid>
              </a>
              <SiteBtn>Submit Listing</SiteBtn>
            </li>
          )}
        </>
      )}
    </ul>
  );
};

export default HeaderMenu;
