"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

type TabsItemProps = {
  value: string;
  title?: string;
  selected?: string;
};

export const TabsItem = ({
  value = "undefined",
  title = "Undefined",
  selected = "undefined",
}: TabsItemProps) => {
  const checked = selected === value;

  return (
    <Tabs.Trigger
      value={value}
      className="group relative cursor-pointer px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span className="rounded whitespace-nowrap group-focus-visible:text-violet-500 group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {title}
      </span>

      {checked && (
        <motion.div
          layoutId="active-tab-indicator"
          className="absolute right-0 -bottom-px left-0 h-0.5 rounded-full bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  );
};
