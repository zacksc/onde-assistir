import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Keyboard, View, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { styles } from './SearchStyle';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { CardRow } from '../../components/CardRow/CardRow';
import { LikedButton } from '../../components/LikedButton/LikedButton';
import { Ionicons } from '@expo/vector-icons';
import { searchMovies, getFavorites, addToFavorites, removeFromFavorites } from '../../services/tmdb';

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
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const favs = await getFavorites();
        setFavorites(favs.filter((movie: any) => movie && movie.id));
      } catch (error) { }
    };
    loadFavorites();
  }, []);

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

  const handleToggleFavorite = async (movie: any) => {
    if (!movie || !movie.id) return;
    try {
      const isFavorite = favorites.some((fav) => fav.id === movie.id);
      if (isFavorite) {
        await removeFromFavorites(movie.id);
        setFavorites((prev) => prev.filter((fav) => fav.id !== movie.id));
      } else {
        await addToFavorites(movie);
        setFavorites((prev) => [movie, ...prev]);
      }
    } catch (error) { }
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
          rightButton={
            <LikedButton
              filled={favorites.some((fav) => fav.id === movie.id)}
              onPress={() => handleToggleFavorite(movie)}
            />
          }
        />
      ))}
    </ScrollView>
  );
}