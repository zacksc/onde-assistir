import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './StreamingCardStyle';

export function StreamingCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Disponivel em:</Text>
      <Image />
    </View>
  );
}