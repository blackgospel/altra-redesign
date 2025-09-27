"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  container?: Element | null;
}

export function Portal({ children, container }: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(function mountPortal() {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  if (typeof window === "undefined") return null;

  return createPortal(children, container || document.body);
}
