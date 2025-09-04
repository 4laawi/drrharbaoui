import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Dr. Rharbaoui Cardiologue",
  description: "Contactez Dr. Rharbaoui, cardiologue. Téléphone, WhatsApp et formulaire de contact pour prendre rendez-vous ou poser vos questions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
