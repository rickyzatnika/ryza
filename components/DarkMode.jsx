// import { useTheme } from 'next-themes';
// import { useState, useEffect } from 'react';
// import { WiSunrise } from 'react-icons/wi';
// import { MdBrightness6 } from 'react-icons/md';
// import { motion } from 'framer-motion';

// export default function DarkMode(parallax) {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{
//           duration: 2.5,
//           ease: 'easeInOut',
//         }}
//         className=""
//       >
//         <motion.button
//           whileTap={{ scale: 0.8, rotate: '5deg' }}
//           aria-label="Toggle Dark Mode"
//           type="button"
//           className=" bg-blue-400 rounded-lg shadow-lg shadow-slate-500 p-1  m-0"
//           onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
//         >
//           {theme === 'light' ? (
//             <MdBrightness6 className="icon  text-slate-900" size={28} />
//           ) : (
//             <WiSunrise className="icon " size={28} />
//           )}
//         </motion.button>
//       </motion.div>
//     </>
//   );
// }
