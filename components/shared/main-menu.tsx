import Link from "next/link";
import MenuItem from "../ui/menu-item";
import ButtonPrimary from "../ui/button-primary";

const MainMenu = () => {
  return (
    <ul className="flex items-center gap-4">
      <MenuItem href="#home" text="Home" />
      <MenuItem href="#services" text="Services" />
      <MenuItem href="#about" text="About" />
      <MenuItem href="#contact" text="Contact" />
      <ButtonPrimary type="button" text="Join us" />
    </ul>
  );
};

export default MainMenu;
