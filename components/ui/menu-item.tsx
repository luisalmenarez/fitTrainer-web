import { cn } from "@/libs/utils";
import Link from "next/link";

interface MenuItemProps {
  className?: string;
  text: string;
  href: string;
}

const MenuItem = ({ className, text, href }: MenuItemProps) => {
  return (
    <li className="grid place-items-center">
      <Link
        href={href}
        className={cn(
          "text-zinc-300 py-2 px-4 border-b-2 border-transparent hover:border-primary transition-all duration-300",
          className
        )}>
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;
