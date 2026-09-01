import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SBHR Consultancy | Premier IT & Multi-Sector Staffing Agency Kolkata",
  description:
    "SBHR Consultancy is a leading recruitment and staffing agency established in 2019 in Kolkata. Specializing in IT, Engineering, Finance, Energy, and 12+ industry sectors with a 24–48 hour talent delivery SLA.",
  keywords:
    "IT Staffing Kolkata, Recruitment Agency Kolkata, Permanent Recruitment, Contract Staffing, Executive Search, Multi-Domain Staffing India, Resume Writing Services, SBHR Consultancy",
  authors: [{ name: "SBHR Consultancy" }],
  icons: { icon: "/Logo.svg" },
  openGraph: {
    title: "SBHR Consultancy | Premier IT & Multi-Sector Staffing Agency Kolkata",
    description:
      "Veteran-guided recruitment solutions across 12+ industry domains. Pre-vetted candidate profiles delivered within 24–48 hours.",
    siteName: "SBHR Consultancy",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Scroll-reveal is observer-driven; without JS the elements would stay hidden. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        <Header />
        <main style={{ flex: "1 0 auto" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
