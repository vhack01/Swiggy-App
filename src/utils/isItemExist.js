const isItemExist = (items, id) => {
  const isExist = items.filter((item) => item?.card?.info?.id === id);

  return isExist.length === 0 ? false : true;
};

export default isItemExist;
