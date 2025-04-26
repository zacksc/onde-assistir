import React from 'react';
import {Text, View } from 'react-native';

import { styles } from './HeaderStyle';
import { Logo } from '../Logo/Logo';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Header() {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
      <Logo />
    <Text style={styles.text}>
      Quer assistir a um filme ou série e não sabe onde encontrar?
    </Text>
      </View>
    </ SafeAreaView>
  );
}