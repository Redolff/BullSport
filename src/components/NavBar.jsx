//import { Switch, Route, NavLink, Link, useRouteMatch, useParams, useHistory, useLocation } from 'react-router-dom'
import { NavLink, Outlet } from 'react-router-dom'
import '../style/navbar.css'
import Logo from './Logo'

const NavBar = ({ isActive }) => {

    //isActive
    //recibe como parametro location y match el NavLink

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <Logo />
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink 
                            className="nav-link active" 
                            aria-current="page"
                            to='/'>
                                Home
                        </NavLink> 
                        <NavLink  
                            className="nav-link active" 
                            aria-current="page" 
                            to='/paletas'>
                                Paletas
                        </NavLink>
                        <NavLink  
                            className="nav-link active" 
                            aria-current="page" 
                            to='/indumentaria'>
                                Indumentaria
                        </NavLink>
                        <NavLink  
                            className="nav-link active" 
                            aria-current="page" 
                            to='login'> 
                                {isActive 
                                    ? "Iniciar sesion"
                                    : "Registrarse"
                                }
                        </NavLink> 
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>

    );

}

export default NavBar;