import ItemAbout from "@/components/ui/ul-item-about";
import ButtonPrimary from "@/components/ui/button-primary";

const SectionList = () => {
  return (
    <section className="flex flex-1 flex-col items-center gap-8">
      <ul className="flex flex-col gap-4">
        <ItemAbout text="Trabajo 100% personalizado" />
        <ItemAbout text="Entrenador Experto" />
        <ItemAbout text="Flexibilidad horaria" />
        <ItemAbout text="Buenas instalaciones para hacer ejercicio" />
        <ItemAbout text="Consulta con un experto" />
      </ul>
      <ButtonPrimary type="button" text="Conoce más beneficios" />
    </section>
  );
};

export default SectionList;
