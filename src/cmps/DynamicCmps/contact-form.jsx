import React, { useRef } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import emailjs from 'emailjs-com'
import { useSnackbar } from 'notistack'

export const ContactForm = () => {
  const form = useRef()
  const { enqueueSnackbar } = useSnackbar()

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar('Message sended !', { variant })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_9ns196u',
      'template_7vtsgcu',
      form.current,
      'KuzXB_B30hkDqsuaE'
    )
    e.target.reset()
  }

  return (
    <>
      <Box
        onSubmit={sendEmail}
        ref={form}
        component="form"
        sx={{
          '& .MuiTextField-root': {
            marginTop: 5,
            marginBottom: 2,
            maxWidth: '150ch',
          },
        }}
        autoComplete="on"
      >
        <div>
          <TextField
            inputProps={{ style: { color: '#A57E4B' } }}
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
            size="large"
          />
          <TextField
            inputProps={{ style: { color: '#A57E4B' } }}
            id="outlined-textarea"
            label="Email"
            multiline
            maxRows={2}
            variant="filled"
            required
            fullWidth
            type="email"
            name="email"
          />
          <TextField
            inputProps={{ style: { color: '#A57E4B' } }}
            id="outlined-multiline-static"
            label="Your message"
            multiline
            rows={7}
            required
            fullWidth
            type="message"
            name="message"
          />
        </div>
        <div className="submit-btn">
          <Button
            className="btn-to-submit"
            variant="contained"
            size="large"
            type="submit"
            onClick={handleClickVariant('success')}
          >
            SEND
          </Button>
        </div>
      </Box>
    </>
  )
}
