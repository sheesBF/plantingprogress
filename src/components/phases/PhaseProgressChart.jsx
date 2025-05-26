import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function PhaseProgressChart({ data, phaseNumber }) {
  const lineColor = phaseNumber === 1 ? '#0891B2' : 
                   phaseNumber === 2 ? '#0D9488' : 
                   '#2563EB';
  
  const getPhaseClass = (phaseNumber) => {
    switch(phaseNumber) {
      case 1: return 'phase-1';
      case 2: return 'phase-2';
      case 3: return 'phase-3';
      default: return 'phase-1';
    }
  };
  
  const phaseClass = getPhaseClass(phaseNumber);
  
  // Calculate cumulative total for each month
  const cumulativeData = data.reduce((acc, item, index) => {
    const previousCumulative = index > 0 ? acc[index - 1].cumulative : 0;
    const currentCumulative = previousCumulative + item.actual;
    
    acc.push({
      ...item,
      cumulative: currentCumulative
    });
    
    return acc;
  }, []);

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={cumulativeData}
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
          <Line 
            type="monotone" 
            dataKey="cumulative" 
            name="Cumulative Planted" 
            stroke={lineColor} 
            strokeWidth={3}
            activeDot={{ r: 8 }}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PhaseProgressChart;