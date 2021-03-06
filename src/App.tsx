import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider >
      <div className="App">
        <Routes />
      </div>
    </AppProvider>
  </BrowserRouter>
);

export default App;
