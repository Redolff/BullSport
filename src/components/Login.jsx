import '../style/form.css'
import FormRegistro from './FormRegistro'
import FormLogin from './FormLogin'

const Login = ({ isAuthenticated, login, logout }) => {

    return (        
        <div className="container">
            {isAuthenticated 
                ? <FormLogin 
                    login={login}
                    logout={logout}
                />
                : <FormRegistro 
                    login={login}
                    logout={logout}
                />
            }
        </div>
    )
}

export default Login