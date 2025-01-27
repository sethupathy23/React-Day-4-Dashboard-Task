import React, { useState } from "react";
import "./imagegen.css";
import { useNavigate } from "react-router-dom";

const Imagegen = () => {
  const navigate = useNavigate();
  const accessKey = "8IF3DB6yiujar0KOFdm7ZhD6OB4dtxbePw1MupwTiY8";

  const [keyword, setKeyword] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showMoreVisible, setShowMoreVisible] = useState(false);

  const searchImages = async (newSearch = false) => {
    if (newSearch) {
      setPage(1);
      setImages([]);
    }

    const url = `https://api.unsplash.com/search/photos?page=${
      newSearch ? 1 : page
    }&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const newImages = data.results.map((result) => ({
      id: result.id,
      imageUrl: result.urls.small,
      linkUrl: result.links.html,
    }));

    setImages((prevImages) =>
      newSearch ? newImages : [...prevImages, ...newImages]
    );
    setShowMoreVisible(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchImages(true);
  };

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1);
    searchImages();
  };

  return (
    <div className="app">
      <h1>Image Search Engine</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search anything here..."
          className="search-box"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="search-result">
        {images.map((image) => (
          <a
            key={image.id}
            href={image.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image.imageUrl} alt="search result" />
          </a>
        ))}
      </div>
      {showMoreVisible && (
        <button onClick={handleShowMore} className="show-more-btn">
          Show More
        </button>
      )}
      <button onClick={() => navigate("/home")} className="show-more-btn">
        Home
      </button>
    </div>
  );
};

export default Imagegen;
