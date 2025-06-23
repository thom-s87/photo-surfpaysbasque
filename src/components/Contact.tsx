
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    age: "",
    plage: "",
    niveau: "",
    signe: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé ! 🤙",
      description: "Je te contacte rapidement pour organiser ta session.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
          Contact
        </h2>
        
        <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-yellow-500/30 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="prenom" className="text-purple-300 text-lg font-semibold">Prénom</Label>
                <Input
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  className="mt-2 bg-purple-900/30 border-purple-400/50 text-purple-100 placeholder-purple-400 focus:border-yellow-400 focus:ring-yellow-400"
                  placeholder="Ton prénom"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="nom" className="text-purple-300 text-lg font-semibold">Nom</Label>
                <Input
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="mt-2 bg-purple-900/30 border-purple-400/50 text-purple-100 placeholder-purple-400 focus:border-yellow-400 focus:ring-yellow-400"
                  placeholder="Ton nom"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="age" className="text-purple-300 text-lg font-semibold">Âge</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                  className="mt-2 bg-purple-900/30 border-purple-400/50 text-purple-100 placeholder-purple-400 focus:border-yellow-400 focus:ring-yellow-400"
                  placeholder="Ton âge"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="plage" className="text-purple-300 text-lg font-semibold">Plage souhaitée</Label>
                <select
                  id="plage"
                  name="plage"
                  value={formData.plage}
                  onChange={handleChange}
                  className="mt-2 w-full bg-purple-900/30 border border-purple-400/50 text-purple-100 rounded-md px-3 py-2 focus:border-yellow-400 focus:ring-yellow-400"
                  required
                >
                  <option value="">Sélectionne ta plage</option>
                  <option value="Les Cavaliers">Les Cavaliers</option>
                  <option value="Marinella">Marinella</option>
                  <option value="Lafitenia">Lafitenia</option>
                  <option value="Parlementia">Parlementia</option>
                  <option value="Hendaye">Hendaye</option>
                </select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="niveau" className="text-purple-300 text-lg font-semibold">Niveau de surf</Label>
              <select
                id="niveau"
                name="niveau"
                value={formData.niveau}
                onChange={handleChange}
                className="mt-2 w-full bg-purple-900/30 border border-purple-400/50 text-purple-100 rounded-md px-3 py-2 focus:border-yellow-400 focus:ring-yellow-400"
                required
              >
                <option value="">Ton niveau</option>
                <option value="debutant">Débutant</option>
                <option value="intermediaire">Intermédiaire</option>
                <option value="confirme">Confirmé</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="signe" className="text-purple-300 text-lg font-semibold">Signe distinctif</Label>
              <Input
                id="signe"
                name="signe"
                value={formData.signe}
                onChange={handleChange}
                className="mt-2 bg-purple-900/30 border-purple-400/50 text-purple-100 placeholder-purple-400 focus:border-yellow-400 focus:ring-yellow-400"
                placeholder="Couleur de combi, board, etc."
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-black font-bold py-4 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Envoyer mon message 📨
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
