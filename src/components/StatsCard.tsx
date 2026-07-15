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
      className="p-6 rounded-xl cursor-pointer"
      style={{ 
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-color)'
      }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
            {title}
          </p>
          <p className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {value}
          </p>
          <div className={`flex items-center gap-1 mt-2 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
            <span className="text-sm font-medium">{change}</span>
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>vs last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-xl bg-gradient-to-br ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </motion.div>
  )
}
