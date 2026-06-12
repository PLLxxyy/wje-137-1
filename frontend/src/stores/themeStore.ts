import { create } from 'zustand';
type Theme = 'light' | 'dark';
export const useThemeStore = create<{ theme: Theme; toggleTheme: () => void }>((set, get) => ({ theme: 'light', toggleTheme: () => set({ theme: get().theme === 'light' ? 'dark' : 'light' }) }));
