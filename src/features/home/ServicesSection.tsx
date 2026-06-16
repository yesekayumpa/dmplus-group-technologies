import { Container } from '../../components/ui/Container';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { ServiceCard } from '../../components/shared/ServiceCard';
import { SERVICES } from '../../config/constants';

export function ServicesSection() {
  return (
    <section className="bg-[#F8FAFC] py-12">
      <Container>
        <SectionTitle
          title="Ce que nous vous offrons"
          subtitle="Nos Services"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
