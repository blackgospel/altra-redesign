import { createStore } from "zustand/vanilla";

export type MobileOverlayState = typeof defaultInitState;

export type MobileOverlayActions = ReturnType<typeof actions>;

export type MobileOverlayStore = MobileOverlayState & MobileOverlayActions;

export const defaultInitState = {
  isOpen: false,
  activeSubmenu: null as string | null,
};

export const actions = (
  set: (state: DeepPartial<MobileOverlayState>) => void,
  get: () => MobileOverlayState
) => ({
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set({ isOpen: !get().isOpen }),
  setActiveSubmenu: (activeSubmenu: string | null) => set({ activeSubmenu }),
});

export const createMobileOverlayStore = (
  initState: MobileOverlayState = defaultInitState
) => {
  return createStore<MobileOverlayStore>()((set, get) => ({
    ...initState,
    ...actions(set, get),
  }));
};
