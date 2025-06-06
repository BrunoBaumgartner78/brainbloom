import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import MenuMond from "@/components/menuMoon";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadaten für SEO, Social Media & Plattformen
export const metadata = {

  title: "Bruno Baumgartner – Bewusstsein, Wissenschaft & Heilung",
  description:
    "Bruno Baumgartner ist Autor zur Erforschung von Schizophrenie, Bewusstsein, Darmgesundheit und spirituellen Heilungswegen.",
  keywords: [
    "Schizophrenie",
    "Bewusstsein",
    "Darm-Hirn-Achse",
    "Heilung",
    "Spiritualität",
    "Psychose",
    "BrainBloom",
  ],
  authors: [{ name: "Bruno Baumgartner", url: "https://brainbloom.ch" }],
  creator: "Bruno Baumgartner",
  metadataBase: new URL("https://brainbloom.ch"),
  openGraph: {
    title: "Bruno Baumgartner – Bewusstsein, Wissenschaft & Heilung",
    description:
      "Plattform für Wissen, Erfahrung und Forschung rund um Schizophrenie, Darm und Geist.",
    url: "https://brainbloom.ch",
    siteName: "BrainBloom",
    images: [
      {
        url: "/Author.webp",
        width: 1200,
        height: 630,
        alt: "BrainBloom – Heilung beginnt im Darm und im Geist",
      },
    ],
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Baumgartner – Bewusstsein & Heilung",
    description:
      "Plattform für Schizophrenie, Mikrobiom und spirituelle Heilung.",
    images: ["/Author.jpg"],
    creator: "@brainbloom",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  themeColor: "#94c973",
  appleWebApp: {
    title: "BrainBloom",
    statusBarStyle: "default",
    capable: true,
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  other: {
    "msapplication-TileColor": "#94c973",
    "msapplication-config": "/browserconfig.xml",
  },
};
export const viewport = {
  themeColor: "#94c973",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {

  return (
    <html lang="de">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <MenuMond />
        <CookieConsent />
        <GoogleAnalytics gaId="G-4HC298TS36" />
      </body>
    </html>
  );
}
