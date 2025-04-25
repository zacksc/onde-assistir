import React from 'react';
import { TouchableOpacity, View, ViewProps } from 'react-native';

import { styles } from './CardRowStyle';
import { CardImg } from '../CardImg/CardImg';
import { CardInfo } from '../CardInfo/CardInfo';
import { useNavigation } from '@react-navigation/native';



export function CardRow({onPress} : propsCardColumn) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => {navigation.navigate('Detalhes')}}>
        <CardImg style={styles.img} source={0}/>
        <CardInfo style={styles.cardInfo}/>
    </TouchableOpacity>
  );
}