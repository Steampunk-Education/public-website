import React from "react";
import ThemedButton from "./ThemedButton";
import { Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { properties } from "../properties";
import { Link } from "react-router-dom";

const SplashPageBody = styled(Typography)(() => ({
  fontFamily: "Roboto",
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

const ServicesTitle = styled(Typography)(() => ({
  margin: "auto",
  textAlign: "center",
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

function ServiceText() {
  return (
    <div>
      <ServicesTitle sx={{ pt: 5, pb: 5 }}>Why Steampunk?</ServicesTitle>

      <SplashPageBody variant="p">
        Steampunk provides the hardware, educators and infrastructure required
        to run a successful STEM education program
      </SplashPageBody>

      <br />
      <br />

      <SplashPageBody variant="p">
        Whether you're planning a half-day workshop, or an entire year of STEM
        programming, we provide course content and hardware that that is
        tailored to your needs.
      </SplashPageBody>
      <Container sx={{ pb: "30px" }}></Container>
      <Link to="/servicespagehome">
        <ThemedButton btnText={"Request a Quote"} />
      </Link>
    </div>
  );
}

export default ServiceText;
