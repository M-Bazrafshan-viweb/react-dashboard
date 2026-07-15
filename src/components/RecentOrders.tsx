import { motion } from 'framer-motion'
import { MoreHorizontal, Eye, Trash2 } from 'lucide-react'
import { useState } from 'react'

interface Order {
  id: string
  customer: string
  email: string
  amount: string
  status: 'completed' | 'pending' | 'cancelled'
  date: string
}

const orders: Order[] = [
  { id: 'ORD001', customer: 'Ali Rezaei', email: 'ali@example.com', amount: '$250.00', status: 'completed', date: '2024-01-15' },
  { id: 'ORD002', customer: 'Sara Ahmadi', email: 'sara@example.com', amount: '$150.00', status: 'pending', date: '2024-01-14' },
  { id: 'ORD003', customer: 'Mohammad Karimi', email: 'mohammad@example.com', amount: '$350.00', status: 'completed', date: '2024-01-13' },
  { id: 'ORD004', customer: 'Zahra Hosseini', email: 'zahra@example.com', amount: '$450.00', status: 'cancelled', date: '2024-01-12' },
  { id: 'ORD005', customer: 'Amir Mohammadi', email: 'amir@example.com', amount: '$200.00', status: 'completed', date: '2024-01-11' },
]

const statusStyles = {
  completed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  pending: 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400',
  cancelled: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
}

export default function RecentOrders() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)

  return (
    <div 
      className="rounded-xl overflow-hidden"
      style={{ 
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-color)'
      }}
    >
      <div className="p-3 sm:p-4 md:p-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
        <div className="flex items-center justify-between">
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              Recent Orders
            </h3>
            <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
              You made 265 sales this month
            </p>
          </div>
          <button 
            className="p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 shrink-0"
            style={{ color: 'var(--text-secondary)' }}
          >
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>

      {/* Desktop: Table view (sm and above) with horizontal scroll */}
      <div className="hidden sm:block overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full" style={{ minWidth: '640px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <th className="text-left px-4 md:px-6 py-3 md:py-4 text-xs sm:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                Order ID
              </th>
              <th className="text-left px-4 md:px-6 py-3 md:py-4 text-xs sm:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                Customer
              </th>
              <th className="text-left px-4 md:px-6 py-3 md:py-4 text-xs sm:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                Amount
              </th>
              <th className="text-left px-4 md:px-6 py-3 md:py-4 text-xs sm:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                Status
              </th>
              <th className="text-left px-4 md:px-6 py-3 md:py-4 text-xs sm:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                Date
              </th>
              <th className="text-right px-4 md:px-6 py-3 md:py-4 text-xs sm:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <motion.tr
                key={order.id}
                onHoverStart={() => setHoveredRow(order.id)}
                onHoverEnd={() => setHoveredRow(null)}
                className="transition-colors"
                style={{ 
                  borderBottom: '1px solid var(--border-color)',
                  backgroundColor: hoveredRow === order.id ? 'var(--bg-primary)' : 'transparent'
                }}
              >
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <span className="font-mono text-xs sm:text-sm" style={{ color: 'var(--text-primary)' }}>
                    {order.id}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <div>
                    <p className="font-medium text-xs sm:text-sm" style={{ color: 'var(--text-primary)' }}>
                      {order.customer}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {order.email}
                    </p>
                  </div>
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <span className="font-semibold text-xs sm:text-sm" style={{ color: 'var(--text-primary)' }}>
                    {order.amount}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <span className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {order.date}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <div className="flex items-center justify-end gap-1 sm:gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-1.5 sm:p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 text-primary-500"
                    >
                      <Eye size={14} className="sm:w-4 sm:h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-1.5 sm:p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500"
                    >
                      <Trash2 size={14} className="sm:w-4 sm:h-4" />
                    </motion.button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: Card view (below sm) */}
      <div className="sm:hidden divide-y" style={{ borderColor: 'var(--border-color)' }}>
        {orders.map((order) => (
          <motion.div
            key={order.id}
            className="p-3"
            style={{ borderBottom: '1px solid var(--border-color)' }}
          >
            <div className="flex items-start justify-between mb-2 gap-2">
              <div className="min-w-0">
                <p className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                  {order.customer}
                </p>
                <p className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                  {order.id}
                </p>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ${statusStyles[order.status]}`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-xs truncate" style={{ color: 'var(--text-secondary)' }}>{order.email}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>{order.date}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                  {order.amount}
                </span>
                <div className="flex items-center gap-1">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="p-1.5 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 text-primary-500"
                  >
                    <Eye size={14} />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="p-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500"
                  >
                    <Trash2 size={14} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
