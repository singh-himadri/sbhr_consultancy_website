import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

/* Plus Jakarta Sans — highly professional, sleek corporate business font */
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SBHR Consultancy | Full Spectrum IT Staffing & Recruitment",
  description: "SBHR Consultancy is a premier IT staffing & executive recruitment partner connecting top-tier engineering talent with high-growth enterprises across India.",
  keywords: "IT Staffing, Executive Recruitment, Tech Hiring, HR Consultancy, Permanent Staffing, Contract Staffing, GCC Setup, Kolkata",
  authors: [{ name: "SBHR Consultancy" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        {/* No paddingTop — header is position:sticky, not fixed */}
        <main style={{ flex: "1 0 auto" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
