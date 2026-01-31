import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout'
import LoadingScreen from './components/LoadingScreen'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Tima = lazy(() => import('./pages/Tima'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tima" element={<Tima />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  )
}

export default App
