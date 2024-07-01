import MenuIcon from "@mui/icons-material/Menu";
import { Divider, Menu, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { properties } from "../properties";
import icon from "../resources/images/steampunk-icon.png";
import logo from "../resources/images/steampunk-logo.png";
import "../style/fonts/josefin-sans.css";

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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledAppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexGrow: 1,
              margin: "auto",
              width: "50%",
            }}
          >
            <Logo
              src={logo}
              sx={{
                ":hover": { cursor: "pointer" },
                minWidth: "250px",
                maxWidth: "300px",
                pl: 2,
                flexGrow: 1,
              }}
              onClick={navHome}
              alt="Steampunk Education Logo"
            />
            <Box
              sx={{
                display: "flex",
                margin: "auto",
                width: "50%",
                justifyContent: "flex-end",
              }}
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
            </Box>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none", width: "100%" } }}>
            <Toolbar>
              <Logo
                src={icon}
                sx={{
                  ":hover": { cursor: "pointer" },
                  maxWidth: "50px",
                  pl: 2,
                }}
                onClick={navHome}
                alt="Steampunk Education Logo"
              />
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ float: "right" }}
                onClick={handleClick}
                anchorEl={anchorEl}
              >
                <MenuIcon />
              </IconButton>
              <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
                <Box sx={{ padding: "10px" }}>
                  <HashLink
                    to="/#aboutAnchor"
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem>About</MenuItem>
                  </HashLink>
                  <Divider sx={{ paddingTop: "5px" }} />
                  <HashLink
                    to="/#servicesAnchor"
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem sx={{ paddingTop: "5px" }}>Services</MenuItem>
                  </HashLink>
                  <Divider sx={{ paddingTop: "5px" }} />
                  <MenuItem onClick={navContact} sx={{ paddingTop: "5px" }}>
                    Contact
                  </MenuItem>
                </Box>
              </Menu>
            </Toolbar>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </>
  );
}

export default Navbar;
