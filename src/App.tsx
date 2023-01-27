import { useEffect } from "react"
import { useSearch } from "./hooks"
import { CountriesRouter } from "./routes"

function App() {
     const { startLoadingCountries } = useSearch()

     useEffect(() => {
          startLoadingCountries()
     }, [])

     return (
          <>
               <CountriesRouter />
          </>
     )
}

export default App
