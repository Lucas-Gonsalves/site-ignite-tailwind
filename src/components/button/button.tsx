import type { ComponentProps, ReactNode } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

const button = tv({
  base: [
    "cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm transition-colors duration-200 ",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500",
    "active:opacity-80",
  ],
  variants: {
    variant: {
      primary:
        "bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover-bg-violet-600",
      empty:
        "border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800",
      ghost:
        "rounded-md p-2 text-zinc-500 transition-colors duration-200 hover:text-violet-500 shadow-none dark:text-zinc-400 dark:hover:text-violet-400 dark:hover:bg-white/5",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = {
  title?: string;
  children?: ReactNode;
} & ComponentProps<"button"> &
  VariantProps<typeof button>;

export const Button = ({
  title,
  children,
  className,
  variant,
  ...rest
}: ButtonProps) => {
  return (
    <button className={button({ variant, className })} {...rest}>
      {children}
      {title && <span>{title}</span>}
    </button>
  );
};
