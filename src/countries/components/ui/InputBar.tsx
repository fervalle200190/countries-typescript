import { FC } from "react"
import IonIcon from "@reacticons/ionicons"
import { useSearch, useTheme } from "../../../hooks"

export const InputBar: FC = () => {
     const { onInputChange, searchInput } = useSearch()
     const { isDarkModeActive } = useTheme()
     return (
          <div className={`input-container ${isDarkModeActive ? "i-b-dark" : ""}`}>
               <IonIcon name='search-sharp' className='search-icon' />
               <input
                    type='text'
                    className={`search-input ${isDarkModeActive ? "bright-dark" : ""}`}
                    placeholder='Search for a country'
                    value={searchInput}
                    onChange={onInputChange}
               />
          </div>
     )
}
