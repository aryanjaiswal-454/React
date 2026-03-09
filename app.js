import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://imgs.search.brave.com/emGzckWo2-atZnney5SFe6t7F2zsIEmTLcLFkbVkGfY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20venVraXVraS96/dWtpdWtpMTgwNS96/dWtpdWtpMTgwNTAx/NzQyLzEwMTc1MTEx/NC12ZWN0b3ItZGVz/aWduLWNvb2tpbmct/bG9nby1mb29kLXBp/Y3RvZ3JhbS1jb29r/aW5nLWFic3RyYWN0/LWljb24uanBnP3Zl/cj02" />  
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}
const RestaurantCard = ()=>{
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/8/431e7530-c1d2-46ff-911c-d8013b721041_1052897.jpg"/>
            <h3>Meghana Foods</h3>
            <h4>Pizza, North Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div className = "app">
            <Header /> 
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)

