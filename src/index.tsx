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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
