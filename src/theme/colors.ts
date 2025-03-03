import { PaletteOptions, SimplePaletteColorOptions } from '@mui/material';

const COLOR_PRIMARY: SimplePaletteColorOptions = {
  main: '#906fff',
  // contrastText: '#000000',
};

const COLOR_SECONDARY: SimplePaletteColorOptions = {
  main: '#d96fff',
  // contrastText: "#000000",
};

/**
 * MUI colors set to use in theme.palette
 */
export const PALETTE_COLORS: Partial<PaletteOptions> = {
  primary: COLOR_PRIMARY,
  secondary: COLOR_SECONDARY,
  // error: COLOR_ERROR,
  // warning: COLOR_WARNING;
  // info: COLOR_INFO;
  // success: COLOR_SUCCESS;
};
