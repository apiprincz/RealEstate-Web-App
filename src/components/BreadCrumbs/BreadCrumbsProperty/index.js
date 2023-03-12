import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { SiteTextSmall } from "../../Styles/PageContent.styled";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function handleClick(e) {
  e.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BreadCrumbs() {
  const [pathName, setPathName] = React.useState();
  const [location, setLocation] = React.useState();
  const navigate = useNavigate()

  React.useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  React.useEffect(() => {
    console.log("href", window.location.pathname, pathName);
    if (pathName) {
      let arr = pathName.split("/");

      const newArr = arr.filter(function (entry) {
        return entry.trim() != "";
      });

      setLocation(newArr);
    }
  }, [pathName]);
  useEffect(() => {
    
    if(window.location.pathname === "/property/edit") {
      navigate("/property/add")
    }
     
    }, [])

  const { id } = useParams();

  console.log("href", window.location.pathname, location);

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          <SiteTextSmall cursorEnabled>Home</SiteTextSmall>
        </Link>
        <Link underline="hover" color="inherit" href="/account?tab=my-properties">
          <SiteTextSmall cursorEnabled>My Properties</SiteTextSmall>
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href={`/${pathName?.split("/")[1]}/add`}
          aria-current="page"
        >
          <SiteTextSmall cursorEnabled>{pathName?.split("/")[1]}</SiteTextSmall>
        </Link>

          <SiteTextSmall cursorEnabled>{!id ? <>Add</> : <>{pathName?.split("/")[2]}</>}</SiteTextSmall>
       
      </Breadcrumbs>
    </div>
  );
}
