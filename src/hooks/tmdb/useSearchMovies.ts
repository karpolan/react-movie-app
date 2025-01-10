import { useEffect, useState } from 'react';
import { EMULATE_SLOW_NETWORK, TMDB_ACCESS_TOKEN } from '@/config';
import { sleep } from '@/utils';
import { TmdbMovieItemResponse } from './types';
import { SEARCH_MIN_LENGTH } from './utils';

const API_ENDPOINT = 'https://api.themoviedb.org/3/search/movie';

interface HookResult {
  data: TmdbMovieItemResponse[];
  isLoading: boolean;
  error: string;
}

/**
 * Hook to search for movies from TMDB API
 * @see https://developer.themoviedb.org/reference/search-movie
 */
function useSearchMovies(searchText: string): HookResult {
  const [data, setData] = useState<TmdbMovieItemResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true); // True while fetching data
  const [error, setError] = useState(''); // Error message if any

  useEffect(() => {
    async function fetchDataFromApi(searchText: string) {
      if (!searchText || searchText.length < SEARCH_MIN_LENGTH) {
        setIsLoading(false);
        setData([]); // Clear data
        return; // Don't search if text is too short
      }

      setIsLoading(true);
      setError('');
      try {
        const url = `${API_ENDPOINT}?query=${searchText}`;
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
          await sleep(750);
        }

        if (json.success === false) {
          throw new Error(json.status_message); // Resource not found or similar error
        }

        setData(json.results);
        setIsLoading(false);
      } catch (error) {
        setError((error as unknown as Error).message);
        setData([]); // Clear data
      } finally {
        setIsLoading(false);
      }
    }
    fetchDataFromApi(searchText);
  }, [searchText]);

  return { data, isLoading, error };
}

export default useSearchMovies;