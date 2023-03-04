import React, { useEffect, useState } from "react";
import { GifItem } from "./GifItem";

import "./GifGrid.css";

const getGifs = async (category, setImage) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=fqLHp3DpsBWEpmXsS5I6Z0z45Mby23mb&q=${category}&limit=25&offset=0&rating=g&lang=en`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  setImage(gifs);
};

export const GifGrid = ({ category }) => {
  const [image, setImage] = useState();
  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    getGifs(category, setImage);
  };

  return (
    <div>
      <div className="CategoriesSection">
        {image?.map((image) => (
          <GifItem key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};
