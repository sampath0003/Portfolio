import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cpu } from 'lucide-react';

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Java', level: 85 },
        { name: 'C++', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'JavaScript', level: 80 },
      ],
    },
    {
      title: 'Web Development',
      icon: Server,
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'Spring Boot', level: 65 },
      ],
    },
    {
      title: 'Database Technologies',
      icon: Database,
      skills: [
        { name: 'SQL', level: 80 },
        { name: 'DBMS', level: 75 },
        { name: 'Oracle RDBMS', level: 70 },
      ],
    },
    {
      title: 'Other Technologies',
      icon: Cpu,
      skills: [
        { name: 'Git', level: 75 },
        { name: 'RESTful APIs', level: 80 },
        { name: 'Machine Learning', level: 65 },
      ],
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
    <div className={`${isDarkMode ? 'bg-neutral-800/50' : 'bg-neutral-100/50'} py-16`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            My technical expertise and competencies acquired through education and projects.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={item}
              className={`p-6 rounded-xl shadow-md ${
                isDarkMode ? 'bg-neutral-800' : 'bg-white'
              }`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-full mr-4 ${
                    isDarkMode ? 'bg-primary-900/50' : 'bg-primary-50'
                  }`}
                >
                  <category.icon size={24} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span
                        className={`text-sm ${
                          isDarkMode ? 'text-neutral-400' : 'text-neutral-500'
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`w-full h-2 rounded-full ${
                        isDarkMode ? 'bg-neutral-700' : 'bg-neutral-200'
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          skill.level >= 80
                            ? 'bg-green-500'
                            : skill.level >= 70
                            ? 'bg-primary-500'
                            : 'bg-accent-500'
                        }`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;