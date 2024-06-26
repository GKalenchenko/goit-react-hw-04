import { useEffect, useState } from "react";
import "./App.css";
import { getImages } from "../../image-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [pages, setPages] = useState(1);
  const [error, setError] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadMore = async () => setPages(pages + 1);

  const onSearch = async (searchValue) => {
    setImages([]);
    setPages(1);
    setSearchQuery(searchValue);
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }

    async function getData() {
      try {
        setIsLoading(true);
        const data = await getImages(searchQuery, pages);
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [searchQuery, pages]);

  const modalOpen = (img) => {
    setCurrentImage(img);
    setIsModalOpen(true);
  };
  const modalClose = () => {
    setCurrentImage("");
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={onSearch} />
      <Toaster
        containerStyle={{
          position: "relative",
        }}
      />
      {error && <ErrorMessage />}
      <ImageGallery data={images} modalOpen={modalOpen} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onAction={loadMore} />}

      <ImageModal
        modalIsOpen={isModalOpen}
        modalClose={modalClose}
        currentImage={currentImage}
      />
    </>
  );
}

export default App;

{
  /* 
<LoadMoreBtn/>
<SearchBar/>
<ImageGallery>
      <ImageCard/>
<ImageGallery/>
<Loader/>
<ErrorMessage/>
<ImageModal/> */
}
