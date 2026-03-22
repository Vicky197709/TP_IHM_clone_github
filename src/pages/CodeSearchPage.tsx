import { useState } from 'react'
import { Search, Code, FileText, Star, Eye, Zap, Globe, Clock } from 'lucide-react'

export default function CodeSearchPage() {
  const [activeTab, setActiveTab] = useState('search')
  const [query, setQuery] = useState('')

  const searchResults = [
    {
      id: 1,
      repository: 'github/linguist',
      file: 'lib/linguist/language.rb',
      path: 'lib/linguist/language.rb',
      content: 'def self.detect(blob)',
      matches: 3,
      language: 'Ruby',
      stars: 11534,
      updated: '2 days ago'
    },
    {
      id: 2,
      repository: 'microsoft/vscode',
      file: 'src/vs/editor/common/model/encodedTextAttributes.ts',
      path: 'src/vs/editor/common/model/encodedTextAttributes.ts',
      content: 'export class EncodedTextAttributes {',
      matches: 2,
      language: 'TypeScript',
      stars: 147890,
      updated: '5 hours ago'
    },
    {
      id: 3,
      repository: 'facebook/react',
      file: 'packages/react/src/React.js',
      path: 'packages/react/src/React.js',
      content: 'function ReactElement(type, key, ref, self, source, owner, props) {',
      matches: 1,
      language: 'JavaScript',
      stars: 220456,
      updated: '1 day ago'
    }
  ]

  const filters = [
    { label: 'Language', options: ['All', 'JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Rust'] },
    { label: 'Repository', options: ['All repositories', 'In your repositories', 'In your organizations'] },
    { label: 'Date', options: ['Any time', 'This week', 'This month', 'This year'] }
  ]

  const languages = [
    { name: 'JavaScript', count: '2.1M', color: 'bg-yellow-500' },
    { name: 'TypeScript', count: '890K', color: 'bg-blue-500' },
    { name: 'Python', count: '1.5M', color: 'bg-green-500' },
    { name: 'Java', count: '1.2M', color: 'bg-red-500' },
    { name: 'Go', count: '450K', color: 'bg-cyan-500' },
    { name: 'Rust', count: '320K', color: 'bg-orange-500' }
  ]

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Search across millions of repositories in seconds'
    },
    {
      icon: Code,
      title: 'Code-Aware',
      description: 'Understands code structure and syntax'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Search all public repositories on GitHub'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Search className="h-10 w-10 mr-3" />
              <h1 className="text-4xl font-bold">GitHub Code Search</h1>
            </div>
            <p className="text-xl mb-8 text-indigo-100">
              Search code across all of GitHub
            </p>
            <p className="text-lg mb-12 text-indigo-200 max-w-2xl">
              Find code, files, and repositories with powerful search capabilities. 
              Navigate and understand code right from GitHub.com.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search code..."
                  className="w-full pl-12 pr-4 py-4 text-lg border-0 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Search
                </button>
              </div>
              
              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm text-indigo-200">Popular:</span>
                {['react hooks', 'docker compose', 'async await', 'rest api'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 bg-indigo-700 bg-opacity-50 text-white rounded-full text-sm hover:bg-opacity-70"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {['search', 'languages', 'features'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 text-sm font-medium capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
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
        {/* Search Tab */}
        {activeTab === 'search' && (
          <div className="space-y-8">
            {/* Filters */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Filters</h3>
                <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                  Clear all
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filters.map((filter) => (
                  <div key={filter.label}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {filter.label}
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                      {filter.options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>

            {/* Search Results */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {query ? `Results for "${query}"` : 'Recent searches'}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {searchResults.length} results
                </span>
              </div>
              
              <div className="space-y-4">
                {searchResults.map((result) => (
                  <div key={result.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-gray-100">
                            {result.repository}
                          </h4>
                          <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded text-xs">
                            {result.language}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <div className="flex items-center space-x-1">
                            <FileText className="h-4 w-4" />
                            <span>{result.file}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4" />
                            <span>{result.stars.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{result.updated}</span>
                          </div>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                        <Eye className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      </button>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300 mb-3">
                      <pre>{result.content}</pre>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {result.matches} matches
                      </span>
                      <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                          View file
                        </button>
                        <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                          Go to repo
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Languages Tab */}
        {activeTab === 'languages' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Popular Languages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {languages.map((lang) => (
                <div key={lang.name} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${lang.color}`}></div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {lang.name}
                      </h3>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {lang.count} files
                    </span>
                  </div>
                  <button className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                    Search {lang.name} code
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Search Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Search Tips */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Search Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Basic Search</h4>
                  <div className="space-y-2 font-mono text-sm text-gray-600 dark:text-gray-400">
                    <div>function getUser</div>
                    <div>import React</div>
                    <div>const API_KEY</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Advanced Search</h4>
                  <div className="space-y-2 font-mono text-sm text-gray-600 dark:text-gray-400">
                    <div>repo:facebook/react</div>
                    <div>language:typescript</div>
                    <div>filename:package.json</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
