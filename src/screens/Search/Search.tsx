import React from 'react';
import { Text, ScrollView } from 'react-native';
import { styles } from './SearchStyle';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { CardRow } from '../../components/CardRow/CardRow';
import { Details } from '../Details/Details';

type SearchRouteParams = {
  Busca: {
    query: string;
  };
}

type SearchScreenRouteProp = RouteProp<SearchRouteParams, 'Busca'>;

export function Search() {
  const route = useRoute<SearchSceenRouteProp>();
  const { query} = route.params;


  
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