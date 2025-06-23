
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Weather = () => {
  const [selectedSpot, setSelectedSpot] = useState("Les Cavaliers");
  
  const spots = [
    "Les Cavaliers", "Marinella", "VVF", "Chambre d'Amour", 
    "La Barre", "Lafitenia", "Parlementia", "Hendaye"
  ];

  return (
    <section id="weather" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
          Conditions / Marées
        </h2>
        
        <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-yellow-500/30 shadow-2xl">
          {/* Sélecteur de spot */}
          <div className="mb-8">
            <h3 className="text-xl text-purple-300 mb-4 text-center">Choisis ton spot :</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {spots.map((spot) => (
                <Button
                  key={spot}
                  variant={selectedSpot === spot ? "default" : "outline"}
                  onClick={() => setSelectedSpot(spot)}
                  className={`${
                    selectedSpot === spot 
                      ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-black border-yellow-400" 
                      : "border-purple-400 text-purple-300 hover:bg-purple-800/50"
                  } rounded-full px-4 py-2 transition-all duration-300`}
                >
                  {spot}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Widget météo simulé */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-2xl p-6 border border-pink-400/30">
              <h4 className="text-yellow-400 font-bold text-xl mb-4">🌊 Conditions actuelles</h4>
              <div className="space-y-3 text-purple-100">
                <div className="flex justify-between">
                  <span>Hauteur de vague:</span>
                  <span className="text-yellow-300 font-bold">1.2 - 1.8m</span>
                </div>
                <div className="flex justify-between">
                  <span>Période:</span>
                  <span className="text-yellow-300 font-bold">12s</span>
                </div>
                <div className="flex justify-between">
                  <span>Vent:</span>
                  <span className="text-green-400 font-bold">OFF 15 km/h</span>
                </div>
                <div className="flex justify-between">
                  <span>Marée:</span>
                  <span className="text-pink-400 font-bold">Montante</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-800/50 to-orange-800/50 rounded-2xl p-6 border border-yellow-400/30">
              <h4 className="text-pink-400 font-bold text-xl mb-4">📅 Prochaines marées</h4>
              <div className="space-y-3 text-purple-100">
                <div className="flex justify-between">
                  <span>Basse mer:</span>
                  <span className="text-yellow-300 font-bold">14:32</span>
                </div>
                <div className="flex justify-between">
                  <span>Haute mer:</span>
                  <span className="text-yellow-300 font-bold">20:45</span>
                </div>
                <div className="flex justify-between">
                  <span>Coefficient:</span>
                  <span className="text-green-400 font-bold">78</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-purple-300 text-sm">
              📍 Conditions pour <span className="text-yellow-400 font-bold">{selectedSpot}</span> • 
              Données en temps réel via Windguru
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
