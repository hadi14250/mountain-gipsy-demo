import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ServicesPreview from '../components/ServicesPreview'
import AboutPreview from '../components/AboutPreview'
import TestimonialsSlider from '../components/TestimonialsSlider'
import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'
import BlogPreview from '../components/BlogPreview'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <StatsSection />
      <TestimonialsSlider />
      <BlogPreview />
      <CTASection />
    </div>
  )
}

export default Home
