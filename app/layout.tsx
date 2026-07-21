import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Tuckerton Junk Removal | Same-Day Hauling in Tuckerton, NJ",
  description:
    "Local junk removal in Tuckerton, NJ. Same-day furniture, appliance, estate cleanout, and debris hauling for Tuckerton, Little Egg Harbor, Mystic Island, and Manahawkin. 200+ five-star reviews. Call (609) 703-2115 for a free upfront quote.",
  keywords: [
    "junk removal Tuckerton NJ",
    "junk removal Little Egg Harbor",
    "estate cleanout Tuckerton",
    "furniture removal Tuckerton NJ",
    "appliance removal Tuckerton NJ",
    "same day junk removal Tuckerton",
    "junk hauling Mystic Island NJ",
    "construction debris removal Ocean County NJ",
    "yard waste removal Tuckerton",
    "junk removal near me Tuckerton",
  ],
  applicationName: site.name,
  authors: [{ name: site.parent }],
  creator: site.parent,
  publisher: site.parent,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Tuckerton Junk Removal | Same-Day Hauling in Tuckerton, NJ",
    description:
      "Same-day junk removal, furniture and appliance pickup, and estate cleanouts in Tuckerton, NJ and across southern Ocean County. 200+ five-star reviews.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuckerton Junk Removal | Same-Day Hauling in Tuckerton, NJ",
    description:
      "Same-day junk removal, furniture and appliance pickup, and estate cleanouts in Tuckerton, NJ and across southern Ocean County.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Junk Removal Service",
};

export const viewport = {
  themeColor: "#0d2444",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
