import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import ProduitsVendeur from './ProductsVendeur';
const AboutPage = () => {
  const { id } = useParams();
  const [cooperatives, setCooperatives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost/back-end_PFE/get_vendeur.php?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setCooperatives(Array.isArray(data) ? data : [data]);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error('Erreur:', error);
          setError('Erreur lors de la récupération des données.');
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Chargement...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <>
      <div className="relative py-[32px]  bg-white ">
        {/* Image de fond décorative */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/docoratif_amazigh.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
            zIndex: 0,
          }}
        ></div>

        {/* Contenu principal */}
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-center mb-16 text-gray-800">À propos des Coopératives</h1>

          {cooperatives.length > 0 ? (
            cooperatives.map((coop, index) => (
              <div key={index} className="w-full sm:w-2/3 mx-auto relative ">
                {/* Image centrée au-dessus de la carte */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20">
                  <img
                    src={`http://localhost/back-end_PFE/uploads/vendeurs/${coop.logo_cooperative}`}
                    alt={`${coop.nom} logo`}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>

                {/* Carte */}
                <div className="bg-white shadow-xl rounded-xl pt-20 p-6 text-center relative z-10">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">{coop.nom}</h2>
                  <p className="text-gray-600">{coop.email}</p>
                  <p className="text-gray-600 mb-4">{coop.adresse}</p>

                  <hr className="my-4" />

                  <p className="text-gray-800 mb-2">
                    <span className="font-bold">Téléphone :</span> {coop.téléphone}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Aucune coopérative trouvée.</p>
          )}
        </div>
      </div>
      { id && <ProduitsVendeur vendeurId={id} /> }
      <Footer />
    </>
  );
};

export default AboutPage;