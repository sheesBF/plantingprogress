import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function MonthlyTargetComparison({ data, phaseNumber }) {
  const barColor = phaseNumber === 1 ? '#0891B2' : 
                 phaseNumber === 2 ? '#0D9488' : 
                 '#2563EB';
  
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
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
          />
          <Legend />
          <Bar 
            dataKey="target" 
            name="Target" 
            fill="#94a3b8" 
            radius={[4, 4, 0, 0]}
            barSize={16}
          />
          <Bar 
            dataKey="actual" 
            name="Actual" 
            fill={barColor}
            radius={[4, 4, 0, 0]} 
            barSize={16}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyTargetComparison;