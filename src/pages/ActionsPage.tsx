import { useState } from 'react'
import { Play, Pause, RotateCcw, Clock, GitBranch, Zap, Shield, Package, Code, Terminal, ArrowRight, Filter, Search, Plus } from 'lucide-react'

export default function ActionsPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const workflows = [
    {
      id: 1,
      name: 'CI/CD Pipeline',
      description: 'Build, test, and deploy application',
      status: 'success',
      lastRun: '2 hours ago',
      trigger: 'push to main',
      duration: '3m 45s'
    },
    {
      id: 2,
      name: 'Security Scan',
      description: 'Run security vulnerability scans',
      status: 'running',
      lastRun: 'Running now',
      trigger: 'schedule',
      duration: '1m 20s'
    },
    {
      id: 3,
      name: 'Code Quality',
      description: 'Lint and format code',
      status: 'failed',
      lastRun: '5 hours ago',
      trigger: 'pull request',
      duration: '2m 10s'
    },
    {
      id: 4,
      name: 'Docker Build',
      description: 'Build and push Docker images',
      status: 'success',
      lastRun: '1 day ago',
      trigger: 'manual',
      duration: '5m 30s'
    }
  ]

  const marketplaceActions = [
    {
      name: 'GitHub Actions',
      description: 'Official GitHub Actions',
      category: 'Official',
      downloads: '10M+',
      verified: true
    },
    {
      name: 'Docker Build',
      description: 'Build and push Docker images',
      category: 'Build',
      downloads: '5M+',
      verified: true
    },
    {
      name: 'AWS Deploy',
      description: 'Deploy to AWS services',
      category: 'Deploy',
      downloads: '2M+',
      verified: false
    },
    {
      name: 'Slack Notify',
      description: 'Send notifications to Slack',
      category: 'Notification',
      downloads: '1M+',
      verified: false
    }
  ]

  const templates = [
    {
      name: 'Node.js CI',
      description: 'Continuous integration for Node.js projects',
      language: 'JavaScript',
      icon: Code
    },
    {
      name: 'Python Package',
      description: 'Build and test Python packages',
      language: 'Python',
      icon: Terminal
    },
    {
      name: 'Docker Container',
      description: 'Build and deploy Docker containers',
      language: 'Dockerfile',
      icon: Package
    },
    {
      name: 'Static Site',
      description: 'Deploy static websites',
      language: 'HTML',
      icon: Code
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Zap className="h-10 w-10 mr-3" />
              <h1 className="text-4xl font-bold">GitHub Actions</h1>
            </div>
            <p className="text-xl mb-8 text-blue-100">
              Automate your workflow from idea to production
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-2xl">
              GitHub Actions makes it easy to automate all your software workflows, 
              from CI/CD to issue triage and more. Build, test, and deploy your code 
              right from GitHub.
            </p>
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get started
              </button>
              <button className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Browse marketplace
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {['overview', 'workflows', 'marketplace', 'templates'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 text-sm font-medium capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
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
                Why GitHub Actions?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast & Secure</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Run jobs in parallel, Linux, macOS, and Windows runners
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Enterprise Ready</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Built-in security, compliance, and governance features
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Ecosystem</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thousands of pre-built actions in the marketplace
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">70M+</div>
                <div className="text-gray-600 dark:text-gray-400">Actions runs per month</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">10K+</div>
                <div className="text-gray-600 dark:text-gray-400">Actions in marketplace</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">4M+</div>
                <div className="text-gray-600 dark:text-gray-400">Active repositories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-400">Uptime SLA</div>
              </div>
            </div>

            {/* Quick Start */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Quick Start Example</h3>
              <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm text-gray-300">
                <pre>{`name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
      - name: Build
        run: npm run build`}</pre>
              </div>
            </div>
          </div>
        )}

        {/* Workflows Tab */}
        {activeTab === 'workflows' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Your Workflows</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search workflows..."
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <Filter className="h-4 w-4" />
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  <Plus className="h-4 w-4 inline mr-2" />
                  New workflow
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {workflows.map((workflow) => (
                <div key={workflow.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        workflow.status === 'success' ? 'bg-green-500' :
                        workflow.status === 'running' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}></div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {workflow.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {workflow.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{workflow.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <GitBranch className="h-4 w-4" />
                        <span>{workflow.trigger}</span>
                      </div>
                      <span>{workflow.lastRun}</span>
                      <div className="flex items-center space-x-2">
                        {workflow.status === 'running' ? (
                          <><Pause className="h-4 w-4" /><span>Pause</span></>
                        ) : (
                          <><Play className="h-4 w-4" /><span>Run</span></>
                        )}
                        <RotateCcw className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Marketplace Tab */}
        {activeTab === 'marketplace' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Actions Marketplace</h2>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                  <option>All categories</option>
                  <option>Build</option>
                  <option>Deploy</option>
                  <option>Test</option>
                  <option>Notification</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketplaceActions.map((action, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {action.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {action.category}
                      </p>
                    </div>
                    {action.verified && (
                      <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-xs">
                        ✓ Verified
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {action.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {action.downloads} downloads
                    </span>
                    <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                      Use
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Workflow Templates</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {templates.map((template, index) => {
                const Icon = template.icon
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {template.name}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {template.language}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {template.description}
                    </p>
                    <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      Use template
                      <ArrowRight className="inline h-4 w-4 ml-2" />
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
