import React from "react";

export const GifItem = ({ image }) => {
  return (
    <div>
      <h3>{image.title}</h3>
      <img src={image?.url} />
    </div>
  );
};
