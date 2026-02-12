"use client";

import { Trigger } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

type SettingsTabsItemProps = {
  value: string;
  title?: string;
  selected?: string;
};

export const SettingsTabsItem = ({
  value = "undefined",
  title = "Undefined",
  selected = "undefined",
}: SettingsTabsItemProps) => {
  const checked = selected === value;

  return (
    <Trigger
      value={value}
      className="relative cursor-pointer px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span>{title}</span>

      {checked && (
        <motion.div
          layoutId="active-tab-indicator"
          className="absolute right-0 -bottom-px left-0 h-0.5 rounded-full bg-violet-700"
        />
      )}
    </Trigger>
  );
};
