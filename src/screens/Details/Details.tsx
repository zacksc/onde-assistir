import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { styles } from './DetailsStyle';
import { getMovieDetails, getStreamingProviders, saveToHistory, addToFavorites, removeFromFavorites, getFavorites } from '../../services/tmdb';
import { StreamingCard } from '../../components/StreamingCard/StreamingCard';
import { LikedButton } from '../../components/LikedButton/LikedButton';

type DetailsRouteParams = {
  Detalhes: {
    movieId: number;
  };
};

type DetailsScreenRouteProp = RouteProp<DetailsRouteParams, 'Detalhes'>;

export function Details() {
  const route = useRoute<DetailsScreenRouteProp>();
  const { movieId } = route.params;

  const [movie, setMovie] = useState<any>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        if (!movieDetails || !movieDetails.id) {
          return;
        }
        const providers = await getStreamingProviders(movieId);
        const movieData = { ...movieDetails, providers };
        setMovie(movieData);

        await saveToHistory({
          id: movieDetails.id,
          title: movieDetails.title,
          poster_path: movieDetails.poster_path,
          overview: movieDetails.overview,
        });

        const favorites = await getFavorites();
        setIsFavorite(favorites.some((fav: any) => fav && fav.id === movieId));
      } catch (error) {
      }
    };
    fetchDetails();
  }, [movieId]);

  const toggleFavorite = async () => {
    if (!movie || !movie.id) return;
    try {
      if (isFavorite) {
        await removeFromFavorites(movie.id);
      } else {
        await addToFavorites({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          overview: movie.overview,
        });
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
    }
  };

  if (!movie) return <Text>Carregando...</Text>;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
          style={styles.poster}
        />
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
        <LikedButton
          style={styles.likeButton}
          filled={isFavorite}
          onPress={toggleFavorite}
        />
        <StreamingCard providers={movie.providers || []} />
      </View>
    </ScrollView>
  );
}

