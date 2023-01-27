import { Routes, Route } from "react-router-dom"
import { CountryPage, HomePage, NavBar } from "../countries"

export const CountriesRouter = () => {
     return (
          <>
               <NavBar />
               <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/country/:id' element={<CountryPage />} />
               </Routes>
          </>
     )
}
