import { useState } from 'react'
import { Zap, Code, Terminal, CheckCircle, ArrowRight, Play, Shield, Cpu, Brain } from 'lucide-react'

export default function CopilotPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: Code,
      title: 'Code Completion',
      description: 'Get whole-line or full-function suggestions right in your editor',
      demo: 'function calculateTotal(items) {\n  return items.reduce((sum, item) => sum + item.price, 0)\n}'
    },
    {
      icon: Brain,
      title: 'Context Awareness',
      description: 'Understands your codebase and provides contextually relevant suggestions',
      demo: '// Copilot understands your project structure\nimport { UserService } from \'./services/user.service\''
    },
    {
      icon: Terminal,
      title: 'CLI Integration',
      description: 'Works in your terminal with GitHub CLI',
      demo: '$ gh copilot suggest "Create a REST API endpoint"'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your code stays private and secure',
      demo: '✅ Enterprise-grade security\n✅ No code storage\n✅ GDPR compliant'
    }
  ]

  const useCases = [
    {
      title: 'Frontend Development',
      description: 'React, Vue, Angular components and hooks',
      language: 'JavaScript',
      example: 'const UserProfile = ({ user }) => {\n  return (\n    <div className="profile">\n      <Avatar src={user.avatar} />\n      <h2>{user.name}</h2>\n    </div>\n  )\n}'
    },
    {
      title: 'Backend Development',
      description: 'API endpoints, database queries, authentication',
      language: 'Python',
      example: '@app.route("/api/users", methods=["GET"])\ndef get_users():\n    users = User.query.all()\n    return jsonify([user.to_dict() for user in users])'
    },
    {
      title: 'Data Science',
      description: 'Data analysis, machine learning, visualization',
      language: 'Python',
      example: 'import pandas as pd\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv("data.csv")\ndf.groupby("category").mean().plot(kind="bar")'
    },
    {
      title: 'Mobile Development',
      description: 'React Native, Flutter, Swift, Kotlin',
      language: 'TypeScript',
      example: 'const HomeScreen = ({ navigation }) => {\n  const [data, setData] = useState(null)\n  \n  useEffect(() => {\n    fetchData().then(setData)\n  }, [])\n  \n  return <DataList data={data} />\n}'
    }
  ]

  const pricing = [
    {
      name: 'Individual',
      price: '$10',
      period: '/month',
      features: [
        'Code completion in IDE',
        'CLI integration',
        'Multi-language support',
        'Privacy protection'
      ],
      cta: 'Get started',
      popular: false
    },
    {
      name: 'Business',
      price: '$19',
      period: '/month per user',
      features: [
        'Everything in Individual',
        'Corporate policy management',
        'License management',
        'Priority support',
        'Usage analytics'
      ],
      cta: 'Start trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Everything in Business',
        'Advanced security',
        'Compliance reporting',
        'Dedicated support',
        'Custom models'
      ],
      cta: 'Contact sales',
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Zap className="h-12 w-12 mr-3" />
              <h1 className="text-5xl font-bold">GitHub Copilot</h1>
            </div>
            <p className="text-2xl mb-8 text-blue-100">
              Your AI pair programmer. Write better code with AI.
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto">
              Get suggestions for whole lines of code or entire functions right inside your editor. 
              Copilot understands your codebase and provides contextually relevant suggestions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start free trial
              </button>
              <button className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                <Play className="inline h-5 w-5 mr-2" />
                Watch demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {['overview', 'features', 'use-cases', 'pricing'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 text-sm font-medium capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {tab.replace('-', ' ')}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1.2M+</div>
                <div className="text-gray-600 dark:text-gray-400">Developers using Copilot</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">55%</div>
                <div className="text-gray-600 dark:text-gray-400">Faster coding</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">40%</div>
                <div className="text-gray-600 dark:text-gray-400">More code accepted</div>
              </div>
            </div>

            {/* How it works */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
                How GitHub Copilot Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Powered by OpenAI Codex, trained on billions of lines of code
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Context-Aware</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Understands your codebase and provides relevant suggestions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Privacy-First</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your code stays private and secure with enterprise-grade protection
                  </p>
                </div>
              </div>
            </div>

            {/* Supported Languages */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
                Supported Languages & Frameworks
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go', 'Ruby', 'PHP', 'Swift', 'Kotlin', 'Rust', 'C++'].map((lang) => (
                  <div key={lang} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center">
                    <div className="font-medium text-gray-900 dark:text-gray-100">{lang}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {feature.description}
                        </p>
                        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                          <pre>{feature.demo}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Use Cases Tab */}
        {activeTab === 'use-cases' && (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
              Use Cases & Examples
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-2">
                      {useCase.language}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {useCase.description}
                    </p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                    <pre>{useCase.example}</pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white dark:bg-gray-800 rounded-lg border ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200 dark:border-gray-700'} p-8 relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {plan.price}
                      <span className="text-lg text-gray-500 dark:text-gray-400 font-normal">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}>
                    {plan.cta}
                    <ArrowRight className="inline h-4 w-4 ml-2" />
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
