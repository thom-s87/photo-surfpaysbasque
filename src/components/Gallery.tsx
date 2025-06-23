
const Gallery = () => {
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      title: "Barrel perfection",
      spot: "Lafitenia"
    },
    {
      url: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&h=400&fit=crop",
      title: "Big wave session",
      spot: "Parlementia"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      title: "Sunset surf",
      spot: "Les Cavaliers"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      title: "Perfect barrel",
      spot: "Guéthary"
    },
    {
      url: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&h=400&fit=crop",
      title: "Aerial action",
      spot: "Biarritz"
    },
    {
      url: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop",
      title: "Dawn patrol",
      spot: "Hendaye"
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
              
              {/* Overlay rétro */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-yellow-400 font-bold text-xl mb-2">{photo.title}</h3>
                  <p className="text-pink-300 text-sm bg-black/50 px-3 py-1 rounded-full inline-block">
                    📍 {photo.spot}
                  </p>
                </div>
              </div>
              
              {/* Effet néon sur les bords */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400 group-hover:shadow-[0_0_20px_#facc15] transition-all duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-purple-300 text-lg">
            Style reportage visuel • Grand format • Couleurs vives • Ambiance vintage californienne
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
