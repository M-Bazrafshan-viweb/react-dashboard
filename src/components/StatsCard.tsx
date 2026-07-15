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
      className="p-4 sm:p-6 rounded-xl cursor-pointer"
      style={{ 
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-color)'
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-xs sm:text-sm font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
            {title}
          </p>
          <p className="text-xl sm:text-2xl font-bold truncate" style={{ color: 'var(--text-primary)' }}>
            {value}
          </p>
          <div className={`flex items-center gap-1 mt-2 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            <span className="text-xs sm:text-sm font-medium">{change}</span>
            <span className="text-xs hidden sm:inline" style={{ color: 'var(--text-secondary)' }}>vs last month</span>
          </div>
        </div>
        <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${color} shrink-0`}>
          <Icon size={20} className="text-white sm:w-6 sm:h-6" />
        </div>
      </div>
    </motion.div>
  )
}
