import React from "react";

const BackgroundImages = ({ children }) => {
    return (
      <div className="relative w-full h-[87.5vh] overflow-hidden">
          <img
            src="/motifHaut.png"
            alt="Image haut"
            className="absolute -top- left-1/2 transform -translate-x-1/2 w-full"
          />

          <img
            src="/4.png"
            alt="Image bas gauche"
            className="absolute bottom-0 left-0 w-2/3"
          />

          <img
            src="/5.png"
            alt="Image bas droite"
            className="absolute bottom-0 right-0 w-2/3"
          />
          {/* Formulaire centré */}
          <div className="relative z-10 w-full h-full flex justify-center items-center">
          {children}
        </div>
    </div> 
  );
};

export default BackgroundImages;
