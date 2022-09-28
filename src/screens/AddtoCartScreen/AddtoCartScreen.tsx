import React from 'react';
import {Text, View} from 'react-native';
import {useAppSelector} from '../../app/hooks';
import ProductsList from '../../components/ProductsList';

function AddtoCartScreen() {
  const cart = useAppSelector(state => state.cart.cart);
  return (
    <View style={{flex: 1}}>
      {cart.length > 0 ? (
        <ProductsList from={'AddtoCart'} products={cart} />
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, color: '#873e23'}}>
            No Cart Items Found
          </Text>
        </View>
      )}
    </View>
  );
}

export default AddtoCartScreen;
