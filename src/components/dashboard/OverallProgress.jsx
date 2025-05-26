import { motion } from 'framer-motion';
import { useState } from 'react';
import ProgressCircle from '../ui/ProgressCircle';

function OverallProgress({ data }) {
  const [hoveredStat, setHoveredStat] = useState(null);
  
  const stats = [
    { 
      id: 'total',
      label: 'Total Planted', 
      value: data.totalPlanted,
      target: data.totalTarget,
      icon: '🌱',
      color: 'bg-cyan-500'
    },
    { 
      id: 'phase1',
      label: 'Phase 1', 
      value: data.phases[0].planted,
      target: data.phases[0].target,
      icon: '1️⃣',
      color: 'bg-cyan-600 phase-1'
    },
    { 
      id: 'phase2',
      label: 'Phase 2', 
      value: data.phases[1].planted,
      target: data.phases[1].target,
      icon: '2️⃣',
      color: 'bg-teal-600 phase-2'
    },
    { 
      id: 'phase3',
      label: 'Phase 3', 
      value: data.phases[2].planted,
      target: data.phases[2].target,
      icon: '3️⃣',
      color: 'bg-blue-600 phase-3'
    }
  ];

  return (
    <motion.div 
      className="glass-card rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
        Overall Planting Progress
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const percentage = Math.round((stat.value / stat.target) * 100);
          
          return (
            <motion.div
              key={stat.id}
              className="relative flex flex-col items-center justify-center p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 shadow-sm"
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredStat(stat.id)}
              onHoverEnd={() => setHoveredStat(null)}
            >
              <div className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 shadow-md">
                <span className="text-lg">{stat.icon}</span>
              </div>
              
              <ProgressCircle 
                percentage={percentage} 
                size={80} 
                strokeWidth={8}
                className={`${stat.color} mb-3`}
              />
              
              <h3 className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                {stat.label}
              </h3>
              
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                  {new Intl.NumberFormat().format(stat.value)}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  / {new Intl.NumberFormat().format(stat.target)}
                </span>
              </div>
              
              <div className={`mt-1 text-xs font-medium ${
                percentage >= 90 ? 'text-green-600 dark:text-green-400' :
                percentage >= 70 ? 'text-yellow-600 dark:text-yellow-400' :
                'text-amber-600 dark:text-amber-400'
              }`}>
                {percentage}% Complete
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default OverallProgress;