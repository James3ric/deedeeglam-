import { Link } from "react-router";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import heroImg from "../../imports/about_me.jpeg";

// Full Glam images
import fullGlam1 from "../../imports/full_glam/full_glam.jpeg";
import fullGlam2 from "../../imports/full_glam/full_glam_2.jpeg";

// Soft Glam images
import softGlam1 from "../../imports/soft_glam/soft_glam.jpeg";
import softGlam2 from "../../imports/soft_glam/soft_glam_2.jpeg";

// Brows images
import brow1 from "../../imports/brows/brow.jpeg";

// ─── Slideshow Component ───────────────────────────────────────────────────────
interface SlideshowProps {
  images: string[];
  interval?: number;
  alt?: string;
}

function Slideshow({ images, interval = 3500, alt = "" }: SlideshowProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${alt} ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dot indicators — only show if more than one image */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === current ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Home Page ─────────────────────────────────────────────────────────────────
export function Home() {
  const services = [
    {
      title: "Full Glam",
      desc: "Bold, defined, and glamorous. Made to last.",
      images: [fullGlam1, fullGlam2],
      link: "/book",
    },
    {
      title: "Soft Glam",
      desc: "Subtle, radiant, and naturally enhancing.",
      images: [softGlam1, softGlam2],
      link: "/book",
    },
    {
      title: "Ombré Brows",
      desc: "Soft powdered brows. Long-lasting results.",
      images: [brow1],
      link: "/book",
    },
  ];

  const galleryImages = [
    fullGlam1,
    softGlam1,
    brow1,
    fullGlam2,
    softGlam2,
    heroImg,
    fullGlam1,
    softGlam2,
  ];

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative h-[90vh] min-h-[600px] w-full bg-black overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={heroImg}
            alt="Deedees Glam"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center text-cream px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif font-light tracking-wide mb-4"
          >
            Deedees Glam
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl font-serif italic mb-6 text-blush"
          >
            Flawless glam for every occasion
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg mb-10 max-w-lg mx-auto opacity-90"
          >
            Welcome to Deedees Glam, where beauty meets precision and elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              to="/book"
              className="bg-rose hover:bg-white hover:text-black text-white px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300"
            >
              Book Your Session
            </Link>
            <Link
              to="/services"
              className="border border-cream hover:bg-cream hover:text-black text-cream px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-cream px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl leading-relaxed text-black/80"
          >
            We specialise in enhancing your natural beauty through soft glam and
            full glam looks tailored to suit your unique features. Whether you
            prefer a subtle, radiant finish or a bold, glamorous transformation,
            our goal is to make you look and feel your absolute best.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl leading-relaxed text-black/80"
          >
            From birthdays and parties to weddings and special events, we
            deliver a luxury makeup experience designed to leave you confident,
            camera-ready, and glowing.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed text-black/80 font-medium text-rose"
          >
            We also offer expertly crafted ombré brows, giving you a soft,
            natural, and long-lasting finish that enhances your facial features
            effortlessly.
          </motion.p>
        </div>
      </section>

      {/* ── Services with Slideshows ─────────────────────────────────────────── */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
              Our Services
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                {/* Slideshow replaces static image */}
                <div className="mb-6 aspect-[4/5]">
                  <Slideshow
                    images={service.images}
                    alt={service.title}
                    interval={3500 + idx * 500}
                  />
                </div>

                <h3 className="text-2xl font-serif mb-3 text-black">
                  {service.title}
                </h3>
                <p className="text-black/60 mb-6 flex-grow">{service.desc}</p>
                <Link
                  to={service.link}
                  className="inline-block text-rose font-medium uppercase tracking-wider text-sm hover:text-black transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-rose hover:after:bg-black after:transition-colors"
                >
                  Book This
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Strip ────────────────────────────────────────────────────── */}
      <section className="py-12 bg-cream overflow-hidden">
        <div className="w-full">
          <div
            className="flex gap-4 px-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="flex-none w-[280px] sm:w-[320px] aspect-[4/5] snap-center overflow-hidden rounded-lg"
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-gold mb-8 text-4xl">❝</div>
          <p className="text-2xl md:text-4xl font-serif italic text-black leading-snug mb-8">
            "Absolutely flawless experience. My makeup lasted all night and I
            have never felt more beautiful. Priscilla is a true artist!"
          </p>
          <p className="text-sm uppercase tracking-widest text-black/60">
            — Sarah M.
          </p>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-rose text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
            ✨ Book your glam session today and experience beauty at its finest.
          </h2>
          <Link
            to="/book"
            className="inline-block bg-white text-rose hover:bg-black hover:text-white px-10 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 shadow-xl"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
