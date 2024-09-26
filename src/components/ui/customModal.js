import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

export default function CustomModal(props) {
  const { isOpen, handleClose, header, body, footer, size = "lg" } = props;

  return (
    <>
      <Modal backdrop="blur"  size={size} isOpen={isOpen} onClose={handleClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">{header}</ModalHeader>
          <ModalBody>{body}</ModalBody>
          <ModalFooter>{footer}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
