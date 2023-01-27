import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { countriesSlice, themeSlice } from "./"

export const store = configureStore({
     reducer: {
          countries: countriesSlice.reducer,
          theme: themeSlice.reducer,
     },
     middleware: [...getDefaultMiddleware({ serializableCheck: false })],
})

export type CountriesState = ReturnType<typeof store.getState>
