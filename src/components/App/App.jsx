import { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  const onSearch = (searchValue) => {
    console.log(searchValue);
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
