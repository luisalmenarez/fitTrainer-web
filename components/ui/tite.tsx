import { FC } from "react";

interface TitleProps {
  title: string;
  titleColor: string;
}

const Title: FC<TitleProps> = ({ title, titleColor }) => {
  return (
    <h2 className="flex flex-col sm:flex-row items-center gap-2 text-4xl text-center text-stone-100 font-bold mt-14 mb-10">
      {title}
      <span className="text-primary"> {titleColor} </span>
    </h2>
  );
};

export default Title;
