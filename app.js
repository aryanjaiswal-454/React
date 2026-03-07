import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child", key: "child1" },
      [
        React.createElement("h1", { key: "h1" }, "I am a h1 tag"),
        React.createElement("h2", { key: "h2" }, "yxskjdckvjceh")
      ]
    ),
    React.createElement(
      "div",
      { id: "child2", key: "child2" },
      [
        React.createElement("h1", { key: "h1-2" }, "I am a h1 tag"),
        React.createElement("h2", { key: "h2-2" }, "I am a h2 tag")
      ]
    )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);