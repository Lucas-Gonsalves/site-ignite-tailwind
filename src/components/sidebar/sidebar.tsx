"use client";

import * as Collapssible from "@radix-ui/react-collapsible";
import { MenuIcon, SearchIcon } from "lucide-react";

import { Button } from "../button";
import { Input } from "../input";
import { Logo, MainNavigation, SettingsPanel } from "./components";
import { Profile } from "./components/profile";

export const Sidebar = () => {
  return (
    <Collapssible.Root className="fixed top-0 right-0 left-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapssible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </Collapssible.Trigger>
      </div>

      <Collapssible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input icon={SearchIcon} autoComplete="off" />
        <MainNavigation />
        <SettingsPanel />
        <div className="h-px bg-zinc-200" />
        <Profile />
      </Collapssible.Content>
    </Collapssible.Root>
  );
};
