import { create } from "zustand";

type Store = {
  isDark: boolean;
  setIsDark: () => void;
  open: boolean;
  setOpen: () => void;
  isAdminView: boolean;
  setIsAdminView: () => void;
};

export const useStore = create<Store>((set, get) => ({
  isDark: true,
  open: false,
  isAdminView: true,
  setIsDark: () => set({ isDark: !get().isDark }),
  setOpen: () => set({ open: !get().open }),
  setIsAdminView: () => set({ isAdminView: !get().isAdminView }),
}));
