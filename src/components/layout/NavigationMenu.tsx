import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

export default function NavigationMenu() {
  return (
    <div className="hidden md:flex items-center space-x-6">
      {/* Product Dropdown */}
      <div className="relative group">
        <button className="flex items-center text-sm text-gray-300 dark:text-gray-300 hover:text-gray-100 dark:hover:text-gray-100">
          Product
          <ChevronDown className="ml-1 h-3 w-3" />
        </button>
        
        <div className="absolute left-0 mt-2 w-screen max-w-4xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="grid grid-cols-4 gap-8 p-8">
            {/* AI Code Creation */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">AI CODE CREATION</h3>
              <div className="space-y-3">
                <Link to="/features/copilot" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">GitHub Copilot</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Write better code with AI</div>
                </Link>
                <Link to="/features/spark" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">GitHub Spark</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Build and deploy intelligent apps</div>
                </Link>
                <Link to="/features/models" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">GitHub Models</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Manage and compare prompts</div>
                </Link>
                <Link to="/mcp" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">MCP Registry<span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">New</span></div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Integrate external tools</div>
                </Link>
              </div>
            </div>

            {/* Developer Workflows */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">DEVELOPER WORKFLOWS</h3>
              <div className="space-y-3">
                <Link to="/features/actions" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Actions</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Automate any workflow</div>
                </Link>
                <Link to="/features/codespaces" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Codespaces</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Instant dev environments</div>
                </Link>
                <Link to="/features/issues" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Issues</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Plan and track work</div>
                </Link>
                <Link to="/features/code-review" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Code Review</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Manage code changes</div>
                </Link>
              </div>
            </div>

            {/* Application Security */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">APPLICATION SECURITY</h3>
              <div className="space-y-3">
                <Link to="/security/advanced-security" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">GitHub Advanced Security</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Find and fix vulnerabilities</div>
                </Link>
                <Link to="/security/advanced-security/code-security" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Code security</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Secure your code as you build</div>
                </Link>
                <Link to="/security/advanced-security/secret-protection" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Secret protection</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Stop leaks before they start</div>
                </Link>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">EXPLORE</h3>
              <div className="space-y-3">
                <Link to="/why-github" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Why GitHub</div>
                </Link>
                <Link to="/docs" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Documentation</div>
                </Link>
                <Link to="/blog" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Blog</div>
                </Link>
                <Link to="/changelog" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Changelog</div>
                </Link>
                <Link to="/marketplace" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Marketplace</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Dropdown */}
      <div className="relative group">
        <button className="flex items-center text-sm text-gray-300 dark:text-gray-300 hover:text-gray-100 dark:hover:text-gray-100">
          Solutions
          <ChevronDown className="ml-1 h-3 w-3" />
        </button>
        
        <div className="absolute left-0 mt-2 w-screen max-w-4xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="grid grid-cols-4 gap-8 p-8">
            {/* By Company Size */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">BY COMPANY SIZE</h3>
              <div className="space-y-3">
                <Link to="/enterprise" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Enterprises</div>
                </Link>
                <Link to="/team" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Small and medium teams</div>
                </Link>
                <Link to="/enterprise/startups" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Startups</div>
                </Link>
                <Link to="/solutions/industry/nonprofits" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Nonprofits</div>
                </Link>
              </div>
            </div>

            {/* By Use Case */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">BY USE CASE</h3>
              <div className="space-y-3">
                <Link to="/solutions/use-case/app-modernization" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">App Modernization</div>
                </Link>
                <Link to="/solutions/use-case/devsecops" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">DevSecOps</div>
                </Link>
                <Link to="/solutions/use-case/devops" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">DevOps</div>
                </Link>
                <Link to="/solutions/use-case/ci-cd" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">CI/CD</div>
                </Link>
              </div>
            </div>

            {/* By Industry */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">BY INDUSTRY</h3>
              <div className="space-y-3">
                <Link to="/solutions/industry/healthcare" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Healthcare</div>
                </Link>
                <Link to="/solutions/industry/financial-services" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Financial services</div>
                </Link>
                <Link to="/solutions/industry/manufacturing" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Manufacturing</div>
                </Link>
                <Link to="/solutions/industry/government" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Government</div>
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">RESOURCES</h3>
              <div className="space-y-3">
                <Link to="/resources/articles" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Explore by topic</div>
                </Link>
                <Link to="/resources/events" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Explore by type</div>
                </Link>
                <Link to="/skills" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">GitHub Skills</div>
                </Link>
                <Link to="/docs" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Documentation</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Open Source Dropdown */}
      <div className="relative group">
        <button className="flex items-center text-sm text-gray-300 dark:text-gray-300 hover:text-gray-100 dark:hover:text-gray-100">
          Open Source
          <ChevronDown className="ml-1 h-3 w-3" />
        </button>
        
        <div className="absolute left-0 mt-2 w-screen max-w-4xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="grid grid-cols-4 gap-8 p-8">
            {/* Community */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">COMMUNITY</h3>
              <div className="space-y-3">
                <Link to="/sponsors" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">GitHub Sponsors</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Fund open source developers</div>
                </Link>
                <Link to="/securitylab" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Security Lab</div>
                </Link>
                <Link to="/maintainers" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Maintainer Community</div>
                </Link>
                <Link to="/accelerator" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Accelerator</div>
                </Link>
                <Link to="/stars" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">GitHub Stars</div>
                </Link>
                <Link to="/archiveprogram" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Archive Program</div>
                </Link>
              </div>
            </div>

            {/* Repositories */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">REPOSITORIES</h3>
              <div className="space-y-3">
                <Link to="/topics" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Topics</div>
                </Link>
                <Link to="/trending" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Trending</div>
                </Link>
                <Link to="/collections" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Collections</div>
                </Link>
              </div>
            </div>

            {/* Programs */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">PROGRAMS</h3>
              <div className="space-y-3">
                <Link to="/sponsors" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">GitHub Sponsors</div>
                </Link>
                <Link to="/securitylab" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Security Lab</div>
                </Link>
                <Link to="/maintainers" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Maintainer Community</div>
                </Link>
                <Link to="/accelerator" className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Accelerator</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <Link to="/pricing" className="text-sm text-gray-300 dark:text-gray-300 hover:text-gray-100 dark:hover:text-gray-100">
        Pricing
      </Link>
    </div>
  )
}
