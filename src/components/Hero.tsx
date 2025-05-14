import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Phone, Download, ChevronDown } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br from-accent-900/20 via-neutral-950 to-primary-900/20`}>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center"></div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg md:text-xl font-semibold text-accent-400 mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
              Sampath Kumar Andhavarapu
            </h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl font-medium">
                <span className="text-neutral-300">Full Stack Developer</span>
                <span className="mx-2 text-accent-400">|</span>
                <span className="text-neutral-300">React.js</span>
                <span className="mx-2 text-accent-400">|</span>
                <span className="text-neutral-300">Java</span>
                <span className="mx-2 text-accent-400">|</span>
                <span className="text-neutral-300">SQL</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center space-x-5 mb-8"
          >
            <a
              href="https://www.linkedin.com/in/sampathkumar-andhavarapu-247022249"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <div className="p-3 rounded-full bg-neutral-800/50 text-primary-400 hover:bg-primary-900/30 backdrop-blur-sm">
                <Linkedin size={24} />
              </div>
            </a>
            <a
              href="https://github.com/sampath0003"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <div className="p-3 rounded-full bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50 backdrop-blur-sm">
                <Github size={24} />
              </div>
            </a>
            <a
              href="mailto:sampathandhavarapu@gmail.com"
              className="transform transition-transform hover:scale-110"
              aria-label="Email"
            >
              <div className="p-3 rounded-full bg-neutral-800/50 text-accent-400 hover:bg-accent-900/30 backdrop-blur-sm">
                <Mail size={24} />
              </div>
            </a>
            <a
              href="tel:+919154344743"
              className="transform transition-transform hover:scale-110"
              aria-label="Phone"
            >
              <div className="p-3 rounded-full bg-neutral-800/50 text-green-400 hover:bg-green-900/30 backdrop-blur-sm">
                <Phone size={24} />
              </div>
            </a>
          </motion.div>

          {/* Call to action buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-lg text-base font-medium shadow-md bg-accent-600 hover:bg-accent-500 text-white transition-colors duration-300 backdrop-blur-sm"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-flex items-center px-6 py-3 rounded-lg text-base font-medium shadow-md bg-neutral-800/50 hover:bg-neutral-700/50 text-neutral-100 transition-colors duration-300 backdrop-blur-sm cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} className="text-accent-400" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;