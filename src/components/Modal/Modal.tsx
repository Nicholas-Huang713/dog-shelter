import React from "react";

export default function Modal() {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      BackdropProps={{
        sx: { backgroundColor: "rgba(0, 0, 0, 0.75)" }, // Darker backdrop
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          //   width: 400,
          bgcolor: "background.paper",
          //   border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          My Modal Title
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          This is the content inside the modal.
        </Typography>
        <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}
