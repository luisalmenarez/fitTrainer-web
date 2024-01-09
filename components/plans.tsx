import Container from "./shared/container";
import ItemPlan from "@/components/ui/item-plan";
import Title from "@/components/ui/tite";
import { plansData } from "@/assets/data";

const Plans = () => {
  return (
    <section
      id="plans"
      className="plans__section min-h-screen flex items-center justify-center">
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
