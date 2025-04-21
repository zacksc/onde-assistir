import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './SearchStyle';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { CardRow } from '../../components/CardRow/CardRow';

export function Search() {
  return (
    <ScrollView >
    <Text style={styles.title}>Resultados</Text>
    <SearchInput style={styles.search}/>
    <CardRow />
    <CardRow />
    <CardRow />
    <CardRow />
    <CardRow />
    </ ScrollView>
  );
}