import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../image-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [pages, setPages] = useState(1);
  const [error, setError] = useState(false);

  const onSearch = (searchValue) => setSearchQuery(searchValue);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }

    async function getData() {
      try {
        setIsLoading(true);
        const data = await getImages(searchQuery);

        setImages((prevImages) => [...prevImages, ...data]);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSubmit={onSearch} />
      <ImageGallery data={images} />
      {isLoading && <Loader />}
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
