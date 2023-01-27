import { useDispatch, useSelector } from "react-redux"
import { CountriesState, onToggleDarkMode } from "../store"

export const useTheme = () => {
     const { isDarkModeActive } = useSelector((state: CountriesState) => state.theme)
     const dispatch = useDispatch()

     const onChangeTheme = () => {
          dispatch(onToggleDarkMode())
     }

     return { isDarkModeActive, onChangeTheme }
}
