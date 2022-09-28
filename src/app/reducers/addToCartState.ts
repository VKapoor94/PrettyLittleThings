import {createSlice} from '@reduxjs/toolkit';
// Define a type for the slice state
interface AddtoCartState {
  cart: Array<Object>;
  total: number;
  cartTotalAmt: number;
}

// Define the initial state using that type
const initialState: AddtoCartState = {
  cart: [],
  total: 0,
  cartTotalAmt: 0,
};

export const cartSlice = createSlice({
  name: 'addtocart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        item => item.id === action.payload.id,
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = {...action.payload, cartQuantity: 1};
        state.cart.push(tempProduct);
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        item => item.id === action.payload.id,
      );
      state.cart[itemIndex].cartQuantity -= 1;
    },
    removeFromCart: (state, action) => {
      const nextCartItem = state.cart.filter(
        item => item.id !== action.payload.id,
      );
      state.cart = nextCartItem;
    },
  },
});

export const {addtocart, decreaseQuantity, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
