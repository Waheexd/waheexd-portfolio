import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projectsData = [
  {
  title: 'Road Pothole Detection System – Real-Time Computer Vision & Road Safety',
  techStack: 'Python, Streamlit, Ultralytics (YOLOv8), OpenCV, PyTorch, NumPy, Pillow',
  description: 'Engineered a real-time computer vision system powered by custom-trained YOLOv8 deep learning models to detect, localize, and evaluate road surface defects and potholes. Features an interactive, theme-adaptive dashboard with dynamic confidence thresholding, sub-100ms inference latency, severity reliability tiers, and edge deployment readiness for in-vehicle dashcams and road safety inspection.',
  link: 'https://github.com/Waheexd/Pothole_Detection',
  imageUrl: '/resources/pothole_detection.jpg'
},
  {
    title: 'Medical Report Hub – AI-Powered Laboratory Report Analyzer',
    techStack: 'Python, Streamlit, Groq (Llama-3), PyMuPDF, HuggingFace, FAISS',
    description: 'Developed an advanced AI-powered web application using Retrieval-Augmented Generation (RAG) to extract and analyze medical data from PDFs and images, featuring automatic abnormal value detection, multi-lingual plain-language summaries, and an interactive chat assistant for lab results.',
    link: 'https://github.com/Waheexd/Medical-Report-Hub',
    imageUrl: '/resources/medical_report_hub.jpg'
  },
  {
    title: 'ShuttleScore – Badminton Scoring App',
    techStack: 'Android Studio, Java, SQLite',
    description: 'Developed an Android application for real-time badminton score tracking with configurable match formats, player management, and match history storage.',
    link: 'https://github.com/Waheexd/ShuttleScore_App',
    imageUrl: '/resources/badminton.webp'
  },
  {
    title: 'Customer Churn Analysis & Prediction System',
    techStack: 'Python (Pandas, NumPy, Scikit-learn), Matplotlib, Seaborn, Power BI, DAX',
    description: 'Developed an end-to-end machine learning pipeline to analyze customer behavior, accurately predict churn risk, and empower data-driven retention strategies.',
    link: 'https://github.com/Waheexd/Churn-Analysis.git',
    imageUrl: '/resources/patient.webp' // Same fallback image used in style.css (.bg-1)
  },
  {
    title: 'Patient Readmission Analysis',
    techStack: 'PySpark, Pandas, Matplotlib, Seaborn, Power BI',
    description: 'Built an end-to-end scalable machine learning pipeline to analyze and predict hospital readmissions using the UCI Diabetic Readmission dataset.',
    link: 'https://github.com/Waheexd/Patient-Readmission-Prediction-System-and-Dashboard.git',
    imageUrl: '/resources/patient.webp'
  },
  {
    title: 'LearNexus E-Learning Platform',
    techStack: 'HTML, CSS, JavaScript, Bootstrap, PHP, MySQL',
    description: 'Developed a responsive e-learning platform with secure user authentication, quiz modules with score validation, and a rule-based chatbot for student support.',
    link: 'https://github.com/Waheexd/learnNexus-Project.git',
    imageUrl: '/resources/elearn.webp'
  },
  {
    title: 'Research Project: Deepfake Detection',
    techStack: 'Python, TensorFlow/Keras, CNN, ResNet-50, LSTM, OpenCV, MATLAB',
    description: 'Developed a transfer learning–based CNN–LSTM architecture combining ResNet-50 for spatial feature extraction and LSTM for temporal sequence modeling in deepfake video detection.',
    link: '#',
    imageUrl: '/resources/deepfake.webp'
  }


];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-subtitle">A showcase of my recent projects and applications.</p>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: 'var(--shadow-blue)', borderColor: 'var(--accent-blue)' }}
          >
            <div
              className="card-image"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
              <p>{project.description}</p>

              {project.link !== '#' ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="project-link disabled-link">
                  View Project
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
