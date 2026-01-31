import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MicrophoneIcon, NewsIcon, GlobeIcon, TVIcon, SatelliteIcon } from '../components/Icons'

const achievements = [
  { year: '2017', title: 'Mount Everest', description: 'First Lebanese woman to summit the highest peak on Earth' },
  { year: '2019', title: 'Seven Summits', description: 'Completed all seven continental summits' },
  { year: '2020', title: 'South Pole', description: 'First Lebanese woman to ski to the South Pole' },
]

const mediaFeatures = [
  { name: 'TEDx', Icon: MicrophoneIcon },
  { name: 'Forbes', Icon: NewsIcon },
  { name: 'National Geographic', Icon: GlobeIcon },
  { name: 'BBC', Icon: TVIcon },
  { name: 'Al Jazeera', Icon: SatelliteIcon },
]

const quotes = [
  "The summit is not the destination. It's who you become on the way up.",
  "Fear is just excitement without breath.",
  "Every mountain teaches you something new about yourself.",
  "The only limits that exist are the ones you create in your mind.",
]

const Tima = () => {
  const storyRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" })

  const achievementsRef = useRef(null)
  const achievementsInView = useInView(achievementsRef, { once: true, margin: "-100px" })

  return (
    <div className="pt-20">
      {/* Hero Section - Full screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-mg-mountain-900 via-mg-dark-900 to-mg-dark-950 pointer-events-none" />
        
        {/* Static mountain shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute bottom-0 w-full h-1/2 text-mg-dark-950/50"
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
          >
            <path fill="currentColor" d="M0,400 L0,200 L200,350 L400,150 L600,280 L800,100 L1000,250 L1200,180 L1440,300 L1440,400 Z" />
          </svg>
          <svg
            className="absolute bottom-0 w-full h-1/2 text-mg-dark-900/80"
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
          >
            <path fill="currentColor" d="M0,400 L0,300 L300,200 L500,320 L700,180 L900,280 L1100,220 L1300,300 L1440,250 L1440,400 Z" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            {/* Profile image */}
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-mg-mountain-600 to-mg-gold-500 p-1">
              <img 
                src="/images/founder-speaking-in-conference-2.png" 
                alt="Tima Deryan"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-0.5 bg-mg-gold-500" />
            <span className="text-mg-gold-500 font-medium tracking-widest text-sm">FOUNDER & LEAD COACH</span>
            <div className="w-12 h-0.5 bg-mg-gold-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-bold text-white mb-4 sm:mb-6"
          >
            Tima Deryan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-mg-gray-400 max-w-3xl mx-auto mb-8"
          >
            Mountaineer • Speaker • Mindset Coach • Record Breaker
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-mg-gold-500 font-bold">7</span>
              <span className="text-white ml-2">Summits</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-mg-gold-500 font-bold">1st</span>
              <span className="text-white ml-2">Lebanese Woman on Everest</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-mg-gold-500 font-bold">50+</span>
              <span className="text-white ml-2">Countries</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
            >
              <span className="text-mg-ice-400 font-medium tracking-wider text-sm">THE JOURNEY</span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6 lg:mb-8">
                From Dreams to Summits
              </h2>

              <div className="space-y-4 lg:space-y-6 text-mg-gray-400 text-base lg:text-lg">
                <p>
                  Tima Deryan didn't just climb mountains—she redefined what was possible. As the first 
                  Lebanese woman to summit Mount Everest, complete the Seven Summits challenge, and ski 
                  to the South Pole, she has shattered records and inspired millions.
                </p>
                <p>
                  But her journey wasn't just about peaks and poles. It was about proving that the human 
                  spirit knows no limits. Growing up in Lebanon, Tima discovered that the same mindset 
                  required to survive in the "death zone" of Everest could transform businesses, 
                  relationships, and lives.
                </p>
                <p>
                  Today, she shares those hard-won lessons through coaching, speaking, and workshops, 
                  helping others discover their own summit within.
                </p>
              </div>

              <div className="mt-10">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-mg-mountain-700 to-mg-mountain-900 text-white font-bold rounded-full hover:from-mg-gold-600 hover:to-mg-gold-500 transition-all duration-300"
                  >
                    Work With Tima
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Image composition */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="relative mb-16 lg:mb-0"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-[3/4] rounded-2xl overflow-hidden"
                >
                  <img 
                    src="/images/lady-hiking-a-mountain.webp" 
                    alt="Tima hiking"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-[3/4] rounded-2xl overflow-hidden mt-8 lg:mt-12"
                >
                  <img 
                    src="/images/lady-hiking-on-snow.webp" 
                    alt="Tima hiking on snow"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Quote overlay - positioned inside on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="relative lg:absolute mt-4 lg:mt-0 lg:-bottom-6 left-0 right-0 lg:left-1/2 lg:-translate-x-1/2 w-full lg:max-w-sm p-4 lg:p-6 bg-mg-dark-800/90 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <p className="text-white italic text-center text-sm lg:text-base">
                  "{quotes[0]}"
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-mg-dark-900 to-mg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-mg-gold-500 font-medium tracking-wider text-sm">BREAKING RECORDS</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">
              Historic Achievements
            </h2>
          </motion.div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={achievementsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-bold text-mg-gold-500">
                    {achievement.year}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-mg-gray-400 text-base lg:text-lg">
                      {achievement.description}
                    </p>
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl">🏆</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Carousel */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mg-mountain-900 to-mg-mountain-700 opacity-50 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-[60px] sm:text-[80px] md:text-[100px] leading-none text-white/10 font-serif mb-4 sm:mb-8"
          >
            "
          </motion.div>
          
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-heading text-white leading-tight mb-6 sm:mb-8"
          >
            The mountain doesn't care who you are. It only cares what you're willing to give.
          </motion.blockquote>

          <motion.cite
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-mg-gold-500 text-xl not-italic"
          >
            — Tima Deryan
          </motion.cite>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-12 sm:py-16 md:py-20 bg-mg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-mg-gray-500 mb-12"
          >
            Featured In
          </motion.p>

          <div className="flex flex-wrap justify-center gap-12">
            {mediaFeatures.map((media, index) => (
              <motion.div
                key={media.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 text-mg-gray-400"
              >
                <media.Icon className="w-8 h-8" />
                <span className="text-xl font-medium">{media.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-mg-dark-900 to-mg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            Ready to Climb Your Mountain?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-mg-gray-400 mb-8 sm:mb-10"
          >
            Book Tima for your next event, workshop, or coaching engagement.
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
                Book Tima
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/20 text-white font-bold text-base sm:text-lg rounded-full hover:border-white/40"
              >
                View Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Tima
