import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface CertificatesProps {
  isDarkMode: boolean;
}

const Certificates: React.FC<CertificatesProps> = ({ isDarkMode }) => {
  const certificates = [
    {
      title: 'Introduction to Machine Learning',
      issuer: 'NPTEL',
      date: 'July 2023',
      credential: '#ML20230701',
      link: '#',
    },
    {
      title: 'Object Oriented Programming in Java',
      issuer: 'Coursera',
      date: 'May 2022',
      credential: '#OOP20220512',
      link: '#',
    },
    {
      title: 'Database Management (SQL)',
      issuer: 'HackerRank',
      date: 'November 2022',
      credential: '#SQL20221115',
      link: '#',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates</h2>
        <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
        <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
          Professional certifications that validate my skills and knowledge in various technical domains.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -5 }}
            className={`p-6 rounded-xl shadow-md transition-all duration-300 ${
              isDarkMode
                ? 'bg-neutral-800 hover:shadow-lg hover:shadow-primary-900/20'
                : 'bg-white hover:shadow-lg hover:shadow-primary-100'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <Award size={28} className="text-primary-500" />
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm ${
                  isDarkMode ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-700'
                }`}
              >
                <ExternalLink size={18} />
              </a>
            </div>
            <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
            <p className={`mb-1 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {certificate.issuer}
            </p>
            <p className={`text-sm mb-3 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
              {certificate.date}
            </p>
            <div
              className={`text-xs rounded-full px-3 py-1 inline-block ${
                isDarkMode ? 'bg-neutral-700 text-neutral-300' : 'bg-neutral-100 text-neutral-600'
              }`}
            >
              Credential: {certificate.credential}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certificates;