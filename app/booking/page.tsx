"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCalendarAlt, FaCheckCircle, FaClock, FaUserAlt, FaPhone, FaCommentAlt } from "react-icons/fa";

type FormData = {
  service: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  message: string;
};

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would normally send the data to your backend
    // For demonstration purposes, we'll just simulate a submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-700 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Prendre rendez-vous</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Réservez une consultation avec Dr. Rharbaoui en quelques clics
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {isSubmitted ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <FaCheckCircle className="text-green-500 text-4xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Rendez-vous demandé avec succès!</h2>
              <p className="text-gray-600 mb-6">
                Merci pour votre demande de rendez-vous. Nous vous contacterons prochainement pour confirmer l'horaire.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow transition duration-300"
              >
                Réserver un autre rendez-vous
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-b from-teal-500 to-blue-600 p-8 text-white">
                  <h2 className="text-2xl font-bold mb-6">Informations</h2>
                  <div className="mb-8">
                    <h3 className="font-medium mb-2">Horaires d'ouverture</h3>
                    <ul className="space-y-2 text-teal-100">
                      <li>Lundi - Vendredi: 9h - 19h</li>
                      <li>Samedi: 9h - 13h</li>
                      <li>Dimanche: Fermé</li>
                    </ul>
                  </div>
                  <div className="mb-8">
                    <h3 className="font-medium mb-2">Contact</h3>
                    <p className="text-teal-100">
                      Pour toute question ou urgence, n'hésitez pas à nous contacter directement.
                    </p>
                    <p className="mt-2 text-teal-100">
                      Tél: +33 1 23 45 67 89
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Adresse</h3>
                    <p className="text-teal-100">
                      123 Avenue de la Médecine<br />
                      75000 Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Réserver un rendez-vous</h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Service</label>
                      <div className="relative">
                        <select
                          {...register("service", { required: "Veuillez sélectionner un service" })}
                          className={`w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
                        >
                          <option value="">Sélectionnez un service</option>
                          <option value="consultation">Consultation au cabinet</option>
                          <option value="ecg">ECG (électrocardiogramme)</option>
                          <option value="echo">Échocoeur (échographie cardiaque)</option>
                          <option value="holterTension">Holter tensionnel</option>
                          <option value="holterECG">Holter ECG</option>
                          <option value="consultationDomicile">Consultation à domicile</option>
                          <option value="consultationDomicileECG">Consultation à domicile avec ECG/écho</option>
                          <option value="transportMedicalise">Transport médicalisé</option>
                          <option value="suiviDomicile">Prise en charge du patient à domicile</option>
                        </select>
                        <div className="absolute left-3 top-3 text-gray-400">
                          <FaUserAlt />
                        </div>
                      </div>
                      {errors.service && <p className="mt-1 text-red-500 text-sm">{errors.service.message}</p>}
                    </div>
                    
                    {/* Date and Time Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Date</label>
                        <div className="relative">
                          <input
                            type="date"
                            {...register("date", { required: "La date est requise" })}
                            className={`w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                          />
                          <div className="absolute left-3 top-3 text-gray-400">
                            <FaCalendarAlt />
                          </div>
                        </div>
                        {errors.date && <p className="mt-1 text-red-500 text-sm">{errors.date.message}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Heure</label>
                        <div className="relative">
                          <input
                            type="time"
                            {...register("time", { required: "L'heure est requise" })}
                            className={`w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
                          />
                          <div className="absolute left-3 top-3 text-gray-400">
                            <FaClock />
                          </div>
                        </div>
                        {errors.time && <p className="mt-1 text-red-500 text-sm">{errors.time.message}</p>}
                      </div>
                    </div>
                    
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Nom complet</label>
                        <div className="relative">
                          <input
                            type="text"
                            {...register("name", { required: "Le nom est requis" })}
                            className={`w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Votre nom"
                          />
                          <div className="absolute left-3 top-3 text-gray-400">
                            <FaUserAlt />
                          </div>
                        </div>
                        {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Téléphone</label>
                        <div className="relative">
                          <input
                            type="tel"
                            {...register("phone", { required: "Le téléphone est requis" })}
                            className={`w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Votre numéro"
                          />
                          <div className="absolute left-3 top-3 text-gray-400">
                            <FaPhone />
                          </div>
                        </div>
                        {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>}
                      </div>
                    </div>
                    
                    {/* Message */}
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Message (facultatif)</label>
                      <div className="relative">
                        <textarea
                          {...register("message")}
                          rows={4}
                          className="w-full p-3 border border-gray-300 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                          placeholder="Informations supplémentaires ou questions"
                        ></textarea>
                        <div className="absolute left-3 top-3 text-gray-400">
                          <FaCommentAlt />
                        </div>
                      </div>
                    </div>
                    
                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow transition duration-300 flex items-center justify-center"
                      >
                        <FaCalendarAlt className="mr-2" />
                        Confirmer le rendez-vous
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
