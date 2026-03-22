import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, Star, GitBranch, Lock, Mail, MapPin, Link2, Calendar, Settings } from 'lucide-react'

export default function OrganizationPage() {
  const [activeTab, setActiveTab] = useState('repositories')

  const organization = {
    name: 'Acme Corp',
    description: 'Building the future of technology',
    avatar: 'A',
    location: 'San Francisco, CA',
    email: 'contact@acme.com',
    website: 'https://acme.com',
    members: 42,
    repositories: 15,
    createdAt: 'January 2020',
    isVerified: true
  }

  const repositories = [
    {
      id: 1,
      name: 'frontend-app',
      description: 'Modern React application with TypeScript',
      language: 'TypeScript',
      stars: 234,
      forks: 45,
      updatedAt: '2 days ago',
      isPrivate: false
    },
    {
      id: 2,
      name: 'backend-api',
      description: 'RESTful API built with Node.js and Express',
      language: 'JavaScript',
      stars: 189,
      forks: 32,
      updatedAt: '1 week ago',
      isPrivate: false
    },
    {
      id: 3,
      name: 'mobile-app',
      description: 'React Native mobile application',
      language: 'React Native',
      stars: 156,
      forks: 28,
      updatedAt: '3 days ago',
      isPrivate: true
    }
  ]

  const members = [
    {
      id: 1,
      username: 'john_doe',
      name: 'John Doe',
      role: 'Owner',
      avatar: 'J'
    },
    {
      id: 2,
      username: 'jane_smith',
      name: 'Jane Smith',
      role: 'Admin',
      avatar: 'S'
    },
    {
      id: 3,
      username: 'bob_wilson',
      name: 'Bob Wilson',
      role: 'Member',
      avatar: 'B'
    }
  ]

  const tabs = [
    { id: 'repositories', label: 'Repositories', count: organization.repositories },
    { id: 'teams', label: 'Teams', count: 5 },
    { id: 'people', label: 'People', count: organization.members },
    { id: 'projects', label: 'Projects', count: 3 },
    { id: 'packages', label: 'Packages', count: 8 }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Organization Header */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="h-20 w-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                {organization.avatar}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {organization.name}
                  </h1>
                  {organization.isVerified && (
                    <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium">
                      Verified
                    </div>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {organization.description}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                Follow
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
                Sponsor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Organization Stats */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{organization.members} members</span>
            </div>
            <div className="flex items-center space-x-1">
              <GitBranch className="h-4 w-4" />
              <span>{organization.repositories} repositories</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{organization.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Link2 className="h-4 w-4" />
              <a href={organization.website} className="text-blue-600 dark:text-blue-400 hover:underline">
                {organization.website}
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${organization.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {organization.email}
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Created {organization.createdAt}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 text-sm font-medium whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <span>{tab.label}</span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Repositories Tab */}
        {activeTab === 'repositories' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Repositories</h2>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  Type
                </button>
                <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  Language
                </button>
                <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  Sort
                </button>
              </div>
            </div>

            {repositories.map((repo) => (
              <div key={repo.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      {repo.isPrivate && <Lock className="h-4 w-4 text-gray-500 dark:text-gray-400" />}
                      <Link 
                        to={`/${organization.name.toLowerCase()}/${repo.name}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        {repo.name}
                      </Link>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      {repo.description}
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center space-x-1">
                        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                        <span>{repo.language}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>{repo.stars}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <GitBranch className="h-4 w-4" />
                        <span>{repo.forks}</span>
                      </span>
                      <span>Updated {repo.updatedAt}</span>
                    </div>
                  </div>
                  <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <Star className="h-4 w-4 inline mr-1" />
                    Star
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* People Tab */}
        {activeTab === 'people' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">People</h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                Invite member
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              {members.map((member, index) => (
                <div key={member.id} className={`flex items-center justify-between p-4 ${index !== members.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center text-sm font-bold text-white">
                      {member.avatar}
                    </div>
                    <div>
                      <Link 
                        to={`/${member.username}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        {member.name}
                      </Link>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">@{member.username}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-sm">
                      {member.role}
                    </span>
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                      <Settings className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other tabs placeholder */}
        {activeTab !== 'repositories' && activeTab !== 'people' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              {tabs.find(tab => tab.id === activeTab)?.label} content will be implemented here.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
