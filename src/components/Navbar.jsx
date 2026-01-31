import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Our Why', path: '/about' },
  { 
    name: 'Work With Us', 
    path: '/services',
    submenu: [
      { name: 'Coaching', path: '/services#coaching' },
      { name: 'Workshops', path: '/services#workshops' },
      { name: 'Keynotes', path: '/services#keynotes' },
      { name: 'Adventure', path: '/services#adventure' },
    ]
  },
  { name: 'Tima', path: '/tima' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveSubmenu(null)
  }, [location])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-mg-dark/90 backdrop-blur-lg shadow-lg shadow-black/20' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3"
              >
                {/* Logo icon */}
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-mg-mountain-600 to-mg-gold-500 rounded-xl rotate-45 group-hover:rotate-[60deg] transition-transform duration-500" />
                  <div className="absolute inset-1 bg-mg-dark rounded-lg rotate-45 group-hover:rotate-[60deg] transition-transform duration-500" />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-heading font-bold text-lg">
                    MG
                  </span>
                </div>
                <div className="hidden sm:block">
                  <span className="block text-white font-heading font-bold text-lg leading-none">
                    Mountain
                  </span>
                  <span className="block text-mg-gold-500 font-heading text-sm tracking-wider">
                    GIPSY
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    to={item.path}
                    className={`relative py-2 text-sm font-medium tracking-wide transition-colors ${
                      location.pathname === item.path
                        ? 'text-mg-gold-500'
                        : 'text-mg-gray-400 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-mg-ice-500 to-mg-gold-500"
                      />
                    )}
                  </Link>

                  {/* Submenu */}
                  <AnimatePresence>
                    {item.submenu && activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="glass-effect rounded-xl p-2 min-w-[180px]">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-mg-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-gradient-to-r from-mg-mountain-700 to-mg-mountain-900 text-white font-medium rounded-full text-sm shadow-lg shadow-mg-mountain-800/25 hover:from-mg-gold-600 hover:to-mg-gold-500 hover:shadow-mg-gold-500/30 transition-all duration-300"
                >
                  Schedule a Call
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 bg-white rounded-full origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                  className="block h-0.5 bg-white rounded-full"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 bg-white rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-mg-dark/95 backdrop-blur-lg" />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute top-20 right-0 bottom-0 w-full max-w-sm bg-mg-darker/80 p-6"
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-3 px-4 text-lg font-heading rounded-lg transition-colors ${
                        location.pathname === item.path
                          ? 'text-mg-gold-500 bg-white/5'
                          : 'text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2 px-4 text-sm text-mg-gray-500 hover:text-white transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link to="/contact" className="block">
                  <button className="w-full py-3 bg-gradient-to-r from-mg-mountain-700 to-mg-mountain-900 text-white font-medium rounded-xl text-lg shadow-lg shadow-mg-mountain-800/25 hover:from-mg-gold-600 hover:to-mg-gold-500 transition-all duration-300">
                    Schedule a Call
                  </button>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
