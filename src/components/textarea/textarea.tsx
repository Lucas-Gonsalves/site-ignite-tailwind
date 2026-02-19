import type { ComponentProps } from "react";

type TextareaProps = {} & ComponentProps<"textarea">;

export const Textarea = ({ ...rest }: TextareaProps) => {
  return (
    <textarea
      {...rest}
      className="focus:bg-violet-25 min-h-30 w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm transition-colors duration-200 outline-none hover:border-violet-500 focus:border-violet-500 focus:ring-3 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-violet-300 dark:focus:border-violet-300 dark:focus:bg-zinc-800 dark:focus:ring-violet-500/30"
    />
  );
};
