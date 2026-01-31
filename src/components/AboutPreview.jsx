import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MountainIcon, TargetIcon } from './Icons'

const AboutPreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial-purple opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-mg-ice-500 to-mg-gold-500" />
              <span className="text-mg-ice-400 font-medium tracking-wider text-sm">WHAT WE STAND FOR</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight"
            >
              Inspiring People to
              <span className="block text-gradient-gold">Reach New Heights</span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-mg-gray-400 mb-8"
            >
              <p className="text-lg leading-relaxed">
                At Mountain Gipsy, we stand for the remarkable power that lies within every 
                individual and organization. We believe in inspiring people to tap into their 
                true potential, embracing a life of purpose and impact.
              </p>
              <p className="leading-relaxed">
                Our founder, Tima Deryan, is the first Lebanese woman to climb Mount Everest 
                and the 7 Summits. She is also the first Lebanese woman to ski to the South Pole.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              {[
                { number: '7', label: 'Summits Conquered' },
                { number: '100+', label: 'Clients Transformed' },
                { number: '20+', label: 'Countries Reached' },
              ].map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gradient-gold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-mg-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 text-mg-gold-500 font-medium"
                >
                  Discover Our Story
                  <span className="w-8 h-8 rounded-full border border-mg-gold-500/30 flex items-center justify-center group-hover:bg-mg-gold-500/10 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Image composition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Main image with gradient overlay */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <img 
                  src="/images/founder-speaking-in-conference.jpg" 
                  alt="Tima Deryan speaking"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-mg-dark via-transparent to-transparent" />
              </div>

              {/* Decorative elements - hidden on mobile */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="hidden lg:flex absolute -top-8 -right-8 w-24 h-24 rounded-xl bg-mg-gold-500/10 border border-mg-gold-500/20 backdrop-blur-sm items-center justify-center"
              >
                <MountainIcon className="w-10 h-10 text-mg-gold-500" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="hidden lg:flex absolute -bottom-6 -left-6 w-32 h-32 rounded-xl bg-mg-ice-500/10 border border-mg-ice-500/20 backdrop-blur-sm items-center justify-center"
              >
                <TargetIcon className="w-14 h-14 text-mg-ice-400" />
              </motion.div>

              {/* Quote card - positioned inside on mobile, outside on lg */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="hidden lg:block absolute bottom-16 -right-12 w-64 p-4 rounded-xl glass-effect"
              >
                <p className="text-white text-sm italic mb-2">
                  "The summit is just the beginning of the journey."
                </p>
                <p className="text-mg-gold-500 text-xs font-medium">— Tima Deryan</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
