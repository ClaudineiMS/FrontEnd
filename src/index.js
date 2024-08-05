import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/home';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient/apolloClient';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);

reportWebVitals();
