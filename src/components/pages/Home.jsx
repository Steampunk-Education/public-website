import React from "react";
import "../../style/fonts/josefin-sans.css";
import Navbar from "../Navbar";
import About from "./About";
import Services from "./Services";
import WorkshopSearchCity from "../WorkshopSearch";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import spashPageImage from "../../resources/images/splash-page-img.jpeg";
import HomeText from "../HomeText";
import Footer from "../Footer";

const FullHeightGrid = styled(Grid)(() => ({
  height: "100%",
}));

const Home = () => {
  return (
    <div>
      <Navbar
        aboutTitle="About"
        servicesTitle="Services"
        contactTitle="Contact"
        workshopTitle="Find workshops near you..."
        lang="en"
      />
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <FullHeightGrid
          container
          justify="flex-end"
          alignItems="center"
          spacing={2}
        >
          <Grid xs={6}>
            <img
              style={{ paddingTop: "50px", width: "100%" }}
              src={spashPageImage}
              alt="Spash Page"
            />
          </Grid>
          <Grid xs={6}>
            <HomeText />
          </Grid>
        </FullHeightGrid>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" }, pt: 10, pl: 5 }}>
        <HomeText />
      </Box>
      <About />
      <Services />
      <WorkshopSearchCity />
      <Footer />
    </div>
  );
};

export default Home;
