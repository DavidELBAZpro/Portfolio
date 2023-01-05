import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const ContactForm = () => {
  const form = useRef();
  const MySwal = withReactContent(Swal);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9ns196u",
      "template_7vtsgcu",
      form.current,
      "KuzXB_B30hkDqsuaE"
    );
    MySwal.fire({
      icon: "success",
      title: <i>Message sended !</i>,
      html: <i>I will get back to you soon</i>,
    });
    e.target.reset();
  };

  return (
    <>
      <Box
        onSubmit={sendEmail}
        ref={form}
        component="form"
        sx={{
          "& .MuiTextField-root": {
            marginTop: 5,
            marginBottom: 2,
            maxWidth: "150ch",
          },
        }}
        autoComplete="on"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Full Name"
            multiline
            maxRows={2}
            required
            variant="filled"
            fullWidth
            type="name"
            name="name"
            border="1px solid #1976D2"
            active="true"
            // value={name}
          />
          <TextField
            id="outlined-textarea"
            label="email"
            multiline
            maxRows={2}
            variant="filled"
            required
            fullWidth
            type="email"
            name="email"
            // value={email}
            border="1px solid #1976D2"
          />
          <TextField
            id="outlined-multiline-static"
            label="Your message"
            multiline
            rows={7}
            required
            fullWidth
            type="message"
            name="message"
            // value={message}
          />
        </div>
        <div className="submit-btn">
          <Button
            className="btn-to-submit"
            variant="contained"
            size="large"
            type="submit"
          >
            SEND
          </Button>
        </div>
      </Box>
    </>
  );
};
