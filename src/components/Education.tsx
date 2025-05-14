import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, Award } from 'lucide-react';

interface EducationProps {
  isDarkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'GMR Institute Of Technology, Rajam',
      period: '2020-2024',
      grade: 'CGPA: 6.89',
      icon: Building,
    },
    {
      degree: 'Intermediate (12th Grade)',
      institution: 'Sri Chaitanya Jr College, Srikakulam',
      period: '2018-2020',
      grade: 'CGPA: 9.42',
      icon: Building,
    },
    {
      degree: 'Secondary Education (10th Grade)',
      institution: 'Ravindra Bharathi School, Cheepurupalli',
      period: '2017-2018',
      grade: 'CGPA: 10.0',
      icon: Building,
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

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
        <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
        <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
          My academic journey that has shaped my knowledge and skills in computer science and engineering.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-8"
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={item}
            className={`p-6 rounded-xl shadow-md transition-all duration-300 ${
              isDarkMode
                ? 'bg-neutral-800 hover:bg-neutral-700'
                : 'bg-white hover:shadow-lg'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center">
              <div className={`flex-shrink-0 p-4 rounded-full mb-6 md:mb-0 md:mr-6 ${
                isDarkMode ? 'bg-primary-900/50' : 'bg-primary-50'
              }`}>
                <edu.icon size={32} className="text-primary-600" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                <div className="flex flex-col md:flex-row md:items-center mb-2">
                  <div className="flex items-center mb-2 md:mb-0 md:mr-4">
                    <Building size={18} className={isDarkMode ? 'text-neutral-400 mr-2' : 'text-neutral-500 mr-2'} />
                    <span className={isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}>{edu.institution}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={18} className={isDarkMode ? 'text-neutral-400 mr-2' : 'text-neutral-500 mr-2'} />
                    <span className={isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}>{edu.period}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award size={18} className="text-accent-500 mr-2" />
                  <span className="font-medium">{edu.grade}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;