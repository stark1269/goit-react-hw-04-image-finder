import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';

export const ImageGallery = ({items}) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <ImageGalleryItem key={item.id} item={item} />
        )
      })}
    </ul>
  )
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired).isRequired,
};