import { useState } from 'react'
import { Search, Star, Download, Filter, Heart, Package, Code, Zap, Shield, Globe } from 'lucide-react'

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'All categories', icon: Package },
    { id: 'actions', name: 'Actions', icon: Zap },
    { id: 'apps', name: 'Apps', icon: Code },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'ci-cd', name: 'CI/CD', icon: Globe }
  ]

  const products = [
    {
      id: 1,
      name: 'GitHub Copilot',
      category: 'apps',
      description: 'Your AI pair programmer',
      developer: 'GitHub',
      stars: 15234,
      downloads: '2.5M',
      price: 'Free trial',
      isVerified: true,
      tags: ['AI', 'Code completion', 'Productivity']
    },
    {
      id: 2,
      name: 'Dependabot',
      category: 'security',
      description: 'Automated dependency updates',
      developer: 'GitHub',
      stars: 8932,
      downloads: '1.8M',
      price: 'Free',
      isVerified: true,
      tags: ['Security', 'Dependencies', 'Automation']
    },
    {
      id: 3,
      name: 'CodeQL',
      category: 'security',
      description: 'Code analysis for security vulnerabilities',
      developer: 'GitHub',
      stars: 6543,
      downloads: '900K',
      price: 'Free',
      isVerified: true,
      tags: ['Security', 'Code analysis', 'Vulnerabilities']
    },
    {
      id: 4,
      name: 'GitHub Actions',
      category: 'actions',
      description: 'Automate your workflow from idea to production',
      developer: 'GitHub',
      stars: 12456,
      downloads: '3.2M',
      price: 'Free',
      isVerified: true,
      tags: ['CI/CD', 'Automation', 'Workflows']
    },
    {
      id: 5,
      name: 'Sentry GitHub Integration',
      category: 'apps',
      description: 'Error tracking and performance monitoring',
      developer: 'Sentry',
      stars: 4321,
      downloads: '500K',
      price: 'Free tier available',
      isVerified: false,
      tags: ['Monitoring', 'Error tracking', 'Performance']
    },
    {
      id: 6,
      name: 'Codecov',
      category: 'ci-cd',
      description: 'Code coverage reporting and analysis',
      developer: 'Codecov',
      stars: 3456,
      downloads: '400K',
      price: 'Free for open source',
      isVerified: false,
      tags: ['Testing', 'Coverage', 'Quality']
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                GitHub Marketplace
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Discover and install tools to improve your workflow
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Search apps and actions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500 w-64"
                />
              </div>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <Filter className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto py-4">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Featured Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Featured</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredProducts.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {product.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {product.name}
                        </h3>
                        {product.isVerified && (
                          <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full text-xs">
                            Verified
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">by {product.developer}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>{product.stars.toLocaleString()}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{product.downloads}</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {product.price}
                    </span>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                      Install
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Products */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              All {categories.find(cat => cat.id === activeCategory)?.name || 'Products'}
            </h2>
            <div className="flex items-center space-x-2">
              <select className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm">
                <option>Most popular</option>
                <option>Newest</option>
                <option>Price: Low to high</option>
                <option>Price: High to low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                    {product.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">
                        {product.name}
                      </h3>
                      {product.isVerified && (
                        <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded-full text-xs">
                          ✓
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">by {product.developer}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center space-x-1">
                          <Star className="h-3 w-3" />
                          <span>{product.stars.toLocaleString()}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Download className="h-3 w-3" />
                          <span>{product.downloads}</span>
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                          <Heart className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                        </button>
                        <button className="px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">
                          Install
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
            Load more products
          </button>
        </div>
      </div>
    </div>
  )
}
