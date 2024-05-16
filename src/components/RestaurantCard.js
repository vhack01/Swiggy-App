import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const {
    id: restId,
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
  } = resData?.info;

  function handleRestaurantNavigation(restId) {
    console.log("restaurant id:", restId);
  }

  return (
    <div
      className="res-card"
      onClick={() => handleRestaurantNavigation(restId)}
    >
      <img src={`${CDN_URL}/${cloudinaryImageId}`} className="res-image" />
      <h2>{name}</h2>
      <h3>{cuisines}</h3>
      <h3>{avgRating} rating</h3>
      <h3>ETA : {sla.deliveryTime} min</h3>
    </div>
  );
};

export default RestaurantCard;
