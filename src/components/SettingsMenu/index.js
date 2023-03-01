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

  const query = useQuery();
  const getTab = query.get("tab");
  const [tab , setTab] = useState(getTab)


  useEffect(() => {
    
  
   setTab(getTab)

  }, [getTab])
  useEffect(() => {
    
if(tab) {
  return
}else {
  setTab("profile")

}
    
  // navigate("/profile?tab=profile")
  // window.location.href("/profile?tab=profile")
  // window.location.reload()

   }, [])


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

        case "notifications":
          setValue(3);
          break;

        case "offers":
          setValue(4);
          break;

        case "verifications":
          setValue(5);
          break;

        case "account-support":
          setValue(6);
          break;
        case "earnings":
          setValue(7);
          break;

        default:
          break;
      }
    }
  }, []);

  console.log("tab", tab);
  return (
    <>
      <Grid pt={2} style={{ position: "sticky", top: "100px" }}>
        {/* <SectionHero>Profile</SectionHero> */}
        <SectionHero>
          {tab?.split("-")[0]} {tab?.split("-")[1]} {tab?.split("-")[2]}{" "}
        </SectionHero>
      </Grid>
      <Grid pt={1} style={{ position: "sticky", top: "190px" }}>
        {/* <BreadCrumbs></BreadCrumbs> */}
        <CustomizedBreadcrumbs
          tab={tab}
          path={path}
          setPath={setPath}
          value={value}
          setValue={setValue}
        />
      </Grid>
      <Grid container pt={5}>
        <Grid
          sm={12}
          container
          className="settingsMenu"
          sx={{ display: "flex" }}
        >
          <Grid className="settingsMenuContainer" container sm={2}>
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
                    <NotificationsActiveIcon style={{ verticalAlign: "sub" }} />
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
                icon={   <SiteIcon style={{ display: "inline-block" }}><SecurityIcon style={{ verticalAlign: "sub" }} /></SiteIcon>}
                iconPosition="start"
                label="Account Support"
                href="tab=account-support"
                {...a11yProps(8)}
              />
              <LinkTab
                icon={<CreditCardIcon style={{ verticalAlign: "sub" }} />}
                iconPosition="start"
                label="Verifications"
                href="tab=verifications"
                {...a11yProps(5)}
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
                {...a11yProps(7)}
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
          <Grid md={9} sm={12} className="settingsContent" py={2}>
            {/* <CustomizedBreadcrumbs
              tab={tab}
              path={path}
              setPath={setPath}
              value={value}
              setValue={setValue}
            /> */}

            <TabPanel value={value} index={0}></TabPanel>
            <TabPanel value={value} index={1}>
              <AddNewProperty />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Profile />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Notifications />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Offers />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Verifications />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <Supports />
            </TabPanel>
            <TabPanel value={value} index={7}>
              <Earnings />
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SettingsMenu;
