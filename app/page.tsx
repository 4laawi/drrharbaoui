"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarCheck, FaHeartbeat, FaStethoscope, FaUserMd, FaHospital, FaShieldAlt, FaClock, FaAward, FaMapMarkerAlt, FaWhatsapp, FaCheck } from "react-icons/fa";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Cabinet Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Column - Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/cabinet.jpg" 
                  alt="Cabinet de cardiologie Dr. Rharbaoui à Mohammedia" 
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-3xl"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Right Column - Content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 lg:pr-8"
            >
              <span className="text-teal-600 font-medium mb-2 block">À propos du cabinet</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Cardiologue à Mohammedia – Dr Rharbaoui</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                « Vous cherchez un cardiologue à Mohammedia pour un ECG, une échographie cardiaque ou un bilan complet ? Notre cabinet, reconnu pour son expertise et ses délais courts, reçoit les patients de toute la ville et des environs. »
              </p>
              
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                « Examens réalisés sur place (ECG, échocardiographie, Holter), résultats rapides et explications claires. Rendez-vous sous 24–48 h, prise en charge CNSS / mutuelles et coordination avec votre médecin traitant. »
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center">
                  <FaCheck className="h-5 w-5 text-teal-500 mr-3" />
                  <span className="text-gray-700">DES en Cardiologie — Université (démo)</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="h-5 w-5 text-teal-500 mr-3" />
                  <span className="text-gray-700">DU d'Échocardiographie — (démo)</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="h-5 w-5 text-teal-500 mr-3" />
                  <span className="text-gray-700">Membre de la Société Marocaine de Cardiologie (démo)</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="h-5 w-5 text-teal-500 mr-3" />
                  <span className="text-gray-700">10+ ans d'expérience clinique</span>
                </li>
              </ul>
              
              <Link href="/about" className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-xl">
                Découvrir le cabinet
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Nos Services Médicaux</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consultations et examens réalisés sur place (ECG, échographie, Holter). Délais rapides 24–48 h et prise en charge CNSS / mutuelles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Service 1 - Consultation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-teal-400 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUserMd className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Consultation au cabinet</h3>
              <p className="text-gray-600 mb-4">
                Bilan complet, antécédents, facteurs de risque et plan de traitement personnalisé.
              </p>
              <Link href="/services" className="text-teal-600 hover:text-teal-700 font-semibold flex items-center group">
                En savoir plus →
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>

            {/* Service 2 - ECG */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaHeartbeat className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">ECG (électrocardiogramme)</h3>
              <p className="text-gray-600 mb-4">
                Mesure de l'activité électrique du cœur pour détecter troubles du rythme. Résultats immédiats.
              </p>
              <Link href="/services" className="text-teal-600 hover:text-teal-700 font-semibold flex items-center group">
                En savoir plus →
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>

            {/* Service 3 - Échocardiographie */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaStethoscope className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Échocardiographie</h3>
              <p className="text-gray-600 mb-4">
                Imagerie par ultrasons pour évaluer structure et fonction du cœur. Examen indolore.
              </p>
              <Link href="/services" className="text-teal-600 hover:text-teal-700 font-semibold flex items-center group">
                En savoir plus →
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>

            {/* Service 4 - Holter ECG */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaClock className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Holter ECG 24–48 h</h3>
              <p className="text-gray-600 mb-4">
                Enregistrement continu pour repérer arythmies intermittentes au quotidien.
              </p>
              <Link href="/services" className="text-teal-600 hover:text-teal-700 font-semibold flex items-center group">
                En savoir plus →
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>

            {/* Service 5 - Holter tensionnel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Holter tensionnel (MAPA) 24 h</h3>
              <p className="text-gray-600 mb-4">
                Surveillance automatique de la pression artérielle pour diagnostiquer l'hypertension.
              </p>
              <Link href="/services" className="text-teal-600 hover:text-teal-700 font-semibold flex items-center group">
                En savoir plus →
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>

            {/* Service 6 - Consultation à domicile */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-red-400 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaHospital className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Consultation à domicile</h3>
              <p className="text-gray-600 mb-4">
                Prise en charge pour patients à mobilité réduite ou en situation urgente.
              </p>
              <Link href="/services" className="text-teal-600 hover:text-teal-700 font-semibold flex items-center group">
                En savoir plus →
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Reassurance Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <div className="flex items-center bg-gray-50 px-6 py-3 rounded-full">
              <FaClock className="text-teal-600 mr-2" />
              <span className="text-gray-700 font-medium">Délais 24–48 h</span>
            </div>
            <div className="flex items-center bg-gray-50 px-6 py-3 rounded-full">
              <FaHospital className="text-teal-600 mr-2" />
              <span className="text-gray-700 font-medium">Examens sur place</span>
            </div>
            <div className="flex items-center bg-gray-50 px-6 py-3 rounded-full">
              <FaShieldAlt className="text-teal-600 mr-2" />
              <span className="text-gray-700 font-medium">Prise en charge CNSS / mutuelles</span>
            </div>
            <div className="flex items-center bg-gray-50 px-6 py-3 rounded-full">
              <FaWhatsapp className="text-teal-600 mr-2" />
              <span className="text-gray-700 font-medium">Contact WhatsApp disponible</span>
            </div>
          </motion.div>

          {/* First Consultation Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ce que comprend une première consultation</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Entretien médical détaillé, examen clinique, réalisation d'un ECG si nécessaire, puis explications claires et plan de soins personnalisé.
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-10">Processus en 3 étapes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold text-xl">1</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Prendre rendez-vous</h4>
                <p className="text-gray-600">Par téléphone ou WhatsApp. Créneau rapide garanti.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold text-xl">2</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Consultation & examens</h4>
                <p className="text-gray-600">Bilan complet avec ECG/écho selon le besoin.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold text-xl">3</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Plan de soins & suivi</h4>
                <p className="text-gray-600">Compte rendu, traitement adapté et suivi programmé.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/services" className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-4 px-10 rounded-full shadow-xl transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-2xl">
              Voir tous nos services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>


      
      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Pourquoi Nous Choisir</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement médical de qualité pour votre santé cardiaque
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 w-24 h-24 mx-auto rounded-3xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl">
                <FaAward className="text-4xl text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expertise Médicale</h3>
              <p className="text-gray-600">
                Une expertise reconnue en cardiologie avec des années d'expérience clinique.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-24 h-24 mx-auto rounded-3xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl">
                <FaHeartbeat className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Équipement Moderne</h3>
              <p className="text-gray-600">
                Accès aux technologies médicales de pointe pour des diagnostics précis.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 w-24 h-24 mx-auto rounded-3xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl">
                <FaClock className="text-4xl text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Disponibilité</h3>
              <p className="text-gray-600">
                Rendez-vous rapides et service d'urgence à domicile disponible.
              </p>
            </motion.div>
            
            {/* Feature 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 w-24 h-24 mx-auto rounded-3xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl">
                <FaShieldAlt className="text-4xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Approche Personnalisée</h3>
              <p className="text-gray-600">
                Soins adaptés à vos besoins spécifiques et suivi personnalisé.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative">
        {/* Container with fixed background for the CTA section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Background image - different implementation for mobile and desktop */}
            <div className="absolute inset-0">
              {/* Mobile background (standard) */}
              <div className="block lg:hidden absolute inset-0">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img 
                  src="/hehe.jpg" 
                  alt="Background" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Desktop background (fixed background) */}
              <div className="hidden lg:block absolute inset-0">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0">
                  <img 
                    src="/hehe.jpg" 
                    alt="Background" 
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: "center",
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative z-20 py-20 px-6 md:px-12 text-white">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center max-w-2xl mx-auto"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Prenez soin de votre cœur</h2>
                <p className="text-xl mb-10 text-white/90">
                  Ne négligez pas votre santé cardiaque. Prenez rendez-vous dès aujourd'hui pour une consultation avec Dr. Rharbaoui.
                </p>
                <Link href="/booking" className="bg-white text-teal-600 hover:bg-teal-50 font-semibold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center">
                  <FaCalendarCheck className="mr-3" />
                  Prendre rendez-vous maintenant
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Localisation & Horaires Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Localisation & Horaires</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trouvez facilement notre cabinet et consultez nos horaires d'ouverture.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Map */}
            <div className="flex-1 rounded-xl overflow-hidden shadow-xl min-h-[320px] mb-8 lg:mb-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1469045848194!2d-7.3943109!3d33.6787338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQwJzQzLjQiTiA3wrAyMyczMC4zIlc!5e0!3m2!1sfr!2sma!4v1715374104037!5m2!1sfr!2sma"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[320px] md:h-[400px] lg:h-full"
              ></iframe>
            </div>
            {/* Hours */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full rounded-xl shadow-xl bg-gray-50 p-8 flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-2">
                  <FaClock className="h-7 w-7 text-teal-600" />
                  <span className="text-2xl font-semibold text-gray-800">Horaires d'ouverture</span>
                </div>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-3">
                    <FaCalendarCheck className="h-5 w-5 text-teal-500" />
                    <span>Lundi – Vendredi: <span className="font-medium text-gray-700">09h – 19h</span></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCalendarCheck className="h-5 w-5 text-teal-500" />
                    <span>Samedi: <span className="font-medium text-gray-700">09h – 13h</span></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaHospital className="h-5 w-5 text-red-500" />
                    <span>Dimanche: <span className="font-medium text-gray-700">Fermé</span> <span className="text-xs text-gray-500">(disponible pour consultations à domicile / urgences)</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}