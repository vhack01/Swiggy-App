import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card">
      <img src={`${CDN_URL}/${cloudinaryImageId}`} className="res-image" />
      <h2>{name}</h2>
      <h3>{cuisines}</h3>
      <h3>{avgRating} rating</h3>
      <h3>ETA : {sla.deliveryTime} min</h3>
    </div>
  );
};

export default RestaurantCard;
