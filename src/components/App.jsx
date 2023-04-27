import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchApi } from "api/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    total: 1,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.getImages(search, page);
    };
  };

  getImages = async (name, page) => {
    try {
      const images = await fetchApi(name, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...images.hits],
        page: prevState.page,
        total: images.total,
      }))
    } catch (error) {
      console.log(error.message)
    };
  };

  onSubmit = ({name}) => {
    if (name.trim()) {
      this.setState({
        search: name,
        images: [],
        page: 1,
      })
    };
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, total, page } = this.state;

    return (
      <>
      <header><Searchbar onSubmit={this.onSubmit} /></header>
        <ImageGallery items={images} />
        {(total / 12) > page && <Button loadMore={this.loadMore}/>}
      </>
    )
  };
};