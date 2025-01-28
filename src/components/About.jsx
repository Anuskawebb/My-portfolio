import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Tilt options={{ max: 25, scale: 1.05 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
              <p className="mb-4">
                Front-end web developer skilled in HTML, CSS, and JavaScript, currently learning React.js.
                Dedicated to building user-friendly, impactful web applications and eager to explore
                full-stack development and emerging technologies like Web3.0.
              </p>
            </motion.div>
          </Tilt>

          <Tilt options={{ max: 25, scale: 1.05 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div>
                <p className="font-medium">Bachelor of Computer Application</p>
                <p>Sister Nivedita University</p>
                <p>Graduation Year: 2025</p>
                <p className="text-purple-500">CGPA: 9+</p>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;