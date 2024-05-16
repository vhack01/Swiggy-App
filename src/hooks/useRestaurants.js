import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../utils/constants";
const useRestaurantsData = () => {
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
  return {
    restInfo: { restaurants, setRestaurants },
    restFilter: { filteredRestaurants, setFilteredRestaurants },
  };
};

export default useRestaurantsData;
