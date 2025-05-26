import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

function PhaseSpeciesBreakdown({ phaseData }) {
  const COLORS = ['#16A34A', '#0891B2', '#CA8A04', '#9333EA'];
  
  const data = phaseData.speciesBreakdown.map(species => ({
    name: species.name,
    value: species.count,
    fullName: species.fullName
  }));

  return (
    <div className="h-full">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        Species Breakdown
      </h2>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={70}
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
              verticalAlign="bottom" 
              align="center"
              formatter={(value) => {
                const species = data.find(s => s.name === value);
                return species ? species.name : value;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 space-y-2">
        {phaseData.speciesBreakdown.map((species, index) => {
          const getSpeciesClass = (name) => {
            const nameLower = name.toLowerCase();
            if (nameLower.includes('ceriops')) return 'species-ct';
            if (nameLower.includes('rhizophora')) return 'species-rm';
            if (nameLower.includes('avicennia')) return 'species-am';
            if (nameLower.includes('bruguiera')) return 'species-bg';
            return '';
          };
          
          const speciesClass = getSpeciesClass(species.fullName);
          const percentage = Math.round((species.count / phaseData.planted) * 100);
          
          return (
            <motion.div 
              key={species.name}
              className="flex items-center justify-between text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center">
                <div 
                  className="w-2 h-2 rounded-full mr-2"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className={speciesClass}>
                  {species.name}
                </span>
              </div>
              <span className="font-medium">
                {percentage}%
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default PhaseSpeciesBreakdown;