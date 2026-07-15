import { motion } from 'framer-motion'
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'
import { TrendingUp, Users, Eye, Clock } from 'lucide-react'

const pieData = [
  { name: 'Desktop', value: 45 },
  { name: 'Mobile', value: 35 },
  { name: 'Tablet', value: 20 },
]

const COLORS = ['#c084b4', '#9b6a9e', '#7a4f82']

const lineData = [
  { name: 'Mon', visitors: 4000, pageViews: 2400 },
  { name: 'Tue', visitors: 3000, pageViews: 1398 },
  { name: 'Wed', visitors: 5000, pageViews: 3800 },
  { name: 'Thu', visitors: 4500, pageViews: 3908 },
  { name: 'Fri', visitors: 6000, pageViews: 4800 },
  { name: 'Sat', visitors: 5500, pageViews: 3800 },
  { name: 'Sun', visitors: 7000, pageViews: 4300 },
]

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

export default function Analytics() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <motion.div variants={item}>
          <h1 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Analytics
          </h1>
          <p className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
            Track your website performance and user engagement
          </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Users, label: 'Total Visitors', value: '12,345', change: '+12%' },
          { icon: Eye, label: 'Page Views', value: '45,678', change: '+8%' },
          { icon: Clock, label: 'Avg. Session', value: '3m 42s', change: '+5%' },
          { icon: TrendingUp, label: 'Bounce Rate', value: '24.5%', change: '-3%' },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ y: -5 }}
            className="p-4 sm:p-5 rounded-xl flex items-center gap-3 sm:gap-4"
            style={{ 
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)'
            }}
          >
            <div className="p-2.5 sm:p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 shrink-0">
              <stat.icon size={20} className="text-primary-500 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
              <p className="text-lg sm:text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{stat.value}</p>
              <p className="text-xs text-green-500">{stat.change}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visitors Chart */}
        <div 
          className="p-4 sm:p-6 rounded-xl"
          style={{ 
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)'
          }}
        >
          <h3 className="text-base sm:text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            Visitors & Page Views
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
                <XAxis dataKey="name" stroke="var(--text-secondary)" />
                <YAxis stroke="var(--text-secondary)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="visitors" 
                  stroke="#c084b4" 
                  strokeWidth={2}
                  dot={{ fill: '#c084b4' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="pageViews" 
                  stroke="#9b6a9e" 
                  strokeWidth={2}
                  dot={{ fill: '#9b6a9e' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Device Distribution */}
        <div 
          className="p-4 sm:p-6 rounded-xl"
          style={{ 
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)'
          }}
        >
          <h3 className="text-base sm:text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            Device Distribution
          </h3>
          <div className="h-[300px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((item) => (
                    <Cell key={`cell-${item.name}`} fill={COLORS[pieData.indexOf(item) % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-4">
            {pieData.map((item, index) => (
              <div key={item.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {item.name} ({item.value}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
