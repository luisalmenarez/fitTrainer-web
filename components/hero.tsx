import Image from "next/image";

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
        <div className="absolute bg-black/60 letf-0 top-0 w-full h-full" />
      </div>
    </section>
  );
};

export default Hero;
