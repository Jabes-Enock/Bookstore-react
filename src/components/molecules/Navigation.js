import { NavLink } from 'react-router-dom'

import './navigation.css'
import    logo  from'../../assets/img/logo.svg'

const Navigation = () => {
  return (
    <header className='navigation'>
        <NavLink to='/'>
            <img src = { logo } alt="Ibook logo" />
        </NavLink>
        <NavLink to = '/' 
        className = {({isActive}) => ( isActive ? 'navigation-item link-active' : 'navigation-item') } >Home</NavLink>
        <NavLink  to = '/about' 
        className={({isActive}) => ( isActive ? 'navigation-item link-active' : 'navigation-item') } >Sobre</NavLink>
    </header>
  )
}

export default Navigation