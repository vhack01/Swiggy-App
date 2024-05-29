import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addItem: (state, action) => {
      action.payload.card.info["count"] = 1;
      state.count++;
      state.items.push(action.payload);
    },
    increaseCount: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex(
        (item) => item?.card?.info?.id === id
      );
      state.count++;
      state.items[index].card.info.count++;
    },
    decreaseCount: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex(
        (item) => item?.card?.info?.id === id
      );
      if (state.items[index].card.info.count > 0) {
        state.items[index].card.info.count--;
        state.count--;
      }
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.count = 0;
    },
  },
});

export const { addItem, removeItem, clearCart, increaseCount, decreaseCount } =
  cartSlice.actions;
export default cartSlice.reducer;
