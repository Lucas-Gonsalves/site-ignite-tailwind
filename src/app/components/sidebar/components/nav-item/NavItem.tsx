import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export type NavItemProps = {
  href?: string;
  title: string;
  icon: ComponentType<IconProps>;
};

export const NavItem = ({ href = "", title, icon: Icon }: NavItemProps) => {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="text-zinc-700 group-hover:text-violet-500">{title}</span>
      <ChevronDownIcon className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
    </Link>
  );
};
