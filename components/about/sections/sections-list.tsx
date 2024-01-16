"use client";

import ItemAbout from "@/components/ui/ul-item-about";
import ButtonPrimary from "@/components/ui/button-primary";
import { motion } from "framer-motion";

const SectionList = () => {
  const fadeInConfig = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.1 },
    transition: { delay: 0.1, duration: 0.8 },
    variants: {
      hidden: { opacity: 0, y: 200 },
      visible: { opacity: 1, y: 0 },
    },
  };

  return (
    <section className="flex flex-1 flex-col items-center gap-8">
      <ul className="flex flex-col gap-4 text-stone-100 font-semibold">
        {[
          "Trabajo 100% personalizado",
          "Entrenador Experto",
          "Flexibilidad horaria",
          "Buenas instalaciones para hacer ejercicio",
          "Consulta con un experto",
        ].map((text, index) => (
          <ItemAbout key={index} text={text} index={index} />
        ))}
      </ul>
      <motion.div {...fadeInConfig}>
        <ButtonPrimary type="button" text="Conoce más beneficios" />
      </motion.div>
    </section>
  );
};

export default SectionList;
