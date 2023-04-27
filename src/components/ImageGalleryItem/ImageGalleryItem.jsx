import { Component } from "react";

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  render() {
    const { item: { webformatURL, tags } } = this.props;

    return (
      <li>
      <img loading="lazy" src={webformatURL} alt={tags} />
      </li>
    )
  }
};