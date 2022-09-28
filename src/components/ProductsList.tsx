import React from 'react';
import {FlatList, View, Text, Image, Button, Alert} from 'react-native';
import styles from '../screens/HomeScreen/HomeScreen.styles';
import CircleComponent from './CircleComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {
  addtocart,
  decreaseQuantity,
  removeFromCart,
} from '../app/reducers/addToCartState';
import NumericInput from 'react-native-numeric-input';

interface ProductListInterface {
  products: Array<Object>;
  from: string;
}

interface ProductItemInterface {
  item: Object;
}
function ProductsList({products, from}: ProductListInterface) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart.cart);
  const isAddtoCart = from === 'AddtoCart';
  function ProductsItem({item}: ProductItemInterface) {
    const addToCart = item => {
      dispatch(addtocart(item));
    };

    const index = cart.findIndex(recItem => recItem.id === item.id);
    const onChangeQuantity = value => {
      if (value === 0) {
        dispatch(removeFromCart(item));
      } else if (cart[index].cartQuantity <= value) {
        dispatch(addtocart(item));
      } else {
        dispatch(decreaseQuantity(item));
      }
    };

    return (
      <View style={styles.item}>
        <View>
          <Image
            resizeMode="contain"
            style={styles.tinyLogo}
            source={{
              uri: item.img,
            }}
          />
        </View>
        <View style={{maxWidth: '80%', marginLeft: 7}}>
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.text}>
            {item.name}
          </Text>
          <Text style={styles.price}>
            {'price '}
            {'$'} {item.price.toFixed(0)}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 5,
              paddingRight: 5,
            }}>
            {!isAddtoCart ? (
              <CircleComponent color={item.colour} />
            ) : (
              <View style={{marginVertical: 7}}>
                <Icon
                  name="delete-outline"
                  color={'red'}
                  size={30}
                  onPress={() => dispatch(removeFromCart(item))}
                />
              </View>
            )}
            {index !== -1 ? (
              <NumericInput
                value={cart[index].cartQuantity}
                minValue={0}
                maxValue={100}
                type="plus-minus"
                step={1}
                totalWidth={100}
                totalHeight={40}
                iconSize={16}
                editable={false}
                textColor="#873e23"
                iconStyle={{color: 'white'}}
                rightButtonBackgroundColor="green"
                leftButtonBackgroundColor={
                  cart[index].cartQuantity === 1 ? 'red' : 'green'
                }
                onChange={value => onChangeQuantity(value)}
              />
            ) : (
              <Icon
                onPress={() => addToCart(item)}
                name="add-shopping-cart"
                size={30}
                color="#873e23"
              />
            )}
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={products && products}
        renderItem={ProductsItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{flexGrow: 1}}
        ListFooterComponent={
          isAddtoCart && (
            <View
              style={{
                margin: 10,
                backgroundColor: '#fff',
                borderRadius: 20,
              }}>
              <Button
                title="Checkout"
                color={'green'}
                onPress={() => Alert.alert('Checkout')}
              />
            </View>
          )
        }
        ListFooterComponentStyle={{
          backgroundColor: '#ccc',
          position: 'absolute',
          width: '100%',
          bottom: 0,
        }}
      />
    </View>
  );
}

export default ProductsList;
