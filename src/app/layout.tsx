import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cucha Repuestos",
  description: "Especialistas en cada repuesto de su camión Iveco",
  keywords: [
    "Next.js",
    "repuestos",
    "camion",
    "Cucha Repuestos",
    "iveco",
    "patagonia",
    "esquel",
    "comodoro rivadavia",
    "repuestos iveco",
    "camion iveco",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Cucha Repuestos",
    url: "https://cucharepuestos.com",
    siteName: "Cucha Repuestos",
    locale: "es_ES",
    type: "website",
    description: "Especialistas en cada repuesto de su camión Iveco",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cucha Repuestos",
    description: "Especialistas en cada repuesto de su camión Iveco",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://cucharepuestos.com",
    url: "https://cucharepuestos.com",
    name: "Cucha Repuestos",
    description: "Especialistas en cada repuesto de su camión Iveco",
  };
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-texto ${montserrat.className} scroll-smooth`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
