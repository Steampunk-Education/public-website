import React from "react";
import ThemedButton from "./ThemedButton";
import { Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { properties } from "../properties";
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

function AboutText() {
  return (
    <div>
      <AboutTitle sx={{ pb: 5 }}>What is Steampunk?</AboutTitle>
      <SplashPageBody>
        Steampunk's goal is to show young creatives how to harness the
        incredible power of technology to enable them to create, instead of
        consume.
      </SplashPageBody>
      <br />
      <SplashPageBody>
        We teach students how to get started in robotics, programming, 3D design
        & AI. An understanding of computer science and engineering is as vital
        as reading, writing and arithmetic in this modern age.
      </SplashPageBody>
      <Container sx={{ pb: "30px" }}></Container>
      <Link to="/quiz?usertype=educator&lang=en">
        <ThemedButton btnText={"Educators, start here"} />
      </Link>
    </div>
  );
}

export default AboutText;
