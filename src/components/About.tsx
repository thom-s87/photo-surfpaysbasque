
const About = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
          À propos
        </h2>
        
        <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-pink-500/30 shadow-2xl">
          <div className="text-lg md:text-xl leading-relaxed text-purple-100 space-y-6">
            <p className="text-yellow-300 font-semibold text-2xl">
              Moi c'est Thom, photographe passionné de surf basé au Pays Basque.
            </p>
            
            <p>
              Je capture vos sessions depuis la plage et bientôt, directement dans l'eau grâce à un équipement pro dédié à la photographie aquatique.
            </p>
            
            <p className="text-purple-300">
              Mon objectif, c'est de partager vos plus beaux moments de surf à travers des images authentiques. Que ce soit votre première vague, une session entre amis ou un ride engagé, chaque photo raconte votre histoire.
            </p>
            
            <p>
              Je travaille actuellement à m'équiper d'un caisson photo professionnel et du matériel adapté 
              <span className="text-pink-400 font-bold"> (objectif +/- 4800 €)</span> pour pouvoir vous accompagner dans l'eau et réaliser des prises de vue au plus près de l'action.
            </p>
            
            <p className="text-yellow-300 font-medium">
              En attendant, je suis sur le sable, prêt à immortaliser vos plus belles vagues sur les spots du Pays Basque.
            </p>
          </div>
          
          {/* Badge rétro */}
          <div className="mt-8 inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full">
            <span className="text-yellow-400 font-bold text-lg">🏄‍♂️ Photographe officiel des spots basques</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
