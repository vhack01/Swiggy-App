import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import MenuItemCard from "./MenuItemCard";

const MenuCategory = ({ card, accord, handleAccord }) => {
  return (
    <div className="w-full mb-2 bg-gray-100 my-1 rounded">
      <div
        className="flex justify-between p-2 items-center cursor-pointer"
        onClick={handleAccord}
      >
        <h1 className="font-semibold text-xs">
          {card?.title} ({card.itemCards.length})
        </h1>
        <div>{accord ? <BiChevronUp /> : <BiChevronDown />}</div>
      </div>
      <div className="flex gap-2 flex-wrap">
        {accord &&
          card?.itemCards.map((card) => (
            <MenuItemCard key={card?.card?.info?.id} menuData={card} />
          ))}
      </div>
    </div>
  );
};

export default MenuCategory;
