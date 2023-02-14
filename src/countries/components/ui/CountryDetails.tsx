import { Countries } from "../../../types"
import { FC } from "react"
import { getNativeName, getPopulation, getCurrencies, getLanguages } from "../../../helpers"

interface Props {
     activeCountry: Partial<Countries>
}

export const CountryDetails: FC<Props> = ({ activeCountry }) => {
     return (
          <>
               <h3 className='country-name-h3'>{activeCountry.name?.common}</h3>
               <div className='detailed-country'>
                    <ul className='ul-details ul-1'>
                         <li>
                              <>
                                   <b>Native name:</b> {getNativeName(activeCountry.name)}
                              </>
                         </li>
                         <li>
                              <>
                                   <b>Population:</b> {getPopulation(activeCountry.population)}
                              </>
                         </li>
                         <li>
                              <>
                                   <b>Region:</b> {activeCountry.region}
                              </>
                         </li>
                         <li>
                              <>
                                   <b>Sub Region:</b> {activeCountry.subregion}
                              </>
                         </li>
                         <li>
                              <>
                                   <b>Capital:</b> {activeCountry.capital}
                              </>
                         </li>
                    </ul>
                    <ul className='ul-details ul-2'>
                         <li>
                              <>
                                   <b>Top Level Domain:</b>{" "}
                                   {activeCountry.tld?.toString() || "No info"}
                              </>
                         </li>
                         <li>
                              <>
                                   <b>Currencies:</b> {getCurrencies(activeCountry.currencies)}
                              </>
                         </li>
                         <li>
                              <>
                                   <b>Languages:</b> {getLanguages(activeCountry.languages)}
                              </>
                         </li>
                    </ul>
               </div>
          </>
     )
}
