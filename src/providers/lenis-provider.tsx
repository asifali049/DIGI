"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

interface Props {
  children: ReactNode;
}

export function LenisProvider({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}