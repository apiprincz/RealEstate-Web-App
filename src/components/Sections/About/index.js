import { Grid } from "@mui/material";
import React from "react";
import { AboutContainer } from "../../Styles/PageContainers.styled copy";
import { SectionHero, SiteText } from "../../Styles/PageContent.styled";

const About = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      xs={12}
   
      className="about"
    >
      <Grid xs={10}>
        <AboutContainer>
          <Grid container alignItems='center' p={5}>
            {/* <SectionHero>
About

</SectionHero> */}
            <Grid p={2} md={6} xs={12}>
              <SiteText xlineHeight>
              <span style={{color:"white"}}>Most<span style={{color:'hsl(169, 82%, 60%)'}}>Habitable</span></span><span style={{color:'gray'}}>.com</span> is an indigenous real estate company which
                started in 2015 as an errand business to connect available
                properties within our locality to locals, friends &amp; family.
                <br />
                <br />
                Over that period we have being able to satisfy over 250 clients,
                close out over 200 property deals and counting.
              </SiteText>
            </Grid>
            <Grid  md={6} xs={12}>
            <SectionHero>
               <span style={{color:'green', fontSize:'50px'}}>'</span> Our Mission is to get you the best property deals with ease and comfort. <span style={{color:'green', fontSize:'50px'}}>'</span>
              </SectionHero>


          </Grid>
          </Grid>
        </AboutContainer>
      </Grid>
    </Grid>
  );
};

export default About;
