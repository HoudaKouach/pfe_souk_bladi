import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const BannerSection = () => {
  return (
    <section className="w-full relative  bg-white justify-center items-center overflow-hidden py-10">

      <img 
        src="top-decoration.png" 
        alt="top" 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full z-0 pointer-events-none"
      />
      <div className="container relative z-10  ">
        <div className="space-y-8">

          {/* Swiper Block */}
          <div className="bg-[#B5C18E] rounded-lg overflow-hidden">
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="main-swiper"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="flex flex-wrap items-center p-6">
                  <div className="w-full md:w-7/12">
                    <div className="text-green-700 font-semibold text-sm uppercase mb-2">100% Naturel</div>
                    <h3 className="text-4xl font-bold mb-3">Dattes Majhoul de la Vallée du Ziz</h3>
                    <p className="mb-4 text-gray-700">Découvrez la richesse des dattes de Drâa-Tafilalet, cultivées avec soin et savoir-faire traditionnel.</p>
                    <a href="#" className="inline-block border border-black text-black text-sm uppercase px-6 py-3 rounded-md hover:bg-black hover:text-white transition">Acheter maintenant</a>
                  </div>
                  <div className="w-full md:w-5/12">
                    <img src="images/jb.png" alt="Dattes Majhoul" className="w-full h-auto" />
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="flex flex-wrap items-center p-6">
                  <div className="w-full md:w-7/12">
                    <div className="text-green-700 font-semibold text-sm uppercase mb-2">Fait main</div>
                    <h3 className="text-4xl font-bold mb-3">Tapis berbères de Taznakht</h3>
                    <p className="mb-4 text-gray-700">Chaque tapis est une œuvre d'art tissée par des artisanes expertes du sud marocain.</p>
                    <a href="#" className="inline-block border border-black text-black text-sm uppercase px-6 py-3 rounded-md hover:bg-black hover:text-white transition">Voir la collection</a>
                  </div>
                  <div className="w-full md:w-5/12">
                    <img src="images/ProTm.jpg" alt="Tapis berbère" className="w-full h-auto" />
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="flex flex-wrap items-center p-6">
                  <div className="w-full md:w-7/12">
                    <div className="text-green-700 font-semibold text-sm uppercase mb-2">Produits du terroir</div>
                    <h3 className="text-4xl font-bold mb-3">Huile d’olive artisanale</h3>
                    <p className="mb-4 text-gray-700">Huile extra vierge pressée à froid, issue des oliveraies ancestrales de la région.</p>
                    <a href="#" className="inline-block border border-black text-black text-sm uppercase px-6 py-3 rounded-md hover:bg-black hover:text-white transition">Découvrir</a>
                  </div>
                  <div className="w-full md:w-5/12">
                    <img src="images/fleur.jpg" alt="Huile d'olive" className="w-full h-auto" />
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>

            {/* Pagination visible sous les slides */}
            <div className="swiper-pagination mt-4"></div>
          </div>
        </div>
      </div>
      <img src="bottom-decoration.png" alt="bottom" className="absolute bottom-0 w-full h-auto" />
    </section>
  );
};

export default BannerSection;
