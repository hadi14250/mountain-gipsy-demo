import { useRef, useEffect, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { MountainIcon, TrophyIcon, GlobeIcon, SparklesIcon } from './Icons'

const stats = [
  {
    id: 1,
    value: 7,
    suffix: '',
    label: 'Summits Conquered',
    description: 'Including Mount Everest',
    Icon: MountainIcon,
  },
  {
    id: 2,
    value: 1,
    suffix: 'st',
    label: 'Lebanese Woman',
    description: 'To climb Everest & 7 Summits',
    Icon: TrophyIcon,
  },
  {
    id: 3,
    value: 50,
    suffix: '+',
    label: 'Countries Visited',
    description: 'Sharing the message globally',
    Icon: GlobeIcon,
  },
  {
    id: 4,
    value: 10000,
    suffix: '+',
    label: 'Lives Impacted',
    description: 'Through coaching & speaking',
    Icon: SparklesIcon,
  },
]

const AnimatedCounter = ({ value, suffix, isInView }) => {
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest))
        }
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  const formatNumber = (num) => {
    if (num >= 1000) {
      return num.toLocaleString()
    }
    return num
  }

  return (
    <span className="tabular-nums">
      {formatNumber(displayValue)}{suffix}
    </span>
  )
}

const StatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-mg-mountain-900 via-mg-mountain-700 to-mg-mountain-900 pointer-events-none" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Static decorative shapes - hidden on mobile */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full pointer-events-none" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 sm:mb-6"
          >
            By The Numbers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg"
          >
            A journey measured not just in miles, but in lives transformed and summits reached.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative text-center"
            >
              {/* Glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-white/5 rounded-full blur-2xl" />
              
              <div className="relative hover:scale-105 transition-transform">
                {/* Icon */}
                <div className="mb-3 sm:mb-4 flex justify-center">
                  <stat.Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-mg-gold-500" />
                </div>

                {/* Value */}
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-1 sm:mb-2">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    isInView={isInView}
                  />
                </div>

                {/* Label */}
                <div className="text-mg-gold-500 font-semibold text-sm sm:text-base md:text-lg mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-white/50 text-xs sm:text-sm">
                  {stat.description}
                </div>
              </div>

              {/* Divider */}
              {index < stats.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-20 w-px bg-white/10 hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 sm:mt-12 md:mt-16"
        >
          <p className="text-white/60 text-base sm:text-lg italic">
            "The summit is just the beginning. The real journey is who you become along the way."
          </p>
          <p className="text-mg-gold-500 mt-2 font-medium text-sm sm:text-base">— Tima Deryan</p>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection
