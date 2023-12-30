import Image from "next/image";
import Container from "./shared/container";
import ButtonPrimary from "./ui/button-primary";

const Hero = () => {
  return (
    <section id="#home">
      <div className="relative w-full h-screen">
        <Image
          src="/images/hero.webp"
          alt="Hero image"
          fill
          className=" object-cover"
        />
        <div className="absolute bg-black/70 letf-0 top-0 w-full h-full" />
        <Container>
          <div className="absolute w-4/5 top-1/2 -translate-y-1/2 flex flex-col gap-6">
            <h1 className="text-zinc-50 text-4xl font-semibold">
              Desafía tus límites, <br />
              alcanza tus objetivos
            </h1>
            <p className="w-1/2 text-stone-300">
              Sumérgete en una experiencia única de{" "}
              <span className="text-amber-300">fitness</span>. Más que tu{" "}
              <span className="text-amber-300">entrenador</span>, seré tu aliado
              en la búsqueda de equilibrio{" "}
              <span className="text-amber-300">físico y mental</span>. Descubre
              cómo cada sesión te acerca a una{" "}
              <span className="text-amber-300">transformación</span> integral.
            </p>
            <div className="flex items-center gap-5">
              <ButtonPrimary type="button" text="Comienza ahora!" />
              <ButtonPrimary
                className="border-primary/50 bg-transparent hover:bg-transparent hover:text-white"
                type="button"
                text="Ver reseñas!"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
