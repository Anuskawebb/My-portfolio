import { motion } from 'framer-motion';
import { Code2, Database, Globe, Laptop } from 'lucide-react';

const Skills = ({ darkMode }) => {
  const skills = [
    {
      category: 'Programming Languages',
      icon: <Code2 size={32} />,
      items: ['C++ (DSA, OOP)', 'Java (OOP)', 'Python', 'JavaScript'],
    },
    {
      category: 'Web Development',
      icon: <Globe size={32} />,
      items: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    },
    {
      category: 'Databases',
      icon: <Database size={32} />,
      items: ['SQL'],
    },
    {
      category: 'Core Knowledge',
      icon: <Laptop size={32} />,
      items: ['DBMS', 'Operating Systems'],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:scale-105 transition-all duration-300 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className="text-purple-500 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;