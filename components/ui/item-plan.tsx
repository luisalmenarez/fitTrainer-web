"use client";
import ButtonPrimary from "@/components/ui/button-primary";
import { cn } from "@/libs/utils";
import { FC } from "react";
import { motion } from "framer-motion";
interface ItemPlanProps {
  name: string;
  duration: number;
  description: string;
  price: string;
  priceMonth: string;
  active?: string;
}

const ItemPlan: FC<ItemPlanProps> = ({
  name,
  duration,
  description,
  price,
  priceMonth,
  active,
}) => {
  const containerVariants = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.4 },
    variants: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      {...containerVariants}
      className={cn(
        "flex flex-col items-center gap-y-10 w-full bg-gray-light/30 p-8 rounded-lg transition-transform ease-in-out duration-500 transform hover:translate-y-[-10px] hover:shadow-custom bg-opacity-20 backdrop-filter backdrop-blur-[3px]",
        active && "relative border-2 text-center border-primary p-10 gap-12"
      )}>
      {active && (
        <div className="absolute z-50 bg-primary py-2 px-4 text-white -top-6 left-1/2 -translate-x-1/2 ">
          <h4>Más solicitado</h4>
        </div>
      )}

      <h3 className="text-3xl text-primary font-bold"> {name} </h3>
      <p className="text-center text-stone-100">{description}</p>
      <time className="text-stone-100 font-bold">{duration} / Meses </time>
      <p className="text-2xl font-bold text-primary">${price} </p>
      <p className="text-stone-100 font-semibold"> ${priceMonth} / Mes</p>
      <ButtonPrimary
        type="button"
        text="Seleccionar plan"
        className="w-full border-2 px-8 border-primary bg-transparent hover:bg-transparent"
      />
    </motion.div>
  );
};

export default ItemPlan;
