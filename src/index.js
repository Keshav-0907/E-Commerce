import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Auth0Provider domain="dev-xwoqghc1yzr0r25r.us.auth0.com" clientId="U0I5XzwJVXonUjyMJxsGoWJe7hRb0tQu" redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>

);
