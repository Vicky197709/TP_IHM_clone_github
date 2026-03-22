import { Link } from 'react-router-dom'
import { User, Settings, LogOut, CreditCard, Archive, ChevronDown, ShoppingBag } from 'lucide-react'

export default function UserDropdown() {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 p-1 hover:bg-gray-800 dark:hover:bg-gray-700 rounded-lg">
        <div className="h-8 w-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
          V
        </div>
        <ChevronDown className="h-3 w-3 text-gray-300 dark:text-gray-400" />
      </button>
      
      <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {/* Signed in as */}
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
              V
            </div>
            <div>
              <div className="font-medium text-gray-900 dark:text-gray-100">Vicky ituze</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Vicky197709</div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          <Link 
            to="/Vicky197709" 
            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <User className="h-4 w-4" />
            <span>Your profile</span>
          </Link>
          
          <Link 
            to="/dashboard" 
            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div className="h-4 w-4 bg-gray-600 rounded"></div>
            <span>Your repositories</span>
          </Link>
          
          <Link 
            to="/codespaces" 
            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div className="h-4 w-4 bg-blue-600 rounded"></div>
            <span>Your codespaces</span>
          </Link>
          
          <Link 
            to="/organizations" 
            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div className="h-4 w-4 bg-purple-600 rounded"></div>
            <span>Your organizations</span>
          </Link>
          
          <Link 
            to="/enterprises" 
            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div className="h-4 w-4 bg-green-600 rounded"></div>
            <span>Your enterprises</span>
          </Link>
          
          <Link 
            to="/projects" 
            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div className="h-4 w-4 bg-orange-600 rounded"></div>
            <span>Your projects</span>
          </Link>
          
          <Link 
            to="/stars" 
            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div className="h-4 w-4 bg-yellow-600 rounded"></div>
            <span>Your stars</span>
          </Link>
          
          <Link 
            to="/sponsors" 
            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div className="h-4 w-4 bg-pink-600 rounded"></div>
            <span>Your sponsors</span>
          </Link>
          
          <Link 
            to="/marketplace" 
            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Marketplace</span>
          </Link>
          
          <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
          
          <Link 
            to="/settings/profile" 
            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Link>
          
          <Link 
            to="/billing" 
            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <CreditCard className="h-4 w-4" />
            <span>Billing & plans</span>
          </Link>
          
          <Link 
            to="/archive" 
            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Archive className="h-4 w-4" />
            <span>Archived items</span>
          </Link>
          
          <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
          
          <button className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left">
            <LogOut className="h-4 w-4" />
            <span>Sign out</span>
          </button>
        </div>
      </div>
    </div>
  )
}
