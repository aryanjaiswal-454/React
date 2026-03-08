import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1",{id:"heading"},"Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading)

const jsxheading = (<h1 id="heading2"> Namaste React Heading</h1>);
console.log(jsxheading)
root.render(jsxheading)
