import { useState } from 'react'
import { Button, Modal, Typography, Box } from '@mui/material'
import { GoEyeClosed } from 'react-icons/go'
import { borderRadius, color } from '@mui/system'

export const PortfolioModal = ({ image, title, description, video }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#1f1f38',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: '#a57e4b',
  }

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="btn-modal-container">
      <Button
        style={{ color: '#A57E4B' }}
        onClick={handleOpen}
      >
        More...
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="title-image-container">
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h1"
            >
              {title}
            </Typography>
            <Button onClick={handleClose}>
              <GoEyeClosed size="1.5rem" />
            </Button>
          </div>
          <video
            autoPlay
            style={{ maxWidth: '35rem' }}
            className="modal-image"
            src={video}
            alt="portfolio-image"
          />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            {description}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
