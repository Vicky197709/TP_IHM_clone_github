import { useState } from 'react'
import { Package, Search, Download, Star, Shield, Globe, Code, Lock, Filter, Plus } from 'lucide-react'

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const packages = [
    {
      name: '@my-org/web-components',
      version: '2.1.0',
      description: 'Reusable web components library',
      downloads: '15.2K',
      stars: 234,
      language: 'TypeScript',
      license: 'MIT',
      lastUpdated: '2 days ago',
      private: false
    },
    {
      name: '@my-org/utils',
      version: '1.8.3',
      description: 'Common utility functions',
      downloads: '8.7K',
      stars: 89,
      language: 'JavaScript',
      license: 'Apache-2.0',
      lastUpdated: '1 week ago',
      private: false
    },
    {
      name: '@my-org/api-client',
      version: '3.0.1',
      description: 'API client library',
      downloads: '3.2K',
      stars: 45,
      language: 'TypeScript',
      license: 'MIT',
      lastUpdated: '3 days ago',
      private: true
    }
  ]

  const registries = [
    {
      name: 'npm',
      description: 'JavaScript package registry',
      icon: Code,
      packages: '2.1M+',
      popular: true
    },
    {
      name: 'Docker Hub',
      description: 'Container image registry',
      icon: Package,
      packages: '13M+',
      popular: true
    },
    {
      name: 'Maven Central',
      description: 'Java package registry',
      icon: Code,
      packages: '500K+',
      popular: false
    },
    {
      name: 'NuGet',
      description: '.NET package registry',
      icon: Code,
      packages: '300K+',
      popular: false
    }
  ]

  const usageStats = [
    {
      period: 'Last 30 days',
      downloads: '27.1K',
      packages: 3,
      topPackage: '@my-org/web-components'
    },
    {
      period: 'Last 7 days',
      downloads: '8.4K',
      packages: 2,
      topPackage: '@my-org/utils'
    },
    {
      period: 'Today',
      downloads: '1.2K',
      packages: 1,
      topPackage: '@my-org/web-components'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Package className="h-10 w-10 mr-3" />
              <h1 className="text-4xl font-bold">GitHub Packages</h1>
            </div>
            <p className="text-xl mb-8 text-orange-100">
              Your packages, at home with their code
            </p>
            <p className="text-lg mb-12 text-orange-200 max-w-2xl">
              Host packages privately for your organization or publicly for the open source community. 
              Find, share, and use packages from your source code repositories.
            </p>
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Publish package
              </button>
              <button className="px-6 py-3 bg-orange-700 text-white rounded-lg font-semibold hover:bg-orange-800 transition-colors">
                Explore packages
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {['overview', 'packages', 'registries', 'usage'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 text-sm font-medium capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-orange-500 text-orange-600 dark:text-orange-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
                Why GitHub Packages?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Private & Secure</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Host packages privately with enterprise-grade security
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Multi-Registry</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Support for npm, Docker, Maven, NuGet, and more
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Integrated</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Seamlessly integrated with GitHub repositories
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">50M+</div>
                <div className="text-gray-600 dark:text-gray-400">Packages hosted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">1B+</div>
                <div className="text-gray-600 dark:text-gray-400">Downloads per month</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Package registries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-400">Uptime SLA</div>
              </div>
            </div>

            {/* Quick Start */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Quick Start</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">npm</h4>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                    <pre>{`npm login --registry=https://npm.pkg.github.com
npm publish`}</pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Docker</h4>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                    <pre>{`docker login docker.pkg.github.com
docker push docker.pkg.github.com/owner/repo/image:tag`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Packages Tab */}
        {activeTab === 'packages' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Your Packages</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search packages..."
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <Filter className="h-4 w-4" />
                </button>
                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                  <Plus className="h-4 w-4 inline mr-2" />
                  New package
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {packages.map((pkg, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {pkg.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                            {pkg.name}
                          </h3>
                          {pkg.private && (
                            <Lock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          )}
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-sm">
                            v{pkg.version}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          {pkg.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Download className="h-4 w-4" />
                            <span>{pkg.downloads}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Star className="h-4 w-4" />
                            <span>{pkg.stars}</span>
                          </span>
                          <span>{pkg.language}</span>
                          <span>{pkg.license}</span>
                          <span>Updated {pkg.lastUpdated}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        View
                      </button>
                      <button className="px-3 py-1 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                        Install
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Registries Tab */}
        {activeTab === 'registries' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Supported Registries</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {registries.map((registry, index) => {
                const Icon = registry.icon
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                            {registry.name}
                          </h3>
                          {registry.popular && (
                            <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-xs">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          {registry.description}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {registry.packages} packages
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Usage Tab */}
        {activeTab === 'usage' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Usage Statistics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {usageStats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {stat.period}
                    </h3>
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                      {stat.downloads}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">downloads</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Packages:</span>
                      <span className="text-gray-900 dark:text-gray-100">{stat.packages}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Top package:</span>
                      <span className="text-gray-900 dark:text-gray-100 font-mono text-xs">{stat.topPackage}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
