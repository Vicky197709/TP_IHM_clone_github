import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import RepositoryPage from './pages/RepositoryPage'
import DashboardPage from './pages/DashboardPage'
import IssuesPage from './pages/IssuesPage'
import PullRequestsPage from './pages/PullRequestsPage'
import SettingsPage from './pages/SettingsPage'
import OrganizationPage from './pages/OrganizationPage'
import MarketplacePage from './pages/MarketplacePage'
import CopilotPage from './pages/CopilotPage'
import ActionsPage from './pages/ActionsPage'
import CodespacesPage from './pages/CodespacesPage'
import PackagesPage from './pages/PackagesPage'
import SecurityPage from './pages/SecurityPage'
import CodeSearchPage from './pages/CodeSearchPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/settings/:tab" element={<SettingsPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/organizations/:orgName" element={<OrganizationPage />} />
          <Route path="/features/copilot" element={<CopilotPage />} />
          <Route path="/features/actions" element={<ActionsPage />} />
          <Route path="/features/codespaces" element={<CodespacesPage />} />
          <Route path="/features/packages" element={<PackagesPage />} />
          <Route path="/features/security" element={<SecurityPage />} />
          <Route path="/features/code-search" element={<CodeSearchPage />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/:username/:repoName" element={<RepositoryPage />} />
          <Route path="/:username/:repoName/issues" element={<IssuesPage />} />
          <Route path="/:username/:repoName/pulls" element={<PullRequestsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
