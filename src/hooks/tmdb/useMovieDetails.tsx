import { useEffect, useState } from 'react';
import { EMULATE_SLOW_NETWORK, TMDB_ACCESS_TOKEN } from '@/config';
import { sleep } from '@/utils';
import { TmdbMovieDetailsResponse } from './types';

const API_ENDPOINT = 'https://api.themoviedb.org/3/movie';

interface HookResult {
  data: TmdbMovieDetailsResponse | undefined;
  isLoading: boolean;
  error: string;
}

/**
 * Hook to fetch a single movie details from TMDB API
 * @see https://developer.themoviedb.org/reference/movie-details
 */
function useMovieDetails(movieId: string): HookResult {
  const [data, setData] = useState<TmdbMovieDetailsResponse | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchDataFromApi(movieId: string) {
      setIsLoading(true);
      setError('');
      try {
        const url = `${API_ENDPOINT}/${movieId}`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
          },
        };
        const res = await fetch(url, options);
        const json = await res.json();

        if (EMULATE_SLOW_NETWORK) {
          await sleep(1000);
        }

        if (json.success === false) {
          throw new Error(json.status_message); // Resource not found or similar error
        }

        setData(json);
        setIsLoading(false);
      } catch (error) {
        setError((error as unknown as Error).message);
        setData(undefined);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDataFromApi(movieId);
  }, [movieId]);

  return { data, isLoading, error };
}

export default useMovieDetails;
