import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kampüs Asistanı",
  description: "Kampüs hayatı için hepsi bir arada asistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>        
        {/* Arka plan resmi ve karartma overlay */}
        <div className="fixed inset-0 -z-10">
          {/* Fallback gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900" />
          {/* Arka plan görüntüsü - Önce local (/campus-bg.jpg), yoksa placeholder */}
          <div
            className="absolute inset-0 opacity-70"
            style={{ 
              backgroundImage: 'url(/campus-bg.jpg), url(https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center' 
            }}
          />
          {/* Overlay koyulaştırma */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
