import React from 'react';
import { View, Image, StyleProp, ImageStyle, ImageSourcePropType } from 'react-native';

import { styles } from './CardImgStyle';
interface CardImgProps{
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}


import poster from '../../../assets/poster-teste.jpg'

export function CardImg({ source, style}: CardImgProps) {

    return (
      <View>
        <Image 
        source={poster}
        style={[style, styles.container]}
        ></Image>
      </View>
    );
  
}