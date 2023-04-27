import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchApi } from "api/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Header } from "./Header/Header.styled";

export class App extends Component {
  state = {
    images: [],
    search: '',
    page: 1,
    isLoading: false,
    noImage: false,
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.getImages(search, page);
    };
  };

  getImages = async (name, page) => {
    this.setState({ isLoading: true });
    
    try {
      const images = await fetchApi(name, page);
      if (!images.length) {
        this.setState({ noImage: true });
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }))

    } catch (error) {
      console.log(error.message)
    } finally {
      this.setState({ isLoading: false });
    };
  };

  onSubmit = ({name}) => {
    if (name.trim()) {
      this.setState({
        search: name,
        images: [],
        page: 1,
        isLoading: false,
        noImage: false,
      })
    };
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, page, isLoading, noImage } = this.state;

    return (
      <>
        <Header><Searchbar onSubmit={this.onSubmit} /></Header>
        {noImage ?
          <h2 style={{ marginTop: '48px', textAlign: 'center', color: 'red', fontSize: '48px' }}>NO IMAGES</h2>
          : <ImageGallery items={images} />}
        {isLoading && <Loader/>}
        {(images.length / 12) >= page && !isLoading && <Button loadMore={this.loadMore}/>}
      </>
    )
  };
};