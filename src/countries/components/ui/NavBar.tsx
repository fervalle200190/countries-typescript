import IonIcon from "@reacticons/ionicons"

export const NavBar = () => {
     return (
          <div className='navbar-container'>
               <div className='inner-navbar'>
                    <h1 className="brand-title">Where in the world?</h1>
                    <div className='mode-switch'>
                         <IonIcon name='moon-outline' />
                         <h3 className='switch-title'>Dark Mode</h3>
                    </div>
               </div>
          </div>
     )
}
