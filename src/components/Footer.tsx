import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-800'} text-white py-12`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-primary-500">SK</span> Portfolio
            </h2>
            <p className="text-neutral-400 max-w-md">
              A passionate developer focused on creating exceptional digital experiences
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/sampathkumar-andhavarapu-247022249"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/sampath0003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:sampathandhavarapu@gmail.com"
              className="text-neutral-400 hover:text-primary-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+919154344743"
              className="text-neutral-400 hover:text-primary-500 transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Sampath Kumar Andhavarapu. All rights reserved.
            </p>
            
            <div className="flex items-center">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-neutral-400 hover:text-primary-500 transition-colors flex items-center cursor-pointer"
              >
                <span className="mr-2">Back to top</span>
                <ArrowUp size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;