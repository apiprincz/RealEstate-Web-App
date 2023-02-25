import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { SiteTextSmall } from "../Styles/PageContent.styled";



function handleClick(e) {
  e.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BreadCrumbs() {
  const [pathName, setPathName] = React.useState();
  const [location, setLocation] = React.useState();

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

  console.log("href", window.location.pathname, location);

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
       <SiteTextSmall cursorEnabled>Home</SiteTextSmall> 

          
        </Link>
        {location?.map((location, index) => 
        <Link
        underline="hover"
        color="text.primary"
        href={`/${location}`}
        aria-current="page"
      >
       <SiteTextSmall cursorEnabled>{location}</SiteTextSmall> 

       
      </Link>
        )}

        
      </Breadcrumbs>
    </div>
  );
}
