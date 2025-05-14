import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_KEY = '-'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
});

export const searchMovies = async (query: string) => {
  const response = await tmdb.get('/search/movie', {
    params: { query },
  });
  return response.data.results.sort((a: any, b: any) => b.popularity - a.popularity);
};

export const getMovieDetails = async (movieId: number) => {
  const response = await tmdb.get(`/movie/${movieId}`);
  return response.data;
};

export const getStreamingProviders = async (movieId: number) => {
    const response = await tmdb.get(`/movie/${movieId}/watch/providers`);
    const providers = response.data.results?.BR?.flatrate || [];
    return providers.map((provider: any) => ({
      name: provider?.provider_name || 'Desconhecido',
      logo: provider?.logo_path
        ? `https://image.tmdb.org/t/p/w92${provider.logo_path}`
        : null,
    }));
};

export const saveToHistory = async (movie: any) => {
  if (!movie || !movie.id) {
    return;
  }

  try {
    const history = await AsyncStorage.getItem('movieHistory');
    const parsedHistory = history ? JSON.parse(history) : [];
    const updatedHistory = [movie, ...parsedHistory.filter((item: any) => item.id !== movie.id)];
    await AsyncStorage.setItem('movieHistory', JSON.stringify(updatedHistory));
  } catch (error) {
  }
};

export const removeFromHistory = async (movieId: number) => {
  try {
    const history = await AsyncStorage.getItem('movieHistory');
    const parsedHistory = history ? JSON.parse(history) : [];
    const updatedHistory = parsedHistory.filter((movie: any) => movie.id !== movieId);
    await AsyncStorage.setItem('movieHistory', JSON.stringify(updatedHistory));
  } catch (error) {
  }
};

export const addToFavorites = async (movie: any) => {
  if (!movie || !movie.id) {
    return;
  }
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    const parsedFavorites = favorites ? JSON.parse(favorites) : [];
    const updatedFavorites = [movie, ...parsedFavorites.filter((item: any) => item.id !== movie.id)];
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } catch (error) {
  }
};

export const removeFromFavorites = async (movieId: number) => {
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    const parsedFavorites = favorites ? JSON.parse(favorites) : [];
    const updatedFavorites = parsedFavorites.filter((movie: any) => movie.id !== movieId);
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } catch (error) {
  }
};

export const getFavorites = async () => {
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    return [];
  }
};