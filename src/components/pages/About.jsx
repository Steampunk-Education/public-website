import React, { forwardRef } from "react";
import "../../style/fonts/roboto.css";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import aboutUsImage from "../../resources/images/service3-img.jpeg";
import AboutText from "../AboutText";
import Box from "@mui/material/Box";

const FullHeightGrid = styled(Grid)(() => ({
  height: "100%",
}));

function About() {
  return (
    <div id="aboutAnchor">
      <Box sx={{ display: { xs: "none", md: "block" }, pt: 10 }}>
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
            <AboutText />
          </Grid>
        </FullHeightGrid>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" }, pt: 10, pl: 5, pr: 5  }}>
        <AboutText />
      </Box>
    </div>
  );
}

export default forwardRef(About);
