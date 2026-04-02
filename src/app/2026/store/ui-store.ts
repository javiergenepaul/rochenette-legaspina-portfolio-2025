import { create } from "zustand";

interface UI2026State {
  isMobileMenuOpen: boolean;
  isLangOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleLang: () => void;
  closeLang: () => void;
}

export const use2026UIStore = create<UI2026State>((set) => ({
  isMobileMenuOpen: false,
  isLangOpen: false,
  toggleMobileMenu: () =>
    set((s) => ({ isMobileMenuOpen: !s.isMobileMenuOpen, isLangOpen: false })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  toggleLang: () =>
    set((s) => ({ isLangOpen: !s.isLangOpen, isMobileMenuOpen: false })),
  closeLang: () => set({ isLangOpen: false }),
}));
