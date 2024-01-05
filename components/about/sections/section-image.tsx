import Image from "next/image";

const SectionImage = () => {
  return (
    <section className="relative flex flex-col lg:flex-row flex-1 items-center justify-center gap-10">
      <div className="lg:absolute -top-52 left-4">
        <article className="relative w-[80vw] lg:w-44 h-56">
          <Image
            src="/images/trainer-1.png"
            alt="Image Trainer"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </article>
      </div>
      <div className="lg:absolute top-0 right-32">
        <article className="relative w-[80vw] lg:w-44 h-56">
          <Image
            src="/images/trainer-2.png"
            alt="Image Trainer"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </article>
      </div>
      <div className="lg:absolute top-12 left-8">
        <article className="relative w-[80vw] lg:w-56 h-44">
          <Image
            src="/images/trainer-3.png"
            alt="Image Trainer"
            fill
            className="object-cover rounded-lg shadow-xl "
          />
        </article>
      </div>
      <div className="lg:absolute -top-52 right-36">
        <article className="relative w-[80vw] lg:w-56 h-44">
          <Image
            src="/images/trainer-4.png"
            alt="Image Trainer"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </article>
      </div>
    </section>
  );
};

export default SectionImage;
