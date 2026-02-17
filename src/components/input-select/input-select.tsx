"use client";

import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";
import type { ReactNode } from "react";

type InputSelectProps = {
  children: ReactNode;
  placeholder?: string | undefined;
};

export const InputSelect = ({
  children,
  placeholder = "",
}: InputSelectProps) => {
  return (
    <Select.Root>
      <Select.Trigger className="flex h-11 w-full cursor-pointer items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-placeholder:text-zinc-600">
        <Select.Value placeholder={placeholder} className="text-black" />
        <Select.Icon>
          <ChevronDownIcon className="h-5 w-5 text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-(--radix-select-trigger-width) overflow-hidden rounded-lg border border-zinc-200 bg-white"
        >
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
