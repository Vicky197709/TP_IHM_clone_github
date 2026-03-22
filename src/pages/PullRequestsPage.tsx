import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Search, Plus, Filter, GitPullRequest, GitBranch, CheckCircle, XCircle, ChevronDown, User } from 'lucide-react'

interface PullRequest {
  id: number
  title: string
  number: number
  state: 'open' | 'closed' | 'merged'
  author: string
  sourceBranch: string
  targetBranch: string
  comments: number
  createdAt: string
  updatedAt: string
  reviewers: string[]
  mergeable: boolean
}

export default function PullRequestsPage() {
  const { username, repoName } = useParams()
  const [selectedFilter, setSelectedFilter] = useState('open')

  const pullRequests: PullRequest[] = [
    {
      id: 1,
      title: 'Add new feature: User authentication',
      number: 1,
      state: 'open',
      author: 'Vicky197709',
      sourceBranch: 'feature-auth',
      targetBranch: 'main',
      comments: 5,
      createdAt: '2 days ago',
      updatedAt: '1 hour ago',
      reviewers: ['reviewer1', 'reviewer2'],
      mergeable: true
    },
    {
      id: 2,
      title: 'Fix: Memory leak in data processing',
      number: 2,
      state: 'merged',
      author: 'Vicky197709',
      sourceBranch: 'fix-memory-leak',
      targetBranch: 'main',
      comments: 3,
      createdAt: '1 week ago',
      updatedAt: '5 days ago',
      reviewers: ['reviewer1'],
      mergeable: true
    },
    {
      id: 3,
      title: 'Update dependencies and fix security issues',
      number: 3,
      state: 'closed',
      author: 'Vicky197709',
      sourceBranch: 'update-deps',
      targetBranch: 'main',
      comments: 2,
      createdAt: '2 weeks ago',
      updatedAt: '2 weeks ago',
      reviewers: [],
      mergeable: false
    }
  ]

  const openPRs = pullRequests.filter(pr => pr.state === 'open')
  const mergedPRs = pullRequests.filter(pr => pr.state === 'merged')
  const closedPRs = pullRequests.filter(pr => pr.state === 'closed')

  const getDisplayPRs = () => {
    switch (selectedFilter) {
      case 'open': return openPRs
      case 'merged': return mergedPRs
      case 'closed': return closedPRs
      default: return openPRs
    }
  }

  const displayPRs = getDisplayPRs()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Repository Header */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to={`/${username}`} className="text-blue-600 dark:text-blue-400 hover:underline">
              {username}
            </Link>
            <span className="text-gray-500 dark:text-gray-400">/</span>
            <Link to={`/${username}/${repoName}`} className="text-blue-600 dark:text-blue-400 hover:underline">
              {repoName}
            </Link>
            <span className="text-gray-500 dark:text-gray-400">/</span>
            <span className="text-gray-900 dark:text-gray-100">Pull requests</span>
          </div>
        </div>
      </div>

      {/* PR Header */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Pull requests</h1>
              <div className="flex space-x-4 text-sm">
                <button
                  onClick={() => setSelectedFilter('open')}
                  className={`flex items-center space-x-1 px-3 py-1 rounded ${
                    selectedFilter === 'open'
                      ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                >
                  <GitPullRequest className="h-4 w-4" />
                  <span>{openPRs.length} Open</span>
                </button>
                <button
                  onClick={() => setSelectedFilter('merged')}
                  className={`flex items-center space-x-1 px-3 py-1 rounded ${
                    selectedFilter === 'merged'
                      ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>{mergedPRs.length} Merged</span>
                </button>
                <button
                  onClick={() => setSelectedFilter('closed')}
                  className={`flex items-center space-x-1 px-3 py-1 rounded ${
                    selectedFilter === 'closed'
                      ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                >
                  <XCircle className="h-4 w-4" />
                  <span>{closedPRs.length} Closed</span>
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Search pull requests..."
                  className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              <button className="flex items-center space-x-1 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                <Plus className="h-4 w-4" />
                <span>New pull request</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PR List */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          {displayPRs.length === 0 ? (
            <div className="p-8 text-center">
              <GitPullRequest className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                {selectedFilter === 'open' ? 'No open pull requests' : 
                 selectedFilter === 'merged' ? 'No merged pull requests' : 
                 'No closed pull requests'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {selectedFilter === 'open' 
                  ? 'There are no open pull requests in this repository.'
                  : selectedFilter === 'merged'
                  ? 'There are no merged pull requests in this repository.'
                  : 'There are no closed pull requests in this repository.'
                }
              </p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                <Plus className="h-4 w-4 inline mr-1" />
                New pull request
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {displayPRs.map((pr) => (
                <div key={pr.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      {pr.state === 'open' ? (
                        <GitPullRequest className="h-5 w-5 text-green-600 dark:text-green-400" />
                      ) : pr.state === 'merged' ? (
                        <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <Link 
                          to={`/${username}/${repoName}/pull/${pr.number}`}
                          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                          {pr.title}
                        </Link>
                        {pr.mergeable && pr.state === 'open' && (
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                            Mergeable
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <span>#{pr.number}</span>
                        <div className="flex items-center space-x-1">
                          <GitBranch className="h-3 w-3" />
                          <span>{pr.sourceBranch} → {pr.targetBranch}</span>
                        </div>
                        <span>opened {pr.createdAt} by {pr.author}</span>
                        {pr.updatedAt !== pr.createdAt && (
                          <span>updated {pr.updatedAt}</span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        {pr.comments > 0 && (
                          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                            <GitPullRequest className="h-3 w-3" />
                            <span>{pr.comments} comments</span>
                          </div>
                        )}
                        {pr.reviewers.length > 0 && (
                          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                            <User className="h-3 w-3" />
                            <span>{pr.reviewers.length} reviewers</span>
                          </div>
                        )}
                        {pr.state === 'open' && pr.mergeable && (
                          <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                            <CheckCircle className="h-3 w-3" />
                            <span>Ready to merge</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
