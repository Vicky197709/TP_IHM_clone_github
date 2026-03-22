import { useState } from 'react'
import { Shield, AlertTriangle, CheckCircle, XCircle, Search, Filter, Eye, Lock, Users, Calendar, TrendingUp, FileText, Code } from 'lucide-react'

export default function SecurityPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const alerts = [
    {
      id: 1,
      severity: 'high',
      title: 'SQL Injection Vulnerability',
      description: 'Potential SQL injection in user authentication module',
      repository: 'web-app',
      file: 'src/auth.js',
      line: 45,
      status: 'open',
      detected: '2 hours ago'
    },
    {
      id: 2,
      severity: 'medium',
      title: 'Outdated Dependency',
      description: 'lodash version 4.17.15 has known security issues',
      repository: 'api-server',
      file: 'package.json',
      line: 15,
      status: 'fixed',
      detected: '1 day ago'
    },
    {
      id: 3,
      severity: 'low',
      title: 'Hardcoded Secret',
      description: 'Potential API key found in configuration file',
      repository: 'mobile-app',
      file: 'config.js',
      line: 8,
      status: 'open',
      detected: '3 days ago'
    }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Code Scanning',
      description: 'Find and fix vulnerabilities in your code',
      status: 'active',
      coverage: '95%'
    },
    {
      icon: Lock,
      title: 'Secret Scanning',
      description: 'Detect leaked secrets and credentials',
      status: 'active',
      coverage: '100%'
    },
    {
      icon: Eye,
      title: 'Dependency Review',
      description: 'Review changes in dependencies before merging',
      status: 'active',
      coverage: '88%'
    },
    {
      icon: Users,
      title: 'Security Advisories',
      description: 'Private vulnerability reporting and disclosure',
      status: 'active',
      coverage: '100%'
    }
  ]

  const stats = [
    {
      label: 'Security Alerts',
      value: '23',
      change: '+2',
      trend: 'up'
    },
    {
      label: 'Fixed Issues',
      value: '156',
      change: '+12',
      trend: 'up'
    },
    {
      label: 'Repositories Scanned',
      value: '42',
      change: '0',
      trend: 'stable'
    },
    {
      label: 'Dependencies Monitored',
      value: '1,247',
      change: '+45',
      trend: 'up'
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900'
      case 'medium': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900'
      case 'low': return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900'
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open': return <XCircle className="h-4 w-4 text-red-500" />
      case 'fixed': return <CheckCircle className="h-4 w-4 text-green-500" />
      default: return <AlertTriangle className="h-4 w-4 text-yellow-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Shield className="h-10 w-10 mr-3" />
              <h1 className="text-4xl font-bold">GitHub Security</h1>
            </div>
            <p className="text-xl mb-8 text-red-100">
              Application security where found means fixed
            </p>
            <p className="text-lg mb-12 text-red-200 max-w-2xl">
              Secure your code as you build. GitHub's security features help you find 
              and fix vulnerabilities before they become problems.
            </p>
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Enable security features
              </button>
              <button className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition-colors">
                View security settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {['overview', 'alerts', 'features', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 text-sm font-medium capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-red-500 text-red-600 dark:text-red-400'
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
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</span>
                    <div className={`flex items-center space-x-1 text-sm ${
                      stat.trend === 'up' ? 'text-green-600 dark:text-green-400' :
                      stat.trend === 'down' ? 'text-red-600 dark:text-red-400' :
                      'text-gray-600 dark:text-gray-400'
                    }`}>
                      <TrendingUp className="h-4 w-4" />
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Security Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
                Security Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                              {feature.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              feature.status === 'active' 
                                ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                            }`}>
                              {feature.status}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">
                            {feature.description}
                          </p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">Coverage</span>
                            <span className="font-medium text-gray-900 dark:text-gray-100">
                              {feature.coverage}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Recent Security Activity</h3>
              <div className="space-y-4">
                {alerts.slice(0, 3).map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(alert.status)}
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">
                          {alert.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {alert.repository} • {alert.file}:{alert.line}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {alert.detected}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Alerts Tab */}
        {activeTab === 'alerts' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Security Alerts</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search alerts..."
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <Filter className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        {getStatusIcon(alert.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                            {alert.title}
                          </h3>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                            {alert.severity}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          {alert.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <FileText className="h-4 w-4" />
                            <span>{alert.repository}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Code className="h-4 w-4" />
                            <span>{alert.file}:{alert.line}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{alert.detected}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        View details
                      </button>
                      <button className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700">
                        Fix
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Security Features Configuration</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {feature.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          feature.status === 'active' 
                            ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                        }`}>
                          {feature.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Coverage: {feature.coverage}
                      </span>
                      <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        Configure
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Security Settings</h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">Automatic security updates</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Automatically enable Dependabot security updates for new repositories
                    </p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                    <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">Code scanning alerts</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Enable code scanning for all repositories
                    </p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                    <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">Secret scanning</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Scan for leaked secrets in all repositories
                    </p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
                    <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                  Save security settings
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
