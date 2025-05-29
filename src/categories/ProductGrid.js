// import React, { useEffect, useState } from 'react';
// import ProductCard from './ProductCard';
// function ProductGrid() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
// fetch("http://localhost/back-end_PFE/get_products1.php")
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }

// export default ProductGrid;


//   import React, { useEffect, useState } from 'react';
// import ProductCard from './ProductCard';
// function ProductGrid() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
// fetch("http://localhost/back-end_PFE/get_products1.php?id=1")
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }

// export default ProductGrid;       


// import React, { useEffect, useState } from 'react';
// import ProductCard from './ProductCard';

// function ProductGrid() {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost/back-end_PFE/get_products1.php?id_categorie=id")
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
//       {products.length > 0 ? (
//         products.map((product) => (
//           <ProductCard key={product.id_produit} product={product} />
//         ))
//       ) : (
//         <p className="text-gray-500 col-span-full">Aucun produit trouvé.</p>
//       )}
//     </div>
//   );
// }

// export default ProductGrid;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // 👈 importer useParams
import ProductCard from './ProductCard';

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const { id } = useParams(); // 👈 récupérer id de l’URL

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost/back-end_PFE/get_products1.php?id_categorie=${id}`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Erreur lors du chargement des produits :', error));
  }, [id]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 pt-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id_produit} product={product} />
        ))
      ) : (
        <p className="text-gray-500 col-span-full">Aucun produit trouvé.</p>
      )}
    </div>
  );
}

export default ProductGrid;
