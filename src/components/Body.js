import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import resList from "../utils/mockData.js";



const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    }, [])
    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    if(listOfRestaurants.length === 0){
        return <h1>Loading...</h1>
    }
    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={
                        ()=>{
                            // filter logic
                            const filteredResList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
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
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;