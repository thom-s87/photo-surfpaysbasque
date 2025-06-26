import { useState, useEffect } from "react";

const Footer = () => {
  const [currentAmount] = useState(2400); // Montant actuel collecté
  const targetAmount = 4800;
  const percentage = (currentAmount / targetAmount) * 100;
  const remaining = targetAmount - currentAmount;

  return (
    <footer className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Citation */}
        <div className="mb-16">
          <blockquote className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mb-4 italic">
            "Je capture vos sessions de surf comme si j'y étais, pour que chaque vague devienne un souvenir."
          </blockquote>
        </div>
        
        {/* Compteur objectif caisson */}
        <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-yellow-500/30 shadow-2xl mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
            🎯 Objectif Caisson Étanche
          </h3>
          
          <div className="mb-6">
            <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 mb-2">
              {currentAmount}€ / {targetAmount}€
            </div>
            <p className="text-purple-300 text-lg">
              Plus que <span className="text-pink-400 font-bold">{remaining}€</span> pour révolutionner vos sessions photo !
            </p>
          </div>
          
          {/* Barre de progression */}
          <div className="w-full bg-purple-900/50 rounded-full h-4 mb-6 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full transition-all duration-1000 ease-out shadow-lg"
              style={{ width: `${percentage}%` }}
            >
              <div className="h-full bg-white/20 animate-pulse"></div>
            </div>
          </div>
          
          <p className="text-purple-100 text-sm leading-relaxed">
            Avec votre soutien, je pourrai bientôt shooter directement dans l'eau et capturer 
            des angles encore plus spectaculaires de vos sessions ! 🌊📸
          </p>
        </div>
        
        {/* Informations finales */}
        <div className="border-t border-purple-500/30 pt-8">
          <p className="text-purple-300 mb-4">
            📍 Pays Basque • De Anglet à Hendaye
          </p>
          <p className="text-yellow-400 font-semibold text-lg">
            PHOTO SURF PAYS BASQUE
          </p>
          <p className="text-purple-400 text-sm mt-2">
            Capture l'essence de tes plus belles vagues
          </p>
        </div>
      </div>
      
      {/* Effet de vagues en bas */}
      <div className="absolute bottom-0 left-0 w-full opacity-30">
        <svg viewBox="0 0 1200 120" className="relative block w-full h-16">
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-pink-500/20"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
