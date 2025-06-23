
const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
          Tarifs
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Pack Solo */}
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-pink-500/30 shadow-2xl">
            <div className="mb-6">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mb-4">
                80€
              </div>
              <h3 className="text-2xl text-purple-300 mb-2 font-bold">Pack Solo</h3>
              <p className="text-lg text-yellow-400">Session photo d'1h</p>
            </div>
            
            {/* Features */}
            <div className="space-y-3 mb-6 text-left">
              <div className="flex items-center text-purple-100">
                <span className="text-pink-400 text-xl mr-3">🏄‍♂️</span>
                <span>Session d'1 heure complète</span>
              </div>
              <div className="flex items-center text-purple-100">
                <span className="text-yellow-400 text-xl mr-3">📸</span>
                <span>Pack 10 photos SportPXL</span>
              </div>
              <div className="flex items-center text-purple-100">
                <span className="text-pink-400 text-xl mr-3">🎨</span>
                <span>Retouche professionnelle</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-xl p-4 border border-yellow-400/30">
              <p className="text-sm text-pink-400">
                Pack athlète SportPXL à 50€ au lieu de 100€
              </p>
            </div>
          </div>

          {/* Pack Duo */}
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-purple-500/30 shadow-2xl transform md:scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                💕 POPULAIRE
              </span>
            </div>
            <div className="mb-6">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                140€
              </div>
              <h3 className="text-2xl text-pink-300 mb-2 font-bold">Pack Duo</h3>
              <p className="text-lg text-purple-400">Entre bro ou avec ta/ton crush</p>
            </div>
            
            {/* Features */}
            <div className="space-y-3 mb-6 text-left">
              <div className="flex items-center text-purple-100">
                <span className="text-purple-400 text-xl mr-3">🏄‍♂️</span>
                <span>Session d'1h30 pour 2 personnes</span>
              </div>
              <div className="flex items-center text-purple-100">
                <span className="text-pink-400 text-xl mr-3">📸</span>
                <span>2x Pack 10 photos SportPXL</span>
              </div>
              <div className="flex items-center text-purple-100">
                <span className="text-purple-400 text-xl mr-3">🎨</span>
                <span>Retouche professionnelle</span>
              </div>
              <div className="flex items-center text-purple-100">
                <span className="text-pink-400 text-xl mr-3">💕</span>
                <span>Photos de couple/duo incluses</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-pink-800/50 to-purple-800/50 rounded-xl p-4 border border-purple-400/30">
              <p className="text-sm text-purple-400">
                Économise 20€ par rapport à 2 sessions solo !
              </p>
            </div>
          </div>

          {/* Pack Team */}
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-orange-500/30 shadow-2xl">
            <div className="mb-6">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-4">
                200€
              </div>
              <h3 className="text-2xl text-orange-300 mb-2 font-bold">Pack Team</h3>
              <p className="text-lg text-orange-400">Pour kiffer avec tes bro</p>
            </div>
            
            {/* Features */}
            <div className="space-y-3 mb-6 text-left">
              <div className="flex items-center text-purple-100">
                <span className="text-orange-400 text-xl mr-3">🏄‍♂️</span>
                <span>Session de 2h pour 3-5 personnes</span>
              </div>
              <div className="flex items-center text-purple-100">
                <span className="text-yellow-400 text-xl mr-3">📸</span>
                <span>Pack 10 photos SportPXL par personne</span>
              </div>
              <div className="flex items-center text-purple-100">
                <span className="text-orange-400 text-xl mr-3">🎨</span>
                <span>Retouche professionnelle</span>
              </div>
              <div className="flex items-center text-purple-100">
                <span className="text-yellow-400 text-xl mr-3">🤙</span>
                <span>Photos de groupe incluses</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-800/50 to-yellow-800/50 rounded-xl p-4 border border-orange-400/30">
              <p className="text-sm text-orange-400">
                Le meilleur rapport qualité/prix pour les groupes !
              </p>
            </div>
          </div>
        </div>

        {/* Récupération des photos */}
        <div className="mt-12 bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-2xl p-6 border border-yellow-400/30 max-w-4xl mx-auto">
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
          <p className="text-sm text-pink-400 mt-4">
            Pack athlète : 10 photos à 50€ au lieu de 100€
          </p>
        </div>

        <p className="text-purple-300 text-lg mt-8">
          Paiement sécurisé • Satisfaction garantie • Ambiance surf authentique
        </p>
      </div>
    </section>
  );
};

export default Pricing;
