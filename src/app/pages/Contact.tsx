import { useState } from "react";
import { Link } from "react-router";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General Enquiry",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const form = e.target as HTMLFormElement;
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form) as any).toString(),
      });
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "General Enquiry",
        message: ""
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-24">

        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-serif text-black mb-6">Get in Touch</h1>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Have a question or want to book? We'd love to hear from you.
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-8"></div>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">

          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-black/5 relative overflow-hidden"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 text-center p-8"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-serif text-black mb-4">Message Sent!</h3>
                <p className="text-black/60 mb-8">
                  Thank you for reaching out. Priscilla will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-rose text-white px-8 py-3 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-black transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : null}

            {/* Netlify form — data-netlify tells Netlify to capture submissions */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Required hidden inputs for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="subject" value="New enquiry from deedeesglam.com" />
              <p className="hidden">
                <input name="bot-field" />
              </p>

              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wider uppercase text-black/60">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-black/20 py-3 bg-transparent focus:outline-none focus:border-gold transition-colors"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium tracking-wider uppercase text-black/60">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-b border-black/20 py-3 bg-transparent focus:outline-none focus:border-gold transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium tracking-wider uppercase text-black/60">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border-b border-black/20 py-3 bg-transparent focus:outline-none focus:border-gold transition-colors"
                    placeholder="+44 7000 000000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wider uppercase text-black/60">Service of Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full border-b border-black/20 py-3 bg-transparent focus:outline-none focus:border-gold transition-colors appearance-none"
                >
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Birthday Glam">Birthday Glam</option>
                  <option value="Bridal Glam">Bridal Glam</option>
                  <option value="Party Glam">Party Glam</option>
                  <option value="Ombré Brows">Ombré Brows</option>
                  <option value="Frontal Hair Installation">Frontal Hair Installation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wider uppercase text-black/60">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border-b border-black/20 py-3 bg-transparent focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black hover:bg-gold text-white py-4 rounded-full text-sm font-medium uppercase tracking-wider transition-colors mt-4 disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Right Column - Direct Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h3 className="text-3xl font-serif text-black mb-8">Direct Contact</h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-rose/10 text-rose rounded-full flex items-center justify-center shrink-0 group-hover:bg-rose group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium tracking-wider uppercase text-black/60 mb-1">Call or Text</p>
                    <a href="tel:+447447499118" className="text-xl font-serif text-black hover:text-gold transition-colors">
                      +44 7447499118
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-rose/10 text-rose rounded-full flex items-center justify-center shrink-0 group-hover:bg-rose group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium tracking-wider uppercase text-black/60 mb-1">Email</p>
                    <a href="mailto:deedeesglam@gmail.com" className="text-xl font-serif text-black hover:text-gold transition-colors">
                      ddeesglam@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-rose/10 text-rose rounded-full flex items-center justify-center shrink-0 group-hover:bg-rose group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium tracking-wider uppercase text-black/60 mb-1">Location</p>
                    <p className="text-xl font-serif text-black">East London, UK</p>
                    <p className="text-sm text-black/60 mt-2 italic border-l-2 border-gold pl-3">
                      "Based in East London — available for travel across London and surrounding areas."
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium tracking-wider uppercase text-black/60 mb-6">Follow Our Work</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 border border-black/10 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 border border-black/10 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 border border-black/10 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA Bar */}
      <div className="bg-rose text-center py-8 px-4 relative z-10 mt-auto">
        <Link
          to="/book"
          className="inline-flex items-center gap-2 text-white font-serif text-2xl hover:text-black transition-colors"
        >
          Skip the form and book directly <span className="text-3xl">→</span>
        </Link>
      </div>
    </div>
  );
}
