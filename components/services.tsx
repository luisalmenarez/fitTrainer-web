import Container from "./shared/container";
import ItemService from "@/components/ui/item-service";
import Title from "@/components/ui/tite";

const Services = () => {
  return (
    <section
      id="services"
      className="services__section min-h-screen flex items-center justify-center mb-10 lg:mb-0">
      <Container>
        <Title title="Fitness Plans &" titleColor="Nutritions" />
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          <ItemService
            image="/icons/icon-1.png"
            title="Weight Loss"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non beatae, eligendi quos delectus est unde."
          />
          <ItemService
            image="/icons/icon-2.png"
            title="Yoga Classic"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non beatae, eligendi quos delectus est unde."
          />
          <ItemService
            image="/icons/icon-3.png"
            title="Cycling"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non beatae, eligendi quos delectus est unde."
          />
          <ItemService
            image="/icons/icon-4.png"
            title="Body Building"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non beatae, eligendi quos delectus est unde."
          />
          <ItemService
            image="/icons/icon-5.png"
            title="Musculation"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non beatae, eligendi quos delectus est unde."
          />
          <ItemService
            image="/icons/icon-6.png"
            title="Fitness Running"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non beatae, eligendi quos delectus est unde."
          />
        </div>
      </Container>
    </section>
  );
};

export default Services;
