import React from 'react';
import { FaStar, FaCode, FaUsers, FaChartLine, FaTools, FaDatabase, FaTasks } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
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

  const metrics = [
    {
      icon: <FaChartLine />,
      value: '5+',
      label: 'Years Experience',
    },
    {
      icon: <FaStar />,
      value: '15+',
      label: 'Projects Delivered',
    },
    {
      icon: <FaUsers />,
      value: '20+',
      label: 'Teams Led',
    }
  ];

  const skillCategories = {
    'Languages & Development': {
      icon: <FaCode className="category-icon" />,
      description: 'Programming languages and development technologies',
      skills: [
        { name: 'Python', proficiency: 90 },
        { name: 'JavaScript', proficiency: 85 },
        { name: 'HTML/CSS', proficiency: 88 },
        { name: 'MySQL', proficiency: 85 }
      ]
    },
    'Tools & Platforms': {
      icon: <FaTools className="category-icon" />,
      description: 'Professional tools and collaboration platforms',
      skills: [
        { name: 'MS Excel', proficiency: 95 },
        { name: 'Power BI', proficiency: 90 },
        { name: 'JIRA & Confluence', proficiency: 92 },
        { name: 'Figma & Miro', proficiency: 88 },
        { name: 'Epic & Veeva', proficiency: 85 }
      ]
    },
    'Data Analytics': {
      icon: <FaDatabase className="category-icon" />,
      description: 'Data analysis and visualization expertise',
      skills: [
        { name: 'SQL & Databases', proficiency: 92 },
        { name: 'Tableau', proficiency: 88 },
        { name: 'Snowflake', proficiency: 85 },
        { name: 'Data Analysis', proficiency: 90 },
        { name: 'Query Functions', proficiency: 88 }
      ]
    },
    'Project Management': {
      icon: <FaTasks className="category-icon" />,
      description: 'Project management and team collaboration',
      skills: [
        { name: 'Agile/Lean', proficiency: 95 },
        { name: 'Requirement Gathering', proficiency: 92 },
        { name: 'Problem-Solving', proficiency: 90 },
        { name: 'Communication', proficiency: 95 },
        { name: 'Team Leadership', proficiency: 92 }
      ]
    }
  };

  return (
    <section id="skills" className="s-skills dark">
      <motion.div
        ref={ref}
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            Professional Expertise
          </motion.h2>
          <motion.p 
            className="section-description"
            variants={itemVariants}
          >
            Comprehensive skill set combining technical proficiency, data analytics, and project management
          </motion.p>
        </motion.div>

        <motion.div 
          className="metrics-grid"
          variants={containerVariants}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="metric-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="metric-icon"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {metric.icon}
              </motion.div>
              <motion.div 
                className="metric-value"
                variants={itemVariants}
              >
                {metric.value}
              </motion.div>
              <motion.div 
                className="metric-label"
                variants={itemVariants}
              >
                {metric.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
        >
          {Object.entries(skillCategories).map(([category, { icon, description, skills }], categoryIndex) => (
            <motion.div
              key={category}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
              }}
            >
              <motion.div className="category-header">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {icon}
                </motion.div>
                <h3 className="category-title">{category}</h3>
              </motion.div>
              <p className="category-description">{description}</p>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-item"
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress" 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ 
                          duration: 1,
                          delay: 0.2 * (categoryIndex + index),
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
