import { Container } from '../../components/ui/Container';
import { SectionTitle } from '../../components/shared/SectionTitle';
import { TeamCard } from '../../components/shared/TeamCard';
import { TEAM } from '../../config/constants';

export function TeamSection() {
  return (
    <section className="bg-[#F8FAFC] py-12">
      <Container>
        <SectionTitle
          title="Nos experts"
          subtitle="L'équipe"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, index) => (
            <TeamCard
              key={member.name}
              {...member}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
