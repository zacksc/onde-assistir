import React from 'react';
import { Text } from 'react-native';

import { styles } from './HeaderStyle';
import { Logo } from '../Logo/Logo';
import { SearchInput } from '../SearchInput/SearchInput';


export function Header() {
  return (
    <>
    <Logo />
    <Text style={styles.text}>
      Quer assistir a um filme ou série e não sabe onde encontrar?
    </Text>
    </>
  );
}