import React from "react";
import ReactDOM from "react-dom/client";


const Title = ()=> <h1 id="title">Namaste React</h1>

const ReactComponent = ()=>(
    <div>
        <Title/>
        <Title></Title>
        {Title()}
        {51+49}
        <p>This is a React Component</p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<ReactComponent/>)