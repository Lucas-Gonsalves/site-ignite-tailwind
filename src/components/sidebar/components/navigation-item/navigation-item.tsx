import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

type NavigationItemProps = {
  href?: string;
  title: string;
  icon: ComponentType<IconProps>;
  chevronMode?: "show" | "hide";
  iconHoverMode?: "none" | "color";
};

export const NavigationItem = ({
  href = "",
  title,
  icon: Icon,
  chevronMode = "show",
  iconHoverMode = "none",
}: NavigationItemProps) => {
  const showChevronIcon = chevronMode === "show";
  const isIconHoverColor = iconHoverMode === "color";
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800"
    >
      <Icon
        className={`h-5 w-5 text-zinc-500 dark:text-zinc-100 ${isIconHoverColor ? "group-hover:text-violet-500 dark:group-hover:text-violet-300" : ""}`}
      />
      <span className="text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
        {title}
      </span>
      {showChevronIcon && (
        <ChevronDownIcon className="dark: ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:text-zinc-500 dark:group-hover:text-violet-400" />
      )}
    </Link>
  );
};
