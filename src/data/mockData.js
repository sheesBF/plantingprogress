export const mockData = {
  overall: {
    totalPlanted: 356789,
    totalTarget: 500000,
    phases: [
      { planted: 184500, target: 200000 },
      { planted: 102289, target: 150000 },
      { planted: 70000, target: 150000 }
    ]
  },
  phases: [
    {
      planted: 184500,
      target: 200000,
      monthlyRate: 10200,
      startDate: 'Jan 2023',
      location: 'Coastal Region A',
      team: 'Alpha',
      monthlyData: [
        { month: 'Jan', target: 12000, actual: 11500 },
        { month: 'Feb', target: 14000, actual: 13800 },
        { month: 'Mar', target: 16000, actual: 15200 },
        { month: 'Apr', target: 18000, actual: 17500 },
        { month: 'May', target: 20000, actual: 19800 },
        { month: 'Jun', target: 22000, actual: 21500 },
        { month: 'Jul', target: 22000, actual: 21200 },
        { month: 'Aug', target: 20000, actual: 19500 },
        { month: 'Sep', target: 18000, actual: 17500 },
        { month: 'Oct', target: 16000, actual: 15000 },
        { month: 'Nov', target: 12000, actual: 12000 },
        { month: 'Dec', target: 10000, actual: 9800 }
      ],
      speciesBreakdown: [
        { name: 'CT', fullName: 'Ceriops Tagal', count: 55350 },
        { name: 'RM', fullName: 'Rhizophora Mucronata', count: 73800 },
        { name: 'AM', fullName: 'Avicennia Marina', count: 36900 },
        { name: 'BG', fullName: 'Bruguiera Gymnorrhiza', count: 18450 }
      ]
    },
    {
      planted: 102289,
      target: 150000,
      monthlyRate: 8500,
      startDate: 'Mar 2023',
      location: 'Coastal Region B',
      team: 'Beta',
      monthlyData: [
        { month: 'Mar', target: 8000, actual: 7800 },
        { month: 'Apr', target: 10000, actual: 9500 },
        { month: 'May', target: 12000, actual: 11200 },
        { month: 'Jun', target: 14000, actual: 13000 },
        { month: 'Jul', target: 16000, actual: 14500 },
        { month: 'Aug', target: 16000, actual: 14800 },
        { month: 'Sep', target: 14000, actual: 13200 },
        { month: 'Oct', target: 12000, actual: 10289 },
        { month: 'Nov', target: 10000, actual: 8000 },
        { month: 'Dec', target: 8000, actual: 0 }
      ],
      speciesBreakdown: [
        { name: 'CT', fullName: 'Ceriops Tagal', count: 25572 },
        { name: 'RM', fullName: 'Rhizophora Mucronata', count: 40916 },
        { name: 'AM', fullName: 'Avicennia Marina', count: 20458 },
        { name: 'BG', fullName: 'Bruguiera Gymnorrhiza', count: 15343 }
      ]
    },
    {
      planted: 70000,
      target: 150000,
      monthlyRate: 7000,
      startDate: 'Jul 2023',
      location: 'Coastal Region C',
      team: 'Gamma',
      monthlyData: [
        { month: 'Jul', target: 8000, actual: 7500 },
        { month: 'Aug', target: 10000, actual: 9800 },
        { month: 'Sep', target: 12000, actual: 11700 },
        { month: 'Oct', target: 14000, actual: 13500 },
        { month: 'Nov', target: 16000, actual: 15000 },
        { month: 'Dec', target: 16000, actual: 12500 }
      ],
      speciesBreakdown: [
        { name: 'CT', fullName: 'Ceriops Tagal', count: 21000 },
        { name: 'RM', fullName: 'Rhizophora Mucronata', count: 28000 },
        { name: 'AM', fullName: 'Avicennia Marina', count: 14000 },
        { name: 'BG', fullName: 'Bruguiera Gymnorrhiza', count: 7000 }
      ]
    }
  ],
  species: [
    {
      name: 'CT',
      fullName: 'Ceriops Tagal',
      planted: 101922,
      target: 140000,
      survivalRate: 85,
      growthRate: 1.8,
      monthlyData: [
        { month: 'Jan', count: 5750 },
        { month: 'Feb', count: 6900 },
        { month: 'Mar', count: 10000 },
        { month: 'Apr', count: 11000 },
        { month: 'May', count: 12000 },
        { month: 'Jun', count: 12500 },
        { month: 'Jul', count: 12000 },
        { month: 'Aug', count: 11000 },
        { month: 'Sep', count: 10000 },
        { month: 'Oct', count: 6500 },
        { month: 'Nov', count: 3000 },
        { month: 'Dec', count: 1272 }
      ],
      phaseDistribution: [
        { phase: 'Phase 1', planted: 55350, target: 60000 },
        { phase: 'Phase 2', planted: 25572, target: 40000 },
        { phase: 'Phase 3', planted: 21000, target: 40000 }
      ]
    },
    {
      name: 'RM',
      fullName: 'Rhizophora Mucronata',
      planted: 142716,
      target: 160000,
      survivalRate: 92,
      growthRate: 2.3,
      monthlyData: [
        { month: 'Jan', count: 7500 },
        { month: 'Feb', count: 8900 },
        { month: 'Mar', count: 12500 },
        { month: 'Apr', count: 14000 },
        { month: 'May', count: 15500 },
        { month: 'Jun', count: 16000 },
        { month: 'Jul', count: 15800 },
        { month: 'Aug', count: 15000 },
        { month: 'Sep', count: 14000 },
        { month: 'Oct', count: 12500 },
        { month: 'Nov', count: 6500 },
        { month: 'Dec', count: 4516 }
      ],
      phaseDistribution: [
        { phase: 'Phase 1', planted: 73800, target: 70000 },
        { phase: 'Phase 2', planted: 40916, target: 50000 },
        { phase: 'Phase 3', planted: 28000, target: 40000 }
      ]
    },
    {
      name: 'AM',
      fullName: 'Avicennia Marina',
      planted: 71358,
      target: 120000,
      survivalRate: 78,
      growthRate: 1.5,
      monthlyData: [
        { month: 'Jan', count: 3500 },
        { month: 'Feb', count: 4200 },
        { month: 'Mar', count: 6500 },
        { month: 'Apr', count: 7500 },
        { month: 'May', count: 8200 },
        { month: 'Jun', count: 8500 },
        { month: 'Jul', count: 8200 },
        { month: 'Aug', count: 7800 },
        { month: 'Sep', count: 7000 },
        { month: 'Oct', count: 5500 },
        { month: 'Nov', count: 3000 },
        { month: 'Dec', count: 1458 }
      ],
      phaseDistribution: [
        { phase: 'Phase 1', planted: 36900, target: 40000 },
        { phase: 'Phase 2', planted: 20458, target: 40000 },
        { phase: 'Phase 3', planted: 14000, target: 40000 }
      ]
    },
    {
      name: 'BG',
      fullName: 'Bruguiera Gymnorrhiza',
      planted: 40793,
      target: 80000,
      survivalRate: 81,
      growthRate: 1.7,
      monthlyData: [
        { month: 'Jan', count: 2000 },
        { month: 'Feb', count: 2500 },
        { month: 'Mar', count: 4000 },
        { month: 'Apr', count: 4500 },
        { month: 'May', count: 5000 },
        { month: 'Jun', count: 5200 },
        { month: 'Jul', count: 5000 },
        { month: 'Aug', count: 4500 },
        { month: 'Sep', count: 4000 },
        { month: 'Oct', count: 2500 },
        { month: 'Nov', count: 1000 },
        { month: 'Dec', count: 593 }
      ],
      phaseDistribution: [
        { phase: 'Phase 1', planted: 18450, target: 30000 },
        { phase: 'Phase 2', planted: 15343, target: 20000 },
        { phase: 'Phase 3', planted: 7000, target: 30000 }
      ]
    }
  ],
  monthlyProgress: {
    data: [
      { month: 'Jan', target: 18750, actual: 18750 },
      { month: 'Feb', target: 22500, actual: 22500 },
      { month: 'Mar', target: 40500, actual: 38500 },
      { month: 'Apr', target: 46500, actual: 44000 },
      { month: 'May', target: 55200, actual: 54500 },
      { month: 'Jun', target: 60200, actual: 59200 },
      { month: 'Jul', target: 69000, actual: 65200 },
      { month: 'Aug', target: 70500, actual: 68100 },
      { month: 'Sep', target: 65000, actual: 63400 },
      { month: 'Oct', target: 60000, actual: 56789 },
      { month: 'Nov', target: 54000, actual: 45500 },
      { month: 'Dec', target: 50000, actual: 28349 }
    ],
    stats: {
      avgMonthly: 47066,
      highestMonth: 'August',
      monthlyTarget: 50000
    }
  },
  recentActivities: [
    {
      id: 1,
      title: 'Phase 3 Planting Session',
      description: '12,500 mangroves planted in Phase 3 location',
      date: '2023-11-20',
      status: 'completed',
      location: 'Coastal Region C',
      team: 'Gamma'
    },
    {
      id: 2,
      title: 'Monitoring of Phase 1 Growth',
      description: 'Growth rate measurement and survival assessment conducted',
      date: '2023-11-15',
      status: 'completed',
      location: 'Coastal Region A',
      team: 'Research'
    },
    {
      id: 3,
      title: 'Phase 2 Expansion Planning',
      description: 'Site survey and preparation for expanding Phase 2 plantation area',
      date: '2023-11-10',
      status: 'inProgress',
      location: 'Coastal Region B',
      team: 'Survey'
    },
    {
      id: 4,
      title: 'Community Training Workshop',
      description: 'Training local community members on mangrove planting techniques',
      date: '2023-11-05',
      status: 'completed',
      location: 'Community Center',
      team: 'Education'
    },
    {
      id: 5,
      title: 'Year-end Assessment Planning',
      description: 'Preparing for comprehensive project assessment and reporting',
      date: '2023-12-01',
      status: 'planned',
      location: 'Project Office',
      team: 'Management'
    }
  ]
};