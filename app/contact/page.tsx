"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would normally send the data to your backend
    // For demonstration purposes, we'll just simulate a submission
    setTimeout(() => {
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-700 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contactez-nous</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Nous sommes à votre disposition pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Contact Information */}
              <div className="md:w-1/2 bg-gradient-to-b from-teal-600 to-blue-700 p-8 md:p-12 text-white">
                <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4">
                      <FaMapMarkerAlt className="h-6 w-6 text-teal-300" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Adresse</h3>
                      <p className="text-teal-100">
                        123 Avenue de la Médecine<br />
                        75000 Paris, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-4">
                      <FaPhone className="h-6 w-6 text-teal-300" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Téléphone</h3>
                      <p className="text-teal-100">
                        <Link href="tel:+212687921658" className="hover:text-white transition duration-300">
                          +212 6 87 92 16 58
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-4">
                      <FaWhatsapp className="h-6 w-6 text-teal-300" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">WhatsApp</h3>
                      <p className="text-teal-100">
                        <Link href="https://wa.me/212687921658" className="hover:text-white transition duration-300">
                          +212 6 87 92 16 58
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-4">
                      <FaEnvelope className="h-6 w-6 text-teal-300" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-teal-100">
                        <Link href="mailto:contact@drrharbaoui.com" className="hover:text-white transition duration-300">
                          contact@drrharbaoui.com
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-4">
                      <FaClock className="h-6 w-6 text-teal-300" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Horaires d'ouverture</h3>
                      <ul className="text-teal-100 space-y-1">
                        <li>Lundi - Vendredi: 9h - 19h</li>
                        <li>Samedi: 9h - 13h</li>
                        <li>Dimanche: Fermé (disponible pour consultations à domicile / urgences)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>

                {isSubmitted && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                    <div className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-3" />
                      <p className="text-green-700">
                        Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Nom complet</label>
                    <input
                      id="name"
                      type="text"
                      {...register("name", { required: "Le nom est requis" })}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Votre nom"
                    />
                    {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "L'email est requis",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Adresse email invalide"
                        }
                      })}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Votre email"
                    />
                    {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                    <textarea
                      id="message"
                      {...register("message", { required: "Le message est requis" })}
                      rows={5}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Votre message"
                    ></textarea>
                    {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow transition duration-300"
                    >
                      Envoyer le message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre localisation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Retrouvez facilement notre cabinet médical
            </p>
          </div>

          <div className="bg-gray-200 rounded-xl overflow-hidden h-96 shadow-lg">
            {/* Google Maps iframe - Replace the src with an actual Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1469045848194!2d-7.3943109!3d33.6787338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQwJzQzLjQiTiA3wrAyMyczMC4zIlc!5e0!3m2!1sfr!2sma!4v1715374104037!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Cabinet du Dr. Rharbaoui"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:py-16 md:px-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'un rendez-vous rapide?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                N'hésitez pas à nous contacter directement par téléphone pour obtenir un rendez-vous dans les plus brefs délais.
              </p>
              <Link 
                href="tel:+212687921658"
                className="bg-white text-teal-600 hover:bg-teal-50 font-medium py-3 px-8 rounded-full shadow-lg transition duration-300 inline-flex items-center"
              >
                <FaPhone className="mr-2" />
                +212 6 87 92 16 58
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
