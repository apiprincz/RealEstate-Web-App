import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";

import PersonIcon from "@mui/icons-material/Person";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[400]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    textTransform:'capitalize',
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CustomizedBreadcrumbs({ tab }) {
  console.log("tab", tab);
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="/"
          label="Home"
          style={{ cursor: "pointer" }}
         
        />
   
        <StyledBreadcrumb label={`${tab?.split("-")[0]} ${tab?.split("-")[1] || ''} ${tab?.split("-")[2] || ''}`} onClick={handleClick} />
      </Breadcrumbs>
    </div>
  );
}
