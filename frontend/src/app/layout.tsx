import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import ApolloProviderBase from '../../providers/apollo/ApolloProvider';

import './globals.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'A basic Next.js application',
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body className="h-screen text-neutral-700">
        <ApolloProviderBase>
          {/* <div className="min-h-screen bg-green-100">
             
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
                    href="/depense"
                    className="rounded bg-green-500 px-3 py-2 text-white transition-colors hover:bg-green-600"
                  >
                    Dépense
                  </Link>
                  <Link
                    href="/recette"
                    className="rounded bg-green-500 px-3 py-2 text-white transition-colors hover:bg-green-600"
                  >
                    Recette
                  </Link>
                  <Link
                    href="/programme"
                    className="rounded bg-green-500 px-3 py-2 text-white transition-colors hover:bg-green-600"
                  >
                    Programme
                  </Link>
                </div>
              </nav>
            </header>
            {children}
          </div> */}
          {children}
        </ApolloProviderBase>
      </body>
    </html>
  );
};

export default RootLayout;
