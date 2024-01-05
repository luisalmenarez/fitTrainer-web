import Container from "@/components/shared/container";
import Title from "@/components/ui/tite";
import SectionList from "./sections/sections-list";
import SectionImage from "./sections/section-image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="about__section min-h-screen flex items-center justify-center">
      <Container>
        <Title title="Why Join with" titleColor="Us?" />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <SectionList />
          <SectionImage />
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
