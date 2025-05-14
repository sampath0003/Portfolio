import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Code, CheckCircle, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Wheels for Rentals',
      description: 'A responsive web application for vehicle rentals with seamless user experience and integrated payment system.',
      image: 'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'React.js', 'RESTful APIs'],
      features: [
        'Developed a highly responsive interface for seamless vehicle rentals',
        'Integrated RESTful APIs for smooth backend communication',
        'Implemented comprehensive form validation for accurate data entry',
        'Created a dynamic booking calendar with real-time availability updates',
      ],
      link: '#',
      github: '#',
    },
    {
      title: 'Brain Tumor Classification and Segmentation',
      description: 'An advanced machine learning project that classifies and segments brain tumors from MRI scans with high accuracy.',
      image: 'https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Python', 'Inception V3', 'ResNet50', 'OpenCV', 'TensorFlow'],
      features: [
        'Achieved 95% accuracy in tumor classification',
        'Optimized image quality for better model performance',
        'Implemented multi-class segmentation for MRI scans',
        'Developed data augmentation techniques to improve model generalization',
      ],
      link: '#',
      github: '#',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleProjectClick = (index: number) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
        <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
        <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
          Explore my latest projects showcasing my technical skills and problem-solving abilities.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className={`overflow-hidden rounded-xl shadow-md transition-all duration-300 ${
              isDarkMode ? 'bg-neutral-800' : 'bg-white'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="overflow-hidden h-64 md:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-sm rounded-full ${
                            isDarkMode
                              ? 'bg-neutral-700 text-neutral-200'
                              : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleProjectClick(index)}
                    className={`flex items-center text-sm font-medium mb-4 ${
                      isDarkMode ? 'text-primary-400' : 'text-primary-600'
                    }`}
                  >
                    <span>View Features</span>
                    <ChevronRight
                      size={16}
                      className={`ml-1 transform transition-transform ${
                        activeProject === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  
                  {activeProject === index && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`mb-4 pl-2 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}
                    >
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start mb-2">
                          <CheckCircle size={16} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 rounded text-sm font-medium ${
                        isDarkMode
                          ? 'bg-neutral-700 hover:bg-neutral-600 text-white'
                          : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-800'
                      }`}
                    >
                      <Code size={16} className="mr-2" />
                      View Code
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 rounded text-sm font-medium ${
                        isDarkMode
                          ? 'bg-primary-600 hover:bg-primary-500 text-white'
                          : 'bg-primary-600 hover:bg-primary-700 text-white'
                      }`}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;