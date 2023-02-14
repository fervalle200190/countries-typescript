import IonIcon from "@reacticons/ionicons"
import { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useSearch, useTheme } from "../../hooks"
import { CountryDetails, CountryButtonBorders } from "../"

type Params = {
     name: string
}

export const CountryPage = () => {
     const { name } = useParams<Params>()
     const { activeCountry, getCountry, countriesRaw } = useSearch()
     const { isDarkModeActive } = useTheme()
     const navigate = useNavigate()

     useEffect(() => {
          getCountry(name || "")
     }, [countriesRaw, name])

     const existCountry = Object.keys(activeCountry).length > 0 ? true : false

     if (!existCountry) return "Loading"

     const onBackButtonClick = () => {
          navigate("/")
     }

     return (
          <div className={`country-page-container ${isDarkModeActive? 'bg-c-d': ''}`}>
               <div className={`back-btn ${isDarkModeActive? 'btn-dark': ''}`} onClick={onBackButtonClick}>
                    <IonIcon name='arrow-back' />
                    Back
               </div>
               <div className="country-data">
                    <div className='image-page-details'>
                         <img src={activeCountry.flags?.svg} alt={activeCountry.name?.common} />
                    </div>
                    <div className="big-details-container">
                         <CountryDetails activeCountry={activeCountry} />
                         <CountryButtonBorders />
                    </div>
               </div>
          </div>
     )
}
