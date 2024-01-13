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
          title="Menú"
          list={[
            { text: "Inicio", href: "#home" },
            { text: "Sobre mí", href: "/about" },
            { text: "Servicios", href: "#services" },
          ]}
        />
        <FooterSection
          title="Contacto"
          list={[
            {
              text: "Instagram",
              href: "https://www.instagram.com/almenares_08/",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            { text: "WhatsApp", href: "/WhatsApp" },
          ]}
        />
        <FooterSection
          title="Más"
          list={[
            { text: "Programas", href: "/program" },
            { text: "Planes", href: "/plan" },
          ]}
        />
        <section>
          <h6 className="text-2xl font-semibold text-zinc-300 mb-5">
            Búsquedas populares
          </h6>
          <article className="flex items-center flex-wrap gap-2 text-white">
            <Tag text="Abdominales" />
            <Tag text="Entrenamiento" />
            <Tag text="Nutrición" />
            <Tag text="Boxeo" />
            <Tag text="Gimnasio" />
            <Tag text="Entrenador" active />
            <Tag text="Planes" />
          </article>
        </section>
      </Container>
      <section className="bg-primary text-white text-center p-3 rounded-tl-lg rounded-tr-lg">
        <h5 className="text-white font-semibold">
          {" "}
          Todos los derechos reservados &copy; 2024{" "}
        </h5>
      </section>
    </footer>
  );
};

export default Footer;
