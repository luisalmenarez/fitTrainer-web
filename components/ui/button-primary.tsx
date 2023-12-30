import { cn } from "@/libs/utils";
import { FC } from "react";

interface ButtonPrimaryProps {
  type: "button" | "submit";
  className?: string;
  text: string;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  className,
  text,
  type,
}: ButtonPrimaryProps) => {
  return (
    <button
      type={type}
      className={cn(
        "py-2 px-4 bg-primary text-white font-bold rounded-md border-2 border-transparent relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 before:bg-primary/20 before:transition-all before:duration-300 hover:before:opacity-0 hover:before:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:opacity-0 after:transition-all after:duration-300 after:border after:border-primary after:scale-125 hover:after:opacity-100 hover:after:scale-100 hover:bg-gray-500/40 hover:border-primary/80 hover:text-primary transition-all duration-300",
        className
      )}>
      {text}
    </button>
  );
};

export default ButtonPrimary;
