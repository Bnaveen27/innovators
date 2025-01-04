// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const ResponsiveMenu = ({ open }) => {
//   return (
//     <AnimatePresence mode="wait">
//       {open && (
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -100 }}
//           transition={{ duration: 0.3 }}
//           className="absolute top-20 left-0 w-full h-screen z-20 bg-black/50 backdrop-blur-md"
//         >
//           <div className="text-xl font-semibold bg-primary text-white py-8 mx-4 rounded-lg sm:text-2xl md:text-3xl">
//             <ul className="flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10">
//               <Link
//                 to="/"
//                 className="hover:text-yellow-400 transition-colors duration-300 sm:text-lg md:text-xl"
//               >
//                 HOME
//               </Link>
//               <Link
//                 to="/Members"
//                 className="hover:text-yellow-400 transition-colors duration-300 sm:text-lg md:text-xl"
//               >
//                 MEMBERS
//               </Link>
//               <Link
//                 to="/Report"
//                 className="hover:text-yellow-400 transition-colors duration-300 sm:text-lg md:text-xl"
//               >
//                 REPORTS
//               </Link>
//               <Link
//                 to="/Gallery"
//                 className="hover:text-yellow-400 transition-colors duration-300 sm:text-lg md:text-xl"
//               >
//                 GALLERY
//               </Link>
//               <Link
//                 to="/Contactus"
//                 className="hover:text-yellow-400 transition-colors duration-300 sm:text-lg md:text-xl"
//               >
//                 CONTACT US
//               </Link>
//             </ul>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ResponsiveMenu;
