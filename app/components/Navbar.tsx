"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
        : 'bg-white/80 backdrop-blur-md shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 md:h-32">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative h-32 w-32 md:h-40 md:w-40 transition-transform duration-300 group-hover:scale-110">
                <Image 
                  src="/logo.webp" 
                  alt="Logo Dr. Rharbaoui" 
                  fill 
                  style={{objectFit: "contain"}}
                  priority
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/" className="text-gray-700 hover:text-teal-600 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-teal-50">
              Accueil
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-teal-600 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-teal-50">
              Services
            </Link>
            <Link href="/booking" className="text-gray-700 hover:text-teal-600 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-teal-50">
              Rendez-vous
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-600 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-teal-50">
              À propos
            </Link>
            <Link href="/urgences" className="text-red-600 hover:text-red-700 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-red-50">
              Urgences
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-600 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-teal-50">
              Contact
            </Link>
            <Link 
              href="/booking" 
              className="ml-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <FaPhone className="mr-2" size={14} />
              Prendre RDV
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100"
          >
            <div className="px-4 pt-4 pb-3 space-y-2">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-teal-600 block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-teal-50"
                onClick={toggleMenu}
              >
                Accueil
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-teal-600 block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-teal-50"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                href="/booking" 
                className="text-gray-700 hover:text-teal-600 block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-teal-50"
                onClick={toggleMenu}
              >
                Rendez-vous
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-teal-600 block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-teal-50"
                onClick={toggleMenu}
              >
                À propos
              </Link>
              <Link 
                href="/urgences" 
                className="text-red-600 hover:text-red-700 block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-red-50"
                onClick={toggleMenu}
              >
                Urgences
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-teal-600 block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-teal-50"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link 
                href="/booking" 
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white block px-4 py-3 rounded-full font-medium transition-all duration-300 mt-4 flex items-center justify-center shadow-lg"
                onClick={toggleMenu}
              >
                <FaPhone className="mr-2" size={14} />
                Prendre RDV
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
