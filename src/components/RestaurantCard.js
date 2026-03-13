import { IMG_CDN_URL } from "../utils/constants.js";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, rating, deliveryTime, image, costForTwo } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={IMG_CDN_URL + image}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{rating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;