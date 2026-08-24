import { motion } from 'framer-motion';

const featureCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    colorClass: 'icon-blue',
    title: 'Clean Code',
    description: (
      <>
        Writing maintainable, scalable code <br /> following best practices and modern standards.
      </>
    )
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="5.5" r="2.5"></circle>
        <circle cx="6.5" cy="10.5" r="2.5"></circle>
        <circle cx="6.5" cy="18.5" r="2.5"></circle>
        <circle cx="13.5" cy="22.5" r="2.5"></circle>
        <path d="M13.5 8c0 2-2 3-5.5 3-1-.5-1.5-1.5-1.5-2.5"></path>
        <path d="M19.5 12.5c-3 0-4-2.5-4-5"></path>
        <path d="M13.5 20c0-2 2-3 5.5-3 1 .5 1.5 1.5 1.5 2.5"></path>
        <path d="M4.5 12.5c3 0 4 2.5 4 5"></path>
      </svg>
    ),
    colorClass: 'icon-purple',
    title: 'Creative Design',
    description: 'Crafting intuitive, beautiful interfaces that delight users and solve real problems.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
      </svg>
    ),
    colorClass: 'icon-green',
    title: 'Fast Performance',
    description: 'Building optimized applications that load quickly and provide seamless experiences.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function About() {
  return (
    <section id="about" className="about section">
      {/* Modernized Background Animations */}
      <div className="about-bg-grid"></div>
      <motion.div
        className="about-bg-glow"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.9, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        style={{ position: 'relative', zIndex: 2 }}
      >
        <h2 className="section-title">About Me - Behind the Code!!</h2>
        <p className="section-subtitle">
          MCA graduate and passionate Software Developer with expertise in software development, web development, Android application development, machine learning, and deep learning. Proficient in Java, Python, SQL, HTML, CSS, JavaScript, and modern web technologies. Experienced in building responsive web interfaces, backend services, database-driven applications, and Android apps with efficient data handling. Skilled in developing machine learning and deep learning models for data analysis, prediction, classification, and intelligent automation. Adept at transforming complex requirements into clean, maintainable, and scalable solutions while continuously learning emerging technologies.

        </p>
      </motion.div>

      <motion.div
        className="feature-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {featureCards.map((card, index) => (
          <motion.div
            key={index}
            className="feature-card"
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: 'var(--shadow-md)' }}
          >
            <div className={`icon-wrapper ${card.colorClass}`}>
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
