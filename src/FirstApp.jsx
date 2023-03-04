import { useState } from "react";

export const FirstApp = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const addCategory = () => {
    setCategories([...categories, category]);
    setCategory("");
  };

  return (
    <div>
      <h1>New Category</h1>
      <input
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        type="text"
      />
      <button onClick={addCategory}>Add Category</button>

      <h2>Categories</h2>
      <ol>
        {categories?.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ol>
    </div>
  );
};
