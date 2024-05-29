import { useDispatch, useSelector } from "react-redux";
import { CDN_MENU, DEFAULT_IMAGE_URL } from "../utils/constants";
import { addItem } from "../store/slices/cartSlice";
import isItemExist from "../utils/isItemExist";
import { toast } from "react-toastify";

const MenuItemCard = ({ menuData }) => {
  const { name, price, ratings, category, imageId, description, defaultPrice } =
    menuData?.card?.info;
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);
  // console.log("cartItems:", cartItems);
  const handleAddItem = (item) => {
    if (!isItemExist(cartItems, item?.card?.info?.id)) dispatch(addItem(item));
    else {
      toast.warn("Already added !!", {
        theme: "colored",
      });
      console.log("already added");
    }
  };

  return (
    <div className="w-80 sm:w-80 text-sm bg-gray-0 rounded-md overflow-hidden mt-6 p-4 border border-gray-50 hover:border-gray-400 font-montserrat flex flex-col justify-between">
      <div className="flex flex-col gap-y-2">
        <img
          src={imageId ? `${CDN_MENU}/${imageId}` : `${DEFAULT_IMAGE_URL}`}
          className="h-[14rem] object-cover rounded-md"
        />
        <div className="flex justify-between items-start text-base font-bold text-gray-700">
          <span className="">{name}</span>
          <span>₹{price / 100 || defaultPrice / 100}</span>
        </div>
        <h3 className="text-xs font-semibold text-gray-700">
          Category : {category}
        </h3>
        <div
          className={`flex items-center gap-x-4 justify-between text-green-500 font-semibold`}
        >
          ⭐ {ratings?.aggregatedRating?.rating} (
          {ratings?.aggregatedRating?.ratingCountV2})
        </div>
        <h3 className="text-xs text-gray-500">{description}</h3>
      </div>
      <button
        className="bg-green-100 text-green-500 border-2 border-green-400 font-bold p-3 rounded mt-2 cursor-pointer"
        onClick={() => handleAddItem(menuData)}
      >
        ADD
      </button>
    </div>
  );
};

export default MenuItemCard;
