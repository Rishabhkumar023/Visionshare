
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SharePage from './pages/SharePage';
import LoginPage from './pages/LoginPage';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col text-white">
       <HashRouter>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/share" element={<SharePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </ErrorBoundary>
      </HashRouter>
    </div>
  );
};

export default App;