import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Tilt } from 'react-tilt';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'Amazon Clone',
      description: 'Built using HTML and CSS. Designed and developed front-end interfaces with responsive layouts.',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=1000',
      tech: ['HTML', 'CSS'],
      github: 'https://github.com/Anuskawebb/amazon-clone',
    },
    {
      title: 'Weather API Application',
      description: 'Created using HTML, CSS, and JavaScript. Integrated a 7-day weather forecast feature and dynamic icons.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000',
      tech: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
      github: 'https://github.com/Anuskawebb/weather-app',
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Tilt key={project.title} options={{ max: 25, scale: 1.05 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-500 hover:text-purple-600 transition-colors duration-300"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-500 hover:text-purple-600 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;