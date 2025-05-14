import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ text: string; type: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        text: 'Thank you! Your message has been sent successfully.',
        type: 'success',
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'sampathandhavarapu@gmail.com',
      link: 'mailto:sampathandhavarapu@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9154344743',
      link: 'tel:+919154344743',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Andhra Pradesh, India',
      link: '#',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'sampathkumar-andhavarapu',
      link: 'https://www.linkedin.com/in/sampathkumar-andhavarapu-247022249',
    },
    {
      icon: Github,
      title: 'GitHub',
      content: 'sampath0003',
      link: 'https://github.com/sampath0003',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Have a question or want to work together? Feel free to contact me!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className={`p-6 rounded-xl shadow-md ${
              isDarkMode ? 'bg-neutral-800' : 'bg-white'
            }`}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {contactInfo.map((info, index) => (
                  <motion.li key={index} variants={item} className="flex items-start">
                    <div className={`p-3 rounded-full mr-4 ${
                      isDarkMode ? 'bg-primary-900/30' : 'bg-primary-50'
                    }`}>
                      <info.icon size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <a
                        href={info.link}
                        target={info.title === 'Location' ? '' : '_blank'}
                        rel="noopener noreferrer"
                        className={`text-sm ${
                          isDarkMode
                            ? 'text-neutral-300 hover:text-primary-400'
                            : 'text-neutral-600 hover:text-primary-600'
                        } transition-colors`}
                      >
                        {info.content}
                      </a>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className={`p-6 rounded-xl shadow-md ${
              isDarkMode ? 'bg-neutral-800' : 'bg-white'
            }`}>
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
              {submitMessage && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitMessage.type === 'success'
                      ? isDarkMode
                        ? 'bg-green-900/30 text-green-300'
                        : 'bg-green-100 text-green-800'
                      : isDarkMode
                      ? 'bg-red-900/30 text-red-300'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${
                        isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:outline-none transition-colors ${
                        isDarkMode
                          ? 'bg-neutral-700 border-neutral-600 text-white focus:ring-primary-700'
                          : 'bg-white border-neutral-300 text-neutral-900 focus:ring-primary-200'
                      }`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${
                        isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
                      }`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:outline-none transition-colors ${
                        isDarkMode
                          ? 'bg-neutral-700 border-neutral-600 text-white focus:ring-primary-700'
                          : 'bg-white border-neutral-300 text-neutral-900 focus:ring-primary-200'
                      }`}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:outline-none transition-colors ${
                      isDarkMode
                        ? 'bg-neutral-700 border-neutral-600 text-white focus:ring-primary-700'
                        : 'bg-white border-neutral-300 text-neutral-900 focus:ring-primary-200'
                    }`}
                  />
                </div>
                
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:outline-none transition-colors ${
                      isDarkMode
                        ? 'bg-neutral-700 border-neutral-600 text-white focus:ring-primary-700'
                        : 'bg-white border-neutral-300 text-neutral-900 focus:ring-primary-200'
                    }`}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center px-6 py-3 rounded-lg text-base font-medium shadow-md transition-colors ${
                    isDarkMode
                      ? 'bg-primary-600 hover:bg-primary-500 text-white'
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;