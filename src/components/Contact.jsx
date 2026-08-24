import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    'bot-field': ''
  });
  const [status, setStatus] = useState({
    type: '', // 'success', 'error', or ''
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check HTML5 validity
    const form = e.target;
    if (!form.checkValidity()) {
      setStatus({
        type: 'error',
        message: 'Please fill out all required fields with valid information (e.g. a valid email address).'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Netlify form data preparation
    const postData = {
      'form-name': 'contact',
      ...formData
    };

    const encodedBody = Object.keys(postData)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(postData[key]))
      .join('&');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodedBody
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', message: '', 'bot-field': '' });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 5000);
      })
      .catch(() => {
        setStatus({
          type: 'error',
          message: 'Oops! There was a problem submitting your form.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact section">
      <motion.div 
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
      </motion.div>

      <div className="contact-grid">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h3>Let's talk</h3>

          <div className="info-item">
            <div className="icon-wrapper icon-blue">
              <Mail size={20} />
            </div>
            <div>
              <span className="info-label">Email</span>
              <p className="info-value">mohdwhd3@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-wrapper icon-green">
              <Phone size={20} />
            </div>
            <div>
              <span className="info-label">Phone</span>
              <p className="info-value">+91 9741208317</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-wrapper icon-purple">
              <MapPin size={20} />
            </div>
            <div>
              <span className="info-label">Location</span>
              <p className="info-value">Bangalore, India</p>
            </div>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden" style={{ display: 'none' }}>
            <label>
              Don’t fill this out if you're human:{' '}
              <input 
                name="bot-field" 
                value={formData['bot-field']} 
                onChange={handleChange} 
              />
            </label>
          </p>

          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              placeholder="Tell me about your project..."
              rows={3}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {status.message && (
            <div className={`form-feedback ${status.type}`}>
              {status.message}
            </div>
          )}

          <button 
            type="submit" 
            className="submit-btn" 
            aria-label="Send Message"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
