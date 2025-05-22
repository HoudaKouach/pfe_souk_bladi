// import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './index.css';
// import { FavoritesProvider } from './Components/FavoritesContext';

// import Login from './pages/PageLogin';
// import Signup from './pages/PageSign';
// import ProductDetails from './pages/ProductPage';

// import Navbar from './Components/NavBar';
// import BannerSection from './Components/Head';
// import Categorie from './Components/Categorie';
// import CooperativesSection from './Components/CooperativesSection';
// import Footer from './Components/Footer';
// import MieuxNotes from './Components/mieux_notes';
// import PlusRecents from './Components/plus_recents';
// import PlusVendus from './Components/plus_vendus';
// import AboutPage from './pages/PageVendeur';
// import Favoris from './pages/pageFavoris';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <FavoritesProvider>
//     <BrowserRouter>
//         <div className="font-sans">
//           {isLoggedIn && <Navbar />}
//           <Routes>
//             {!isLoggedIn ? (
//               <>
//                 <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
//                 <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
//                 <Route path="/signup" element={<Signup />} />
//               </>
//             ) : (
//               <>
//                 <Route path="/" element={
//                   <>
//                     <BannerSection />
//                     <MieuxNotes />
//                     <Categorie />
//                     <PlusRecents />
//                     <CooperativesSection />
//                     <PlusVendus />
//                     <Footer />
//                   </>
//                 } />
//                 <Route path="/Cooperatives" element={<CooperativesSection />} />
//                 <Route path="/Cooperatives/Cooperative/:id" element={<AboutPage />} />
//                 <Route path="/MieuxNotes" element={<MieuxNotes />} />
//                 <Route path="/MieuxNotes/product/:id" element={<ProductDetails />} />
//                 <Route path="/PlusRecents" element={<PlusRecents />} />
//                 <Route path="/PlusRecents/product/:id" element={<ProductDetails />} />
//                 <Route path="/PlusVendus" element={<PlusVendus />} />
//                 <Route path="/PlusVendus/product/:id" element={<ProductDetails />} />
//                 <Route path="/favoris" element={<Favoris />} />
//                 <Route path="/favoris/product/:id" element={<ProductDetails />} />

//               </>
              
//             ) }
//           </Routes>
//         </div>
//       </BrowserRouter>
//     </FavoritesProvider>

//   );
// }

// export default App;















import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { FavoritesProvider } from './Components/FavoritesContext';

import Login from './pages/PageLogin';
import Signup from './pages/PageSign';
import ProductDetails from './pages/ProductPage';

import Navbar from './Components/NavBar';
import BannerSection from './Components/Head';
import Categorie from './Components/Categorie';
import CooperativesSection from './Components/CooperativesSection';
import Footer from './Components/Footer';
import MieuxNotes from './Components/mieux_notes';
import PlusRecents from './Components/plus_recents';
import PlusVendus from './Components/plus_vendus';
import AboutPage from './pages/PageVendeur';
import Favoris from './pages/pageFavoris';
import AllVendeursPage from './pages/pageTousVendeurs';



import ProductPage from './Composants/ProductPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <FavoritesProvider>
      <Router>
        <div className="font-sans flex flex-col min-h-screen">
          {isLoggedIn && <Navbar />}
          <Routes>
            {!isLoggedIn ? (
              <>
                <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
                <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/pagecooperatives" element={<AllVendeursPage />} />
              </>
            ) : (
              <>
                {/* الصفحة الرئيسية */}
                <Route
                  path="/"
                  element={
                    <>
                      <BannerSection />
                      <MieuxNotes />
                      <Categorie />
                      <PlusRecents />
                      <CooperativesSection />
                      <PlusVendus />
                      <Footer />
                    </>
                  }
                />
                
                <Route path="/categorie/:id" element={<ProductPage />} />
                <Route path="/Cooperatives" element={<CooperativesSection />} />
                <Route path="/Cooperatives/Cooperative/:id" element={<AboutPage />} />
                <Route path="/MieuxNotes" element={<MieuxNotes />} />
                <Route path="/MieuxNotes/product/:id" element={<ProductDetails />} />
                <Route path="/PlusRecents" element={<PlusRecents />} />
                <Route path="/PlusRecents/product/:id" element={<ProductDetails />} />
                <Route path="/PlusVendus" element={<PlusVendus />} />
                <Route path="/PlusVendus/product/:id" element={<ProductDetails />} />
                <Route path="/favoris" element={<Favoris />} />
                <Route path="/favoris/product/:id" element={<ProductDetails />} />
                <Route path="/pagecooperatives" element={<AllVendeursPage />} />
              </>
            )}
          </Routes>
          
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;





















