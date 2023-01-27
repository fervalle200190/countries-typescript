import { FC } from "react"
import { useTheme } from "../../../hooks"
import { Countries } from "../../../types"

interface Country {
     country: Countries
}

const getPopulation = (population: number) => {
     return new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 }).format(population)
}

export const CountryCard: FC<Country> = ({ country }) => {
     const { isDarkModeActive } = useTheme()
     return (
          <div key={country.name.common} className={`book-card-container ${isDarkModeActive? 'bright-dark': ''}`}>
               <div className="country-card-img-container">
                    <img src={country.flags.svg} alt={country.name.common} className={'country-card-img'} />
               </div>
               <div className="country-info">
                    <h3 className="card-title">{country.name.common}</h3>
                    <p className="p-card"><b>Population:</b> {getPopulation(country.population)}</p>
                    <p className="p-card"><b>Region:</b> {country.region}</p>
                    <p className="p-card"><b>Capital:</b> {country.capital}</p>
               </div>
          </div>
     )
}
