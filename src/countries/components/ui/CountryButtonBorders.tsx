import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useSearch, useTheme } from "../../../hooks"

export const CountryButtonBorders = () => {
     const { activeCountry, countriesRaw } = useSearch()
     const { isDarkModeActive } = useTheme()

     const [borders, setBorders] = useState<string[]>([])

     const updateBorders = (borders: string[] | undefined) => {
          if (!borders) return
          const filterCountries = countriesRaw.filter((country) => borders.includes(country.cca3))
          setBorders(filterCountries.map((country) => country.name.common))
     }
     useEffect(() => {
          updateBorders(activeCountry.borders)
     }, [activeCountry.borders])

     return (
          <div className='buttons-container'>
               <p>
                    <b>Border Countries:</b>
               </p>
               <div className='border-btns'>
                    {borders.map((country) => (
                         <Link to={`/country/${country}`} key={country}>
                              <button
                                   className={`btn-borders ${isDarkModeActive ? "btn-dark" : ""}`}
                                   key={country}
                              >
                                   {country}
                              </button>
                         </Link>
                    ))}
               </div>
          </div>
     )
}
