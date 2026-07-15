import { motion } from 'framer-motion'
import { type LucideIcon, ArrowUpRight, ArrowDownRight } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string
  change: string
  isPositive: boolean
  icon: LucideIcon
  color: string
}

export default function StatsCard({ title, value, change, isPositive, icon: Icon, color }: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="stat-card p-3 sm:p-4 md:p-6 rounded-xl cursor-pointer overflow-hidden"
      style={{ 
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-color)'
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <p className="text-xs sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 truncate" style={{ color: 'var(--text-secondary)' }}>
            {title}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold truncate" style={{ color: 'var(--text-primary)' }}>
            {value}
          </p>
          <div className={`flex items-center gap-0.5 sm:gap-1 mt-1.5 sm:mt-2 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <ArrowUpRight size={12} className="sm:w-3.5 sm:h-3.5" /> : <ArrowDownRight size={12} className="sm:w-3.5 sm:h-3.5" />}
            <span className="text-xs sm:text-xs md:text-sm font-medium">{change}</span>
            <span className="text-xs hidden md:inline" style={{ color: 'var(--text-secondary)' }}>vs last month</span>
          </div>
        </div>
        <div className={`p-2 sm:p-2.5 md:p-3 rounded-xl bg-gradient-to-br ${color} shrink-0`}>
          <Icon size={16} className="text-white sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>
      </div>
    </motion.div>
  )
}
