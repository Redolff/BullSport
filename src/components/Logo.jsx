import logo from '../assets/logo.png'

const Logo = () => {

    return (
        <a href='http://127.0.0.1:5173/'>
            <img 
                src={logo} 
                alt="Logo"
                width={70}
                height={70}
            />
        </a>

    )

}

export default Logo