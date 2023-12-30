import React from "react";
import ThemedButton from "./ThemedButton";
import { ButtonGroup, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { properties } from "../properties";
import { Link } from "react-router-dom";

const SplashPageTitle = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const SplashPageBody = styled(Typography)(() => ({
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

const SpacedButtonGroup = styled(ButtonGroup)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "& > *:not(:last-child)": {
    marginRight: "25px"
  }
}));

function HomeText() {
  return (
    <div>
      <SplashPageTitle sx={{ pr: 5 }}>
        Unlock the potential of future <strong>scientists</strong> and{" "}
        <strong>engineers</strong>
      </SplashPageTitle>
      <SplashPageBody sx={{ pt: 2, pb: 3, pr: 5 }}>
        Revolutionize your education centre with educational resources and
        passionate instructors who specialize in teaching STEM.
      </SplashPageBody>
      <SpacedButtonGroup>
        <Link to="/quiz?usertype=educator&lang=en">
          <ThemedButton btnText={"Educators"} />
        </Link>
        <Link to="/quiz?usertype=student&lang=en">
          <ThemedButton btnText={"Students"} />
        </Link>
        <Link to="/quiz?usertype=parent&lang=en">
          <ThemedButton btnText={"Parents"} />
        </Link>
      </SpacedButtonGroup>
    </div>
  );
}

export default HomeText;
