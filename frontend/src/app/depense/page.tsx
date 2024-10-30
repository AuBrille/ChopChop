'use client';
import Link from 'next/link'

export default function Component() {
  return (
    <div className="min-h-screen bg-green-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/home" className="text-xl font-bold text-green-600">TrainingGoal</Link>
          <div className="space-x-4">
            <Link href="/home" className="px-3 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors">Home</Link>
            <Link href="/depense" className="px-3 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors">Dépense</Link>
            <Link href="/recette" className="px-3 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors">Recette</Link>
            <Link href="/programme" className="px-3 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors">Programme</Link>
          </div>
        </nav>
      </header>

      <div className="bg-green-500 text-white text-center py-20 mb-8">
        <h1 className="text-4xl font-bold">Dépense</h1>
        <p className="mt-2 text-xl">Ou comment calculer ses dépenses calorifiques</p>
      </div>
    </div>)}