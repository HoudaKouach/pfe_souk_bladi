-- ==========================
-- BASE DE DONNEES E-COMMERCE
-- ==========================
CREATE DATABASE IF NOT EXISTS e_commerce;
USE e_commerce ;

-- ==========================
-- TABLES UTILISATEURS
-- ==========================

CREATE TABLE VENDEUR (
    id_vendeur INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(150),
    email VARCHAR(255) UNIQUE,
    mot_de_passe VARCHAR(255),
    téléphone VARCHAR(20),
    adresse TEXT,
    date_inscription DATETIME,
    photo_profil VARCHAR(255),
    logo_cooperative VARCHAR(255)
);

CREATE TABLE CLIENT (
    id_client INT PRIMARY KEY AUTO_INCREMENT,
    prénom VARCHAR(150),
    nom VARCHAR(150),
    email VARCHAR(255) UNIQUE,
    mot_de_passe VARCHAR(255),
    téléphone VARCHAR(20),
    adresse TEXT,
    date_naissance DATE,
    date_inscription DATETIME
);

-- ==========================
-- TABLES PRODUITS
-- ==========================

CREATE TABLE CATEGORIE (
    id_categorie INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(150),
    description TEXT 

);

CREATE TABLE PRODUIT (
    id_produit INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(150),
    description TEXT,
    prix DECIMAL(10,2),
    stock INT,
    image_principale VARCHAR(255),
    sku VARCHAR(100),
    id_categorie INT,
    id_vendeur INT,
    date_ajout DATETIME,
    delai_retour INT,
    FOREIGN KEY (id_categorie) REFERENCES CATEGORIE(id_categorie),
    FOREIGN KEY (id_vendeur) REFERENCES VENDEUR(id_vendeur)
);

CREATE TABLE IMAGE_PRODUIT (
    id_image INT PRIMARY KEY AUTO_INCREMENT,
    id_produit INT,
    url_image VARCHAR(255),
    FOREIGN KEY (id_produit) REFERENCES PRODUIT(id_produit)
);

CREATE TABLE TAILLE_PRODUIT (
    id_produit INT,
    taille VARCHAR(50),
    PRIMARY KEY (id_produit, taille),
    FOREIGN KEY (id_produit) REFERENCES PRODUIT(id_produit)
);

CREATE TABLE COULEUR_PRODUIT (
    id_produit INT,
    couleur_code VARCHAR(10),
    PRIMARY KEY (id_produit, couleur_code),
    FOREIGN KEY (id_produit) REFERENCES PRODUIT(id_produit)
);

CREATE TABLE VOLUME_PRODUIT (
    id_produit INT,
    volume VARCHAR(20),
    PRIMARY KEY (id_produit, volume),
    FOREIGN KEY (id_produit) REFERENCES PRODUIT(id_produit)
);

CREATE TABLE HISTORIQUE_PRIX (
    id_produit INT,
    date DATE,
    prix_unitaire DECIMAL(10,2),
    PRIMARY KEY (id_produit, date),
    FOREIGN KEY (id_produit) REFERENCES PRODUIT(id_produit)
);

-- ==========================
-- TABLES COMMANDES
-- ==========================

CREATE TABLE COMMANDE (
    id_commande INT PRIMARY KEY AUTO_INCREMENT,
    id_client INT,
    adresse_livraison TEXT,
    prix_total DECIMAL(10,2),
    mode_paiement VARCHAR(50),
    payé ENUM('Oui','Non'),
    etat ENUM('En attente', 'En préparation', 'En livraison', 'Livrée', 'Annulée'),
    date_commande DATETIME,
    date_expedition DATETIME,
    FOREIGN KEY (id_client) REFERENCES CLIENT(id_client)
);

CREATE TABLE COMMANDE_ANNULEE (
    id_commande INT PRIMARY KEY,
    remboursement ENUM('Oui', 'Non'),
    date_annulation DATETIME,
    FOREIGN KEY (id_commande) REFERENCES COMMANDE(id_commande)
);

CREATE TABLE PRODUIT_COMMANDE (
    id_commande INT,
    id_produit INT,
    quantite INT,
    prix_unitaire DECIMAL(10,2),
    PRIMARY KEY (id_commande, id_produit),
    FOREIGN KEY (id_commande) REFERENCES COMMANDE(id_commande),
    FOREIGN KEY (id_produit) REFERENCES PRODUIT(id_produit)
);

CREATE TABLE LIVRAISON (
    id_commande INT,
    id_produit INT,
    date_livraison DATETIME,
    quantite_livree INT,
    PRIMARY KEY (id_commande, id_produit),
    FOREIGN KEY (id_commande) REFERENCES COMMANDE(id_commande),
    FOREIGN KEY (id_produit) REFERENCES PRODUIT(id_produit)
);

CREATE TABLE PRODUIT_RETOURNE (
    id_client INT,
    id_produit INT,
    id_commande INT,
    date_retour DATETIME,
    motif TEXT,
    montant_rembourse DECIMAL(10,2),
    PRIMARY KEY (id_client, id_produit, id_commande),
    FOREIGN KEY (id_client) REFERENCES CLIENT(id_client),
    FOREIGN KEY (id_produit) REFERENCES PRODUIT(id_produit),
    FOREIGN KEY (id_commande) REFERENCES COMMANDE(id_commande)
);

-- ==========================
-- TABLES AVIS / NOTATION
-- ==========================

CREATE TABLE NOTATION (
    id_client INT,
    id_produit INT,
    note INT CHECK (note BETWEEN 1 AND 5),
    avis TEXT,
    PRIMARY KEY (id_client, id_produit),
    FOREIGN KEY (id_client) REFERENCES CLIENT(id_client),
    FOREIGN KEY (id_produit) REFERENCES PRODUIT(id_produit)
);

-- ==========================
-- TABLES PUBLICITE
-- ==========================
CREATE TABLE PUBLICITE (
    id_pub INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255),
    image VARCHAR(255),
    lien_redirect VARCHAR(255),
    date_debut DATETIME,
    date_fin DATETIME,
    emplacement ENUM('homepage', 'sidebar', 'footer'),
    actif BOOLEAN DEFAULT TRUE
);


-- ==========================
-- TABLES PROMOTION
-- ==========================
CREATE TABLE PROMOTION (
    id_promotion INT PRIMARY KEY AUTO_INCREMENT,
    id_produit INT,
    taux_reduction DECIMAL(5,2), -- Exemple : 15.00 pour -15%
    date_debut DATETIME,
    date_fin DATETIME,
    description TEXT,
    actif BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (id_produit) REFERENCES PRODUIT(id_produit)
);

-- ==========================
-- TABLES COUPON
-- ==========================
CREATE TABLE COUPON (
    id_coupon INT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(50) UNIQUE,
    description TEXT,
    type ENUM('pourcentage', 'montant'),
    valeur DECIMAL(10,2),
    date_debut DATETIME,
    date_expiration DATETIME,
    quantite_max INT,
    quantite_utilisee INT DEFAULT 0,
    actif BOOLEAN DEFAULT TRUE
);

-- insetion de donnes de test
INSERT INTO categories (nom, description, photo) 
VALUES 
  ('Produits du Terroir', 'Produits locaux provenant des différentes régions du Maroc.', '/categories/terroir.jpg'),
  ('Huiles (huile d\'olive, huile d\'argan…)', 'Huiles naturelles issues des fruits du Maroc.', '/categories/huiles.jpg'),
  ('Dattes & Dérivés', 'Dattes fraîches et produits dérivés du fruit.', '/categories/dattes.jpg'),
  ('Miel & Produits de la Ruche', 'Miels naturels et autres produits de la ruche.', '/categories/miel.jpg'),
  ('Épices & Herbes', 'Épices et herbes marocaines pour assaisonner vos plats.', '/categories/epices.jpg'),
  ('Couscous & Céréales', 'Couscous traditionnel et autres céréales locales.', '/categories/couscous.jpg'),
  ('Confitures & Produits Sucrés', 'Confitures artisanales et produits sucrés du Maroc.', '/categories/confitures.jpg'),
  ('Plantes Médicinales & Tisanes', 'Plantes médicinales et tisanes marocaines pour votre bien-être.', '/categories/tisanes.jpg'),
  ('Artisanat', 'Articles artisanaux faits main au Maroc.', '/categories/artisanat.jpg'),
  ('Tapis & Tissages', 'Tapis berbères et textiles traditionnels marocains.', '/categories/tapis.jpg'),
  ('Poterie & Céramique', 'Poterie artisanale et objets en céramique faits main.', '/categories/poterie.jpg'),
  ('Bijoux Traditionnels', 'Bijoux traditionnels fabriqués à la main.', '/categories/bijoux.jpg'),
  ('Articles en Bois', 'Objets en bois faits main, typiques du Maroc.', '/categories/bois.jpg'),
  ('Cuir (sacs, babouches…)', 'Articles en cuir traditionnels comme des sacs et des babouches.', '/categories/cuire.jpg'),
  ('Vannerie (paniers, nattes…)', 'Objets en vannerie artisanale : paniers, nattes, etc.', '/categories/vannerie.jpg'),
  ('Beauté & Bien-être', 'Produits naturels pour votre beauté et votre bien-être.', '/categories/beaute.jpg'),
  ('Produits à base d’Argan', 'Cosmétiques et huiles à base d’argan.', '/categories/argan.jpg'),
  ('Savons & Soins Naturels', 'Savons et produits de soins fabriqués de manière artisanale.', '/categories/savons.jpg'),
  ('Huiles Essentielles', 'Huiles essentielles naturelles extraites des plantes.', '/categories/huiles_essentielles.jpg'),
  ('Parfums Traditionnels', 'Parfums naturels et traditionnels du Maroc.', '/categories/parfums.jpg'),
  ('Décoration', 'Articles de décoration artisanale pour embellir votre intérieur.', '/categories/decoration.jpg'),
  ('Objets Déco', 'Objets décoratifs artisanaux faits main.', '/categories/objets_deco.jpg'),
  ('Luminaires Artisanaux', 'Luminaires fabriqués à la main pour un éclairage unique.', '/categories/luminaires.jpg'),
  ('Peintures & Calligraphie', 'Peintures et calligraphies traditionnelles marocaines.', '/categories/peintures.jpg'),
  ('Articles de Table', 'Articles de table artisanaux et décoratifs pour votre maison.', '/categories/table.jpg'),
  ('Cadeaux & Coffrets', 'Cadeaux artisanaux et coffrets à offrir pour toutes occasions.', '/categories/coffrets.jpg'),
  ('Coffrets Gourmands', 'Coffrets gourmands avec des produits du terroir marocain.', '/categories/coffrets_gourmands.jpg'),
  ('Packs Bien-être', 'Packs bien-être comprenant des produits naturels pour votre confort.', '/categories/packs_bien_etre.jpg'),
  ('Idées Cadeaux Artisanaux', 'Idées cadeaux artisanaux uniques pour vos proches.', '/categories/idees_cadeaux.jpg'),
  ('Mode & Accessoires', 'Mode et accessoires fabriqués à la main au Maroc.', '/categories/mode.jpg'),
  ('Écharpes & Châles', 'Écharpes et châles artisanaux faits main.', '/categories/echarpes.jpg'),
  ('Accessoires en Cuir', 'Accessoires en cuir faits à la main : sacs, ceintures, etc.', '/categories/accessoires_cuir.jpg'),
  ('Bijoux Modernes', 'Bijoux modernes fabriqués à la main avec des techniques traditionnelles.', '/categories/bijoux_modernes.jpg');


-- ==========================
-- INSERTIONS DE DONNÉES DE TEST
-- ==========================

-- Vendeurs
INSERT INTO VENDEUR (nom, email, mot_de_passe, téléphone, adresse, date_inscription, photo_profil, logo_cooperative) 
VALUES
('Cooperative Artisanat', 'contact@artisanat.com', 'password123', '0612345678', '123 Rue de l''artisanat, Marrakech', NOW(), 'photo.jpg', 'logo.jpg'),
('VendeurTech', 'tech@vendeur.com', 'password456', '0623456789', '456 Avenue des Champs, Casablanca', NOW(), 'photo2.jpg', 'logo2.jpg');

-- Clients
INSERT INTO CLIENT (prénom, nom, email, mot_de_passe, téléphone, adresse, date_naissance, date_inscription) 
VALUES
('Rachida', 'Benali', 'rachida@example.com', 'password789', '0654321098', '789 Rue du Commerce, Fès', '1995-08-15', NOW()),
('Ahmed', 'Zerhouni', 'ahmed@example.com', 'password101', '0643219876', '321 Rue de la Technologie, Rabat', '1990-05-25', NOW());

-- Catégories
INSERT INTO CATEGORIE (nom, description) 
VALUES
('Accessoires de Mode', 'Tous les accessoires pour compléter votre tenue'),
('Produits Artisanaux', 'Produits faits main, authentiques et uniques');

-- Produits
INSERT INTO PRODUIT (nom, description, prix, stock, image_principale, sku, id_categorie, id_vendeur, date_ajout, delai_retour)
VALUES
('Bracelet en cuir', 'Bracelet fait main en cuir, élégant et durable', 25.99, 100, 'bracelet.jpg', 'SKU001', 1, 1, NOW(), 14),
('Poterie artisanale', 'Poterie traditionnelle peinte à la main', 45.50, 50, 'poterie.jpg', 'SKU002', 2, 2, NOW(), 7);

-- Tailles des produits
INSERT INTO TAILLE_PRODUIT (id_produit, taille) 
VALUES
(1, 'M'),
(1, 'L'),
(2, 'Unique');

-- Couleurs des produits
INSERT INTO COULEUR_PRODUIT (id_produit, couleur_code) 
VALUES
(1, '#000000'),
(2, '#FF5733');

-- Volumes des produits
INSERT INTO VOLUME_PRODUIT (id_produit, volume) 
VALUES
(1, 'Petit'),
(2, 'Moyen');

-- Promotions
INSERT INTO PROMOTION (id_produit, taux_reduction, date_debut, date_fin, description, actif) 
VALUES
(1, 10.00, NOW(), DATE_ADD(NOW(), INTERVAL 1 MONTH), 'Promotion sur les bracelets', TRUE),
(2, 15.00, NOW(), DATE_ADD(NOW(), INTERVAL 1 MONTH), 'Réduction sur la poterie artisanale', TRUE);

-- Coupons
INSERT INTO COUPON (code, description, type, valeur, date_debut, date_expiration, quantite_max, actif) 
VALUES
('PROMO10', 'Réduction de 10% sur le total de la commande', 'pourcentage', 10.00, NOW(), DATE_ADD(NOW(), INTERVAL 2 MONTH), 100, TRUE),
('CASH5', 'Réduction de 5€ sur le total de la commande', 'montant', 5.00, NOW(), DATE_ADD(NOW(), INTERVAL 3 MONTH), 50, TRUE);

-- Commandes
INSERT INTO COMMANDE (id_client, adresse_livraison, prix_total, mode_paiement, payé, etat, date_commande, date_expedition)
VALUES
(1, '123 Rue du Commerce, Fès', 100.00, 'Carte bancaire', 'Oui', 'En préparation', NOW(), DATE_ADD(NOW(), INTERVAL 1 DAY)),
(2, '321 Rue de la Technologie, Rabat', 80.50, 'PayPal', 'Non', 'En attente', NOW(), NULL);

-- Produits commandés
INSERT INTO PRODUIT_COMMANDE (id_commande, id_produit, quantite, prix_unitaire)
VALUES
(1, 1, 2, 25.99),
(2, 2, 1, 45.50);

-- Notations
INSERT INTO NOTATION (id_client, id_produit, note, avis)
VALUES
(1, 1, 5, 'Excellent bracelet, très beau et de qualité'),
(2, 2, 4, 'Très belle poterie, mais un peu chère');

-- Publicités
INSERT INTO PUBLICITE (titre, image, lien_redirect, date_debut, date_fin, emplacement, actif)
VALUES
('Promo du mois', 'promo.jpg', 'https://www.example.com', NOW(), DATE_ADD(NOW(), INTERVAL 1 MONTH), 'sidebar', TRUE);
