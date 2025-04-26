
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CooperativesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const cooperatives = [
    { id: 1, title: "Coopérative Rissani", image: "https://picsum.photos/300/200?random=1", items: ["COOPÉRATIVE RISSANI"] },
    { id: 2, title: "Coopérative Erfoud", image: "https://picsum.photos/300/200?random=2", items: ["COOPÉRATIVE ERFOUD"] },
    { id: 3, title: "Coopérative Merzouga", image: "https://picsum.photos/300/200?random=3", items: ["COOPÉRATIVE MERZOUGA"] },
    { id: 4, title: "Coopérative Tinghir", image: "https://picsum.photos/300/200?random=4", items: ["COOPÉRATIVE TINGHIR"] },
    { id: 5, title: "Coopérative Ouarzazate", image: "https://picsum.photos/300/200?random=5", items: ["COOPÉRATIVE OUARZAZATE"] },
    { id: 6, title: "Coopérative Zagora", image: "https://picsum.photos/300/200?random=6", items: ["COOPÉRATIVE ZAGORA"] },
    { id: 7, title: "Coopérative Dades", image: "https://picsum.photos/300/200?random=7", items: ["COOPÉRATIVE DADES"] },
    { id: 8, title: "Coopérative Tafilalet", image: "https://picsum.photos/300/200?random=8", items: ["COOPÉRATIVE TAFILALET"] },
    { id: 9, title: "Coopérative Draa", image: "https://picsum.photos/300/200?random=9", items: ["COOPÉRATIVE DRAA"] },
    { id: 10, title: "Coopérative Sahara", image: "https://picsum.photos/300/200?random=10", items: ["COOPÉRATIVE SAHARA"] },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cooperatives.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cooperatives.length - 1 ? 0 : prevIndex + 1));
  };


  return (
    <div className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 hover:text-[#B5C18E] transition-colors duration-300 cursor-pointer">

          Trésors de Nos Coopératives
        </h2>

        <div className="relative h-96 flex items-center justify-center">
          {/* Bouton gauche */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            style={{ marginLeft: '-1.5rem' }}
          >
            <FaChevronLeft className="text-gray-700 text-xl" />
          </button>

          {/* Diapositives */}

          <div className="flex gap-6 overflow-hidden w-full justify-center items-center relative">
            {[currentIndex - 1, currentIndex, currentIndex + 1].map((offset, i) => {
              const index = (offset + cooperatives.length) % cooperatives.length;
              const isActive = i === 1;

              return (
                <div
                  key={`${index}-${i}`}
                  className={`transition-all duration-500 ease-in-out transform ${
                    isActive ? 'scale-100 opacity-100 z-10' : 'scale-90 opacity-50 z-0'
                  } w-72 bg-gray-50 rounded-lg shadow-md overflow-hidden`}
                >
                  <img
                    src={cooperatives[index].image}
                    alt={cooperatives[index].title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-center">
                      {cooperatives[index].title}
                    </h3>
                    <div className="space-y-3">
                      {cooperatives[index].items.map((item, i) => (
                        <p key={i} className="text-gray-600 text-center uppercase font-bold">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bouton droit */}

          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            style={{ marginRight: '-1.5rem' }}
          >
            <FaChevronRight className="text-gray-700 text-xl" />
          </button>
        </div>

        {/* Points */}
        <div className="flex justify-center mt-6 space-x-2">
          {cooperatives.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CooperativesSection;







