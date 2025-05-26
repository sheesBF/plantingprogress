import { useState } from 'react';
import OverallProgress from './OverallProgress';
import PhaseCards from './PhaseCards';
import SpeciesBreakdown from './SpeciesBreakdown';
import MonthlyProgress from './MonthlyProgress';
import TimePeriodFilter from '../ui/TimePeriodFilter';
import { mockData } from '../../data/mockData';

function Dashboard({ onViewChange }) {
  const [timePeriod, setTimePeriod] = useState('all');
  const [data, setData] = useState(mockData);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <TimePeriodFilter value={timePeriod} onChange={setTimePeriod} />
      </div>

      <div className="card">
        <OverallProgress data={data.overall} />
      </div>

      <div className="card">
        <PhaseCards phases={data.phases} onPhaseClick={(phase) => onViewChange('phase', phase)} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="chart-container">
          <SpeciesBreakdown 
            species={data.species} 
            onSpeciesClick={(species) => onViewChange('species', species)} 
          />
        </div>
        <div className="chart-container">
          <MonthlyProgress data={data.monthlyProgress} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;