
const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
          Tarifs
        </h2>
        
        <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-pink-500/30 shadow-2xl">
          <div className="mb-8">
            <div className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mb-4">
              80€
            </div>
            <p className="text-2xl text-purple-300 mb-2">Session photo solo d'1h</p>
            <p className="text-lg text-yellow-400">Jusqu'à 10 photos HD incluses</p>
          </div>
          
          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
            <div className="space-y-3">
              <div className="flex items-center text-purple-100">
                <span className="text-pink-400 text-xl mr-3">🏄‍♂️</span>
                <span>Session d'1 heure complète</span>
              </div>
              <div className="flex items-center text-purple-100">
                <span className="text-yellow-400 text-xl mr-3">📸</span>
                <span>Jusqu'à 10 photos HD de qualité</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-purple-100">
                <span className="text-pink-400 text-xl mr-3">🎨</span>
                <span>Retouche professionnelle incluse</span>
              </div>
              <div className="flex items-center text-purple-100">
                <span className="text-yellow-400 text-xl mr-3">⚡</span>
                <span>Livraison sous 48h</span>
              </div>
            </div>
          </div>
          
          {/* Récupération des photos */}
          <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-2xl p-6 border border-yellow-400/30 mb-8">
            <h3 className="text-xl text-yellow-400 font-bold mb-4">📥 Récupération des photos</h3>
            <p className="text-purple-100 mb-4">
              Tes photos seront disponibles sur la plateforme dédiée :
            </p>
            <a 
              href="https://www.app.sportpxl.com/dashboard" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-yellow-500 to-pink-500 text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
            >
              🔗 SportPXL Dashboard
            </a>
          </div>
          
          <p className="text-purple-300 text-lg">
            Paiement sécurisé • Satisfaction garantie • Ambiance surf authentique
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
