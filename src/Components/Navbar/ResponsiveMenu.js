import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 bg-black/50 backdrop-blur-md"
        >
          <div className="bg-white w-full h-full p-4">
            <ul className="space-y-4 text-center">
              <li>
                <Link to="/Home" className="text-xl text-gray-800 hover:text-blue-500">Home</Link>
              </li>
              <li>
                <Link to="/About" className="text-xl text-gray-800 hover:text-blue-500">About</Link>
              </li>
              <li>
                <Link to="/Members" className="text-xl text-gray-800 hover:text-blue-500">Members</Link>
              </li>
              <li>
                <Link to="/Gallery" className="text-xl text-gray-800 hover:text-blue-500">Gallery</Link>
              </li>
              <li>
                <Link to="/Reports" className="text-xl text-gray-800 hover:text-blue-500">Reports</Link>
              </li>
              <li>
                <Link to="/Login" className="text-xl text-gray-800 hover:text-blue-500">Admin Login</Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
