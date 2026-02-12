import type { ReactNode } from "react";

import { Sidebar } from "@/components/sidebar";

type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid-cols-app grid min-h-screen">
      <Sidebar />
      <main className="px-4 pt-8 pb-12">{children}</main>
    </div>
  );
};
