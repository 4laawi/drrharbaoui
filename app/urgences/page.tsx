import Link from "next/link";
import { FaPhone, FaWhatsapp, FaAmbulance, FaUserMd, FaBaby, FaHeartbeat } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urgences à domicile | Dr. Rharbaoui Cardiologue",
  description: "Service d'urgences médicales à domicile avec plusieurs spécialistes disponibles : cardiologue, urgentiste et pédiatre.",
};

export default function Urgences() {
  // Phone number
  const phoneNumber = "+212687921658";
  const whatsappNumber = "212687921658";

  return (
    <>
      {/* Emergency Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Urgences à domicile</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Service médical d'urgence disponible pour vous à votre domicile
          </p>
        </div>
      </section>

      {/* Main Emergency Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="bg-red-50 rounded-xl p-6 md:p-10 shadow-lg mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                  <FaAmbulance className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Service d'urgence immédiat</h2>
                <p className="text-xl text-gray-700 mb-6">
                  En cas d'urgence cardiaque ou médicale, contactez-nous immédiatement. Notre équipe de spécialistes est prête à intervenir rapidement à votre domicile.
                </p>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link 
                    href={`tel:${phoneNumber}`}
                    className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg shadow transition duration-300 inline-flex items-center"
                  >
                    <FaPhone className="mr-2" />
                    Appeler maintenant
                  </Link>
                  <Link 
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg shadow transition duration-300 inline-flex items-center"
                  >
                    <FaWhatsapp className="mr-2" />
                    WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Spécialistes d'Urgence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pour les urgences à domicile, nous disposons de plusieurs spécialistes pour vous aider dans différentes situations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Specialist 1 - Cardiologue */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-teal-500 transition duration-300 hover:shadow-xl">
              <div className="w-20 h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <FaHeartbeat className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">Cardiologue</h3>
              <p className="text-gray-600 text-center mb-6">
                Spécialiste des urgences cardiaques, douleurs thoraciques, insuffisance cardiaque, troubles du rythme.
              </p>
              <div className="text-center">
                <Link 
                  href={`tel:${phoneNumber}`}
                  className="text-teal-600 hover:text-teal-800 font-medium inline-flex items-center"
                >
                  <FaPhone className="mr-2" />
                  Contacter
                </Link>
              </div>
            </div>

            {/* Specialist 2 - Urgentiste */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500 transition duration-300 hover:shadow-xl">
              <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaUserMd className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">Urgentiste</h3>
              <p className="text-gray-600 text-center mb-6">
                Médecin formé pour gérer tous types d'urgences médicales : traumatismes, difficultés respiratoires, etc.
              </p>
              <div className="text-center">
                <Link 
                  href={`tel:${phoneNumber}`}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  <FaPhone className="mr-2" />
                  Contacter
                </Link>
              </div>
            </div>

            {/* Specialist 3 - Pédiatre */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-500 transition duration-300 hover:shadow-xl">
              <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <FaBaby className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">Pédiatre</h3>
              <p className="text-gray-600 text-center mb-6">
                Spécialiste des enfants pour les urgences pédiatriques : fièvre élevée, convulsions, difficultés respiratoires.
              </p>
              <div className="text-center">
                <Link 
                  href={`tel:${phoneNumber}`}
                  className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center"
                >
                  <FaPhone className="mr-2" />
                  Contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comment fonctionne notre service d'urgence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple et efficace pour vous fournir rapidement l'aide médicale dont vous avez besoin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-md p-6 relative z-10">
                <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">1</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Appelez-nous</h3>
                <p className="text-gray-600 text-center">
                  Contactez notre numéro d'urgence par téléphone ou WhatsApp pour décrire votre situation.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-red-200 -z-10 transform -translate-y-1/2 translate-x-[-50%]"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-md p-6 relative z-10">
                <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">2</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Évaluation</h3>
                <p className="text-gray-600 text-center">
                  Un de nos médecins évalue la gravité et détermine le spécialiste le plus adapté.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-red-200 -z-10 transform -translate-y-1/2 translate-x-[-50%]"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-md p-6 relative z-10">
                <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">3</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Intervention</h3>
                <p className="text-gray-600 text-center">
                  Le spécialiste approprié se rend à votre domicile dans les plus brefs délais.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-red-200 -z-10 transform -translate-y-1/2 translate-x-[-50%]"></div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-md p-6 relative z-10">
                <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">4</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Suivi</h3>
                <p className="text-gray-600 text-center">
                  Après l'intervention, nous assurons un suivi médical adapté à votre situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Urgence médicale? N'attendez pas!
          </h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href={`tel:${phoneNumber}`}
              className="bg-white text-red-600 hover:bg-red-100 font-medium py-3 px-8 rounded-full shadow-lg transition duration-300 inline-flex items-center justify-center"
            >
              <FaPhone className="mr-2" />
              {phoneNumber}
            </Link>
            <Link 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition duration-300 inline-flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
