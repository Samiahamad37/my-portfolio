import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Samia Adam Hamad — Full-Stack Developer",
  description:
    "Backend-focused full-stack developer building scalable systems, APIs, and data-driven applications with Django, Node.js, Go, and modern web technologies.",
  keywords: [
    "portfolio",
    "developer",
    "Django",
    "full-stack",
    "backend",
    "Tanzania",
  ],
  authors: [{ name: "Samia Adam Hamad" }],
  openGraph: {
    title: "Samia Adam Hamad — Full-Stack Developer",
    description:
      "Backend-focused full-stack developer building scalable systems, APIs, and data-driven applications.",
    type: "website",
    images: [{ url: "/profile.png", width: 800, height: 800, alt: "Samia Adam Hamad" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
