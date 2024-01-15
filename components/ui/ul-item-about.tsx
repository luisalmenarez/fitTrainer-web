"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface ItemAboutProps {
  text: string;
  index: number;
}

const ItemAbout: FC<ItemAboutProps> = ({ text, index }) => {
  const initialDelay = 0.1;
  const delayIncrement = 0.1;

  const fadeInConfig = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
    transition: { delay: initialDelay + index * delayIncrement, duration: 0.8 },
    variants: {
      hidden: { opacity: 0, y: -300 },
      visible: { opacity: 1, y: 0 },
    },
  };

  return (
    <motion.li
      {...fadeInConfig}
      className="relative before:absolute before:size-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4">
      {text}
    </motion.li>
  );
};

export default ItemAbout;
