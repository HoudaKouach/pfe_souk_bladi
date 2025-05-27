
import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';

const AddToCartModal = ({ produit, onClose }) => {
  const { ajouterAuPanier } = useContext(CartContext);
  const [taille, setTaille] = useState('');
  const [couleur, setCouleur] = useState('');
  const [volume, setVolume] = useState('');
  const [quantite, setQuantite] = useState(1);

  const handleAdd = () => {
    // Validation dynamique
    if ((produit?.tailles?.length > 0 && !taille) ||
        (produit?.couleurs?.length > 0 && !couleur) ||
        (produit?.volumes?.length > 0 && !volume)) {
      alert("Veuillez sélectionner toutes les options requises.");
      return;
    }

    const produitPanier = {
      id_produit: produit.id_produit,
      nom: produit.nom,
      prix: produit.prix,
      couleur,
      taille,
      volume,
      quantity: parseInt(quantite, 10),
      image_principale: produit.image_principale,
      vendeur: produit.vendeur,
    };

    ajouterAuPanier(produitPanier);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md p-6 w-[90%] max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Ajouter au panier</h2>

        {/* Tailles */}
        {produit?.tailles?.length > 0 && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="modal-taille">Taille :</label>
            <select
              id="modal-taille"
              className="w-full border p-2 rounded"
              value={taille}
              onChange={e => setTaille(e.target.value)}
            >
              <option value="">-- Sélectionner --</option>
              {produit.tailles.map((t, i) => (
                <option key={i} value={t}>{t}</option>
              ))}
            </select>
          </div>
        )}

        {/* Couleurs */}
        {produit?.couleurs?.length > 0 && (
          <div className="mb-4">
            <p className="block text-sm font-medium mb-1">Couleur :</p>
            <div className="flex flex-wrap gap-2">
              {produit.couleurs.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setCouleur(c)}
                  className={`w-8 h-8 rounded-full border-2 transition ${couleur === c ? 'border-[#DEAC80] scale-110' : 'border-gray-300'}`}
                  style={{ backgroundColor: c }}
                  title={c /* Ici tu peux remplacer par un nom, ex. « Rouge » */}
                />
              ))}
            </div>
          </div>
        )}

        {/* Volumes */}
        {produit?.volumes?.length > 0 && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="modal-volume">Volume :</label>
            <select
              id="modal-volume"
              className="w-full border p-2 rounded"
              value={volume}
              onChange={e => setVolume(e.target.value)}
            >
              <option value="">-- Sélectionner --</option>
              {produit.volumes.map((v, i) => (
                <option key={i} value={v}>{v}</option>
              ))}
            </select>
          </div>
        )}

        {/* Quantité */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="modal-quantite">Quantité :</label>
          <input
            id="modal-quantite"
            type="number"
            min="1"
            className="w-full border p-2 rounded"
            value={quantite}
            onChange={e => setQuantite(Math.max(1, parseInt(e.target.value) || 1))}
          />
        </div>

        <div className="flex justify-between">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Annuler</button>
          <button onClick={handleAdd} className="px-4 py-2 bg-[#B5C18E] text-white rounded hover:bg-[#9AA86E]">Ajouter</button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
