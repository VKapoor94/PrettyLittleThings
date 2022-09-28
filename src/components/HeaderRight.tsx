import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

function HeaderRight({cartCount}) {
  const navigation = useNavigation();

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('AddtoCartScreen')}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="shoppingcart" color={'#873e23'} size={30} />
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: 8,
            }}>
            {cartCount}
          </Text>
          {cartCount > 0 ? (
            <View
              style={{
                position: 'absolute',
                backgroundColor: 'green',
                width: 16,
                height: 16,
                borderRadius: 16 / 2,
                right: 0,
                top: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: 8,
                }}>
                {cartCount}
              </Text>
            </View>
          ) : null}
          <View></View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default HeaderRight;
