import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './components/template/ThemeProvider';
import { ApiProvider } from './context/ApiContext';
import MenuBar from './components/shared/MenuBar';
import Home from './views/Home/components/Home';
import ThemesPage from './views/Home/themes';
import './assets/styles/app.css';

function App() {
  return (
    <ApiProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen">
            <MenuBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/themes" element={<ThemesPage />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </ApiProvider>
  );
}

export default App; 