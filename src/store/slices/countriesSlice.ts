import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Countries } from "../../types"

export const enum Status {
     Loading = "loading",
     Loaded = "loaded",
}

type InitialState = {
     status: Status
     countriesRaw: Countries[]
     countriesList: Countries[]
     searchInput: string
     filterSelect: string
     activeCountry: Partial<Countries>
}

const initialState: InitialState = {
     status: Status.Loading,
     countriesRaw: [],
     countriesList: [],
     searchInput: "",
     filterSelect: "Filter by Region",
     activeCountry: {},
}

export const countriesSlice = createSlice({
     name: "countries",
     initialState,
     reducers: {
          onLoadCountries: (state, { payload }: PayloadAction<Countries[]>) => {
               state.countriesRaw = payload
               state.status = Status.Loaded
          },
          onUpdateSearch: (state, { payload }: PayloadAction<string>) => {
               const cleanString = payload.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

               state.filterSelect = "Filter by Region"
               state.searchInput = payload
               state.countriesList = state.countriesRaw
                    .filter((country) =>
                         country.name.common
                              .toLocaleLowerCase()
                              .includes(cleanString.toLocaleLowerCase())
                    )
                    .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
          },
          onUpdateFilter: (state, { payload }: PayloadAction<string>) => {
               state.searchInput = ""
               state.filterSelect = payload
               if (state.filterSelect === "Filter by Region") {
                    state.countriesList = state.countriesRaw.sort((a, b) =>
                         a.name.common > b.name.common ? 1 : -1
                    )
               } else {
                    state.countriesList = state.countriesRaw
                         .filter((country) => country.continents[0].toLocaleLowerCase().includes(payload.toLowerCase()))
                         .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
               }
          },
          onLoadList: (state, { payload }: PayloadAction<Countries[]>) => {
               state.countriesList = payload.sort((a, b) =>
                    a.name.common > b.name.common ? 1 : -1
               )
          },
          onSetActiveCountry: (state, {payload}: PayloadAction<string>)=>{
               const country = state.countriesRaw.find((country)=> country.name.common === payload)
               if(country) {
                    state.activeCountry = country
               }
          }
     },
})

// Action creators are generated for each case reducer function
export const { 
     onLoadCountries, 
     onUpdateSearch, 
     onUpdateFilter, 
     onLoadList, 
     onSetActiveCountry 
} = countriesSlice.actions
