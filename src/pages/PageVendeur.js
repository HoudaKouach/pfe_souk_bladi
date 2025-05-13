// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Footer from '../Components/Footer';


// const AboutPage = () => {
//   const { id } = useParams(); // Récupère l'ID depuis l'URL
//   const [cooperatives, setCooperatives] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (id) {
//       fetch(`http://localhost/back-end_PFE/get_vendeur.php?id=${id}`)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.error) {
//             setError(data.error);
//           } else {
//             setCooperatives(Array.isArray(data) ? data : [data]); // Si data est un objet, on le met dans un tableau
//           }
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error('Erreur:', error);
//           setError('Erreur lors de la récupération des données.');
//           setLoading(false);
//         });
//     }
//   }, [id]);

//   if (loading) {
//     return <p className="text-center mt-10">Chargement...</p>;
//   }

//   if (error) {
//     return <p className="text-center mt-10 text-red-500">{error}</p>;
//   }

//   return (
//     <>
//       <div className="relative py-auto pb-4 bg-white">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: "url('docoratif_amazigh.png')",
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             opacity: 0.5,
//           }}
//         ></div>
//           <h1 className="text-xl font-bold py-10 text-center mb-8">À propos des Coopératives</h1>
//           <div className="grid grid-cols-1 w-2/3 mx-auto items-center gap-6">
//             {cooperatives.length > 0 ? (
//               cooperatives.map((coop, index) => (
//                 <div key={index} className="bg-white shadow-lg items-center rounded-2xl p-6 hover:shadow-2xl transition">
//                   <div className="flex items-center mb-4">
//                     <img
//                       src={`http://localhost/back-end_PFE/uploads/vendeurs/${coop.logo_cooperative}`}
//                       alt={`${coop.nom} logo`}
//                       className="w-16 h-16 rounded-full mr-4 object-cover"
//                     />
//                     <div>
//                       <h2 className="text-xl font-semibold">{coop.nom}</h2>
//                       <p className="text-sm text-gray-500">{coop.email}</p>
//                     </div>
//                   </div>
//                   <div className="mb-4">
//                     <img
//                       src={`http://localhost/back-end_PFE/uploads/vendeurs/${coop.photo_profil}`}
//                       alt={`${coop.nom} profil`}
//                       className="w-full h-48 rounded-lg object-cover"
//                     />
//                   </div>
//                   <p className="text-gray-700 mb-2">
//                     <strong>Téléphone:</strong> {coop.téléphone}
//                   </p>
//                   <p className="text-gray-700 mb-2">
//                     <strong>Adresse:</strong> {coop.adresse}
//                   </p>
//                   <p className="text-gray-700 mb-4">
//                     <strong>Date d'inscription:</strong> {coop.date_inscription}
//                   </p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center">Aucune coopérative trouvée.</p>
//             )}
//           </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AboutPage;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';

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
      <div className="relative py-10 pb-4 bg-white min-h-screen">
        {/* Image de fond */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/docoratif_amazigh.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5,
            zIndex: 0,
          }}
        ></div>

        {/* Contenu principal */}
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-center mb-10">À propos des Coopératives</h1>

          <div className="grid grid-cols-1 w-2/3 mx-auto items-center gap-6">
            {cooperatives.length > 0 ? (
              cooperatives.map((coop, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={`http://localhost/back-end_PFE/uploads/vendeurs/${coop.logo_cooperative}`}
                      alt={`${coop.nom} logo`}
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h2 className="text-xl font-semibold">{coop.nom}</h2>
                      <p className="text-sm text-gray-500">{coop.email}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <img
                      src={`http://localhost/back-end_PFE/uploads/vendeurs/${coop.photo_profil}`}
                      alt={`${coop.nom} profil`}
                      className="w-full h-48 rounded-lg object-cover"
                    />
                  </div>
                  <p className="text-gray-700 mb-2">
                    <strong>Téléphone:</strong> {coop.téléphone}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Adresse:</strong> {coop.adresse}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Date d'inscription:</strong> {coop.date_inscription}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center">Aucune coopérative trouvée.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
