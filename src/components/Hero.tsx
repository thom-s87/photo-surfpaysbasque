
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Background image avec overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&h=800&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-pink-900/60 to-orange-800/70"></div>
      </div>

      {/* Logo discret en haut */}
      <div className="absolute top-6 left-6 z-20">
        <h1 className="text-2xl font-bold text-yellow-400 tracking-wider">
          PHOTO SURF
        </h1>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 leading-tight">
          photo surf pays Basque
        </h1>
        
        <p className="text-xl md:text-3xl text-yellow-300 mb-8 font-light tracking-wide">
          Capture tes plus belles vagues
        </p>

        <Button 
          onClick={scrollToBooking}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-black font-bold px-8 py-4 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-400"
        >
          <Camera className="mr-2 h-5 w-5" />
          📸 Réserver ma session
        </Button>
      </div>

      {/* Effet de vagues animées */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="relative block w-full h-20">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78, 31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-pink-500/30 animate-pulse"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
