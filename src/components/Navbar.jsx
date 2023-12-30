import React from "react";
import "../style/fonts/josefin-sans.css";
import logo from "../resources/images/steampunk-logo.png";
import icon from "../resources/images/steampunk-icon.png";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { properties } from "../properties";
import Box from "@mui/material/Box";

const StyledAppBar = styled(AppBar)(() => ({
  borderBottom: "2px solid #E2E2E2",
}));

const Logo = styled("img")(() => ({
  margin: "auto",
  textAlign: "center",
  width: "25%",
  paddingTop: "15px",
  paddingBottom: "15px",
}));

const MenuItem = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  fontSize: "20px",
  color: properties.style.primary.grey,
  ":hover": {
    cursor: "pointer",
  },
}));

function Navbar() {
  const navigate = useNavigate();
  const navContact = () => navigate("/contact");
  const navHome = () => navigate("/");

  return (
    <StyledAppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            spacing={2}
            sx={{ pt: 2 }}
          >
            <Grid xs={8} lg={11}>
              <Logo
                src={logo}
                sx={{
                  ":hover": { cursor: "pointer" },
                  minWidth: "250px",
                  maxWidth: "800px",
                  pl: 2,
                }}
                onClick={navHome}
                alt="Steampunk Education Logo"
              />
            </Grid>
            <Grid xs={4} lg={1} sx={{ display: "flex", flexDirection: "row" }}>
              <HashLink to="/#aboutAnchor" style={{ textDecoration: "none" }}>
                <MenuItem sx={{ pr: 3 }}>About</MenuItem>
              </HashLink>
              <HashLink
                to="/#servicesAnchor"
                style={{ textDecoration: "none" }}
              >
                <MenuItem sx={{ pr: 3 }}>Services</MenuItem>
              </HashLink>
              <MenuItem onClick={navContact}>Contact</MenuItem>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            spacing={2}
            sx={{ pt: 2 }}
          >
            <Grid xs={6}>
              <Logo
                src={icon}
                sx={{
                  ":hover": { cursor: "pointer" },
                  maxWidth: "200px",
                  pl: 2,
                }}
                onClick={navHome}
                alt="Steampunk Education Logo"
              />
            </Grid>
            <Grid
              xs={6}
              sx={{ display: "flex", flexDirection: "row", textAlign: "right" }}
            >
              <HashLink to="/#aboutAnchor" style={{ textDecoration: "none" }}>
                <MenuItem sx={{ pr: 3 }}>About</MenuItem>
              </HashLink>
              <HashLink
                to="/#servicesAnchor"
                style={{ textDecoration: "none" }}
              >
                <MenuItem sx={{ pr: 3 }}>Services</MenuItem>
              </HashLink>
              <MenuItem onClick={navContact}>Contact</MenuItem>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;
