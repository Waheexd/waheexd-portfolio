import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experienceData = [
  {
    role: 'Software Developer Intern',
    company: 'DifferentTech Solutions, Mangalore',
    period: "Feb'26 - Nov'26",
    bullets: [
      <>Developed and enhanced an <strong>Equipment Rental Management System</strong> using <strong>Spring Boot, MySQL, and Angular</strong>.</>,
      <>Implemented <strong>Vendor Management</strong> features including creating, viewing, updating, and deleting vendor records.</>,
      <>Contributed to the <strong>dashboard module</strong> to provide insights into vendor purchases and equipment borrowing activities.</>,
      <>Contributed to a <strong>report migration project</strong>, converting <strong>MS Access</strong> reports into <strong>JasperReports</strong> while ensuring data accuracy, validation, and improved performance.</>,
      <>Collaborated with <strong>cross-functional teams</strong> on report redesign, data validation, optimization, and application development to deliver scalable and maintainable solutions.</>
    ]
  }
];

const educationData = [
  {
    degree: 'Master of Computer Applications',
    institution: 'Manipal Institute of Technology, Manipal',
    period: '2024 - 2026',
    cgpa: '8.61',
    description: 'Focused on software engineering, data analysis, machine learning, and advanced web technologies.'
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'St Aloysius College, Mangalore',
    period: '2021 - 2024',
    cgpa: '8.68',
    description: 'Focused on core programming languages, database systems, data structures, and algorithms.'
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="experience section">
      {/* ambient background section glow */}
      <div className="experience-bg-glow"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">A timeline of my professional journey and academic background.</p>
      </motion.div>

      {/* Toggle Buttons */}
      <div className="toggle-container">
        <button 
          className={`toggle-btn ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          <Briefcase size={18} />
          Experience
        </button>
        <button 
          className={`toggle-btn ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          <GraduationCap size={18} />
          Education
        </button>
      </div>

      {/* Timeline Column Container */}
      <div className="timeline-container">
        <AnimatePresence mode="wait">
          {activeTab === 'experience' ? (
            <motion.div 
              key="experience-tab"
              className="timeline-column"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {experienceData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content card-blue">
                    <h4>{item.role}</h4>
                    <div className="timeline-meta">
                      <span className="timeline-org">{item.company}</span>
                      <span className="timeline-badge badge-blue">{item.period}</span>
                    </div>
                    <ul className="timeline-bullets">
                      {item.bullets.map((bullet, bIndex) => (
                        <li key={bIndex}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="education-tab"
              className="timeline-column"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {educationData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot dot-green"></div>
                  <div className="timeline-content card-green">
                    <h4>{item.degree}</h4>
                    <div className="timeline-meta">
                      <span className="timeline-org">{item.institution}</span>
                      <div className="timeline-badges">
                        <span className="timeline-badge badge-green">{item.period}</span>
                        <span className="timeline-badge badge-gray">CGPA: {item.cgpa}</span>
                      </div>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
