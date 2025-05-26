import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

function MonthlyProgress({ data }) {
  if (!data?.data) {
    return (
      <motion.div 
        className="glass-card rounded-xl shadow-lg p-6 h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-slate-500 dark:text-slate-400">No data available</p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="glass-card rounded-xl shadow-lg p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">
        Monthly Planting Progress
      </h2>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis 
              dataKey="month" 
              tick={{ fill: 'rgba(100, 116, 139, 0.8)' }}
            />
            <YAxis 
              tick={{ fill: 'rgba(100, 116, 139, 0.8)' }}
              tickFormatter={(value) => {
                if (value >= 1000) {
                  return `${(value / 1000).toFixed(0)}k`;
                }
                return value;
              }}
            />
            <Tooltip
              formatter={(value) => new Intl.NumberFormat().format(value)}
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '0.75rem',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            />
            <Legend />
            <Bar 
              dataKey="target" 
              name="Target" 
              fill="rgba(148, 163, 184, 0.7)" 
              radius={[4, 4, 0, 0]}
              barSize={12}
            />
            <Bar 
              dataKey="actual" 
              name="Actual" 
              fill="rgba(8, 145, 178, 0.7)" 
              radius={[4, 4, 0, 0]} 
              barSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {data.stats && (
        <div className="mt-6 grid grid-cols-3 gap-6">
          {[
            { label: 'Average Monthly', value: 'avgMonthly', format: true, suffix: '' },
            { label: 'Highest Month', value: 'highestMonth', format: false, suffix: '' },
            { label: 'Monthly Target', value: 'monthlyTarget', format: true, suffix: '' }
          ].map((stat, index) => (
            <div key={stat.value} className="stat-card text-center">
              <h3 className="stat-label mb-2">
                {stat.label}
              </h3>
              <p className="stat-value">
                {stat.format 
                  ? new Intl.NumberFormat().format(data.stats[stat.value])
                  : data.stats[stat.value]
                }
                {stat.suffix}
              </p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default MonthlyProgress;