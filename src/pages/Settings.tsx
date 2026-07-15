import { motion } from 'framer-motion'
import { User, Bell, Shield, Palette, Save } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import toast from 'react-hot-toast'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Settings() {
  const { isDark, toggleTheme } = useTheme()

  const handleSave = () => {
    toast.success('Settings saved successfully!')
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6 max-w-3xl mx-auto"
    >
      <motion.div variants={item}>
        <h1 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Settings
        </h1>
        <p className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
          Manage your account settings and preferences
        </p>
      </motion.div>

      {/* Profile Section */}
      <motion.div
        variants={item}
        className="p-4 sm:p-6 rounded-xl"
      style={{ 
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-color)'
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <User size={20} className="text-primary-500" />
          <h2 className="text-base sm:text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
          Profile
        </h2>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                First Name
              </label>
              <input
                type="text"
                defaultValue="Mahshid"
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)'
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                Last Name
              </label>
              <input
                type="text"
                defaultValue="Bazrafshan"
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)'
                }}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
              Email
            </label>
            <input
              type="email"
              defaultValue="miss.mahshid.miss@gmail.com"
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
              style={{ 
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)'
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Appearance Section */}
      <motion.div
        variants={item}
        className="p-4 sm:p-6 rounded-xl"
      style={{ 
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-color)'
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <Palette size={20} className="text-primary-600" />
          <h2 className="text-base sm:text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
          Appearance
        </h2>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-medium text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>Dark Mode</p>
            <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
              Toggle between light and dark themes
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isDark ? 'bg-primary-500' : 'bg-primary-200'
            }`}
          >
            <motion.div
              animate={{ x: isDark ? 28 : 2 }}
              className="absolute top-1 w-5 h-5 bg-white rounded-full shadow"
            />
          </button>
        </div>
      </motion.div>

      {/* Notifications Section */}
      <motion.div
        variants={item}
        className="p-4 sm:p-6 rounded-xl"
      style={{ 
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-color)'
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <Bell size={20} className="text-primary-400" />
          <h2 className="text-base sm:text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
          Notifications
        </h2>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Email notifications', description: 'Receive email for new orders', defaultChecked: true },
            { label: 'Push notifications', description: 'Receive push notifications', defaultChecked: false },
            { label: 'Weekly reports', description: 'Get weekly analytics reports', defaultChecked: true },
          ].map (toggleItem => (
            <div key={toggleItem.label} className="flex items-center justify-between">
              <div>
                <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{toggleItem.label}</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{toggleItem.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  defaultChecked={toggleItem.defaultChecked}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-primary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-primary-900 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-primary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-primary-700 peer-checked:bg-primary-500"></div>
              </label>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Security Section */}
      <motion.div
        variants={item}
        className="p-4 sm:p-6 rounded-xl"
      style={{ 
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-color)'
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <Shield size={20} className="text-primary-700" />
          <h2 className="text-base sm:text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
          Security
        </h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
              Current Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
              style={{ 
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)'
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
              New Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
              style={{ 
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)'
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Save Button */}
      <motion.div variants={item} className="flex justify-end pb-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSave}
          className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary-400 to-primary-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base"
        >
          <Save size={18} />
          Save Changes
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
