import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prise de rendez-vous | Dr. Rharbaoui Cardiologue",
  description: "Prenez rendez-vous en ligne avec Dr. Rharbaoui, cardiologue. Consultation au cabinet ou à domicile, ECG, échographie cardiaque et autres services.",
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
