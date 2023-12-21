import '../style/form.css'
import FormRegistro from './FormRegistro'
import FormLogin from './FormLogin'

const Login = ({ isAuthenticated, login, logout }) => {

    return (        
        <div className="container">
            <FormLogin 
                login={login}
                logout={logout}
            />
        </div>
    )
}

export default Login