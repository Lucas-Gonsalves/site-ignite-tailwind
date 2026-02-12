"use client";

import { Trigger } from "@radix-ui/react-tabs";

type SettingsTabsItemProps = {
  value: string;
  title?: string;
  defaultChecked?: boolean;
};

export const SettingsTabsItem = ({
  value = "Undefined",
  title,
  defaultChecked,
}: SettingsTabsItemProps) => {
  return (
    <Trigger
      value={value}
      defaultChecked={defaultChecked}
      defaultValue={defaultChecked ? value : undefined}
      className="group relative cursor-pointer px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span>{title}</span>
      <div className="absolute right-0 -bottom-px left-0 h-0.5 rounded-full transition-colors duration-200 group-data-[state=active]:bg-violet-700" />
    </Trigger>
  );
};
