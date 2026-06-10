import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Check, Mail, MessageSquare, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import birthdayImg from "../../imports/soft_glam/soft_glam_2.jpeg";
import bridalImg from "../../imports/full_glam/full_glam.jpeg";
import partyImg from "../../imports/full_glam/full_glam_2.jpeg";
import browsImg from "../../imports/brows/brow.jpeg";

export function Book() {
  const location = useLocation();
  const hairImg = "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZ3xlbnwxfHx8fDE3NzgwMDAyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const services = [
    { id: "birthday", title: "Birthday Glam", img: birthdayImg },
    { id: "bridal", title: "Bridal Glam", img: bridalImg },
    { id: "party", title: "Party Glam", img: partyImg },
    { id: "brows", title: "Ombré Brows", img: browsImg },
    { id: "hair", title: "Frontal Hair Installation", img: hairImg },
  ];

  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [contactMethod, setContactMethod] = useState<"email" | "text" | "call" | null>(null);
  const [emailNotes, setEmailNotes] = useState("");
  const [confirmationShown, setConfirmationShown] = useState(false);

  // If redirected from Services page with a pre-selected service
  useEffect(() => {
    if (location.state && location.state.selectedService) {
      setSelectedService(location.state.selectedService);
    }
  }, [location.state]);

  const handleDateSelect = (dates: Date[] | undefined) => {
    if (dates && dates.length <= 3) {
      setSelectedDates(dates);
    }
  };

  const removeDate = (dateToRemove: Date) => {
    setSelectedDates(selectedDates.filter(d => d.getTime() !== dateToRemove.getTime()));
  };

  const handleEmailRequest = () => {
    if (!selectedService || selectedDates.length === 0) return;
    const datesFormatted = selectedDates.map(d => format(d, "MMM do, yyyy")).join(", ");
    const subject = encodeURIComponent(`Booking Request — ${selectedService}`);
    const body = encodeURIComponent(`Hi Priscilla,\n\nI'd like to book ${selectedService}. My preferred dates are: ${datesFormatted}.\n\nAdditional Notes: ${emailNotes}\n\nPlease let me know your availability.\n\nThanks!`);
    window.location.href = `mailto:deedeesglam@gmail.com?subject=${subject}&body=${body}`;
    setConfirmationShown(true);
  };

  const handleTextRequest = () => {
    if (!selectedService || selectedDates.length === 0) return;
    const datesFormatted = selectedDates.map(d => format(d, "MMM do, yyyy")).join(", ");
    const message = encodeURIComponent(`Hi Deedees Glam! I'd like to book ${selectedService} on one of these dates: ${datesFormatted}. Please let me know your availability.`);
    window.location.href = `sms:+447447499118?body=${message}`;
    setConfirmationShown(true);
  };

  return (
    <div className="bg-cream min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-black mb-4">Book Your Session</h1>
          <p className="text-black/60">Follow the steps below to request an appointment.</p>
        </div>

        {/* STEP 1: Service */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-black/5">
          <h2 className="text-2xl font-serif text-black mb-8 flex items-center gap-4">
            <span className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center text-sm font-sans">1</span>
            Choose Your Service
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service) => {
              const isSelected = selectedService === service.title;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.title)}
                  className={`relative cursor-pointer rounded-xl overflow-hidden group transition-all ${
                    isSelected ? "ring-4 ring-gold" : "hover:ring-2 hover:ring-rose/50"
                  }`}
                >
                  <div className="aspect-square relative">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-black/40 transition-opacity ${isSelected ? "opacity-40" : "opacity-0 group-hover:opacity-20"}`}></div>
                    
                    {/* Selected Checkmark */}
                    {isSelected && (
                      <div className="absolute top-3 right-3 bg-gold text-white p-1 rounded-full shadow-lg">
                        <Check className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                  <div className={`absolute bottom-0 w-full p-3 bg-white/95 backdrop-blur text-center border-t ${isSelected ? "border-gold" : "border-transparent"}`}>
                    <span className="text-sm md:text-base font-medium text-black">{service.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* STEP 2: Dates */}
        <section className={`bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-black/5 transition-opacity duration-500 ${!selectedService ? 'opacity-50 pointer-events-none' : ''}`}>
          <h2 className="text-2xl font-serif text-black mb-8 flex items-center gap-4">
            <span className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center text-sm font-sans">2</span>
            Pick Your Preferred Date(s)
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="bg-cream/30 p-6 rounded-2xl w-full md:w-auto flex justify-center custom-daypicker">
              <style>{`
                .custom-daypicker .rdp { --rdp-accent-color: var(--gold); --rdp-background-color: var(--rose); margin: 0; }
                .custom-daypicker .rdp-day_selected { background-color: var(--gold) !important; color: white !important; font-weight: bold; }
                .custom-daypicker .rdp-day:hover:not(.rdp-day_selected) { background-color: var(--blush) !important; color: black !important; }
              `}</style>
              <DayPicker
                mode="multiple"
                min={1}
                max={3}
                selected={selectedDates}
                onSelect={handleDateSelect}
                disabled={[{ before: new Date() }]}
              />
            </div>
            
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="font-medium text-black mb-2">Selected Dates</h3>
                <p className="text-sm text-black/60 mb-4">
                  Select up to 3 preferred dates — we'll confirm your appointment based on availability.
                </p>
                
                <div className="flex flex-wrap gap-3 min-h-[60px]">
                  <AnimatePresence>
                    {selectedDates.length === 0 && (
                      <motion.span 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="text-sm text-black/40 italic flex items-center"
                      >
                        No dates selected yet
                      </motion.span>
                    )}
                    {selectedDates.map((date) => (
                      <motion.div
                        key={date.getTime()}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-rose text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-sm"
                      >
                        {format(date, "MMM do, yyyy")}
                        <button 
                          onClick={() => removeDate(date)}
                          className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STEP 3: Confirm */}
        <section className={`bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-black/5 transition-opacity duration-500 ${(!selectedService || selectedDates.length === 0) ? 'opacity-50 pointer-events-none' : ''}`}>
          <h2 className="text-2xl font-serif text-black mb-8 flex items-center gap-4">
            <span className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center text-sm font-sans">3</span>
            How Would You Like to Confirm?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Option */}
            <div 
              onClick={() => setContactMethod("email")}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                contactMethod === "email" ? "border-gold bg-gold/5" : "border-black/5 hover:border-rose/30"
              }`}
            >
              <Mail className={`w-8 h-8 mb-4 ${contactMethod === "email" ? "text-gold" : "text-black/40"}`} />
              <h3 className="font-serif text-xl mb-2 text-black">Send an Email</h3>
              <p className="text-sm text-black/60 mb-4">We'll prepare a pre-filled email for you to send.</p>
              
              {contactMethod === "email" && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="pt-4 border-t border-black/10">
                  <textarea 
                    placeholder="Any special requests? (Optional)"
                    className="w-full text-sm p-3 border border-black/10 rounded-lg mb-4 bg-white resize-none focus:outline-none focus:ring-1 focus:ring-gold"
                    rows={3}
                    value={emailNotes}
                    onChange={(e) => setEmailNotes(e.target.value)}
                  />
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleEmailRequest(); }}
                    className="w-full bg-black hover:bg-gold text-white py-3 rounded-lg text-sm font-medium transition-colors"
                  >
                    Send Email Request
                  </button>
                </motion.div>
              )}
            </div>

            {/* Text Option */}
            <div 
              onClick={() => setContactMethod("text")}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                contactMethod === "text" ? "border-gold bg-gold/5" : "border-black/5 hover:border-rose/30"
              }`}
            >
              <MessageSquare className={`w-8 h-8 mb-4 ${contactMethod === "text" ? "text-gold" : "text-black/40"}`} />
              <h3 className="font-serif text-xl mb-2 text-black">Send a Text</h3>
              <p className="text-sm text-black/60 mb-4">Opens your SMS app with a pre-filled message.</p>
              
              {contactMethod === "text" && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="pt-4 border-t border-black/10">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleTextRequest(); }}
                    className="w-full bg-black hover:bg-gold text-white py-3 rounded-lg text-sm font-medium transition-colors"
                  >
                    Send Text Message
                  </button>
                </motion.div>
              )}
            </div>

            {/* Call Option */}
            <div 
              onClick={() => setContactMethod("call")}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                contactMethod === "call" ? "border-gold bg-gold/5" : "border-black/5 hover:border-rose/30"
              }`}
            >
              <Phone className={`w-8 h-8 mb-4 ${contactMethod === "call" ? "text-gold" : "text-black/40"}`} />
              <h3 className="font-serif text-xl mb-2 text-black">Call Directly</h3>
              <p className="text-sm text-black/60 mb-4">Prefer to speak directly? Give us a call.</p>
              
              {contactMethod === "call" && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="pt-4 border-t border-black/10 text-center">
                  <p className="text-lg font-medium text-black mb-4">+44 7447499118</p>
                  <a 
                    href="tel:+447447499118"
                    className="block w-full bg-black hover:bg-gold text-white py-3 rounded-lg text-sm font-medium transition-colors"
                  >
                    Tap to Call
                  </a>
                </motion.div>
              )}
            </div>
          </div>
          
          {confirmationShown && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center"
            >
              Thank you! Your booking request has been sent. Priscilla will be in touch to confirm your appointment. ✨
            </motion.div>
          )}
        </section>

      </div>
    </div>
  );
}