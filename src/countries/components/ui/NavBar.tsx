import IonIcon from "@reacticons/ionicons"
import { useNavigate } from "react-router-dom"
import { useTheme } from "../../../hooks"

export const NavBar = () => {
     const { onChangeTheme, isDarkModeActive } = useTheme()
     const navigate = useNavigate()

     const onHomeClick = ()=> {
          navigate('/')
     }
     return (
          <div className={`navbar-container ${isDarkModeActive ? "bright-dark" : ""}`}>
               <div className='inner-navbar'>
                    <h1 className='brand-title' onClick={onHomeClick}>Where in the world?</h1>
                    <div className={`mode-switch ${isDarkModeActive ? "m-d-dark" : ""}`} onClick={onChangeTheme}>
                         <IonIcon name='moon-outline' />
                         <h3 className='switch-title'>Dark Mode</h3>
                    </div>
               </div>
          </div>
     )
}
