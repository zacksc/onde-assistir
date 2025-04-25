import React from 'react';
import { View, ScrollView } from 'react-native';

import { styles } from './FavoritesStyle';
import { Search } from '../../screens/Search/Search'
import { CardRow } from '../../components/CardRow/CardRow';
import { LikedButton } from '../../components/LikedButton/LikedButton';

const favoriteGroup = () => {
  return (
    <View style={styles.favoriteCard}>
      <CardRow />
      <LikedButton style={styles.likeBttn} />
    </View>
  )
};

export function Favorites() {
  return (
    <ScrollView style={styles.container} >
       {favoriteGroup()}
    </ ScrollView>
  );
}