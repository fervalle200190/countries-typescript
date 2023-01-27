import { createSlice } from "@reduxjs/toolkit"

interface InitialState {
     isDarkModeActive: boolean
}

const initialState: InitialState = { isDarkModeActive: false }

export const themeSlice = createSlice({
     name: "theme",
     initialState,
     reducers: {
          onToggleDarkMode: (state) => {
               state.isDarkModeActive = !state.isDarkModeActive
          },
     },
})

// Action creators are generated for each case reducer function
export const { onToggleDarkMode } = themeSlice.actions
