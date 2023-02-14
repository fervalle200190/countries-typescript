import IonIcon from "@reacticons/ionicons"
import { useEffect, useRef, useState } from "react"
import { useSearch, useTheme } from "../../../hooks"

const continents: string[] = ["Africa", "America", "Asia", "Europe", "Oceania"]

export const FilterCountry = () => {
     const { filterSelect, onFilterChange } = useSearch()
     const { isDarkModeActive } = useTheme()
     const filter = useRef(null)
     const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)

     const onToggleFilter = (continent?: string) => {
          if (continent) {
               onFilterChange(continent)
          }
          setIsFilterOpen(!isFilterOpen)
     }

     const onHTMLClick = (e: MouseEvent) => {
          const target = e.target as HTMLElement
          if (target.contains(filter.current) || target === filter.current) {
               setIsFilterOpen(false)
          }
     }

     useEffect(() => {
          document.addEventListener("click", onHTMLClick)
          return () => document.removeEventListener("click", onHTMLClick)
     }, [])

     return (
          <div className='filter-container' ref={filter}>
               <div
                    className={`filter-title-container ${isDarkModeActive ? "f-t-c" : ""}`}
                    onClick={() => onToggleFilter()}
               >
                    <span className={`filter-title ${isDarkModeActive ? "f-t-dark " : ""}`}>
                         {filterSelect}
                    </span>
                    <IonIcon
                         name='chevron-down-sharp'
                         className={`chevron-arrow ${isFilterOpen ? "rotate-arrow" : ""}`}
                    />
               </div>
               <div
                    className={`filter-list ${isFilterOpen ? "show-filter" : ""} ${
                         isDarkModeActive ? "bright-dark" : ""
                    }`}
               >
                    {continents.map((continent) => (
                         <div
                              key={continent}
                              className='filter-item'
                              onClick={() => onToggleFilter(continent)}
                         >
                              {continent}
                         </div>
                    ))}
               </div>
          </div>
     )
}
