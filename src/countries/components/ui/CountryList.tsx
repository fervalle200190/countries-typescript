import { FC } from "react"
import { Countries } from "../../../types"
import { CountryCard } from "./CountryCard"

interface CountriesList {
     countriesList: Countries[]
}

export const CountryList: FC<CountriesList> = ({ countriesList }) => {
     return (
          <>
               {countriesList.map((country) => (
                    <CountryCard key={country.name.common} country={country} />
               ))}
          </>
     )
}
