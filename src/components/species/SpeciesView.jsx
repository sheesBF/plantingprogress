import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowLeft, FiInfo } from 'react-icons/fi';
import SpeciesProgressChart from './SpeciesProgressChart';
import SpeciesPhaseDistribution from './SpeciesPhaseDistribution';
import SpeciesFactCard from './SpeciesFactCard';
import { mockData } from '../../data/mockData';

function SpeciesView({ species, onBack }) {
  const speciesData = mockData.species.find(s => s.fullName === species);
  
  const getSpeciesClass = (name) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes('ceriops')) return 'species-ct';
    if (nameLower.includes('rhizophora')) return 'species-rm';
    if (nameLower.includes('avicennia')) return 'species-am';
    if (nameLower.includes('bruguiera')) return 'species-bg';
    return '';
  };
  
  const speciesClass = getSpeciesClass(species);
  const percentage = Math.round((speciesData.planted / speciesData.target) * 100);
  
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
          <span className={speciesClass}>{species}</span> Overview
        </h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          className="glass-card rounded-xl shadow-lg p-6 lg:col-span-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center justify-between mb-4">
            <h2 className={`text-xl font-semibold ${speciesClass}`}>
              Planting Progress
            </h2>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              percentage >= 90 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
              percentage >= 70 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
              'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
            }`}>
              {percentage}% of Target
            </span>
          </div>
          
          <div className="flex flex-wrap items-center text-sm text-slate-600 dark:text-slate-300 mb-6 space-x-4">
            <div className="flex items-center">
              <FiInfo className="mr-2" />
              <span>Scientific Name: <em>{species}</em></span>
            </div>
          </div>
          
          <SpeciesProgressChart data={speciesData.monthlyData} speciesName={species} />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SpeciesFactCard species={species} />
        </motion.div>
      </div>
      
      <motion.div
        className="glass-card rounded-xl shadow-lg p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
          Phase Distribution
        </h2>
        <SpeciesPhaseDistribution data={speciesData.phaseDistribution} />
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
            { label: 'Total Planted', value: speciesData.planted, icon: '🌱' },
            { label: 'Total Target', value: speciesData.target, icon: '🎯' },
            { label: 'Survival Rate', value: `${speciesData.survivalRate}%`, icon: '🌿' },
            { label: 'Growth Rate', value: `${speciesData.growthRate} cm/month`, icon: '📏' }
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
                {typeof metric.value === 'number' && metric.value > 1000 
                  ? new Intl.NumberFormat().format(metric.value)
                  : metric.value}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SpeciesView;