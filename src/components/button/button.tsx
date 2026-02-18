import type { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";


const button = tv({
  base: [
    "cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm transition-colors duration-200 ",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500",
    "active:opacity-80",
  ],
  variants: {
    variant: {
      primary: "bg-violet-600 text-white hover:bg-violet-700",
      empty: "border border-zinc-300 text-zinc-700 hover:bg-zinc-50",
      ghost: "rounded-md p-2 text-zinc-500 transition-colors duration-200 hover:text-violet-500 shadow-none"
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = {
  title?: string;
  children?: ReactNode;
} & ComponentProps<"button"> & VariantProps<typeof button>;

export const Button = ({
  title,
  children,
  variant,
  ...rest
}: ButtonProps) => {

  return (
    <button className={ button({variant}) } {...rest}>
      {children}
      { title && (
        <span>{title}</span>
      )}
    </button>
  );
};
