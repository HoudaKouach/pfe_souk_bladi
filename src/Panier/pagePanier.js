// // // import React, { useEffect, useState } from 'react';
// // // import Cookies from 'js-cookie';

// // // const Panier = () => {
// // //   const [produits, setProduits] = useState([]);

// // //   useEffect(() => {
// // //     const panierCookie = Cookies.get('panier');
// // //     if (panierCookie) {
// // //       setProduits(JSON.parse(panierCookie));
// // //     }
// // //   }, []);

// // //   const supprimerProduit = (id) => {
// // //     const nouveauPanier = produits.filter(p => p.id !== id);
// // //     setProduits(nouveauPanier);
// // //     Cookies.set('panier', JSON.stringify(nouveauPanier), { expires: 7 });
// // //   };

// // //   return (
// // //     <div className="p-4">
// // //       <h2 className="text-xl font-bold mb-4">Mon panier</h2>
// // //       {produits.length === 0 ? (
// // //         <p>Votre panier est vide.</p>
// // //       ) : (
// // //         <ul>
// // //           {produits.map((produit, index) => (
// // //             <li key={index} className="mb-2 p-2 border rounded shadow">
// // //               <p>{produit.nom} - {produit.prix} MAD</p>
// // //               <button 
// // //                 onClick={() => supprimerProduit(produit.id)} 
// // //                 className="bg-red-500 text-white px-3 py-1 rounded"
// // //               >
// // //                 Supprimer
// // //               </button>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Panier;


// // // import React from 'react';
// // // import Cart from '../Panier/Cart';

// // // const Panier = () => {
// // //   return (
// // //     <div className="container mx-auto">
// // //       <h1 className="text-2xl font-semibold my-4">Mon panier</h1>
// // //       <Cart />
// // //     </div>
// // //   );
// // // }

// // // export default Panier;
// // import React, { useEffect, useState } from 'react';
// // import Cookies from 'js-cookie';

// // const Panier = () => {
// //   const [produits, setProduits] = useState([]);

// //   useEffect(() => {
// //     const panierCookie = Cookies.get('panier');
// //     if (panierCookie) {
// //       setProduits(JSON.parse(panierCookie));
// //     }
// //   }, []);

// //   const supprimerProduit = (id) => {
// //     const nouveauPanier = produits.filter(p => p.id !== id);
// //     setProduits(nouveauPanier);
// //     Cookies.set('panier', JSON.stringify(nouveauPanier), { expires: 7 });
// //   };

// //   // Calculate the total amount
// //   const totalAmount = produits.reduce((total, produit) => total + produit.prix, 0);

// //   return (
// //     <div className="p-4">
// //       <h2 className="text-xl font-bold mb-4">Mon panier</h2>
// //       {produits.length === 0 ? (
// //         <p>Votre panier est vide.</p>
// //       ) : (
// //         <ul>
// //           {produits.map((produit, index) => (
// //             <li key={index} className="mb-2 p-2 border rounded shadow">
// //               <p>{produit.nom} - {produit.prix} MAD</p>
// //               <button 
// //                 onClick={() => supprimerProduit(produit.id)} 
// //                 className="bg-red-500 text-white px-3 py-1 rounded"
// //               >
// //                 Supprimer
// //               </button>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //       {produits.length > 0 && (
// //         <div className="mt-4 p-2 border rounded shadow">
// //           <h3 className="text-lg font-bold">Total à payer : {totalAmount} MAD</h3>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Panier;




// // import React from 'react';
// // import RecommendedProduct from '../Panier/Cart';
// // import CartItem from '../Panier/CartItem'; 
// // import CartSummary from '../Panier/CartSummary';

// // const productsInCart = [
// //     {
// //       id: 1,
// //       name: "Dattes Mejhoul – 100% naturelles",
// //       seller: "Coopérative Rissani",
// //       price: 150.0,
// //       quantity: 1,
// //       img: "https://storage.googleapis.com/a1aa/image/11f57f19-a760-4dad-34dd-9d36e0594256.jpg",
// //       alt: "Boîte de dattes Mejhoul 100% naturelles, vue rapprochée des dattes dans une boîte en carton",
// //     },
// //     {
// //       id: 2,
// //       name: "Dattes Mejhoul – 100% naturelles",
// //       seller: "Coopérative Rissani",
// //       price: 150.0,
// //       quantity: 1,
// //       img: "https://storage.googleapis.com/a1aa/image/11f57f19-a760-4dad-34dd-9d36e0594256.jpg",
// //       alt: "Boîte de dattes Mejhoul 100% naturelles, vue rapprochée des dattes dans une boîte en carton",
// //     },
// //     {
// //       id: 3,
// //       name: "Dattes Mejhoul – 100% naturelles",
// //       seller: "Coopérative Rissani",
// //       price: 150.0,
// //       quantity: 1,
// //       img: "https://storage.googleapis.com/a1aa/image/11f57f19-a760-4dad-34dd-9d36e0594256.jpg",
// //       alt: "Boîte de dattes Mejhoul 100% naturelles, vue rapprochée des dattes dans une boîte en carton",
// //     },
// //     {
// //       id: 4,
// //       name: "Dattes Mejhoul – 100% naturelles",
// //       seller: "Coopérative Rissani",
// //       price: 150.0,
// //       quantity: 1,
// //       img: "https://storage.googleapis.com/a1aa/image/11f57f19-a760-4dad-34dd-9d36e0594256.jpg",
// //       alt: "Boîte de dattes Mejhoul 100% naturelles, vue rapprochée des dattes dans une boîte en carton",
// //     },
// //   ];

// //   const recommendedProducts = [
// //     {
// //       id: 1,
// //       name: "Dattes Mejhoul - 100% naturelles",
// //       seller: "Coopérative Rissani",
// //       price: "90.00DH",
// //       img: "https://storage.googleapis.com/a1aa/image/11f57f19-a760-4dad-34dd-9d36e0594256.jpg",
// //       alt: "Boîte de dattes Mejhoul 100% naturelles, vue rapprochée des dattes dans une boîte en carton",
// //     },
// //     {
// //       id: 2,
// //       name: "Dattes Mejhoul - 100% naturelles",
// //       seller: "Coopérative Rissani",
// //       price: "90.00DH",
// //       img: "https://storage.googleapis.com/a1aa/image/e417a301-f383-4498-392c-74ab3fb806e4.jpg",
// //       alt: "Bol en bois avec herbes et épices naturelles colorées, vue de dessus",
// //     },
// //     {
// //       id: 3,
// //       name: "Dattes Mejhoul - 100% naturelles",
// //       seller: "Coopérative Rissani",
// //       price: "90.00DH",
// //       img: "https://storage.googleapis.com/a1aa/image/1c37412d-fa79-4522-c965-b36d96cd8dec.jpg",
// //       alt: "Petit pot en terre cuite rouge avec huile naturelle et un morceau de pain",
// //     },
// //     {
// //       id: 4,
// //       name: "Dattes Mejhoul - 100% naturelles",
// //       seller: "Coopérative Rissani",
// //       price: "90.00DH",
// //       img: "https://storage.googleapis.com/a1aa/image/45755645-8092-479c-6165-1be09190159e.jpg",
// //       alt: "Foulard coloré plié avec motifs traditionnels, posé sur une surface claire",
// //     },
// //     {
// //       id: 5,
// //       name: "Dattes Mejhoul - 100% naturelles",
// //       seller: "Coopérative Rissani",
// //       price: "90.00DH",
// //       img: "https://storage.googleapis.com/a1aa/image/9a73dfe7-50b1-47f4-d42a-77e8ec269c38.jpg",
// //       alt: "Ceintures colorées tissées avec boucles dorées, posées côte à côte",
// //     },
// //   ];
// // const Panier = () => {
// //       const totalItems = productsInCart.length;
// //       const totalPrice = productsInCart.reduce(
// //         (acc, product) => acc + product.price * product.quantity,
// //         0
// //       );

// //       return (
// //         <>
// //           <main className="px-4 md:px-8 lg:px-16 py-6 max-w-[1200px] mx-auto">
// //             <section className="mb-10">
// //               <h1 className="font-bold text-xl mb-4">Mon panier</h1>
// //               <div className="flex flex-col md:flex-row md:space-x-6">
// //                 <div className="flex-1 bg-white p-4 rounded-md shadow-sm">
// //                   <div className="flex justify-between items-center border-b border-black border-opacity-70 pb-1 mb-3 font-semibold text-sm">
// //                     <span className="bg-white px-1">Liste des produits ajoutés au panier</span>
// //                     <span>{totalItems} produits</span>
// //                   </div>
// //                   {productsInCart.map((product) => (
// //                     <CartItem key={product.id} product={product} />
// //                   ))}
// //                 </div>
// //                 <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
// //               </div>
// //             </section>
// //             {/* <section className="mb-10">
// //               <div className="flex justify-between items-center mb-4 px-2">
// //                 <h2 className="font-bold text-lg">Ces produits pourraient vous plaire</h2>
// //                 <a href="#" className="text-xs underline text-black hover:text-[#a6b57a]">
// //                   voir plus &gt;
// //                 </a>
// //               </div>
// //               <div className="flex space-x-4 overflow-x-auto pb-2 px-2">
// //                 {recommendedProducts.map((product) => (
// //                   <RecommendedProduct key={product.id} product={product} />
// //                 ))}
// //               </div>
// //             </section> */}
// //           </main>
// //         </>
// //       );
// //     }
// // export default Panier;


// // import React, { useEffect, useState } from 'react';
// // // import RecommendedProduct from '../Panier/Cart';
// // import CartItem from '../Panier/CartItem'; 
// // import CartSummary from '../Panier/CartSummary';

// // const Panier = () => {
// //   const [productsInCart, setProductsInCart] = useState([]);
  
// //   useEffect(() => {
// //     fetch('http://localhost/back-end_PFE/get_products.php?type=normal')
// //     .then(res => res.json())
// //       .then(data => {
// //         const formatted = data.map(item => ({
// //           id: item.id_produit,
// //           name: item.nom,
// //           seller: item.vendeur,
// //           price: parseFloat(item.prix),
// //           quantity: 1, // valeur initiale
// //           img: item.image_principale,
// //           alt: `Image de ${item.nom}`,
// //         }));
// //         setProductsInCart(formatted);
// //       })
// //       .catch(error => console.error('Erreur de chargement du panier:', error));
// //   }, []);

// //   const handleRemove = (id) => {
// //     setProductsInCart(prev => prev.filter(product => product.id !== id));
// //   };

// //   const totalItems = productsInCart.length;
// //   const totalPrice = productsInCart.reduce(
// //     (acc, product) => acc + product.price * product.quantity,
// //     0
// //   );

// //   return (
// //     <main className="px-4 md:px-8 lg:px-16 py-6 max-w-[1200px] mx-auto">
// //       <section className="mb-10">
// //         <h1 className="font-bold text-xl mb-4">Mon panier</h1>
// //         <div className="flex flex-col md:flex-row md:space-x-6">
// //           <div className="flex-1 bg-white p-4 rounded-md shadow-sm">
// //             <div className="flex justify-between items-center border-b border-black border-opacity-70 pb-1 mb-3 font-semibold text-sm">
// //               <span className="bg-white px-1">Liste des produits ajoutés au panier</span>
// //               <span>{totalItems} produits</span>
// //             </div>
// //             {productsInCart.map(product => (
// //               <CartItem key={product.id} product={product} onRemove={handleRemove} />
// //             ))}
// //           </div>
// //           <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
// //         </div>
// //       </section>
// //     </main>
// //   );
// // };

// // export default Panier;



// // import React, { useEffect, useState } from 'react';
// // import Cookies from 'js-cookie';
// // import CartItem from '../Panier/CartItem';
// // import CartSummary from '../Panier/CartSummary';
// // import 

// // const Panier = () => {
// //   const [productsInCart, setProductsInCart] = useState([]);
// //   const { cartItems, modifierQuantite, supprimerProduit } = useContext(CartContext);

// //   useEffect(() => {
// //     const panierCookie = Cookies.get('panier');
// //     if (panierCookie) {
// //       const produits = JSON.parse(panierCookie);
// //       const formatted = produits.map(item => ({
// //         id: item.id_produit,
// //         name: item.nom,
// //         seller: item.vendeur,
// //         price: parseFloat(item.prix),
// //         quantity: item.quantite || 1,
// //         img: item.image_principale,
// //         alt: `Image de ${item.nom}`,
// //       }));
// //       setProductsInCart(formatted);
// //     }
// //   }, []);

// //   const handleRemove = (id) => {
// //     const updated = productsInCart.filter(product => product.id !== id);
// //     setProductsInCart(updated);
// //     // mettre à jour le cookie
// //     Cookies.set('panier', JSON.stringify(updated.map(p => ({
// //       ...p,
// //       id_produit: p.id,
// //       nom: p.name,
// //       vendeur: p.seller,
// //       prix: p.price,
// //       quantite: p.quantity,
// //       image_principale: p.img,
// //     }))), { expires: 7 });
// //   };

// //   const totalItems = productsInCart.reduce((acc, product) => acc + product.quantity, 0);
// //   const totalPrice = productsInCart.reduce((acc, product) => acc + product.price * product.quantity, 0);

// //   return (
// //     <main className="px-4 md:px-8 lg:px-16 py-6 max-w-[1200px] mx-auto">
// //       <section className="mb-10">
// //         <h1 className="font-bold text-xl mb-4">Mon panier</h1>
// //         <div className="flex flex-col md:flex-row md:space-x-6">
// //           <div className="flex-1 bg-white p-4 rounded-md shadow-sm">
// //             <div className="flex justify-between items-center border-b border-black border-opacity-70 pb-1 mb-3 font-semibold text-sm">
// //               <span className="bg-white px-1">Liste des produits ajoutés au panier</span>
// //               <span>{totalItems} produit{totalItems > 1 ? 's' : ''}</span>
// //             </div>
// //             {productsInCart.length > 0 ? (
// //               productsInCart.map(item => (
// //                 <CartItem
// //                 key={item.id_produit}
// //                 product={item}
// //                 onRemove={supprimerProduit}
// //                 onQuantityChange={modifierQuantite}
// //               />              ))
// //             ) : (
// //               <p className="text-gray-600">Aucun produit dans le panier.</p>
// //             )}
// //           </div>
// //           <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
// //         </div>
// //       </section>
// //     </main>
// //   );
// // };

// // export default Panier;

// import React, { useEffect, useState, useContext } from 'react';
// import Cookies from 'js-cookie';
// import CartItem from './CartItem';
// import CartSummary from './CartSummary';
// import { CartContext } from './CartContext'; // Assure-toi que ce chemin est correct

// const Panier = () => {
//   const [productsInCart, setProductsInCart] = useState([]);
//   const { modifierQuantite, supprimerProduit } = useContext(CartContext);

//   useEffect(() => {
//     const panierCookie = Cookies.get('panier');
//     if (panierCookie) {
//       const produits = JSON.parse(panierCookie);
//       const formatted = produits.map(item => ({
//         id: item.id_produit,
//         name: item.nom,
//         seller: item.vendeur,
//         price: parseFloat(item.prix),
//         quantity: item.quantite || 1,
//         img: item.image_principale,
//         alt: `Image de ${item.nom}`,
//       }));
//       setProductsInCart(formatted);
//     }
//   }, []);

//   const handleRemove = (id) => {
//     const updated = productsInCart.filter(product => product.id !== id);
//     setProductsInCart(updated);
//     Cookies.set('panier', JSON.stringify(updated.map(p => ({
//       id_produit: p.id,
//       nom: p.name,
//       vendeur: p.seller,
//       prix: p.price,
//       quantite: p.quantity,
//       image_principale: p.img,
//     }))), { expires: 7 });
//   };

//   const totalItems = productsInCart.reduce((acc, product) => acc + product.quantity, 0);
//   const totalPrice = productsInCart.reduce((acc, product) => acc + product.price * product.quantity, 0);

//   return (
//     <main className="px-4 md:px-8 lg:px-16 py-6 max-w-[1200px] mx-auto">
//       <section className="mb-10">
//         <h1 className="font-bold text-xl mb-4">Mon panier</h1>
//         <div className="flex flex-col md:flex-row md:space-x-6">
//           <div className="flex-1 bg-white p-4 rounded-md shadow-sm">
//             <div className="flex justify-between items-center border-b border-black border-opacity-70 pb-1 mb-3 font-semibold text-sm">
//               <span className="bg-white px-1">Liste des produits ajoutés au panier</span>
//               <span>{totalItems} produit{totalItems > 1 ? 's' : ''}</span>
//             </div>
//             {productsInCart.length > 0 ? (
//               productsInCart.map(item => (
//                 <CartItem
//                   key={item.id}
//                   product={item}
//                   onRemove={() => {
//                     supprimerProduit(item.id);
//                     handleRemove(item.id);
//                   }}
//                   onQuantityChange={(newQuantity) => modifierQuantite(item.id, newQuantity)}
//                 />
//               ))
//             ) : (
//               <p className="text-gray-600">Aucun produit dans le panier.</p>
//             )}
//           </div>
//           <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Panier;

// import React, { useContext } from 'react';
// import CartItem from './CartItem';
// import CartSummary from './CartSummary';
// import { CartContext } from './CartContext';

// const Panier = () => {
//   const { cartItems, modifierQuantite, supprimerProduit } = useContext(CartContext);

//   const handleRemove = (id) => {
//     supprimerProduit(id); // suffit, le contexte et cookie se mettent à jour
//   };

//   const totalItems = cartItems.reduce((acc, product) => acc + product.quantite, 0);
//   const totalPrice = cartItems.reduce((acc, product) => acc + product.prix * product.quantite, 0);

//   return (
//     <main className="px-4 md:px-8 lg:px-16 py-6 max-w-[1200px] mx-auto">
//       <section className="mb-10">
//         <h1 className="font-bold text-xl mb-4">Mon panier</h1>
//         <div className="flex flex-col md:flex-row md:space-x-6">
//           <div className="flex-1 bg-white p-4 rounded-md shadow-sm">
//             <div className="flex justify-between items-center border-b border-black border-opacity-70 pb-1 mb-3 font-semibold text-sm">
//               <span className="bg-white px-1">Liste des produits ajoutés au panier</span>
//               <span>{totalItems} produit{totalItems > 1 ? 's' : ''}</span>
//             </div>
//             {cartItems.length > 0 ? (
//               cartItems.map(item => (
//                 <CartItem
//                   key={item.id_produit}
//                   product={{
//                     id: item.id_produit,
//                     name: item.nom,
//                     seller: item.vendeur,
//                     price: item.prix,
//                     quantity: item.quantite,
//                     img: item.image_principale,
//                     alt: `Image de ${item.nom}`
//                   }}
//                   onRemove={() => handleRemove(item.id_produit)}
//                   onQuantityChange={(newQuantity) => modifierQuantite(item.id_produit, newQuantity)}
//                 />
//               ))
//             ) : (
//               <p className="text-gray-600">Aucun produit dans le panier.</p>
//             )}
//           </div>
//           <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Panier;



// import React, { useContext } from 'react';
// import CartItem from './CartItem';
// import CartSummary from './CartSummary';
// import { CartContext } from './CartContext';
// import Footer from '../Components/Footer';

// const Panier = () => {
//   const { cartItems, modifierQuantite, supprimerProduit } = useContext(CartContext);

//   const handleRemove = (id) => {
//     supprimerProduit(id); // suffit, le contexte et cookie se mettent à jour
//   };

//   const totalItems = cartItems.reduce((acc, product) => acc + product.quantite, 0);
//   const totalPrice = cartItems.reduce((acc, product) => acc + product.prix * product.quantite, 0);

//   return (
//     <>
//       {/* Ligne explicative en haut de page */}
//       <hr className="border-[#DEAC80] border-2" />


//       <main className="px-4 md:px-8 lg:px-16 py-6 max-w-[1200px] mx-auto">
//         <section className="mb-10">
//           <h1 className="font-bold text-xl mb-4">Mon panier</h1>
//           <div className="flex flex-col md:flex-row md:space-x-6">
//             <div className="flex-1 bg-white p-4 rounded-md shadow-sm">
//               <div className="flex justify-between items-center border-b border-black border-opacity-70 pb-1 mb-3 font-semibold text-sm">
//                 <span className="bg-white px-1">Liste des produits ajoutés au panier</span>
//                 <span>{totalItems} produit{totalItems > 1 ? 's' : ''}</span>
//               </div>
//               {cartItems.length > 0 ? (
//                 cartItems.map(item => (
//                   <CartItem
//                     key={item.id_produit}
//                     product={{
//                       id: item.id_produit,
//                       name: item.nom,
//                       seller: item.vendeur,
//                       price: item.prix,
//                       quantity: item.quantite,
//                       img: item.image_principale,
//                       alt: `Image de ${item.nom}`
//                     }}
//                     onRemove={() => handleRemove(item.id_produit)}
//                     onQuantityChange={(newQuantity) => modifierQuantite(item.id_produit, newQuantity)}
//                   />
//                 ))
//               ) : (
//                 <p className="text-gray-600">Aucun produit dans le panier.</p>
//               )}
//             </div>
//             <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// };
// export default Panier;


import React, { useContext } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { CartContext } from './CartContext';
import Footer from '../Components/Footer';

const Panier = () => {
  const {
    cartItems,
    modifierQuantite,
    supprimerProduit,
    modifierAttribut
  } = useContext(CartContext);

    cartItems.forEach(item => {
      console.log(cartItems);
    });
  const handleRemove = (id_produit, couleur, taille) => {
    supprimerProduit(id_produit, couleur, taille);
  };

  
  const handleAttributeChange = (id_produit, attribut, nouvelleValeur, couleur, taille) => {
    modifierAttribut(id_produit, attribut, nouvelleValeur, couleur, taille);
  };
  const totalQuantite = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalItems = cartItems.reduce((acc, product) => acc + product.quantity, 0);
  const totalPrice = cartItems.reduce((acc, product) => acc + parseFloat(product.prix) * product.quantity, 0);

  return (
    <>
      <hr className="border-[#DEAC80] border-2" />

      <main className="px-4 md:px-8 lg:px-16 py-6 max-w-[1200px] mx-auto">
        <section className="mb-10">
          <h1 className="font-bold text-xl mb-4">Mon panier</h1>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex-1 bg-white p-4 rounded-md shadow-sm">
              <div className="flex justify-between items-center border-b border-black border-opacity-70 pb-1 mb-3 font-semibold text-sm">
                <span className="bg-white px-1">Liste des produits ajoutés au panier</span>
                <span>{totalItems} produit{totalItems > 1 ? 's' : ''}</span>
              </div>
              {cartItems.length > 0 ? (
                cartItems.map(item => (
              <CartItem
                key={`${item.id_produit}-${item.couleur}-${item.taille}`}
                product={{
                  id: item.id_produit,
                  name: item.nom.trim(),
                  seller: item.vendeur || '',
                  price: parseFloat(item.prix),
                  quantity: item.quantity,
                  img: item.image_principale,
                  alt: `Image de ${item.nom.trim()}`,
                  couleur: item.couleur,
                  taille: item.taille,
                  volume: item.volume,
                }}
                couleursDisponibles={item.couleurs || []}   // au lieu de couleursDisponibles
                taillesDisponibles={item.tailles || []}     // si tu as aussi tailles dans ta réponse
                volumesDisponibles={item.volumes || []} 
                onRemove={() => handleRemove(item.id_produit, item.couleur, item.taille)}
                onQuantityChange={(newQuantity) => modifierQuantite(item.id_produit, item.couleur, item.taille, newQuantity)}
                onAttributeChange={handleAttributeChange}
              />



                ))
              ) : (
                <p className="text-gray-600">Aucun produit dans le panier.</p>
              )}
            </div>
            <CartSummary totalItems={totalItems} totalQuantite={totalQuantite} totalPrice={totalPrice} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Panier;
