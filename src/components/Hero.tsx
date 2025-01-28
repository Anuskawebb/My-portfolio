import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4 py-32 sm:py-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-semibold text-indigo-600 mb-2">Hello, I'm</h2>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Anuska Sarkar</h1>
            <p className="text-xl mb-6">Front-end Web Developer | Building User-Friendly Applications</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Anuskawebb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-300 hover:border-purple-500 hover:text-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/anuska-s"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-300 hover:border-purple-500 hover:text-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:anuskaa0003@gmail.com"
                className="p-2 rounded-full border border-gray-300 hover:border-purple-500 hover:text-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300">
              <img
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-codeflow/main/user-content/anuska.jpg"
                alt="Anuska Sarkar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;