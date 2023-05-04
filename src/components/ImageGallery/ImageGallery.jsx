import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';
import { List } from "./ImageGallery.styled";
import { ImageModal } from "components/Modal/Modal";
import { useState } from "react";

export const ImageGallery = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [alt, setAlt] = useState('');

  const showModal = (largeImg, tags) => {
    setIsModalOpen(true);
    setImgSrc(largeImg);
    setAlt(tags);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <List>
      {items.map(item => {
        return (
          <ImageGalleryItem key={item.id} item={item} showModal={showModal} />
        )
      })}
      {isModalOpen && (
        <ImageModal onClose={closeModal}>
          <img src={imgSrc} alt={alt} width='100%' height='100%' />
        </ImageModal>
      )}
    </List>
  )
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired).isRequired,
};