import React, { forwardRef } from "react";
import "../../style/fonts/roboto.css";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Container } from "@mui/material";
import ThemedButton from "../ThemedButton";
import { properties } from "../../properties";
import aboutUsImage from "../../resources/images/service3-img.jpeg";
import { Link } from "react-router-dom";

const AboutTitle = styled(Typography)(() => ({
  margin: "auto",
  textAlign: "center",
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const SplashPageBody = styled(Typography)(() => ({
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

function About() {
  return (
    <div id="aboutAnchor">
      <AboutTitle sx={{ pt: 18 }}>What is Steampunk?</AboutTitle>
      <Grid container spacing={0}>
        <Grid xs={4.8}>
          <img
            style={{ width: "100%" }}
            src={aboutUsImage}
            alt="Girl looking at user; artistic equations decorate the frame"
          />
        </Grid>
        <Grid xs={7.2} sx={{ pt: 15, pr: 10 }}>
          <SplashPageBody>
            Steampunk teaches the next generation of Makers how to see
            technology as a medium for creation.
          </SplashPageBody>
          <br />
          <SplashPageBody>
            The British futurist, Arthur C. Clarke said that "any sufficiently
            advanced technology is indistinguishable from magic". Steampunk's
            goal is to show the young creatives how to harness the incredible
            power of technology to enable them to create, instead of consume.
          </SplashPageBody>
          <Container sx={{ pb: "30px" }}></Container>
          <Link to="/quiz?usertype=educator&lang=en">
            <ThemedButton btnText={"Educators, start here"} />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default forwardRef(About);
