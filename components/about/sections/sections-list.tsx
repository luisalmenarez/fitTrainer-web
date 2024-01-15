import ItemAbout from "@/components/ui/ul-item-about";
import ButtonPrimary from "@/components/ui/button-primary";

const SectionList = () => {
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
      <ButtonPrimary type="button" text="Conoce más beneficios" />
    </section>
  );
};

export default SectionList;
