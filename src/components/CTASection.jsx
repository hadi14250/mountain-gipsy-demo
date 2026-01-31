import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mg-dark-950 via-mg-dark-900 to-mg-dark-950 pointer-events-none" />
      
      {/* Static gradient orbs - reduced blur for performance */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-mg-ice-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-mg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          {/* Decorative line */}
          <div className="w-24 h-1 bg-gradient-to-r from-mg-mountain-600 to-mg-gold-500 mx-auto mb-8" />

          {/* Main heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6">
            Ready to{' '}
            <span className="text-gradient bg-gradient-to-r from-mg-ice-400 via-mg-gold-500 to-mg-ice-400 bg-clip-text text-transparent">
              Transform
            </span>
            ?
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-mg-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Take the first step toward unlocking your limitless potential. 
            Schedule a consultation and discover how we can help you reach new heights.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto group relative px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-mg-mountain-700 to-mg-mountain-900 text-white font-bold text-base sm:text-lg rounded-full overflow-hidden hover:scale-105 hover:from-mg-gold-600 hover:to-mg-gold-500 transition-all duration-300">
                <span className="relative flex items-center gap-3">
                  Schedule a Call
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>

            <Link to="/services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 border-2 border-mg-gold-500 text-mg-gold-500 font-bold text-base sm:text-lg rounded-full hover:bg-mg-gold-500/10 hover:scale-105 transition-all">
                Explore Services
              </button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-mg-gray-500 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free Initial Consultation
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Personalized Approach
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Flexible Scheduling
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-16">
          <path 
            d="M0,60 C360,120 720,0 1440,60 L1440,120 L0,120 Z" 
            fill="rgba(10, 10, 10, 0.5)"
          />
        </svg>
      </div>
    </section>
  )
}

export default CTASection
