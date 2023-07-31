import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { FollowContextProvider } from './context/FollowContext';

//#NOTE: LOOK INTO THIS CODE SEGENT AND UNDERSTAND THIS
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      {/* <FollowContextProvider> */}
        <App />
      {/* </FollowContextProvider> */}
    </AuthContextProvider>
  </React.StrictMode>
);

