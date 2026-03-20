import Header from '../components/layout/Header'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            The future of building happens together
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Tools and trends evolve, but collaboration endures. With GitHub, developers, agents, and code come together on one platform.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Try GitHub Copilot free
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Sign up for free
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">GitHub features</h2>
            <p className="text-xl text-gray-600">Write, test, and fix code quickly with GitHub Copilot, from simple boilerplate to complex features.</p>
          </div>
          
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Accelerate your entire workflow</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From your first line of code to final deployment, GitHub provides AI and automation tools to help you build and ship better software faster.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
