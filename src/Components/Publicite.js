import React, { useEffect, useState } from "react";

const Publicite = () => {
  const [pub, setPub] = useState(null);

  useEffect(() => {
    fetch(`http://localhost/back-end_PFE/afficher_publicite.php`)
    .then(res => res.json())
      .then(data => {
        if (data.id_pub) {
          setPub(data);
        } else {
          console.log(data.message);
        }
      })
      .catch(error => console.error("Erreur :", error));
  }, []);

  return (
    <div className="pub-container" style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      {pub ? (
        <>
          <h3>{pub.titre}</h3>
          <a href={pub.lien_redirect} target="_blank" rel="noopener noreferrer">
            <img src={`http://localhost/ton_projet/images/${pub.image}`} alt={pub.titre} style={{ maxWidth: "100%" }} />
          </a>
        </>
      ) : (
        <p>Chargement ou aucune publicité.</p>
      )}
    </div>
  );
};

export default Publicite;
