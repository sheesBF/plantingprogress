import { motion } from 'framer-motion';

function SpeciesFactCard({ species }) {
  const getSpeciesInfo = (name) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes('ceriops')) {
      return {
        commonName: 'Yellow Mangrove',
        imageUrl: 'https://images.pexels.com/photos/4231806/pexels-photo-4231806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        facts: [
          'Grows in the upper intertidal zone',
          'Has knee-like roots for oxygen access',
          'Tolerant to high salt conditions',
          'Valuable for timber and medicinal purposes'
        ],
        color: 'bg-emerald-500'
      };
    }
    if (nameLower.includes('rhizophora')) {
      return {
        commonName: 'Red Mangrove',
        imageUrl: 'https://images.pexels.com/photos/7005002/pexels-photo-7005002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        facts: [
          'Known for distinctive arching prop roots',
          'Grows at the edge of shorelines',
          'Seeds can float for over a year before rooting',
          'Provides critical habitat for marine life'
        ],
        color: 'bg-sky-500'
      };
    }
    if (nameLower.includes('avicennia')) {
      return {
        commonName: 'Grey Mangrove',
        imageUrl: 'https://images.pexels.com/photos/4197693/pexels-photo-4197693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        facts: [
          'Has pneumatophores (aerial roots) for oxygen',
          'Highly salt-tolerant species',
          'Leaves excrete excess salt',
          'Important for shoreline stabilization'
        ],
        color: 'bg-amber-500'
      };
    }
    if (nameLower.includes('bruguiera')) {
      return {
        commonName: 'Orange Mangrove',
        imageUrl: 'https://images.pexels.com/photos/6928776/pexels-photo-6928776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        facts: [
          'Has distinctive knee roots',
          'Flowers are bell-shaped and reddish',
          'Seeds germinate while still on the tree',
          'Provides valuable timber for construction'
        ],
        color: 'bg-purple-500'
      };
    }
    return {
      commonName: 'Mangrove Species',
      imageUrl: 'https://images.pexels.com/photos/5699687/pexels-photo-5699687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      facts: [
        'Mangroves store large amounts of carbon',
        'Protect coastlines from erosion',
        'Provide habitat for many species',
        'Filter pollutants from water'
      ],
      color: 'bg-blue-500'
    };
  };

  const speciesInfo = getSpeciesInfo(species);
  const getSpeciesClass = (name) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes('ceriops')) return 'species-ct';
    if (nameLower.includes('rhizophora')) return 'species-rm';
    if (nameLower.includes('avicennia')) return 'species-am';
    if (nameLower.includes('bruguiera')) return 'species-bg';
    return '';
  };
  
  const speciesClass = getSpeciesClass(species);

  return (
    <motion.div 
      className="glass-card rounded-xl shadow-lg overflow-hidden h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div 
        className="h-48 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${speciesInfo.imageUrl})` }}
      />
      
      <div className="p-6">
        <h2 className={`text-lg font-semibold mb-1 ${speciesClass}`}>
          {speciesInfo.commonName}
        </h2>
        <h3 className="text-sm text-slate-600 dark:text-slate-400 italic mb-4">
          {species}
        </h3>
        
        <div className="space-y-3">
          {speciesInfo.facts.map((fact, index) => (
            <motion.div 
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`flex-shrink-0 ${speciesInfo.color} w-2 h-2 rounded-full mt-1.5 mr-2`} />
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {fact}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default SpeciesFactCard;