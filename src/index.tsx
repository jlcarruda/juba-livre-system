import ReactDOM from 'react-dom';
import '@fontsource/roboto';
import { CssBaseline } from '@material-ui/core';
import Helmet from 'react-helmet';
import { LoginPage } from './pages';

ReactDOM.render(
  <>
    <Helmet>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Helmet>
    <CssBaseline />
    <LoginPage />
  </>,
  document.getElementById('root'),
);
