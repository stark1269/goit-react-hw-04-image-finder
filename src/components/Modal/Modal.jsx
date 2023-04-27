import { Component } from "react";
import { Backdrop, Modal } from "./Modal.styled"
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class ImageModal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlerKeyDown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerKeyDown);
  };

  handlerKeyDown = e => {
    const { onClose } = this.props
    if (e.code === "Escape") {
      onClose();
    };
  };

  handlerBackdrop = e => {
    const { onClose } = this.props
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handlerBackdrop}>
        <Modal>{this.props.children}</Modal>
      </Backdrop>, modalRoot)
  }
};

ImageModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};