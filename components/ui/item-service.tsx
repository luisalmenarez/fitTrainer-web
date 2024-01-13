import Image from "next/image";
import { FC } from "react";

interface ItemServiceProps {
  image: string;
  thumb: string;
  title: string;
  description: string;
}

const ItemService: FC<ItemServiceProps> = ({
  image,
  thumb,
  title,
  description,
}) => {
  return (
    <div className="w-full h-4/5 flex flex-col items-left justify-end gap-2 px-8 py-16 rounded-lg transition-transform ease-in-out duration-700 transform hover:shadow-2xl bg-opacity-20 backdrop-filter backdrop-blur-[3px]">
      <Image
        src={image}
        alt={"Background Image " + title}
        layout="fill"
        objectFit="cover"
        className="object-cover rounded-lg"
      />
      <div className="absolute bg-black bg-opacity-70 left-0 top-0 w-full h-full rounded-lg" />
      <Image
        src={thumb}
        alt={"Image logo" + title}
        width={70}
        height={70}
        className="z-10"
      />
      <h3 className="text-lg uppercase font-bold text-primary z-10">
        {" "}
        {title}{" "}
      </h3>
      <p className="text-sm text-left text-stone-100 z-10">{description} </p>
    </div>
  );
};

export default ItemService;
