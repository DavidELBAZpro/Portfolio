import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const ContactForm = () => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { marginTop:5 ,marginBottom: 2, maxWidth: "150ch" },
        }}
        noValidate
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
            type="text"
          />
          <TextField
            id="outlined-textarea"
            label="Email"
            multiline
            maxRows={2}
            variant="filled"
            required
            fullWidth
            type="email"
          />
          <TextField
            id="outlined-multiline-static"
            label="Your message"
            multiline
            rows={7}
            required
            fullWidth
            type="message"
          />
        </div>
      </Box>
      <div className="submit-btn">
        <Button variant="contained" size="large">
          SEND
        </Button>
      </div>
    </>
  );
};
