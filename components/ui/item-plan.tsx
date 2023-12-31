import ButtonPrimary from "@/components/ui/button-primary";
import { cn } from "@/libs/utils";
import { FC } from "react";

interface ItemPlanProps {
  name: string;
  duration: number;
  price: number;
  priceMonth: number;
  active?: boolean;
}

const ItemPlan: FC<ItemPlanProps> = ({
  name,
  duration,
  price,
  priceMonth,
  active,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-y-10 w-full bg-gray-light p-8 rounded-lg card-container transition-transform ease-in-out duration-300 transform hover:translate-y-[-10px] bg-opacity-20 backdrop-filter backdrop-blur-lg",
        active && "relative border-2 border-primary p-10 gap-12"
      )}>
      {active && (
        <div className="absolute bg-primary py-2 px-4 text-white -top-6 left-1/2 -translate-x-1/2 ">
          <h5>Recommended</h5>
        </div>
      )}

      <h3 className="text-3xl text-stone-200 font-semibold"> {name} </h3>
      <time>{duration} Month Plan</time>
      <p className="text-2xl font-semibold text-stone-100">$ {price} </p>
      <p> {priceMonth} /Month</p>
      <ButtonPrimary
        type="button"
        text="Select plan"
        className="w-full border-2 px-8 border-primary bg-transparent hover:bg-transparent"
      />
    </div>
  );
};

export default ItemPlan;
