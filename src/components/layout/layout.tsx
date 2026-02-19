import type { ReactNode } from "react";

import { Sidebar } from "@/components/sidebar";

type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="lg:grid-cols-app min-h-screen lg:grid">
      <Sidebar />
      <main className="max-w-[100vw] px-4 pt-24 pb-12 lg:col-start-2 lg:px-8 lg:pt-8 dark:bg-zinc-900">
        {children}
      </main>
    </div>
  );
};
