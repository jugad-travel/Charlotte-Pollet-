import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://charlottepollet.fr";
const ogImage = `${siteUrl}/images/photo-charlotte.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Thérapie de couple Imago – Charlotte Pollet",
  description:
    "Charlotte Pollet, thérapeute de couple certifiée Imago. Accompagnement des couples vers une communication authentique et une relation épanouie grâce à la méthode Imago.",
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
    siteName: "Charlotte Pollet – Thérapie de couple Imago",
    title: "Thérapie de couple Imago – Charlotte Pollet",
    description:
      "Thérapie relationnelle Imago pour couples. Méthode constructive pour dissoudre les conflits et remettre du lien dans la relation.",
    images: [{ 
      url: ogImage, 
      width: 1200, 
      height: 630, 
      alt: "Charlotte Pollet – Thérapie de couple Imago" 
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thérapie de couple Imago – Charlotte Pollet",
    description:
      "Thérapie relationnelle Imago pour couples. Accompagnement vers une communication authentique et une relation épanouie.",
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
  "name": "Charlotte Pollet",
  "url": siteUrl,
  "logo": ogImage,
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Rendez-vous",
    "telephone": "+33618547154",
    "areaServed": "FR",
    "availableLanguage": "fr"
  }
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "CounselingService",
  "name": "Thérapie de couple Imago",
  "url": siteUrl,
  "image": ogImage,
  "provider": { 
    "@type": "Person", 
    "name": "Charlotte Pollet" 
  },
  "description": "Thérapie relationnelle Imago pour couples. Méthode constructive pour dissoudre les conflits et remettre du lien dans la relation."
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

