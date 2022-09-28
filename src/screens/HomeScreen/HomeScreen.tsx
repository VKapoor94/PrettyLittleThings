import React, {useEffect, useLayoutEffect} from 'react';
import {View} from 'react-native';
import {getProductsFetch} from '../../app/reducers/productState';
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import ProductsList from '../../components/ProductsList';
import HeaderRight from '../../components/HeaderRight';
function HomeScreen({navigation}: {navigation: any}) {
  const products = useAppSelector(state => state.products.products);
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart.cart);
  var cartCount =
    cart &&
    cart.reduce(function (acc, obj) {
      return acc + obj.cartQuantity;
    }, 0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight cartCount={cartCount} />,
    });
  }, [navigation, cart]);

  useEffect(() => {
    dispatch(getProductsFetch());
  }, [dispatch]);

  return (
    <View style={{flex: 1}}>
      <ProductsList from="" products={products.data} />
    </View>
  );
}

export default HomeScreen;
