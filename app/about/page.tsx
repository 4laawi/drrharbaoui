import Image from "next/image";
import Link from "next/link";
import { FaCalendarCheck, FaGraduationCap, FaCertificate, FaHospital } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Dr. Rharbaoui Cardiologue",
  description: "Découvrez le parcours du Dr. Rharbaoui, cardiologue expérimenté, ses qualifications et son approche personnalisée des soins cardiaques.",
};

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-700 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">À propos</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Découvrez le parcours professionnel et l'engagement du Dr. Rharbaoui
          </p>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Doctor Image */}
            <div className="md:w-1/3">
              <div className="relative w-64 h-80 md:w-full md:h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/doctor-profile.jpg"
                  alt="Dr. Rharbaoui"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
              </div>
            </div>

            {/* Doctor Bio */}
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Dr. Rharbaoui</h2>
              <h3 className="text-xl font-medium text-teal-600 mb-6">Cardiologue</h3>

              <div className="prose max-w-none text-gray-600 mb-8">
                <p className="mb-4">
                  Dr. Rharbaoui est un cardiologue expérimenté, dédié à fournir des soins cardiaques exceptionnels et personnalisés à tous ses patients. Avec plus de 15 ans d'expérience clinique, il a développé une expertise particulière dans le diagnostic et le traitement des maladies cardiovasculaires.
                </p>
                <p className="mb-4">
                  Après avoir obtenu son diplôme de médecine avec distinction, Dr. Rharbaoui a complété sa formation en cardiologie dans des hôpitaux universitaires renommés. Il est reconnu pour son approche centrée sur le patient, combinant expertise médicale avancée et compassion.
                </p>
                <p className="mb-4">
                  Sa pratique médicale est basée sur une prise en charge globale qui tient compte non seulement des symptômes cardiaques, mais aussi du bien-être général du patient. Il croit fermement en l'importance de la prévention et s'engage à éduquer ses patients sur les moyens de maintenir un cœur sain.
                </p>
                <p>
                  Dr. Rharbaoui reste à la pointe des avancées médicales grâce à une formation continue et à sa participation active à des conférences internationales. Il est membre de plusieurs sociétés professionnelles de cardiologie et contribue régulièrement à des publications médicales.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FaGraduationCap className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Formation</h4>
                    <p className="text-gray-600">Doctorat en Médecine, Spécialisation en Cardiologie</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FaCertificate className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Certifications</h4>
                    <p className="text-gray-600">Membre du Conseil National de l'Ordre des Médecins</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FaHospital className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Affiliations</h4>
                    <p className="text-gray-600">Société Française de Cardiologie, European Society of Cardiology</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FaCalendarCheck className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Expérience</h4>
                    <p className="text-gray-600">Plus de 15 ans de pratique clinique</p>
                  </div>
                </div>
              </div>

              <Link
                href="/booking"
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow transition duration-300 inline-flex items-center"
              >
                <FaCalendarCheck className="mr-2" />
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Philosophie</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche centrée sur le patient pour des soins cardiaques optimaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Excellence Médicale</h3>
              <p className="text-gray-600 text-center">
                Nous nous engageons à fournir des soins cardiaques de la plus haute qualité, en utilisant les technologies médicales les plus avancées et en suivant les meilleures pratiques cliniques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Approche Personnalisée</h3>
              <p className="text-gray-600 text-center">
                Nous reconnaissons que chaque patient est unique. C'est pourquoi nous développons des plans de traitement individualisés qui répondent aux besoins spécifiques de chaque personne.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Accessibilité</h3>
              <p className="text-gray-600 text-center">
                Nous nous efforçons d'être disponibles quand nos patients ont besoin de nous, que ce soit pour des consultations régulières ou des soins d'urgence à domicile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:py-16 md:px-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à prendre soin de votre cœur?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Prenez rendez-vous dès aujourd'hui pour une consultation avec Dr. Rharbaoui et faites le premier pas vers une meilleure santé cardiaque.
              </p>
              <Link
                href="/booking"
                className="bg-white text-teal-600 hover:bg-teal-50 font-medium py-3 px-8 rounded-full shadow-lg transition duration-300 inline-flex items-center"
              >
                <FaCalendarCheck className="mr-2" />
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
