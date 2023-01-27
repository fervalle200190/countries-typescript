import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { countriesSlice } from "./slices/countriesSlice"

export const store = configureStore({
     reducer: {
          countries: countriesSlice.reducer,
     },
     middleware: [...getDefaultMiddleware({ serializableCheck: false })],
})

export type CalendarState = ReturnType<typeof store.getState>
