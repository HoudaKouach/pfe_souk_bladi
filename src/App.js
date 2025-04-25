import { useState } from 'react';
import Login from './pages/PageLogin';
import Navbar from './Components/Navbar';
import Head from './Components/Head';
import Categorie from './Components/Categorie';
import Footer from './Components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="font-sans">
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <Navbar />
          <Head />
          <Categorie />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
