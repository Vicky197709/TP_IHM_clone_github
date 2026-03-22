import { useState } from 'react'
import { Monitor, Play, Pause, Settings, Zap, Shield, Globe, Code, Clock, Package, Plus, Search } from 'lucide-react'

export default function CodespacesPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const codespaces = [
    {
      id: 1,
      name: 'web-app-dev',
      repository: 'my-org/web-app',
      status: 'running',
      machine: '2 cores, 8GB RAM',
      lastUsed: '2 hours ago',
      location: 'West Europe'
    },
    {
      id: 2,
      name: 'api-testing',
      repository: 'my-org/api',
      status: 'stopped',
      machine: '4 cores, 16GB RAM',
      lastUsed: '1 day ago',
      location: 'East US'
    },
    {
      id: 3,
      name: 'mobile-dev',
      repository: 'my-org/mobile-app',
      status: 'running',
      machine: '2 cores, 8GB RAM',
      lastUsed: '5 minutes ago',
      location: 'West Europe'
    }
  ]

  const machines = [
    {
      name: 'Standard',
      specs: '2 cores, 4GB RAM, 32GB storage',
      price: '$0.18/hour',
      recommended: false
    },
    {
      name: 'Premium',
      specs: '4 cores, 8GB RAM, 64GB storage',
      price: '$0.36/hour',
      recommended: true
    },
    {
      name: 'Advanced',
      specs: '8 cores, 16GB RAM, 128GB storage',
      price: '$0.72/hour',
      recommended: false
    },
    {
      name: 'Enterprise',
      specs: '16 cores, 32GB RAM, 256GB storage',
      price: '$1.44/hour',
      recommended: false
    }
  ]

  const devConfigs = [
    {
      name: 'Node.js & React',
      description: 'Full-stack JavaScript development',
      languages: ['JavaScript', 'TypeScript'],
      tools: ['Node.js', 'npm', 'React', 'VS Code']
    },
    {
      name: 'Python & Django',
      description: 'Python web development',
      languages: ['Python'],
      tools: ['Python', 'pip', 'Django', 'VS Code']
    },
    {
      name: 'Go Microservices',
      description: 'Go microservice development',
      languages: ['Go'],
      tools: ['Go', 'Docker', 'Kubernetes', 'VS Code']
    },
    {
      name: 'Java Spring',
      description: 'Java enterprise development',
      languages: ['Java'],
      tools: ['Java', 'Maven', 'Spring Boot', 'VS Code']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Monitor className="h-10 w-10 mr-3" />
              <h1 className="text-4xl font-bold">GitHub Codespaces</h1>
            </div>
            <p className="text-xl mb-8 text-blue-100">
              Instant, cloud-powered development environments
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-2xl">
              Spin up fully configured dev environments in seconds with the full power 
              of your favorite editor. No local setup required.
            </p>
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start coding
              </button>
              <button className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {['overview', 'codespaces', 'machines', 'configs'].map((tab) => (
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
                Why Codespaces?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Instant Setup</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Start coding in seconds with pre-configured environments
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Cloud Native</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Access from anywhere with consistent development experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Enterprise Ready</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Secure, compliant, and scalable for teams of any size
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10M+</div>
                <div className="text-gray-600 dark:text-gray-400">Codespaces created</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50K+</div>
                <div className="text-gray-600 dark:text-gray-400">Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">&lt;5s</div>
                <div className="text-gray-600 dark:text-gray-400">Start time</div>
              </div>
            </div>

            {/* Supported Editors */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
                Supported Editors
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['VS Code', 'JetBrains', 'Vim', 'Emacs'].map((editor) => (
                  <div key={editor} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">{editor}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Codespaces Tab */}
        {activeTab === 'codespaces' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Your Codespaces</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search codespaces..."
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Plus className="h-4 w-4 inline mr-2" />
                  New codespace
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {codespaces.map((codespace) => (
                <div key={codespace.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        codespace.status === 'running' ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {codespace.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {codespace.repository}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Package className="h-4 w-4" />
                        <span>{codespace.machine}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4" />
                        <span>{codespace.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{codespace.lastUsed}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {codespace.status === 'running' ? (
                          <><Pause className="h-4 w-4" /><span>Stop</span></>
                        ) : (
                          <><Play className="h-4 w-4" /><span>Start</span></>
                        )}
                        <Settings className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Machines Tab */}
        {activeTab === 'machines' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Machine Types</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {machines.map((machine, index) => (
                <div key={index} className={`bg-white dark:bg-gray-800 rounded-lg border ${machine.recommended ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200 dark:border-gray-700'} p-6 relative`}>
                  {machine.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Recommended
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {machine.name}
                    </h3>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {machine.price}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {machine.specs}
                    </p>
                  </div>
                  <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    machine.recommended 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}>
                    Select machine
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dev Configs Tab */}
        {activeTab === 'configs' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Development Configurations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {devConfigs.map((config, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {config.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {config.description}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {config.languages.map((lang) => (
                        <span key={lang} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Pre-installed Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {config.tools.map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Use configuration
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
