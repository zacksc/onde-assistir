import axios from 'axios';

const API_KEY = '-'; // Substitua pela sua chave da API
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
  return response.data.results;
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