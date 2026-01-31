import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Work With Us': [
      { name: 'Coaching', path: '/services#coaching' },
      { name: 'Workshops', path: '/services#workshops' },
      { name: 'Keynotes', path: '/services#keynotes' },
      { name: 'Adventure', path: '/services#adventure' },
    ],
    'About': [
      { name: 'Our Why', path: '/about' },
      { name: 'Tima Deryan', path: '/tima' },
      { name: 'Milestones', path: '/tima#milestones' },
    ],
    'Resources': [
      { name: 'Blog', path: '/blog' },
      { name: 'Podcast', path: '/podcast' },
      { name: 'Newsletter', path: '/newsletter' },
    ],
  }

  const socialLinks = [
    { name: 'Instagram', icon: InstagramIcon, url: '#' },
    { name: 'LinkedIn', icon: LinkedInIcon, url: '#' },
    { name: 'YouTube', icon: YouTubeIcon, url: '#' },
    { name: 'Twitter', icon: TwitterIcon, url: '#' },
  ]

  return (
    <footer className="relative mt-16 sm:mt-24 md:mt-32">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-32"
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
          fill="none"
        >
          <path
            d="M0 74V20C240 50 480 60 720 45C960 30 1200 10 1440 20V74H0Z"
            fill="url(#footer-gradient)"
          />
          <defs>
            <linearGradient id="footer-gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="rgba(80, 8, 145, 0.1)" />
              <stop offset="50%" stopColor="rgba(134, 91, 172, 0.05)" />
              <stop offset="100%" stopColor="rgba(80, 8, 145, 0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative bg-mg-darker/50 backdrop-blur-sm border-t border-white/5 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 mb-10 sm:mb-12 md:mb-16">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-mg-mountain-600 to-mg-gold-500 rounded-xl rotate-45" />
                    <div className="absolute inset-1 bg-mg-dark rounded-lg rotate-45" />
                    <span className="absolute inset-0 flex items-center justify-center text-white font-heading font-bold text-lg">
                      MG
                    </span>
                  </div>
                  <div>
                    <span className="block text-white font-heading font-bold text-lg leading-none">
                      Mountain
                    </span>
                    <span className="block text-mg-gold-500 font-heading text-sm tracking-wider">
                      GIPSY
                    </span>
                  </div>
                </div>
              </Link>
              
              <p className="text-mg-gray-500 max-w-sm mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Unlock your true potential with Tima Deryan. Transform your mindset, 
                embrace challenges, and reach new heights in life and leadership.
              </p>

              {/* Newsletter signup */}
              <div className="max-w-sm">
                <p className="text-white font-medium mb-2 sm:mb-3 text-sm sm:text-base">Join our newsletter</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-mg-gray-600 focus:outline-none focus:border-mg-gold-500 transition-colors text-sm"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 sm:px-4 py-2 sm:py-2.5 bg-mg-gold-500 text-mg-dark font-medium rounded-lg hover:bg-mg-gold-400 transition-colors text-sm"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-heading font-semibold mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-mg-gray-500 hover:text-mg-gold-500 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-6 sm:pt-8 border-t border-white/5">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/5 text-mg-gray-500 hover:bg-mg-gold-500/20 hover:text-mg-gold-500 transition-colors"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-6 text-xs sm:text-sm text-mg-gray-600 text-center">
              <div className="flex items-center gap-4 sm:gap-6">
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
              <span>© {currentYear} Mountain Gipsy. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Social Icons
const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const LinkedInIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

const YouTubeIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const TwitterIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export default Footer
