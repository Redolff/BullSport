import '../style/form.css'
import FormRegistro from './FormRegistro'
import FormLogin from './FormLogin'

const Login = ({ /* isActive */ isAuthenticated, login, logout }) => {

    //logica del usuario, si esta registrado se muestra form de registro, si no se inicia sesion

    return (        
        <div className="container">
            {//isActive
                isAuthenticated 
                ? <FormLogin />
                : <FormRegistro />
            }
        </div>
    )
}

export default Login