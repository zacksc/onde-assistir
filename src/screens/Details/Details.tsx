import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { styles } from './DetailsStyle';
import { getMovieDetails, getStreamingProviders } from '../../services/tmdb';
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

  useEffect(() => {
    const fetchDetails = async () => {
      const movieDetails = await getMovieDetails(movieId);
      const providers = await getStreamingProviders(movieId);
      setMovie({ ...movieDetails, providers });
    };
    fetchDetails();
  }, [movieId]);

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
        <LikedButton style={styles.likeButton} />
        <StreamingCard providers={movie.providers || []} />
      </View>
    </ScrollView>
  );
}