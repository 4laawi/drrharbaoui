import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drrharbaoui.com'),
  title: {
    default: "Dr. Rharbaoui | Cardiologue",
    template: "%s | Dr. Rharbaoui"
  },
  description: "Cabinet de cardiologie du Dr. Rharbaoui, spécialiste en santé cardiaque proposant consultations, ECG, échocardiogrammes et soins à domicile.",
  keywords: "cardiologue, cardiologie, médecin, santé cardiaque, ECG, échographie cardiaque, consultation, rendez-vous médical, holter tensionnel, holter ECG, urgence cardiaque",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr',
    },
  },
  authors: [{ name: "Dr. Rharbaoui" }],
  category: "health",
  openGraph: {
    title: "Dr. Rharbaoui | Cardiologue",
    description: "Cabinet de cardiologie du Dr. Rharbaoui, spécialiste en santé cardiaque proposant consultations, ECG, échocardiogrammes et soins à domicile.",
    url: "https://www.drrharbaoui.com",
    siteName: "Dr. Rharbaoui Cardiologue",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Rharbaoui Cardiologue",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Rharbaoui | Cardiologue",
    description: "Cabinet de cardiologie du Dr. Rharbaoui, spécialiste en santé cardiaque proposant consultations, ECG, échocardiogrammes et soins à domicile.",
    images: ["/images/og-image.jpg"],
    creator: "@drrharbaoui",
  },
  verification: {
    google: "google-site-verification=placeholder",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icons/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icons/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/icons/apple-icon-180.png', type: 'image/png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icons/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans flex flex-col min-h-screen`}>
        <TopBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
