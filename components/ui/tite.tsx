"use client";
import { FC } from "react";
import { motion } from "framer-motion";

interface TitleProps {
  title: string;
  titleColor: string;
}

const Title: FC<TitleProps> = ({ title, titleColor }) => {
  const titleAnimated = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.8 },
    variants: {
      hidden: { opacity: 0.2, x: -300 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.h2
      className="flex flex-col sm:flex-row items-center gap-2 text-4xl text-center text-stone-100 font-bold mt-14 mb-10"
      {...titleAnimated}>
      {title}
      <span className="text-primary"> {titleColor} </span>
    </motion.h2>
  );
};

export default Title;
