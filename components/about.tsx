import Container from "@/components/shared/container";
import Title from "@/components/ui/tite";
import ItemAbout from "./ui/ul-item-about";
import ButtonPrimary from "./ui/button-primary";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="about__section min-h-screen flex items-center justify-center">
      <Container>
        <Title title="Why Join with" titleColor="Us?" />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <section className="flex flex-1 flex-col items-center gap-8">
            <ul className="flex flex-col gap-4">
              <ItemAbout text="Best GYM" />
              <ItemAbout text="Expert Coach" />
              <ItemAbout text="Flexible Workout Time" />
              <ItemAbout text="Good Workout Facilities" />
              <ItemAbout text="Consultation with expert" />
            </ul>
            <ButtonPrimary type="button" text="See more benefits" />
          </section>
          <section className="relative flex flex-col lg:flex-row flex-1 items-center justify-center gap-10">
            <div className="lg:absolute -top-52 left-8">
              <article className="relative w-[80vw] lg:w-44 h-56">
                <Image
                  src="/images/trainer-1.png"
                  alt="Image Trainer"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </article>
            </div>
            <div className="lg:absolute top-0 right-40">
              <article className="relative w-[80vw] lg:w-44 h-56">
                <Image
                  src="/images/trainer-2.png"
                  alt="Image Trainer"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </article>
            </div>
            <div className="lg:absolute top-12 left-16">
              <article className="relative w-[80vw] lg:w-56 h-44">
                <Image
                  src="/images/trainer-3.png"
                  alt="Image Trainer"
                  fill
                  className="object-cover rounded-lg shadow-xl "
                />
              </article>
            </div>
            <div className="lg:absolute -top-52 right-44">
              <article className="relative w-[80vw] lg:w-56 h-44">
                <Image
                  src="/images/trainer-4.png"
                  alt="Image Trainer"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </article>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
