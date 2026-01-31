import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, Tech Innovations',
    content: "Working with Tima transformed not just my leadership style, but my entire approach to challenges. Her unique perspective, drawn from conquering the world's highest peaks, brought clarity to our corporate vision.",
    initials: 'SJ',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Entrepreneur & Founder',
    content: "The workshop was life-changing. Tima's energy and authenticity are contagious. My team left with renewed purpose and a completely different mindset about what's possible.",
    initials: 'MC',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'VP of Operations',
    content: "Tima's keynote at our annual conference was the highlight of the event. Months later, employees still reference her message about limitless potential. Truly inspiring.",
    initials: 'ER',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Sales Director',
    content: "The one-on-one coaching sessions helped me break through barriers I didn't even know existed. Tima's approach is both challenging and deeply supportive.",
    initials: 'DT',
    rating: 5,
  },
  {
    id: 5,
    name: 'Amanda Foster',
    role: 'HR Manager',
    content: "Our team building adventure was unforgettable. The skills and bonds formed during that experience continue to positively impact our workplace culture.",
    initials: 'AF',
    rating: 5,
  },
]

const clientLogos = [
  { name: 'Adidas', src: '/images/adidas.png' },
  { name: 'Shell', src: '/images/shell.png' },
  { name: 'Henkel', src: '/images/henkel.png' },
  { name: 'Ford', src: '/images/ford.png' },
  { name: 'Decathlon', src: '/images/decathlon.png' },
  { name: 'Merck', src: '/images/merck.png' },
  { name: 'Swarovski', src: '/images/swarovski.png' },
  { name: 'The North Face', src: '/images/the-north-face.png' },
]

const TestimonialsSlider = () => {
  const ref = useRef(null)
  const swiperRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <span key={i} className="text-mg-gold-500">★</span>
    ))
  }

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-mg-dark to-mg-mountain-900">
      {/* Mountain silhouette background */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none">
        <svg viewBox="0 0 1440 200" className="w-full h-full" preserveAspectRatio="none">
          <path fill="rgba(26, 42, 58, 0.3)" d="M0,200 L0,100 L200,150 L400,60 L600,120 L800,40 L1000,100 L1200,70 L1440,130 L1440,200 Z" />
          <path fill="rgba(26, 42, 58, 0.2)" d="M0,200 L0,150 L300,100 L500,140 L700,80 L900,120 L1100,90 L1300,130 L1440,110 L1440,200 Z" />
        </svg>
      </div>
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-mg-ice-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-mg-gold-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-mg-gold-500" />
            <span className="text-mg-gold-500 font-medium tracking-wider text-sm">TESTIMONIALS</span>
            <div className="w-8 sm:w-12 h-0.5 bg-mg-gold-500" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 sm:mb-6">
            What People Say
          </h2>

          <p className="text-mg-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Hear from leaders, teams, and individuals who have experienced 
            the transformative power of working with Mountain Gipsy.
          </p>
        </motion.div>

        {/* Testimonials slider with navigation arrows */}
        <div className="relative max-w-4xl mx-auto px-2 sm:px-0">
          {/* Navigation arrows - repositioned for mobile */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-16 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:bg-mg-gold-500 hover:border-mg-gold-500 transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-16 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:bg-mg-gold-500 hover:border-mg-gold-500 transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="py-6 sm:py-8">
                  <div className="relative p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm">
                    {/* Decorative mountain icon */}
                    <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-gradient-to-br from-mg-mountain-600 to-mg-mountain-800 flex items-center justify-center border border-mg-ice-500/20">
                      <svg className="w-5 h-5 text-mg-ice-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 22h20L12 2zm0 4l7 14H5l7-14z"/>
                      </svg>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6 text-lg">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Content */}
                    <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6 sm:mb-8 font-light italic">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-mg-mountain-600 to-mg-gold-500 flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                        {testimonial.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-mg-gray-500 text-xs sm:text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'w-8 bg-mg-gold-500' 
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client logos - Modern infinite marquee */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-center mb-10"
          >
            <h3 className="text-mg-ice-400 text-sm font-medium tracking-widest uppercase mb-2">
              Trusted By Industry Leaders
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-mg-gold-500 to-transparent mx-auto" />
          </motion.div>

          {/* Marquee container */}
          <div className="relative">
            {/* Gradient masks for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-mg-dark via-mg-dark/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-mg-dark via-mg-dark/80 to-transparent z-10 pointer-events-none" />
            
            {/* Infinite scrolling logos */}
            <div className="overflow-hidden">
              <div className="flex animate-marquee">
                {/* First set of logos */}
                {[...clientLogos, ...clientLogos].map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex-shrink-0 mx-8 md:mx-12"
                  >
                    <div className="h-12 md:h-16 w-32 md:w-40 flex items-center justify-center grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500">
                      <img
                        src={client.src}
                        alt={client.name}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats underneath logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto text-center"
          >
            {[
              { value: '100+', label: 'Organizations' },
              { value: '50k+', label: 'Lives Impacted' },
              { value: '20+', label: 'Countries' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl md:text-3xl font-heading font-bold text-mg-gold-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-mg-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSlider
