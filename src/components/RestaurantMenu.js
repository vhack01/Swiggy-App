import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL, DEFAULT_IMAGE_URL } from "../utils/constants";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import MenuItemCard from "./MenuItemCard";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const { restaurant, menuList } = useRestaurantMenu(restId);
  // console.log("single restaurant:", restaurant);
  console.log("single restaurant menu:", menuList);
  if (restaurant === null) return <Shimmer />;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    costForTwoMessage,
    sla,
    totalRatingsString,
  } = restaurant;

  return (
    <>
      <div className="w-full lg:w-3/4 md:w-[90%] sm:w-[100%] m-auto mt-4 rounded-lg p-4 font-montserrat">
        <div className="p-2 sm:p-3 rounded bg-gray-100 flex flex-col justify-start items-center gap-y-2 sm:flex-row sm:gap-x-8 sm:items-start shadow-customShadow">
          <section className="flex justify-center">
            <img
              src={`${CDN_URL}/${cloudinaryImageId}`}
              className="h-[14rem] rounded object-contain"
            />
          </section>
          <section className="flex flex-col items-center sm:items-start gap-y-2">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-700 ">
              {name}
            </div>
            <div className="text-xs">{cuisines?.join(", ")}</div>
            <section className="flex gap-x-4 mt-4">
              <div className="text-xs flex flex-col justify-center gap-y-2 border-r border-gray-300 p-1">
                <span>⭐ {avgRating}</span>
                <span>{totalRatingsString}</span>
              </div>
              <div className="text-xs flex flex-col justify-center gap-y-2 border-r border-gray-300 p-1">
                <span>{sla?.slaString}</span>
                <span>Delivery time</span>
              </div>
              <div className="text-xs flex flex-col justify-center gap-y-2">
                <span>{Number(costForTwo) / 100}</span>
                <span>{costForTwoMessage}</span>
              </div>
            </section>
          </section>
        </div>
        <div className="menu-list">
          <ul className="flex justify-start flex-wrap gap-x-4">
            {menuList.length === 0 ? (
              <h1>No menu available</h1>
            ) : (
              menuList.map((menu) => (
                <MenuItemCard key={menu?.card?.info?.id} menuData={menu} />
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
