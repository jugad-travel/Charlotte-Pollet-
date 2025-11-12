import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://christine-solignac.vercel.app";
const ogImage = `${siteUrl}/images/photo-christine.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Thérapie de couple & Conseil conjugal à Aix-en-Provence – Christine Solignac",
  description:
    "Christine Solignac, conseillère conjugale et familiale à Aix-en-Provence. Accompagnement des couples, familles et individus vers une communication apaisée et des relations épanouies.",
  alternates: { 
    canonical: siteUrl,
    languages: {
      'fr': siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Christine Solignac – Thérapie de couple",
    title: "Thérapie de couple & Conseil conjugal à Aix-en-Provence – Christine Solignac",
    description:
      "Conseil conjugal et familial à Aix-en-Provence. Espace d'écoute, de dialogue et de reconstruction pour couples et familles.",
    images: [{ 
      url: ogImage, 
      width: 1200, 
      height: 630, 
      alt: "Christine Solignac – Thérapie de couple à Aix-en-Provence" 
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thérapie de couple & Conseil conjugal à Aix-en-Provence – Christine Solignac",
    description:
      "Conseil conjugal et familial à Aix-en-Provence. Accompagnement des couples, familles et individus.",
    images: [ogImage],
  },
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: { 
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Données structurées JSON-LD
const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Christine Solignac",
  "url": siteUrl,
  "logo": ogImage,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2 rue Pascal Fieschi",
    "addressLocality": "Aix-en-Provence",
    "postalCode": "13080",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Rendez-vous",
    "areaServed": "FR",
    "availableLanguage": "fr"
  }
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "CounselingService",
  "name": "Conseil conjugal et familial & Thérapie de couple",
  "areaServed": {
    "@type": "City",
    "name": "Aix-en-Provence"
  },
  "url": siteUrl,
  "image": ogImage,
  "provider": { 
    "@type": "Person", 
    "name": "Christine Solignac" 
  },
  "description": "Accompagnement des couples, familles et individus vers une communication apaisée et des relations épanouies."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
        />
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

