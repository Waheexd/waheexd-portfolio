import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const nameToType = "Mohammed Waheed";

  useEffect(() => {
    let index = 0;
    let intervalId = null;
    
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (index < nameToType.length) {
          setTypedText(nameToType.slice(0, index + 1));
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 100);
    }, 800);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <section id="home" className="hero section">
      {/* Background Ambient Glow Spheres */}
      <div className="hero-bg-sphere sphere-1"></div>
      <div className="hero-bg-sphere sphere-2"></div>

      {/* Background Ribbon Wave Pattern */}
      <div className="hero-wave-container">
        <svg className="hero-wave-pattern" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.95" />
              <stop offset="50%" stopColor="var(--accent-purple)" stopOpacity="0.75" />
              <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <path d="M-100,400 C200,200 600,500 1000,300 C1200,200 1350,150 1600,200" stroke="url(#wave-grad)" strokeWidth="2.2" />
          <path d="M-100,410 C210,210 605,490 995,310 C1205,210 1350,160 1600,210" stroke="url(#wave-grad)" strokeWidth="2.2" />
          <path d="M-100,420 C220,220 610,480 990,320 C1210,220 1350,170 1600,220" stroke="url(#wave-grad)" strokeWidth="2.2" />
          <path d="M-100,430 C230,230 615,470 985,330 C1215,230 1350,180 1600,230" stroke="url(#wave-grad)" strokeWidth="2.2" />
          <path d="M-100,440 C240,240 620,460 980,340 C1220,240 1350,190 1600,240" stroke="url(#wave-grad)" strokeWidth="2.2" />
          <path d="M-100,450 C250,250 625,450 975,350 C1225,250 1350,200 1600,250" stroke="url(#wave-grad)" strokeWidth="2.2" />
          <path d="M-100,460 C260,260 630,440 970,360 C1230,260 1350,210 1600,260" stroke="url(#wave-grad)" strokeWidth="2.2" />
          <path d="M-100,470 C270,270 635,430 965,370 C1235,270 1350,220 1600,270" stroke="url(#wave-grad)" strokeWidth="2.2" />
          <path d="M-100,480 C280,280 640,420 960,380 C1240,280 1350,230 1600,280" stroke="url(#wave-grad)" strokeWidth="2.2" />
          <path d="M-100,490 C290,290 645,410 955,390 C1245,290 1350,240 1600,290" stroke="url(#wave-grad)" strokeWidth="2.2" />
        </svg>
      </div>

      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="highlight-blue typing-container">
              {typedText}
              <span className={`typing-cursor ${typedText.length === nameToType.length ? 'finished' : ''}`}>|</span>
            </span>
          </h1>

          <p className="hero-subtitle">Software Engineer</p>

          <p className="hero-desc">
            As a Software Engineer, I create scalable applications and write clean, optimized
            code to solve real-world problems. I’m passionate about building efficient systems that drive innovation and measurable results.
          </p>

          <div className="cta-container">
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">
                <Mail size={18} />
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-secondary">
                View My Work
                <ArrowRight size={18} className="cta-arrow-icon" />
              </a>
              <a href="/resources/resume.pdf" download="Mohammed_Waheed_Resume.pdf" className="btn btn-outline">
                <Download size={18} />
                Resume
              </a>
            </div>

            {/* Premium Social Dock */}
            <div className="social-dock">
              <a 
                href="https://github.com/Waheexd" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="social-dock-item github"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/mohammed-waheed-whd3/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="social-dock-item linkedin"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="mailto:mohdwhd3@gmail.com" 
                aria-label="Email" 
                className="social-dock-item email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <motion.div 
            className="hero-image-wrapper"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <img 
              src="/resources/profile.webp" 
              alt="Mohammed Waheed" 
              className="hero-profile-img"
              fetchPriority="high" 
              width="280" 
              height="280"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
