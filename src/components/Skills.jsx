import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Core Programming',
    emoji: '💻',
    color: '#3b82f6',
    colorLight: 'rgba(59, 130, 246, 0.12)',
    skills: [
      { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
    ]
  },
  {
    title: 'Web & App Development',
    emoji: '🌐',
    color: '#6366f1',
    colorLight: 'rgba(99, 102, 241, 0.12)',
    skills: [
      { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Bootstrap', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Android Studio', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' }
    ]
  },
  {
    title: 'Databases & Tools',
    emoji: '🗄️',
    color: '#3b82f6',
    colorLight: 'rgba(59, 130, 246, 0.12)',
    skills: [
      { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
    ]
  },
  {
    title: 'Data & Analytics',
    emoji: '📊',
    color: '#6366f1',
    colorLight: 'rgba(99, 102, 241, 0.12)',
    skills: [
      { name: 'Pandas', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'Matplotlib', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { 
        name: 'Seaborn', 
        customIcon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="14" width="4" height="7" rx="1" fill="#4B72B8" />
            <rect x="10" y="8" width="4" height="13" rx="1" fill="#DD8452" />
            <rect x="17" y="3" width="4" height="18" rx="1" fill="#55A868" />
          </svg>
        ) 
      },
      { 
        name: 'Power BI', 
        customIcon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.147 21v-8.235h3.706V21h-3.706ZM4.588 21V15.44h3.706V21H4.588ZM15.706 3v18h3.706V3h-3.706Z" fill="#F2C811" />
          </svg>
        ) 
      }
    ]
  },
  {
    title: 'AI & Machine Learning',
    emoji: '🤖',
    color: '#3b82f6',
    colorLight: 'rgba(59, 130, 246, 0.12)',
    skills: [
      { name: 'TensorFlow', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'Streamlit', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg' },
      { name: 'OpenCV', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
      { name: 'Scikit-learn', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
      {
        name: 'FAISS',
        customIcon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="#3b82f6" strokeWidth="2" fill="none"/>
            <circle cx="12" cy="12" r="4" fill="#3b82f6" opacity="0.6"/>
            <line x1="3" y1="12" x2="21" y2="12" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4"/>
            <line x1="12" y1="3" x2="12" y2="21" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4"/>
          </svg>
        )
      },
      {
        name: 'Groq LLM',
        customIcon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="6" width="20" height="12" rx="3" fill="#6366f1" opacity="0.2" stroke="#6366f1" strokeWidth="1.5"/>
            <circle cx="8" cy="12" r="2" fill="#6366f1"/>
            <circle cx="14" cy="12" r="2" fill="#6366f1" opacity="0.6"/>
            <circle cx="19" cy="12" r="1.5" fill="#6366f1" opacity="0.3"/>
          </svg>
        )
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  }
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      {/* Ambient background glow */}
      <div className="skills-bg-glow"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">A comprehensive overview of my technical expertise and tools.</p>
      </motion.div>

      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {skillCategories.map((category, catIndex) => {
          /* Render invisible ghost spacer for null entries */
          if (!category) {
            return <div key={catIndex} className="skill-spacer" aria-hidden="true" />;
          }

          return (
            <motion.div 
              key={catIndex} 
              className="skill-category"
              variants={categoryVariants}
              style={{ '--cat-color': category.color, '--cat-color-light': category.colorLight }}
              whileHover={{ y: -4, boxShadow: `0 20px 40px -12px ${category.color}33` }}
              transition={{ duration: 0.3 }}
            >
              {/* Top color accent bar */}
              <div className="skill-category-bar" style={{ background: `linear-gradient(90deg, ${category.color}, transparent)` }}></div>

              <div className="skill-header">
                <div className="skill-header-icon" style={{ background: category.colorLight }}>
                  <span className="skill-emoji">{category.emoji}</span>
                </div>
                <h3 style={{ color: category.color }}>{category.title}</h3>
              </div>

              <motion.div 
                className="skill-tags"
                variants={containerVariants}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex} 
                    className="skill-tag"
                    variants={tagVariants}
                    whileHover={{ 
                      scale: 1.08,
                      color: category.color,
                      borderColor: category.color,
                      background: category.colorLight,
                      boxShadow: `0 4px 16px -4px ${category.color}44`
                    }}
                  >
                    <span className="skill-tag-icon">
                      {skill.iconUrl ? (
                        <img 
                          loading="lazy" 
                          src={skill.iconUrl} 
                          alt={skill.name} 
                          width="22" 
                          height="22" 
                        />
                      ) : (
                        skill.customIcon
                      )}
                    </span>
                    <span className="skill-tag-name">{skill.name}</span>
                  </motion.span>
                ))}
              </motion.div>

              {/* Skill count badge */}
              <div className="skill-count-badge" style={{ color: category.color, background: category.colorLight }}>
                {category.skills.length} skills
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
