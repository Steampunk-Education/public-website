import {
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { properties } from "../properties";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  const FooterText = styled(Typography)(() => ({
    fontFamily: "Josefin Sans",
    fontSize: "18px",
    color: properties.style.primary.grey,
  }));

  return (
    <div>
      <Container sx={{ pt: 5 }} />
      <Divider />
      <Grid
        container
        justify="flex-end"
        alignItems="center"
        spacing={2}
        sx={{ pb: 2 }}
      >
        <Grid xs={6} sx={{ textAlign: "center", pt: 4 }}>
          <FooterText>
            Email:{" "}
            <a
              href="mailto:info@steampunk.education"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              info@steampunk.education
            </a>
          </FooterText>
        </Grid>
        <Grid xs={6} sx={{ textAlign: "center", pt: 4 }}>
          <FooterText>
            <IconButton href="https://www.linkedin.com/company/steampunk-edu/">
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com/steampunkeducation/">
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://www.facebook.com/steampunkeducation">
              <FacebookIcon />
            </IconButton>
          </FooterText>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
