import { motion } from 'framer-motion';
import { format } from 'date-fns';

function RecentActivity({ activities }) {
  const statusIcons = {
    completed: (
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </span>
    ),
    inProgress: (
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 dark:bg-blue-900 dark:text-blue-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      </span>
    ),
    planned: (
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 text-amber-500 dark:bg-amber-900 dark:text-amber-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      </span>
    )
  };

  return (
    <motion.div 
      className="glass-card rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Recent Activity
        </h2>
        <button className="text-sm text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300">
          View All
        </button>
      </div>
      
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <motion.div 
            key={activity.id}
            className="flex"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {statusIcons[activity.status]}
            
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-medium text-slate-900 dark:text-white">
                  {activity.title}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {format(new Date(activity.date), 'MMM d, yyyy')}
                </span>
              </div>
              
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                {activity.description}
              </p>
              
              <div className="flex items-center text-xs">
                <span className={`px-2 py-1 rounded-full ${
                  activity.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  activity.status === 'inProgress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                  'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
                }`}>
                  {activity.status === 'completed' ? 'Completed' : 
                   activity.status === 'inProgress' ? 'In Progress' : 'Planned'}
                </span>
                
                <div className="mx-2 w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                
                <span className="text-slate-500 dark:text-slate-400">
                  {activity.location}
                </span>
                
                {activity.team && (
                  <>
                    <div className="mx-2 w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span className="text-slate-500 dark:text-slate-400">
                      Team: {activity.team}
                    </span>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default RecentActivity;