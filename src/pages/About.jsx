import { motion } from 'framer-motion';
import { Code, Lightbulb, HandHeart } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-center mb-8">Who We Are</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto text-center">
            GHOSTLANZERS is a collective of passionate developers and designers who believe in crafting exceptional digital experiences. Founded in 2023, we've quickly established ourselves as a leading force in web development and digital transformation.
          </p>
        </motion.section>

        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Quality',
                description: 'We never compromise on code quality and best practices.'
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'Pushing boundaries with cutting-edge solutions.'
              },
              {
                icon: HandHeart,
                title: 'Cultured & Professional',
                description: 'Born from your own soil, we understand your sentiments and deliver with unmatched professionalism.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <value.icon className="h-12 w-12 mx-auto mb-4 text-orange-400" />
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Tech Stack We Love</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              'React.js', 'Angular' , 'Node.js', 'MongoDB', 'MySQL', 'Express', 'Vite', 'Tailwind CSS', 'TypeScript', 'Python', 'Microservices', 'Material UI',
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-800 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default About;