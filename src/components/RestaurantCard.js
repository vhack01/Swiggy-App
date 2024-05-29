import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ tag, resData }) => {
  const {
    id: restId,
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
    costForTwo,
  } = resData?.info;
  function handleRestaurantNavigation(restId) {}

  return (
    <div
      className="w-100 sm:w-80 flex flex-col items-center gap-y-2 text-sm bg-gray-100 rounded overflow-hidden mt-6 p-2 border-2 border-white hover:border-2"
      onClick={() => handleRestaurantNavigation(restId)}
    >
      <img
        src={`${CDN_URL}/${cloudinaryImageId}`}
        className="rounded h-[14rem] object-cover"
      />
      <div className="text-lg font-semibold">{name}</div>
      <h3 className="text-xs">{cuisines.join(", ")}</h3>
      <h3 className="font-medium">{costForTwo}</h3>
      <div className="flex items-center gap-x-4 justify-between font-medium">
        <h3
          className={`${avgRating >= 4.0 ? "text-green-500" : "text-red-400"}`}
        >
          {avgRating} rating
        </h3>
        <h3 className="font-normal text-xs">
          Delivery in : {sla.deliveryTime} min
        </h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
