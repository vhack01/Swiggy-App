import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(RESTAURANT_API);
    const jsonData = await res.json();
    const restaurantLists =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurants(restaurantLists);
    setFilteredRestaurants(restaurantLists);
  }

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
        {filteredRestaurants.length ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
