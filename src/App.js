import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/PageLogin';
import Navbar from './Components/Navbar';
import Head from './Components/Head';
import Categorie from './Components/Categorie';
import Footer from './Components/Footer';
import Signup from './pages/PageSign';
import CooperativesSection from './Components/CooperativesSection';
import BestSellers from './Components/BestSellers';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="font-sans">
        {!isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
            <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        ) : (
          <>
            <Navbar />
            <Head />
            <Categorie />
            <CooperativesSection />
            <BestSellers />
            
            <Footer />
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
