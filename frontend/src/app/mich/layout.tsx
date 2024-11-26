import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'A basic Next.js application',
};

const MichLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-green-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/mich/home" className="text-xl font-bold text-green-600">
            TrainingGoal
          </Link>
          <div className="space-x-4">
            <Link
              href="/mich/home"
              className="rounded bg-green-500 px-3 py-2 text-white transition-colors hover:bg-green-600"
            >
              Home
            </Link>
            <Link
              href="/mich/consumption"
              className="rounded bg-green-500 px-3 py-2 text-white transition-colors hover:bg-green-600"
            >
              Consumption
            </Link>
            <Link
              href="/mich/receipts"
              className="rounded bg-green-500 px-3 py-2 text-white transition-colors hover:bg-green-600"
            >
              Receips
            </Link>
            <Link
              href="/mich/program"
              className="rounded bg-green-500 px-3 py-2 text-white transition-colors hover:bg-green-600"
            >
              Program
            </Link>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default MichLayout;
