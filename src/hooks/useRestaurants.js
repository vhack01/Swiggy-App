import { useEffect, useState } from "react";
import { RESTAURANT_API, RESTAURANT_API2 } from "../utils/constants";
const useRestaurantsData = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      // RESTAURANT_API ||
      const res = await fetch(RESTAURANT_API2);
      const jsonData = await res.json();
      const restaurantList =
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
    } catch (err) {
      console.log("Failed to fetch restaurant detail:", err);
    }
  }
  return {
    restInfo: { restaurants, setRestaurants },
    restFilter: { filteredRestaurants, setFilteredRestaurants },
  };
};

export default useRestaurantsData;
