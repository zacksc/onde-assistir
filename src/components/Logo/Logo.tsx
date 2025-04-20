import React from 'react';
import { Text, Image, View } from 'react-native';

import { styles } from './LogoStyle';
import logo from '../../../assets/logo.png';

export function Logo() {
  return (
    <>
    <View style={styles.logoContainer}>
      <View style={styles.titleLogo}>
        <Text style={styles.titleTop}>
          ONDE
        </Text>
        <Text style={styles.titleBottom}>
          assistir?
        </Text>
      </View>
      <Image
      source={ logo }
      style={styles.logo}
      />
    </View>
    </>
  );
}