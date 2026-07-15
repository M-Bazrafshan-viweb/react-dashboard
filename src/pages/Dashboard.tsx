import { motion } from 'framer-motion'
import { 
  Users, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp,
  ArrowUpRight,
  MoreHorizontal
} from 'lucide-react'
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts'
import StatsCard from '../components/StatsCard'
import RecentOrders from '../components/RecentOrders'

const revenueData = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 5000, expenses: 3800 },
  { name: 'Apr', revenue: 4500, expenses: 3908 },
  { name: 'May', revenue: 6000, expenses: 4800 },
  { name: 'Jun', revenue: 5500, expenses: 3800 },
  { name: 'Jul', revenue: 7000, expenses: 4300 },
]

const weeklyData = [
  { name: 'Mon', tasks: 12 },
  { name: 'Tue', tasks: 19 },
  { name: 'Wed', tasks: 15 },
  { name: 'Thu', tasks: 22 },
  { name: 'Fri', tasks: 18 },
  { name: 'Sat', tasks: 8 },
  { name: 'Sun', tasks: 5 },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Dashboard() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Page Title */}
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Dashboard
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Welcome back, Mahshid! Here's what's happening today.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Revenue"
          value="$45,231.89"
          change="+20.1%"
          isPositive={true}
          icon={DollarSign}
          color="from-primary-400 to-primary-600"
        />
        <StatsCard
          title="Subscriptions"
          value="+2,350"
          change="+180.1%"
          isPositive={true}
          icon={Users}
          color="from-primary-300 to-primary-500"
        />
        <StatsCard
          title="Sales"
          value="+12,234"
          change="+19%"
          isPositive={true}
          icon={ShoppingCart}
          color="from-primary-500 to-primary-700"
        />
        <StatsCard
          title="Active Now"
          value="+573"
          change="-2.1%"
          isPositive={false}
          icon={TrendingUp}
          color="from-primary-600 to-primary-800"
        />
      </motion.div>

      {/* Charts Row */}
      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div 
          className="lg:col-span-2 p-6 rounded-xl"
          style={{ 
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)'
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                Revenue Overview
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Monthly revenue and expenses
              </p>
            </div>
            <button 
              className="p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30"
              style={{ color: 'var(--text-secondary)' }}
            >
              <MoreHorizontal size={20} />
            </button>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c084b4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#c084b4" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9b6a9e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#9b6a9e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
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
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#c084b4" 
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="expenses" 
                  stroke="#9b6a9e" 
                  fillOpacity={1} 
                  fill="url(#colorExpenses)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Tasks Chart */}
        <div 
          className="p-6 rounded-xl"
          style={{ 
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)'
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                Weekly Tasks
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Tasks completed this week
              </p>
            </div>
            <div className="flex items-center gap-1 text-green-500">
              <ArrowUpRight size={16} />
              <span className="text-sm font-medium">+12%</span>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
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
                <Bar 
                  dataKey="tasks" 
                  fill="#c084b4" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>

      {/* Recent Orders */}
      <motion.div variants={item}>
        <RecentOrders />
      </motion.div>
    </motion.div>
  )
}
