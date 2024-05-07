import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [topRated, setTopRated] = useState(restaurants);
  function handleFilter() {
    const filteredRes = topRated.filter((res) => res.info.avgRating >= 4);
    console.log(filteredRes);
    setTopRated(filteredRes);
  }

  return (
    <div className="body">
      <div className="search"></div>
      <div className="filterContainer">
        <button className="filter" onClick={handleFilter}>
          Top-rated
        </button>
      </div>
      <div className="res-container">
        {topRated.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
