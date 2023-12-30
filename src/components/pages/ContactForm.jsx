import React, { useRef, useState } from "react";
import { Typography, TextField, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { properties } from "../../properties";
import ThemedButton from "../ThemedButton";
import emailjs from "emailjs-com";

const SplashPageTitle = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const SplashPageBody = styled(Typography)(() => ({
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

function ContactForm(props) {
  const { titleText, submitBtnText, requireMessage } = props;

  const [confimation, setConfirmation] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [emailjsError, setEmailjsError] = useState(false);

  const form = useRef();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setEmailError(false);
    setMessageError(false);

    console.log(e)

    if (email.length > 0) {
      if (email.includes("@")) {
        const splitEmail = email.split("@");
        if (splitEmail[1].includes(".")) {
            if (requireMessage && message.length <= 0) {
              setMessageError(true);
              return;
            } else {
              setConfirmation(true);
              emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
                .then(() => {
                }, (error) => {
                  console.log(error)
                  setEmailjsError(true);
                })
            }
        }
      }
    }
    
    if (!(requireMessage && message.length > 0)) {
        setMessageError(true);
    }

    setEmailError(true);
  };

  return (
    <div>
      {confimation ? (
        <div>
          <SplashPageTitle sx={{ pt: 4, ml: 3 }}>{emailjsError ? "Something went wrong." : "Success!"}</SplashPageTitle>
          <SplashPageBody sx={{ pt: 2, pb: 1, ml: 3 }}>
            {emailjsError ? 
            "Your message was not sent by the system, please reach out to the team directly via info@steampunk.education."
            : "Thanks for reaching out! We look forward to working with you."
            }
          </SplashPageBody>
        </div>
      ) : (
        <form ref={form}>
          <SplashPageTitle sx={{ pt: 4, pb: 2, ml: 3 }}>
            {titleText}
          </SplashPageTitle>
          <Grid sx={{ pb: 3 }} container>
            <TextField
              sx={{ ml: 3, width: 400 }}
              label="Enter your work email..."
              variant="outlined"
              onChange={handleEmailChange}
              error={emailError}
              helperText={emailError ? "Please enter a valid email." : ""}
            />
          </Grid>
          <Grid sx={{ pb: 3 }}>
            <TextField
              sx={{ ml: 3, width: 600 }}
              label="Questions or comments?"
              variant="outlined"
              multiline
              rows={5}
              onChange={handleMessageChange}
              error={messageError}
              helperText={messageError ? "Please enter your message." : ""}
            />
          </Grid>
          <ThemedButton
            sx={{ ml: 3 }}
            btnText={submitBtnText}
            onClick={(e) => handleClick(e)}
          />
        </form>
      )}
    </div>
  );
}

export default ContactForm;
