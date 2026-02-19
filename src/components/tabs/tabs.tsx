"use client";

import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { useState } from "react";

import { TabsItem } from "./components";

type SettingTabsProps = {
  tabsList: {
    value: string;
    title: string;
  }[];
};

export const Tabs = ({ tabsList }: SettingTabsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>("my-details");

  const tabsListExists = tabsList.length > 0;
  return (
    <TabsPrimitive.Root value={selectedTab} onValueChange={setSelectedTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <TabsPrimitive.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            {tabsListExists &&
              tabsList.map((tab) => (
                <TabsItem
                  key={`key-of-tabs-item-${tab.value}`}
                  value={tab.value}
                  title={tab.title}
                  selected={selectedTab}
                />
              ))}
          </TabsPrimitive.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none flex-col bg-zinc-100 select-none"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </TabsPrimitive.Root>
  );
};
