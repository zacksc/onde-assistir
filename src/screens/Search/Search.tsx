import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Keyboard, View, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { styles } from './SearchStyle';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { CardRow } from '../../components/CardRow/CardRow';
import { Ionicons } from '@expo/vector-icons';
import { searchMovies } from '../../services/tmdb';

type SearchRouteParams = {
  Busca: {
    query: string;
  };
};

type SearchScreenRouteProp = RouteProp<SearchRouteParams, 'Busca'>;

export function Search() {
  const route = useRoute<SearchScreenRouteProp>();
  const navigation = useNavigation();
  const { query } = route.params;

  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchQuery.trim()) {
        const movies = await searchMovies(searchQuery);
        setResults(movies);
      } else {
        setResults([]);
      }
    };
    fetchMovies();
  }, [searchQuery]);

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) return;
    Keyboard.dismiss();
    setSearchQuery(trimmedQuery);
  };

  return (
    <ScrollView>
      <Text style={styles.title}>Resultados</Text>
      <View style={styles.searchContainer}>
        <SearchInput
          style={styles.search}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchIcon}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {results.map((movie) => (
        <CardRow
          key={movie.id}
          title={movie.title}
          overview={movie.overview}
          posterPath={movie.poster_path}
          onPress={() => navigation.navigate('Detalhes', { movieId: movie.id })}
        />
      ))}
    </ScrollView>
  );
}