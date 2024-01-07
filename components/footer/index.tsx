import Container from "@/components//shared/container";
import Logo from "@/components/shared/logo";
import FooterSection from "@/components/footer/components/footer-section";
import Tag from "@/components/footer/components/tag";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-light/10">
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 px-5 py-10 lg:px-8 lg:py-20">
        <Logo />
        <FooterSection
          title="Company"
          list={[
            { text: "About", href: "/about" },
            { text: "Careers", href: "/careers" },
            { text: "Blogs", href: "/blogs" },
          ]}
        />
        <FooterSection
          title="Contact"
          list={[
            { text: "Help / FAQ", href: "/help" },
            { text: "Press", href: "/press" },
          ]}
        />
        <FooterSection
          title="More"
          list={[
            { text: "Program", href: "/program" },
            { text: "Plan", href: "/plan" },
          ]}
        />
        <section>
          <h5 className="text-2xl font-semibold text-zinc-300 mb-5">
            Popular Tags
          </h5>
          <article className="flex items-center flex-wrap gap-2">
            <Tag text="Abs" />
            <Tag text="Workout" />
            <Tag text="Nutrition" />
            <Tag text="Boxing" />
            <Tag text="Gym" />
            <Tag text="Facilities" active />
            <Tag text="Plans" />
            <Tag text="Trainers" />
          </article>
        </section>
      </Container>
      <section className="bg-primary text-white text-center p-3 rounded-tl-lg rounded-tr-lg">
        <h5 className="text-zinc-100">
          {" "}
          Todos los derechos reservados &copy; 2024{" "}
        </h5>
      </section>
    </footer>
  );
};

export default Footer;
