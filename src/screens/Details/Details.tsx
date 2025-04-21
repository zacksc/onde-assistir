import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './DetailsStyle';
import { CardColumn } from '../../components/CardColumn/CardColumn';
import { LikedButton } from '../../components/LikedButton/LikedButton';

export function Details() {
  return (
    <ScrollView >
    <Text style={styles.title}>Detalhes</Text>
    <CardColumn />
    </ ScrollView>
  );
}