import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../utils/constants";
const useRestaurantsData = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch(RESTAURANT_API);
      const jsonData = await res.json();
      console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements);
      const restaurantLists =
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurants(restaurantLists);
      setFilteredRestaurants(restaurantLists);
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
