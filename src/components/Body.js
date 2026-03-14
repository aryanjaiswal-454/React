import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    console.log("Body rendered")

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (!filteredRestaurants || filteredRestaurants.length === 0) ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}/>
                    <button
                        className="search-btn"
                        onClick={() => {
                            const filteredRestraunts = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                            if (filteredRestraunts.length === 0) {
                                alert("No restraunt found")
                            }
                            else setFilteredRestaurants(filteredRestraunts);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={
                        () => {
                            // filter logic
                            const filteredResList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                            setListOfRestaurants(filteredResList);
                        }
                    }
                >
                    Top-rated restraunts
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div >
    )
}

export default Body;