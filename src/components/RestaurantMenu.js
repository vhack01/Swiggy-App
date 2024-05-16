import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL, CDN_MENU } from "../utils/constants";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const { restaurant, menuList } = useRestaurantMenu(restId);

  return restaurant === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu-container">
        <h1>{restaurant.name}</h1>
        <img
          src={`${CDN_URL}/${restaurant?.cloudinaryImageId}`}
          className="res-menu-image"
        />
        <div className="">
          <div className="menu-rating">{restaurant?.avgRating}</div>
          <div className="costForTwo">{restaurant?.costForTwoMessage}</div>
          <div className="deliverTime">{restaurant?.sla?.slaString}</div>
          <div className="cusinies">{restaurant?.cuisines?.join(", ")}</div>
        </div>
        <div className="menu-list">
          <ul>
            {menuList.length === 0 ? (
              <h1>No menu available</h1>
            ) : (
              menuList.map((menu) => (
                <li key={menu?.card?.info?.id}>
                  <div>
                    <h2>{menu?.card?.info?.category}</h2>
                    <img
                      src={`${CDN_MENU}/${menu?.card?.info?.imageId}`}
                      alt="menu-image"
                    />
                    <div>{menu?.card?.info?.name}</div>
                    <div>{menu?.card?.info?.price / 100}</div>
                    <div>
                      {menu?.card?.info?.ratings?.aggregatedRating?.rating}
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
