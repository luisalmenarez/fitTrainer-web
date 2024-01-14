"use client";

import Image from "next/image";
import Container from "./shared/container";
import ButtonPrimary from "@/components/ui/button-primary";
import KeywordsHero from "./ui/keywords-hero";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeInConfig = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.1 },
    transition: { delay: 0.2, duration: 0.6 },
    variants: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <section id="#home">
      <div className="relative w-full h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          className="object-cover hidden md:block"
        />
        <Image
          src="/images/heroMobile.jpg"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          className="object-cover block md:hidden"
        />
        <div className="absolute bg-black bg-opacity-75 left-0 top-0 w-full h-full" />
        <Container>
          <div className="absolute w-11/12 md:w-4/5 top-1/2 -translate-y-1/2 flex flex-col gap-6 items-center text-center sm:items-start sm:text-left">
            <motion.h1
              className="w-full sm:w-7/12 md:w-5/12 lg:w-7/12 text-slate-300 text-4xl lg:text-5xl font-bold"
              {...fadeInConfig}>
              Transforma tu cuerpo y mente con el mejor entrenador personalizado
            </motion.h1>
            <motion.p
              className="w-full sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 text-stone-100"
              {...fadeInConfig}>
              Descubre una <KeywordsHero text="experiencia de fitness" /> única
              donde cada sesión está diseñada para acercarte a tus{" "}
              <KeywordsHero text="metas" />. Como tu{" "}
              <KeywordsHero text="aliado" /> no solo te guío, sino que{" "}
              <KeywordsHero text="personalizo" /> cada entrenamiento para tu{" "}
              <KeywordsHero text="transformación integral" />
            </motion.p>
            <motion.div
              className="w-9/12 md:w-1/2 flex flex-col sm:flex-row items-center gap-5"
              {...fadeInConfig}>
              <ButtonPrimary
                className="w-full md:w-auto"
                type="button"
                text="Comienza ahora!"
              />
              <ButtonPrimary
                className="w-full md:w-auto border-primary/50 bg-transparent hover:bg-transparent hover:text-white"
                type="button"
                text="Ver reseñas!"
              />
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
