import { FunctionComponent, KeyboardEvent, useCallback, useRef, useState } from 'react';
import { Stack, TextField } from '@mui/material';
import { AppIconButton } from '@/components';

interface Props {
  isLoading?: boolean;
  onSearch: (searchQuery: string) => void;
}

/**
 * Renders a search bar for searching movies
 * @component SearchBar
 * @param {boolean} isLoading - if true, search bar is disabled
 * @param {Function} onSearch - called when search button is clicked and search query is valid
 */
const SearchBar: FunctionComponent<Props> = ({ isLoading, onSearch }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState('');

  const onClearButtonClick = useCallback(() => {
    inputRef.current!.value = '';
    setError('');
  }, []);

  const onSearchButtonClick = useCallback(() => {
    const searchQuery = inputRef.current?.value;
    if (!searchQuery || searchQuery.length < 3) {
      setError('Search query must be at least 3 characters long');
      return;
    }
    // All good, clear error and call onSearch
    setError('');
    onSearch(searchQuery);
  }, [onSearch]);

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        onSearchButtonClick();
      }
    },
    [onSearchButtonClick]
  );

  return (
    <Stack marginY={2}>
      <TextField
        error={Boolean(error)}
        disabled={isLoading}
        fullWidth
        helperText={error}
        inputRef={inputRef}
        label="Search Movies"
        placeholder="Type movie name..."
        slotProps={{
          input: {
            endAdornment: (
              <>
                <AppIconButton icon="close" title="Clear text" onClick={onClearButtonClick} />
                <AppIconButton icon="search" title="Search" onClick={onSearchButtonClick} />
              </>
            ),
          },
        }}
        variant="outlined"
        onKeyDown={onKeyDown}
      />
    </Stack>
  );
};

export default SearchBar;
