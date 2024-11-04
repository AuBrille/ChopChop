import header from '../../../public/header.png';

export const Home = () => {
  return (
    <>
      {/* Banner */}

      <div
        style={{
          backgroundImage: `url("./${header.src}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="mb-8 py-20 text-center text-white"
      >
        <h1 className="text-4xl font-bold">Welcome to TrainingGoal</h1>
        <p className="mt-2 text-xl">Your one-stop destination for all things sports!</p>
      </div>

      {/* Content */}
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          { title: 'News 1', content: '...' },
          { title: 'News 2', content: '...' },
          { title: 'News 3', content: '...' },
          { title: 'News 4', content: '...' },
          { title: 'News 5', content: '...' }, //compléter l'objet avec une url pour faire des news cliquable
          { title: 'News 6', content: '...' }, //essayer de créer une fonction qui reprend les objets et de le réorganiser pour que chaque nouveauté du site s'ajoute en index 0 et faire une condition pour le mapping afin qu'ilk n'affiche que les 6 premiers index
        ].map((item, index) => (
          <div key={index} className="rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-xl font-semibold">{item.title}</h2>
            <p className="flex justify-center">{item.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};
