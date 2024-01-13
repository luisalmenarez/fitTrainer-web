import { cn } from "@/libs/utils";
import Link from "next/link";

interface MenuItemProps {
  className?: string;
  text: string;
  href: string;
}

const MenuItem = ({ className, text, href }: MenuItemProps) => {
  return (
    <Link
      href={href}
      tabIndex={0}
      className={cn(
        "text-zinc-300 py-2 px-4 border-b-2 border-transparent hover:border-primary transition-all duration-300",
        className
      )}>
      {text}
    </Link>
  );
};

export default MenuItem;
