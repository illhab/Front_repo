import {createTheme as createMuiTheme} from '@mui/material/styles';
import {createPalette} from './create-palette';
import {createTypography} from './create-typography';

export function createTheme() {
  const palette = createPalette();
  const typography = createTypography();

  return createMuiTheme({
    palette,
    typography,
  });
}
