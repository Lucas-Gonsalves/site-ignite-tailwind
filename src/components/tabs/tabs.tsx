"use client";

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
      <TabsPrimitive.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
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
    </TabsPrimitive.Root>
  );
};
