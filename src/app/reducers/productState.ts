import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

// Define a type for the slice state
interface ProductState {
  products: Array<Object>;
  isLoading: boolean;
  error: any;
}

// Define the initial state using that type
const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: '',
};

export const productSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getProductsFetch: state => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    getProductsFailure: (state, error) => {
      state.error = error;
      state.isLoading = false;
    },
  },
});

export const {getProductsFetch, getProductsSuccess, getProductsFailure} =
  productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value;

export default productSlice.reducer;
