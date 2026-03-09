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
const RestaurantCard = (props)=>{
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src={props.logo} />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.stars} stars</h4>
            <h4>{props.deliveryTime}</h4>
        </div>
    )
}
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                    resName="Meghana Foods" 
                    cuisine="Pizza, North Indian, Asian"
                    stars="4.4"
                    deliveryTime="38 minutes"
                    logo="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/8/431e7530-c1d2-46ff-911c-d8013b721041_1052897.jpg"
                />
                <RestaurantCard 
                    resName="KFC" 
                    cuisine="Burgers, Fast Food"
                    stars="4.2"
                    deliveryTime="51 minutes"
                    logo="https://imgs.search.brave.com/ap7jF-2e5-vlX1dlqv-UaCKVZJrspTZvcUeEF_PS1is/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/a2ZjLXN1aXNzZS5j/aC9maWxlYWRtaW4v/X3Byb2Nlc3NlZF8v/ZC85L2NzbV96aW5n/ZXJfZHVua2VkX2J1/cmdlcl9idW5kbGVf/ZHVua2VkX2hvdHdp/bmdzX2YxMTQyY2Jl/YjMucG5n"
                />
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

