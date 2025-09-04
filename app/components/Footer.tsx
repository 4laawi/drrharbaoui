import Link from "next/link";
import { FaHeart, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-teal-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and short description */}
          <div>
            <div className="flex items-center mb-4">
              <FaHeart className="h-6 w-6 text-teal-300" />
              <span className="ml-2 text-xl font-bold">
                Dr. Rharbaoui
                <span className="block text-sm font-medium text-teal-300">Cardiologue</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Spécialiste en cardiologie offrant des services médicaux de haute qualité pour prendre soin de votre santé cardiaque.
            </p>
            <div className="flex space-x-4">
              <Link href="/contact" className="text-teal-300 hover:text-white transition duration-300">
                <FaPhone className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="text-teal-300 hover:text-white transition duration-300">
                <FaWhatsapp className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="text-teal-300 hover:text-white transition duration-300">
                <FaEnvelope className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-teal-300 transition duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-teal-300 transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-teal-300 transition duration-300">
                  Prendre rendez-vous
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-teal-300 transition duration-300">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/urgences" className="text-gray-300 hover:text-teal-300 transition duration-300">
                  Urgences à domicile
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-teal-300 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Coordonnées</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-teal-300 mt-1 mr-3" />
                <span className="text-gray-300">
                  123 Avenue de la Médecine<br />
                  75000 Paris, France
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 text-teal-300 mr-3" />
                <Link href="tel:+33123456789" className="text-gray-300 hover:text-teal-300 transition duration-300">
                  +33 1 23 45 67 89
                </Link>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="h-5 w-5 text-teal-300 mr-3" />
                <Link href="https://wa.me/33123456789" className="text-gray-300 hover:text-teal-300 transition duration-300">
                  WhatsApp
                </Link>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-teal-300 mr-3" />
                <Link href="mailto:contact@drrharbaoui.com" className="text-gray-300 hover:text-teal-300 transition duration-300">
                  contact@drrharbaoui.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-600 pt-6">
          <p className="text-center text-gray-400">
            © {currentYear} Dr. Rharbaoui. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
