import '../style/navbar.css'
import Navs from './Navs'
import Logo from './Logo'

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <Logo />
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Navs 
                        href={'http://127.0.0.1:5173'}
                        titulo={'Home'}
                    /> 
                    <Navs 
                        href={'/paletas'}
                        titulo={'Paletas'}
                    /> 
                    <Navs 
                        href={'/indumentaria'}
                        titulo={'Indumentaria'}
                    /> 
                    <Navs 
                        href={'/zapatillas'}
                        titulo={'Zapatillas'}
                    /> 
                </div>
            </div>
        </nav>
    );

}

export default NavBar;