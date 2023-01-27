import { useSearch } from "../../hooks"
import { CountryList } from "./"

export const CountriesWrapper = () => {
     const { countriesList } = useSearch()
     return (
          <div className="country-list-container">
               <CountryList countriesList={countriesList} />
          </div>
     )
}
