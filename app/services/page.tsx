import Link from "next/link";
import Image from "next/image";
import { FaCalendarCheck, FaHeartbeat, FaStethoscope, FaUserMd, FaHome, FaAmbulance, FaClipboardCheck } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Dr. Rharbaoui Cardiologue",
  description: "Découvrez les services de cardiologie proposés par Dr. Rharbaoui: consultations, ECG, échocardiographie, holter et soins à domicile.",
};

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Consultation au cabinet",
      description: "Consultation complète avec examen approfondi, évaluation des facteurs de risque et plan de traitement personnalisé.",
      icon: <FaUserMd className="w-12 h-12 text-white" />,
      image: "/images/service-consultation.jpg",
    },
    {
      id: 2,
      title: "ECG (électrocardiogramme)",
      description: "Examen enregistrant l'activité électrique de votre cœur pour détecter des troubles du rythme cardiaque ou autres anomalies.",
      icon: <FaHeartbeat className="w-12 h-12 text-white" />,
      image: "/images/service-ecg.jpg",
    },
    {
      id: 3,
      title: "Échocoeur (échographie cardiaque)",
      description: "Imagerie par ultrasons permettant de visualiser le cœur en mouvement et d'évaluer sa structure et son fonctionnement.",
      icon: <FaStethoscope className="w-12 h-12 text-white" />,
      image: "/images/service-echo.jpg",
    },
    {
      id: 4,
      title: "Holter tensionnel",
      description: "Surveillance de la tension artérielle sur 24h pour détecter l'hypertension et évaluer l'efficacité des traitements.",
      icon: <FaClipboardCheck className="w-12 h-12 text-white" />,
      image: "/images/service-holter-tensionnel.jpg",
    },
    {
      id: 5,
      title: "Holter ECG",
      description: "Enregistrement continu de l'activité cardiaque pendant 24h à 48h pour détecter des arythmies intermittentes.",
      icon: <FaHeartbeat className="w-12 h-12 text-white" />,
      image: "/images/service-holter-ecg.jpg",
    },
    {
      id: 6,
      title: "Consultation à domicile",
      description: "Service complet de consultation cardiologique à domicile pour les patients à mobilité réduite.",
      icon: <FaHome className="w-12 h-12 text-white" />,
      image: "/images/service-domicile.jpg",
    },
    {
      id: 7,
      title: "Consultation à domicile avec ECG/écho",
      description: "Consultation à domicile avec équipement portable pour réaliser des ECG et échocardiographies.",
      icon: <FaUserMd className="w-12 h-12 text-white" />,
      image: "/images/service-domicile-eco.jpg",
    },
    {
      id: 8,
      title: "Transport médicalisé",
      description: "Service de transport pour les patients nécessitant une surveillance médicale pendant leur déplacement.",
      icon: <FaAmbulance className="w-12 h-12 text-white" />,
      image: "/images/service-transport.jpg",
    },
    {
      id: 9,
      title: "Prise en charge du patient à domicile",
      description: "Suivi complet et personnalisé pour les patients à domicile avec évaluation régulière et ajustement du traitement.",
      icon: <FaHome className="w-12 h-12 text-white" />,
      image: "/images/service-suivi-domicile.jpg",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-700 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nos Services</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Des soins cardiaques complets et personnalisés pour prendre soin de votre cœur
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl transform hover:scale-105">
                <div className="h-48 relative bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link
                    href="/booking"
                    className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow transition duration-300 inline-flex items-center"
                  >
                    <FaCalendarCheck className="mr-2" size={14} />
                    Réserver maintenant
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:py-16 md:px-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'un rendez-vous rapidement?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Ne tardez pas à prendre soin de votre santé cardiaque. Contactez-nous dès aujourd'hui pour prendre rendez-vous avec Dr. Rharbaoui.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <Link
                  href="/booking"
                  className="bg-white text-teal-600 hover:bg-teal-50 font-medium py-3 px-8 rounded-full shadow-lg transition duration-300 inline-flex items-center justify-center"
                >
                  <FaCalendarCheck className="mr-2" />
                  Prendre rendez-vous
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent hover:bg-teal-600 text-white border-2 border-white font-medium py-3 px-8 rounded-full shadow-lg transition duration-300 inline-flex items-center justify-center"
                >
                  <FaUserMd className="mr-2" />
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
