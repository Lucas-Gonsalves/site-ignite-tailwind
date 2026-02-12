"use client";

import { List, Root } from "@radix-ui/react-tabs";

import { SettingsTabsItem } from "../settings-tabs-item/settings-tabs-item";

export const SettingsTabs = () => {
  return (
    <Root defaultValue="my-details">
      <List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <SettingsTabsItem value="my-details" title="My details" />
        <SettingsTabsItem value="profile" title="Profile" />
        <SettingsTabsItem value="Password" title="Password" />
        <SettingsTabsItem value="team" title="Team" />
        <SettingsTabsItem value="plan" title="Plan" />
        <SettingsTabsItem value="billing" title="Billing" />
        <SettingsTabsItem value="email" title="Email" />
        <SettingsTabsItem value="notifications" title="Notifications" />
        <SettingsTabsItem value="integrations" title="Integrations" />
        <SettingsTabsItem value="api" title="Api" />
      </List>
    </Root>
  );
};
