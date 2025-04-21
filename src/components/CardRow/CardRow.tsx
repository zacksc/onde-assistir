import React from 'react';
import { View } from 'react-native';

import { styles } from './CardRowStyle';
import { CardImg } from '../CardImg/CardImg';
import { CardInfo } from '../CardInfo/CardInfo';

export function CardRow() {
  return (
    <View style={styles.container}>
        <CardImg style={styles.img} source={0}/>
        <CardInfo style={styles.cardInfo}/>
    </View>
  );
}