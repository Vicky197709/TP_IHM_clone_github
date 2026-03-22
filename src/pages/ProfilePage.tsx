import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Book, Users, Star, Package } from 'lucide-react'

interface Repository {
  id: number
  name: string
  description: string
  language: string
  visibility: string
  updated_at: string
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const repositories: Repository[] = [
    {
      id: 1,
      name: 'first_repository',
      description: '',
      language: 'Java',
      visibility: 'Public',
      updated_at: '2 days ago'
    },
    {
      id: 2,
      name: 'TD_proc',
      description: '',
      language: 'Java',
      visibility: 'Public',
      updated_at: '1 week ago'
    },
    {
      id: 3,
      name: 'poojava',
      description: 'tp sur la programmation orienté objet en java',
      language: 'Java',
      visibility: 'Public',
      updated_at: '2 weeks ago'
    },
    {
      id: 4,
      name: 'Tous_les_tp',
      description: '',
      language: 'Java',
      visibility: 'Public',
      updated_at: '3 weeks ago'
    },
    {
      id: 5,
      name: 'V_zone_test',
      description: '',
      language: 'Python',
      visibility: 'Public',
      updated_at: '1 month ago'
    },
    {
      id: 6,
      name: 'Memoire_did_rdc_1',
      description: '',
      language: '',
      visibility: 'Public',
      updated_at: '2 months ago'
    }
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Book },
    { id: 'repositories', label: 'Repositories', icon: Package },
    { id: 'projects', label: 'Projects', icon: Users },
    { id: 'packages', label: 'Packages', icon: Package },
    { id: 'stars', label: 'Stars', icon: Star }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Profile Header */}
      <div className="bg-gray-900 dark:bg-gray-950 text-white dark:text-gray-100 border-b border-gray-700 dark:border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            {/* Avatar */}
            <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-4xl font-bold">
              V
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2 text-white dark:text-gray-100">Vicky ituze</h1>
              <p className="text-gray-300 dark:text-gray-400 mb-4">Vicky197709</p>
              <p className="text-gray-400 dark:text-gray-500 mb-4">Backend developer && software engineer && blockchain developer</p>
              
              {/* Follow Button */}
              <button className="bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium text-white dark:text-gray-100">
                Follow
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-8 text-sm">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4 text-gray-400 dark:text-gray-500" />
              <span><strong className="text-white dark:text-gray-100">0</strong> <span className="text-gray-400 dark:text-gray-500">followers</span></span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4 text-gray-400 dark:text-gray-500" />
              <span><strong className="text-white dark:text-gray-100">0</strong> <span className="text-gray-400 dark:text-gray-500">following</span></span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-gray-400 dark:text-gray-500" />
              <span><strong className="text-white dark:text-gray-100">0</strong> <span className="text-gray-400 dark:text-gray-500">stars</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 text-sm font-medium whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        {activeTab === 'overview' && (
          <div>
            {/* Popular Repositories */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Popular repositories</h2>
              <div className="grid gap-4">
                {repositories.map((repo) => (
                  <div key={repo.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Link 
                            to={`/${repo.name}`}
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-lg"
                          >
                            {repo.name}
                          </Link>
                          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                            {repo.visibility}
                          </span>
                        </div>
                        {repo.description && (
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{repo.description}</p>
                        )}
                        <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                          {repo.language && (
                            <div className="flex items-center space-x-1">
                              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                              <span>{repo.language}</span>
                            </div>
                          )}
                          <span>Updated {repo.updated_at}</span>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                        <Star className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'repositories' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Repositories</h2>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Find a repository..."
                  className="px-3 py-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
                <select className="px-3 py-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg text-sm focus:outline-none focus:border-blue-500">
                  <option>Type: All</option>
                  <option>Public</option>
                  <option>Private</option>
                  <option>Sources</option>
                  <option>Forks</option>
                  <option>Archived</option>
                  <option>Mirrors</option>
                </select>
                <select className="px-3 py-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg text-sm focus:outline-none focus:border-blue-500">
                  <option>Language: All</option>
                  <option>Java</option>
                  <option>Python</option>
                  <option>TypeScript</option>
                </select>
                <button className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                  New
                </button>
              </div>
            </div>
            
            <div className="grid gap-4">
              {repositories.map((repo) => (
                <div key={repo.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Link 
                          to={`/repos/${repo.name}`}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-lg"
                        >
                          {repo.name}
                        </Link>
                        <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                          {repo.visibility}
                        </span>
                      </div>
                      {repo.description && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{repo.description}</p>
                      )}
                      <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                        {repo.language && (
                          <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <span>{repo.language}</span>
                          </div>
                        )}
                        <span>Updated {repo.updated_at}</span>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                      <Star className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    </button>
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
