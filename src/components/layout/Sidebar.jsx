import { motion } from 'framer-motion';
import { FiHome, FiBarChart2, FiLayers, FiMap, FiSettings, FiCloudRain, FiWind } from 'react-icons/fi';
import { useState } from 'react';

function Sidebar({ activeView, onViewChange }) {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FiHome /> },
    { id: 'phase-1', label: 'Phase 1', icon: <FiLayers />, viewType: 'phase', data: 1 },
    { id: 'phase-2', label: 'Phase 2', icon: <FiLayers />, viewType: 'phase', data: 2 },
    { id: 'phase-3', label: 'Phase 3', icon: <FiLayers />, viewType: 'phase', data: 3 },
    { id: 'species-ct', label: 'Ceriops Tagal', icon: <FiCloudRain />, viewType: 'species', data: 'Ceriops Tagal' },
    { id: 'species-rm', label: 'Rhizophora Mucronata', icon: <FiWind />, viewType: 'species', data: 'Rhizophora Mucronata' },
    { id: 'species-am', label: 'Avicennia Marina', icon: <FiWind />, viewType: 'species', data: 'Avicennia Marina' },
    { id: 'species-bg', label: 'Bruguiera Gymnorrhiza', icon: <FiCloudRain />, viewType: 'species', data: 'Bruguiera Gymnorrhiza' },
    { id: 'map', label: 'Map View', icon: <FiMap /> },
    { id: 'settings', label: 'Settings', icon: <FiSettings /> }
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (item) => {
    if (item.viewType) {
      onViewChange(item.viewType, item.data);
    } else {
      onViewChange(item.id);
    }
  };

  const isActive = (item) => {
    if (item.id === 'dashboard' && activeView === 'dashboard') return true;
    if (item.viewType === 'phase' && activeView === 'phase') return true;
    if (item.viewType === 'species' && activeView === 'species') return true;
    return false;
  };

  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: isOpen ? 0 : -250 }}
      transition={{ duration: 0.3 }}
      className="w-64 bg-white dark:bg-slate-800 shadow-md z-30 h-[calc(100vh-4rem)]"
    >
      <div className="h-full flex flex-col overflow-y-auto">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Navigation</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick(item)}
              className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(item)
                  ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </motion.button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {new Date().toLocaleDateString()}
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Live Data
            </span>
          </div>
        </div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleSidebar}
        className="absolute -right-4 top-20 bg-cyan-500 text-white p-2 rounded-full shadow-md"
        aria-label="Toggle sidebar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </motion.button>
    </motion.aside>
  );
}

export default Sidebar;