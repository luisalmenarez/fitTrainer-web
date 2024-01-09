import Container from "./shared/container";
import ItemService from "@/components/ui/item-service";
import Title from "@/components/ui/tite";
import { servicesData } from "@/assets/data";

const Services = () => {
  return (
    <section
      id="services"
      className="services__section min-h-screen flex items-center justify-center mb-10 lg:mb-0">
      <Container>
        <Title
          title="Fitness & Nutrición Integral"
          titleColor="Transforma Vida"
        />
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {servicesData.map((service, index) => (
            <ItemService
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
