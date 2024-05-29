import { BiCaretUpCircle, BiSolidStar, BiTrash } from "react-icons/bi";
import { CDN_MENU, DEFAULT_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "../store/slices/cartSlice";

const CartItemCard = ({ item }) => {
  if (item === undefined) return;

  const {
    id,
    name,
    price,
    ratings,
    category,
    imageId,
    description,
    defaultPrice,
    isVeg,
    count,
  } = item?.card?.info;

  const dispatch = useDispatch();

  const handleIncreaseCount = (id) => {
    dispatch(increaseCount(id));
  };
  const handleDecreaseCount = (id) => {
    dispatch(decreaseCount(id));
  };

  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between gap-y-2 p-2 border-2 font-montserrat rounded">
      <div className="flex flex-col items-center sm:flex-row gap-x-6">
        <img
          src={imageId ? `${CDN_MENU}/${imageId}` : `${DEFAULT_IMAGE_URL}`}
          className="h-[8rem] w-32 object-cover rounded-md"
        />
        <div className="flex flex-col gap-y-1">
          <div className="flex gap-x-2 items-center">
            <h1 className="text-base font-bold">{name || ""}</h1>
            <BiCaretUpCircle
              className={`${isVeg === 1 ? "text-green-500" : "text-red-500"}`}
            />
          </div>
          <h1 className="text-sm font-semibold">
            ₹ {price / 100 || defaultPrice / 100}
          </h1>
          <div className="flex gap-x-2 items-center text-sm text-green-700 font-medium">
            <BiSolidStar className="" />
            <span>
              {ratings?.aggregatedRating?.rating} (
              {ratings?.aggregatedRating?.ratingCountV2})
            </span>
          </div>
          <p className="w-56 sm:w-80 md:w-96 overflow-hidden whitespace-nowrap text-ellipsis text-sm">
            {description}
          </p>
        </div>
      </div>
      <div className="flex gap-x-10 items-start ml-10">
        <div className="flex gap-x-2 items-center">
          <button
            className="border px-2 m-0 rounded border-green-500 font-semibold text-green-500 cursor-pointer text-base hover:bg-green-100"
            onClick={() => handleDecreaseCount(id)}
          >
            -
          </button>
          <span className="border px-2 m-0 rounded border-green-500 font-semibold text-green-500 cursor-pointer text-base">
            {count}
          </span>
          <button
            className="border px-2 m-0 rounded border-green-500 font-semibold text-green-500 cursor-pointer text-base hover:bg-green-100"
            onClick={() => handleIncreaseCount(id)}
          >
            +
          </button>
        </div>
        <div>
          <button className="border p-1 m-0 rounded border-red-500 font-semibold text-red-500 cursor-pointer text-base hover:bg-red-100">
            <BiTrash />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItemCard;
