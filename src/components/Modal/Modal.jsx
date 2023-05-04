import { useEffect } from "react";
import { Backdrop, Modal } from "./Modal.styled"
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const ImageModal = ({ children, onClose }) => {
  useEffect(() => {
    function handlerKeyDown(e) {
      if (e.code === "Escape") {
        onClose();
      };
    };
    window.addEventListener('keydown', handlerKeyDown);

    return () => {
      window.removeEventListener('keydown', handlerKeyDown);
    }
  }, [onClose]);
  
  const handlerBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handlerBackdrop}>
      <Modal>{children}</Modal>
    </Backdrop>, modalRoot)
};

ImageModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};