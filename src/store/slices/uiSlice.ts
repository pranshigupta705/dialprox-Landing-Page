import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Theme = "light" | "dark" | "system";

interface UiState {
  menuOpen: boolean;
  theme: Theme;
}

const initialState: UiState = {
  menuOpen: false,
  theme: "system",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu: (state) => {
      state.menuOpen = false;
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleMenu, closeMenu, setTheme, toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;