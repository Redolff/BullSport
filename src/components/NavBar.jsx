//import { Switch, Route, NavLink, Link, useRouteMatch, useParams, useHistory, useLocation } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom'
import '../style/navbar.css'
import Logo from './Logo'

const NavBar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <Logo />
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link 
                            className="nav-link active" 
                            aria-current="page"
                            to='/'>
                                Home
                        </Link > 
                        <Link  
                            className="nav-link active" 
                            aria-current="page" 
                            to='/paletas'>
                                Paletas
                        </Link >
                        <Link  
                            className="nav-link active" 
                            aria-current="page" 
                            to='/indumentaria'>
                                Indumentaria
                        </Link >
                        <Link  
                            className="nav-link active" 
                            aria-current="page" 
                            to='login'> 
                                Iniciar Sesion
                        </Link > 
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>

    );

}

export default NavBar;