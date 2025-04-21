import React, {useState} from 'react';
import { View, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './HomeStyle';
import { Logo } from '../../components/Logo/Logo'
import { Header } from '../../components/Header/Header';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { SearchButton } from '../../components/SearchButton/SearchButton';
import { Search } from '../Search/Search';

export function Home() {
  const [getSearch, setSearch] = useState('');
  
  const navigation = useNavigation();
  const searchScreen = () => {
    const query = getSearch.trim();
    if (!query) return;
    Keyboard.dismiss();
    navigation.navigate('Search', { query: query });
  }
  return (
    <>
    <Header />
    <SearchInput 
    style={styles.search}
    value={getSearch} 
    onChangeText={setSearch}
    />
    <SearchButton onPress={searchScreen} />
    </>
  );
}