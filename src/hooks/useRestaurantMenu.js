import { useEffect, useState } from "react";

const useRestaurantMenu = (restId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuCategory, setMenuCategory] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.22810&lng=75.77870&restaurantId=${restId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
      );
      const json = await res.json();
      const info = json?.data?.cards[2]?.card?.card?.info;
      const menuCategory =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
          (item) =>
            item?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            item?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );

      setRestaurant(info);
      setMenuCategory(menuCategory);
    } catch (err) {
      console.log("Failed to fetch menu: ", err);
    }
  }

  return { restaurant, menuCategory };
};

export default useRestaurantMenu;
