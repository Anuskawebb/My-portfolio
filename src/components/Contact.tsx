import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = ({ darkMode }: { darkMode: boolean }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-purple-500 transition-all duration-300`}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-purple-500 transition-all duration-300`}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-purple-500 transition-all duration-300`}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
            >
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;