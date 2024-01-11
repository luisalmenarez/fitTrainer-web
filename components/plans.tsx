import Container from "./shared/container";
import ItemPlan from "@/components/ui/item-plan";
import Title from "@/components/ui/tite";
import { plansData } from "@/assets/data";
import Image from "next/image";

const Plans = () => {
  return (
    <section
      id="plans"
      className="plans__section relative min-h-screen flex items-center justify-center">
      <Image
        src="/images/heroPlans.webp"
        alt="Hero image"
        layout="fill"
        objectFit="cover"
        className="object-cover"
      />
      <div className="absolute bg-black bg-opacity-75 left-0 top-0 w-full h-full" />
      <Container>
        <Title title="Planes " titleColor="disponibles" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {plansData.map((plan, index) => (
            <ItemPlan
              key={index}
              name={plan.name}
              duration={plan.duration}
              description={plan.description}
              price={plan.price}
              priceMonth={plan.priceMonth}
              active={plan.active}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Plans;
