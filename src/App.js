import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <AppContent openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen} />
    </Router>
  );
}

function AppContent({ openModal, closeModal, isModalOpen }) {
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/join') {
      openModal();
    }
  }, [location, openModal]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4">Join Ballers</h2>
        <p className="mb-4">Enter your details to join our exclusive community of sports investors.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-2 rounded bg-gray-700 text-white" />
          <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-700 text-white" />
          <button type="submit" className="w-full bg-gold text-gray-900 p-2 rounded font-semibold hover:bg-yellow-400 transition-colors">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default App;

