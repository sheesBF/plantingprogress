import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowLeft, FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi';
import PhaseProgressChart from './PhaseProgressChart';
import PhaseSpeciesBreakdown from './PhaseSpeciesBreakdown';
import MonthlyTargetComparison from './MonthlyTargetComparison';
import { mockData } from '../../data/mockData';

function PhaseView({ phase, onBack }) {
  const [timePeriod, setTimePeriod] = useState('all');
  const phaseData = mockData.phases[phase - 1];
  
  const getPhaseClass = (phaseNumber) => {
    switch(phaseNumber) {
      case 1: return 'phase-1';
      case 2: return 'phase-2';
      case 3: return 'phase-3';
      default: return 'phase-1';
    }
  };
  
  const phaseClass = getPhaseClass(phase);
  const percentage = Math.round((phaseData.planted / phaseData.target) * 100);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onBack}
          className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md"
        >
          <FiArrowLeft className="text-slate-600 dark:text-slate-300" />
        </motion.button>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
          Phase {phase} Overview
        </h1>
      </div>
      
      <motion.div 
        className="glass-card rounded-xl shadow-lg p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-wrap items-center justify-between mb-4">
              <h2 className={`text-xl font-semibold ${phaseClass}`}>
                Phase {phase} Progress
              </h2>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                percentage >= 90 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                percentage >= 70 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
              }`}>
                {percentage}% Complete
              </span>
            </div>
            
            <div className="flex flex-wrap items-center text-sm text-slate-600 dark:text-slate-300 mb-6 space-x-4">
              <div className="flex items-center">
                <FiCalendar className="mr-2" />
                <span>Started: {phaseData.startDate}</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="mr-2" />
                <span>{phaseData.location}</span>
              </div>
              <div className="flex items-center">
                <FiUsers className="mr-2" />
                <span>{phaseData.team} Team</span>
              </div>
            </div>
            
            <PhaseProgressChart data={phaseData.monthlyData} phaseNumber={phase} />
          </div>
          
          <div>
            <PhaseSpeciesBreakdown phaseData={phaseData} />
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="glass-card rounded-xl shadow-lg p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
          Monthly Target Comparison
        </h2>
        <MonthlyTargetComparison data={phaseData.monthlyData} phaseNumber={phase} />
      </motion.div>
      
      <motion.div
        className="glass-card rounded-xl shadow-lg p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
          Key Metrics
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Planted', value: phaseData.planted, icon: '🌱' },
            { label: 'Total Target', value: phaseData.target, icon: '🎯' },
            { label: 'Remaining', value: phaseData.target - phaseData.planted, icon: '📊' },
            { label: 'Monthly Rate', value: phaseData.monthlyRate, icon: '📈' }
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4 shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  {metric.label}
                </h3>
                <span className="text-lg">{metric.icon}</span>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {new Intl.NumberFormat().format(metric.value)}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PhaseView;