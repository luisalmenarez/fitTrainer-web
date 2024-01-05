import ItemAbout from "@/components/ui/ul-item-about";
import ButtonPrimary from "@/components/ui/button-primary";

const SectionList = () => {
  return (
    <section className="flex flex-1 flex-col items-center gap-8">
      <ul className="flex flex-col gap-4">
        <ItemAbout text="Best GYM" />
        <ItemAbout text="Expert Coach" />
        <ItemAbout text="Flexible Workout Time" />
        <ItemAbout text="Good Workout Facilities" />
        <ItemAbout text="Consultation with expert" />
      </ul>
      <ButtonPrimary type="button" text="See more benefits" />
    </section>
  );
};

export default SectionList;
