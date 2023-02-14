import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { countriesApi } from "../api"
import {
     CountriesState,
     onLoadCountries,
     onLoadList,
     onSetActiveCountry,
     onUpdateFilter,
     onUpdateSearch,
} from "../store"
import { Countries } from "../types"

export const useSearch = () => {
     const { searchInput, filterSelect, countriesRaw, countriesList, status, activeCountry } =
          useSelector((state: CountriesState) => state.countries)
     const dispatch = useDispatch()

     const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(onUpdateSearch(e.target.value))
     }

     const onFilterChange = (continent: string) => {
          dispatch(onUpdateFilter(continent))
     }

     const startLoadingCountries = async () => {
          try {
               const { data } = await countriesApi.get<Countries[]>(`/all`)
               dispatch(onLoadList(data))
               dispatch(onLoadCountries(data))
          } catch (error) {
               console.log(error)
          }
     }

     const getCountry = (name: string) => {
          dispatch(onSetActiveCountry(name))
     }

     return {
          searchInput,
          filterSelect,
          onInputChange,
          onFilterChange,
          startLoadingCountries,
          countriesRaw,
          countriesList,
          status,
          getCountry,
          activeCountry,
     }
}
