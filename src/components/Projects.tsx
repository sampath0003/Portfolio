import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Code, CheckCircle, ExternalLink, Car, Brain } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Wheels for Rentals',
      description: 'A modern vehicle rental platform built with React.js, featuring a sleek user interface, secure payment processing, and real-time availability tracking.',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: Car,
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'JWT Auth'],
      features: [
        'Intuitive vehicle search and filtering system',
        'Real-time availability calendar and booking management',
        'Secure payment processing with Stripe integration',
        'User authentication and profile management',
        'Responsive design for all device sizes',
        'Admin dashboard for fleet management'
      ],
      link: 'https://wheels-for-rentals.netlify.app',
      github: 'https://github.com/sampath0003/wheels-for-rentals',
    },
    {
      title: 'Brain Tumor Classification',
      description: 'An advanced deep learning project that utilizes state-of-the-art neural networks to classify and segment brain tumors from MRI scans with high accuracy.',
      image: 'https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: Brain,
      technologies: ['Python', 'TensorFlow', 'Inception V3', 'ResNet50', 'OpenCV', 'NumPy'],
      features: [
        'Achieved 95% accuracy in tumor classification',
        'Implemented multi-class segmentation for precise tumor boundary detection',
        'Data augmentation for improved model generalization',
        'Interactive web interface for medical professionals',
        'Comprehensive visualization of results',
        'Export functionality for medical reports'
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"></div>
        <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
          Showcasing my technical expertise through real-world applications and innovative solutions.
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
            className={`overflow-hidden rounded-xl shadow-lg transition-all duration-300 ${
              isDarkMode 
                ? 'bg-neutral-900/50 hover:bg-neutral-800/50 backdrop-blur-sm' 
                : 'bg-white hover:shadow-xl'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative overflow-hidden h-64 md:h-auto group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <project.icon size={48} className="absolute bottom-4 left-4 text-white/80" />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
                    {project.title}
                  </h3>
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
                              ? 'bg-neutral-800 text-neutral-200'
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
                      isDarkMode ? 'text-accent-400 hover:text-accent-300' : 'text-accent-600 hover:text-accent-500'
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
                          <CheckCircle size={16} className="text-accent-500 mt-1 mr-2 flex-shrink-0" />
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
                      className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isDarkMode
                          ? 'bg-neutral-800 hover:bg-neutral-700 text-white'
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
                      className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isDarkMode
                          ? 'bg-accent-600 hover:bg-accent-500 text-white'
                          : 'bg-accent-600 hover:bg-accent-700 text-white'
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