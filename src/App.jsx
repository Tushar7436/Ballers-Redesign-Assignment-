import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ScrollToTop from "./components/ScrollToTop";
import Header from './components/Header';
import Footer from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import Login from './components/Login';
import Signup from './components/Signup';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-2">The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
      <ScrollToTop/>
        <div className="flex flex-col min-h-screen bg-[#1A0B2E] text-white">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* Wildcard route for undefined paths */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
