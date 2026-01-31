import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { DiamondIcon, FireIcon, SparklesIcon, RocketIcon } from '../components/Icons'

const values = [
  {
    title: 'Authenticity',
    description: 'We believe in being genuine, transparent, and true to ourselves. Real transformation comes from real connections.',
    Icon: DiamondIcon,
  },
  {
    title: 'Resilience',
    description: 'Like climbing a mountain, growth requires persistence. We embrace challenges as opportunities for development.',
    Icon: FireIcon,
  },
  {
    title: 'Impact',
    description: 'Every action we take is designed to create meaningful, lasting change in the lives of those we work with.',
    Icon: SparklesIcon,
  },
  {
    title: 'Adventure',
    description: 'We believe life is meant to be lived fully. Taking calculated risks and stepping out of comfort zones is how we grow.',
    Icon: RocketIcon,
  },
]

const milestones = [
  { year: '2010', title: 'The Beginning', description: 'Tima begins her mountaineering journey' },
  { year: '2013', title: 'First Major Summit', description: 'Conquers Kilimanjaro, igniting a passion' },
  { year: '2017', title: 'Mount Everest', description: 'First Lebanese woman to summit Everest' },
  { year: '2019', title: 'Seven Summits', description: 'Completes all seven continental summits' },
  { year: '2020', title: 'South Pole', description: 'First Lebanese woman to ski to South Pole' },
  { year: '2021', title: 'Mountain Gipsy', description: 'Founded to share the journey with others' },
  { year: 'Today', title: 'Global Impact', description: 'Inspiring thousands worldwide' },
]

const About = () => {
  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" })

  const storyRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" })

  const milestonesRef = useRef(null)
  const milestonesInView = useInView(milestonesRef, { once: true, margin: "-100px" })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-mg-mountain-900 via-mg-dark-900 to-mg-dark-950 pointer-events-none" />
        
        {/* Decorative elements - static for performance */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/5 rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white/5 rounded-full" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-16 h-0.5 bg-mg-gold-500" />
            <span className="text-mg-gold-500 font-medium tracking-widest text-sm">OUR WHY</span>
            <div className="w-16 h-0.5 bg-mg-gold-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6"
          >
            Human Potential is{' '}
            <span className="text-gradient bg-gradient-to-r from-mg-ice-400 to-mg-gold-500 bg-clip-text text-transparent">
              Limitless
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-mg-gray-400 max-w-2xl mx-auto"
          >
            We exist to inspire people to tap into their true potential, 
            embracing a life of purpose and impact.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image composition */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              className="relative mb-16 lg:mb-0"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                {/* Main image */}
                <img 
                  src="/images/lady-hiking-a-mountain.webp" 
                  alt="Tima Deryan hiking"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mg-dark-900/60 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Floating accent image - hidden on mobile, visible on lg */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={storyInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="hidden lg:block absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-mg-dark-900"
              >
                <img 
                  src="/images/founder-speaking-in-conference.jpg" 
                  alt="Tima speaking at conference"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Quote card - positioned inside on mobile, outside on lg */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute left-4 right-4 bottom-4 lg:left-[-2rem] lg:right-auto lg:top-1/4 lg:bottom-auto p-4 lg:p-6 bg-mg-dark-800/90 backdrop-blur-sm rounded-2xl border border-white/10 lg:max-w-xs"
              >
                <p className="text-white italic text-sm">
                  "The mountain doesn't care who you are. It only cares what you're willing to give."
                </p>
                <p className="text-mg-gold-500 text-sm mt-2 font-medium">— Tima Deryan</p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="text-mg-ice-400 font-medium tracking-wider text-sm">OUR STORY</span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6 lg:mb-8">
                Born From the Mountains
              </h2>

              <div className="space-y-4 lg:space-y-6 text-mg-gray-400 text-base lg:text-lg">
                <p>
                  Mountain Gipsy was born from a simple belief: that every person has untapped potential 
                  waiting to be discovered. Founded by Tima Deryan, the first Lebanese woman to climb 
                  Mount Everest and complete the Seven Summits, our mission is to help others discover 
                  their own peaks.
                </p>
                <p>
                  Through years of pushing the limits of human endurance, Tima discovered that the 
                  greatest summit isn't a mountain—it's the one within ourselves. The same mindset 
                  that conquers Everest can transform businesses, relationships, and lives.
                </p>
                <p>
                  Today, we bring those lessons from the world's highest peaks to boardrooms, 
                  stages, and personal coaching sessions around the globe. Because we believe that 
                  with the right mindset, guidance, and support, anyone can reach their summit.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={storyInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="mt-10 flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-mg-mountain-600 to-mg-gold-500 p-0.5">
                  <img 
                    src="/images/founder-speaking-in-conference-2.png" 
                    alt="Tima Deryan"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold">Tima Deryan</div>
                  <div className="text-mg-gray-500">Founder & Lead Coach</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-mg-dark-900 to-mg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="text-mg-gold-500 font-medium tracking-wider text-sm">WHAT DRIVES US</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">
              Our Core Values
            </h2>
            <p className="text-mg-gray-400 max-w-2xl mx-auto text-lg">
              These principles guide everything we do, from our coaching sessions to our expeditions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:border-mg-gold-500/50 transition-colors"
                >
                  <div className="mb-6 flex justify-center">
                    <value.Icon className="w-12 h-12 text-mg-gold-500" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-mg-gray-500 text-sm">{value.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={milestonesRef} className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(168, 197, 217, 0.5) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={milestonesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-mg-ice-400 font-medium tracking-wider text-sm">THE JOURNEY</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">
              Key Milestones
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-mg-mountain-600 via-mg-gold-500 to-mg-mountain-600" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={milestonesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="text-mg-gold-500 font-bold text-lg">{milestone.year}</span>
                  <h3 className="text-xl font-heading font-bold text-white mt-1">{milestone.title}</h3>
                  <p className="text-mg-gray-500 mt-2">{milestone.description}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-mg-gold-500 rounded-full -translate-x-1/2 z-10 ring-4 ring-mg-dark-900 hover:scale-125 transition-transform" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-r from-mg-mountain-900 to-mg-mountain-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-10"
          >
            Let's discover your summit together.
          </motion.p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 sm:px-10 py-4 sm:py-5 bg-mg-gold-500 text-mg-dark-900 font-bold text-base sm:text-lg rounded-full"
          >
            Get In Touch
          </motion.a>
        </div>
      </section>
    </div>
  )
}

export default About
