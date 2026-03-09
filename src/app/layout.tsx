import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/lib/redux-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raghu Ads – Digital Ads & Flex Printing | Devarakadra",
  description:
    "Raghu Ads offers high-quality flex printing, vinyl banners, hoarding boards, lighting boards, and advertising materials for businesses, political campaigns, and events in Devarakadra.",
  keywords:
    "flex printing, vinyl printing, hoarding boards, lighting boards, stickers, posters, visiting cards, digital printing, Devarakadra, Raghu Ads",
  openGraph: {
    title: "Raghu Ads – Digital Ads & Flex Printing",
    description:
      "High Quality Printing Solutions for Businesses & Events. Flex, Vinyl, Hoardings, Lighting Boards and more.",
    type: "website",
    locale: "en_IN",
    siteName: "Raghu Ads",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghu Ads – Digital Ads & Flex Printing",
    description:
      "High Quality Printing Solutions for Businesses & Events.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Raghu Ads",
  description: "Professional digital printing services – flex banners, vinyl, hoardings, lighting boards, stickers, posters.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Veerappaiah Complex, Shop No.7, Raichur Road",
    addressLocality: "Devarakadra",
    addressCountry: "IN",
  },
  telephone: "+91-9490366294",
  email: "raghuadsdvk@gmail.com",
  sameAs: ["https://www.instagram.com/raghu_ads"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "20:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body
        className={`${inter.variable} ${bebasNeue.variable} font-sans bg-black text-white antialiased`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
