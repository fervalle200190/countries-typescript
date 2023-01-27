import { FC } from "react"
import IonIcon from "@reacticons/ionicons"
import { useSearch } from "../../../hooks"

export const InputBar: FC = () => {
     const { onInputChange, searchInput } = useSearch()
     return (
          <div className='input-container'>
               <IonIcon name='search-sharp' className='search-icon' />
               <input
                    type='text'
                    className='search-input'
                    placeholder='Search for a country'
                    value={searchInput}
                    onChange={onInputChange}
               />
          </div>
     )
}
