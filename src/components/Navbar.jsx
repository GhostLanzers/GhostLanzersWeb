import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Ghost, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '/Holyspirit_Pic.jpg'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: -20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
                src={Logo}
                alt={<Ghost className="h-8 w-8" />}
                className="h-8 w-8 rounded-full object-cover"
              />
            <span className="text-2xl font-bold tracking-wider">GHOSTLANZERS</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['HOME', 'COMPANIES', 'ABOUT'].map((item) => (
              <Link
                key={item}
                to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                className={`text-sm tracking-wider hover:text-orange-400 transition-colors ${
                  location.pathname === (item === 'HOME' ? '/' : `/${item.toLowerCase()}`)
                    ? 'text-orange-400'
                    : 'text-gray-300'
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden relative">
            <motion.button
              onClick={toggleDropdown}
              className="p-2 text-gray-300 hover:text-orange-400 transition-colors"
              animate={isDropdownOpen ? "open" : "closed"}
              variants={iconVariants}
              transition={{ duration: 0.3 }}
            >
              <Menu className="h-6 w-6" />
            </motion.button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute right-0 mt-4 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
                >
                  {['HOME', 'COMPANIES', 'ABOUT'].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                        onClick={toggleDropdown}
                        className={`block px-4 py-3 text-sm hover:bg-orange-600/20 transition-colors ${
                          location.pathname === (item === 'HOME' ? '/' : `/${item.toLowerCase()}`)
                            ? 'text-orange-400'
                            : 'text-gray-300'
                        }`}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;