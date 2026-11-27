import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { SessionProvider } from 'next-auth/react';
import { Suspense } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Karen Mahr | Sacramental Meeting',
    template: '%s | Sacramental Meeting',
  },
  description:
    'Create, edit, and keep a record of minutes for sacrament meetings.',
  metadataBase: new URL('https://sacrament-meetings-git-peer-code-review-team-aa42.vercel.app/'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Suspense fallback={<header className="h-16 border-b bg-white" />}>
            <Header />
          </Suspense>
          {children}
        </SessionProvider>
        <Footer />
      </body>
    </html>
  );
}


