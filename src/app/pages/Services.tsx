import { Link } from "react-router";
import { motion } from "motion/react";

import birthdayImg from "../../imports/soft_glam_2.jpeg";
import bridalImg from "../../imports/full_glam.jpeg";
import partyImg from "../../imports/full_glam_2.jpeg";
import browsImg from "../../imports/brow.jpeg";

export function Services() {
  const hairImg = "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZ3xlbnwxfHx8fDE3NzgwMDAyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const services = [
    {
      id: "birthday",
      title: "Birthday Glam",
      icon: "💄",
      desc: "Celebrate your special day with a flawless soft or full glam look tailored just for you. Perfect for photos and unforgettable moments.",
      img: birthdayImg,
      cta: "Book Birthday Glam"
    },
    {
      id: "bridal",
      title: "Bridal Glam",
      icon: "👰",
      desc: "Your big day deserves perfection.",
      bullets: [
        { name: "Simple Glam Session", detail: "Soft, elegant bridal look" },
        { name: "Full Glam Makeup", detail: "Defined, radiant, and long-lasting finish" }
      ],
      extra: "Designed to last all day and look stunning both in person and on camera.",
      img: bridalImg,
      cta: "Book Bridal Glam"
    },
    {
      id: "party",
      title: "Party Glam",
      icon: "🎉",
      desc: "Heading to an event or night out? Get a customised glam look that matches your outfit, vibe, and occasion.",
      img: partyImg,
      cta: "Book Party Glam"
    },
    {
      id: "brows",
      title: "Ombré Brows",
      icon: "🎨",
      desc: "A semi-permanent brow technique that creates a soft, powdered makeup effect.",
      bullets: [
        "Natural-looking finish",
        "Long-lasting results (1–3 years)",
        "Suitable for all skin types",
        "Enhances your facial structure"
      ],
      extra: "Wake up every day with perfectly shaped brows.",
      img: browsImg,
      cta: "Book Ombré Brows"
    },
    {
      id: "hair",
      title: "Frontal Hair Installation",
      icon: "💇",
      desc: "Professional lace frontal installation for a seamless and natural finish.",
      bullets: [
        "Clean and precise application",
        "Natural hairline effect",
        "Secure and long-lasting styling"
      ],
      img: hairImg,
      cta: "Book Hair Installation"
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 text-center bg-white">
        <h1 className="text-5xl md:text-7xl font-serif text-black mb-6">Our Services</h1>
        <p className="text-lg text-black/60 max-w-2xl mx-auto mb-8">
          Discover our range of luxury beauty services, tailored to enhance your natural features and leave you feeling confident.
        </p>
        <div className="w-16 h-0.5 bg-gold mx-auto"></div>
      </section>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 py-24 space-y-32">
        {services.map((service, index) => (
          <section 
            key={service.id} 
            className={`flex flex-col gap-12 lg:gap-24 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 space-y-8"
            >
              <div className="flex items-center gap-4 mb-2">
                <span className="text-4xl">{service.icon}</span>
                <h2 className="text-4xl md:text-5xl font-serif text-black">{service.title}</h2>
              </div>
              
              <p className="text-lg text-black/80 leading-relaxed">
                {service.desc}
              </p>

              {/* Bullets (Strings or Objects) */}
              {service.bullets && (
                <ul className="space-y-4 text-black/80">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gold mt-1">•</span>
                      {typeof bullet === "string" ? (
                        <span>{bullet}</span>
                      ) : (
                        <div>
                          <span className="font-medium text-black block">{bullet.name}</span>
                          <span className="text-black/60 text-sm">{bullet.detail}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {service.extra && (
                <p className="text-lg italic text-rose font-serif border-l-2 border-rose pl-4 py-1">
                  "{service.extra}"
                </p>
              )}

              <div className="pt-4">
                <Link
                  to="/book"
                  state={{ selectedService: service.title }}
                  className="inline-block bg-black hover:bg-rose text-white px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300"
                >
                  {service.cta}
                </Link>
              </div>
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
}