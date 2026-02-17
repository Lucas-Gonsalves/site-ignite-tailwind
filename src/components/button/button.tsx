import type { ComponentProps } from "react";

type ButtonProps = {
  title?: string;
  variant?: "default" | "empty";
} & ComponentProps<"button">;

export const Button = ({
  title = "Undefined",
  variant = "default",
  ...rest
}: ButtonProps) => {
  const isDefaultVariant = variant === "default";

  return (
    <button
      className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition-colors duration-200 ${
        isDefaultVariant
          ? "bg-violet-600 text-white hover:bg-violet-700"
          : "border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
      }`}
      {...rest}
    >
      <span>{title}</span>
    </button>
  );
};
