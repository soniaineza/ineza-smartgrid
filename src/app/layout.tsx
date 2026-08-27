import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/content/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://inezasmartgrid.com"),
  title: {
    default: `${site.name} — Software Engineering`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Ineza SmartGrid",
    "software engineering",
    "software development",
    "web platforms",
    "mobile app development",
    "cloud infrastructure",
    "AI and automation",
    "data systems",
    "Kigali Rwanda",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: `${site.name} — Software Engineering`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Software Engineering`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only z-[100] rounded-md bg-cyan-400 px-4 py-2 font-semibold text-ink-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
