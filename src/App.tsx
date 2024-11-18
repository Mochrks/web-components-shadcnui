import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router';

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
