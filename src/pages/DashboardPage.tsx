import { Link } from 'react-router-dom'
import { Search, Bell, Plus, GitBranch, Star, Users, Package, AlertCircle, TrendingUp, GitPullRequest } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Search GitHub..."
                  className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                <Plus className="h-4 w-4 inline mr-1" />
                New
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex flex-col items-center space-y-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <Package className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">New repository</span>
                </button>
                <button className="flex flex-col items-center space-y-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">New organization</span>
                </button>
                <button className="flex flex-col items-center space-y-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <AlertCircle className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">New issue</span>
                </button>
                <button className="flex flex-col items-center space-y-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                  <GitPullRequest className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">New pull request</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent activity</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <GitBranch className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 dark:text-gray-100">
                      <span className="font-medium">You</span> pushed to{' '}
                      <Link to="/Vicky197709/poojava" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Vicky197709/poojava
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 dark:text-gray-100">
                      <span className="font-medium">You</span> starred{' '}
                      <Link to="/facebook/react" className="text-blue-600 dark:text-blue-400 hover:underline">
                        facebook/react
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">5 hours ago</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <GitPullRequest className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 dark:text-gray-100">
                      <span className="font-medium">You</span> opened pull request{' '}
                      <Link to="/Vicky197709/poojava/pull/1" className="text-blue-600 dark:text-blue-400 hover:underline">
                        #1: Add new feature
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">1 day ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Repositories */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Your repositories</h2>
                <Link to="/Vicky197709?tab=repositories" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  View all
                </Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <Link to="/Vicky197709/poojava" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                        poojava
                      </Link>
                      <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded">Public</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">tp sur la programmation orienté objet en java</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span>Java</span>
                      </div>
                      <span>Updated 2 days ago</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <Link to="/Vicky197709/TD_proc" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                        TD_proc
                      </Link>
                      <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded">Public</span>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span>Java</span>
                      </div>
                      <span>Updated 1 week ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Your stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">6</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Repositories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">0</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Stars</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">0</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">0</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Following</div>
                </div>
              </div>
            </div>

            {/* Trending Repositories */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Trending repositories</h2>
              </div>
              <div className="space-y-3">
                <div>
                  <Link to="/microsoft/vscode" className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    microsoft/vscode
                  </Link>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Visual Studio Code</div>
                </div>
                <div>
                  <Link to="/facebook/react" className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    facebook/react
                  </Link>
                  <div className="text-xs text-gray-500 dark:text-gray-400">A declarative, efficient, and flexible JavaScript library</div>
                </div>
                <div>
                  <Link to="/tensorflow/tensorflow" className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    tensorflow/tensorflow
                  </Link>
                  <div className="text-xs text-gray-500 dark:text-gray-400">An Open Source Machine Learning Framework</div>
                </div>
              </div>
            </div>

            {/* Recent Issues */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <AlertCircle className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Recent issues</h2>
              </div>
              <div className="space-y-3">
                <div>
                  <Link to="/Vicky197709/poojava/issues/1" className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    Bug: NullPointerException in main method
                  </Link>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Vicky197709/poojava • Opened 2 days ago</div>
                </div>
                <div>
                  <Link to="/Vicky197709/TD_proc/issues/1" className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    Feature request: Add validation
                  </Link>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Vicky197709/TD_proc • Opened 1 week ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
