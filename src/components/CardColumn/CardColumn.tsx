import React from 'react';
import { View } from 'react-native';

import { styles } from './CardColumnStyle';
import { CardImg } from '../CardImg/CardImg';
import { CardInfo } from '../CardInfo/CardInfo';
import { LikedButton } from '../LikedButton/LikedButton';
import { StreamingCard } from '../StreamingCard/StreamingCard';


export function CardColumn() {
  return (
    <View style={styles.container} >
        <CardImg style={styles.img} source={0}/>
        <View style={styles.cardLiked}>
        <CardInfo style={styles.cardInfo}/>
        <LikedButton/>
        </View>
        <StreamingCard/>
    </View>
  );
}