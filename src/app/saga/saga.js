import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import fetchProductsCall from '../api/Apicall';
import {getProductsFailure, getProductsSuccess} from '../reducers/productState';

function* fetchProducts() {
  try {
    const products = yield call(() => fetchProductsCall());
    yield put(getProductsSuccess(products));
  } catch (e) {
    yield put(getProductsFailure(e));
  }
}

function* mySaga() {
  yield takeLatest('products/getProductsFetch', fetchProducts);
}

export default mySaga;
