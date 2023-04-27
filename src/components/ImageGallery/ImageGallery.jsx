import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';
import { List } from "./ImageGallery.styled";
import { ImageModal } from "components/Modal/Modal";
import { Component } from "react";

export class ImageGallery extends Component {
  state = {
    isModalOpen: false,
  };

  showModal = (largeImg ,tags) => {
    this.setState({
      isModalOpen: true,
      largeImg,
      tags,
    })
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  };

  render() {
    const { items } = this.props;
    const { isModalOpen, largeImg, tags } = this.state;

    return (
      <List>
      {items.map(item => {
        return (
          <ImageGalleryItem key={item.id} item={item} showModal={this.showModal} />
        )
      })}
        {isModalOpen && (
          <ImageModal onClose={this.closeModal}>
            <img src={largeImg} alt={tags} width='100%' height='100%'/>
          </ImageModal>
        )}
    </List>
    )
  };
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired).isRequired,
};