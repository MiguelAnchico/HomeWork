import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Zodiac"]);

  const onAddCategory = (category) => {
    setCategories((list) => [...list, category]);
  };

  return (
    <div>
      <h1>GifExpert</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {
        <ol>
          {categories?.map((category, index) => (
            <GifGrid category={category} key={index} />
          ))}
        </ol>
      }
    </div>
  );
};
