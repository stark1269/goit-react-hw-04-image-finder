import { Item } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ item: { largeImageURL, webformatURL, tags }, showModal }) => {
  return (
    <Item onClick={() => showModal(largeImageURL, tags)}>
      <img loading="lazy" src={webformatURL} alt={tags} width='100%' height='100%' />
    </Item>
  )
};

ImageGalleryItem.propTypes = {
  showModal: PropTypes.func.isRequired,
  item: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};