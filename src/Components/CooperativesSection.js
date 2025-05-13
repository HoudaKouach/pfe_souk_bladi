import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CooperativesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cooperatives, setCooperatives] = useState([]);

    const fetchCooperatives = async () => {
        try {
            const response = await axios.get('http://localhost/back-end_PFE/get_vendeurs.php');
            setCooperatives(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des coopératives:', error);
        }
    };

    useEffect(() => {
        fetchCooperatives();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === cooperatives.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [cooperatives]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cooperatives.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cooperatives.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="py-12 bg-[#DEAC80] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-10 hover:text-black transition-colors duration-300 cursor-pointer">
                    Trésors de Nos Coopératives
                </h2>

                <div className="relative h-96 flex items-center justify-center">
                    <button onClick={prevSlide} className="absolute left-0 z-10 bg-white p-3 rounded-full shadow-md hover:bg-[#B99470] focus:outline-none" style={{ marginLeft: '-1.5rem' }}>
                        <FaChevronLeft className="text-[#DEAC80] text-xl" />
                    </button>

                    <div className="flex gap-6 overflow-hidden w-full justify-center items-center relative">
                        {[currentIndex - 1, currentIndex, currentIndex + 1].map((offset, i) => {
                            if (cooperatives.length === 0) return null;
                            const index = (offset + cooperatives.length) % cooperatives.length;
                            const coop = cooperatives[index];
                            const isActive = i === 1;

                            return (
                                <Link to={`/Cooperatives/Cooperative/${coop.id_vendeur}`} key={`${index}-${i}`}>
                                    <div className={`transition-all duration-500 ease-in-out transform ${isActive ? 'scale-100 opacity-100 z-10' : 'scale-90 opacity-75 z-0'} w-80 bg-white rounded-lg shadow-md overflow-hidden`}>
                                        <img
                                            src={`http://localhost/back-end_PFE/uploads/vendeurs/${coop.logo_cooperative}`}
                                            alt={coop.nom}
                                            className="w-full h-56 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl text-black font-semibold mb-4 text-center">{coop.nom}</h3>
                                            <p className="text-[#B99470] text-center uppercase font-bold">{coop.region}</p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <button onClick={nextSlide} className="absolute right-0 z-10 bg-white p-3 rounded-full shadow-md hover:bg-[#B99470] focus:outline-none" style={{ marginRight: '-1.5rem' }}>
                        <FaChevronRight className="text-[#DEAC80] text-xl" />
                    </button>
                </div>

                <div className="flex justify-center mt-6 space-x-2">
                    {cooperatives.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-white'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CooperativesSection;
