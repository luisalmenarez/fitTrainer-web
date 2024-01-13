import Image from "next/image";
import { FC } from "react";

interface ItemServiceProps {
  image: string;
  title: string;
  description: string;
}

const ItemService: FC<ItemServiceProps> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-[#fce7d8] p-8 rounded-lg transition-transform ease-in-out duration-700 transform hover:shadow-2xl bg-opacity-20 backdrop-filter backdrop-blur-[3px]">
      <div className="relative size-20">
        <Image
          src={image}
          alt={"Image logo" + title}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <h3 className="text-xl text-center uppercase font-bold text-primary">
        {" "}
        {title}{" "}
      </h3>
      <p className="text-center text-stone-100 max-w-sm">{description} </p>
    </div>
  );
};

export default ItemService;
