import { Link } from "react-router";
import { motion } from "motion/react";
import aboutImg from "../../imports/about_me.jpeg";
import btsImg from "../../imports/soft_glam_2.jpeg";

export function About() {
  const values = [
    {
      icon: "✨",
      title: "Flawless Finish",
      desc: "Every look crafted with precision",
    },
    {
      icon: "💛",
      title: "All Skin Tones",
      desc: "Beauty for every woman",
    },
    {
      icon: "💋",
      title: "Confidence First",
      desc: "You leave feeling unforgettable",
    },
  ];

  return (
    <div className="bg-cream">
      {/* Header */}
      <section className="pt-24 pb-12 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-black mb-4">About Me</h1>
        <div className="w-16 h-0.5 bg-gold mx-auto"></div>
      </section>

      {/* Split Section */}
      <section className="py-12 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl"
          >
            <img 
              src={aboutImg} 
              alt="Priscilla - Deedees Glam" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-black/80 text-lg leading-relaxed"
          >
            <p className="text-2xl font-serif text-rose mb-8 leading-snug">
              "At Deedees Glam, beauty is more than makeup — it's about confidence, self-expression, and feeling empowered in your own skin."
            </p>
            <p>
              Hi, my name is Priscilla, the face behind Deedees Glam.
            </p>
            <p>
              With over 7 years of experience in the beauty industry (since 2018), I have worked with a diverse range of clients and brands, delivering professional makeup services across bridal events, photoshoots, and special occasions. My journey began in Nigeria, where I gained hands-on experience working on fashion shoots and with notable clients, refining my skills and artistry.
            </p>
            <p>
              Now based in London, I continue to provide personalised makeup services tailored to each client's unique style and features.
            </p>
            <p>
              I am passionate about enhancing the beauty of women of all skin tones, creating looks that are flawless, long-lasting, and naturally enhancing.
            </p>
            <p className="font-medium text-black">
              My mission is simple: To make every client feel confident, radiant, and unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {values.map((val, idx) => (
              <motion.div 
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-cream/50 hover:bg-cream transition-colors"
              >
                <div className="text-5xl mb-6">{val.icon}</div>
                <h3 className="text-2xl font-serif text-black mb-3">{val.title}</h3>
                <p className="text-black/60">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Photo Section */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden group">
          <img 
            src={btsImg} 
            alt="Behind the scenes" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg">
            <span className="text-sm font-medium tracking-widest uppercase">The Toolkit</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-rose text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">
            Ready to glow?
          </h2>
          <Link
            to="/book"
            className="inline-block bg-white text-rose hover:bg-black hover:text-white px-10 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 shadow-xl"
          >
            Book Your Session Today
          </Link>
        </div>
      </section>
    </div>
  );
}