import React from 'react';
import { TouchableOpacity, View, TouchableOpacityProps, StyleProp } from 'react-native';
import { styles } from './LikedButtonStyle';
import { Entypo } from '@expo/vector-icons';

interface LikedButtonProps extends TouchableOpacityProps {
  filled?: boolean;
  style?: StyleProp<any>;
}

export function LikedButton({ style, filled, ...props }: LikedButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={style} {...props}>
        <Entypo
          name={filled ? 'heart' : 'heart-outlined'}
          size={30}
          color={'#FF007F'}
        />
      </TouchableOpacity>
    </View>
  );
}