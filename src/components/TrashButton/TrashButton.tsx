import React, {useState} from 'react';
import { StyleProp, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './TrashButtonStyle';
import { Feather } from '@expo/vector-icons';
interface TrashButtonStyle {
  style?: StyleProp<TouchableOpacityProps>;
}


export function TrashButton({style} : TrashButtonStyle) {
   
  return (
    <View style={styles.container}>
      <TouchableOpacity  style={style}>
          <Feather name={'trash-2'}  size={30} color={'grey'}/>
      </TouchableOpacity>
    </View>
  );
}