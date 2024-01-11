import Container from "@/components/shared/container";
import Title from "@/components/ui/tite";
import SectionList from "./sections/sections-list";
import SectionImage from "./sections/section-image";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="about__section relative min-h-screen flex items-center justify-center">
      <Image
        src="/images/heroAbout.jpg"
        alt="Hero image"
        layout="fill"
        objectFit="cover"
        className="object-cover"
      />
      <div className="absolute bg-black bg-opacity-85 left-0 top-0 w-full h-full" />
      <Container>
        <Title title="¿Por qué entrenar" titleColor="conmigo?" />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <SectionList />
          <SectionImage />
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
