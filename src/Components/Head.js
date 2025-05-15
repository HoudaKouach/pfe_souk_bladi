import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const BannerSection = () => {
  const [publicites, setPublicites] = useState([]);

  useEffect(() => {
    fetch(`http://localhost/back-end_PFE/afficher_publicite.php`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPublicites(data);
        } else if (data && data.id) {
          setPublicites([data]);
        }
      })
      .catch((error) => console.error('Erreur de chargement des publicités:', error));
  }, []);

  const getImageStyle = (width, height) => {
    // Cas des images très grandes
    if ((width === 4000 && height === 3667)) {
      return "w-auto h-[200px] object-contain";
    }
    else if ( (width ===408  && height === 612)) {
      return "w-auto h-[300px] object-contain";
    }

    // Cas des images normales
    return "w-full h-auto object-contain";
  };

  const [imageSizes, setImageSizes] = useState({});

  const handleImageLoad = (id, e) => {
    const img = e.target;
    setImageSizes((prev) => ({
      ...prev,
      [id]: { width: img.naturalWidth, height: img.naturalHeight }
    }));
  };

  return (
    <section className="w-full relative bg-white justify-center items-center overflow-hidden py-10">
      <img 
        src="top-decoration.png" 
        alt="top" 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full z-0 pointer-events-none"
      />

      <div className="container relative z-10">
        <div className="space-y-8">
        <div className="bg-[#B5C18E] rounded-lg overflow-hidden py-10">
          <Swiper
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="main-swiper"
            >
              {publicites.map((pub) => (
                <SwiperSlide key={pub.id}>
                  <div className="flex flex-wrap items-center p-6">
                    <div className="w-full md:w-7/12">
                      <div className="text-green-700 font-semibold text-sm uppercase mb-2">{pub.badge}</div>
                      <h3 className="text-4xl font-bold mb-3">{pub.titre}</h3>
                      <p className="mb-4 text-gray-700">{pub.description}</p>
                      <a
                        href={pub.lien_redirect}
                        className="inline-block border border-black text-black text-sm uppercase px-6 py-3 rounded-md hover:bg-white hover:text-[#B5C18E] active:bg-white active:text-[#B5C18E] transition"
                      >
                        {pub.texte_bouton}
                      </a>
                    </div>
                    <div className="w-full md:w-5/12 flex justify-center">
                      <img
                        src={pub.image}
                        alt={pub.titre}
                        onLoad={(e) => handleImageLoad(pub.id, e)}
                        className={imageSizes[pub.id]
                          ? getImageStyle(imageSizes[pub.id].width, imageSizes[pub.id].height)
                          : "w-full h-auto object-contain"}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <img 
        src="bottom-decoration.png" 
        alt="bottom" 
        className="absolute bottom-0 w-full h-auto" 
      />
    </section>
  );
};

export default BannerSection;
