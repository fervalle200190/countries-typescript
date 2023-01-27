import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Countries } from "../../types"

const enum Status {
     Loading = "loading",
     Loaded = "loaded",
}

interface InitialState {
     status: Status
     countriesRaw: Countries[]
     countriesList: Countries[]
     searchInput: string
     filterSelect: string
}

const initialState: InitialState = {
     status: Status.Loading,
     countriesRaw: [],
     countriesList: [],
     searchInput: "",
     filterSelect: "Filter by Region",
}

export const countriesSlice = createSlice({
     name: "countries",
     initialState,
     reducers: {
          onLoadCountries: (state, { payload }: PayloadAction<Countries[]>) => {
               state.countriesRaw = payload
          },
          onUpdateSearch: (state, { payload }: PayloadAction<string>) => {
               state.filterSelect = "Filter by Region"
               state.searchInput = payload
               state.countriesList = state.countriesRaw
                    .filter((country) =>
                         country.name.common
                              .toLocaleLowerCase()
                              .includes(payload.toLocaleLowerCase())
                    )
                    .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
          },
          onUpdateFilter: (state, { payload }: PayloadAction<string>) => {
               state.searchInput = ""
               state.filterSelect = payload
          },
          onLoadList: (state, { payload }: PayloadAction<Countries[]>) => {
               state.countriesList = payload.sort((a, b) =>
                    a.name.common > b.name.common ? 1 : -1
               )
          },
     },
})

// Action creators are generated for each case reducer function
export const { onLoadCountries, onUpdateSearch, onUpdateFilter, onLoadList } =
     countriesSlice.actions
