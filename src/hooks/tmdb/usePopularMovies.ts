import { useEffect, useState } from 'react';
import { EMULATE_SLOW_NETWORK, TMDB_ACCESS_TOKEN } from '@/config';
import { TmdbMovieItemResponse } from './types';
import { sleep } from '../../utils';

const API_ENDPOINT = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

interface HookResult {
  data: TmdbMovieItemResponse[] | undefined;
  isLoading: boolean;
  error: string;
}

/**
 * Hook to fetch popular movies from TMDB API
 * @see https://developer.themoviedb.org/reference/movie-popular-list
 */
function usePopularMovies(): HookResult {
  const [data, setData] = useState(undefined); // Fetched data from API
  const [isLoading, setIsLoading] = useState(true); // True while fetching data
  const [error, setError] = useState(''); // Error message if any

  useEffect(() => {
    async function fetchDataFromApi() {
      setIsLoading(true);
      setError('');
      try {
        const url = API_ENDPOINT;
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

        setData(json.results);
        setIsLoading(false);
      } catch (error) {
        setError((error as unknown as Error).message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDataFromApi();
  }, []);

  return { data, isLoading, error };
}

export default usePopularMovies;
