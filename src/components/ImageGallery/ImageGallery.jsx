import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { List } from "./ImageGallery.styled";

export const ImageGallery = ({ items }) => {
  return (
    <List>
      {items.map(item => {
        return (
          <ImageGalleryItem key={item.id} item={item}/>
        )
      })}
    </List>
  )
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired).isRequired,
};