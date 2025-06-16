import { motion } from 'framer-motion';

const companies = [
  {
    name: 'The Placement Park.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    url: 'https://the-placement-park-website.onrender.com/'
  },
  {
    name: 'Ophysio - Physiotherapy Center.',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80',
    url: 'https://ophysio.in/'
  },
  {
    name: 'Surya Interiors & Constructions.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    url: 'https://suryainteriorsconstructions.onrender.com/'
  },
  {
    name: 'Three Star Networks, Mumbai.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    url: 'https://www.justdial.com/Mumbai/Three-Star-Cable-Network-Opposite-Imperial-Palace-Hotel-Andheri-East/022P5518126_BZDET'
  }
];

function Companies() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Companies We've Worked With
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img 
                  src={company.image} 
                  alt={company.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                    <a 
                      href={company.url}
                      className="inline-block px-6 py-2 bg-orange-600 rounded-full hover:bg-orange-700 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Companies