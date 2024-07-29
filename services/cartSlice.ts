import { createSlice } from "@reduxjs/toolkit";

interface cartType{
    id:Number;
    title:String;
    price:String;
    image:String;
    quantiy:Number=1;

}
export const CartSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    increaseByAmount: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement, reset, increaseByAmount } =
  CartSlice.actions;
export default CartSlice.reducer;