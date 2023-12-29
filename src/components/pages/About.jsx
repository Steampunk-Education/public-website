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

const FullHeightGrid = styled(Grid)(() => ({
  height: "100%",
}));

function About() {
  return (
    <div id="aboutAnchor">
      <AboutTitle sx={{ pt: 18, pb: 5 }}>What is Steampunk?</AboutTitle>
      <FullHeightGrid
        container
        justify="flex-end"
        alignItems="center"
        spacing={0}
      >
        <Grid xs={5}>
          <img
            style={{ width: "100%" }}
            src={aboutUsImage}
            alt="Girl looking at user; artistic equations decorate the frame"
          />
        </Grid>
        <Grid xs={7} sx={{ pr: 10 }}>
          <SplashPageBody>
            Steampunk's goal is to show young creatives how to harness the
            incredible power of technology to enable them to create, instead of
            consume.
          </SplashPageBody>
          <br />
          <SplashPageBody>
            We teach students how to get started in robotics, programming, 3D design & AI. 
            At Steampunk, we believe that an understanding of computer science and basic engineering principles are as vital as reading and arithmetic in this modern age. 
          </SplashPageBody>
          <Container sx={{ pb: "30px" }}></Container>
          <Link to="/quiz?usertype=educator&lang=en">
            <ThemedButton btnText={"Educators, start here"} />
          </Link>
        </Grid>
      </FullHeightGrid>
    </div>
  );
}

export default forwardRef(About);
