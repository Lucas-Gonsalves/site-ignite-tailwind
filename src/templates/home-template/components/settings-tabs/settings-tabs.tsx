"use client";

import { List, Root } from "@radix-ui/react-tabs";
import { useState } from "react";

import { SettingsTabsItem } from "../settings-tabs-item/settings-tabs-item";
import { SETTINGS_TABS_ROUTES } from "./settings-tabs-routes";

export const SettingsTabs = () => {
  const [selectedTab, setSelectedTab] = useState<string>("my-details");
  const settingsTabRoutes = SETTINGS_TABS_ROUTES;

  const isSettingsTabRoutesExists = settingsTabRoutes.length > 0;
  return (
    <Root value={selectedTab} onValueChange={setSelectedTab}>
      <List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        {isSettingsTabRoutesExists &&
          settingsTabRoutes.map((tabRoute) => (
            <SettingsTabsItem
              key={`key-of-settings-tabs-item-${tabRoute.value}`}
              value={tabRoute.value}
              title={tabRoute.title}
              selected={selectedTab}
            />
          ))}
      </List>
    </Root>
  );
};
