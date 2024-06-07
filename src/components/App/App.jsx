import { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../image-api";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const onSearch = (searchValue) => {
    setSearchQuery(searchValue);
    getImages(searchQuery); // Fix it, doesn't work due to asynchronous state update
  };

  return (
    <>
      <SearchBar onSubmit={onSearch} />
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
