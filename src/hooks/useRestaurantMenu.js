import { useEffect, useState } from "react";

const useRestaurantMenu = (restId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuList, setMenuList] = useState([]);
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
      const menu =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
          .card.itemCards;
      setRestaurant(info);
      if (menu.length > 0) {
        setMenuList(menu);
      }
    } catch (err) {
      console.log("Failed to fetch menu: ", err);
    }
  }

  return { restaurant, menuList };
};

export default useRestaurantMenu;
