import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './FavoritesStyle';
import { CardRow } from '../../components/CardRow/CardRow';
import { LikedButton } from '../../components/LikedButton/LikedButton';
import { getFavorites, addToFavorites, removeFromFavorites } from '../../services/tmdb';

export function Favorites() {
  const [favorites, setFavorites] = useState<any[]>([]);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const loadFavorites = async () => {
        try {
          const storedFavorites = await getFavorites();
          const validFavorites = storedFavorites.filter(
            (movie: any) => movie && movie.id
          );
          if (validFavorites.length !== storedFavorites.length) {
            await AsyncStorage.setItem('favorites', JSON.stringify(validFavorites));
          }
          const uniqueFavorites = validFavorites.filter(
            (movie: any, index: number, self: any[]) =>
              index === self.findIndex((m) => m.id === movie.id)
          );
          setFavorites(uniqueFavorites);
        } catch (error) {
        }
      };
      loadFavorites();
    }, [])
  );

  const handleToggleFavorite = async (movie: any) => {
    try {
      const isFavorite = favorites.some((fav) => fav.id === movie.id);
      if (isFavorite) {
        await removeFromFavorites(movie.id);
        setFavorites((prev) => prev.filter((fav) => fav.id !== movie.id));
      } else {
        await addToFavorites(movie);
        setFavorites((prev) => [movie, ...prev]);
      }
    } catch (error) {
    }
  };

  return (
    <ScrollView style={styles.container}>
      {favorites.length > 0 ? (
        favorites
          .filter(movie => movie && movie.id && movie.title && movie.poster_path)
          .map((movie) => (
            <CardRow
              key={movie.id}
              title={movie.title ? String(movie.title) : ''}
              overview={movie.overview ? String(movie.overview) : 'Sem descrição disponível'}
              posterPath={movie.poster_path ? String(movie.poster_path) : ''}
              onPress={() => navigation.navigate('Detalhes', { movieId: movie.id })}
              rightButton={
                <LikedButton
                  filled={favorites.some((fav) => fav.id === movie.id)}
                  onPress={() => handleToggleFavorite(movie)}
                />
              }
            />
          ))
      ) : (
        <Text>Nenhum favorito disponível</Text>
      )}
    </ScrollView>
  );
}