import { Layout } from '../../components/layout/Layout';
import { HeroSection } from '../home/HeroSection';
import { ServicesSection } from '../home/ServicesSection';
import { ProjectsSection } from '../home/ProjectsSection';
import { LandingAccordionItem } from '../../components/ui/interactive-image-accordion';
import { TeamSection } from '../home/TeamSection';
import { JoinUsSection } from '../home/JoinUsSection';

export function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <LandingAccordionItem />
      <TeamSection />
      <JoinUsSection />
    </Layout>
  );
}
