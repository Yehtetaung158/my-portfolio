import { create } from "zustand";

type Store = {
  isDark: boolean;
  setIsDark: () => void;
  open: boolean;
  setOpen: () => void;
};

export const useStore = create<Store>((set, get) => ({
  isDark: false,
  open: false,
  setIsDark: () => set({ isDark: !get().isDark }),
  setOpen: () => set({ open: !get().open }),
}));
