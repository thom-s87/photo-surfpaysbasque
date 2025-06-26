
const Gallery = () => {
  const photos = [
    {
      url: "/lovable-uploads/03f44437-e20a-4321-8c6a-87c9cea8451b.png",
      title: "Session Duo Parfaite",
      spot: "Côte Basque",
      description: "Complicité et technique sur la vague"
    },
    {
      url: "/lovable-uploads/c6304710-a920-4ff1-a9f6-41c0e1db5b32.png",
      title: "Ambiance Sunset",
      spot: "Biarritz",
      description: "Magic hour avec vue sur château"
    },
    {
      url: "/lovable-uploads/5c369216-5d5b-41d6-a467-d713af809110.png",
      title: "Action Dynamique",
      spot: "Côte Sauvage",
      description: "Puissance et émotion capturées"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
          Moments forts
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border-3 border-pink-500/50 shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              <img 
                src={photo.url}
                alt={photo.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay professionnel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-yellow-400 font-bold text-xl mb-2">{photo.title}</h3>
                  <p className="text-pink-300 text-sm mb-2">
                    📍 {photo.spot}
                  </p>
                  <p className="text-white/90 text-xs font-light italic">
                    {photo.description}
                  </p>
                </div>
              </div>
              
              {/* Badge professionnel */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-yellow-400 text-xs font-bold">📸 PRO</span>
              </div>
              
              {/* Effet néon sur les bords */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400 group-hover:shadow-[0_0_20px_#facc15] transition-all duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-purple-300 text-lg mb-4">
            Photographie sportive professionnelle • Captures authentiques • Émotions pures
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-yellow-400">
            <span>🌊 Action</span>
            <span>•</span>
            <span>🏄‍♀️ Lifestyle</span>
            <span>•</span>
            <span>📷 Reportage</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
