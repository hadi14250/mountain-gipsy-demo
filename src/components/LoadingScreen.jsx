import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-mg-dark flex items-center justify-center z-50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      {/* Animated logo/spinner */}
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="w-24 h-24 rounded-full border-2 border-mg-ice-500/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner ring */}
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-t-mg-gold-500 border-r-mg-gold-500/50 border-b-transparent border-l-transparent"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-mg-ice-500 to-mg-gold-500" />
        </motion.div>
      </div>
      
      {/* Loading text */}
      <motion.p
        className="absolute mt-40 text-mg-gray-500 font-heading tracking-widest text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        LOADING
      </motion.p>
    </div>
  )
}

export default LoadingScreen
