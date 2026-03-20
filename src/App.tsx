function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">GitHub Clone</h1>
          <nav className="flex space-x-6">
            <a href="#" className="hover:text-gray-300">Pull requests</a>
            <a href="#" className="hover:text-gray-300">Issues</a>
            <a href="#" className="hover:text-gray-300">Marketplace</a>
            <a href="#" className="hover:text-gray-300">Explore</a>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto p-4">
        <div className="text-center py-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bienvenue sur le clone GitHub
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Projet universitaire d'interface homme-machine
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Nouveau repository
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
              Explorer
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
