import { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Mail, Lock, Palette, Globe, Bell, Shield, CreditCard, Archive, Key, Users, Package } from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'account', label: 'Account', icon: User },
    { id: 'emails', label: 'Emails', icon: Mail },
    { id: 'password', label: 'Password and authentication', icon: Lock },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'accessibility', label: 'Accessibility', icon: Globe },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing and plans', icon: CreditCard },
    { id: 'ssh-keys', label: 'SSH and GPG keys', icon: Key },
    { id: 'organizations', label: 'Organizations', icon: Users },
    { id: 'repositories', label: 'Repositories', icon: Package },
    { id: 'archive', label: 'Archive', icon: Archive }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/dashboard" className="text-blue-600 dark:text-blue-400 hover:underline">
              Dashboard
            </Link>
            <span className="text-gray-500 dark:text-gray-400">/</span>
            <span className="text-gray-900 dark:text-gray-100">Settings</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              {/* Profile Settings */}
              {activeTab === 'profile' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Profile</h2>
                  
                  <div className="space-y-6">
                    {/* Profile Picture */}
                    <div className="flex items-center space-x-4">
                      <div className="h-20 w-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                        V
                      </div>
                      <div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                          Update profile picture
                        </button>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          JPG, GIF or PNG. Max 1MB.
                        </p>
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Vicky ituze"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Bio */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Bio
                      </label>
                      <textarea
                        rows={3}
                        defaultValue="Backend developer && software engineer && blockchain developer"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Username */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Username
                      </label>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500 dark:text-gray-400">@</span>
                        <input
                          type="text"
                          defaultValue="Vicky197709"
                          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    {/* Social Links */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Social links
                      </label>
                      <div className="space-y-2">
                        <input
                          type="url"
                          placeholder="Website URL"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="Twitter username"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-between pt-4">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                        Update profile
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Account Settings */}
              {activeTab === 'account' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Account</h2>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                      <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                        Account deletion
                      </h3>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700">
                        Delete your account
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Email Settings */}
              {activeTab === 'emails' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Emails</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Add email address
                      </label>
                      <div className="flex space-x-2">
                        <input
                          type="email"
                          placeholder="you@example.com"
                          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500"
                        />
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                          Add
                        </button>
                      </div>
                    </div>

                    {/* Email List */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900 dark:text-gray-100">vicky@example.com</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Primary</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded">Verified</span>
                          <button className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Password Settings */}
              {activeTab === 'password' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Password and authentication</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Current password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        New password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Confirm new password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                      Update password
                    </button>
                  </div>
                </div>
              )}

              {/* Appearance Settings */}
              {activeTab === 'appearance' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Appearance</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Theme preference
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-3">
                          <input type="radio" name="theme" value="light" className="text-blue-600" />
                          <span className="text-gray-700 dark:text-gray-300">Light</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="radio" name="theme" value="dark" className="text-blue-600" />
                          <span className="text-gray-700 dark:text-gray-300">Dark</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="radio" name="theme" value="system" defaultChecked className="text-blue-600" />
                          <span className="text-gray-700 dark:text-gray-300">System preference</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Other tabs placeholder */}
              {activeTab !== 'profile' && activeTab !== 'account' && activeTab !== 'emails' && activeTab !== 'password' && activeTab !== 'appearance' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    {tabs.find(tab => tab.id === activeTab)?.label}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Settings for {tabs.find(tab => tab.id === activeTab)?.label.toLowerCase()} will be implemented here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
