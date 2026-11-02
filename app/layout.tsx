import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://balaji-palani-portfolio.vercel.app"),
  title: "Balaji Palani | Senior Scrum Master & Technical Agile Delivery Lead",
  description:
    "Certified Senior Scrum Master (CSM®, SAFe® 6 SSM) with 7+ years of IT experience combining 4+ years of dedicated Agile delivery leadership with a strong technical foundation in software engineering. Immediate Joiner (0 Days Notice).",
  keywords: [
    "Balaji Palani",
    "Senior Scrum Master",
    "Technical Agile Delivery Lead",
    "CSM",
    "SAFe 6 SSM",
    "Agile Coach",
    "Scrum of Scrums",
    "Jira JQL",
    "Power BI",
    "React.js",
    "AWS",
    "BFSI",
    "FinTech",
    "Telecom",
    "Immediate Joiner",
  ],
  authors: [{ name: "Balaji Palani", url: "https://linkedin.com/in/balajipalani92" }],
  openGraph: {
    title: "Balaji Palani | Senior Scrum Master & Technical Agile Delivery Lead",
    description:
      "Certified Senior Scrum Master (CSM®, SAFe® 6 SSM) with 7+ years of IT experience across BFSI, FinTech, and Telecom. Immediate Joiner (0 Days Notice).",
    url: "https://balaji-palani-portfolio.vercel.app",
    siteName: "Balaji Palani Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balaji Palani | Senior Scrum Master",
    description:
      "Certified Senior Scrum Master (CSM®, SAFe® 6 SSM) with 7+ years of IT experience. Immediate Joiner (0 Days Notice).",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Serif:ital,wght@0,400;0,600;0,700;1,400&family=Public+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body text-on-surface antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
