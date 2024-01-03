import { FC } from "react";

interface ItemAboutProps {
  text: string;
}

const ItemAbout: FC<ItemAboutProps> = ({ text }) => {
  return (
    <li className="relative before:absolute before:size-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4">
      {text}
    </li>
  );
};

export default ItemAbout;
