"use client";

import Link from "next/link";
import Image from "next/image";
import { FaCalendarCheck, FaStethoscope, FaPhone, FaCheck, FaStar, FaHeartbeat, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Trigger stats animation after page load
    const timer = setTimeout(() => {
      setStatsVisible(true);
    }, 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden pt-8 md:pt-12 anchor-section">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/cardio.jpg"
            alt="Cardiologie - Hero Background"
            className="w-full h-full object-cover"
            style={{ minHeight: '70vh', objectPosition: 'right center' }}
          />
          {/* Stronger gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 w-full h-full" />
          {/* Radial vignette overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(closest-side,transparent_0%,rgba(0,0,0,0.45)_100%)]" />
        </div>

        
        {/* Emergency floating pill removed - now only using the WhatsApp button in layout.tsx */}

        {/* Wavy SVG bottom clip - moved slightly up to overlap */}
        <div className="absolute bottom-[-1px] left-0 right-0 z-10 pointer-events-none select-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#fff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,165.3C672,160,768,192,864,213.3C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>

        {/* Main Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col justify-between min-h-[60vh] py-6">
          {/* Top content */}
          <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
            {/* Availability pill */}
            <div className="bg-teal-500/80 backdrop-blur-sm text-white py-1.5 px-4 rounded-full text-sm font-medium inline-flex items-center shadow-md mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
              Prochains créneaux : aujourd&apos;hui &amp; demain
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-100 drop-shadow-lg text-center mb-3 line-clamp-2">
              Cardiologue à Mohammedia — Dr Rharbaoui
            </h1>
            
            {/* Subheadline */}
            <p className="text-white/90 text-lg md:text-xl text-center leading-relaxed mb-6 max-w-3xl line-clamp-2">
              Consultations et examens sur place (ECG, échographie, Holter). Rendez-vous sous 24–48 h, prise en charge CNSS / mutuelles.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mb-6">
              <Link 
                href="/booking" 
                className="w-full sm:w-auto group bg-white hover:bg-teal-50 text-teal-700 font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
              >
                <FaCalendarCheck className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Prendre rendez-vous
              </Link>
              <Link 
                href="https://wa.me/212687921658" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
              >
                <FaWhatsapp className="mr-3 text-xl group-hover:rotate-12 transition-transform duration-300" />
                WhatsApp
              </Link>
            </div>
          </div>
          
          {/* Stats bar with divider - Positioned at the bottom */}
          <div className={`w-full max-w-lg mx-auto mt-auto transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="h-px bg-white/20 mb-4"></div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/90">
              <div className="flex items-center">
                <span className="font-semibold text-lg">
                  {statsVisible && (
                    <CountUp
                      end={98}
                      duration={2}
                      suffix="%"
                      useEasing={true}
                    />
                  )}
                </span>
                <span className="ml-1">satisfaction</span>
              </div>
              <span className="hidden sm:inline-block text-white/30">•</span>
              <div className="text-lg">
                {statsVisible && (
                  <CountUp
                    end={2200}
                    duration={2}
                    suffix="+ cas"
                    useEasing={true}
                  />
                )}
              </div>
              <span className="hidden sm:inline-block text-white/30">•</span>
              <div className="text-lg">
                {statsVisible && (
                  <CountUp
                    end={500}
                    duration={2}
                    suffix="+ patients"
                    useEasing={true}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance logos strip */}
      <div className="bg-gray-50 py-6 border-y border-gray-100 relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <p className="text-gray-500 text-sm font-medium mb-4">NOUS ACCEPTONS :</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <img src="/logos/cnss.png" alt="CNSS" className="h-10 opacity-60" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" font-family="Arial" font-size="12" fill="%236b7280" text-anchor="middle" dominant-baseline="middle">CNSS</text></svg>'; e.currentTarget.onerror = null; }} />
              <img src="/logos/cnops.png" alt="CNOPS" className="h-10 opacity-60" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" font-family="Arial" font-size="12" fill="%236b7280" text-anchor="middle" dominant-baseline="middle">CNOPS</text></svg>'; e.currentTarget.onerror = null; }} />
              <img src="/logos/axa.png" alt="AXA" className="h-10 opacity-60" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" font-family="Arial" font-size="12" fill="%236b7280" text-anchor="middle" dominant-baseline="middle">AXA</text></svg>'; e.currentTarget.onerror = null; }} />
              <img src="/logos/wafa.png" alt="WAFA" className="h-10 opacity-60" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" font-family="Arial" font-size="12" fill="%236b7280" text-anchor="middle" dominant-baseline="middle">WAFA</text></svg>'; e.currentTarget.onerror = null; }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}