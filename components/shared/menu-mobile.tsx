import { cn } from "@/libs/utils";
import MainMenu from "./main-menu";
import { FC } from "react";

interface MenuMobilePros {
  isOpen: boolean;
  onClose: () => void;
}

const MenuMobile: FC<MenuMobilePros> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={cn(
          "fixed left-0 top-0 w-3/4 sm:w-2/4 h-full z-50 bg-black flex items-center justify-center transition-all duration-300 ease-in-out",
          !isOpen ? "-left-full" : "left-0"
        )}>
        <MainMenu />
      </div>
      <div
        onClick={onClose}
        className={cn(
          "fixed left-0 top-0 w-full h-full bg-black/30 z-40",
          !isOpen ? "hidden" : "block"
        )}
      />
    </>
  );
};

export default MenuMobile;
