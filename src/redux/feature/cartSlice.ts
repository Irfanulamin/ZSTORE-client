import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [] as any[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      const existingItemIndex = state.cart.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCartById: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        if (state.cart[index].quantity > 0) {
          state.cart[index].quantity -= 1;
        }
        if (state.cart[index].quantity === 0) {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    incrementQuantity: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cart[index].quantity += 1; // Increment the quantity by 1
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCartById, clearCart, incrementQuantity } =
  cartSlice.actions;
