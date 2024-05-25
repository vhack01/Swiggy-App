const withDiscount = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="w-1/2 px-2 py-1 absolute top-2 bg-red-600 text-white text-sm font-semibold">
          {props.resData.info.aggregatedDiscountInfoV3.header}{" "}
          {props.resData.info.aggregatedDiscountInfoV3.subHeader}
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default withDiscount;
