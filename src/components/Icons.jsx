// Shared SVG Icons Component
// These replace emoji placeholders throughout the site

// Mountain icon
export const MountainIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3L12 9L16 3" />
    <path d="M4 21L8 12L12 17L16 12L20 21H4Z" />
  </svg>
)

// Trophy icon
export const TrophyIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 21H16" />
    <path d="M12 17V21" />
    <path d="M7 4H17V8C17 11.3137 14.7614 14 12 14C9.23858 14 7 11.3137 7 8V4Z" />
    <path d="M17 8H19C20.1046 8 21 7.10457 21 6V5C21 4.44772 20.5523 4 20 4H17" />
    <path d="M7 8H5C3.89543 8 3 7.10457 3 6V5C3 4.44772 3.44772 4 4 4H7" />
  </svg>
)

// Globe/World icon
export const GlobeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12H22" />
    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" />
  </svg>
)

// Sparkles/Star icon
export const SparklesIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" />
    <path d="M19 15L20 18L23 19L20 20L19 23L18 20L15 19L18 18L19 15Z" />
    <path d="M5 17L6 19L8 20L6 21L5 23L4 21L2 20L4 19L5 17Z" />
  </svg>
)

// Target/Bullseye icon
export const TargetIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

// Team/Users icon
export const TeamIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21V19C22.9986 17.177 21.765 15.5857 20 15.13" />
    <path d="M16 3.13C17.7699 3.58317 19.0078 5.17824 19.0078 7.005C19.0078 8.83176 17.7699 10.4268 16 10.88" />
  </svg>
)

// Microphone icon
export const MicrophoneIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1C10.3431 1 9 2.34315 9 4V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1Z" />
    <path d="M19 10V12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12V10" />
    <path d="M12 19V23" />
    <path d="M8 23H16" />
  </svg>
)

// Diamond icon
export const DiamondIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3H18L22 9L12 21L2 9L6 3Z" />
    <path d="M2 9H22" />
    <path d="M12 3L14 9L12 21L10 9L12 3Z" />
  </svg>
)

// Fire icon
export const FireIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22C16.4183 22 20 18.4183 20 14C20 8 12 2 12 2C12 2 4 8 4 14C4 18.4183 7.58172 22 12 22Z" />
    <path d="M12 22C14.2091 22 16 20.2091 16 18C16 14 12 10 12 10C12 10 8 14 8 18C8 20.2091 9.79086 22 12 22Z" />
  </svg>
)

// Rocket icon
export const RocketIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5C3 18 3 21 3 21C3 21 6 21 7.5 19.5C8.4 18.6 8.4 17.1 7.5 16.2C6.6 15.3 5.1 15.6 4.5 16.5Z" />
    <path d="M14.5 4C14.5 4 11.5 6.5 9.5 10.5C7.5 14.5 5.5 16.5 5.5 16.5L7.5 18.5C7.5 18.5 9.5 16.5 13.5 14.5C17.5 12.5 20 9.5 20 9.5C20 9.5 21 6 18 3C15 0 11.5 1 11.5 1" />
    <circle cx="15" cy="9" r="2" />
  </svg>
)

// Email icon
export const EmailIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7" />
  </svg>
)

// Phone icon
export const PhoneIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3946C21.0391 21.7897 20.5304 22.0209 20 22.05C16.8372 21.7689 13.8029 20.7262 11.15 19.02C8.69579 17.4713 6.60393 15.3794 5.05499 12.925C3.32 10.2377 2.27715 7.15804 2.00501 3.95C1.97605 3.42113 2.20577 2.91378 2.59819 2.53853C2.99061 2.16327 3.51618 1.95163 4.06501 1.95H7.06501C8.04001 1.93925 8.86831 2.6414 9.01501 3.6C9.14501 4.51 9.37501 5.4 9.70001 6.25C9.97168 6.92 9.78668 7.68 9.22501 8.15L7.98501 9.39C9.41501 11.9083 11.5117 14.005 14.03 15.435L15.27 14.195C15.7396 13.6333 16.4996 13.4483 17.17 13.72C18.02 14.045 18.91 14.275 19.82 14.405C20.7886 14.5533 21.4959 15.3958 21.4801 16.38L22 16.92Z" />
  </svg>
)

// Location/Pin icon
export const LocationIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

// Instagram icon
export const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="18" cy="6" r="1" fill="currentColor" />
  </svg>
)

// LinkedIn icon
export const LinkedInIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2" />
    <path d="M8 11V16" />
    <path d="M8 8V8.01" />
    <path d="M12 16V11" />
    <path d="M16 16V13C16 11.8954 15.1046 11 14 11C12.8954 11 12 11.8954 12 13" />
  </svg>
)

// YouTube icon
export const YouTubeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42C22.4212 5.94541 22.1792 5.51057 21.8386 5.15941C21.498 4.80824 21.0707 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82073 5.55057 1.57878 5.98541 1.46 6.46C1 8.18 1 12 1 12C1 12 1 15.82 1.46 17.54C1.69 18.46 2.41 19.18 3.4 19.54C5.12 20 12 20 12 20C12 20 18.88 20 20.6 19.54C21.59 19.18 22.31 18.46 22.54 17.54C23 15.82 23 12 23 12C23 12 23 8.18 22.54 6.42Z" />
    <path d="M9.75 15.02L15.5 12L9.75 8.98V15.02Z" />
  </svg>
)

// Twitter/X icon
export const TwitterIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4L10.5 12L4 20" />
    <path d="M20 4L13.5 12L20 20" />
    <path d="M4 4H8.5L20 20H15.5L4 4Z" />
  </svg>
)

// Newspaper/News icon
export const NewsIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" />
    <path d="M6 8H10" />
    <path d="M6 12H18" />
    <path d="M6 16H18" />
    <rect x="14" y="7" width="4" height="4" rx="0.5" />
  </svg>
)

// TV/Broadcast icon
export const TVIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M8 21H16" />
    <path d="M12 17V21" />
    <path d="M17 3L12 7L7 3" />
  </svg>
)

// Satellite/Antenna icon
export const SatelliteIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76C17.5057 9.02569 18.1944 10.7618 18.1387 12.5538C18.083 14.3458 17.2874 16.037 15.94 17.22" />
    <path d="M7.76 16.24C6.49431 14.9743 5.80564 13.2382 5.86132 11.4462C5.91701 9.65424 6.71264 7.96296 8.06 6.78" />
    <path d="M19.07 4.93C21.3356 7.19569 22.5806 10.2639 22.5001 13.4353C22.4196 16.6066 21.021 19.6106 18.6401 21.76" />
    <path d="M4.93 19.07C2.66444 16.8043 1.41944 13.7361 1.49993 10.5647C1.58042 7.39337 2.97896 4.38937 5.35986 2.24" />
  </svg>
)

// Book/Learning icon
export const BookIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" />
    <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" />
    <path d="M8 7H16" />
    <path d="M8 11H14" />
  </svg>
)

// Arrow Right icon
export const ArrowRightIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12H19" />
    <path d="M12 5L19 12L12 19" />
  </svg>
)
