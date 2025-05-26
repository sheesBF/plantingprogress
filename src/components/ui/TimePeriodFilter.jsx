function TimePeriodFilter({ value, onChange }) {
  const periods = [
    { id: 'all', label: 'All Time' },
    { id: '6m', label: '6 Months' },
    { id: '3m', label: '3 Months' },
    { id: '1m', label: '1 Month' }
  ];
  
  return (
    <div className="flex bg-white dark:bg-slate-800 rounded-lg p-1">
      {periods.map(period => (
        <button
          key={period.id}
          onClick={() => onChange(period.id)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            value === period.id
              ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          {period.label}
        </button>
      ))}
    </div>
  );
}

export default TimePeriodFilter;