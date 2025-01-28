import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-dark-bg shadow-lg shadow-purple-500/10'
            : 'bg-white shadow-lg shadow-purple-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className={`text-xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              } hover:text-purple-500 transition-colors duration-300`}
            >
              AS
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 ${
                  darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun size={20} className="hover:rotate-45 transition-transform duration-300" />
                ) : (
                  <Moon size={20} className="hover:-rotate-45 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full mr-2 transition-all duration-300 ${
                darkMode
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${
                darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div
            className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-all duration-300 ${
              darkMode ? 'bg-dark-bg' : 'bg-white'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;