import React, { useEffect, useState } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter} from 'react-icons/fa';

import Footer from '../Components/Footer';

const AllVendeursPage = () => {
  const [vendeurs, setVendeurs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost/back-end_PFE/get_all_vendeurs.php')
      .then((res) => res.json())
      .then((data) => {
        setVendeurs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur:', error);
        setError('Erreur lors de la récupération des données.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Chargement...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <>
      <div className="relative py-10 pb-4 bg-white min-h-screen">
        {/* Image de fond */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/docoratif_amazigh.png')",
            backgroundRepeat: 'repeat-y',
            backgroundSize: ' 100% auto',
            backgroundPosition: 'left top',
            opacity: 0.5,
            zIndex: 0,
          }}
        ></div> 
        <div className="relative z-10">
       
          <p className="text-3xl font-bold text-center text-gray-800 mb-2">
            Notre Équipe de Vendeurs
          </p>
          <p className="mb-16 text-xl font-normal text-center text-gray-500">
            Rencontrez les meilleurs vendeurs de notre plateforme
          </p>

          {/* Grid avec 3 colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
            {vendeurs.map((vendeur, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md text-center p-6">
                
                {/* Image sans absolute */}
                <img
                  alt={`${vendeur.nom} logo`}
                  src={`http://localhost/back-end_PFE/uploads/vendeurs/${vendeur.logo_cooperative}`}
                  className="object-cover rounded-full h-32 w-32 mx-auto mb-4 border-4 border-white shadow-lg"
                />

                <p className="text-2xl text-gray-800 font-semibold">{vendeur.nom}</p>
                <p className="text-md text-gray-500">{vendeur.email}</p>
                <p className="py-4 text-gray-600 text-sm">
                  <strong>Téléphone:</strong> {vendeur.téléphone} <br />
                  <strong>Adresse:</strong> {vendeur.adresse}
                </p>

                <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200">
                  <FaFacebook className="text-2xl hover:text-blue-600 cursor-pointer" />
                  <FaInstagram className="text-2xl hover:text-pink-600 cursor-pointer" />
                  <FaTwitter className="text-2xl hover:text-blue-400 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllVendeursPage;
