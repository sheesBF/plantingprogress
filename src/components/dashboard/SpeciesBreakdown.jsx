import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

function SpeciesBreakdown({ species, onSpeciesClick }) {
  const COLORS = ['#16A34A', '#0891B2', '#CA8A04', '#9333EA'];
  
  const data = species.map(s => ({
    name: s.name,
    value: s.planted,
    fullName: s.fullName
  }));
  
  // Get class name for species
  const getSpeciesClass = (name) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes('ceriops')) return 'species-ct';
    if (nameLower.includes('rhizophora')) return 'species-rm';
    if (nameLower.includes('avicennia')) return 'species-am';
    if (nameLower.includes('bruguiera')) return 'species-bg';
    return '';
  };

  return (
    <motion.div 
      className="glass-card rounded-xl shadow-lg p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
        Species Breakdown
      </h2>
      
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                innerRadius={40}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => new Intl.NumberFormat().format(value)}
                labelFormatter={(name) => {
                  const species = data.find(s => s.name === name);
                  return species ? species.fullName : name;
                }}
              />
              <Legend 
                layout="vertical" 
                verticalAlign="middle" 
                align="right"
                formatter={(value) => {
                  const species = data.find(s => s.name === value);
                  return species ? species.name : value;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <div className="space-y-3">
            {species.map((species, index) => {
              const percentage = Math.round((species.planted / species.target) * 100);
              const speciesClass = getSpeciesClass(species.fullName);
              
              return (
                <motion.div 
                  key={species.name}
                  className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-3 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSpeciesClick(species.fullName)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <h3 className={`text-sm font-medium ${speciesClass}`}>
                        {species.fullName}
                      </h3>
                    </div>
                    <span className="text-xs font-medium bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                      {percentage}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                    <motion.div 
                      className="h-1.5 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                  
                  <div className="mt-1 flex justify-between text-xs text-slate-600 dark:text-slate-400">
                    <span>{new Intl.NumberFormat().format(species.planted)} planted</span>
                    <span>Target: {new Intl.NumberFormat().format(species.target)}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SpeciesBreakdown;