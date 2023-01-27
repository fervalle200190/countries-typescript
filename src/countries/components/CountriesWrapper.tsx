import { useSearch } from "../../hooks"
import { CountryList, Loader } from "./"
import { Status } from "../../store"

export const CountriesWrapper = () => {
     const { countriesList, status, searchInput } = useSearch()

     const isLonger = countriesList.length > 0
     return (
          <div className='country-list-container'>
               {status === Status.Loading ? (
                    <Loader />
               ) : isLonger ? (
                    <CountryList countriesList={countriesList} />
               ) : (
                    <h1>{searchInput.slice(0,10)} no existe</h1>
               )}
          </div>
     )
}