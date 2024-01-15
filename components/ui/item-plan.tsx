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
  textBenefits: string[];
  active?: string;
  indexEffect: number;
}

const ItemPlan: FC<ItemPlanProps> = ({
  name,
  duration,
  description,
  indexEffect,
  priceMonth,
  textBenefits,
  active,
}) => {
  const containerVariants = {
    initial: "hidden",
    whileInView: "visible",
    whileHover: "hover",
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.4 },
    variants: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  const initialDelay = 0.3;
  const delayIncrement = 0.3;

  const fadeInConfig = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
    transition: {
      delay: initialDelay + indexEffect * delayIncrement,
      duration: 1,
    },
    variants: {
      hidden: { opacity: 0, y: -300 },
      visible: { opacity: 1, y: 0 },
    },
  };

  return (
    <div className="transition-all duration-500 hover:scale-105">
      <motion.div
        {...containerVariants}
        className={cn(
          "flex flex-col gap-y-6 w-full bg-[#202328]/95 p-8 rounded-2xl",
          active && "bg-gradient-to-b from-[#5c200e] to-primary p-10 gap-10"
        )}>
        <h3 className="text-4xl text-stone-300 font-bold pb-10 border-b-2 border-stone-300">
          {" "}
          {name}{" "}
        </h3>
        <div className="flex justify-center gap-2 font-bold">
          <p className="text-7xl font-semibold  text-stone-300">
            ${priceMonth}{" "}
          </p>
          <span
            className={cn(
              "text-primary italic text-4xl",
              active && "text-stone-300"
            )}>
            /MES
          </span>
        </div>
        <p className="text-center text-stone-100"> {duration} / Meses</p>
        <p className="text-center text-stone-100">{description}</p>
        <ul className="grid gap-4 p-6 text-stone-100">
          {textBenefits.map((benefit, index) => (
            <motion.li
              {...fadeInConfig}
              key={index}
              className={cn(
                "relative before:absolute before:size-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4",
                active && "before:bg-white"
              )}>
              {benefit}
            </motion.li>
          ))}
        </ul>
        <ButtonPrimary
          type="button"
          text="Seleccionar plan"
          className={cn(
            "w-1/2 border-2 py-4 px-0 border-primary before:bg-transparent bg-transparent hover:bg-transparent",
            active &&
              "border-2 border-white hover:text-gray-light hover:border-gray-light after:border-gray-light"
          )}
        />
      </motion.div>
    </div>
  );
};

export default ItemPlan;
