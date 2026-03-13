import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import resList from "../utils/mockData.js";



const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={
                        ()=>{
                            // filter logic
                            const filteredResList = listOfRestaurants.filter((res) => res.rating > 4);
                            setListOfRestaurants(filteredResList);
                        }
                    }
                >
                Top-rated restraunts
                </button>
            </div>
            <div className="search">Search</div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;