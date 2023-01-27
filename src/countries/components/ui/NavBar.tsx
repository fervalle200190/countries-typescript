import IonIcon from "@reacticons/ionicons"
import { useTheme } from "../../../hooks"

export const NavBar = () => {
     const { onChangeTheme, isDarkModeActive } = useTheme()
     return (
          <div className={`navbar-container ${isDarkModeActive ? "bright-dark" : ""}`}>
               <div className='inner-navbar'>
                    <h1 className='brand-title'>Where in the world?</h1>
                    <div className='mode-switch' onClick={onChangeTheme}>
                         <IonIcon name='moon-outline' />
                         <h3 className='switch-title'>Dark Mode</h3>
                    </div>
               </div>
          </div>
     )
}
