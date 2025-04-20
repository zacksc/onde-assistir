import React from 'react';
import { View } from 'react-native';

import { styles } from './HomeStyle';
import { Logo } from '../../components/Logo/Logo'
import { Header } from '../../components/Header/Header';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { SearchButton } from '../../components/SearchButton/SearchButton';

export function Home() {
  return (
    <>
    <Header />
    <SearchInput style={styles.search}/>
    <SearchButton />
    </>
  );
}