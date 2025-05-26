// import React, { useState } from 'react';
// // import { FiShoppingCart } from 'react-icons/fi';
// import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import ProductGrid from './ProductGrid';
import FilterSidebar from './FilterSidebar';
import Breadcrumb from './Breadcrumb';
import Pagination from './Pagination';
import Footer from '../Components/Footer';
// import { useLocation } from 'react-router-dom';

// function ProductPage() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortBy, setSortBy] = useState('');
//     const location = useLocation();

  // // Convertir le chemin URL en segments pour le breadcrumb
  // const pathSegments = location.pathname.split('/').filter(Boolean);
  // // Générer dynamiquement les chemins
  // const breadcrumbPaths = [
  //   { name: 'Accueil', path: '/' },
  //   ...pathSegments.map((segment, index) => {
  //     const path = '/' + pathSegments.slice(0, index + 1).join('/');
  //     const name = segment.charAt(0).toUpperCase() + segment.slice(1); // Capitaliser
  //     return { name, path };
  //   }),
  // ];
  import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Pour récupérer l’id dans l’URL

function ProductPage() {
  const { id } = useParams(); // récupère '15' dans /product/15
  const [productName, setProductName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('');
  const [breadcrumbPaths, setBreadcrumbPaths] = useState([
    { name: 'Accueil', path: '/' },
    { name: 'Produits', path: '/product' },
  ]);

  useEffect(() => {
    if (!id) return;

    // Appeler ton API pour récupérer le nom du produit par son ID
    fetch(`http://localhost/back-end_PFE/get_categorie.php?id_categorie=${id}`)
     .then(res => res.json())
      .then(data => {
        if (data.nom) {
          setProductName(data.nom);
          setBreadcrumbPaths([
            { name: 'Accueil', path: '/' },
            { name: data.nom, path: `/Categories/${id}` }, // ici on affiche le nom, mais on garde l’id dans le path
          ]);
        }
      })
      .catch(() => {
        // En cas d’erreur, afficher l’id ou un fallback
        setBreadcrumbPaths([
          { name: 'Accueil', path: '/' },
          { name: 'Produits', path: '/product' },
          { name: `Produit #${id}`, path: `/product/${id}` },
        ]);
      });
  }, [id]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <main className="flex-grow bg-[#FFFFFF]">
        {/* Breadcrumb and Sort Bar in a full-width block */}
        <div className="w-full bg-[#b8c18b] px-4 py-2 border-b border-brown-300">
          <div className="container mx-auto flex items-center justify-between">
            {/* <Breadcrumb
              paths={[
                { name: 'Accueil', path: '/' },
                { name: 'Dattes', path: '/dattes' },
              ]}
            /> */}
            <Breadcrumb paths={breadcrumbPaths} />

            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-1">
              <span className="text-sm">Trier par</span>
              <select
                className="bg-transparent text-sm focus:outline-none cursor-pointer"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="">Popularité</option>
                <option value="price-asc">Prix: Croissant</option>
                <option value="price-desc">Prix: Décroissant</option>
                <option value="name-asc">Nom: A-Z</option>
                <option value="name-desc">Nom: Z-A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row py-4 gap-6">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 lg:w-1/5 flex flex-col gap-4">
              <FilterSidebar />
            </div>

            {/* Product Grid */}
            <div className="w-full md:w-3/4 lg:w-4/5">
              <ProductGrid />

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={6}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </main>
    <Footer ></Footer>
    </>
  );
}

export default ProductPage;    
