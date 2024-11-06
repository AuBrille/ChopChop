import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import ApolloProviderBase from '../../providers/apollo/ApolloProvider';

import './globals.css';

import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'A basic Next.js application',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    // eslint-disable-next-line jsx-a11y/html-has-lang
    <html suppressHydrationWarning>
      <body className="h-screen text-neutral-700">
        <ApolloProviderBase>
          <div className="min-h-screen bg-green-100">
            <header className="bg-white shadow-md">
              <nav className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link href="/home" className="text-xl font-bold text-green-600">
                  TrainingGoal
                </Link>
                <div className="space-x-4">
                  <Link
                    href="/home"
                    className="rounded bg-green-500 px-3 py-2 text-white transition-colors hover:bg-green-600"
                  >
                    Home
                  </Link>
                  <Link
                    href="/consumption"
                    className="rounded bg-green-500 px-3 py-2 text-white transition-colors hover:bg-green-600"
                  >
                    Consumption
                  </Link>
                  <Link
                    href="/receipts"
                    className="rounded bg-green-500 px-3 py-2 text-white transition-colors hover:bg-green-600"
                  >
                    Receips
                  </Link>
                  <Link
                    href="/program"
                    className="rounded bg-green-500 px-3 py-2 text-white transition-colors hover:bg-green-600"
                  >
                    Program
                  </Link>
                </div>
              </nav>
            </header>
            {children}
          </div>
        </ApolloProviderBase>
      </body>
    </html>
  );
};

export default RootLayout;
