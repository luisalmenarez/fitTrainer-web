import { FC } from "react";

interface ButtonPlansCardsProps {
  text: string;
}

const ButtonPlansCards: FC<ButtonPlansCardsProps> = ({ text }) => {
  return (
    <button className="w-3/4 px-0 py-3 rounded-md border-[3px] font-bold text-lg border-primary text-white  hover:bg-primary/20 hover:text-white transition-colors duration-500">
      {text}
    </button>
  );
};

export default ButtonPlansCards;
