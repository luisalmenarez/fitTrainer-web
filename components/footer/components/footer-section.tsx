import Link from "next/link";
import { FC } from "react";

interface FooterSectionProps {
  title: string;
  list: { text: string; href: string }[];
}

const FooterSection: FC<FooterSectionProps> = ({ title, list }) => {
  return (
    <section>
      <h5 className="text-2xl font-semibold text-zinc-300 mb-5"> {title} </h5>
      <ul>
        {list.map(({ text, href }, index) => (
          <li
            key={index}
            className="text-zinc-300 mb-4 hover:line-through hover:text-primary transition-all duration-300">
            <Link href={href}> {text} </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterSection;
