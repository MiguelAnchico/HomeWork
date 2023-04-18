import React from "react";
import ReactDOM from "react-dom/client";
import { GiftExpertApp } from "./GiftExpertApp";

import "./index.css";
import { MultipleCustomHooks } from "./components/MultipleCustomHooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>
);
