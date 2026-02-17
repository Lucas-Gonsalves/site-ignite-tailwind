import type { ComponentProps } from "react";

type TextareaProps = {} & ComponentProps<"textarea">;

export const Textarea = ({ ...rest }: TextareaProps) => {
  return (
    <textarea
      {...rest}
      className="min-h-30 w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
    />
  );
};
