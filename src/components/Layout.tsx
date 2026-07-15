import { type ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutDashboard, 
  BarChart3, 
  Settings, 
  Sun, 
  Moon, 
  Menu, 
  X,
  Bell,
  Search,
  ChevronDown
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

interface LayoutProps {
  children: ReactNode
}

const menuItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/analytics', icon: BarChart3, label: 'Analytics' },
  { path: '/settings', icon: Settings, label: 'Settings' },
]

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 256 : 80 }}
        className="hidden lg:flex flex-col fixed h-full z-20"
        style={{ 
          backgroundColor: 'var(--bg-secondary)',
          borderRight: '1px solid var(--border-color)'
        }}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4 h-16">
          <AnimatePresence mode="wait">
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                  Dashboard
                </span>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg mb-2 transition-all duration-200 ${
                  isActive ? 'bg-gradient-to-r from-primary-400 to-primary-600 text-white shadow-lg' : ''
                }`}
                style={!isActive ? { color: 'var(--text-secondary)' } : {}}
              >
                <item.icon size={20} />
                <AnimatePresence>
                  {sidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      className="whitespace-nowrap overflow-hidden"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            )
          })}
        </nav>

        {/* Theme Toggle */}
        <div className="p-3 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 w-full px-3 py-3 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            <AnimatePresence>
              {sidebarOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed left-0 top-0 h-full w-[280px] z-40 lg:hidden"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                borderRight: '1px solid var(--border-color)'
              }}
            >
              <div className="flex items-center justify-between p-4 h-16">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">D</span>
                  </div>
                  <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                    Dashboard
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="px-3 py-4">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-3 py-3 rounded-lg mb-2 transition-all ${
                        isActive ? 'bg-gradient-to-r from-primary-400 to-primary-600 text-white' : ''
                      }`}
                      style={!isActive ? { color: 'var(--text-secondary)' } : {}}
                    >
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </nav>

              <div className="absolute bottom-0 left-0 right-0 p-3 border-t" style={{ borderColor: 'var(--border-color)' }}>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 w-full px-3 py-3 rounded-lg"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 lg:ml-[80px]">
        {/* Header */}
        <header 
          className="sticky top-0 z-10 h-16 flex items-center justify-between px-4 lg:px-6"
          style={{ 
            backgroundColor: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-color)'
          }}
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Menu size={20} />
            </button>
            <div className="relative hidden sm:block">
              <Search 
                size={18} 
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: 'var(--text-secondary)' }}
              />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary-400"
                style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)'
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              className="relative p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full" />
            </button>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-white font-medium text-sm">M</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Mahshid</p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Frontend Developer</p>
              </div>
              <ChevronDown size={16} style={{ color: 'var(--text-secondary)' }} />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-6">
          {children}
        </main>

        {/* Developer Badge */}
        <footer className="p-4 text-center text-xs text-gray-400 dark:text-gray-500">
          ساخته شده با ❤️ توسط{' '}
          <a href="https://github.com/M-Bazrafshan-viweb" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
            مهشید بذرافشان
          </a>
        </footer>
      </div>
    </div>
  )
}
