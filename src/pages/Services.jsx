import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { TargetIcon, TeamIcon, MicrophoneIcon, MountainIcon } from '../components/Icons'

const services = [
  {
    id: 'coaching',
    title: 'One-on-One Coaching',
    tagline: 'Transform Your Mindset',
    description: 'Personalized coaching sessions designed to unlock your full potential. Work directly with Tima to identify limiting beliefs, set powerful goals, and create lasting transformation.',
    Icon: TargetIcon,
    color: 'from-orange-500 to-red-600',
    features: [
      { title: 'Personal Development', description: 'Discover your strengths and overcome limitations' },
      { title: 'Leadership Growth', description: 'Develop the mindset of a peak performer' },
      { title: 'Goal Achievement', description: 'Create and execute on ambitious objectives' },
      { title: 'Accountability Partnership', description: 'Stay on track with dedicated support' },
    ],
    process: [
      { step: 1, title: 'Discovery Call', description: 'Understand your goals and challenges' },
      { step: 2, title: 'Custom Plan', description: 'Tailored coaching program for you' },
      { step: 3, title: 'Weekly Sessions', description: 'Deep dive coaching sessions' },
      { step: 4, title: 'Transformation', description: 'Achieve breakthrough results' },
    ],
  },
  {
    id: 'workshops',
    title: 'Team Workshops',
    tagline: 'Build Resilient Teams',
    description: 'Immersive team experiences that transform group dynamics, build resilience, and ignite collective potential. Perfect for corporate retreats and team development.',
    Icon: TeamIcon,
    color: 'from-mg-mountain-600 to-mg-mountain-900',
    features: [
      { title: 'Team Building', description: 'Strengthen bonds and collaboration' },
      { title: 'Resilience Training', description: 'Build mental toughness together' },
      { title: 'Communication Skills', description: 'Improve how teams connect' },
      { title: 'Culture Building', description: 'Create a high-performance environment' },
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Understand team dynamics and needs' },
      { step: 2, title: 'Custom Design', description: 'Create tailored workshop experience' },
      { step: 3, title: 'Facilitation', description: 'Lead engaging, impactful sessions' },
      { step: 4, title: 'Integration', description: 'Support lasting cultural change' },
    ],
  },
  {
    id: 'keynotes',
    title: 'Keynote Speaking',
    tagline: 'Inspire Your Audience',
    description: 'Powerful speaking engagements that inspire audiences with stories of triumph, perseverance, and human potential. From TEDx stages to corporate events.',
    Icon: MicrophoneIcon,
    color: 'from-blue-500 to-indigo-600',
    features: [
      { title: 'Motivational Talks', description: 'Ignite passion and purpose' },
      { title: 'Corporate Events', description: 'Inspire teams and leadership' },
      { title: 'Conferences', description: 'Captivate large audiences' },
      { title: 'Virtual Sessions', description: 'Engage remote audiences worldwide' },
    ],
    process: [
      { step: 1, title: 'Consultation', description: 'Understand your event and audience' },
      { step: 2, title: 'Customization', description: 'Tailor message to your needs' },
      { step: 3, title: 'Delivery', description: 'Deliver a powerful keynote' },
      { step: 4, title: 'Follow-up', description: 'Provide additional resources' },
    ],
  },
  {
    id: 'adventure',
    title: 'Adventure Experiences',
    tagline: 'Push Your Limits',
    description: 'Transform through adventure. Guided expeditions and outdoor challenges that push boundaries and create lasting change in how you see yourself.',
    Icon: MountainIcon,
    color: 'from-mg-gold-500 to-amber-600',
    features: [
      { title: 'Mountain Expeditions', description: 'Conquer peaks with expert guidance' },
      { title: 'Survival Training', description: 'Build resilience through challenges' },
      { title: 'Team Adventures', description: 'Bond through shared experiences' },
      { title: 'Personal Challenges', description: 'Design your breakthrough moment' },
    ],
    process: [
      { step: 1, title: 'Preparation', description: 'Physical and mental readiness' },
      { step: 2, title: 'Training', description: 'Skills and mindset development' },
      { step: 3, title: 'Expedition', description: 'The transformative adventure' },
      { step: 4, title: 'Integration', description: 'Apply lessons to daily life' },
    ],
  },
]

const Services = () => {
  const location = useLocation()
  const [activeService, setActiveService] = useState(() => {
    const hash = location.hash.replace('#', '')
    return services.find(s => s.id === hash)?.id || 'coaching'
  })

  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" })

  const currentService = services.find(s => s.id === activeService)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mg-dark-950 via-mg-mountain-900/20 to-mg-dark-950 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-12 sm:w-16 h-0.5 bg-mg-gold-500" />
            <span className="text-mg-gold-500 font-medium tracking-widest text-xs sm:text-sm">WORK WITH US</span>
            <div className="w-12 sm:w-16 h-0.5 bg-mg-gold-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-mg-gray-400 max-w-2xl mx-auto"
          >
            Choose your path to transformation. Whether individual growth or team excellence, 
            we have the right solution for your journey.
          </motion.p>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="sticky top-20 z-40 bg-mg-dark-950/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap transition-all text-sm sm:text-base ${
                  activeService === service.id
                    ? 'text-mg-gold-500 border-b-2 border-mg-gold-500'
                    : 'text-mg-gray-500 hover:text-white'
                }`}
              >
                <service.Icon className="w-6 h-6" />
                <span className="font-medium">{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section ref={contentRef} className="py-12 sm:py-16 md:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Service Hero */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Content */}
                <div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={contentInView ? { opacity: 1 } : {}}
                    className="text-mg-ice-400 font-medium tracking-wider text-sm"
                  >
                    {currentService?.tagline}
                  </motion.span>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6"
                  >
                    {currentService?.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-mg-gray-400 mb-8"
                  >
                    {currentService?.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-8 py-4 bg-gradient-to-r ${currentService?.color} text-white font-bold rounded-full`}
                      >
                        Get Started
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>

                {/* Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <div className={`aspect-square rounded-3xl bg-gradient-to-br ${currentService?.color} opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      {currentService?.Icon && <currentService.Icon className="w-32 h-32 text-white/80" />}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="bg-mg-dark-900 py-12 sm:py-16 md:py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white text-center mb-8 sm:mb-12"
                >
                  What's Included
                </motion.h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {currentService?.features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="p-6 rounded-2xl bg-white/5 border border-white/10"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentService?.color} flex items-center justify-center mb-4`}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                      <p className="text-mg-gray-500 text-sm">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="py-12 sm:py-16 md:py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white text-center mb-12 sm:mb-16"
                >
                  The Process
                </motion.h3>

                <div className="relative">
                  {/* Connection line */}
                  <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-mg-gold-500/50 to-transparent hidden lg:block" />

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {currentService?.process.map((step, index) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className="relative text-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${currentService?.color} flex items-center justify-center mb-6 relative z-10`}
                        >
                          <span className="text-4xl font-bold text-white">{step.step}</span>
                        </motion.div>
                        <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                        <p className="text-mg-gray-500">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-mg-dark-900 to-mg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            Not Sure Which Service is Right for You?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-mg-gray-400 mb-8 sm:mb-10"
          >
            Schedule a free consultation and we'll help you find the perfect path.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-mg-gold-500 text-mg-dark-900 font-bold text-base sm:text-lg rounded-full"
              >
                Book Free Consultation
              </motion.button>
            </Link>
            <a href="mailto:hello@mountaingipsy.com">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/20 text-white font-bold text-base sm:text-lg rounded-full hover:border-white/40"
              >
                Email Us
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
