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
          <ItemPlan
            name="Básico"
            duration={1}
            description=""
            price={"150.000"}
            priceMonth={"150.000"}
          />
          <ItemPlan
            name="Intermedio"
            duration={12}
            description=""
            price={"400.000"}
            priceMonth={"133.000"}
            active
          />
          <ItemPlan
            name="Premium"
            duration={24}
            description=""
            price={"1.000.000"}
            priceMonth={"83.000"}
          />
        </div>
      </Container>
    </section>
  );
};

export default Plans;
