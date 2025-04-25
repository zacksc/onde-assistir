import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { styles } from './SearchStyle';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { CardRow } from '../../components/CardRow/CardRow';
import { useNavigation } from '@react-navigation/native';
import { Details } from '../Details/Details';

export function Search() {
  const DetailsPage = Details();
  
  return (
    <ScrollView >
    <Text style={styles.title}>Resultados</Text>
    <SearchInput style={styles.search}/>
    <CardRow />
    <CardRow />
    <CardRow />
    <CardRow />
    </ ScrollView>
  );
}