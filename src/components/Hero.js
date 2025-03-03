import React from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  const descriptionText = "Results-driven Product Manager with a proven track record in AI-driven healthcare, fintech, and smart home technology. Adept at leading cross-functional teams, defining and executing product strategies, and driving customer-centric innovation. Expertise in Agile methodologies, data-driven decision-making, and go-to-market strategies, resulting in increased efficiency, user satisfaction, and revenue growth. Strong technical foundation in Python, SQL, and data visualization tools, with hands-on experience in AI, machine learning, and data analytics.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="hero-title"
          variants={itemVariants}
        >
          Hi, I'm Jasmitha Eluri{' '}
          <motion.span
            className="wave"
            animate={{ rotate: [0, 14, -8, 14, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            👋
          </motion.span>
        </motion.h1>

        <motion.h2 
          className="hero-subtitle"
          variants={itemVariants}
        >
          Product Manager & Strategic Leader
        </motion.h2>

        <motion.div 
          className="hero-description"
          variants={itemVariants}
        >
          <TypeAnimation
            sequence={[descriptionText]}
            wrapper="p"
            speed={70}
            cursor={true}
            repeat={0}
            className="typing-text"
          />
        </motion.div>
        
        <motion.div 
          className="social-links-container"
          variants={itemVariants}
          style={{ margin: '3rem 0', position: 'relative', zIndex: 100 }}
        >
          <motion.h3 
            variants={itemVariants}
            style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}
          >
            Connect With Me
          </motion.h3>
          <nav className="social-links">
            {[
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/jasmitha-chowdary/", text: "LinkedIn" },
              { Icon: FaGithub, href: "https://github.com/jasmithaeluri", text: "GitHub" },
              { Icon: FaMedium, href: "https://medium.com/@jasmithaeluri", text: "Medium" },
              { Icon: FaTwitter, href: "https://twitter.com/jasmithaeluri", text: "Twitter" },
              { Icon: FaEnvelope, href: "mailto:jasmithaeluri@gmail.com", text: "Email" }
            ].map(({ Icon, href, text }, i) => (
              <motion.a
                key={text}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link ${text.toLowerCase()}`}
                custom={i}
                variants={socialVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="social-icon-wrapper">
                  <Icon className="social-icon" />
                  <span className="social-text">{text}</span>
                </div>
              </motion.a>
            ))}
          </nav>
        </motion.div>

        <motion.div 
          className="cta-buttons"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
          <motion.a
            href="/resume.pdf"
            className="btn btn-secondary"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>
        </motion.div>
      </motion.div>
      
      <div className="hero-background">
        {[1, 2, 3, 4, 5].map((n) => (
          <motion.div
            key={n}
            className={`shape shape-${n}`}
            animate={{
              y: [0, -20, 0],
              x: [0, n % 2 === 0 ? 10 : -10, 0],
            }}
            transition={{
              duration: 3 + n,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
