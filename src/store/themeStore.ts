import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Theme, ThemeMode, ThemeSpecialty } from '../@types/theme';

interface ThemeState extends Theme {
  setMode: (mode: ThemeMode) => void;
  setSpecialty: (specialty: ThemeSpecialty) => void;
  toggleMode: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'light' as ThemeMode,
      specialty: 'default' as ThemeSpecialty,
      
      setMode: (mode: ThemeMode) => set(() => ({ mode })),
      setSpecialty: (specialty: ThemeSpecialty) => set(() => ({ specialty })),
      toggleMode: () => set((state) => ({ mode: state.mode === 'light' ? 'dark' : 'light' })),
    }),
    {
      name: 'theme',
    }
  )
); 