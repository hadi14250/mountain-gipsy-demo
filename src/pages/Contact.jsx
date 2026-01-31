import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { EmailIcon, PhoneIcon, LocationIcon, InstagramIcon, LinkedInIcon, YouTubeIcon, TwitterIcon, GlobeIcon } from '../components/Icons'

const contactMethods = [
  {
    Icon: EmailIcon,
    title: 'Email Us',
    description: 'Get in touch for inquiries',
    value: 'hello@mountaingipsy.com',
    link: 'mailto:hello@mountaingipsy.com',
  },
  {
    Icon: PhoneIcon,
    title: 'Call Us',
    description: 'Speak with our team',
    value: '+961 3 000 000',
    link: 'tel:+9613000000',
  },
  {
    Icon: LocationIcon,
    title: 'Visit Us',
    description: 'Our headquarters',
    value: 'Beirut, Lebanon',
    link: '#',
  },
]

const socialLinks = [
  { name: 'Instagram', Icon: InstagramIcon },
  { name: 'LinkedIn', Icon: LinkedInIcon },
  { name: 'YouTube', Icon: YouTubeIcon },
  { name: 'Twitter', Icon: TwitterIcon },
]

const inquiryTypes = [
  { value: 'coaching', label: 'One-on-One Coaching' },
  { value: 'workshop', label: 'Team Workshop' },
  { value: 'keynote', label: 'Keynote Speaking' },
  { value: 'adventure', label: 'Adventure Experience' },
  { value: 'media', label: 'Media Inquiry' },
  { value: 'other', label: 'Other' },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const heroRef = useRef(null)
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: "-100px" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mg-dark-950 via-mg-mountain-900/20 to-mg-dark-950 pointer-events-none" />
        
        {/* Static decorative circles - hidden on mobile */}
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-mg-ice-500/10 rounded-full pointer-events-none" />
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-mg-gold-500/10 rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-12 sm:w-16 h-0.5 bg-mg-gold-500" />
            <span className="text-mg-gold-500 font-medium tracking-widest text-xs sm:text-sm">GET IN TOUCH</span>
            <div className="w-12 sm:w-16 h-0.5 bg-mg-gold-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6"
          >
            Let's Connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-mg-gray-400 max-w-2xl mx-auto"
          >
            Ready to start your transformation? We'd love to hear from you. 
            Reach out and let's explore how we can help you reach your summit.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 sm:py-16 bg-mg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="block p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-mg-gold-500/50 transition-colors"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="mb-4 flex justify-center"
                >
                  <method.Icon className="w-10 h-10 sm:w-12 sm:h-12 text-mg-gold-500" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-2">{method.title}</h3>
                <p className="text-mg-gray-500 text-xs sm:text-sm mb-4">{method.description}</p>
                <p className="text-mg-gold-500 font-medium text-sm sm:text-base">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
            >
              <span className="text-mg-ice-400 font-medium tracking-wider text-sm">SEND A MESSAGE</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mt-4 mb-6 sm:mb-8">
                How Can We Help?
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 rounded-3xl bg-gradient-to-br from-mg-mountain-600/20 to-mg-gold-500/20 border border-white/20 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500 flex items-center justify-center"
                  >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-mg-gray-400">
                    Thank you for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-mg-gray-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-mg-gray-600 focus:outline-none focus:border-mg-gold-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-mg-gray-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-mg-gray-600 focus:outline-none focus:border-mg-gold-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-mg-gray-400 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-mg-gray-600 focus:outline-none focus:border-mg-gold-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-mg-gray-400 mb-2">
                      What are you interested in? *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-mg-gold-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-mg-dark-900">Select an option</option>
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value} className="bg-mg-dark-900">
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-mg-gray-400 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-mg-gray-600 focus:outline-none focus:border-mg-gold-500 transition-colors resize-none"
                      placeholder="Tell us about your goals and how we can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-gradient-to-r from-mg-mountain-700 to-mg-mountain-900 text-white font-bold text-lg rounded-xl relative overflow-hidden disabled:opacity-70 hover:from-mg-gold-600 hover:to-mg-gold-500 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* FAQ teaser */}
              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-mg-mountain-600/10 to-mg-gold-500/10 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4 sm:mb-6">
                  Common Questions
                </h3>
                <div className="space-y-4">
                  {[
                    { q: 'How long are coaching programs?', a: 'Typically 3-6 months, customized to your goals.' },
                    { q: 'Do you offer virtual sessions?', a: 'Yes! We work with clients worldwide via video.' },
                    { q: "What's the investment?", a: "We'll discuss pricing during your free consultation." },
                  ].map((faq, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="pb-4 border-b border-white/10 last:border-0"
                    >
                      <h4 className="text-white font-medium mb-1">{faq.q}</h4>
                      <p className="text-mg-gray-500 text-sm">{faq.a}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-4 sm:mb-6">
                  Follow the Journey
                </h3>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href="#"
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 flex items-center justify-center hover:bg-mg-gold-500/20 transition-colors"
                      title={social.name}
                    >
                      <social.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-mg-gold-500" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-3xl overflow-hidden h-64 bg-gradient-to-br from-mg-mountain-600/20 to-mg-gold-500/20 flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <GlobeIcon className="w-16 h-16 text-mg-gold-500" />
                  </div>
                  <p className="text-mg-gray-400">Beirut, Lebanon</p>
                  <p className="text-mg-gray-600 text-sm">Working globally</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-mg-mountain-900 to-mg-mountain-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4"
          >
            Prefer to talk directly?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8"
          >
            Schedule a free 30-minute discovery call.
          </motion.p>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-mg-gold-500 text-mg-dark-900 font-bold text-base sm:text-lg rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a Call
          </motion.a>
        </div>
      </section>
    </div>
  )
}

export default Contact
