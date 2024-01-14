import { FC } from "react";

interface KeywordsHeroProps {
  text: string;
}

const KeywordsHero: FC<KeywordsHeroProps> = ({ text }) => {
  return <span className="text-primary/100"> {text} </span>;
};

export default KeywordsHero;
