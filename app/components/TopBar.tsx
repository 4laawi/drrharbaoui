"use client";

import Link from "next/link";
import { FaPhone, FaWhatsapp, FaClock } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-red-600 text-white relative z-30 shadow-sm safe-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[36px] flex items-center justify-center lg:justify-between text-sm">
        {/* Left side - Emergency number (always visible) */}
        <Link 
          href="tel:+33712345678" 
          className="flex items-center hover:underline"
        >
          <FaPhone className="mr-2 text-xs" />
          <span>Urgences cardiaques : 07 12 34 56 78</span>
        </Link>

        {/* Right side - Opening hours and WhatsApp (desktop only) */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <FaClock className="mr-2 text-xs" />
            <span>Ouvert aujourd&apos;hui : 09h–19h</span>
          </div>
          <span>•</span>
          <Link 
            href="https://wa.me/212612345678" 
            className="flex items-center hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2 text-xs" />
            <span>WhatsApp : +212 6 12 34 56 78</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
