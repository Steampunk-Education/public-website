import React from "react";
import ThemedButton from "./ThemedButton";
import { Typography } from "@mui/material";
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
      <Link to="/quiz?usertype=educator&lang=en">
        <ThemedButton sx={{ mr: "40px" }} btnText={"Educators"} />
      </Link>
      <Link to="/quiz?usertype=student&lang=en">
        <ThemedButton sx={{ mr: "40px" }} btnText={"Students"} />
      </Link>
      <Link to="/quiz?usertype=parent&lang=en">
        <ThemedButton btnText={"Parents"} />
      </Link>
    </div>
  );
}

export default HomeText;
