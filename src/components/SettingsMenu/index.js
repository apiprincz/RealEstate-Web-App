import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import "./styles.css";
import { Grid, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SecurityIcon from "@mui/icons-material/Security";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LockIcon from "@mui/icons-material/Lock";
import HomeIcon from "@mui/icons-material/Home";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Profile from "../SettingsList/Profile";
import Notifications from "../SettingsList/Notifications";
import Offers from "../SettingsList/Offers";
import Verifications from "../SettingsList/Verification";
import Supports from "../SettingsList/Support";
import Earnings from "../SettingsList/Earnings";
import CustomizedBreadcrumbs from "../BreadCrumb";
import { SectionHero, SiteIcon, SiteText } from "../Styles/PageContent.styled";
import BreadCrumbs from "../BreadCrumbs";
import AddNewProperty from "../SettingsList/AddNewProperty";
import PropertyTable from "../PropertyTable";
import Favorites from "../SettingsList/Favourites";
import ChangePassword from "../SettingsList/ChangePassword";
import getWindowDimensions from "../../Hooks/screen";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const SettingsMenu = () => {
  const [value, setValue] = useState(1);
  const [path, setPath] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const { width } = getWindowDimensions();

  const query = useQuery();
  const getTab = query.get("tab");
  const [tab, setTab] = useState(getTab);

  useEffect(() => {
    setTab(getTab);
  }, [getTab]);
  useEffect(() => {
    if (tab) {
      return;
    } else {
      setTab("profile");
    }

    // navigate("/profile?tab=profile")
    // window.location.href("/profile?tab=profile")
    // window.location.reload()
  }, []);

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Grid>{children}</Grid>
          </Box>
        )}
      </div>
    );
  }

  function LinkTab(props) {
    return (
      <Tab
        component="a"
        className="settingsMenuTitle"
        onClick={(event) => {
          handleNavigation(event);
        }}
        {...props}
      />
    );
  }
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const handleNavigation = (event) => {
    event.preventDefault();

    console.log("tab", event.target.pathname.split("account")[1]);
    console.log("tab2", event.target.pathname);
    setPath(event.target.pathname.split("/"));
  };

  console.log("tabpath", path);

  useEffect(() => {
    console.log("tabpath", path);
    console.log(path);
    if (path) {
      navigate(`/account?${path[path?.length - 1]}`);
    }
  }, [path]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (tab) {
      switch (tab) {
        case "add-new-property":
          setValue(1);
          break;
        case "profile":
          setValue(2);
          break;
        case "my-properties":
          setValue(3);
          break;
        case "notifications":
          setValue(4);
          break;

        case "my-favorites":
          setValue(5);
          break;
        case "change-password":
          setValue(6);
          break;
        case "verifications":
          setValue(7);
          break;
        case "account-support":
          setValue(8);
          break;

        case "log-out":
          setValue(9);
          break;

        default:
          break;
      }
    }
  }, []);

  console.log("tab", tab);
  return (
    <>
      <Grid
        style={{
          position: "sticky",
          top: "68px",
          zIndex: "100",
          background: "hsl(0deg 0% 25%)",
        }}
        
      >
        <Grid pt={2} px={2}>
          {/* style={{ position: "sticky", top: "100px" }} */}
          {/* <SectionHero>Profile</SectionHero> */}
          <SectionHero>
            {tab?.split("-")[0]} {tab?.split("-")[1]} {tab?.split("-")[2]}{" "}
          </SectionHero>
        </Grid>
        <Grid pt={2} pb={4} px={2}>
          {/* style={{ position: "sticky", top: "190px" }} */}
          {/* <BreadCrumbs></BreadCrumbs> */}
          <CustomizedBreadcrumbs
            tab={tab}
            path={path}
            setPath={setPath}
            value={value}
            setValue={setValue}
            style={{ position: "sticky", top: "190px" }}
          />
        </Grid>
        <Grid style={{
         
          background: "hsl(0deg 0% 25%)",
        }}>
        {width < 900 && (
              <Grid className="settingsMobile"  style={{
         
                background: "hsl(0deg 0% 25%)",
              }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  aria-label="nav tabs example"
                  className="settingsMenuTabContainer"
                  style={{
         
                    background: "hsl(0deg 0% 25%)",
                  }}
                >
                  <LinkTab
                    label="SETTINGS"
                    disabled
                    style={{ fontWeight: "bold", color: "white" }}
                    {...a11yProps(0)}
                  >
                    <SiteText>SETTINGS</SiteText>
                  </LinkTab>

                  <LinkTab
                    icon={
                      <SiteIcon style={{ display: "inline-block" }}>
                        <AddCircleOutlineIcon
                          style={{ verticalAlign: "sub" }}
                        />
                      </SiteIcon>
                    }
                    iconPosition="start"
                    label="Add New"
                    href="tab=add-new-property"
                    {...a11yProps(1)}
                  ></LinkTab>
                  <LinkTab
                    icon={
                      <SiteIcon style={{ display: "inline-block" }}>
                        <AccountCircleIcon style={{ verticalAlign: "sub" }} />
                      </SiteIcon>
                    }
                    iconPosition="start"
                    label="Profile"
                    href="tab=profile"
                    {...a11yProps(2)}
                  ></LinkTab>
                  <LinkTab
                    icon={
                      <SiteIcon style={{ display: "inline-block" }}>
                        <HomeIcon style={{ verticalAlign: "sub" }} />
                      </SiteIcon>
                    }
                    iconPosition="start"
                    label="My Properties"
                    href="tab=my-properties"
                    {...a11yProps(3)}
                  ></LinkTab>
                  <LinkTab
                    icon={
                      <SiteIcon style={{ display: "inline-block" }}>
                        <NotificationsActiveIcon
                          style={{ verticalAlign: "sub" }}
                        />
                      </SiteIcon>
                    }
                    iconPosition="start"
                    label="Notifications"
                    href="tab=notifications"
                    {...a11yProps(4)}
                  ></LinkTab>
                  <LinkTab
                    icon={
                      <SiteIcon style={{ display: "inline-block" }}>
                        <FavoriteBorderIcon style={{ verticalAlign: "sub" }} />
                      </SiteIcon>
                    }
                    iconPosition="start"
                    label="My Favorites"
                    href="tab=my-favorites"
                    {...a11yProps(5)}
                  ></LinkTab>
                  <LinkTab
                    icon={
                      <SiteIcon style={{ display: "inline-block" }}>
                        <LockIcon style={{ verticalAlign: "sub" }} />
                      </SiteIcon>
                    }
                    iconPosition="start"
                    label="Change Password"
                    href="tab=change-password"
                    {...a11yProps(6)}
                  ></LinkTab>
                  <LinkTab
                    icon={
                      <SiteIcon style={{ display: "inline-block" }}>
                        <CreditCardIcon style={{ verticalAlign: "sub" }} />
                      </SiteIcon>
                    }
                    iconPosition="start"
                    label="Verifications"
                    href="tab=verifications"
                    {...a11yProps(7)}
                  />
                  <LinkTab
                    icon={
                      <SiteIcon style={{ display: "inline-block" }}>
                        <SecurityIcon style={{ verticalAlign: "sub" }} />
                      </SiteIcon>
                    }
                    iconPosition="start"
                    label="Account Support"
                    href="tab=account-support"
                    {...a11yProps(8)}
                  />

                  <LinkTab
                    icon={
                      <SiteIcon style={{ display: "inline-block" }}>
                        <PowerSettingsNewIcon
                          style={{ verticalAlign: "sub" }}
                        />
                      </SiteIcon>
                    }
                    iconPosition="start"
                    label="Log Out"
                    href="tab=log-out"
                    {...a11yProps(9)}
                  ></LinkTab>

                  {/* <LinkTab
       icon={
         <NotificationsActiveIcon style={{ verticalAlign: "sub" }} />
       }
       iconPosition="start"
       label="Notifications"
       href="tab=notifications"
       {...a11yProps(3)}
     />
     <LinkTab
       icon={<LocalOfferIcon style={{ verticalAlign: "sub" }} />}
       iconPosition="start"
       label="Offers"
       href="tab=offers"
       {...a11yProps(4)}
     />
     <LinkTab
       icon={<CreditCardIcon style={{ verticalAlign: "sub" }} />}
       iconPosition="start"
       label="Verifications"
       href="tab=verifications"
       {...a11yProps(5)}
     />
     <LinkTab
       icon={<SecurityIcon style={{ verticalAlign: "sub" }} />}
       iconPosition="start"
       label="Account Support"
       href="tab=account-support"
       {...a11yProps(6)}
     />
     <LinkTab
       icon={<AttachMoneyIcon style={{ verticalAlign: "sub" }} />}
       iconPosition="start"
       label="Earnings"
       href="tab=earnings"
       {...a11yProps(7)}
     /> */}
                </Tabs>
              </Grid>
            )}
        </Grid>
      </Grid>

      <Grid container  >
        <Grid
          container
          className="settingsMenu"
          sx={{ display: "flex" }}
          sm={12}
        >
          <Grid
            className="settingsMenuContainer"
            container
            xs={12}
            sm={12}
            md={2}
          >
            {width > 900 && (
              <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
                variant="scrollable"
                aria-label="nav tabs example"
                className="settingsMenuTabContainer"
              >
                <LinkTab
                  label="SETTINGS"
                  disabled
                  style={{ fontWeight: "bold", color: "white" }}
                  {...a11yProps(0)}
                >
                  <SiteText>SETTINGS</SiteText>
                </LinkTab>

                <LinkTab
                  icon={
                    <SiteIcon style={{ display: "inline-block" }}>
                      <AddCircleOutlineIcon style={{ verticalAlign: "sub" }} />
                    </SiteIcon>
                  }
                  iconPosition="start"
                  label="Add New"
                  href="tab=add-new-property"
                  {...a11yProps(1)}
                ></LinkTab>
                <LinkTab
                  icon={
                    <SiteIcon style={{ display: "inline-block" }}>
                      <AccountCircleIcon style={{ verticalAlign: "sub" }} />
                    </SiteIcon>
                  }
                  iconPosition="start"
                  label="Profile"
                  href="tab=profile"
                  {...a11yProps(2)}
                ></LinkTab>
                <LinkTab
                  icon={
                    <SiteIcon style={{ display: "inline-block" }}>
                      <HomeIcon style={{ verticalAlign: "sub" }} />
                    </SiteIcon>
                  }
                  iconPosition="start"
                  label="My Properties"
                  href="tab=my-properties"
                  {...a11yProps(3)}
                ></LinkTab>
                <LinkTab
                  icon={
                    <SiteIcon style={{ display: "inline-block" }}>
                      <NotificationsActiveIcon
                        style={{ verticalAlign: "sub" }}
                      />
                    </SiteIcon>
                  }
                  iconPosition="start"
                  label="Notifications"
                  href="tab=notifications"
                  {...a11yProps(4)}
                ></LinkTab>
                <LinkTab
                  icon={
                    <SiteIcon style={{ display: "inline-block" }}>
                      <FavoriteBorderIcon style={{ verticalAlign: "sub" }} />
                    </SiteIcon>
                  }
                  iconPosition="start"
                  label="My Favorites"
                  href="tab=my-favorites"
                  {...a11yProps(5)}
                ></LinkTab>
                <LinkTab
                  icon={
                    <SiteIcon style={{ display: "inline-block" }}>
                      <LockIcon style={{ verticalAlign: "sub" }} />
                    </SiteIcon>
                  }
                  iconPosition="start"
                  label="Change Password"
                  href="tab=change-password"
                  {...a11yProps(6)}
                ></LinkTab>
                <LinkTab
                  icon={
                    <SiteIcon style={{ display: "inline-block" }}>
                      <CreditCardIcon style={{ verticalAlign: "sub" }} />
                    </SiteIcon>
                  }
                  iconPosition="start"
                  label="Verifications"
                  href="tab=verifications"
                  {...a11yProps(7)}
                />
                <LinkTab
                  icon={
                    <SiteIcon style={{ display: "inline-block" }}>
                      <SecurityIcon style={{ verticalAlign: "sub" }} />
                    </SiteIcon>
                  }
                  iconPosition="start"
                  label="Account Support"
                  href="tab=account-support"
                  {...a11yProps(8)}
                />

                <LinkTab
                  icon={
                    <SiteIcon style={{ display: "inline-block" }}>
                      <PowerSettingsNewIcon style={{ verticalAlign: "sub" }} />
                    </SiteIcon>
                  }
                  iconPosition="start"
                  label="Log Out"
                  href="tab=log-out"
                  {...a11yProps(9)}
                ></LinkTab>

                {/* <LinkTab
                icon={
                  <NotificationsActiveIcon style={{ verticalAlign: "sub" }} />
                }
                iconPosition="start"
                label="Notifications"
                href="tab=notifications"
                {...a11yProps(3)}
              />
              <LinkTab
                icon={<LocalOfferIcon style={{ verticalAlign: "sub" }} />}
                iconPosition="start"
                label="Offers"
                href="tab=offers"
                {...a11yProps(4)}
              />
              <LinkTab
                icon={<CreditCardIcon style={{ verticalAlign: "sub" }} />}
                iconPosition="start"
                label="Verifications"
                href="tab=verifications"
                {...a11yProps(5)}
              />
              <LinkTab
                icon={<SecurityIcon style={{ verticalAlign: "sub" }} />}
                iconPosition="start"
                label="Account Support"
                href="tab=account-support"
                {...a11yProps(6)}
              />
              <LinkTab
                icon={<AttachMoneyIcon style={{ verticalAlign: "sub" }} />}
                iconPosition="start"
                label="Earnings"
                href="tab=earnings"
                {...a11yProps(7)}
              /> */}
              </Tabs>
            ) }
          </Grid>
          <Grid md={9} sm={12} className="settingsContent" py={2} pt={5}>
            <TabPanel value={value} index={0}></TabPanel>
            <TabPanel value={value} index={1}>
              <AddNewProperty />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Profile />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <PropertyTable />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Notifications />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Favorites />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <ChangePassword />
            </TabPanel>
            <TabPanel value={value} index={7}>
              <Verifications />
            </TabPanel>
            <TabPanel value={value} index={8}>
              <Supports />
            </TabPanel>
            <TabPanel value={value} index={9}>
              <Earnings />
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SettingsMenu;
