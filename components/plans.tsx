import Container from "./shared/container";
import ItemPlan from "@/components/ui/item-plan";
import Title from "@/components/ui/tite";

const Plans = () => {
  return (
    <section
      id="plans"
      className="plans__section min-h-screen flex items-center justify-center">
      <Container>
        <Title title="Subscribe to" titleColor="Plans" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <ItemPlan name="Standar" duration={6} price={4800} priceMonth={800} />
          <ItemPlan
            name="Fitness"
            duration={12}
            price={7200}
            priceMonth={600}
            active
          />
          <ItemPlan
            name="Entreprise"
            duration={24}
            price={12000}
            priceMonth={500}
          />
        </div>
      </Container>
    </section>
  );
};

export default Plans;
