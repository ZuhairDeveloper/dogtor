import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";


export default function ModalSkeleton({ open, setOpen, children, type, width, height, noRadius, className }) {
  const handleClose = () => setOpen(false);

  const customStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "40%",
    bgcolor: "background.paper",
    border: "2px solid #ffffff",
    boxShadow: 24,
    p: 4,
    borderRadius: noRadius ? "0px" : "10px",
    minHeight: '40vh'
  };

  return (
    <div className={`${type == 'big' && 'big_modal_new'}`} >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={customStyle} className={`modal-scroll ${className}`}>{children}</Box>
        </Fade>
      </Modal>
    </div>
  );
}
