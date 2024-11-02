import React from "react";
import { motion } from "framer-motion";
import "../../../app/css/ModalInfo.css";

export default function ModalInfo({ isOpen, onClose, modalText }) {
  const variants = {
    open: { x: -10, opacity: 1 },
    closed: { x: "100%", opacity: 0 },
  };
  return (
    <>
      <motion.div
        className="modal"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        variants={variants}
        transition={{ duration: 0.3 }}
      >
        <div className="modal-content">
          <p className="modal-text">{modalText}</p>
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
      </motion.div>
    </>
  );
}
