import { SearchIcon } from "lucide-react";

import { Input } from "../input";
import { Logo, MainNavigation, SettingsPanel } from "./components";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-6 border-r-2 border-zinc-200 px-5 py-8">
      <Logo />
      <Input icon={SearchIcon} />
      <MainNavigation />
      <SettingsPanel />
    </aside>
  );
};
