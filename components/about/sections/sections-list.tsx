"use client";

import ItemAbout from "@/components/ui/ul-item-about";
import ButtonPrimary from "@/components/ui/button-primary";
import { motion } from "framer-motion";
import Link from "next/link";

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
        <Link
          href="/about"
          className="py-2 px-4 bg-primary text-white text-sm md:text-base font-bold rounded-md border-2 border-transparent relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 before:bg-primary/20 before:transition-all before:duration-300 hover:before:opacity-0 hover:before:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:opacity-0 after:transition-all after:duration-300 after:border after:border-primary after:scale-125 hover:after:opacity-100 hover:after:scale-100 hover:bg-gray-500/40 hover:border-primary/80 hover:text-primary transition-all duration-300">
          Conoce más aquí
        </Link>
      </motion.div>
    </section>
  );
};

export default SectionList;
