'use client';
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-green-100 ">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center ">
          <Link href="/home" className="text-xl font-bold text-green-600">TrainingGoal</Link>
          <div className="space-x-4">
            <Link href="/home" className="px-3 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors">Home</Link>
            <Link href="/depense" className="px-3 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors">Dépense</Link>
            <Link href="/recette" className="px-3 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors">Recette</Link>
            <Link href="/programme" className="px-3 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors">Programme</Link>
          </div>
        </nav>
      </header>

      {/* Banner */}
      
      <div className="bg-green-500 text-white text-center py-20 mb-8">
        <h1 className="text-4xl font-bold">Welcome to TrainingGoal</h1>
        <p className="mt-2 text-xl">Your one-stop destination for all things sports!</p>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "News 1", content: "..." },
          { title: "News 2", content: "..." },
          { title: "News 3", content: "..." },
          { title: "News 4", content: "..." },
          { title: "News 5", content: "..." },//compléter l'objet avec une url pour faire des news cliquable
          { title: "News 6", content: "..." }//essayer de créer une fonction qui reprend les objets et de le réorganiser pour que chaque nouveauté du site s'ajoute en index 0 et faire une condition pour le mapping afin qu'ilk n'affiche que les 6 premiers index
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-lg border shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="flex justify-center">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}