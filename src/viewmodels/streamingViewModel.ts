import { getStreamingProviders } from '../services/tmdb'

export async function fetchStreamingProviders(movieId: number) {
  return await getStreamingProviders(movieId)
}
