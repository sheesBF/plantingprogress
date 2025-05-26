import { motion } from 'framer-motion';
import { FiBarChart2, FiTrendingUp, FiCalendar, FiMapPin } from 'react-icons/fi';

function PhaseCards({ phases, onPhaseClick }) {
  const getPhaseClass = (phaseNumber) => {
    switch(phaseNumber) {
      case 1: return 'phase-1';
      case 2: return 'phase-2';
      case 3: return 'phase-3';
      default: return 'phase-1';
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {phases.map((phase, index) => {
        const phaseNumber = index + 1;
        const percentage = Math.round((phase.planted / phase.target) * 100);
        const phaseClass = getPhaseClass(phaseNumber);
        
        return (
          <motion.div
            key={`phase-${phaseNumber}`}
            className="glass-card rounded-xl shadow-md overflow-hidden"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onClick={() => onPhaseClick(phaseNumber)}
          >
            <div className={`h-2 ${phaseClass.includes('phase-1') ? 'bg-cyan-500' : 
                               phaseClass.includes('phase-2') ? 'bg-teal-500' : 
                               'bg-blue-500'}`} />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-lg font-semibold ${phaseClass}`}>
                  Phase {phaseNumber}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  percentage >= 90 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  percentage >= 70 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                  'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
                }`}>
                  {percentage}% Complete
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <FiBarChart2 className="mr-2" />
                    <span className="text-sm">Progress</span>
                  </div>
                  <div className="flex items-baseline space-x-1">
                    <span className="font-semibold">{new Intl.NumberFormat().format(phase.planted)}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">/ {new Intl.NumberFormat().format(phase.target)}</span>
                  </div>
                </div>
                
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <motion.div 
                    className={`h-2 rounded-full ${
                      phaseClass.includes('phase-1') ? 'bg-cyan-500' : 
                      phaseClass.includes('phase-2') ? 'bg-teal-500' : 
                      'bg-blue-500'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <FiTrendingUp className="mr-1" />
                    <span className="text-xs">+{phase.monthlyRate}/mo</span>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300 justify-end">
                    <FiCalendar className="mr-1" />
                    <span className="text-xs">{phase.startDate}</span>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <FiMapPin className="mr-1" />
                    <span className="text-xs">{phase.location}</span>
                  </div>
                  <div className="flex items-center justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-xs px-2 py-1 rounded-md ${
                        phaseClass.includes('phase-1') ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200' :
                        phaseClass.includes('phase-2') ? 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200' :
                        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default PhaseCards;