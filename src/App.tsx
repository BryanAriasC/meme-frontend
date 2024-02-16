
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AppTheme } from "./theme";
import { Router } from './Router';

export const App = () => {

  return (
    <AppTheme>
      <Router />
    </AppTheme>
  )
};
