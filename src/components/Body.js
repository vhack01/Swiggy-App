import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import useRestaurantsData from "../hooks/useRestaurants";
import withDiscount from "../utils/withDiscount";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  const data = useContext(UserContext);
  const { restInfo, restFilter } = useRestaurantsData();
  const { restaurants } = restInfo;
  const { filteredRestaurants, setFilteredRestaurants } = restFilter;
  const RestaurantCardDiscount = withDiscount(RestaurantCard);

  function handleFilterTopRestaurant() {
    const filteredRes = restaurants.filter((res) => res.info.avgRating >= 4.5);
    setFilteredRestaurants(filteredRes);
  }

  function handleSearch(value) {
    value = value.trim();
    const searchedList = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRestaurants(searchedList);
  }

  return (
    <div className="p-4">
      <div className="search"></div>
      <div className="flex justify-end gap-x-5">
        <div>
          <input
            type="text"
            placeholder="Type here..."
            className="border-2 p-1 rounded"
            onChange={(e) => data.setName(e.target.value)}
          />
        </div>
        <SearchBar fn={handleSearch} />
        <button
          className="rounded py-1 px-2 bg-gray-200 hover:bg-gray-300 cursor-pointer"
          onClick={handleFilterTopRestaurant}
        >
          Top-rated
        </button>
      </div>
      <div className="flex justify-center gap-4 flex-wrap ">
        {filteredRestaurants !== undefined &&
        filteredRestaurants?.length !== 0 ? (
          filteredRestaurants?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                <RestaurantCardDiscount resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
