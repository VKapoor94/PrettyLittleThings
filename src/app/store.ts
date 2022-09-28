import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './reducers/productState';
import cartReducer from './reducers/addToCartState';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga/saga';
const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: [saga],
});
saga.run(mySaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
