import { motion } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { Card } from '../../components/ui/Card';
import { PROJECTS } from '../../config/constants';

export function ProjectsSection() {
  return (
    <section className="bg-white py-12">
      <Container>
        <SectionTitle
          title="Nos projets phares"
          subtitle="Réalisations"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden p-6 hover:-translate-y-1 transition-transform">
                <div className="mb-6 h-40 w-full overflow-hidden rounded-lg bg-[#DDF1FA]">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  )}
                </div>
                <div>
                  <span className="mb-1 block text-[10px] uppercase text-gray-400">
                    {project.category}
                  </span>
                  <h3 className="text-base font-bold text-[#1E293B]">{project.name}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
