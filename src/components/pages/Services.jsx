import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import servicesImage from "../../resources/images/services-page-img.jpeg";
import ServiceText from "../ServiceText";

const FullHeightGrid = styled(Grid)(() => ({
  height: "100%",
}));

function Services() {
  return (
    <div id="servicesAnchor">
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <FullHeightGrid
          container
          justify="flex-end"
          alignItems="center"
          spacing={0}
        >
          <Grid xs={5} sx={{ pt: 20, ml: "70px" }}>
            <ServiceText />
          </Grid>
          <Grid xs={5} sx={{ pt: 5, pl: 10 }}>
            <img
              src={servicesImage}
              style={{ width: "70%", pt: 10 }}
              alt="Service page"
            />
          </Grid>
        </FullHeightGrid>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <ServiceText />
      </Box>
    </div>
  );
}

export default Services;
