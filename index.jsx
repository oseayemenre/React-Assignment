import React from "react";
import ReactDOM from "react-dom";
import Assignment from "./Assignment";
import "./index.css";

ReactDOM.render(<Assignment />, document.getElementById("root"));

if (import.meta.hot) {
  import.meta.hot.accept();
}