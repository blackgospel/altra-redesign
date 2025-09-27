"use client";

import { type ReactNode, createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

import {
  type MobileOverlayState,
  type MobileOverlayStore,
  createMobileOverlayStore,
} from "./mobile-overlay-store";

export type MobileOverlayStoreApi = ReturnType<typeof createMobileOverlayStore>;

export const MobileOverlayStoreContext = createContext<
  MobileOverlayStoreApi | undefined
>(undefined);

export interface MobileOverlayStoreProviderProps {
  children: ReactNode;
  initialState?: MobileOverlayState;
}

export const MobileOverlayStoreProvider = ({
  children,
  initialState,
}: MobileOverlayStoreProviderProps) => {
  const storeRef = useRef<MobileOverlayStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createMobileOverlayStore(initialState);
  }

  return (
    <MobileOverlayStoreContext.Provider value={storeRef.current}>
      {children}
    </MobileOverlayStoreContext.Provider>
  );
};

export const useMobileOverlayStore = <T,>(
  selector: (store: MobileOverlayStore) => T
): T => {
  const mobileOverlayStoreContext = useContext(MobileOverlayStoreContext);

  if (!mobileOverlayStoreContext) {
    throw new Error(
      `useMobileOverlayStore must be used within MobileOverlayStoreProvider`
    );
  }

  return useStore(mobileOverlayStoreContext, selector);
};
