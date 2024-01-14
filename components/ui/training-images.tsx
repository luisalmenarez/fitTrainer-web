import Image from "next/image";
import { FC } from "react";

interface TrainingImagesProps {
  url: string;
  alt: string;
}

const TrainingImages: FC<TrainingImagesProps> = ({ url, alt }) => {
  return (
    <div className="relative mx-auto w-full h-[70vh]">
      <Image
        src={url}
        alt={alt}
        fill
        className="object-cover rounded-xl shadow-xl"
      />
    </div>
  );
};

export default TrainingImages;
