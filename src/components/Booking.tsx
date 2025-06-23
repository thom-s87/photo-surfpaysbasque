
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedSpot, setSelectedSpot] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const spots = ["Les Cavaliers", "Marinella", "Lafitenia", "Parlementia", "Hendaye"];
  const timeSlots = ["06:00 - 07:00", "07:00 - 08:00", "17:00 - 18:00", "18:00 - 19:00"];

  return (
    <section id="booking" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
          Réservation
        </h2>
        
        <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-pink-500/30 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calendrier */}
            <div>
              <h3 className="text-xl text-yellow-400 font-bold mb-4">📅 Choisis ta date :</h3>
              <div className="bg-purple-900/30 rounded-2xl p-4 border border-purple-400/30">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border-0 text-purple-100"
                  disabled={(date) => date < new Date()}
                />
              </div>
            </div>
            
            {/* Options */}
            <div className="space-y-6">
              {/* Spot */}
              <div>
                <h3 className="text-xl text-yellow-400 font-bold mb-4">🏄‍♂️ Ton spot :</h3>
                <div className="grid grid-cols-2 gap-2">
                  {spots.map((spot) => (
                    <Button
                      key={spot}
                      variant={selectedSpot === spot ? "default" : "outline"}
                      onClick={() => setSelectedSpot(spot)}
                      className={`${
                        selectedSpot === spot 
                          ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-black" 
                          : "border-purple-400 text-purple-300 hover:bg-purple-800/50"
                      } text-sm py-2`}
                    >
                      {spot}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Créneau */}
              <div>
                <h3 className="text-xl text-yellow-400 font-bold mb-4">⏰ Créneau idéal :</h3>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => setSelectedTime(time)}
                      className={`${
                        selectedTime === time 
                          ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-black" 
                          : "border-purple-400 text-purple-300 hover:bg-purple-800/50"
                      } text-sm py-2`}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Validation */}
              <Button 
                className="w-full bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600 text-black font-bold py-4 text-lg rounded-full shadow-2xl"
                disabled={!selectedDate || !selectedSpot || !selectedTime}
              >
                Valider ma réservation 🤙
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-purple-300 text-sm">
              💡 Les créneaux sont adaptés aux meilleures conditions de marée
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
