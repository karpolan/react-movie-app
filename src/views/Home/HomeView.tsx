import { Typography } from '@mui/material';
import { AppLink, AppView } from '@/components';

/**
 * Renders "Home" view
 * @page Home
 * @url /
 */
const HomeView = () => {
  return (
    <AppView>
      <Typography variant="h4" component="h1">
        Welcome to TMDB Movie App
      </Typography>
    </AppView>
  );
};

export default HomeView;
