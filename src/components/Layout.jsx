import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  const location = useLocation()
  
  return (
    <div className="min-h-screen bg-mg-dark relative">
      {/* Static background gradient */}
      <div className="fixed inset-0 bg-gradient-mesh pointer-events-none z-0" />
      
      {/* Static decorative orbs - mountain color theme */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-mg-mountain-800/30 rounded-full blur-3xl pointer-events-none opacity-50 z-0" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-mg-ice-500/10 rounded-full blur-3xl pointer-events-none opacity-50 z-0" />
      
      <Navbar />
      
      <main className="relative z-10 select-text">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout
