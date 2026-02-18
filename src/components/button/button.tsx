  import type { ComponentProps } from "react";
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
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  });

  type ButtonProps = {
    title?: string;
    variant?: "default" | "empty";
  } & ComponentProps<"button"> & VariantProps<typeof button>;

  export const Button = ({
    title = "Undefined",
    variant,
    ...rest
  }: ButtonProps) => {

    return (
      <button className={ button({variant}) } {...rest}>
        <span>{title}</span>
      </button>
    );
  };
