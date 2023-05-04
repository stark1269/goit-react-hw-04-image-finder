import PropTypes from 'prop-types';
import { Item } from "./ImageGalleryItem.styled";
import { useState } from "react";
import { ImageModal } from "components/Modal/Modal";

export const ImageGalleryItem = ({ item: { largeImageURL, webformatURL, tags } }) => {
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
    <>
      <Item onClick={() => showModal(largeImageURL, tags)}>
        <img loading="lazy" src={webformatURL} alt={tags} width='100%' height='100%' />
      </Item>
      {isModalOpen && (
        <ImageModal onClose={closeModal}>
          <img src={imgSrc} alt={alt} width='100%' height='100%' />
        </ImageModal>
      )}
    </>
  )
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};