import { motion } from 'framer-motion';
import { Code2, Palette, Database, Layers, Zap, Globe, PiggyBank, Clock2, Wrench } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Website Development',
    description: 'Modern, responsive websites built with cutting-edge technologies.'
  },
  {
    icon: Palette,
    title: 'Website/UI Modernization',
    description: 'Transform legacy interfaces into stunning modern experiences.'
  },
  {
    icon: Layers,
    title: 'Application Development',
    description: 'Robust and scalable applications for web and mobile platforms.'
  },
  {
    icon: Globe,
    title: 'Full-stack Applications',
    description: 'End-to-end solutions with seamless frontend and backend integration.'
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description: 'Optimized database design and performance enhancement.'
  },
  {
    icon: Zap,
    title: 'Performance Enhancement',
    description: 'Speed up your applications and improve user experience.'
  },
  {
    icon: PiggyBank ,
    title: 'Most Economical',
    description: 'Assure you the lowest and most shocking prices.'
  },
  {
    icon: Clock2,
    title: 'Time Saving',
    description: 'Always on time—with the fastest average delivery times in the industry.'
  },
  {
    icon: Wrench,
    title: 'Maintenance Support',
    description: 'Longest free maintenance period for your applications in market.'
  }
];

function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Crafting Digital Excellence with<br/>
            <span style={{color:"#FF9933"}}>GHOS</span>
            <span>TLAN</span>
            <span style={{color:'#138808'}}>ZERS</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We transform ideas into powerful digital solutions
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <service.icon className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;