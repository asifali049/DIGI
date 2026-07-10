import type { JSX } from "react";

import { Navbar } from "./navbar";

export function Header(): JSX.Element {
  return (
    <header
      role="banner"
      className="relative z-50"
    >
      <Navbar />
    </header>
  );
}