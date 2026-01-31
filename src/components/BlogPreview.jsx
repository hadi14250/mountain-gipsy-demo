import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MountainIcon, TeamIcon, BookIcon } from './Icons'

const blogPosts = [
  {
    id: 1,
    title: 'The Mindset Behind Conquering Everest',
    excerpt: 'What does it take to stand on top of the world? The answer lies not in physical strength, but in the fortress of your mind.',
    category: 'Mindset',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
    Icon: MountainIcon,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 2,
    title: 'Building Resilient Teams Through Adventure',
    excerpt: 'How outdoor challenges can transform your team dynamics and create unbreakable bonds that translate to business success.',
    category: 'Leadership',
    date: 'Jan 10, 2024',
    readTime: '7 min read',
    Icon: TeamIcon,
    color: 'from-mg-ice-500/20 to-mg-mountain-500/20',
  },
  {
    id: 3,
    title: '5 Lessons from the Seven Summits',
    excerpt: 'Each mountain taught me something different. Here are the key insights that changed how I approach life and business.',
    category: 'Growth',
    date: 'Jan 5, 2024',
    readTime: '6 min read',
    Icon: BookIcon,
    color: 'from-mg-gold-500/20 to-orange-500/20',
  },
]

const BlogPreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-mg-dark-950">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute inset-0 bg-gradient-to-l from-mg-mountain-900/10 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12 md:mb-16"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-4 sm:mb-6"
            >
              <div className="w-8 sm:w-12 h-0.5 bg-mg-ice-500" />
              <span className="text-mg-ice-500 font-medium tracking-wider text-xs sm:text-sm">INSIGHTS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4"
            >
              Latest From The Blog
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-mg-gray-400 max-w-lg text-base sm:text-lg"
            >
              Explore stories, insights, and lessons from the mountains to the boardroom.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Link to="/resources/blogs">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-mg-gold-500 font-semibold mt-6 md:mt-0"
              >
                View All Articles
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <Link to={`/resources/blogs/${post.id}`}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                  {/* Image placeholder */}
                  <div className={`relative h-48 bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <post.Icon className="w-16 h-16 text-white/80" />
                    </motion.div>
                    
                    {/* Category tag */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-sm text-mg-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-mg-gray-600" />
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-mg-gold-500 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-mg-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Read more */}
                    <div className="flex items-center gap-2 text-mg-ice-400 font-medium text-sm group-hover:gap-4 transition-all">
                      Read More
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 sm:mt-16 md:mt-20 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-mg-mountain-900/50 to-mg-dark-800 border border-mg-ice-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                Never Miss an Insight
              </h3>
              <p className="text-mg-gray-400 text-sm sm:text-base">
                Subscribe to our newsletter for exclusive content, tips, and updates.
              </p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-mg-gray-500 focus:outline-none focus:border-mg-gold-500 min-w-0 md:min-w-[280px] text-sm sm:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-mg-gold-500 text-mg-dark-900 font-bold rounded-full whitespace-nowrap text-sm sm:text-base"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogPreview
