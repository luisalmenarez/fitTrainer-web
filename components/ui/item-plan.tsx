import ButtonPrimary from "@/components/ui/button-primary";
import { cn } from "@/libs/utils";
import { FC } from "react";
import ItemAbout from "./ul-item-about";

interface ItemPlanProps {
  name: string;
  duration: number;
  description: string;
  price: string;
  priceMonth: string;
  active?: boolean;
}

const ItemPlan: FC<ItemPlanProps> = ({
  name,
  duration,
  description,
  price,
  priceMonth,
  active,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-y-10 w-full bg-gray-light p-8 rounded-lg transition-transform ease-in-out duration-500 transform hover:translate-y-[-10px] hover:shadow-custom bg-opacity-20 backdrop-filter backdrop-blur-lg",
        active && "relative border-2 border-primary p-10 gap-12"
      )}>
      {active && (
        <div className="absolute bg-primary py-2 px-4 text-white -top-6 left-1/2 -translate-x-1/2 ">
          <h5>Más solicitado</h5>
        </div>
      )}

      <h3 className="text-3xl text-stone-200 font-semibold"> {name} </h3>
      <p className="text-center">{description}</p>
      <time>{duration} / Meses </time>
      <p className="text-2xl font-semibold text-stone-100">${price} </p>
      <p> ${priceMonth} / Mes</p>
      <ButtonPrimary
        type="button"
        text="Select plan"
        className="w-full border-2 px-8 border-primary bg-transparent hover:bg-transparent"
      />
    </div>
  );
};

export default ItemPlan;
