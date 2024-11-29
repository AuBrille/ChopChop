import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import ApolloProviderBase from '@/providers/apollo/ApolloProvider';

import './globals.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'A basic Next.js application',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen text-neutral-700">
        <ApolloProviderBase>
          <div className="min-h-screen">{children}</div>
        </ApolloProviderBase>
      </body>
    </html>
  );
};

export default RootLayout;
