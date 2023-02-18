import React, { Children } from 'react'
import {  Grid } from "@mui/material";
import { HeaderContainer } from '../Styles/HeaderContainer.styled'
import { FooterContainer } from '../Styles/FooterContainer.styled'
import Header from '../Header';
import Footer from '../Footer';

const Layout = (props) => {
  return (
    <Grid xs={12}>
        <HeaderContainer>
          <Header/>
        </HeaderContainer>
 

        {props.children}

        <FooterContainer>
          <Footer/>
        </FooterContainer>
    </Grid>
  )
}

export default Layout