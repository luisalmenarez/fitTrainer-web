import Image from "next/image";
import Container from "./shared/container";
import ButtonPrimary from "@/components/ui/button-primary";

const Hero = () => {
  return (
    <section id="#home">
      <div className="relative w-full h-screen">
        <Image
          src="/images/hero.webp"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute bg-black bg-opacity-70 left-0 top-0 w-full h-full" />
        <Container>
          <div className="absolute w-11/12 md:w-4/5 top-1/2 -translate-y-1/2 flex flex-col gap-6 items-center text-center sm:items-start sm:text-left">
            <h1 className="w-full sm:w-7/12 md:w-5/12 lg:w-7/12 text-zinc-300 text-4xl lg:text-5xl font-bold">
              Transforma tu cuerpo y mente con el mejor entrenador personalizado
            </h1>
            <p className="w-full sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 text-stone-400">
              Descubre una{" "}
              <span className="text-yellow-200">experiencia de fitness</span>{" "}
              única donde cada sesión está diseñada para acercarte a tus{" "}
              <span className="text-yellow-200">metas</span>. Como tu{" "}
              <span className="text-yellow-200">aliado</span>, no solo te guío,
              sino que <span className="text-yellow-200">personalizo</span>.
              cada entrenamiento para tu{" "}
              <span className="text-yellow-200">transformación integral</span>
            </p>
            <div className="w-9/12 md:w-1/2 flex flex-col sm:flex-row items-center gap-5">
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
