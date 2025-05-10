import { create } from "zustand";

type Store = {
  isDark: boolean;
  setIsDark: () => void;
  open: boolean;
  setOpen: () => void;
  isAdminView: boolean;
  setIsAdminView: () => void;
  sessionData: Record<string, any> | null;
  setSessionData: (data: Record<string, any>) => void;
};

export const useStore = create<Store>((set, get) => ({
  isDark: true,
  open: false,
  isAdminView: false,
  sessionData:null,
  setIsDark: () => set({ isDark: !get().isDark }),
  setOpen: () => set({ open: !get().open }),
  setIsAdminView: () => set({ isAdminView: !get().isAdminView }),
  setSessionData: (data) => set({ sessionData: data }),
}));
