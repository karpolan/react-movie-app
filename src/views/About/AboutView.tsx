import { Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { AppButton, AppView } from '@/components';
import { getCurrentVersion } from '@/utils';
import { CONTENT_MIN_WIDTH } from '../../components/config';

/**
 * Renders "About" view
 * url: /about
 * @page About
 */
const AboutView = () => {
  return (
    <AppView minWidth={CONTENT_MIN_WIDTH}>
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
