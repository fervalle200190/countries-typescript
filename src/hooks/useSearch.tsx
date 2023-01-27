import { useDispatch, useSelector } from "react-redux"
import { countriesApi } from "../api"
import { CalendarState, onLoadCountries, onLoadList, onUpdateFilter, onUpdateSearch } from "../store"
import { Countries } from "../types"

export const useSearch = () => {
     const { searchInput, filterSelect, countriesRaw, countriesList } = useSelector(
          (state: CalendarState) => state.countries
     )
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

     return {
          searchInput,
          filterSelect,
          onInputChange,
          onFilterChange,
          startLoadingCountries,
          countriesRaw,
          countriesList
     }
}
