import { LifeBuoyIcon, SettingsIcon } from "lucide-react";

import { NavItem } from "../nav-item";

export const SettingsNavigation = () => {
  return (
    <nav className="space-y-0.5">
      <NavItem
        title="Support"
        icon={LifeBuoyIcon}
        chevronMode="hide"
        iconHoverMode="color"
      />
      <NavItem
        title="Settings"
        icon={SettingsIcon}
        chevronMode="hide"
        iconHoverMode="color"
      />
    </nav>
  );
};
