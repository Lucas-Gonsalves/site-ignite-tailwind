import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export type NavItemProps = {
  href?: string;
  title: string;
  icon: ComponentType<IconProps>;
  chevronMode?: "show" | "hide";
  iconHoverMode?: "none" | "color";
};

export const NavItem = ({
  href = "",
  title,
  icon: Icon,
  chevronMode = "show",
  iconHoverMode = "none",
}: NavItemProps) => {
  const showChevronIcon = chevronMode === "show";
  const isIconHoverColor = iconHoverMode === "color";
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
    >
      <Icon
        className={`h-5 w-5 text-zinc-500 ${isIconHoverColor ? "group-hover:text-violet-500" : ""}`}
      />
      <span className="text-zinc-700 group-hover:text-violet-500">{title}</span>
      {showChevronIcon && (
        <ChevronDownIcon className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
      )}
    </Link>
  );
};
