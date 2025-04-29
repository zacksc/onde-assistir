import React, {useState} from 'react';
import { View, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './HomeStyle';
import { Header } from '../../components/Header/Header';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { SearchButton } from '../../components/SearchButton/SearchButton';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Home() {
  const [getSearch, setSearch] = useState('');
  
  const navigation = useNavigation();
  const searchScreen = () => {
    const query = getSearch.trim();
    if (!query) return;
    Keyboard.dismiss();
    navigation.navigate('Busca', { query: query });
  }
  return (
    <SafeAreaView style={styles.main}>
    <Header />
    <View style={styles.searchGroup}>
    <SearchInput 
    style={styles.search}
    value={getSearch} 
    onChangeText={setSearch}
    onSubmitEditing={searchScreen}
    returnKeyType='search'
    />
    <SearchButton onPress={searchScreen} />
    </View>

    </SafeAreaView>
  );
}