import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      defaultRating={2}
      message={["terrible", "bad", "okay", "good", "excellant"]}
    /> */}
    <App />
  </React.StrictMode>
);
