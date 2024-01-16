import { motion } from "framer-motion";
import MenuItem from "@/components/ui/menu-item";
import ButtonPrimary from "@/components/ui/button-primary";

const menuItems = [
  { href: "#home", text: "Inicio", delay: 0.2 },
  { href: "#services", text: "Servicio", delay: 0.3 },
  { href: "#about", text: "Sobre mí", delay: 0.4 },
  { href: "#contact", text: "Contacto", delay: 0.5 },
  { href: "#", text: "Solicita tu asesoría!", isButton: true, delay: 0.6 },
];

const MainMenu = () => {
  const handleClick = () => {
    const message =
      "Hola, quisiera una asesoría. ¿Podrías proporcionarme más información?";
    const SEND_MESSAGE = encodeURIComponent(message);

    window.open(`https://wa.me/573006465549?text=${SEND_MESSAGE}`, "_blank");
  };

  return (
    <ul className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-4">
      {menuItems.map((item, index) => (
        <motion.li
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ delay: item.delay, duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}>
          {item.isButton ? (
            <ButtonPrimary
              type="button"
              text={item.text}
              onClick={handleClick}
            />
          ) : (
            <MenuItem href={item.href} text={item.text} />
          )}
        </motion.li>
      ))}
    </ul>
  );
};

export default MainMenu;
