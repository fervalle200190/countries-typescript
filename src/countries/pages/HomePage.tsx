import { useTheme } from "../../hooks"
import { CountriesWrapper, SearchBar } from "../components"

export const HomePage = () => {
     const { isDarkModeActive } = useTheme()
     return (
          <div className={`home-down ${isDarkModeActive ? "darker-dark" : ""}`}>
               <SearchBar />
               <CountriesWrapper />
          </div>
     )
}
