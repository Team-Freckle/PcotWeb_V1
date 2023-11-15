import React, { Dispatch, ReactElement, SetStateAction, useState } from "react";
import Modal from "react-modal";

const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    minWidth: "350px",
    width: "50%",
    height: "600px",
    zIndex: "150",
    position: "absolute",
    padding: "0",
    border: "none",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    WebkitScrollSnapType: "none",
  },
};

export const PopupModal = ({
  children,
  active,
  setActive,
}: {
  children?: ReactElement;
  active?: boolean;
  setActive?: Dispatch<SetStateAction<boolean>>;
}) => {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div>
      <Modal
        isOpen={active != null ? active : modalOpen}
        onRequestClose={() => (setActive ? setActive(false) : setModalOpen(false))}
        style={customModalStyles}
        ariaHideApp={false}
        contentLabel="Pop up Message"
        shouldCloseOnOverlayClick={true}
      >
        {children}
      </Modal>
    </div>
  );
};
