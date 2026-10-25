import { motion, useReducedMotion } from "framer-motion";
import "./barber-hero.css";

const bookingHref = "#dados-contato";

const barberImages = [
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=80",
    alt: "Corte masculino sendo finalizado na barbearia",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=700&q=80",
    alt: "Corte masculino curto com acabamento detalhado",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=700&q=80",
    alt: "Barbeiro trabalhando em um corte masculino",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80",
    alt: "Interior de uma barbearia",
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

function BarberHero() {
  const prefersReducedMotion = useReducedMotion();
  const galleryImages = [...barberImages, ...barberImages];

  return (
    <section className="barber-hero" id="inicio" aria-labelledby="hero-title">
      <div className="barber-hero__shade" aria-hidden="true" />

      <div className="barber-hero__content">
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeInVariants}
          className="barber-hero__tagline"
        >
          <span className="barber-hero__mark" aria-hidden="true">
            011
          </span>
          Barbearia em Araçoiaba da Serra
        </motion.p>

        <motion.h1
          id="hero-title"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="barber-hero__title"
        >
          <motion.span variants={fadeInVariants}>
            BARBEARIA EM ARAÇOIABA DA SERRA
          </motion.span>
          <motion.span
            variants={fadeInVariants}
            className="barber-hero__title-accent"
          >
            FAÇA VALER CADA DETALHE NA 011 BARBER.
          </motion.span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeInVariants}
          transition={{ delay: 0.3 }}
          className="barber-hero__description"
        >
          Corte preciso, barba bem-feita e cuidado de verdade para renovar seu
          visual.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInVariants}
          transition={{ delay: 0.45 }}
          className="barber-hero__actions"
        >
          <motion.a
            href={bookingHref}
            whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
            className="barber-hero__cta"
          >
            Consultar agendamento
            <i className="fa-brands fa-whatsapp" aria-hidden="true" />
          </motion.a>
          <a className="barber-hero__secondary" href="#servicos">
            Conheça os serviços
          </a>
        </motion.div>
      </div>

      <div
        className="barber-hero__gallery"
        aria-label="Galeria de cortes e serviços da 011 Barber"
      >
        <motion.div
          className="barber-hero__track"
          animate={prefersReducedMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {galleryImages.map((image, index) => (
            <div
              className="barber-hero__photo"
              key={`${image.src}-${index}`}
              style={{ rotate: `${index % 2 === 0 ? -2 : 2}deg` }}
            >
              <img
                src={image.src}
                alt={index < barberImages.length ? image.alt : ""}
                loading={index < barberImages.length ? "eager" : "lazy"}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { BarberHero };
