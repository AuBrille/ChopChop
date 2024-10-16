import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from 'react';
import ApolloProviderBase from '../../providers/apollo/ApolloProvider';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'A basic Next.js application',
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body className="h-screen text-neutral-700">
        <ApolloProviderBase>{children}</ApolloProviderBase>
      </body>
    </html>
  );
};

export default RootLayout;
