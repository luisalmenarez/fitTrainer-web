import Link from "next/link";
import MenuItem from "@/components/ui/menu-item";
import ButtonPrimary from "@/components/ui/button-primary";

const MainMenu = () => {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-12 lg:gap-4">
      <MenuItem href="#home" text="Inicio" />
      <MenuItem href="#services" text="Servicio" />
      <MenuItem href="#about" text="Sobre mí" />
      <MenuItem href="#contact" text="Contacto" />
      <li>
        <ButtonPrimary type="button" text="Solicita tu asesoría!" />
      </li>
    </ul>
  );
};

export default MainMenu;
