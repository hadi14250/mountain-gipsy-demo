import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TargetIcon, TeamIcon, MicrophoneIcon, MountainIcon } from './Icons'

const services = [
  {
    id: 'coaching',
    title: 'Coaching',
    description: 'Transform your mindset with personalized 1-on-1 coaching sessions. Unlock your potential and achieve breakthrough results.',
    Icon: TargetIcon,
    color: 'from-orange-500 to-red-600',
    features: ['Personal Development', 'Leadership Growth', 'Goal Setting', 'Accountability'],
  },
  {
    id: 'workshops',
    title: 'Workshops',
    description: 'Immersive team experiences designed to build resilience, foster collaboration, and ignite collective potential.',
    Icon: TeamIcon,
    color: 'from-mg-mountain-600 to-mg-mountain-900',
    features: ['Team Building', 'Resilience Training', 'Communication', 'Culture Building'],
  },
  {
    id: 'keynotes',
    title: 'Keynotes',
    description: 'Powerful speaking engagements that inspire audiences with stories of triumph, perseverance, and human potential.',
    Icon: MicrophoneIcon,
    color: 'from-blue-500 to-indigo-600',
    features: ['Motivational Talks', 'Corporate Events', 'Conferences', 'Virtual Sessions'],
  },
  {
    id: 'adventure',
    title: 'Adventure',
    description: 'Push your limits with guided expeditions and adventure experiences that transform how you see yourself.',
    Icon: MountainIcon,
    color: 'from-mg-gold-500 to-amber-600',
    features: ['Mountain Expeditions', 'Survival Training', 'Team Adventures', 'Personal Challenges'],
  },
]

const ServicesPreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCard, setActiveCard] = useState(null)

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(168, 197, 217, 0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-0.5 bg-mg-ice-500" />
            <span className="text-mg-ice-400 font-medium tracking-wider text-sm">HOW WE CAN HELP</span>
            <div className="w-12 h-0.5 bg-mg-ice-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            Work With Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-mg-gray-400 max-w-2xl mx-auto text-base lg:text-lg"
          >
            Choose your path to transformation. Whether you're an individual seeking growth 
            or an organization aiming for excellence, we have the right solution for you.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
              className="group relative"
            >
              <Link to={`/services#${service.id}`}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative h-full p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20"
                >
                  {/* Gradient background on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeCard === service.id ? 1 : 0 }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 pointer-events-none z-0`}
                  />

                  {/* Content wrapper with z-index to stay above gradient */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      animate={activeCard === service.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      className="mb-6"
                    >
                      <service.Icon className="w-12 h-12 text-mg-gold-500" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-mg-gold-500 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description - always visible */}
                    <p className="text-mg-gray-500 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features - shown on hover */}
                    <div className="overflow-hidden">
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={activeCard === service.id ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2 mb-6"
                      >
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-mg-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-mg-gold-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </motion.ul>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-mg-gold-500 font-medium text-sm group-hover:gap-4 transition-all">
                      Learn More
                      <motion.svg
                        animate={activeCard === service.id ? { x: 5 } : { x: 0 }}
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-mg-mountain-600 to-mg-mountain-800 text-white font-semibold rounded-full text-lg shadow-lg shadow-mg-mountain-600/25"
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
