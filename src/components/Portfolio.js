import React, { useState } from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaTools } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: "Healthcare Analytics Platform",
      shortDescription: "AI-driven healthcare analytics platform for patient care optimization",
      fullDescription: "Led the development of an innovative healthcare analytics platform that leverages AI and machine learning to optimize patient care pathways. The platform processes millions of patient records to provide actionable insights for healthcare providers.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      impact: [
        "Reduced patient readmission rates by 35%",
        "Improved diagnostic accuracy by 40%",
        "Generated $2.5M in annual cost savings"
      ],
      role: "Product Manager",
      duration: "12 months",
      link: "#"
    },
    {
      id: 2,
      title: "FinTech Payment Solution",
      shortDescription: "Modern payment processing platform for global transactions",
      fullDescription: "Spearheaded the development of a cutting-edge payment processing platform that handles cross-border transactions with enhanced security and reduced processing times.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800",
      technologies: ["Node.js", "MongoDB", "Docker", "Stripe API"],
      impact: [
        "Processed $50M in transactions within first quarter",
        "Reduced transaction time by 60%",
        "Achieved 99.99% uptime"
      ],
      role: "Product Owner",
      duration: "9 months",
      link: "#"
    },
    {
      id: 3,
      title: "Smart Energy Management",
      shortDescription: "IoT-based energy monitoring and optimization system",
      fullDescription: "Developed an intelligent energy management system that uses IoT sensors and real-time analytics to optimize energy consumption in commercial buildings.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800",
      technologies: ["IoT", "Azure", "React Native", "GraphQL"],
      impact: [
        "20% reduction in energy costs",
        "Implementation in 50+ commercial buildings",
        "ROI achieved within 6 months"
      ],
      role: "Product Manager",
      duration: "15 months",
      link: "#"
    },
    {
      id: 4,
      title: "E-commerce Analytics Dashboard",
      shortDescription: "Real-time analytics platform for e-commerce businesses",
      fullDescription: "Created a comprehensive analytics dashboard that provides real-time insights into e-commerce metrics, customer behavior, and inventory management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
      technologies: ["React", "Redux", "Firebase", "D3.js"],
      impact: [
        "Increased conversion rates by 25%",
        "Optimized inventory turnover by 40%",
        "Reduced customer churn by 30%"
      ],
      role: "Product Owner",
      duration: "8 months",
      link: "#"
    }
  ];

  const ProjectModal = ({ project, onClose }) => (
    <motion.div 
      className="modal-overlay" 
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="modal-content" 
        onClick={e => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        }}
        exit={{ 
          scale: 0.8, 
          opacity: 0,
          transition: {
            duration: 0.2,
            ease: "easeIn"
          }
        }}
      >
        <motion.button 
          className="modal-close" 
          onClick={onClose}
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTimes />
        </motion.button>
        
        <div className="modal-header">
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.title}
          </motion.h2>
          <motion.div 
            className="modal-links"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt /> Live Demo
            </motion.a>
            <motion.a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> Repository
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          className="modal-body"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div 
            className="project-image"
            whileHover={{ scale: 1.02 }}
          >
            <img src={project.image} alt={project.title} />
          </motion.div>

          <div className="project-details">
            <motion.div 
              className="detail-section"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3>Overview</h3>
              <p>{project.fullDescription}</p>
            </motion.div>

            <motion.div 
              className="detail-section"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h3>Role & Duration</h3>
              <p><strong>Role:</strong> {project.role}</p>
              <p><strong>Duration:</strong> {project.duration}</p>
            </motion.div>

            <motion.div 
              className="detail-section"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h3>Technologies</h3>
              <div className="tech-stack">
                <FaTools className="tech-icon" />
                <div className="tech-list">
                  {project.technologies.map((tech, index) => (
                    <motion.span 
                      key={index} 
                      className="tech-tag"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="detail-section"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h3>Impact & Results</h3>
              <ul className="impact-list">
                {project.impact.map((impact, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    {impact}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="portfolio" className="portfolio">
      <motion.div
        ref={ref}
        className="portfolio-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          Portfolio
        </motion.h2>
        <motion.p 
          className="section-description"
          variants={itemVariants}
        >
          Showcasing innovative products that drive business growth
        </motion.p>

        <motion.div 
          className="portfolio-grid"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="portfolio-item"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProject(project)}
            >
              <motion.div 
                className="portfolio-content"
                layoutId={`project-${project.id}`}
              >
                <motion.div 
                  className="portfolio-image"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={project.image} alt={project.title} />
                </motion.div>
                <motion.div className="portfolio-info">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {project.shortDescription}
                  </motion.p>
                  <motion.div 
                    className="portfolio-tech"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="tech-badge"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
