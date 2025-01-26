import React from "react";
import { Dialog } from "@mui/material";

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
}

export default function FormModal({ showModal, closeModal, children}: ModalProps) {
  return (
    <Dialog
      open={showModal}
      onClose={closeModal}>
      {children}
    </Dialog>
  );
}
