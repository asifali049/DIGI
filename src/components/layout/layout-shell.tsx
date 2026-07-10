import type { ReactNode } from "react";

import { Header } from "./header";
import { Footer } from "./footer";

interface LayoutShellProps {
  children: ReactNode;
}

export function LayoutShell({
  children,
}: LayoutShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-background text-foreground">
      <Header />

      <main
        id="main-content"
        className="flex-1"
        tabIndex={-1}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}