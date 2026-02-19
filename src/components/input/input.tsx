import type { ComponentProps, ComponentType, SVGProps } from "react";
import { twMerge } from "tailwind-merge";

type IconProps = SVGProps<SVGSVGElement>;

type InputProps = {
  icon?: ComponentType<IconProps>;
} & ComponentProps<"input">;

export const Input = ({ icon: Icon, ...rest }: InputProps) => {
  return (
    <div
      className={twMerge(
        "group flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm transition-colors duration-200",
        "focus-within:bg-violet-25 focus-within:border-violet-500 focus-within:ring-3 focus-within:ring-violet-100",
        "hover:border-violet-500",
        "dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-violet-300",
        "dark:focus-within:border-violet-300 dark:focus-within:bg-zinc-800 dark:focus-within:ring-violet-500/20",
      )}
    >
      {Icon && (
        <Icon className="h-5 w-5 text-zinc-500 transition-colors duration-200 group-focus-within:text-violet-500 dark:text-zinc-400 dark:group-focus-within:text-violet-300" />
      )}
      <input
        className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
        {...rest}
      />
    </div>
  );
};
