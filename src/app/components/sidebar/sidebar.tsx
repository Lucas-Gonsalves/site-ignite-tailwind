import { SearchIcon } from "lucide-react";

import { Logo, MainNavigation } from "./components";

export const Sidebar = () => {
  return (
    <aside className="space-y-6 border-r-2 border-zinc-200 px-5 py-8">
      <Logo />
      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <SearchIcon className="h-5 w-5 text-zinc-500" />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
          placeholder="Seach"
        />
      </div>
      <MainNavigation />
    </aside>
  );
};
