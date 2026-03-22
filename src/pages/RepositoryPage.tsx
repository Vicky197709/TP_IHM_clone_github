import { useParams, Link } from 'react-router-dom'
import { Star, GitBranch, Eye, AlertCircle, GitPullRequest } from 'lucide-react'

interface RepositoryData {
  name: string
  description: string
  language: string
  stars: number
  forks: number
  watchers: number
  openIssues: number
  updatedAt: string
  createdAt: string
  size: string
  license: string
}

export default function RepositoryPage() {
  const { username, repoName } = useParams()

  // Mock data - dans une vraie app, ça viendrait d'une API
  const repository: RepositoryData = {
    name: repoName || 'unknown',
    description: 'tp sur la programmation orienté objet en java',
    language: 'Java',
    stars: 0,
    forks: 0,
    watchers: 0,
    openIssues: 0,
    updatedAt: '2 days ago',
    createdAt: '6 months ago',
    size: '125 KB',
    license: 'MIT License'
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Repository Header */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Link 
                  to={`/${username}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {username}
                </Link>
                <span className="text-gray-500 dark:text-gray-400">/</span>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">{repository.name}</h1>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">{repository.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>{repository.language}</span>
                </div>
                <span>{repository.stars} stars</span>
                <span>{repository.forks} forks</span>
                <span>{repository.watchers} watching</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                <Star className="h-4 w-4 inline mr-1" />
                Star
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
                <GitBranch className="h-4 w-4 inline mr-1" />
                Fork
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            <button className="flex items-center space-x-2 py-4 px-1 border-b-2 border-blue-500 text-sm font-medium text-blue-600 dark:text-blue-400 whitespace-nowrap">
              <Eye className="h-4 w-4" />
              <span>Code</span>
            </button>
            <Link to={`/${username}/${repoName}/issues`} className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap">
              <AlertCircle className="h-4 w-4" />
              <span>Issues</span>
            </Link>
            <Link to={`/${username}/${repoName}/pulls`} className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap">
              <GitPullRequest className="h-4 w-4" />
              <span>Pull requests</span>
            </Link>
            <button className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap">
              <span>Actions</span>
            </button>
            <button className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap">
              <span>Projects</span>
            </button>
            <button className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap">
              <span>Security</span>
            </button>
            <button className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap">
              <span>Insights</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Content */}
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">About</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">{repository.language}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">MIT License</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">{repository.createdAt}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">{repository.updatedAt}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">README.md</h3>
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <h1>{repository.name}</h1>
                    <p>{repository.description}</p>
                    <h2>Installation</h2>
                    <pre><code>npm install</code></pre>
                    <h2>Usage</h2>
                    <pre><code>// Example usage code here</code></pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80">
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">About</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">{repository.language}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">MIT License</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">{repository.createdAt}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">{repository.updatedAt}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">{repository.size}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">Languages</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-900 dark:text-gray-100">Java</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
