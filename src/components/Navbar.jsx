import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      setIsScrolled(window.scrollY > 50);

      // Active section highlight
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id') || 'home';
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync theme to body class
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <a href="#home" className="logo-container" onClick={(e) => handleLinkClick(e, '#home')}>
        <div className="logo-badge">MW</div>
        <div className="logo-text">
          <span className="logo-first-name">Mohammed</span>
          <span className="logo-last-name">Waheed</span>
        </div>
      </a>

      {/* Desktop Links */}
      <ul className="nav-links desktop-only">
        {navItems.map((item) => (
          <li key={item.label}>
            <a 
              href={item.href}
              className={activeSection === item.href.substring(1) ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <motion.span 
                  className="nav-active-dot" 
                  layoutId="activeDot"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button 
          onClick={toggleTheme} 
          className="theme-toggle" 
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
        </button>

        {/* Mobile Hamburger Button */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-links">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className={activeSection === item.href.substring(1) ? 'active' : ''}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
