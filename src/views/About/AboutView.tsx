import { Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { AppButton, AppView } from '@/components';
import { getCurrentVersion } from '@/utils';

/**
 * Renders "About" view
 * url: /about
 * @page About
 */
const AboutView = () => {
  return (
    <AppView>
      <Card>
        <CardHeader title="TMDB Movie App" subheader={`Version ${getCurrentVersion()}`} />
        <CardContent>A test Web Assignment for HighCircl.com</CardContent>
        <CardActions>
          <AppButton to="/" color="primary">
            OK
          </AppButton>
        </CardActions>
      </Card>
    </AppView>
  );
};

export default AboutView;
