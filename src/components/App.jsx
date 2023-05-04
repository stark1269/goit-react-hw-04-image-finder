import { useEffect, useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchApi } from "api/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Header } from "./Header/Header.styled";

export const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [noImage, setNoImage] = useState(false);

  useEffect(() => {
    if (!search) {
      return
    }

    getImages(search, page);
  }, [search, page]);

async function getImages(name, page) {
  setIsLoading(true);
    
    try {
      const images = await fetchApi(name, page);
      if (!images.length) {
        setNoImage(true);
      };

      setImages(state => page === 1 ? images : [...state, ...images]);

    } catch (error) {
      console.log(error.message)
    } finally {
      setIsLoading(false);
  };
  };

  const onSubmit = ({ name }) => {
    if (name.trim()) {
      setImages([]);
      setSearch(name);
      setPage(1);
      setIsLoading(false);
      setNoImage(false);
    };
  };

  const loadMore = () => {
    setPage(state => state + 1)
  };

  return (
    <>
      <Header><Searchbar onSubmit={onSubmit} /></Header>
      {noImage ?
        <h2 style={{ marginTop: '48px', textAlign: 'center', color: 'red', fontSize: '48px' }}>NO IMAGES</h2>
        : <ImageGallery items={images} />}
      {isLoading && <Loader />}
      {(images.length / 12) >= page && !isLoading && <Button loadMore={loadMore} />}
    </>
  )
};