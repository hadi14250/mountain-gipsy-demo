import { memo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const HeroSection = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/picture-of-mountain-with-snow-and-fog.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mg-dark/90 via-mg-dark/70 to-mg-dark" />
        <div className="absolute inset-0 bg-mg-mountain-900/40" />
      </div>
      
      {/* Static gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mg-ice-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center pt-16 sm:pt-20">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 text-sm font-medium tracking-widest text-mg-gold-500 border border-mg-gold-500/30 rounded-full bg-mg-gold-500/5">
            THE COMPANY BY TIMA DERYAN
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          <span className="block">Tap Into Your</span>
          <span className="text-gradient">True Potential</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-mg-gray-400 max-w-3xl mx-auto mb-10 font-light"
        >
          Human potential is the only limitless resource in this world.
          <br className="hidden md:block" />
          Unlock yours with Mountain Gipsy.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/services" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-mg-mountain-700 to-mg-mountain-900 text-white font-semibold rounded-full text-base sm:text-lg shadow-lg shadow-mg-mountain-800/40 flex items-center justify-center gap-2 hover:scale-105 hover:from-mg-gold-600 hover:to-mg-gold-500 transition-all duration-300">
              Explore Services
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </Link>
          
          <Link to="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-mg-gray-700 text-white font-semibold rounded-full text-base sm:text-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              Schedule a Call
              <PhoneIcon className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative mountain shapes */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
          fill="none"
        >
          <path
            d="M0 120L60 100L180 80L360 40L540 60L720 20L900 50L1080 30L1260 70L1380 90L1440 120H0Z"
            fill="#0A0F14"
          />
        </svg>
      </div>
    </section>
  )
})

HeroSection.displayName = 'HeroSection'

const ArrowRightIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const PhoneIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

export default HeroSection
