import { Grid } from "@mui/material";
import React, { useState } from "react";
import {
  PropertyContainer,
  PropertySpan,
  PropertyText,
  PropertyTextSmall,
  PropertyTitle,
} from "../Styles/Property.styled";
import moment from "moment";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import BedroomChildOutlinedIcon from "@mui/icons-material/BedroomChildOutlined";
import FitScreenOutlinedIcon from "@mui/icons-material/FitScreenOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./styles.css";
import { Hr, SiteIcon } from "../Styles/PageContent.styled";
import { useSortContext } from "../../Contexts/SortContext";
import Avatar from "../../images/avatar1.png"

const AgentCard = ({ agent, index, section }) => {
  const [activeIndex, setActiveIndex] = useState(false);
  const { sortItems, dispatch } = useSortContext();

  var nf = Intl.NumberFormat();

  const handleMouseEnter = (index) => {
    console.log("index", index);
    setActiveIndex(index);
  };
  const handleMouseLeave = () => {
    console.log("index", index);
    setActiveIndex("");
  };
  return (
    <Grid
      item
      lg={sortItems.sortByGrid
          ? 4
          : 3
      }
      sm={sortItems.sortByGrid
          ? 6
          : 4
      }
      xs={12}
      className="agentCard"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
      container={sortItems.sortByList ? true : false}
      alignItems="center"
    >
      <Grid
        className={
          index === activeIndex
            ? `agentCardImage activeAgentCardImage`
            : "agentCardImage"
        }
        xs={sortItems.sortByList ? 5 : ""}
      >
        {index === activeIndex && (
          <Grid
            className={index === activeIndex && `activeAgentCardImageOverlay`}
          ></Grid>
        )}
        <a href={`/agent/`} style={{display:'block', width:'100%'}}>
          <img   style={{display:'block', width:'100%'}} src={agent.profilePhoto.secure_url || Avatar} alt="agent image" />
        </a>
      </Grid>
   
      <Grid xs={sortItems.sortByList ? 7 : ""} 
  
      
      >
        <PropertyContainer>
          <Grid p={2} container flexDirection='column' justifyContent='space-between' style={{minHeight:'240px'}}>
            <Grid>
              <PropertyTitle>
                <a href={`/agent/`}>{agent.name}</a>
              </PropertyTitle>
            </Grid>
            <Grid py={2}>
              <PropertyTextSmall>
                {agent.role}{" "}
                <>
                  {agent.company && (
                    <>
                      @ <span style={{ color: "lightblue" }}>{agent.company}</span>
                    </>
                  )}
                </>
              </PropertyTextSmall>
            </Grid>
            <Grid py={1}>
              <PropertyTextSmall>{agent.email}</PropertyTextSmall>
            </Grid>
            {agent.phone && (
              <Grid py={1}>
                <PropertyTextSmall>{agent.phone}</PropertyTextSmall>
              </Grid>
            )}

            <Hr />
            <Grid py={2}>
              <Grid container>
                {agent.socialHandle.facebook && (
                  <Grid container xs={4} alignItems="center">
                    <Grid>
                      <SiteIcon>
                        <FacebookIcon />
                      </SiteIcon>
                    </Grid>
                    &nbsp;
                  </Grid>
                )}
                {agent.socialHandle.twitter && (
                  <Grid container xs={4} alignItems="center">
                    <Grid>
                      <SiteIcon>
                        <TwitterIcon />
                      </SiteIcon>
                    </Grid>
                    &nbsp;
                  </Grid>
                )}
                {agent.socialHandle.instagram && (
                  <Grid container xs={4} alignItems="center">
                    <Grid>
                      <SiteIcon>
                        <InstagramIcon />
                      </SiteIcon>
                    </Grid>
                    &nbsp;
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </PropertyContainer>
      </Grid>
    </Grid>
  );
};

export default AgentCard;
