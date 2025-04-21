import React, {useState} from 'react';
import { TouchableOpacity, View, TouchableOpacityProps, StyleProp } from 'react-native';

import { styles } from './LikedButtonStyle';

import { Entypo } from '@expo/vector-icons';

interface LikedButtonStyle {
  style?: StyleProp<TouchableOpacityProps>;
}

export function LikedButton({style} : TouchableOpacityProps) {

  const [isLiked, setIsLiked] = useState('heart-outlined')

  function handleLikedButton() {
    if(isLiked === 'heart-outlined'){
      setIsLiked('heart');
    } if (isLiked === 'heart') {
      setIsLiked('heart-outlined');
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLikedButton} style={style}>
          <Entypo name={isLiked}  size={30} color={'#FF007F'}/>
      </TouchableOpacity>
    </View>
  );
}