import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Search, Plus, Filter, AlertCircle, GitPullRequest, Users, ChevronDown } from 'lucide-react'

interface Issue {
  id: number
  title: string
  number: number
  state: 'open' | 'closed'
  author: string
  comments: number
  createdAt: string
  labels: string[]
  assignees: string[]
}

export default function IssuesPage() {
  const { username, repoName } = useParams()
  const [selectedFilter, setSelectedFilter] = useState('open')

  const issues: Issue[] = [
    {
      id: 1,
      title: 'Bug: NullPointerException in main method',
      number: 1,
      state: 'open',
      author: 'Vicky197709',
      comments: 3,
      createdAt: '2 days ago',
      labels: ['bug', 'priority-high'],
      assignees: ['Vicky197709']
    },
    {
      id: 2,
      title: 'Feature request: Add input validation',
      number: 2,
      state: 'open',
      author: 'Vicky197709',
      comments: 1,
      createdAt: '1 week ago',
      labels: ['enhancement'],
      assignees: []
    },
    {
      id: 3,
      title: 'Documentation: Update README with installation guide',
      number: 3,
      state: 'closed',
      author: 'Vicky197709',
      comments: 5,
      createdAt: '2 weeks ago',
      labels: ['documentation'],
      assignees: ['Vicky197709']
    }
  ]

  const openIssues = issues.filter(issue => issue.state === 'open')
  const closedIssues = issues.filter(issue => issue.state === 'closed')
  const displayIssues = selectedFilter === 'open' ? openIssues : closedIssues

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
            <span className="text-gray-900 dark:text-gray-100">Issues</span>
          </div>
        </div>
      </div>

      {/* Issues Header */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Issues</h1>
              <div className="flex space-x-4 text-sm">
                <button
                  onClick={() => setSelectedFilter('open')}
                  className={`flex items-center space-x-1 px-3 py-1 rounded ${
                    selectedFilter === 'open'
                      ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                >
                  <AlertCircle className="h-4 w-4" />
                  <span>{openIssues.length} Open</span>
                </button>
                <button
                  onClick={() => setSelectedFilter('closed')}
                  className={`flex items-center space-x-1 px-3 py-1 rounded ${
                    selectedFilter === 'closed'
                      ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                >
                  <GitPullRequest className="h-4 w-4" />
                  <span>{closedIssues.length} Closed</span>
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Search issues..."
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
                <span>New issue</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Issues List */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          {displayIssues.length === 0 ? (
            <div className="p-8 text-center">
              <AlertCircle className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                {selectedFilter === 'open' ? 'No open issues' : 'No closed issues'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {selectedFilter === 'open' 
                  ? 'There are no open issues in this repository.'
                  : 'There are no closed issues in this repository.'
                }
              </p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                <Plus className="h-4 w-4 inline mr-1" />
                New issue
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {displayIssues.map((issue) => (
                <div key={issue.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      {issue.state === 'open' ? (
                        <AlertCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <GitPullRequest className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <Link 
                          to={`/${username}/${repoName}/issues/${issue.number}`}
                          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                          {issue.title}
                        </Link>
                        {issue.labels.map((label, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>#{issue.number}</span>
                        <span>opened {issue.createdAt} by {issue.author}</span>
                        {issue.comments > 0 && (
                          <span>{issue.comments} comments</span>
                        )}
                        {issue.assignees.length > 0 && (
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{issue.assignees.length}</span>
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
