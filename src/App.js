// import { CartProvider } from './Panier/CartContext'; // ⬅️ ajouter cette ligne
// import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './index.css';
// import { FavoritesProvider } from './Components/FavoritesContext';
// import Login from './pages/PageLogin';
// import Signup from './pages/PageSign';
// import ProductDetails from './pages/ProductPage';
// import ProductPage from './categories/ProductPage';
// import Navbar from './Components/NavBar';
// import BannerSection from './Components/Head';
// import CooperativesSection from './Components/CooperativesSection';
// import Footer from './Components/Footer';
// import MieuxNotes from './Components/mieux_notes';
// import PlusRecents from './Components/plus_recents';
// import PlusVendus from './Components/plus_vendus';
// import AboutPage from './pages/PageVendeur';
// import Favoris from './pages/pageFavoris';
// import AllVendeursPage from './pages/pageTousVendeurs';
// import Panier from './Panier/pagePanier';
// //categories
// import Categorie from './categories/Categorie';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <FavoritesProvider>
//       <CartProvider>
//         <BrowserRouter>
//           <div className="font-sans">
//             {isLoggedIn && <Navbar />}
//             <Routes>
//               {!isLoggedIn ? (
//                 <>
//                   <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
//                   <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
//                   <Route path="/signup" element={<Signup />} />
//                   <Route path="/pagecooperatives" element={<AllVendeursPage />} />
//                 </>
//               ) : (
//                 <>
//                   <Route path="/" element={
//                     <>
//                       <BannerSection />
//                       <MieuxNotes />
//                       <Categorie />
//                       <PlusRecents />
//                       <CooperativesSection />
//                       <PlusVendus />
//                       <Footer />
//                     </>
//                   } />
//                   <Route path="/Categories" element={<Categorie />} />
//                   <Route path="/Cooperatives" element={<CooperativesSection />} />
//                   <Route path="/Cooperatives/Cooperative/:id" element={<AboutPage />} />
//                   <Route path="/MieuxNotes" element={<MieuxNotes />} />
//                   <Route path="/MieuxNotes/product/:id" element={<ProductDetails />} />
//                   <Route path="/PlusRecents" element={<PlusRecents />} />
//                   <Route path="/PlusRecents/product/:id" element={<ProductDetails />} />
//                   <Route path="/PlusVendus" element={<PlusVendus />} />
//                   <Route path="/PlusVendus/product/:id" element={<ProductDetails />} />
//                   <Route path="/favoris" element={<Favoris />} />
//                   <Route path="/favoris/product/:id" element={<ProductDetails />} />
//                   <Route path="/pagecooperatives" element={<AllVendeursPage />} />
//                   <Route path="/Panier" element={<Panier />} />
//                   <Route path="/categorie/:id" element={<ProductPage />} />
//                   <Route path="/categorie/:id/product/:id" element={<ProductDetails />} />


//                 </>
//               )}
//             </Routes>
//           </div>
//         </BrowserRouter>
//       </CartProvider>
//     </FavoritesProvider>
//   );
// }

// export default App;

import { CartProvider } from './Panier/CartContext';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { FavoritesProvider } from './Components/FavoritesContext';
import Login from './pages/PageLogin';
import Signup from './pages/PageSign';
import ProductDetails from './pages/ProductPage';
import ProductPage from './categories/ProductPage';
import Navbar from './Components/NavBar';
import BannerSection from './Components/Head';
import CooperativesSection from './Components/CooperativesSection';
import Footer from './Components/Footer';
import MieuxNotes from './Components/mieux_notes';
import PlusRecents from './Components/plus_recents';
import PlusVendus from './Components/plus_vendus';
import AboutPage from './pages/PageVendeur';
import Favoris from './pages/pageFavoris';
import AllVendeursPage from './pages/pageTousVendeurs';
import Panier from './Panier/pagePanier';
import SearchResults from './Components/SearchResults';
//categories
import Categorie from './Components/Categorie';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <FavoritesProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="font-sans">
            <Navbar isLoggedIn={isLoggedIn} onLogin={() => setIsLoggedIn(true)} />
            <Routes>
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
              <Route path="/search" element={<SearchResults />} />
              <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/Categories" element={<Categorie />} />
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
              <Route path="/Panier" element={<Panier />} />
              <Route path="/categorie/:id" element={<ProductPage />} />
              <Route path="/categorie/:id/product/:id" element={<ProductDetails />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </FavoritesProvider>
  );
}

export default App;
