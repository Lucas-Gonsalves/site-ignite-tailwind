"use client";

import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";
import type { ReactNode } from "react";

type InputSelectProps = {
  children: ReactNode;
  placeholder?: string | undefined;
  id?: string;
} & Select.SelectProps;

export const InputSelect = ({
  children,
  placeholder = "",
  id,
  ...root
}: InputSelectProps) => {
  return (
    <Select.Root {...root}>
      <Select.Trigger className="focus-within:bg-violet-25 flex h-11 w-full cursor-pointer items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm transition-colors duration-200 outline-none focus-within:border-violet-500 focus-within:ring-3 focus-within:ring-violet-100 hover:border-violet-500 data-placeholder:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-300 dark:focus-within:bg-zinc-800 dark:focus-within:ring-violet-500/20 dark:hover:border-violet-300 dark:data-placeholder:text-zinc-400">
        <Select.Value
          placeholder={placeholder}
          className="text-black dark:text-zinc-100"
        />
        <Select.Icon>
          <ChevronDownIcon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          id={id}
          side="bottom"
          position="popper"
          sideOffset={8}
          className="animate-slide-fade-t z-10 w-(--radix-select-trigger-width) cursor-pointer overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
        >
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
