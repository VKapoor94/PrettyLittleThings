import React from 'react';
import {Dimensions, TouchableHighlight, Text} from 'react-native';

function CircleComponent({color}: {color: string}) {
  return (
    <TouchableHighlight
      style={{
        borderRadius:
          Math.round(
            Dimensions.get('window').width + Dimensions.get('window').height,
          ) / 2,
        width: Dimensions.get('window').width * 0.09,
        height: Dimensions.get('window').width * 0.09,
        backgroundColor: color === 'Stone' ? '#B7B09C' : color.toLowerCase(),
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
      }}
      underlayColor="#ccc">
      <Text> </Text>
    </TouchableHighlight>
  );
}

export default CircleComponent;
