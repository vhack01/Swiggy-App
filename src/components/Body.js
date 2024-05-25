import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import useRestaurantsData from "../hooks/useRestaurants";
import withDiscount from "../utils/withDiscount";

const Body = () => {
  const { restInfo, restFilter } = useRestaurantsData();
  const { restaurants, setRestaurants } = restInfo;
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
    <div className="p-4 mt-10">
      <div className="search"></div>
      <div className="flex justify-end gap-x-5">
        <SearchBar fn={handleSearch} />
        <button
          className="rounded py-1 px-2 bg-gray-200 hover:bg-gray-300 cursor-pointer"
          onClick={handleFilterTopRestaurant}
        >
          Top-rated
        </button>
      </div>
      <div className="flex justify-center gap-4 flex-wrap ">
        {filteredRestaurants?.length ? (
          filteredRestaurants.map((restaurant) => (
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
