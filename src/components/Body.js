import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import useRestaurantsData from "../hooks/useRestaurants";

const Body = () => {
  const { restInfo, restFilter } = useRestaurantsData();
  const { restaurants, setRestaurants } = restInfo;
  const { filteredRestaurants, setFilteredRestaurants } = restFilter;
  console.log("body rendered", restaurants);

  function handleFilterTopRestaurant() {
    const filteredRes = restaurants.filter((res) => res.info.avgRating >= 4.5);
    setFilteredRestaurants(filteredRes);
  }

  function handleSearch(value) {
    console.log(restaurants);
    value = value.trim();
    const searchedList = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRestaurants(searchedList);
  }

  return (
    <div className="body">
      <div className="search"></div>
      <div className="filterContainer">
        <SearchBar fn={handleSearch} />
        <button className="filter" onClick={handleFilterTopRestaurant}>
          Top-rated
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.length ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
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
